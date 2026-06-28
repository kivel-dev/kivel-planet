# Failed Site Analysis

Generated: 2026-06-28T08:01:09.837Z

## Summary

- 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검: 15
- 네트워크/TLS/비표준 포트 실패: 9
- URL 변형으로 접속 가능. URL 업데이트 후보: 13
- 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요: 8
- 기타: 7

## Sites

### 강북장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=dl, depth2=dd,g_title, href=1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.gangbukrc.or.kr/menu/?menu_str=3010&list_count=&sca=%EB%AA%A8%EC%A7%91 | 200 | https://www.gangbukrc.or.kr/menu/?menu_str=3010&list_count=&sca=%EB%AA%A8%EC%A7%91 | text/html; charset=utf-8 |
| https://www.gangbukrc.or.kr/menu/?menu_str=3010&list_count=&sca=%EB%AA%A8%EC%A7%91 | 200 | https://www.gangbukrc.or.kr/menu/?menu_str=3010&list_count=&sca=%EB%AA%A8%EC%A7%91 | text/html; charset=utf-8 |
| http://www.gangbukrc.or.kr/ | 200 | https://www.gangbukrc.or.kr/ | text/html; charset=utf-8 |
| https://www.gangbukrc.or.kr/ | 200 | https://www.gangbukrc.or.kr/ | text/html; charset=utf-8 |

### 강동구장애인가족지원센터

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=div,bo_tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr/bbs/board.php?bo_table=notice | ERR (curl: (6) Could not resolve host: xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr) | - | - |
| https://xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr/bbs/board.php?bo_table=notice | ERR (curl: (6) Could not resolve host: xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr) | - | - |
| http://xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr/ | ERR (curl: (6) Could not resolve host: xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr) | - | - |
| https://xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr/ | ERR (curl: (6) Could not resolve host: xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr) | - | - |

### 홍성군장애인종합복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td,subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.hcrc.or.kr/info/list.php?boardid=1 | 404 | http://www.hcrc.or.kr/info/list.php?boardid=1 | text/html; charset=utf-8 |
| https://www.hcrc.or.kr/info/list.php?boardid=1 | 404 | https://www.hcrc.or.kr/info/list.php?boardid=1 | text/html; charset=utf-8 |
| http://www.hcrc.or.kr/ | 200 | http://www.hcrc.or.kr/ | text/html |
| https://www.hcrc.or.kr/ | 200 | https://www.hcrc.or.kr/ | text/html |

### 홀트강동복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=2

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.holtgangdong.or.kr/bbs/board.php?bo_table=0302&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90%EB%AA%A8%EC%A7%91 | ERR (curl: (6) Could not resolve host: www.holtgangdong.or.kr) | - | - |
| https://www.holtgangdong.or.kr/bbs/board.php?bo_table=0302&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90%EB%AA%A8%EC%A7%91 | ERR (curl: (6) Could not resolve host: www.holtgangdong.or.kr) | - | - |
| http://www.holtgangdong.or.kr/ | ERR (curl: (6) Could not resolve host: www.holtgangdong.or.kr) | - | - |
| https://www.holtgangdong.or.kr/ | ERR (curl: (6) Could not resolve host: www.holtgangdong.or.kr) | - | - |

### 혜원장애인복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=div,bo_tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.hw.or.kr/bbs/board.php?bo_table=notice | 403 | http://www.hw.or.kr/bbs/board.php?bo_table=notice | text/html;charset=utf8 |
| https://www.hw.or.kr/bbs/board.php?bo_table=notice | 200 | https://www.hw.or.kr/bbs/board.php?bo_table=notice | text/html; charset=utf-8 |
| http://www.hw.or.kr/ | 403 | http://www.hw.or.kr/ | text/html;charset=utf8 |
| https://www.hw.or.kr/ | 200 | https://www.hw.or.kr/ | text/html; charset=utf-8 |

### 하남시장애인복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td,tit_field, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.hanamrehab.or.kr/front/board/notice.php | 403 | http://www.hanamrehab.or.kr/front/board/notice.php | text/html;charset=utf8 |
| https://www.hanamrehab.or.kr/front/board/notice.php | 404 | https://www.hanamrehab.or.kr/front/board/notice.php | text/html |
| http://www.hanamrehab.or.kr/ | 403 | http://www.hanamrehab.or.kr/ | text/html;charset=utf8 |
| https://www.hanamrehab.or.kr/ | 200 | https://www.hanamrehab.or.kr/ | text/html; charset=utf-8 |

### 포항시장애인종합복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=td,content, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.withinph.or.kr/pbjb/bbs/board.php?bo_table=bo_08 | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |
| https://www.withinph.or.kr/pbjb/bbs/board.php?bo_table=bo_08 | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |
| http://www.withinph.or.kr/ | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |
| https://www.withinph.or.kr/ | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |

