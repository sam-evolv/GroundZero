import type { Company, Item } from "@/lib/vault/types";
import { callModel, extractJson } from "./model";

export interface ExecutionPlan {
  summary: string;
  steps: string[];
  claudeCodePrompt: string;
  mode: "live" | "dry-run";
}

const OPERATOR_SYSTEM = `You are a Hermes operator. The founder just approved a move. Your job is to turn it into something that can actually get built, so it comes off the founder's plate.

Produce:
- summary: one sentence on how you will execute this.
- steps: 3 to 6 concrete, ordered steps a competent engineer or operator would follow.
- claude_code_prompt: a single, ready-to-run prompt for Claude Code (the coding agent) that would implement the first buildable slice. Be specific about files and the acceptance check. If the move is not a coding task, write a prompt for the most useful automation instead.

Rules: ground everything in the item and company given. Be concrete, not generic. Never use em dashes. Respond with only a single JSON object, no prose around it.`;

// Drafts an execution plan for an approved item. Live with a provider key,
// deterministic dry run without one.
export async function planExecution(item: Item, company?: Company): Promise<ExecutionPlan> {
  const text = await callModel({
    system: OPERATOR_SYSTEM,
    user: operatorUserMessage(item, company),
  });

  if (text === null) {
    return dryRunPlan(item, company);
  }

  const parsed = extractJson<{
    summary?: string;
    steps?: unknown;
    claude_code_prompt?: string;
  }>(text);
  if (!parsed) {
    throw new Error("The operator response was not valid JSON");
  }

  return {
    summary: parsed.summary?.trim() || `Execute: ${item.title}`,
    steps: Array.isArray(parsed.steps) ? parsed.steps.map((s) => String(s)) : [],
    claudeCodePrompt: parsed.claude_code_prompt?.trim() || "",
    mode: "live",
  };
}

function operatorUserMessage(item: Item, company?: Company): string {
  const lines = [
    `Company: ${company?.name ?? item.companyId}${company?.sector ? ` (${company.sector})` : ""}`,
    `Domain: ${item.domain ?? "general"}`,
    `Approved move: ${item.title}`,
  ];
  if (item.rationale) lines.push(`Why: ${item.rationale}`);
  if (item.councilNote) lines.push(`Council verdict: ${item.councilNote}`);
  lines.push(
    "",
    "Return only this JSON object and nothing else:",
    '{"summary": "...", "steps": ["..."], "claude_code_prompt": "..."}'
  );
  return lines.join("\n");
}

function dryRunPlan(item: Item, company?: Company): ExecutionPlan {
  const where = company?.name ?? item.companyId;
  return {
    summary: `Dry run plan for "${item.title}". Add a model provider key for a real one.`,
    steps: [
      `Scope the smallest useful slice of "${item.title}" for ${where}.`,
      "Identify the repo and files it touches.",
      "Build the slice behind a check you can verify.",
      "Review, then ship.",
    ],
    claudeCodePrompt: `Implement the first slice of "${item.title}" for ${where}. Keep it small and verifiable. This is a dry-run placeholder; set a model provider key for a grounded prompt.`,
    mode: "dry-run",
  };
}

// Renders the plan as the markdown that lands in the vault (Obsidian readable).
export function renderPlanMarkdown(item: Item, plan: ExecutionPlan): string {
  const lines = [`# Plan: ${item.title}`, "", plan.summary, "", "## Steps"];
  plan.steps.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
  lines.push("", "## Claude Code prompt", "", "```", plan.claudeCodePrompt, "```");
  return lines.join("\n");
}
