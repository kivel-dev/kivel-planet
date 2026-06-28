import { getSites } from "@/lib/programs";
import { createSite, scrapeSiteNow } from "./actions";

export default async function AdminSitesPage() {
  const sites = await getSites();

  return (
    <main className="page">
      <div className="toolbar">
        <div>
          <h1>기관 설정</h1>
          <p className="meta">자동 수집 대상 사이트와 게시판 선택자를 관리합니다.</p>
        </div>
        <a className="button secondary" href="/admin/programs">
          프로그램 검수
        </a>
      </div>

      <section className="panel form-panel">
        <h2>기관 추가</h2>
        <form action={createSite} className="site-form">
          <label>
            기관명
            <input name="name" required />
          </label>
          <label>
            홈페이지 주소
            <input name="homepage_url" type="url" required />
          </label>
          <label>
            지역
            <input name="region" />
          </label>
          <label>
            기관 유형
            <input name="center_type" placeholder="복지관, 가족지원센터" />
          </label>
          <label>
            depth1
            <input name="selector_depth1" required placeholder="li, board-row" />
          </label>
          <label>
            depth2
            <input name="selector_depth2" placeholder="a, title" />
          </label>
          <label>
            href index
            <input name="href_index" type="number" defaultValue="-1" />
          </label>
          <label>
            포함 키워드
            <input name="include_keywords" placeholder="아동,치료,검사,체험" />
          </label>
          <label>
            제외 키워드
            <input name="exclude_keywords" placeholder="성인,노인" />
          </label>
          <button type="submit">추가</button>
        </form>
      </section>

      <section className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>기관</th>
              <th>지역</th>
              <th>유형</th>
              <th>상태</th>
              <th>수집</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site.id}>
                <td>
                  <a href={site.homepage_url} target="_blank" rel="noreferrer">
                    {site.name}
                  </a>
                </td>
                <td>{site.region || "-"}</td>
                <td>{site.center_type || "-"}</td>
                <td>{site.is_active ? "사용" : "중지"}</td>
                <td>
                  <form action={scrapeSiteNow}>
                    <input type="hidden" name="site_id" value={site.id} />
                    <button type="submit">실행</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {sites.length === 0 ? <div className="empty">등록된 기관이 없습니다.</div> : null}
      </section>
    </main>
  );
}