### 포항시북부장애인종합복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=div,img-item, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.withinph.or.kr/withinph/bbs/board.php?bo_table=bo_08 | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |
| https://www.withinph.or.kr/withinph/bbs/board.php?bo_table=bo_08 | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |
| http://www.withinph.or.kr/ | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |
| https://www.withinph.or.kr/ | ERR (curl: (6) Could not resolve host: www.withinph.or.kr) | - | - |

### 파주시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.pajurehab.or.kr/notice | 403 | http://www.pajurehab.or.kr/notice | text/html;charset=utf8 |
| https://www.pajurehab.or.kr/notice | 403 | https://www.pajurehab.or.kr/notice | text/html;charset=utf8 |
| http://www.pajurehab.or.kr/ | 403 | http://www.pajurehab.or.kr/ | text/html;charset=utf8 |
| https://www.pajurehab.or.kr/ | 403 | https://www.pajurehab.or.kr/ | text/html;charset=utf8 |

### 태백장애인종합복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.tbrehab.or.kr:42206/bbs/board.php?bo_table=sub11_1 | ERR (curl: (28) Failed to connect to www.tbrehab.or.kr port 42206 after 8004 ms: Timeout was reached) | - | - |
| http://www.tbrehab.or.kr:42206/bbs/board.php?bo_table=sub11_1 | ERR (curl: (28) Failed to connect to www.tbrehab.or.kr port 42206 after 8005 ms: Timeout was reached) | - | - |
| https://www.tbrehab.or.kr:42206/ | ERR (curl: (28) Failed to connect to www.tbrehab.or.kr port 42206 after 8003 ms: Timeout was reached) | - | - |
| http://www.tbrehab.or.kr:42206/ | ERR (curl: (28) Failed to connect to www.tbrehab.or.kr port 42206 after 8004 ms: Timeout was reached) | - | - |

### 충청남도서부장애인종합복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.westrc.or.kr/gboard/bbs/board.php?bo_table=program_new | 404 | https://www.westrc.or.kr/gboard/bbs/board.php?bo_table=program_new | text/html; charset=UTF-8 |
| http://www.westrc.or.kr/gboard/bbs/board.php?bo_table=program_new | 404 | https://www.westrc.or.kr/gboard/bbs/board.php?bo_table=program_new | text/html; charset=UTF-8 |
| https://www.westrc.or.kr/ | 200 | https://www.westrc.or.kr/ | text/html; charset=UTF-8 |
| http://www.westrc.or.kr/ | 200 | https://www.westrc.or.kr/ | text/html; charset=UTF-8 |

### 종로장애인복지관

- 원래 오류: fetch failed
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.jpurme.org/bbs/board.php?bo_table=notice&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91 | 403 | https://www.jpurme.org/bbs/board.php?bo_table=notice&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91 | text/html;charset=utf8 |
| http://www.jpurme.org/bbs/board.php?bo_table=notice&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91 | 403 | https://www.jpurme.org/bbs/board.php?bo_table=notice&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91 | text/html;charset=utf8 |
| https://www.jpurme.org/ | 403 | https://www.jpurme.org/ | text/html;charset=utf8 |
| http://www.jpurme.org/ | 403 | https://www.jpurme.org/ | text/html;charset=utf8 |

### 이천시장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td,subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://ichsgwon.or.kr/bbs/board.php?bo_table=0201 | 200 | https://ichsgwon.or.kr/bbs/board.php?bo_table=0201 | text/html; charset=utf-8 |
| https://ichsgwon.or.kr/bbs/board.php?bo_table=0201 | 200 | https://ichsgwon.or.kr/bbs/board.php?bo_table=0201 | text/html; charset=utf-8 |
| http://ichsgwon.or.kr/ | 200 | https://ichsgwon.or.kr/ | text/html; charset=utf-8 |
| https://ichsgwon.or.kr/ | 200 | https://ichsgwon.or.kr/ | text/html; charset=utf-8 |

### 의정부시장애인종합복지관

- 원래 오류: fetch failed
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://warmhand.or.kr/bbs/board.php?bo_table=0202 | 403 | https://warmhand.or.kr/bbs/board.php?bo_table=0202 | text/html;charset=utf8 |
| http://warmhand.or.kr/bbs/board.php?bo_table=0202 | 403 | https://warmhand.or.kr/bbs/board.php?bo_table=0202 | text/html;charset=utf8 |
| https://warmhand.or.kr/ | 403 | https://warmhand.or.kr/ | text/html;charset=utf8 |
| http://warmhand.or.kr/ | 403 | https://warmhand.or.kr/ | text/html;charset=utf8 |

