import { execFile } from "node:child_process";
import { promisify } from "node:util";
import * as cheerio from "cheerio";
import type { Site } from "@/types/database";

const execFileAsync = promisify(execFile);

export type ScrapedProgram = {
  title: string;
  sourceUrl: string;
  imageUrl: string | null;
};

type HtmlResponse = {
  html: string;
  baseUrl: string;
};

function splitSelector(selector: string) {
  const [tag, className] = selector.split(",").map((part) => part.trim()).filter(Boolean);
  if (!tag) {
    throw new Error("수집 선택자가 비어 있습니다.");
  }
  return className ? `${tag}.${className.split(/\s+/).join(".")}` : tag;
}

function shouldInclude(title: string, keywords: string[]) {
  return keywords.length === 0 || keywords.some((keyword) => title.includes(keyword));
}

function shouldExclude(title: string, keywords: string[]) {
  return keywords.some((keyword) => title.includes(keyword));
}

function normalizeUrl(baseUrl: string, href: string) {
  return new URL(href.replace("¤t", "&current"), baseUrl).toString();
}

async function fetchWithCurl(url: string): Promise<HtmlResponse | null> {
  try {
    const { stdout } = await execFileAsync(
      "curl",
      [
        "-k",
        "-L",
        "--max-time",
        "20",
        "--connect-timeout",
        "8",
        "-A",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 KivelPlanet/0.1",
        "-H",
        "Accept: text/html,application/xhtml+xml",
        "-w",
        "\\n__KIVEL_STATUS__%{http_code}\\n__KIVEL_EFFECTIVE_URL__%{url_effective}",
        url
      ],
      {
        maxBuffer: 8 * 1024 * 1024,
        timeout: 25000
      }
    );
    const statusMarker = "\n__KIVEL_STATUS__";
    const urlMarker = "\n__KIVEL_EFFECTIVE_URL__";
    const statusIndex = stdout.lastIndexOf(statusMarker);
    const urlIndex = stdout.lastIndexOf(urlMarker);

    if (statusIndex === -1 || urlIndex === -1) {
      return { html: stdout, baseUrl: url };
    }

    const status = stdout.slice(statusIndex + statusMarker.length, urlIndex).trim();
    if (!status.startsWith("2")) {
      return null;
    }

    return {
      html: stdout.slice(0, statusIndex),
      baseUrl: stdout.slice(urlIndex + urlMarker.length).trim() || url
    };
  } catch {
    return null;
  }
}

async function fetchHtml(url: string): Promise<HtmlResponse> {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
      headers: {
        "user-agent": "Mozilla/5.0 KivelPlanet/0.1",
        accept: "text/html,application/xhtml+xml"
      }
    });

    if (response.ok) {
      return { html: await response.text(), baseUrl: response.url || url };
    }

    const fallback = await fetchWithCurl(url);
    if (fallback) {
      return fallback;
    }

    throw new Error(`사이트 요청 실패: ${response.status}`);
  } catch (error) {
    const fallback = await fetchWithCurl(url);
    if (fallback) {
      return fallback;
    }

    if (error instanceof Error && error.message.startsWith("사이트 요청 실패")) {
      throw error;
    }

    throw new Error("fetch failed");
  }
}

function isLikelyDecorativeImage(url: string) {
  const lower = url.toLowerCase();
  return [
    "logo",
    "common",
    "icon",
    "favicon",
    "banner",
    "btn_",
    "bullet",
    "home.",
    "home_",
    "home-btn",
    "home_btn",
    "titlebar",
    "/theme/",
    "/main/",
    "og_image",
    "touch"
  ].some((pattern) => lower.includes(pattern));
}

function normalizeImageUrl(baseUrl: string, src: string) {
  if (!src || src.startsWith("data:")) {
    return null;
  }

  try {
    const imageUrl = normalizeUrl(baseUrl, src);
    return isLikelyDecorativeImage(imageUrl) ? null : imageUrl;
  } catch {
    return null;
  }
}

