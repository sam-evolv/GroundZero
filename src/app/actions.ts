"use server";

import { revalidatePath } from "next/cache";
import { getStore } from "@/lib/vault/store";

// One-tap decisions. Each writes a decision and, except for discuss, flips the
// item state. Writes go to the vault (local files in dev, commits in prod).

export async function approveItem(id: string): Promise<void> {
  const store = getStore();
  await store.recordDecision({ itemId: id, decision: "approved" });
  await store.setItemState(id, "approved");
  // TODO(council): trigger the council routine API for the approved item here.
  revalidatePath("/");
}

export async function rejectItem(id: string, reason: string): Promise<void> {
  const store = getStore();
  await store.recordDecision({ itemId: id, decision: "rejected", reason });
  await store.setItemState(id, "rejected");
  revalidatePath("/");
}

export async function snoozeItem(id: string): Promise<void> {
  const store = getStore();
  await store.recordDecision({ itemId: id, decision: "snoozed" });
  await store.setItemState(id, "snoozed");
  revalidatePath("/");
}

export async function discussItem(id: string, note: string): Promise<void> {
  const store = getStore();
  await store.recordDecision({ itemId: id, decision: "discuss", reason: note });
  // TODO(council): send the note back to the council. Persist only for now.
  revalidatePath("/");
}
