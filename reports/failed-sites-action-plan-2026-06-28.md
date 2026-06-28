# Failed Sites Action Plan

Generated: 2026-06-28T08:14:22.340Z

## Current Result

- Initial failed sites: 52
- Latest failed sites after fallback and rescrape: 31
- Programs currently stored: 884

## Cause Summary

- fetch failed: 21
- 사이트 요청 실패: 404: 7
- 사이트 요청 실패: 403: 3

## Remaining Sites

### fetch failed

DNS 만료, 서버 종료, TLS/비표준 포트, 방화벽, 연결 종료 가능성이 큽니다. 도메인 생존 여부 확인 후 새 도메인을 찾거나 Playwright/curl보다 강한 수집 경로가 필요합니다.

- 고양시장애인종합복지관
  - URL: https://goyangrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90+%EB%AA%A8%EC%A7%91
  - 설정: depth1=td,td_subject text-left, depth2=-, href=2
- 광명장애인종합복지관
  - URL: https://www.withlight.or.kr/bbs/board.php?bo_table=program
  - 설정: depth1=div,title, depth2=-, href=-1
- 구립용산장애인복지관
  - URL: https://www.ysrehab.or.kr/bbs/board.php?bo_table=0401&sca=%EB%AA%A8%EC%A7%91
  - 설정: depth1=td,td_subject text-left, depth2=-, href=-1
- 동문장애인복지관
  - URL: http://www.dongmuncenter.or.kr/weel_bbs/board.php?bo_table=bbs_try
  - 설정: depth1=div,bo_tit, depth2=-, href=-1
- 보은군노인장애인복지관
  - URL: http://www.happyboeun.or.kr/bbs/board.php?bo_table=0201&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91
  - 설정: depth1=td,td_subject text-left, depth2=-, href=2
- 부산광역시장애인종합복지관
  - URL: https://www.rehabcenter.or.kr:450/?page_id=1147
  - 설정: depth1=tr, depth2=-, href=-1
- 부평장애인종합복지관
  - URL: http://www.bprwcd.or.kr/bbs/board.php?bo_table=notice
  - 설정: depth1=td,td_subject, depth2=-, href=-1
- 북구장애인종합복지관
  - URL: http://www.bgrc.or.kr/bbs/board.php?bo_table=0501
  - 설정: depth1=td,td_subject, depth2=-, href=-1
- 북부장애인종합복지관
  - URL: http://www.internet.or.kr/bbs/board.php?bo_table=0201
  - 설정: depth1=td,td_subject text-left, depth2=-, href=-1
- 사랑의복지관
  - URL: http://www.esarang.org/bbs/board.php?bo_table=0301_2
  - 설정: depth1=td,td_subject text-left, depth2=-, href=-1
- 종로장애인복지관
  - URL: https://www.jpurme.org/bbs/board.php?bo_table=notice&sca=%EC%B0%B8%EC%97%AC%EC%9E%90%EB%AA%A8%EC%A7%91
  - 설정: depth1=td,td_subject, depth2=-, href=-1
- 태백장애인종합복지관
  - URL: https://www.tbrehab.or.kr:42206/bbs/board.php?bo_table=sub11_1
  - 설정: depth1=td,td_subject, depth2=-, href=-1
- 파주시장애인종합복지관
  - URL: http://www.pajurehab.or.kr/notice
  - 설정: depth1=td,td_subject, depth2=-, href=-1
- 포항시북부장애인종합복지관
  - URL: http://www.withinph.or.kr/withinph/bbs/board.php?bo_table=bo_08
  - 설정: depth1=div,img-item, depth2=-, href=-1
- 포항시장애인종합복지관
  - URL: http://www.withinph.or.kr/pbjb/bbs/board.php?bo_table=bo_08
  - 설정: depth1=td,content, depth2=-, href=-1
- 홀트강동복지관
  - URL: http://www.holtgangdong.or.kr/bbs/board.php?bo_table=0302&sca=%EC%9D%B4%EC%9A%A9%EC%9E%90%EB%AA%A8%EC%A7%91
  - 설정: depth1=td,td_subject text-left, depth2=-, href=2
- 강동구장애인가족지원센터
  - URL: http://xn--o39aoby1e85nw4rx0fwvcmubsl71ekzf4w4a.kr/bbs/board.php?bo_table=notice
  - 설정: depth1=div,bo_tit, depth2=-, href=-1
- 원주시장애인종합복지관
  - URL: http://www.wjrehab.or.kr/bbs/board.php?bo_table=recruit
  - 설정: depth1=td,td_subject, depth2=-, href=-1
- 원광장애인종합복지관
  - URL: https://wwcd.or.kr:59189/wwcd/bbs/board.php?bo_table=bo_18
  - 설정: depth1=div,wr-subject, depth2=-, href=-1
- 용인시처인장애인복지관
  - URL: https://www.heart4u.or.kr/bbs/board.php?bo_table=0202
  - 설정: depth1=td,td_subject text-left, depth2=-, href=2
- 시흥장애인종합복지관
  - URL: http://www.shwcd.org/news
  - 설정: depth1=div,bo_tit, depth2=-, href=-1

### 사이트 요청 실패: 404

기존 게시판 URL이 바뀐 상태입니다. 공식 홈페이지에서 공지/프로그램/모집 게시판의 새 URL을 찾아 homepage_url을 교체해야 합니다.

- 공주시장애인종합복지관
  - URL: http://www.gjwel.or.kr/bbs/?act=bbs&subAct=list&bid=notice&page=1&order_type=desc&category=6
  - 설정: depth1=td,title, depth2=-, href=-1
- 군포시장애인종합복지관
  - URL: https://gunporehab.or.kr/page/0304
  - 설정: depth1=ul, depth2=-, href=1
- 김천시장애인종합복지관
  - URL: http://www.gcwd.or.kr/module/board/board.php?bo_table=open2
  - 설정: depth1=div,subject, depth2=-, href=-1
- 부여군장애인종합복지관
  - URL: http://www.buyeorec.or.kr/module/board/board.php?bo_table=notice
  - 설정: depth1=div,subject, depth2=-, href=-1
- 산엔청복지관
  - URL: http://sncwc.or.kr/communication/notice/?brd=list&pg=1
  - 설정: depth1=tr,list, depth2=-, href=-1
- 울주군장애인복지관
  - URL: https://www.uljusiseol.or.kr/rehab/bbs/selectArticleList.do?bbsId=BBSMSTR_000000000042
  - 설정: depth1=span,link, depth2=-, href=-1
- 용인시기흥장애인복지관
  - URL: https://www.a-sak.or.kr/bbs/board.php?bo_table=notice
  - 설정: depth1=td, subject, depth2=-, href=-1

### 사이트 요청 실패: 403

서버가 자동 요청을 차단합니다. Playwright 브라우저 fallback 또는 기관별 수동 허용/대체 데이터 소스가 필요합니다.

- 동두천시장애인종합복지관
  - URL: http://www.ddcjb06.net/bbs/board.php?bo_table=0401&page=1
  - 설정: depth1=td,td_subject text-left, depth2=-, href=-1
- 수원시장애인종합복지관
  - URL: https://www.suwonrehab.or.kr/bbs/board.php?bo_table=program
  - 설정: depth1=tr,text-center, depth2=-, href=1
- 성민복지관
  - URL: https://www.sungminwelfare.or.kr/bbs/board.php?bo_table=notice
  - 설정: depth1=td,td_subject, depth2=-, href=-1