### 음성군장애인복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td,subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.ecbr.or.kr/bbs/board.php?bo_table=b4x1&pageNum=4&subNum=1 | 404 | https://www.ecbr.or.kr/bbs/board.php?bo_table=b4x1&pageNum=4&subNum=1 | text/html; charset=UTF-8 |
| https://www.ecbr.or.kr/bbs/board.php?bo_table=b4x1&pageNum=4&subNum=1 | 404 | https://www.ecbr.or.kr/bbs/board.php?bo_table=b4x1&pageNum=4&subNum=1 | text/html; charset=UTF-8 |
| http://www.ecbr.or.kr/ | 200 | https://www.ecbr.or.kr/ | text/html; charset=UTF-8 |
| https://www.ecbr.or.kr/ | 200 | https://www.ecbr.or.kr/ | text/html; charset=UTF-8 |

### 원주시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.wjrehab.or.kr/bbs/board.php?bo_table=recruit | 403 | https://www.wjrehab.or.kr/bbs/board.php?bo_table=recruit | text/html;charset=utf8 |
| https://www.wjrehab.or.kr/bbs/board.php?bo_table=recruit | 403 | https://www.wjrehab.or.kr/bbs/board.php?bo_table=recruit | text/html;charset=utf8 |
| http://www.wjrehab.or.kr/ | 444 | http://www.wjrehab.or.kr/ | - |
| https://www.wjrehab.or.kr/ | ERR (curl: (92) HTTP/2 stream 1 was not closed cleanly: PROTOCOL_ERROR (err 1)) | - | - |

### 원광장애인종합복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=div,wr-subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://wwcd.or.kr:59189/wwcd/bbs/board.php?bo_table=bo_18 | ERR (curl: (7) Failed to connect to wwcd.or.kr port 59189 after 7 ms: Couldn't connect to server) | - | - |
| http://wwcd.or.kr:59189/wwcd/bbs/board.php?bo_table=bo_18 | ERR (curl: (7) Failed to connect to wwcd.or.kr port 59189 after 7 ms: Couldn't connect to server) | - | - |
| https://wwcd.or.kr:59189/ | ERR (curl: (7) Failed to connect to wwcd.or.kr port 59189 after 9 ms: Couldn't connect to server) | - | - |
| http://wwcd.or.kr:59189/ | ERR (curl: (7) Failed to connect to wwcd.or.kr port 59189 after 8 ms: Couldn't connect to server) | - | - |

### 울주군장애인복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=span,link, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.uljusiseol.or.kr/rehab/bbs/selectArticleList.do?bbsId=BBSMSTR_000000000042 | 404 | https://www.uljusiseol.or.kr/rehab/bbs/selectArticleList.do?bbsId=BBSMSTR_000000000042 | text/html;charset=utf-8 |
| http://www.uljusiseol.or.kr/rehab/bbs/selectArticleList.do?bbsId=BBSMSTR_000000000042 | 404 | https://www.uljusiseol.or.kr/rehab/bbs/selectArticleList.do | text/html;charset=utf-8 |
| https://www.uljusiseol.or.kr/ | 200 | https://www.uljusiseol.or.kr/ | text/html; charset=UTF-8 |
| http://www.uljusiseol.or.kr/ | 200 | https://www.uljusiseol.or.kr/ | text/html; charset=UTF-8 |

### 용인시처인장애인복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=2

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.heart4u.or.kr/bbs/board.php?bo_table=0202 | ERR (curl: (28) Failed to connect to www.heart4u.or.kr port 443 after 8003 ms: Timeout was reached) | - | - |
| http://www.heart4u.or.kr/bbs/board.php?bo_table=0202 | ERR (curl: (28) Failed to connect to www.heart4u.or.kr port 80 after 8003 ms: Timeout was reached) | - | - |
| https://www.heart4u.or.kr/ | ERR (curl: (28) Failed to connect to www.heart4u.or.kr port 443 after 8002 ms: Timeout was reached) | - | - |
| http://www.heart4u.or.kr/ | ERR (curl: (28) Failed to connect to www.heart4u.or.kr port 80 after 8006 ms: Timeout was reached) | - | - |

### 용인시기흥장애인복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td, subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.a-sak.or.kr/bbs/board.php?bo_table=notice | 404 | https://www.a-sak.or.kr/bbs/board.php?bo_table=notice | text/html; charset=UTF-8 |
| http://www.a-sak.or.kr/bbs/board.php?bo_table=notice | 404 | https://www.a-sak.or.kr/bbs/board.php?bo_table=notice | text/html; charset=UTF-8 |
| https://www.a-sak.or.kr/ | 200 | https://www.a-sak.or.kr/ | text/html; charset=UTF-8 |
| http://www.a-sak.or.kr/ | 200 | https://www.a-sak.or.kr/ | text/html; charset=UTF-8 |

### 오산장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td,title, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.osrc.or.kr/program | 200 | https://www.osrc.or.kr/program | text/html; charset=utf-8 |
| http://www.osrc.or.kr/program | 200 | https://www.osrc.or.kr/program | text/html; charset=utf-8 |
| https://www.osrc.or.kr/ | 200 | https://www.osrc.or.kr/ | text/html; charset=utf-8 |
| http://www.osrc.or.kr/ | 200 | https://www.osrc.or.kr/ | text/html; charset=utf-8 |

