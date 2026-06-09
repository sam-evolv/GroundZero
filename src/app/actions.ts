"use server";

import { revalidatePath } from "next/cache";
import { getStore } from "@/lib/vault/store";
import { runAndWriteCouncil, runOperatorForItem } from "@/lib/hermes/run";

export type CouncilRunOutcome =
  | { ok: true; mode: "live" | "dry-run"; itemsWritten: number }
  | { ok: false; error: string };

// Runs the Hermes council now and writes the brief into the vault. An optional
// focus lets you point the council at a specific question or company. Errors are
// returned (not thrown) so the UI can show a useful reason instead of hanging.
export async function runCouncilNow(focus?: string): Promise<CouncilRunOutcome> {
  try {
    const summary = await runAndWriteCouncil(focus);
    revalidatePath("/");
    return { ok: true, mode: summary.mode, itemsWritten: summary.itemsWritten };
  } catch (error) {
    return { ok: false, error: describeWriteError(error) };
  }
}

function describeWriteError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  if (/not accessible by personal access token/i.test(message) || /GitHub \w+ .*: 403/.test(message)) {
    return "The vault token is read-only. Set the GitHub token to Contents: Read and write, then redeploy.";
  }
  if (/GitHub \w+ /.test(message)) {
    return "Writing to the vault failed. Check GITHUB_VAULT_TOKEN and GITHUB_VAULT_BRANCH.";
  }
  if (/NVIDIA API/.test(message)) {
    return "The model call failed. Check NVIDIA_API_KEY and the HERMES_MODEL id.";
  }
  return "The council could not run. Check the server logs.";
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
