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
updated_at: "2026-09-01T18:02:56+01:00"
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

## Material proposal, 14 August 2026 — accepted-requirement drift check

Use the existing graph pilot for one read-only pre-acceptance check rather than opening another automation item.

### Bottleneck

Accepted product requirements are being reconciled against source changes manually and late. On 14 August the live `/Users/samdonworth/Projects/IrelandGPT` root checkout remained at committed base `d533206b`, but carried five modified tracked files with 159 insertions and 1,059 deletions plus untracked proof artifacts. The diff removes automation and capability loading, removes the current separate product surfaces, and changes contract tests to require those outcomes to be absent. Removing the rejected Doing/Done/You labels is directionally valid, but removing their useful outcomes without the adopted Chat, Work and Profile replacement conflicts with [[decisions/2026-08-06-personal-agent-runtime-first-sequence]], [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] and the live ledger in [[items/personal-agent-hermes-desktop-parity]]. The conflict was found through a manual worktree-versus-vault audit after local code and tests had already drifted together.

### Value category

- **Risk reduction:** catches a locally self-consistent implementation and test rewrite that regresses accepted requirements.
- **Decision quality:** distinguishes an accepted presentation change from removal of the underlying product outcome.
- **Time reclaimed:** replaces repeated manual re-reading of decisions, ledgers and large worktree diffs before candidate acceptance.

### Smallest live test

Run one read-only graph against the current dirty IrelandGPT root checkout. Freeze the base commit, tracked diff digest and untracked manifest; load only the three governing notes above; then emit a compact requirement matrix with `PRESERVED`, `REMOVED`, `NOT YET PROVEN` or `CONTRADICTION`, exact source hunks, decision citations and a terminal `PASS`, `HOLD` or `UNKNOWN`. Do not edit the checkout, execute production paths, commit or treat screenshots as acceptance evidence.

### Evidence of success

- The check marks removal of Doing/Done/You labels as non-blocking by itself.
- It separately flags missing Work/Profile replacement plus removed capability and automation outcomes as `CONTRADICTION` and returns `HOLD`.
- Every finding binds to the frozen diff and a current, non-superseded requirement; ambiguous or stale requirements become `UNKNOWN`.
- An independent reviewer reproduces the classification without finding an accepted requirement omitted or a superseded decision enforced.
- Review time is lower than the manual audit while preserving the exact evidence boundary.

### Downside and failure mode

Product decisions are semantic, may supersede one another and cannot be reduced safely to keyword matching. A stale ledger could create false holds, while a broad LLM comparison could invent requirements. Keep the first test narrow, pin the accepted notes explicitly, fail closed on source or requirement drift, and measure reviewer corrections before reuse.

### Approval boundary

Automation may read immutable Git objects, the protected dirty diff, untracked-file metadata and named Ground Zero notes, then draft a receipt. Sam or an independent reviewer decides whether a contradiction is real and what to change. No automated edit, test rewrite, commit, reset, cleanup, push, merge, deployment, production action or acceptance promotion is authorised.

### What it replaces

It replaces the ad hoc pre-acceptance comparison of candidate source and tests against Ground Zero decisions. It does **not** replace product judgement, code review, test execution, security review, the release evidence receipt assembler above, physical-device verification or rendered-surface acceptance.

### Provenance

Grounded in the 14 August live IrelandGPT status and diff, the reconciled source boundary in [[project_state/personal-agent]], the governing ledger in [[items/personal-agent-hermes-desktop-parity]], and the adopted decisions [[decisions/2026-08-06-personal-agent-runtime-first-sequence]], [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] and [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]].

## Material proposal, 1 September 2026 — iteration-budget retry evidence capsule

Use the existing graph pilot for one bounded **retry evidence capsule** rather than opening a separate automation item or adding another standing monitor.

### Bottleneck

Long engineering tasks are losing decision-ready continuity at iteration-budget boundaries, so the next worker has to reconstruct the exact artifact, accepted evidence, failed stage and remaining gates before it can make a safe move. [[project_state/donworth-studio]] records three unaccepted package/runtime attempts in `t_c7fe271a`: run 97 timed out without complete positive-path evidence; run 99 found the omitted gateway `owner` contract and produced the independently accepted repair `ac651aa1…`; and run 103 reached the task gateway but the packaged UI entered local bootstrap, tried to fetch a local commit from GitHub, retained central `HERMES AGENT` and failed to render the seeded session. The successor integration lane `t_11738d3b` then exhausted run 104 mid-smoke. Its preserved evidence already bound one unsigned `app.asar` (`a132eb0897…`), 19 matched identity paths, two owned startup-repair paths and one pre-product AF_UNIX path-length failure, but retry 105 still had to inherit that boundary from narrative state. This is a verified recurring handoff problem, not a request to automate packaging or acceptance.

