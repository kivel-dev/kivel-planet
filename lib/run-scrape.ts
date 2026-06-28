import { createServiceSupabase } from "@/lib/supabase-server";
import { scrapeSite } from "@/lib/scraper";
import type { Site } from "@/types/database";

export async function runScrapeForSite(siteId: string) {
  const supabase = createServiceSupabase();
  const { data: site, error: siteError } = await supabase
    .from("sites")
    .select("*")
    .eq("id", siteId)
    .single();

  if (siteError || !site) {
    throw new Error("site not found");
  }

  try {
    const scrapedPrograms = await scrapeSite(site as Site);
    const uniquePrograms = Array.from(
      new Map(scrapedPrograms.map((program) => [program.sourceUrl, program])).values()
    );
    const sourceUrls = uniquePrograms.map((program) => program.sourceUrl);
    let insertedCount = 0;
    let updatedCount = 0;

    if (sourceUrls.length > 0) {
      const { data: existingRows, error: existingError } = await supabase
        .from("programs")
        .select("source_url")
        .eq("site_id", site.id)
        .in("source_url", sourceUrls);

      if (existingError) {
        throw existingError;
      }

      const existingUrls = new Set((existingRows ?? []).map((row) => row.source_url));
      insertedCount = uniquePrograms.filter((program) => !existingUrls.has(program.sourceUrl)).length;
      updatedCount = uniquePrograms.length - insertedCount;
    }

    for (const program of uniquePrograms) {
      const { error } = await supabase.from("programs").upsert(
        {
          site_id: site.id,
          title: program.title,
          source_url: program.sourceUrl,
          region: site.region,
          center_type: site.center_type,
          last_seen_at: new Date().toISOString()
        },
        { onConflict: "site_id,source_url", ignoreDuplicates: false }
      );

      if (error) {
        throw error;
      }
    }

    await supabase.from("scrape_runs").insert({
      site_id: site.id,
      status: "success",
      total_count: uniquePrograms.length,
      inserted_count: insertedCount,
      updated_count: updatedCount
    });

    return {
      totalCount: uniquePrograms.length,
      insertedCount,
      updatedCount
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";

    await supabase.from("scrape_runs").insert({
      site_id: site.id,
      status: "failed",
      message
    });

    throw error;
  }
}