function firstImageUrl($: cheerio.CheerioAPI, baseUrl: string, element: Parameters<cheerio.CheerioAPI>[0]) {
  const images = $(element).find("img").toArray();

  for (const image of images) {
    const src =
      $(image).attr("src") ??
      $(image).attr("data-src") ??
      $(image).attr("data-original") ??
      $(image).attr("data-lazy-src") ??
      "";
    const imageUrl = normalizeImageUrl(baseUrl, src);
    if (imageUrl) {
      return imageUrl;
    }
  }

  return null;
}

function metaImageUrl($: cheerio.CheerioAPI, baseUrl: string) {
  const src =
    $('meta[property="og:image"]').attr("content") ??
    $('meta[name="twitter:image"]').attr("content") ??
    "";

  return normalizeImageUrl(baseUrl, src);
}

async function fetchDetailImage(sourceUrl: string) {
  try {
    const { html, baseUrl } = await fetchHtml(sourceUrl);
    const $ = cheerio.load(html);
    const contentSelectors = [
      "#bo_v_con",
      ".bo_v_con",
      ".view_content",
      ".view-content",
      ".board_view",
      ".board-view",
      ".bbs_view",
      ".bbs-view",
      ".post-content",
      ".entry-content",
      "article"
    ];

    for (const selector of contentSelectors) {
      const content = $(selector).first();
      if (content.length > 0) {
        const imageUrl = firstImageUrl($, baseUrl, content[0]);
        if (imageUrl) {
          return imageUrl;
        }
      }
    }

    return metaImageUrl($, baseUrl);
  } catch {
    return null;
  }
}

function extractPrograms(
  $: cheerio.CheerioAPI,
  baseUrl: string,
  site: Site,
  depth1: string,
  depth2 = ""
) {
  const depth1Selector = splitSelector(depth1);
  const depth2Selector = depth2.trim() ? splitSelector(depth2) : "";
  const programs: ScrapedProgram[] = [];

  $(depth1Selector).each((_, container) => {
    const candidates = depth2Selector ? $(container).find(depth2Selector).toArray() : [container];

    candidates.forEach((candidate) => {
      const title = $(candidate).text().replace(/\s+/g, " ").trim();
      if (!title || !shouldInclude(title, site.include_keywords) || shouldExclude(title, site.exclude_keywords)) {
        return;
      }

      const links = $(candidate).find("a").toArray();
      const fallbackLinks = $(container).find("a").toArray();
      const linkPool = links.length > 0 ? links : fallbackLinks;
      const linkIndex = site.href_index > 0 ? site.href_index - 1 : 0;
      const href = $(linkPool[linkIndex]).attr("href");

      if (href) {
        const sourceUrl = normalizeUrl(baseUrl, href);
        programs.push({
          title,
          sourceUrl,
          imageUrl: firstImageUrl($, baseUrl, candidate) ?? firstImageUrl($, baseUrl, container)
        });
      }
    });
  });

  return programs;
}

export async function scrapeSite(site: Site): Promise<ScrapedProgram[]> {
  const { html, baseUrl } = await fetchHtml(site.homepage_url);
  const $ = cheerio.load(html);
  let programs = extractPrograms($, baseUrl, site, site.selector_depth1, site.selector_depth2);

  if (programs.length === 0) {
    const fallbackSelectors = [
      "td,td_subject",
      "td,subject",
      "td,title",
      "div,bo_tit",
      "div,title",
      "div,wr-subject",
      "li,bo_notice",
      "li,post-item",
      "tr"
    ];

    for (const selector of fallbackSelectors) {
      programs = extractPrograms($, baseUrl, site, selector);
      if (programs.length > 0) {
        break;
      }
    }
  }

  return Promise.all(
    programs.map(async (program) => ({
      ...program,
      imageUrl: program.imageUrl ?? (await fetchDetailImage(program.sourceUrl))
    }))
  );
}