### Value category

- **Delivery reliability and risk reduction:** prevents a fresh worker from mixing candidates, reopening an accepted repair, skipping an open gate or treating preserved evidence as current acceptance.
- **Time and model cost reclaimed:** replaces transcript archaeology and broad rediscovery after an iteration-budget death with one bounded, machine-readable resume point.
- **Agent legibility:** operationalises the fresh-agent test in [[decisions/2026-08-31-agent-legible-system-design-standard]] for real Kanban retries.

### Smallest live test

After Sam activates the pilot, run one read-only assembler against the already active Donworth integration lane `t_11738d3b`. Read only its task contract, structured handoffs/comments, exact worktree Git metadata and named artifact receipts. Produce a draft capsule containing:

1. task and retry identity;
2. objective, owned/unowned scope and prohibited actions;
3. exact base/head/tree plus package and evidence hashes;
4. independently accepted facts and their receipt IDs;
5. last attempted stage, deterministic failure signature and environment constraint;
6. open gates and evidence that must not be promoted;
7. the next single bounded probe; and
8. invalidation rules for source, artifact, runtime or task-contract drift.

Give the capsule and the existing card—not the old transcript—to one fresh Forge retry. For this fixture, the proposed next probe must remain the short task-owned temp/socket-root correction for the AF_UNIX harness failure, reusing the bound package only if source and `app.asar` hashes still match. The test must not edit source, rebuild, launch, install, drive the UI, change the card, or execute the probe; it evaluates whether a fresh worker can identify the safe next move from the capsule.

### Evidence of success

- The fresh worker reproduces the exact candidate and `app.asar` identity, keeps `ac651aa1…` as an independently accepted owner-contract repair, and does not call the replacement package installed or accepted.
- It identifies the AF_UNIX path-length failure as pre-product and the short-path harness probe as next, without re-running or reopening the 19 identity paths merely to rediscover context; any freshness-driven rerun is explicit.
- Changing the head, tree, artifact hash, task contract or runtime identity invalidates the capsule and returns `HOLD` or `UNKNOWN` rather than silently resuming.
- Vera can compare the capsule with the named receipts and finds no missing open gate, unsupported completion claim or mixed candidate.
- Review records whether the capsule reduced duplicate discovery, repeated checks and time-to-first-useful-probe versus run 104; adoption requires a real reduction with zero evidence-boundary regressions.

### Downside and failure mode

A stale capsule can make the wrong next action look authoritative, while copying raw logs or environment data can leak secrets and create another competing state store. Keep the capsule derived, minimal and task-scoped; store receipt references rather than raw transcripts; exclude credentials, phone numbers and environment values; bind every claim to immutable identities; expire it on any governing drift; and fail closed when the live worktree, artifact or card cannot be reconciled. The capsule is a navigation aid, never acceptance evidence by itself.

### Approval boundary

This proposal authorises no implementation. If Sam activates the pilot, automation may read the named task, non-secret Git metadata and existing receipts and draft one capsule for review. It may not edit source or tests, execute commands in the delivery worktree, rerun the package, launch or install an app, drive a user surface, mutate Kanban state, push, merge, sign, notarise, distribute, deploy, spend, contact a provider or promote any acceptance state. Existing Forge ownership, Vera independence and Sam's consequential-action gates remain unchanged.

### What it replaces

It replaces manual resume-point prose, repeated transcript re-reading and broad rediscovery after iteration-budget exhaustion. It does **not** replace the card's operating contract, [[items/ops-project-state-reconciler]], the release evidence receipt assembler above, test execution, Forge judgement, Vera's exact-artifact review, rendered/runtime verification or Sam's release approval.

### Provenance

Grounded in the 1 September run 97/99/103/104/105 sequence and exact preserved identities in [[project_state/donworth-studio]], the portfolio-wide fresh-agent and recoverable-failure requirements in [[decisions/2026-08-31-agent-legible-system-design-standard]], and this pilot's existing measures for retries, failure recovery, time and model cost.

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
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[goals/personal-agent-ai-operated-company-proof]]
- [[items/oh-live-portal-boundary-activation]]
- [[items/ops-accepted-artifact-custody-gate]]
- [[items/ops-aire-hermes-upstream-impact-triage]]
- [[items/ops-desktop-ui-approval-readiness-gate]]
- [[items/ops-project-state-reconciler]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[project_state/donworth-studio]]
- [[project_state/oh]]
- [[project_state/personal-agent]]

