import Anthropic from "@anthropic-ai/sdk";
import type { Company, Item } from "@/lib/vault/types";

export interface ExecutionPlan {
  summary: string;
  steps: string[];
  claudeCodePrompt: string;
  mode: "live" | "dry-run";
}

const MODEL = process.env.HERMES_MODEL || "claude-opus-4-8";

const OPERATOR_SYSTEM = `You are a Hermes operator. The founder just approved a move. Your job is to turn it into something that can actually get built, so it comes off the founder's plate.

Produce:
- summary: one sentence on how you will execute this.
- steps: 3 to 6 concrete, ordered steps a competent engineer or operator would follow.
- claude_code_prompt: a single, ready-to-run prompt for Claude Code (the coding agent) that would implement the first buildable slice. Be specific about the repo, files, and the acceptance check. If the move is not a coding task, write a prompt for the most useful automation instead.

Rules: ground everything in the item and company given. Be concrete, not generic. Never use em dashes.`;

const PLAN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    summary: { type: "string" },
    steps: { type: "array", items: { type: "string" } },
    claude_code_prompt: { type: "string" },
  },
  required: ["summary", "steps", "claude_code_prompt"],
} as const;

// Drafts an execution plan for an approved item. Live with a key, deterministic
// dry run without one.
export async function planExecution(item: Item, company?: Company): Promise<ExecutionPlan> {
  if (!process.env.ANTHROPIC_API_KEY) {
    return dryRunPlan(item, company);
  }

  const client = new Anthropic();
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    thinking: { type: "adaptive" },
    output_config: {
      effort: "high",
      format: { type: "json_schema", schema: PLAN_SCHEMA },
    },
    system: [
      { type: "text", text: OPERATOR_SYSTEM, cache_control: { type: "ephemeral" } },
    ],
    messages: [{ role: "user", content: operatorUserMessage(item, company) }],
  });

  const text = response.content.find((block) => block.type === "text");
  if (!text || text.type !== "text") {
    throw new Error("Operator returned no structured output");
  }

  const parsed = JSON.parse(text.text) as {
    summary?: string;
    steps?: unknown;
    claude_code_prompt?: string;
  };

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
  lines.push("", "Draft the execution plan.");
  return lines.join("\n");
}

function dryRunPlan(item: Item, company?: Company): ExecutionPlan {
  const where = company?.name ?? item.companyId;
  return {
    summary: `Dry run plan for "${item.title}". Add ANTHROPIC_API_KEY for a real one.`,
    steps: [
      `Scope the smallest useful slice of "${item.title}" for ${where}.`,
      "Identify the repo and files it touches.",
      "Build the slice behind a check you can verify.",
      "Review, then ship.",
    ],
    claudeCodePrompt: `Implement the first slice of "${item.title}" for ${where}. Keep it small and verifiable. This is a dry-run placeholder; set ANTHROPIC_API_KEY for a grounded prompt.`,
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
