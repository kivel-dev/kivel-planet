import { signIn } from "./actions";

export default function LoginPage({
  searchParams
}: {
  searchParams: { error?: string; next?: string };
}) {
  const next = searchParams.next ?? "/admin/programs";

  return (
    <main className="auth-page">
      <section className="auth-panel">
        <div>
          <span className="badge">Kivel Planet Admin</span>
          <h1>관리자 로그인</h1>
          <p>프로그램 수집 설정과 검수 화면은 관리자만 접근할 수 있습니다.</p>
        </div>

        <form action={signIn} className="auth-form">
          <input type="hidden" name="next" value={next} />
          <label>
            이메일
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            비밀번호
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          {searchParams.error ? <p className="form-error">로그인 정보를 다시 확인해주세요.</p> : null}
          <button type="submit">로그인</button>
        </form>
      </section>
    </main>
  );
}
