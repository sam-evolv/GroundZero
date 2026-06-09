// Domain types for the Ground Zero vault. These mirror the markdown frontmatter
// documented in vault/README.md.

export type Domain = "design" | "innovation" | "security" | "bizdev" | "automation";

export type Effort = "S" | "M" | "L";

export type ItemState =
  | "proposed"
  | "approved"
  | "rejected"
  | "snoozed"
  | "building"
  | "pr_ready"
  | "done";

export type DecisionKind = "approved" | "rejected" | "snoozed" | "discuss";

export interface Company {
  id: string;
  name: string;
  short?: string;
  sector?: string;
}

export interface Item {
  id: string;
  companyId: string;
  domain?: Domain;
  title: string;
  rationale?: string;
  councilNote?: string;
  effort?: Effort;
  impact: number;
  state: ItemState;
  prUrl?: string;
  isOneThing: boolean;
  source?: string;
  runDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Goal {
  id: string;
  companyId: string;
  title: string;
  status: string;
  period?: string;
  metric?: string;
  detail?: string;
}

export interface ProjectState {
  id: string;
  companyId: string;
  headline: string;
  detail?: string;
  valid: boolean;
  updatedAt?: string;
}

export interface Brief {
  date: string;
  ranAt?: string;
  heartbeat?: string;
  summary?: string;
}

export interface Decision {
  id: string;
  itemId: string;
  decision: DecisionKind;
  reason?: string;
  createdAt?: string;
}
