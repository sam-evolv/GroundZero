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

// Stable, readable id for a proposed item: the run date plus a slug of the
// title. One council run rarely proposes two items with the same title.
export function proposedItemId(runDate: string, title: string): string {
  return `${runDate}-${slugify(title)}`;
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