### 영암군장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td,list_title, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.yeongam.go.kr/home/welfare/news/news_01 | 200 | https://www.yeongam.go.kr/home/welfare/news/news_01 | text/html; charset=utf-8 |
| http://www.yeongam.go.kr/home/welfare/news/news_01 | 200 | https://www.yeongam.go.kr/home/welfare/news/news_01 | text/html; charset=utf-8 |
| https://www.yeongam.go.kr/ | 200 | https://www.yeongam.go.kr/ | text/html; charset=utf-8 |
| http://www.yeongam.go.kr/ | 200 | https://www.yeongam.go.kr/ | text/html; charset=utf-8 |

### 양평군장애인복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=2

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.yprehab.or.kr/bbs/board.php?bo_table=0401 | 200 | https://www.yprehab.or.kr/bbs/board.php?bo_table=0401 | text/html; charset=utf-8 |
| http://www.yprehab.or.kr/bbs/board.php?bo_table=0401 | 200 | https://www.yprehab.or.kr/bbs/board.php?bo_table=0401 | text/html; charset=utf-8 |
| https://www.yprehab.or.kr/ | 200 | https://www.yprehab.or.kr/ | text/html; charset=utf-8 |
| http://www.yprehab.or.kr/ | 200 | https://www.yprehab.or.kr/ | text/html; charset=utf-8 |

### 양산시장애인복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=tr, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.yswelfare.org/community/notice.php?mode=list&skey=&search=&skind=&page=1 | 200 | https://www.yswelfare.org/community/notice.php?mode=list&skey=&search=&skind=&page=1 | text/html; charset=euc-kr |
| https://www.yswelfare.org/community/notice.php?mode=list&skey=&search=&skind=&page=1 | 200 | https://www.yswelfare.org/community/notice.php?mode=list&skey=&search=&skind=&page=1 | text/html; charset=euc-kr |
| http://www.yswelfare.org/ | 200 | https://www.yswelfare.org/ | text/html; charset=euc-kr |
| https://www.yswelfare.org/ | 200 | https://www.yswelfare.org/ | text/html; charset=euc-kr |

### 안동시장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=div,na-item, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://adrehab.or.kr/new/bbs/board.php?bo_table=notice | 200 | https://adrehab.or.kr/new/bbs/board.php?bo_table=notice | text/html; charset=utf-8 |
| http://adrehab.or.kr/new/bbs/board.php?bo_table=notice | 200 | https://adrehab.or.kr/new/bbs/board.php?bo_table=notice | text/html; charset=utf-8 |
| https://adrehab.or.kr/ | 200 | https://adrehab.or.kr/new/ | text/html; charset=utf-8 |
| http://adrehab.or.kr/ | 200 | https://adrehab.or.kr/new/ | text/html; charset=utf-8 |

### 시흥장애인종합복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=div,bo_tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.shwcd.org/news | ERR (curl: (28) Failed to connect to www.shwcd.org port 80 after 8006 ms: Timeout was reached) | - | - |
| https://www.shwcd.org/news | ERR (curl: (28) Failed to connect to www.shwcd.org port 443 after 8006 ms: Timeout was reached) | - | - |
| http://www.shwcd.org/ | ERR (curl: (28) Failed to connect to www.shwcd.org port 80 after 8006 ms: Timeout was reached) | - | - |
| https://www.shwcd.org/ | ERR (curl: (28) Failed to connect to www.shwcd.org port 443 after 8002 ms: Timeout was reached) | - | - |

### 수원시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=tr,text-center, depth2=-, href=1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.suwonrehab.or.kr/bbs/board.php?bo_table=program | 403 | https://www.suwonrehab.or.kr/bbs/board.php?bo_table=program | text/html;charset=utf8 |
| http://www.suwonrehab.or.kr/bbs/board.php?bo_table=program | 403 | https://www.suwonrehab.or.kr/bbs/board.php?bo_table=program | text/html;charset=utf8 |
| https://www.suwonrehab.or.kr/ | 403 | https://www.suwonrehab.or.kr/ | text/html;charset=utf8 |
| http://www.suwonrehab.or.kr/ | 403 | https://www.suwonrehab.or.kr/ | text/html;charset=utf8 |

### 성민복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.sungminwelfare.or.kr/bbs/board.php?bo_table=notice | 403 | https://www.sungminwelfare.or.kr/bbs/board.php?bo_table=notice | text/html;charset=utf8 |
| http://www.sungminwelfare.or.kr/bbs/board.php?bo_table=notice | 403 | https://www.sungminwelfare.or.kr/bbs/board.php?bo_table=notice | text/html;charset=utf8 |
| https://www.sungminwelfare.or.kr/ | 403 | https://www.sungminwelfare.or.kr/ | text/html;charset=utf8 |
| http://www.sungminwelfare.or.kr/ | 403 | https://www.sungminwelfare.or.kr/ | text/html;charset=utf8 |

