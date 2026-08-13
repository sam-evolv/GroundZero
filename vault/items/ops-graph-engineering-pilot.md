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
updated_at: "2026-08-13T00:00:00+01:00"
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

## Material proposal, 13 August 2026 — release evidence receipt assembler

Use the release-readiness test run above to prove one reusable, read-only receipt assembler rather than opening a separate automation item.

### Bottleneck

Release and repair evidence is repeatedly reconstructed by hand across repositories, deployments, runtimes and physical devices. The latest [[project_state/oh]] check proves that OpenHouse `main` advanced directly to `b1629c34` and Vercel served the exact commit, but rendered homeowner acceptance, full type/lint validation and database correctness remained open. The latest [[project_state/personal-agent]] check records Aire source advancing to unpublished `36d769f` with durable Work receipts, while `3556088` remains the last signed, installed and directly rendered physical-iPhone candidate; the newer receipt UI, fresh streaming request, visible Home Screen icon, accessibility findings and currently unavailable private tailnet route remain open. These are the same failure mode: implementation, build, deployment, installation and user-visible acceptance are different states, but the handoff is assembled manually from scattered evidence.

### Value category

- **Risk reduction:** prevents a built, served or installed candidate being reported as user-surface accepted.
- **Time reclaimed and decision quality:** produces one reviewable release receipt instead of re-reading logs, checks and project-state prose.
- **Reusable workflow and proof asset:** supplies the audit trail required by [[goals/personal-agent-ai-operated-company-proof]] without automating release authority.

### Smallest live test

Run the graph read-only against two completed real candidates using evidence that already exists:

1. OpenHouse production commit `b1629c34` and its associated Vercel deployment.
2. Aire physical-device candidate `3556088` and its recorded runtime, signing, installation and screenshot evidence.

The assembler must emit a compact receipt with immutable candidate identity, source receipts, verification layers (`implemented`, `built`, `served/installed`, `rendered`, `accepted`), explicit missing checks, approval state and a terminal `PASS`, `HOLD` or `UNKNOWN`. It must not execute tests, drive a device, change GitHub/Vercel settings, deploy, promote or publish.

### Evidence of success

- It reproduces the known truth boundary: OpenHouse is `served` but not rendered-accepted; Aire is installed and partly rendered-verified but still `HOLD` on fresh streaming, visible icon and accessibility closure.
- Every claim links to a named source or receipt; unavailable evidence becomes `UNKNOWN`, never an inferred pass.
- An independent reviewer can reproduce both classifications from the cited inputs and finds no unsupported completion claim.
- The receipt is shorter to review than the underlying handoff while preserving all release-blocking gaps.

### Downside and failure mode

A receipt can create false confidence if source evidence is stale, candidate identities are mixed or physical-device acceptance is reduced to automated checks. Fail closed on missing or mismatched commit, deployment, runtime or device identity. Keep direct rendered-screen review and independent technical review outside the automation.

### Approval boundary

Automated scope is read-only evidence collection, classification and a draft Ground Zero receipt. Sam must approve any push, merge, repository-rule change, deployment, alias move, migration, device interaction that changes state, production promotion or public proof asset. No secrets belong in the receipt.

### What it replaces

It replaces the ad hoc manual assembly of release handoffs and repeated re-reading needed to answer “what is actually verified?”. It does **not** replace tests, security review, [[items/ops-project-state-reconciler]], physical-device acceptance or human release approval.

### Provenance

Derived from the 13 August live evidence in [[project_state/oh]], [[items/oh-live-portal-boundary-activation]] and [[project_state/personal-agent]], plus the auditable-workflow requirement in [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]] and [[goals/personal-agent-ai-operated-company-proof]].

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

