import * as cheerio from "cheerio";
import type { Site } from "@/types/database";

export type ScrapedProgram = {
  title: string;
  sourceUrl: string;
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

export async function scrapeSite(site: Site): Promise<ScrapedProgram[]> {
  const response = await fetch(site.homepage_url, {
    redirect: "follow",
    headers: {
      "user-agent": "Mozilla/5.0 ChildProgramPlatform/0.1"
    }
  });

  if (!response.ok) {
    throw new Error(`사이트 요청 실패: ${response.status}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);
  const depth1 = splitSelector(site.selector_depth1);
  const depth2 = site.selector_depth2.trim() ? splitSelector(site.selector_depth2) : "";
  const programs: ScrapedProgram[] = [];

  $(depth1).each((_, container) => {
    const candidates = depth2 ? $(container).find(depth2).toArray() : [container];

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
        programs.push({
          title,
          sourceUrl: normalizeUrl(site.homepage_url, href)
        });
      }
    });
  });

  return programs;
}