### 성동장애인종합복지관[모집]

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=tr, text-center, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.omni.or.kr/bbs/board.php?bo_table=0402&bo_type=list&sca=%EB%AA%A8%EC%A7%91 | 200 | https://www.omni.or.kr/bbs/board.php?bo_table=0402&bo_type=list&sca=%EB%AA%A8%EC%A7%91 | text/html; charset=utf-8 |
| https://www.omni.or.kr/bbs/board.php?bo_table=0402&bo_type=list&sca=%EB%AA%A8%EC%A7%91 | 200 | https://www.omni.or.kr/bbs/board.php?bo_table=0402&bo_type=list&sca=%EB%AA%A8%EC%A7%91 | text/html; charset=utf-8 |
| http://www.omni.or.kr/ | 200 | https://www.omni.or.kr/ | text/html; charset=utf-8 |
| https://www.omni.or.kr/ | 200 | https://www.omni.or.kr/ | text/html; charset=utf-8 |

### 서대문장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.welfare-center.or.kr/bbs/board.php?bo_table=0301 | 200 | https://www.welfare-center.or.kr/bbs/board.php?bo_table=0301 | text/html; charset=utf-8 |
| https://www.welfare-center.or.kr/bbs/board.php?bo_table=0301 | 200 | https://www.welfare-center.or.kr/bbs/board.php?bo_table=0301 | text/html; charset=utf-8 |
| http://www.welfare-center.or.kr/ | 200 | https://www.welfare-center.or.kr/ | text/html; charset=utf-8 |
| https://www.welfare-center.or.kr/ | 200 | https://www.welfare-center.or.kr/ | text/html; charset=utf-8 |

### 산엔청복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=tr,list, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://sncwc.or.kr/communication/notice/?brd=list&pg=1 | 404 | https://sncwc.or.kr/communication/notice/?brd=list&pg=1 | text/html; charset=UTF-8 |
| https://sncwc.or.kr/communication/notice/?brd=list&pg=1 | 404 | https://sncwc.or.kr/communication/notice/?brd=list&pg=1 | text/html; charset=UTF-8 |
| http://sncwc.or.kr/ | 200 | https://sncwc.or.kr/ | text/html; charset=UTF-8 |
| https://sncwc.or.kr/ | 200 | https://sncwc.or.kr/ | text/html; charset=UTF-8 |

### 사랑의복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.esarang.org/bbs/board.php?bo_table=0301_2 | ERR (curl: (28) Failed to connect to www.esarang.org port 80 after 8006 ms: Timeout was reached) | - | - |
| https://www.esarang.org/bbs/board.php?bo_table=0301_2 | ERR (curl: (28) Failed to connect to www.esarang.org port 443 after 8005 ms: Timeout was reached) | - | - |
| http://www.esarang.org/ | ERR (curl: (28) Failed to connect to www.esarang.org port 80 after 8006 ms: Timeout was reached) | - | - |
| https://www.esarang.org/ | ERR (curl: (28) Failed to connect to www.esarang.org port 443 after 8005 ms: Timeout was reached) | - | - |

### 북부장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.internet.or.kr/bbs/board.php?bo_table=0201 | ERR (curl: (28) Failed to connect to www.internet.or.kr port 80 after 8004 ms: Timeout was reached) | - | - |
| https://www.internet.or.kr/bbs/board.php?bo_table=0201 | ERR (curl: (28) Failed to connect to www.internet.or.kr port 443 after 8003 ms: Timeout was reached) | - | - |
| http://www.internet.or.kr/ | ERR (curl: (28) Failed to connect to www.internet.or.kr port 80 after 8005 ms: Timeout was reached) | - | - |
| https://www.internet.or.kr/ | ERR (curl: (28) Failed to connect to www.internet.or.kr port 443 after 8006 ms: Timeout was reached) | - | - |

### 북구장애인종합복지관

- 원래 오류: fetch failed
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.bgrc.or.kr/bbs/board.php?bo_table=0501 | 404 | https://www.bgrc.or.kr/bbs/board.php?bo_table=0501 | text/html; charset=iso-8859-1 |
| https://www.bgrc.or.kr/bbs/board.php?bo_table=0501 | 404 | https://www.bgrc.or.kr/bbs/board.php?bo_table=0501 | text/html; charset=iso-8859-1 |
| http://www.bgrc.or.kr/ | 200 | https://www.bgrc.or.kr/ | text/html |
| https://www.bgrc.or.kr/ | 200 | https://www.bgrc.or.kr/ | text/html |

