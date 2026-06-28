import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const CONFIG_SPREADSHEET_ID = "1Gp_3WvNpXJLqPnda-6lZSCwdbULm_1TpOTHLAkiS2hY";
const CONFIG_RANGE = "'설정'!A:Z";
const DEFAULT_SERVICE_KEY_PATH = "../serviceKey.json";

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

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function signJwt(serviceKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceKey.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };
  const unsignedToken = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsignedToken), serviceKey.private_key);
  return `${unsignedToken}.${base64url(signature)}`;
}

async function getAccessToken(serviceKey) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: signJwt(serviceKey)
    })
  });

  if (!response.ok) {
    throw new Error(`Google token request failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function readSheetRows(accessToken) {
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG_SPREADSHEET_ID}/values/${encodeURIComponent(CONFIG_RANGE)}`
  );
  const response = await fetch(url, {
    headers: { authorization: `Bearer ${accessToken}` }
  });

  if (!response.ok) {
    throw new Error(`Google sheet request failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const [headers = [], ...rows] = data.values ?? [];

  return rows.map((row) =>
    Object.fromEntries(headers.map((header, index) => [String(header).trim(), row[index] ?? ""]))
  );
}

function keywords(value) {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function numberOrDefault(value, fallback) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toSite(row) {
  return {
    name: String(row["이름"] ?? "").trim(),
    homepage_url: String(row["사이트주소"] ?? "").trim(),
    selector_depth1: String(row["depth1"] ?? "").trim(),
    selector_depth2: String(row["depth2"] ?? "").trim(),
    href_index: numberOrDefault(row["href_index"], -1),
    include_keywords: keywords(row["포함"]),
    exclude_keywords: keywords(row["불포함"]),
    region: "",
    center_type: "",
    is_active: true
  };
}

async function upsertSite(supabase, site) {
  const { data: existing, error: findError } = await supabase
    .from("sites")
    .select("id")
    .eq("name", site.name)
    .eq("homepage_url", site.homepage_url)
    .maybeSingle();

  if (findError) {
    throw findError;
  }

  if (existing) {
    const { error } = await supabase.from("sites").update(site).eq("id", existing.id);
    if (error) throw error;
    return "updated";
  }

  const { error } = await supabase.from("sites").insert(site);
  if (error) throw error;
  return "inserted";
}

async function main() {
  const env = parseEnv(await fs.readFile(".env.local", "utf8"));
  const serviceKeyPath = process.env.GOOGLE_SERVICE_KEY_PATH ?? DEFAULT_SERVICE_KEY_PATH;
  const serviceKey = JSON.parse(await fs.readFile(path.resolve(serviceKeyPath), "utf8"));
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
  const accessToken = await getAccessToken(serviceKey);
  const rows = await readSheetRows(accessToken);
  const sites = rows.map(toSite).filter((site) => site.name && site.homepage_url && site.selector_depth1);

  let inserted = 0;
  let updated = 0;
  let failed = 0;

  for (const site of sites) {
    try {
      const result = await upsertSite(supabase, site);
      inserted += result === "inserted" ? 1 : 0;
      updated += result === "updated" ? 1 : 0;
    } catch (error) {
      failed += 1;
      console.error(`[failed] ${site.name}: ${error.message}`);
    }
  }

  console.log(JSON.stringify({ read: rows.length, imported: sites.length, inserted, updated, failed }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
