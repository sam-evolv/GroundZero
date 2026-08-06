---
id: ops-graph-engineering-pilot
company_id: ground-zero
domain: ops
title: Prove one bounded Hermes execution graph on three internal tasks
rationale: Complex research and audit work currently relies too heavily on one agent producing and judging its own output. A small evidence graph can separate research, synthesis, review and approval without adding a new production framework.
council_note: Graph engineering pilot · Effort M
priority: P1
effort: M
impact: 86
state: proposed
is_one_thing: true
source: graph engineering research 2026-08-04
run_date: "2026-08-04"
created_at: "2026-08-04T22:20:00+01:00"
updated_at: "2026-08-04T22:20:00+01:00"
---

## Objective

Implement one reusable, read-only Hermes workflow graph using existing Kanban dependencies, specialist profiles, structured handoffs and a deterministic evidence gate. Test it on three internal tasks before considering LangGraph or any production integration.

## Graph

```text
scope
→ parallel source, product-state and commercial researchers
→ synthesizer
→ independent adversarial reviewer
→ deterministic evidence gate
→ human approval when consequential
→ Ground Zero artifact and run receipt
```

## Constraints

- No production changes, outreach, publishing, payments or customer communication.
- No node may inherit tools it does not need.
- Reviewer is read-only and returns structured PASS or FAIL.
- Maximum two revision cycles.
- Every run has a graph version, run ID, node IDs, budget and terminal status.
- Ground Zero is shared durable state, not a scratchpad for unrestricted agent writes.

## Three test runs

1. Current AI research brief with primary-source citations.
2. OpenHouse release-readiness or evidence audit against immutable artifacts.
3. Discovery-led commercial meeting brief using verified company and prospect evidence.

## Measures

- human corrections after automated PASS
- unsupported claims caught
- routing and reducer errors
- retries and failure recovery
- time and model cost
- quality versus a single-agent baseline
- removable nodes

## Done when

- A versioned graph contract and node-contract template exist.
- All three runs complete or fail closed with durable receipts.
- One comparison report states whether the graph improved quality enough to justify its cost.
- Sam decides adopt, simplify or stop.

## Connected notes

- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[context/ops-automation-moc]]
- [[context/agentic-value-creation-mission]]
- [[context/founder-execution-os]]
- [[companies/openhouse-ai]]
- [[project_state/oh]]
- [[items/_Index]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[briefs/2026-08-05-phosphen-karpathy-llm-use-source-audit]]
- [[companies/openhouse-ai]]
- [[context/agentic-value-creation-mission]]
- [[context/founder-execution-os]]
- [[context/ops-automation-moc]]
- [[project_state/oh]]

