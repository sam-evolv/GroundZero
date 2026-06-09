"use server";

import { revalidatePath } from "next/cache";
import { getStore } from "@/lib/vault/store";
import { runAndWriteCouncil, runOperatorForItem, type CouncilRunSummary } from "@/lib/hermes/run";

// Runs the Hermes council now and writes the brief into the vault. An optional
// focus lets you point the council at a specific question or company.
export async function runCouncilNow(focus?: string): Promise<CouncilRunSummary> {
  const summary = await runAndWriteCouncil(focus);
  revalidatePath("/");
  return summary;
}

// One-tap decisions. Each writes a decision and, except for discuss, flips the
// item state. Writes go to the vault (local files in dev, commits in prod).

export async function approveItem(id: string): Promise<void> {
  const store = getStore();
  await store.recordDecision({ itemId: id, decision: "approved" });
  await store.setItemState(id, "approved");
  // Hand the approved move to a Hermes operator: it drafts a plan into the vault
  // and moves the item into build. A failure here leaves the item approved.
  try {
    await runOperatorForItem(id);
  } catch {
    // Operator failure must not block the approval.
  }
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

export async function getItemPlan(id: string): Promise<string | null> {
  return getStore().getPlan(id);
}

export async function discussItem(id: string, note: string): Promise<void> {
  const store = getStore();
  await store.recordDecision({ itemId: id, decision: "discuss", reason: note });
  // TODO(council): send the note back to the council. Persist only for now.
  revalidatePath("/");
}
