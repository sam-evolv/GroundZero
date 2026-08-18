---
id: ops-project-state-reconciler
company_id: ground-zero
domain: ops
title: Reconcile project_state and company memory from live signals
rationale: The daily run keeps rebuilding the same current state from PRs, issues, deployments, and recent notes, then manually patches project_state and company memory.
council_note: State sync pass · Effort M
effort: M
impact: 87
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T18:02:52+01:00"
updated_at: "2026-08-16T18:02:00+01:00"
---

## What the automation does
Reads the live signals and compares them with `project_state/` and the OpenHouse company memory, then drafts a minimal update or patch for only the notes that drifted. It should preserve human review for any contradiction and keep the canonical state aligned after each sync.

## Tools and APIs
- Local filesystem access to `vault/project_state/`, `vault/companies/`, and `vault/items/`
- GitHub API for PR and issue state
- Vercel status checks
- Supabase CLI or API where credentials allow
- Optional LLM diff summarisation for deciding what changed

## Estimated setup effort
M. The main work is mapping live signals to the right note fields and making sure the diffs stay small.

## Expected time savings
15 to 25 minutes per day, plus less drift between the live systems and the vault.

## Priority ranking
P1

## Connects to

- [[items/ops-daily-sync-digest]] — daily ops digest
- [[items/ops-daily-report-pack]] — daily report pack
- [[imports/claude/openhouse-company-memory]] — OH company memory
- [[project_state/oh]], [[project_state/ob]], [[project_state/renew]] — project_state notes
- [[context/ops-automation-moc]] — MOC hub


## Incubation analysis, 18 July 2026

### Opportunity size
This has high portfolio leverage because stale state is already affecting decisions: OpenBook and Evolv have not been live-refreshed since 1 July, while OpenHouse checks are current. Better reconciliation reduces repeated research and prevents work being prioritised against old facts.

### Technical approach, risks and effort
Create a source hierarchy, compare timestamped live observations with canonical claims, and draft minimal patches with provenance. Never overwrite unresolved contradictions. Medium setup effort is justified only if the reconciler distinguishes unknown, blocked and unchanged states. The central risk is converting an unavailable check into a false statement that nothing changed.

### Market timing and recommendation
Agentic operations increase the value of reliable shared state, but correctness matters more than automation breadth. This is mature enough for a bounded internal project after Cara's P0 measurement gap. First scope should cover only project_state timestamps, GitHub facts and explicit unavailable checks.

## Material proposal, 15 August 2026 — local source-custody manifest

Extend this existing reconciler with one **read-only local Git custody slice** rather than opening another automation item.

### Bottleneck

Material work is repeatedly discovered late because local branches and worktrees are not represented by remote state and the canonical inventory is rebuilt manually. [[project_state/cara]] was corrected on 15 August only after a live worktree sweep found its parent branch plus three clean, no-upstream worktrees—one seven commits and 20 files beyond the recorded parent—that the earlier summary omitted. [[project_state/ob]] now records two clean unpublished candidates (`658e67a` and `de26b62`) while a separate renderer checkout still has an unresolved conflict. [[project_state/personal-agent]] names installed, startup-verified candidate `83e582c` as a clean local unpublished source of truth while the root checkout contains contradictory uncommitted drift. These are different product states, but they share one recurring custody problem: GitHub alone cannot show what work exists, which candidate is authoritative, or what could be lost or misreported.

### Value category

- **Risk reduction:** surfaces unpublished heads, dirty checkouts, conflicts and candidate-identity ambiguity before cleanup, machine failure or a mistaken handoff.
- **Decision quality:** separates source custody from implementation, deployment, rendered acceptance and venture activation.
- **Time reclaimed:** replaces repeated manual `worktree`, branch-containment and status reconstruction during project-state reconciliation.

### Smallest live test

Run one read-only inventory over the already named local repositories/worktrees for Aire, OpenBook and parked Cara. For each checkout record repository, worktree path, branch or detached state, exact head, clean/dirty/conflicted state, upstream, remote branches containing the head, divergence from the nominated parent/default branch, latest commit date, canonical project status and whether Ground Zero already names that candidate. Emit only a draft custody manifest and exceptions list; do not inspect secrets or source contents beyond Git metadata.

### Evidence of success

- The manifest reproduces the known Aire `83e582c`, OpenBook `658e67a` and `de26b62`, and Cara `196cf3c`, `73de73a`, `464b1ef` and `03b4d99` custody boundaries from their current project-state notes.
- It flags every no-upstream or non-remotely-contained head, the OpenBook conflict and the contradictory dirty Aire root checkout without calling any candidate deployed, accepted or active.
- It keeps Cara explicitly parked and does not turn discovered code into a reactivation signal.
- A manual spot-check of `git status`, `git worktree list`, upstream configuration and remote containment finds no omitted checkout or unsupported classification.
- A second unchanged run produces no alert, while a newly dirty or newly uncontained head produces one concise exception.

### Downside and failure mode

A broad filesystem crawler could collect irrelevant repositories, expose sensitive paths in reports or create noisy warnings for intentionally local work. Stale parent-branch assumptions could also overstate divergence. Keep the first test to repositories already named in Ground Zero, store no source bodies or secrets, distinguish intentional local-only state from unresolved risk, and treat unknown ownership or purpose as `UNKNOWN`, not urgent failure.

### Approval boundary

Automation may read local Git metadata and remote refs, compare them with named Ground Zero notes and draft a manifest. It may not commit, stash, reset, clean, delete a worktree or branch, create or change an upstream, fetch from an unapproved remote, push, open a pull request, merge, deploy, archive, reactivate a parked venture or change candidate authority. Sam approves every custody-changing action.

