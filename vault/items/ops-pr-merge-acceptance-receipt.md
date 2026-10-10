---
id: ops-pr-merge-acceptance-receipt
company_id: ground-zero
domain: ops
title: Require an exact acceptance receipt before high-risk PR merge
rationale: A paying-client repository absorbed a draft, zero-review PR spanning hundreds of files while the accepted delivery standard still required exact independent acceptance and Sam-approved merge authority.
priority: P1
effort: S
state: proposed
status: proposal-only
is_one_thing: true
source: Ground Zero evidence-backed automation scan 2026-10-09
created_at: "2026-10-09"
---

# Require an exact acceptance receipt before high-risk PR merge

## Material proposal, 9 October 2026 — pre-merge acceptance receipt

Add one deterministic, read-only **merge-readiness receipt** for release, native, integration and client-sensitive pull requests. It should bind the exact candidate head to independent acceptance and explicit merge authority before presenting the merge as ready. This is an advisory gate and evidence packet, not branch protection, an auto-merger or an automated rollback system.

### Bottleneck

[[items/heres-health-week-one-discovery-and-technical-proof]] records the same Here’s Health PR #1 as open, draft and unreviewed at 197 commits / 453 files on 1–2 October. On 7 October it was merged into `main` while still recorded as draft and with zero reviews, moving the paying-client repository forward by 215 commits. [[project_state/heres-health-app]] separately records that the exact 15-commit / 66-file tail after submitted build 8 prepared release changes but had no replacement native compile, signing, upload or device receipt. Current draft PR #6 remains clean but unreviewed at 27 commits / 208 files.

This does not prove that the merged code is defective, and GitHub review count alone is not acceptance. It proves that the recurring merge workflow can change canonical source identity without a single receipt binding the exact head, independent verdict, accepted evidence boundary and Sam-approved merge decision. That conflicts with [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]], which keeps merge authority with Sam and requires proportionate exact-artifact evidence plus independent Vera verification for high-risk work.

The gap is not duplicated by [[items/ops-pr-issue-ageing-escalator]], which ranks stale work, or [[items/ops-graph-engineering-pilot]], which assembles evidence and parity checks. Neither currently returns a decision-bound verdict for the exact PR head immediately before a merge decision.

### Value category

- **Client delivery risk reduction:** prevents a large paying-client source transition from being presented as merge-ready when exact independent acceptance or approval is missing.
- **Release integrity:** keeps repository merge, native build, hosted deployment and user-surface acceptance as separate evidence states.
- **Founder attention protection:** replaces a manual search across PR metadata, Kanban receipts, release notes and Ground Zero boundaries with one bounded exception packet.
- **Auditability:** preserves who approved which exact head and what remained unverified when the decision was made.

### Smallest live test

Run one read-only classifier against two Here’s Health fixtures; do not change GitHub, Kanban, a branch or a deployment:

1. Treat merged PR #1 as the fixed historical negative fixture. Bind repository, base SHA, final head SHA, merge SHA/time, draft state, check state, GitHub reviews and any exact independent-verification or merge-approval receipt that can be resolved from the named systems.
2. Treat current draft PR #6 as the live candidate. Pin its current head/base, changed-file and commit counts, draft/mergeability/check/review state, and any exact-head Vera or Sam receipt. Base or head movement invalidates the receipt.
3. Return only `HOLD`, `READY_FOR_SAM_REVIEW` or `UNKNOWN`. `HOLD` applies when the PR is draft, the candidate changed after review, exact independent acceptance is absent, explicit merge authority is absent, or a required release/native/integration boundary remains unresolved. Missing or contradictory source access returns `UNKNOWN`, never ready.
4. The already-merged PR #1 fixture must classify the historical transition as `MERGED_WITHOUT_BOUND_ACCEPTANCE` when no exact receipt resolves. It must not recommend or perform a revert.
5. PR #6 must remain `HOLD` unless the same exact head gains the required independent verdict and Sam’s explicit merge approval. Passing CI alone, a clean mergeability flag, source-authored evidence or a GitHub review count cannot independently produce readiness.
6. Replay both unchanged fixtures twice. The second receipts must be byte-identical and create no comment, alert or task mutation.

The test ends at a machine-readable receipt plus a concise human review packet.

### Evidence of success

- The PR #1 fixture reproduces the recorded draft/zero-review merge transition and does not mislabel checks, source movement or later hosted state as pre-merge acceptance.
- The live PR #6 receipt binds the exact current head and returns `HOLD` or `UNKNOWN` until a matching independent verdict and explicit approval exist.
- A synthetic positive fixture with a stable exact head, required checks, an independently resolvable Vera verdict and a head-bound Sam approval returns `READY_FOR_SAM_REVIEW`; changing one byte of head identity invalidates it.
- Manual comparison with GitHub metadata, the named Kanban or review receipt, [[project_state/heres-health-app]] and the accepted delivery decision finds no omitted blocker or invented acceptance claim.
- No repository, branch rule, pull request, task, build, deployment, provider, client or production state changes during the test.

### Downside and failure mode

A rigid gate can delay an urgent fix, and review evidence may legitimately live outside GitHub. GitHub’s draft flag, checks and review count are useful metadata but are not a quality verdict. The classifier must accept a separate Vera receipt only when it resolves to the exact head and acceptance contract, expose stale or unreachable evidence as `UNKNOWN`, and allow Sam to make a documented exception without rewriting history. It must never infer that an already-merged PR should be reverted, that a passing check proves release readiness, or that absence of a GitHub review proves the code is bad.

### Approval boundary

Automation may read named non-secret GitHub PR/check metadata, approved Kanban or verification receipts, Ground Zero decisions and current project-state boundaries; then draft the three-state receipt. It may not comment on, close, reopen, label or merge a PR; change branch protection; request reviewers; push; revert; build; sign; upload; deploy; contact a client; spend; or mutate production. Sam retains every merge and exception decision. Any implementation of the gate requires a separate approved engineering task and independent verification.

### What it replaces

It replaces manual pre-merge reconstruction of candidate identity, draft/check/review state, exact independent acceptance and approval authority for high-risk PRs. It does **not** replace engineering review, Vera’s independent verdict, CI, branch protection, release/native/device acceptance, [[items/ops-graph-engineering-pilot]], [[items/ops-pr-issue-ageing-escalator]] or Sam’s merge decision.

### Provenance

Grounded in the 1–7 October Here’s Health source transitions preserved in [[items/heres-health-week-one-discovery-and-technical-proof]] and [[project_state/heres-health-app]], the paid-client status in [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]], and the exact-artifact, independent-review and approval boundaries in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This scan inspected canonical Ground Zero evidence only. It did not merge, revert, comment, deploy, contact anyone, spend or mutate production.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[project_state/heres-health-app]] — current paying-client source and acceptance state
- [[items/heres-health-week-one-discovery-and-technical-proof]] — recorded PR #1 transition and current PR #6 state
- [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]] — paying-client commercial boundary
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]] — independent verification and merge approval standard
- [[items/ops-graph-engineering-pilot]] — evidence assembly upstream of the merge decision
- [[items/ops-pr-issue-ageing-escalator]] — adjacent stale-work triage, not merge readiness

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/ops-automation-moc]]

