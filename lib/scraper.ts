import * as cheerio from "cheerio";
import type { Site } from "@/types/database";

export type ScrapedProgram = {
  title: string;
  sourceUrl: string;
  imageUrl: string | null;
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
    const response = await fetch(sourceUrl, {
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
      headers: {
        "user-agent": "Mozilla/5.0 KivelPlanet/0.1",
        accept: "text/html,application/xhtml+xml"
      }
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
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
        const imageUrl = firstImageUrl($, sourceUrl, content[0]);
        if (imageUrl) {
          return imageUrl;
        }
      }
    }

    return metaImageUrl($, sourceUrl);
  } catch {
    return null;
  }
}

export async function scrapeSite(site: Site): Promise<ScrapedProgram[]> {
  const response = await fetch(site.homepage_url, {
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
    headers: {
      "user-agent": "Mozilla/5.0 KivelPlanet/0.1",
      accept: "text/html,application/xhtml+xml"
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
        const sourceUrl = normalizeUrl(site.homepage_url, href);
        programs.push({
          title,
          sourceUrl,
          imageUrl: firstImageUrl($, site.homepage_url, candidate) ?? firstImageUrl($, site.homepage_url, container)
        });
      }
    });
  });

  return Promise.all(
    programs.map(async (program) => ({
      ...program,
      imageUrl: program.imageUrl ?? (await fetchDetailImage(program.sourceUrl))
    }))
  );
}
