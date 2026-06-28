alter table public.programs
add column image_url text;

create index programs_image_url_idx on public.programs(image_url)
where image_url is not null;
