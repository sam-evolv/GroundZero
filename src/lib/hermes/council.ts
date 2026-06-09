import type { Domain, Effort } from "@/lib/vault/types";
import { buildCouncilContext, type CouncilContext } from "./context";
import { COUNCIL_SYSTEM_PROMPT, buildCouncilUserMessage } from "./prompts";
import { callModel, extractJson } from "./model";

export interface ProposedItem {
  companyId: string;
  domain: Domain;
  title: string;
  rationale: string;
  councilNote: string;
  effort: Effort;
  impact: number;
  isOneThing: boolean;
}

export interface CouncilResult {
  date: string;
  heartbeat: string;
  summary: string;
  items: ProposedItem[];
  mode: "live" | "dry-run";
}

// Runs one council pass. With a provider configured (NVIDIA or Anthropic) this
// is a live model call; without one, a deterministic dry run grounded in the
// same context so the loop is fully usable and testable.
export async function runCouncil(focus?: string): Promise<CouncilResult> {
  const context = await buildCouncilContext();

  const text = await callModel({
    system: COUNCIL_SYSTEM_PROMPT,
    user: buildCouncilUserMessage(context.briefingText, context.companyIds, focus),
  });

  if (text === null) {
    return dryRun(context);
  }

  const parsed = extractJson<{
    heartbeat?: string;
    summary?: string;
    items?: Array<Record<string, unknown>>;
  }>(text);
  if (!parsed) {
    throw new Error("The council response was not valid JSON");
  }

  const items = normalize(
    (parsed.items ?? []).map((raw) => ({
      companyId: String(raw.company_id ?? ""),
      domain: raw.domain as Domain,
      title: String(raw.title ?? "Untitled"),
      rationale: String(raw.rationale ?? ""),
      councilNote: String(raw.council_note ?? ""),
      effort: (raw.effort as Effort) ?? "M",
      impact: clampImpact(raw.impact),
      isOneThing: raw.is_one_thing === true,
    })),
    context
  );

  return {
    date: context.date,
    heartbeat: parsed.heartbeat?.trim() || defaultHeartbeat(items),
    summary: parsed.summary?.trim() || "",
    items,
    mode: "live",
  };
}

// Ensures the result is coherent before it is written: valid companies, a clean
// ranking, and exactly one "one thing".
function normalize(items: ProposedItem[], context: CouncilContext): ProposedItem[] {
  const valid = items.filter((item) => context.companyIds.includes(item.companyId));
  valid.sort((a, b) => b.impact - a.impact);
  return valid.map((item, index) => ({ ...item, isOneThing: index === 0 }));
}

function clampImpact(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(n)) return 50;
  return Math.max(0, Math.min(100, Math.round(n)));
}

function defaultHeartbeat(items: ProposedItem[]): string {
  if (items.length === 0) return "The council found nothing new worth your attention today.";
  return `${items.length} moves on the table. Start with the one thing.`;
}

// Deterministic dry run. Grounded in the real companies so the brief reads true,
// and clearly labeled so it is never mistaken for a live council verdict.
function dryRun(context: CouncilContext): CouncilResult {
  const companies = context.companyIds.slice(0, 3);
  const templates: Array<{ domain: Domain; effort: Effort; impact: number; verb: string }> = [
    { domain: "automation", effort: "M", impact: 72, verb: "Automate a weekly manual report for" },
    { domain: "bizdev", effort: "L", impact: 64, verb: "Open one new revenue channel for" },
    { domain: "innovation", effort: "M", impact: 57, verb: "Prototype one sharp new capability for" },
  ];

  const items: ProposedItem[] = companies.map((companyId, index) => {
    const company = context.companiesById[companyId];
    const template = templates[index % templates.length];
    return {
      companyId,
      domain: template.domain,
      title: `${template.verb} ${company?.short ?? company?.name ?? companyId}`,
      rationale: "Dry run placeholder. Set a model provider key for a live, grounded council verdict.",
      councilNote: `${capitalize(template.domain)} pass · Effort ${template.effort}`,
      effort: template.effort,
      impact: template.impact,
      isOneThing: index === 0,
    };
  });

  return {
    date: context.date,
    heartbeat: "Dry run. Add NVIDIA_API_KEY (or ANTHROPIC_API_KEY) to let the council think for real.",
    summary: "This brief was generated in dry-run mode without a live model call.",
    items,
    mode: "dry-run",
  };
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
