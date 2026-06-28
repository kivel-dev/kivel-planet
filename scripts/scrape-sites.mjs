import { createClient } from "@supabase/supabase-js";

function parseEnv(content) {
  return Object.fromEntries(
    content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        const key = line.slice(0, index);
        const value = line.slice(index + 1).replace(/^['"]|['"]$/g, "");
        return [key, value];
      })
  );
}

async function main() {
  const fs = await import("node:fs/promises");
  const env = parseEnv(await fs.readFile(".env.local", "utf8"));
  const appUrl = process.env.KIVEL_APP_URL ?? "http://localhost:3000";
  const limit = Number.parseInt(process.argv[2] ?? "", 10);
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: sites, error } = await supabase
    .from("sites")
    .select("id,name")
    .eq("is_active", true)
    .order("name");

  if (error) {
    throw error;
  }

  const targetSites = Number.isFinite(limit) ? sites.slice(0, limit) : sites;
  let success = 0;
  let failed = 0;
  let totalCount = 0;
  let insertedCount = 0;
  let updatedCount = 0;

  for (const site of targetSites) {
    try {
      const response = await fetch(`${appUrl}/api/scrape/${site.id}`, {
        method: "POST",
        headers: env.SCRAPER_SECRET ? { "x-scraper-secret": env.SCRAPER_SECRET } : {}
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? `HTTP ${response.status}`);
      }

      success += 1;
      totalCount += result.totalCount;
      insertedCount += result.insertedCount;
      updatedCount += result.updatedCount;
      console.log(
        `[ok] ${site.name}: total=${result.totalCount}, inserted=${result.insertedCount}, updated=${result.updatedCount}`
      );
    } catch (error) {
      failed += 1;
      console.error(`[failed] ${site.name}: ${error.message}`);
    }
  }

  console.log(
    JSON.stringify(
      {
        sites: targetSites.length,
        success,
        failed,
        totalCount,
        insertedCount,
        updatedCount
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