### 부평장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=td,td_subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.bprwcd.or.kr/bbs/board.php?bo_table=notice | ERR (curl: (28) Failed to connect to www.bprwcd.or.kr port 80 after 8002 ms: Timeout was reached) | - | - |
| https://www.bprwcd.or.kr/bbs/board.php?bo_table=notice | ERR (curl: (28) Failed to connect to www.bprwcd.or.kr port 443 after 8005 ms: Timeout was reached) | - | - |
| http://www.bprwcd.or.kr/ | ERR (curl: (28) Failed to connect to www.bprwcd.or.kr port 80 after 8003 ms: Timeout was reached) | - | - |
| https://www.bprwcd.or.kr/ | ERR (curl: (28) Failed to connect to www.bprwcd.or.kr port 443 after 8006 ms: Timeout was reached) | - | - |

### 부여군장애인종합복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=div,subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.buyeorec.or.kr/module/board/board.php?bo_table=notice | 404 | http://www.buyeorec.or.kr/module/board/board.php?bo_table=notice | text/html |
| https://www.buyeorec.or.kr/module/board/board.php?bo_table=notice | 404 | https://www.buyeorec.or.kr/module/board/board.php?bo_table=notice | text/html |
| http://www.buyeorec.or.kr/ | 200 | http://www.buyeorec.or.kr/ | text/html; charset=utf-8 |
| https://www.buyeorec.or.kr/ | 200 | https://www.buyeorec.or.kr/ | text/html; charset=utf-8 |

### 부산광역시장애인종합복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=tr, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.rehabcenter.or.kr:450/?page_id=1147 | ERR (curl: (28) Failed to connect to www.rehabcenter.or.kr port 450 after 8006 ms: Timeout was reached) | - | - |
| http://www.rehabcenter.or.kr:450/?page_id=1147 | ERR (curl: (28) Failed to connect to www.rehabcenter.or.kr port 450 after 8002 ms: Timeout was reached) | - | - |
| https://www.rehabcenter.or.kr:450/ | ERR (curl: (28) Failed to connect to www.rehabcenter.or.kr port 450 after 8006 ms: Timeout was reached) | - | - |
| http://www.rehabcenter.or.kr:450/ | ERR (curl: (28) Failed to connect to www.rehabcenter.or.kr port 450 after 8002 ms: Timeout was reached) | - | - |

### 보은군노인장애인복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=2

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.happyboeun.or.kr/bbs/board.php?bo_table=0201&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91 | ERR (curl: (28) Failed to connect to www.happyboeun.or.kr port 80 after 8003 ms: Timeout was reached) | - | - |
| https://www.happyboeun.or.kr/bbs/board.php?bo_table=0201&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91 | ERR (curl: (28) Failed to connect to www.happyboeun.or.kr port 443 after 8006 ms: Timeout was reached) | - | - |
| http://www.happyboeun.or.kr/ | ERR (curl: (28) Failed to connect to www.happyboeun.or.kr port 80 after 8006 ms: Timeout was reached) | - | - |
| https://www.happyboeun.or.kr/ | ERR (curl: (28) Failed to connect to www.happyboeun.or.kr port 443 after 8005 ms: Timeout was reached) | - | - |

### 방이복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=div,bo_tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.bangiwelfare.or.kr/1020?sca=%EC%95%84%EB%8F%99%C2%B7%EC%B2%AD%EC%86%8C%EB%85%84%C2%B7%EA%B0%80%EC%A1%B1 | 200 | https://www.bangiwelfare.or.kr/1020?sca=%EC%95%84%EB%8F%99%C2%B7%EC%B2%AD%EC%86%8C%EB%85%84%C2%B7%EA%B0%80%EC%A1%B1 | text/html; charset=utf-8 |
| http://www.bangiwelfare.or.kr/1020?sca=%EC%95%84%EB%8F%99%C2%B7%EC%B2%AD%EC%86%8C%EB%85%84%C2%B7%EA%B0%80%EC%A1%B1 | 200 | http://www.bangiwelfare.or.kr/1020?sca=%EC%95%84%EB%8F%99%C2%B7%EC%B2%AD%EC%86%8C%EB%85%84%C2%B7%EA%B0%80%EC%A1%B1 | text/html; charset=utf-8 |
| https://www.bangiwelfare.or.kr/ | 200 | https://www.bangiwelfare.or.kr/ | text/html; charset=utf-8 |
| http://www.bangiwelfare.or.kr/ | 200 | http://www.bangiwelfare.or.kr/ | text/html; charset=utf-8 |

### 미추홀장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=tr, text-center, depth2=-, href=1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://michurc.or.kr/bbs/board.php?bo_table=0201 | 200 | https://michurc.or.kr/bbs/board.php?bo_table=0201 | text/html; charset=utf-8 |
| http://michurc.or.kr/bbs/board.php?bo_table=0201 | 200 | https://michurc.or.kr/bbs/board.php?bo_table=0201 | text/html; charset=utf-8 |
| https://michurc.or.kr/ | 200 | https://michurc.or.kr/ | text/html; charset=utf-8 |
| http://michurc.or.kr/ | 200 | https://michurc.or.kr/ | text/html; charset=utf-8 |

