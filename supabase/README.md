# Supabase Setup

1. Supabase SQL Editor에서 `schema.sql` 내용을 실행합니다.
2. Project Settings > API에서 아래 값을 확인해 `.env.local`에 입력합니다.
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. `SCRAPER_SECRET`에는 자동 수집 API 보호용 임의 문자열을 넣습니다.

`SUPABASE_SERVICE_ROLE_KEY`는 서버 전용 비밀키입니다. 브라우저 코드에 노출하거나 GitHub에 올리면 안 됩니다.
