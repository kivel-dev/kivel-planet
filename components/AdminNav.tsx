import Link from "next/link";
import { signOut } from "@/app/login/actions";

export function AdminNav() {
  return (
    <nav className="topnav">
      <Link href="/admin/programs" className="brand">
        Kivel Planet Admin
      </Link>
      <div className="navlinks">
        <Link href="/admin/programs">프로그램 검수</Link>
        <Link href="/admin/sites">기관 설정</Link>
        <Link href="/admin/failures">실패 기관</Link>
        <form action={signOut}>
          <button type="submit" className="link-button">
            로그아웃
          </button>
        </form>
      </div>
    </nav>
  );
}