### What it replaces

It replaces ad hoc local-branch and worktree discovery during project-state audits. It does **not** replace backups, code review, release receipts, physical-device acceptance, [[items/ops-daily-sync-digest]] or human decisions about whether work should be preserved, published, merged or discarded.

### Provenance

Derived from the 15 August reconciliations in [[project_state/cara]], [[project_state/ob]] and [[project_state/personal-agent]], the live-source authority rule in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]], and this reconciler's existing requirement to surface contradictions without false success.

## Material proposal, 16 August 2026 — observation ledger and change-only project-state projection

Extend this reconciler with an **append-only observation ledger plus a change-only canonical projection** rather than opening another automation item.

### Bottleneck

The live `Ground Zero — Canonical Project State Reconciler` runs every four hours. On 16 August it wrote five long entries into [[project_state/personal-agent]] at 00:02, 04:01, 08:07, 12:04 and 16:03 IST. Across those entries the accepted Aire candidate, both compatibility heads, unpublished-source boundary, observed BFF and Hermes processes, unauthenticated endpoint results and no-mutation boundary remained unchanged. Upstream Hermes did advance at every checkpoint and the affected subsystems were relevant, so the observations should not be discarded; however, repeating the full state reconstruction in the canonical project note makes the current decision boundary harder to read and spends an agent run on prose that is mostly unchanged. The existing reconciler contract already calls for minimal patches only when notes drift, while the adopted context pattern in [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]] separates append-only events from reproducible current views.

### Value category

- **Decision quality:** keeps [[project_state/personal-agent]] as a compact current projection while preserving every source observation and explicit unknown.
- **Time and inference reclaimed:** reduces repeated four-hour summarisation and later re-reading of near-duplicate prose.
- **Risk reduction:** makes a real transition—new accepted candidate, loaded runtime, route degradation, resolved blocker or approval-state change—more visible instead of burying it among routine checkpoints.
- **Auditability:** retains timestamped raw receipts for the evidence-proven operating model required by [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]].

### Smallest live test

Use the five existing 16 August Aire reconciliation entries as a fixed, read-only fixture. Parse each run into a small observation receipt containing source timestamp, source identity, observed head or runtime identity, result, unavailable checks and evidence classification. Then generate one draft `current projection` outside the canonical note that:

1. preserves the latest upstream head and cumulative divergence;
2. preserves every active blocker and verification boundary;
3. collapses unchanged local heads, listener state, authentication results and no-mutation statements;
4. records all five receipt IDs in the audit trail; and
5. emits a human-facing alert only if a decision-relevant classification changes.

Replay the fixture a second time to prove idempotence, then add two synthetic events: one upstream-only advance and one newly loaded or accepted Aire candidate. The first should update the ledger and compact upstream checkpoint without duplicating the project-state narrative; the second must change the projection and produce an alert. Do not edit the live cron job or canonical notes during this test.

### Evidence of success

- One draft projection reproduces the authoritative 16:03 state, including upstream `7095e23e`, the unchanged local candidates, stale observed processes, host-side tailnet DNS gap and all open Profile, Work and rendered-device acceptance gaps.
- All five runs remain recoverable as timestamped receipts with provenance; no blocker, contradiction or unavailable check disappears.
- Replaying identical input produces a byte-identical projection and no alert.
- An upstream-only advance updates its bounded checkpoint without repeating unchanged local/runtime prose.
- A new candidate, loaded runtime, health degradation, resolved blocker or acceptance promotion changes the projection and creates one concise exception.
- A manual comparison against [[project_state/personal-agent]] finds zero unsupported state changes and materially less text to review.

### Downside and failure mode

Over-aggressive compaction could hide a gradually widening integration risk or convert an unavailable check into apparent stability. Keep the raw receipts append-only, carry forward explicit `UNKNOWN` and blocked checks, show the latest upstream head plus cumulative divergence, and define material transitions conservatively. If the projector cannot prove equivalence with the source receipts, it must leave the canonical note unchanged and surface `UNKNOWN` rather than compacting.

### Approval boundary

Automation may read named live sources and canonical notes, write append-only observation receipts, compute a draft projection and suppress delivery when no decision-relevant classification changed. It may not delete or rewrite historical receipts, change the four-hour schedule, edit the live cron job, alter source authority, fetch from an unapproved remote, integrate code, restart a process, push, deploy, change a route, drive a device or promote acceptance without Sam's approval. Canonical project-state writes should remain reviewable and fail closed on contradiction.

### What it replaces

It replaces repeated long-form appendages and full prose reconstruction for materially unchanged reconciliation fields. It does **not** replace the four-hour evidence checks, the local source-custody manifest above, [[items/ops-daily-sync-digest]], release receipts, direct device verification or human judgement about whether upstream drift requires integration work.

### Provenance

Grounded in the five 16 August observations in [[project_state/personal-agent]], the live four-hour schedule and successful 16:06 run of `Ground Zero — Canonical Project State Reconciler`, this item's existing minimal-patch contract, the event/projection pattern in [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]], the canonical-authority boundary in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]], and the auditable-workflow requirement in [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]].

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]]
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/ground-zero-canonical]]
- [[items/ops-aire-hermes-upstream-impact-triage]]
- [[items/ops-daily-report-pack]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-weekly-status-pack]]
- [[project_state/cara]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/personal-agent]]
- [[project_state/renew]]


## Recommendation
Strong candidate because it removes the most repetitive bookkeeping after the daily status sweep. It also reduces the chance that later analyses run on stale state.
