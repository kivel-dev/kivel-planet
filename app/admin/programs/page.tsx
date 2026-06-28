import { getAdminPrograms } from "@/lib/programs";
import { updateProgramStatus } from "./actions";

export default async function AdminProgramsPage() {
  const programs = await getAdminPrograms();

  return (
    <main className="page">
      <div className="toolbar">
        <div>
          <h1>프로그램 검수</h1>
          <p className="meta">자동 수집된 후보를 확인하고 게시 상태를 관리합니다.</p>
        </div>
        <a className="button secondary" href="/admin/sites">
          기관 설정
        </a>
      </div>

      <section className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>상태</th>
              <th>기관</th>
              <th>제목</th>
              <th>지역</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) => (
              <tr key={program.id}>
                <td><span className="badge">{program.status}</span></td>
                <td>{program.sites?.name ?? "-"}</td>
                <td>
                  <a href={program.source_url} target="_blank" rel="noreferrer">
                    {program.title}
                  </a>
                </td>
                <td>{program.region || "-"}</td>
                <td>
                  <form action={updateProgramStatus} className="row-actions">
                    <input type="hidden" name="id" value={program.id} />
                    <button type="submit" name="status" value="published">
                      게시
                    </button>
                    <button type="submit" name="status" value="held" className="secondary">
                      보류
                    </button>
                    <button type="submit" name="status" value="rejected" className="secondary">
                      제외
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {programs.length === 0 ? <div className="empty">수집된 프로그램 후보가 없습니다.</div> : null}
      </section>
    </main>
  );
}
