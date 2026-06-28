export type ProgramStatus = "candidate" | "published" | "held" | "rejected" | "archived";

export type Site = {
  id: string;
  name: string;
  homepage_url: string;
  region: string;
  center_type: string;
  selector_depth1: string;
  selector_depth2: string;
  href_index: number;
  include_keywords: string[];
  exclude_keywords: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type Program = {
  id: string;
  site_id: string;
  title: string;
  source_url: string;
  status: ProgramStatus;
  region: string;
  center_type: string;
  starts_at: string | null;
  ends_at: string | null;
  published_at: string | null;
  first_seen_at: string;
  last_seen_at: string;
  created_at: string;
  updated_at: string;
  sites?: Pick<Site, "name" | "homepage_url"> | null;
};
