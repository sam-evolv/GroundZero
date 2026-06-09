import type {
  Brief,
  Company,
  Decision,
  DecisionKind,
  Domain,
  Effort,
  Goal,
  Item,
  ItemState,
  ProjectState,
} from "./types";

export type Frontmatter = Record<string, unknown>;

export interface RawDoc {
  data: Frontmatter;
  content: string;
  slug: string;
}

export function mapItem({ data, content, slug }: RawDoc): Item {
  return {
    id: str(data.id) ?? slug,
    companyId: str(data.company_id) ?? "",
    domain: str(data.domain) as Domain | undefined,
    title: str(data.title) ?? "Untitled",
    rationale: str(data.rationale) ?? (content || undefined),
    councilNote: str(data.council_note),
    effort: str(data.effort) as Effort | undefined,
    impact: num(data.impact) ?? 0,
    state: (str(data.state) as ItemState) ?? "proposed",
    prUrl: str(data.pr_url),
    isOneThing: bool(data.is_one_thing),
    source: str(data.source),
    runDate: str(data.run_date),
    createdAt: str(data.created_at),
    updatedAt: str(data.updated_at),
  };
}

export function mapCompany({ data, slug }: RawDoc): Company {
  return {
    id: str(data.id) ?? slug,
    name: str(data.name) ?? slug,
    short: str(data.short),
    sector: str(data.sector),
  };
}

export function mapGoal({ data, content, slug }: RawDoc): Goal {
  return {
    id: str(data.id) ?? slug,
    companyId: str(data.company_id) ?? "",
    title: str(data.title) ?? "Untitled",
    status: str(data.status) ?? "active",
    period: str(data.period),
    metric: str(data.metric),
    detail: content || undefined,
  };
}

export function mapProjectState({ data, content, slug }: RawDoc): ProjectState {
  const headline = str(data.headline);
  return {
    id: str(data.id) ?? slug,
    companyId: str(data.company_id) ?? "",
    headline: headline ?? (content || "No state recorded"),
    detail: headline ? content || undefined : undefined,
    valid: bool(data.valid),
    updatedAt: str(data.updated_at),
  };
}

export function mapBrief({ data, content, slug }: RawDoc): Brief {
  return {
    date: str(data.date) ?? slug,
    ranAt: str(data.ran_at),
    heartbeat: str(data.heartbeat),
    summary: content || undefined,
  };
}

export function mapDecision({ data, slug }: RawDoc): Decision {
  return {
    id: str(data.id) ?? slug,
    itemId: str(data.item_id) ?? "",
    decision: (str(data.decision) as DecisionKind) ?? "discuss",
    reason: str(data.reason),
    createdAt: str(data.created_at),
  };
}

// YAML can hand back strings, numbers, booleans, or Date objects (unquoted
// dates). Normalize defensively so authored files never crash a render.

function str(value: unknown): string | undefined {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "number") return String(value);
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
  }
  return undefined;
}

function num(value: unknown): number | undefined {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return undefined;
}

function bool(value: unknown): boolean {
  return value === true || value === "true";
}