### 동문장애인복지관

- 원래 오류: fetch failed
- 분류: 네트워크/TLS/비표준 포트 실패
- 해결방법: 비표준 포트, 인증서, 오래된 서버 설정 가능성이 큽니다. curl -k/Playwright fallback을 우선 적용합니다.
- 현재 설정: depth1=div,bo_tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.dongmuncenter.or.kr/weel_bbs/board.php?bo_table=bbs_try | ERR (curl: (6) Could not resolve host: www.dongmuncenter.or.kr) | - | - |
| https://www.dongmuncenter.or.kr/weel_bbs/board.php?bo_table=bbs_try | ERR (curl: (6) Could not resolve host: www.dongmuncenter.or.kr) | - | - |
| http://www.dongmuncenter.or.kr/ | ERR (curl: (6) Could not resolve host: www.dongmuncenter.or.kr) | - | - |
| https://www.dongmuncenter.or.kr/ | ERR (curl: (6) Could not resolve host: www.dongmuncenter.or.kr) | - | - |

### 동두천시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.ddcjb06.net/bbs/board.php?bo_table=0401&page=1 | 403 | https://www.ddcjb06.net/bbs/board.php?bo_table=0401&page=1 | text/html;charset=utf8 |
| https://www.ddcjb06.net/bbs/board.php?bo_table=0401&page=1 | 403 | https://www.ddcjb06.net/bbs/board.php?bo_table=0401&page=1 | text/html;charset=utf8 |
| http://www.ddcjb06.net/ | 403 | https://www.ddcjb06.net/ | text/html;charset=utf8 |
| https://www.ddcjb06.net/ | 403 | https://www.ddcjb06.net/ | text/html;charset=utf8 |

### 대전시립장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=div,bo_tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://djrc.or.kr/bbs/board.php?bo_table=sub05_02 | 200 | https://djrc.or.kr/bbs/board.php?bo_table=sub05_02 | text/html; charset=utf-8 |
| https://djrc.or.kr/bbs/board.php?bo_table=sub05_02 | 200 | https://djrc.or.kr/bbs/board.php?bo_table=sub05_02 | text/html; charset=utf-8 |
| http://djrc.or.kr/ | 200 | https://djrc.or.kr/ | text/html; charset=utf-8 |
| https://djrc.or.kr/ | 200 | https://djrc.or.kr/ | text/html; charset=utf-8 |

### 대덕구장애인종합복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.ddwelfare.or.kr/3-1.htm | 200 | https://www.ddwelfare.or.kr/3-1.htm | text/html |
| http://www.ddwelfare.or.kr/3-1.htm | 200 | http://www.ddwelfare.or.kr/3-1.htm | text/html |
| https://www.ddwelfare.or.kr/ | 200 | https://www.ddwelfare.or.kr/ | text/html |
| http://www.ddwelfare.or.kr/ | 200 | http://www.ddwelfare.or.kr/ | text/html |

### 김천시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=div,subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.gcwd.or.kr/module/board/board.php?bo_table=open2 | 404 | https://www.gcwd.or.kr/module/board/board.php?bo_table=open2 | text/html |
| https://www.gcwd.or.kr/module/board/board.php?bo_table=open2 | 404 | https://www.gcwd.or.kr/module/board/board.php?bo_table=open2 | text/html |
| http://www.gcwd.or.kr/ | 200 | https://www.gcwd.or.kr/ | text/html; charset=utf-8 |
| https://www.gcwd.or.kr/ | 200 | https://www.gcwd.or.kr/ | text/html; charset=utf-8 |

### 군포시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=ul, depth2=-, href=1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://gunporehab.or.kr/page/0304 | 404 | https://gunporehab.or.kr/page/0304 | text/html; charset=UTF-8 |
| http://gunporehab.or.kr/page/0304 | 404 | http://gunporehab.or.kr/page/0304 | text/html; charset=UTF-8 |
| https://gunporehab.or.kr/ | 200 | https://gunporehab.or.kr/ | text/html; charset=UTF-8 |
| http://gunporehab.or.kr/ | 200 | http://gunporehab.or.kr/ | text/html; charset=UTF-8 |

### 구립용산장애인복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.ysrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EB%AA%A8%EC%A7%91 | ERR (curl: (28) Failed to connect to www.ysrehab.or.kr port 443 after 8006 ms: Timeout was reached) | - | - |
| http://www.ysrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EB%AA%A8%EC%A7%91 | ERR (curl: (28) Failed to connect to www.ysrehab.or.kr port 80 after 8005 ms: Timeout was reached) | - | - |
| https://www.ysrehab.or.kr/ | ERR (curl: (28) Failed to connect to www.ysrehab.or.kr port 443 after 8003 ms: Timeout was reached) | - | - |
| http://www.ysrehab.or.kr/ | ERR (curl: (28) Failed to connect to www.ysrehab.or.kr port 80 after 8004 ms: Timeout was reached) | - | - |

