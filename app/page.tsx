import Link from "next/link";
import { ProgramCard } from "@/components/ProgramCard";
import { PublicNav } from "@/components/PublicNav";
import { getPublishedPrograms } from "@/lib/programs";

export default async function HomePage() {
  const programs = await getPublishedPrograms();
  const latest = programs.slice(0, 6);

  return (
    <>
      <PublicNav />
      <main className="page">
        <section className="hero">
          <span className="badge">치료, 체험, 검사 프로그램 통합 안내</span>
          <h1>흩어진 아동 프로그램 정보를 한곳에서 확인하세요.</h1>
          <p>
            복지관과 가족지원센터의 공지사항을 자동으로 모으고, 관리자가 검수한 프로그램만
            이용자에게 보여주는 서비스입니다.
          </p>
          <Link className="button" href="/programs">
            프로그램 보기
          </Link>
        </section>

        <section>
          <div className="section-header">
            <h2>최근 게시된 프로그램</h2>
            <Link href="/programs">전체 보기</Link>
          </div>
          <div className="grid">
            {latest.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          {latest.length === 0 ? <div className="empty">아직 게시된 프로그램이 없습니다.</div> : null}
        </section>
      </main>
    </>
  );
}
