import { getStore } from "@/lib/vault/store";
import { runCouncil } from "./council";
import { runLaunchLoop } from "./launch";
import { planExecution, renderPlanMarkdown } from "./operator";

export interface CouncilRunSummary {
  date: string;
  mode: "live" | "dry-run";
  itemsWritten: number;
  heartbeat: string;
}

export interface LaunchRunSummary {
  date: string;
  mode: "live" | "dry-run";
  saved: boolean;
  title: string;
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

export async function runAndWriteLaunchLoop(focus?: string): Promise<LaunchRunSummary> {
  const result = await runLaunchLoop(focus);
  const store = getStore();
  await store.upsertLaunch({
    date: result.date,
    companyId: result.companyId,
    title: result.title,
    summary: result.summary,
    heartbeat: result.heartbeat,
    focus: result.focus,
    thesis: result.thesis,
    buyer: result.buyer,
    wedge: result.wedge,
    offer: result.offer,
    validationTest: result.validationTest,
    approvalGates: result.approvalGates,
    signalMetrics: result.signalMetrics,
    nextStep: result.nextStep,
    landingHeadline: result.landingHeadline,
    landingSubhead: result.landingSubhead,
    landingPoints: result.landingPoints,
    landingCta: result.landingCta,
    outreachMessage: result.outreachMessage,
    followUpMessage: result.followUpMessage,
    qualificationQuestions: result.qualificationQuestions,
    signalCapture: result.signalCapture,
    mode: result.mode,
  });
  return { date: result.date, mode: result.mode, saved: true, title: result.title };
}

export interface OperatorRunSummary {
  itemId: string;
  mode: "live" | "dry-run";
  built: boolean;
}

// Drafts an execution plan for an approved item, writes it into the vault, and
// moves the item into build. This is how an approval starts getting done.
export async function runOperatorForItem(itemId: string): Promise<OperatorRunSummary> {
  const store = getStore();
  const [items, companies] = await Promise.all([store.listItems(), store.listCompanies()]);
  const item = items.find((i) => i.id === itemId);
  if (!item) return { itemId, mode: "dry-run", built: false };

  const company = companies.find((c) => c.id === item.companyId);
  const plan = await planExecution(item, company);
  await store.upsertPlan(itemId, renderPlanMarkdown(item, plan));
  await store.setItemState(itemId, "building");
  return { itemId, mode: plan.mode, built: true };
}
