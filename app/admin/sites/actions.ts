"use server";

import { revalidatePath } from "next/cache";
import { runScrapeForSite } from "@/lib/run-scrape";
import { createServiceSupabase } from "@/lib/supabase-server";

function keywords(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function createSite(formData: FormData) {
  const supabase = createServiceSupabase();
  const { error } = await supabase.from("sites").insert({
    name: String(formData.get("name") ?? ""),
    homepage_url: String(formData.get("homepage_url") ?? ""),
    region: String(formData.get("region") ?? ""),
    center_type: String(formData.get("center_type") ?? ""),
    selector_depth1: String(formData.get("selector_depth1") ?? ""),
    selector_depth2: String(formData.get("selector_depth2") ?? ""),
    href_index: Number(formData.get("href_index") ?? -1),
    include_keywords: keywords(formData.get("include_keywords")),
    exclude_keywords: keywords(formData.get("exclude_keywords"))
  });

  if (error) {
    throw error;
  }

  revalidatePath("/admin/sites");
}

export async function scrapeSiteNow(formData: FormData) {
  const siteId = String(formData.get("site_id") ?? "");

  if (!siteId) {
    throw new Error("기관 정보가 없습니다.");
  }

  await runScrapeForSite(siteId);
  revalidatePath("/admin/programs");
  revalidatePath("/admin/sites");
}
