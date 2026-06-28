import { ProgramCard } from "@/components/ProgramCard";
import { PublicNav } from "@/components/PublicNav";
import { getPublishedPrograms } from "@/lib/programs";

export const dynamic = "force-dynamic";

export default async function ProgramsPage() {
  const programs = await getPublishedPrograms();

  return (
    <>
      <PublicNav />
      <main className="page">
        <div className="toolbar">
          <div>
            <h1>프로그램</h1>
            <p className="meta">관리자가 검수해 게시한 프로그램입니다.</p>
          </div>
        </div>
        <div className="grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        {programs.length === 0 ? <div className="empty">게시된 프로그램이 없습니다.</div> : null}
      </main>
    </>
  );
}
