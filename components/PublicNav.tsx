import Link from "next/link";

export function PublicNav() {
  return (
    <nav className="topnav">
      <Link href="/" className="brand">
        아동 프로그램 모아보기
      </Link>
      <div className="navlinks">
        <Link href="/programs">프로그램</Link>
        <Link href="/admin/programs">관리자</Link>
      </div>
    </nav>
  );
}
