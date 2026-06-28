import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import { promisify } from "node:util";
import { createClient } from "@supabase/supabase-js";

const execFileAsync = promisify(execFile);
const REPORT_PATH = "reports/failed-sites-analysis-2026-06-28.md";

function parseEnv(content) {
  return Object.fromEntries(
    content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1).replace(/^['"]|['"]$/g, "")];
      })
  );
}

function uniqueBySite(runs) {
  const map = new Map();
  for (const run of runs) {
    if (run.site_id && !map.has(run.site_id)) {
      map.set(run.site_id, run);
    }
  }
  return [...map.values()];
}

function urlVariants(rawUrl) {
  const variants = new Set([rawUrl]);

  try {
    const url = new URL(rawUrl);
    const swapped = new URL(rawUrl);
    swapped.protocol = url.protocol === "https:" ? "http:" : "https:";
    variants.add(swapped.toString());

    const home = new URL(rawUrl);
    home.pathname = "/";
    home.search = "";
    home.hash = "";
    variants.add(home.toString());

    const swappedHome = new URL(home.toString());
    swappedHome.protocol = home.protocol === "https:" ? "http:" : "https:";
    variants.add(swappedHome.toString());
  } catch {
    // Keep only the original URL.
  }

  return [...variants];
}

async function curlCheck(url) {
  const args = [
    "-k",
    "-L",
    "--max-time",
    "15",
    "--connect-timeout",
    "8",
    "-A",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 KivelPlanet/0.1",
    "-o",
    "/dev/null",
    "-sS",
    "-w",
    "%{http_code}\\t%{url_effective}\\t%{content_type}",
    url
  ];

  try {
    const { stdout } = await execFileAsync("curl", args, { timeout: 20000 });
    const [status, effectiveUrl, contentType] = stdout.trim().split("\t");
    return { url, ok: true, status, effectiveUrl, contentType };
  } catch (error) {
    return {
      url,
      ok: false,
      status: "ERR",
      effectiveUrl: "",
      contentType: "",
      error: String(error.stderr || error.message).trim().slice(0, 240)
    };
  }
}

function classify(originalMessage, checks) {
  const reachableOriginal = checks[0]?.ok && checks[0]?.status?.startsWith("2");
  const reachableVariant = checks.some((check, index) => index > 0 && check.ok && check.status.startsWith("2"));
  const blocked = checks.some((check) => check.status === "403");
  const missing = checks[0]?.status === "404";
  const hostReachable = checks.slice(2).some((check) => check.ok && check.status.startsWith("2"));

  if (reachableOriginal) return "현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검";
  if (reachableVariant) return "URL 변형으로 접속 가능. URL 업데이트 후보";
  if (blocked) return "403 차단. 브라우저 기반 수집 또는 기관별 허용 필요";
  if (missing && hostReachable) return "게시판 경로 변경. 홈에서 새 게시판 URL 탐색 필요";
  if (missing) return "404. 사이트 또는 게시판 이전 가능성";
  if (originalMessage.includes("fetch failed")) return "네트워크/TLS/비표준 포트 실패";
  return "기타";
}

function recommendation(classification) {
  if (classification.includes("URL 변형")) {
    return "200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.";
  }
  if (classification.includes("게시판 경로 변경")) {
    return "홈페이지는 살아 있으므로 공지/프로그램/이용자 모집 메뉴의 새 URL을 찾아 교체합니다.";
  }
  if (classification.includes("403")) {
    return "일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.";
  }
  if (classification.includes("접속 가능")) {
    return "현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.";
  }
  if (classification.includes("TLS")) {
    return "비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.";
  }
  return "수동 확인이 필요합니다.";
}

async function main() {
  const env = parseEnv(await fs.readFile(".env.local", "utf8"));
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
  const { data, error } = await supabase
    .from("scrape_runs")
    .select("*, sites(*)")
    .eq("status", "failed")
    .order("created_at", { ascending: false })
    .limit(300);

  if (error) throw error;

  const runs = uniqueBySite(data ?? []);
  const rows = [];

  for (const run of runs) {
    const site = run.sites;
    if (!site) continue;

    const checks = [];
    for (const variant of urlVariants(site.homepage_url)) {
      checks.push(await curlCheck(variant));
    }

    const classification = classify(run.message, checks);
    rows.push({ run, site, checks, classification, recommendation: recommendation(classification) });
    console.log(`[${rows.length}/${runs.length}] ${site.name}: ${classification}`);
  }

  const grouped = rows.reduce((acc, row) => {
    acc[row.classification] = (acc[row.classification] ?? 0) + 1;
    return acc;
  }, {});

  const lines = [
    "# Failed Site Analysis",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    ...Object.entries(grouped).map(([name, count]) => `- ${name}: ${count}`),
    "",
    "## Sites",
    ""
  ];

  for (const row of rows) {
    lines.push(`### ${row.site.name}`);
    lines.push("");
    lines.push(`- 원래 오류: ${row.run.message}`);
    lines.push(`- 분류: ${row.classification}`);
    lines.push(`- 해결방법: ${row.recommendation}`);
    lines.push(`- 현재 설정: depth1=${row.site.selector_depth1 || "-"}, depth2=${row.site.selector_depth2 || "-"}, href=${row.site.href_index}`);
    lines.push("");
    lines.push("| URL | 상태 | 최종 URL | 타입 |");
    lines.push("| --- | --- | --- | --- |");
    for (const check of row.checks) {
      lines.push(
        `| ${check.url.replaceAll("|", "%7C")} | ${check.status}${check.ok ? "" : ` (${check.error || "error"})`} | ${check.effectiveUrl || "-"} | ${check.contentType || "-"} |`
      );
    }
    lines.push("");
  }

  await fs.writeFile(REPORT_PATH, `${lines.join("\n")}\n`);
  console.log(`Wrote ${REPORT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
