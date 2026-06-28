import type { Program } from "@/types/database";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="card">
      <span className="badge">{program.region || "지역 확인 중"}</span>
      <h3>
        <a href={program.source_url} target="_blank" rel="noreferrer">
          {program.title}
        </a>
      </h3>
      <div className="meta">
        <span>{program.sites?.name ?? "기관명 확인 중"}</span>
        <span>{program.center_type || "기관 유형 확인 중"}</span>
      </div>
    </article>
  );
}
