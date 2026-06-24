import matter from "gray-matter";
import type { DecisionKind, Domain, Effort, ItemState } from "./types";

// Returns the markdown with its frontmatter state and updated_at rewritten,
// preserving every other field and the body. Used by both stores so a write
// looks the same whether it lands on disk or as a commit.
export function applyStateToRaw(raw: string, state: string, updatedAt: string): string {
  const parsed = matter(raw);
  const data = { ...parsed.data, state, updated_at: updatedAt };
  return matter.stringify(parsed.content, data);
}

export function buildDecisionFile(input: {
  id: string;
  itemId: string;
  decision: DecisionKind;
  reason?: string;
  createdAt: string;
}): string {
  const data: Record<string, unknown> = {
    id: input.id,
    item_id: input.itemId,
    decision: input.decision,
    created_at: input.createdAt,
  };
  if (input.reason) data.reason = input.reason;
  return matter.stringify("", data);
}

export interface ItemFileInput {
  id: string;
  companyId: string;
  domain?: Domain;
  title: string;
  rationale?: string;
  councilNote?: string;
  effort?: Effort;
  impact: number;
  state: ItemState;
  isOneThing: boolean;
  source?: string;
  runDate?: string;
  createdAt: string;
  updatedAt: string;
}

// Builds an item markdown file. Council-authored and app-authored items share
// this so the format is identical whoever writes it.
export function buildItemFile(input: ItemFileInput): string {
  const data: Record<string, unknown> = {
    id: input.id,
    company_id: input.companyId,
    title: input.title,
    impact: input.impact,
    state: input.state,
    is_one_thing: input.isOneThing,
    created_at: input.createdAt,
    updated_at: input.updatedAt,
  };
  if (input.domain) data.domain = input.domain;
  if (input.rationale) data.rationale = input.rationale;
  if (input.councilNote) data.council_note = input.councilNote;
  if (input.effort) data.effort = input.effort;
  if (input.source) data.source = input.source;
  if (input.runDate) data.run_date = input.runDate;
  return matter.stringify("", data);
}

export function buildBriefFile(input: {
  date: string;
  ranAt: string;
  heartbeat?: string;
  summary?: string;
}): string {
  const data: Record<string, unknown> = {
    date: input.date,
    ran_at: input.ranAt,
  };
  if (input.heartbeat) data.heartbeat = input.heartbeat;
  return matter.stringify(input.summary ?? "", data);
}

// An execution plan for an approved item, drafted by the Hermes operator. The
// body is the readable plan; the frontmatter links it back to the item.
export function buildPlanFile(input: {
  itemId: string;
  createdAt: string;
  content: string;
}): string {
  return matter.stringify(input.content, {
    item_id: input.itemId,
    created_at: input.createdAt,
  });
}

export function buildLaunchFile(input: {
  id: string;
  companyId: string;
  title: string;
  date: string;
  mode: "live" | "dry-run";
  summary?: string;
  heartbeat?: string;
  focus?: string;
  thesis: string;
  buyer: string;
  wedge: string;
  offer: string;
  validationTest: string;
  approvalGates: string[];
  signalMetrics: string[];
  nextStep: string;
  landingHeadline?: string;
  landingSubhead?: string;
  landingPoints?: string[];
  landingCta?: string;
  outreachMessage?: string;
  followUpMessage?: string;
  qualificationQuestions?: string[];
  signalCapture?: string;
  createdAt: string;
  updatedAt: string;
}): string {
  const data: Record<string, unknown> = {
    id: input.id,
    company_id: input.companyId,
    title: input.title,
    date: input.date,
    mode: input.mode,
    created_at: input.createdAt,
    updated_at: input.updatedAt,
    thesis: input.thesis,
    buyer: input.buyer,
    wedge: input.wedge,
    offer: input.offer,
    validation_test: input.validationTest,
    approval_gates: input.approvalGates,
    signal_metrics: input.signalMetrics,
    next_step: input.nextStep,
  };
  if (input.summary) data.summary = input.summary;
  if (input.heartbeat) data.heartbeat = input.heartbeat;
  if (input.focus) data.focus = input.focus;
  if (input.landingHeadline) data.landing_headline = input.landingHeadline;
  if (input.landingSubhead) data.landing_subhead = input.landingSubhead;
  if (input.landingPoints) data.landing_points = input.landingPoints;
  if (input.landingCta) data.landing_cta = input.landingCta;
  if (input.outreachMessage) data.outreach_message = input.outreachMessage;
  if (input.followUpMessage) data.follow_up_message = input.followUpMessage;
  if (input.qualificationQuestions) data.qualification_questions = input.qualificationQuestions;
  if (input.signalCapture) data.signal_capture = input.signalCapture;

  const body = [
    `# Launch brief: ${input.title}`,
    "",
    input.summary ?? input.thesis,
    "",
    "## Landing page",
    `### ${input.landingHeadline ?? input.title}`,
    input.landingSubhead ?? input.offer,
    ...(input.landingPoints ?? []).map((point) => `- ${point}`),
    "",
    "## Outreach",
    input.outreachMessage ?? "",
    "",
    "## Follow-up",
    input.followUpMessage ?? "",
    "",
    "## Signal capture",
    input.signalCapture ?? "Track replies, calls booked, objections, and pilots.",
    "",
    "## Next step",
    input.nextStep,
  ]
    .filter((line, index, all) => !(line === "" && (index === 0 || all[index - 1] === "")))
    .join("\n");

  return matter.stringify(body, data);
}

export function buildLaunchSignalFile(input: {
  id: string;
  launchId: string;
  companyId: string;
  signalType: string;
  note: string;
  createdAt: string;
}): string {
  const body = [
    `# Launch signal: ${input.signalType}`,
    "",
    input.note,
  ].join("\n");

  return matter.stringify(body, {
    id: input.id,
    launch_id: input.launchId,
    company_id: input.companyId,
    signal_type: input.signalType,
    created_at: input.createdAt,
  });
}

// Stable, readable id for a proposed item: the run date plus a slug of the
// title. One council run rarely proposes two items with the same title.
export function proposedItemId(runDate: string, title: string): string {
  return `${runDate}-${slugify(title)}`;
}

export function launchBriefId(date: string, title: string): string {
  return `launch-${date}-${slugify(title)}`;
}

export function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "item"
  );
}
