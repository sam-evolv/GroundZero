import matter from "gray-matter";
import type { DecisionKind } from "./types";

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
