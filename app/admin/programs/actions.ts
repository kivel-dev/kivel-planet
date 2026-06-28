"use server";

import { revalidatePath } from "next/cache";
import { createServiceSupabase } from "@/lib/supabase-server";
import type { ProgramStatus } from "@/types/database";

const allowedStatuses = new Set<ProgramStatus>(["candidate", "published", "held", "rejected", "archived"]);

export async function updateProgramStatus(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as ProgramStatus;

  if (!id || !allowedStatuses.has(status)) {
    throw new Error("잘못된 프로그램 상태입니다.");
  }

  const supabase = createServiceSupabase();
  const { error } = await supabase
    .from("programs")
    .update({
      status,
      published_at: status === "published" ? new Date().toISOString() : null
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/");
  revalidatePath("/programs");
  revalidatePath("/admin/programs");
}
