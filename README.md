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

## 기존 설정 가져오기

기존 Google Sheet의 기관별 수집 설정을 Supabase `sites` 테이블로 가져옵니다.

```bash
npm run import:sites
```

기본적으로 프로젝트 상위 폴더의 `serviceKey.json`을 사용합니다. 다른 경로를 쓰려면 `GOOGLE_SERVICE_KEY_PATH` 환경변수로 지정합니다.

## 수집 실행

로컬 개발 서버를 켠 뒤 전체 기관을 수집합니다.

```bash
npm run dev
npm run scrape:sites
```

앞에서 일부 기관만 테스트하려면 숫자를 붙입니다.

```bash
npm run scrape:sites -- 10
```

기본 앱 주소는 `http://localhost:3000`입니다. 다른 포트에서 실행 중이면 `KIVEL_APP_URL`을 지정합니다.

```bash
KIVEL_APP_URL=http://localhost:3001 npm run scrape:sites -- 10
```

## 주요 경로

- `/`: 공개 홈
- `/programs`: 이용자용 프로그램 목록
- `/admin/sites`: 관리자 기관 설정
- `/admin/programs`: 관리자 프로그램 검수
- `/api/scrape/[siteId]`: 특정 기관 자동 수집 API
