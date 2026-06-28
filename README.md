# Kivel Planet

아동 치료, 체험, 검사 프로그램을 자동 수집하고 관리자가 검수한 뒤 온라인에 게시하는 Next.js + Supabase 서비스입니다.

## 핵심 흐름

1. 관리자: 기관/센터별 수집 설정을 등록합니다.
2. 자동 수집: 설정된 사이트에서 프로그램 후보를 가져옵니다.
3. 관리자 검수: 후보를 `게시`, `보류`, `제외` 상태로 관리합니다.
4. 공개 서비스: 게시된 프로그램만 이용자에게 노출합니다.

## 기술 스택

- Next.js App Router
- TypeScript
- Supabase Auth / Postgres / RLS
- Server Route 기반 스크래핑 API

## 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

Supabase SQL Editor에서 `supabase/schema.sql`을 먼저 실행하세요.

## 주요 경로

- `/`: 공개 홈
- `/programs`: 이용자용 프로그램 목록
- `/admin/sites`: 관리자 기관 설정
- `/admin/programs`: 관리자 프로그램 검수
- `/api/scrape/[siteId]`: 특정 기관 자동 수집 API
