import { NextResponse } from "next/server";
import { runScrapeForSite } from "@/lib/run-scrape";

export const runtime = "nodejs";

export async function POST(
  request: Request,
  { params }: { params: { siteId: string } }
) {
  const secret = process.env.SCRAPER_SECRET;
  const requestSecret = request.headers.get("x-scraper-secret");

  if (secret && requestSecret !== secret) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    return NextResponse.json(await runScrapeForSite(params.siteId));
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
