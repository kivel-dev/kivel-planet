import { AdminNav } from "@/components/AdminNav";
import { getLatestFailedScrapeRuns } from "@/lib/programs";
import { scrapeSiteNow, updateSiteSettings } from "../sites/actions";

export const dynamic = "force-dynamic";

function keywordText(value: string[]) {
  return value.join(",");
}

function reasonLabel(message: string) {
  if (message.includes("404")) return "주소 변경";
  if (message.includes("403")) return "자동 요청 차단";
  if (message.includes("fetch failed")) return "접속 실패";
  return "기타";
}

export default async function AdminFailuresPage() {
  const runs = await getLatestFailedScrapeRuns();

  return (
    <>
      <AdminNav />
      <main className="page">
        <div className="toolbar">
          <div>
            <h1>실패 기관</h1>
            <p className="meta">최근 수집에 실패한 기관 {runs.length.toLocaleString()}곳의 설정을 점검합니다.</p>
          </div>
          <a className="button secondary" href="/admin/sites">
            기관 설정
          </a>
        </div>

        <section className="panel">
          <table className="table failure-table">
            <thead>
              <tr>
                <th>원인</th>
                <th>기관</th>
                <th>설정</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((run) => {
                const site = run.sites;

                if (!site) {
                  return null;
                }

                return (
                  <tr key={run.id}>
                    <td>
                      <span className="badge">{reasonLabel(run.message)}</span>
                      <p className="cell-note">{run.message}</p>
                      <p className="cell-note">{new Date(run.created_at).toLocaleString("ko-KR")}</p>
                    </td>
                    <td>
                      <strong>{site.name}</strong>
                      <p className="cell-note">
                        <a href={site.homepage_url} target="_blank" rel="noreferrer">
                          원본 열기
                        </a>
                      </p>
                    </td>
                    <td>
                      <form action={updateSiteSettings} className="inline-edit-form">
                        <input type="hidden" name="site_id" value={site.id} />
                        <label>
                          기관명
                          <input name="name" defaultValue={site.name} required />
                        </label>
                        <label className="wide-field">
                          URL
                          <input name="homepage_url" defaultValue={site.homepage_url} required />
                        </label>
                        <label>
                          지역
                          <input name="region" defaultValue={site.region} />
                        </label>
                        <label>
                          유형
                          <input name="center_type" defaultValue={site.center_type} />
                        </label>
                        <label>
                          depth1
                          <input name="selector_depth1" defaultValue={site.selector_depth1} required />
                        </label>
                        <label>
                          depth2
                          <input name="selector_depth2" defaultValue={site.selector_depth2} />
                        </label>
                        <label>
                          href
                          <input name="href_index" type="number" defaultValue={site.href_index} />
                        </label>
                        <label>
                          포함
                          <input name="include_keywords" defaultValue={keywordText(site.include_keywords)} />
                        </label>
                        <label>
                          제외
                          <input name="exclude_keywords" defaultValue={keywordText(site.exclude_keywords)} />
                        </label>
                        <label className="check-field">
                          <input name="is_active" type="checkbox" defaultChecked={site.is_active} />
                          사용
                        </label>
                        <button type="submit" className="secondary">
                          저장
                        </button>
                      </form>
                    </td>
                    <td>
                      <form action={scrapeSiteNow}>
                        <input type="hidden" name="site_id" value={site.id} />
                        <button type="submit">재수집</button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {runs.length === 0 ? <div className="empty">최근 실패한 기관이 없습니다.</div> : null}
        </section>
      </main>
    </>
  );
}
