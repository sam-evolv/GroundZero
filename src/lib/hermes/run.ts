import { getStore } from "@/lib/vault/store";
import { runCouncil } from "./council";

export interface CouncilRunSummary {
  date: string;
  mode: "live" | "dry-run";
  itemsWritten: number;
  heartbeat: string;
}

// Runs the council and writes the result into the vault: one item per proposal,
// plus the brief for the day. The app renders these the moment it revalidates.
export async function runAndWriteCouncil(focus?: string): Promise<CouncilRunSummary> {
  const result = await runCouncil(focus);
  const store = getStore();
  const source = `council ${result.date}${result.mode === "dry-run" ? " (dry-run)" : ""}`;

  let itemsWritten = 0;
  for (const item of result.items) {
    await store.createItem({
      companyId: item.companyId,
      domain: item.domain,
      title: item.title,
      rationale: item.rationale,
      councilNote: item.councilNote,
      effort: item.effort,
      impact: item.impact,
      isOneThing: item.isOneThing,
      state: "proposed",
      source,
      runDate: result.date,
    });
    itemsWritten += 1;
  }

  await store.upsertBrief({
    date: result.date,
    heartbeat: result.heartbeat,
    summary: result.summary,
  });

  return { date: result.date, mode: result.mode, itemsWritten, heartbeat: result.heartbeat };
}
