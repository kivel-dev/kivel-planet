create extension if not exists pgcrypto;

create type public.program_status as enum ('candidate', 'published', 'held', 'rejected', 'archived');
create type public.scrape_run_status as enum ('success', 'failed');

create table public.sites (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  homepage_url text not null,
  region text not null default '',
  center_type text not null default '',
  selector_depth1 text not null,
  selector_depth2 text not null default '',
  href_index integer not null default -1,
  include_keywords text[] not null default '{}',
  exclude_keywords text[] not null default '{}',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.programs (
  id uuid primary key default gen_random_uuid(),
  site_id uuid not null references public.sites(id) on delete cascade,
  title text not null,
  source_url text not null,
  image_url text,
  status public.program_status not null default 'candidate',
  region text not null default '',
  center_type text not null default '',
  starts_at date,
  ends_at date,
  published_at timestamptz,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(site_id, source_url)
);

create table public.scrape_runs (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references public.sites(id) on delete set null,
  status public.scrape_run_status not null,
  total_count integer not null default 0,
  inserted_count integer not null default 0,
  updated_count integer not null default 0,
  message text not null default '',
  created_at timestamptz not null default now()
);

create index programs_status_idx on public.programs(status);
create index programs_region_idx on public.programs(region);
create index programs_site_id_idx on public.programs(site_id);
create index programs_image_url_idx on public.programs(image_url)
where image_url is not null;
create index sites_active_idx on public.sites(is_active);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger sites_set_updated_at
before update on public.sites
for each row execute function public.set_updated_at();

create trigger programs_set_updated_at
before update on public.programs
for each row execute function public.set_updated_at();

alter table public.sites enable row level security;
alter table public.programs enable row level security;
alter table public.scrape_runs enable row level security;

create policy "Public can read active sites"
on public.sites for select
using (is_active = true);

create policy "Public can read published programs"
on public.programs for select
using (status = 'published');

create policy "Authenticated users can read sites"
on public.sites for select
to authenticated
using (true);

create policy "Authenticated users can manage sites"
on public.sites for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage programs"
on public.programs for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can read scrape runs"
on public.scrape_runs for select
to authenticated
using (true);
