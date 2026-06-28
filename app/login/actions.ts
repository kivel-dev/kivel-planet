"use server";

import { redirect } from "next/navigation";
import { createAuthSupabase } from "@/lib/supabase-auth";

function safeNext(value: FormDataEntryValue | null) {
  const next = String(value ?? "/admin/programs");
  return next.startsWith("/") && !next.startsWith("//") ? next : "/admin/programs";
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData.get("next"));
  const supabase = createAuthSupabase();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=invalid&next=${encodeURIComponent(next)}`);
  }

  redirect(next);
}

export async function signOut() {
  const supabase = createAuthSupabase();
  await supabase.auth.signOut();
  redirect("/login");
}
