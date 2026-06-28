import { createServerSupabase, createServiceSupabase } from "@/lib/supabase-server";
import type { Program, ProgramStatus, Site } from "@/types/database";

export async function getPublishedPrograms() {
  const supabase = createServerSupabase();
  const { data, error } = await supabase
    .from("programs")
    .select("*, sites(name, homepage_url)")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as Program[];
}

export async function getAdminPrograms(status?: ProgramStatus) {
  const supabase = createServiceSupabase();
  let query = supabase
    .from("programs")
    .select("*, sites(name, homepage_url)")
    .order("created_at", { ascending: false });

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    throw error;
  }

  return (data ?? []) as Program[];
}

export async function getSites() {
  const supabase = createServiceSupabase();
  const { data, error } = await supabase.from("sites").select("*").order("name");

  if (error) {
    throw error;
  }

  return (data ?? []) as Site[];
}