### 구리시장애인가족지원센터

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=p,tit, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://gurifamily.or.kr/bbs/page.php?pid=program | 200 | https://gurifamily.or.kr/bbs/page.php?pid=program | text/html; charset=utf-8 |
| https://gurifamily.or.kr/bbs/page.php?pid=program | 200 | https://gurifamily.or.kr/bbs/page.php?pid=program | text/html; charset=utf-8 |
| http://gurifamily.or.kr/ | 200 | https://gurifamily.or.kr/ | text/html; charset=utf-8 |
| https://gurifamily.or.kr/ | 200 | https://gurifamily.or.kr/ | text/html; charset=utf-8 |

### 구례군장애인복지관

- 원래 오류: fetch failed
- 분류: 현재 URL 접속 가능. 스크래퍼 fetch/selector 재점검
- 해결방법: 현재 URL은 열리므로 선택자(depth1/depth2/href_index)를 재검증합니다.
- 현재 설정: depth1=td,subject, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.grwel.or.kr/bbs/board.php?bo_table=notice | 200 | https://www.grwel.or.kr/bbs/board.php?bo_table=notice | text/html; charset=utf-8 |
| https://www.grwel.or.kr/bbs/board.php?bo_table=notice | 200 | https://www.grwel.or.kr/bbs/board.php?bo_table=notice | text/html; charset=utf-8 |
| http://www.grwel.or.kr/ | 200 | https://www.grwel.or.kr/ | text/html; charset=utf-8 |
| https://www.grwel.or.kr/ | 200 | https://www.grwel.or.kr/ | text/html; charset=utf-8 |

### 광명장애인종합복지관

- 원래 오류: 사이트 요청 실패: 403
- 분류: 기타
- 해결방법: 수동 확인이 필요합니다.
- 현재 설정: depth1=div,title, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://www.withlight.or.kr/bbs/board.php?bo_table=program | ERR (curl: (28) Failed to connect to www.withlight.or.kr port 443 after 8003 ms: Timeout was reached) | - | - |
| http://www.withlight.or.kr/bbs/board.php?bo_table=program | ERR (curl: (28) Failed to connect to www.withlight.or.kr port 80 after 8006 ms: Timeout was reached) | - | - |
| https://www.withlight.or.kr/ | ERR (curl: (28) Failed to connect to www.withlight.or.kr port 443 after 8003 ms: Timeout was reached) | - | - |
| http://www.withlight.or.kr/ | ERR (curl: (28) Failed to connect to www.withlight.or.kr port 80 after 8001 ms: Timeout was reached) | - | - |

### 공주시장애인종합복지관

- 원래 오류: 사이트 요청 실패: 404
- 분류: URL 변형으로 접속 가능. URL 업데이트 후보
- 해결방법: 200 응답을 주는 변형 URL로 homepage_url을 교체한 뒤 재수집합니다.
- 현재 설정: depth1=td,title, depth2=-, href=-1

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| http://www.gjwel.or.kr/bbs/?act=bbs&subAct=list&bid=notice&page=1&order_type=desc&category=6 | 404 | http://www.gjwel.or.kr/bbs/?act=bbs&subAct=list&bid=notice&page=1&order_type=desc&category=6 | text/html; charset=utf-8 |
| https://www.gjwel.or.kr/bbs/?act=bbs&subAct=list&bid=notice&page=1&order_type=desc&category=6 | 404 | https://www.gjwel.or.kr/bbs/?act=bbs&subAct=list&bid=notice&page=1&order_type=desc&category=6 | text/html; charset=utf-8 |
| http://www.gjwel.or.kr/ | 200 | https://gjwel.or.kr/Default.asp | text/html |
| https://www.gjwel.or.kr/ | 200 | https://www.gjwel.or.kr/ | text/html |

### 고양시장애인종합복지관

- 원래 오류: fetch failed
- 분류: 403 차단. 브라우저 기반 수집 또는 기관별 허용 필요
- 해결방법: 일반 fetch가 차단됩니다. Playwright fallback 또는 기관별 수동 허용/대체 RSS/API가 필요합니다.
- 현재 설정: depth1=td,td_subject text-left, depth2=-, href=2

| URL | 상태 | 최종 URL | 타입 |
| --- | --- | --- | --- |
| https://goyangrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90+%EB%AA%A8%EC%A7%91 | 403 | https://goyangrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90+%EB%AA%A8%EC%A7%91 | text/html;charset=utf8 |
| http://goyangrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90+%EB%AA%A8%EC%A7%91 | 403 | https://goyangrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90+%EB%AA%A8%EC%A7%91 | text/html;charset=utf8 |
| https://goyangrehab.or.kr/ | 403 | https://goyangrehab.or.kr/ | text/html;charset=utf8 |
| http://goyangrehab.or.kr/ | 403 | https://goyangrehab.or.kr/ | text/html;charset=utf8 |

