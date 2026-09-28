---
id: ops-kanban-terminal-transition-guard
company_id: donworth-ai-solutions
domain: ops
title: Fail closed when a Kanban worker exits without a terminal transition
rationale: Four consecutive Finder replay workers exited without kanban_complete or kanban_block, producing crashes and no user-surface evidence despite a known unmet human-present gate.
priority: P1
effort: S
impact: 93
state: parked
is_one_thing: true
source: Ground Zero evidence-backed automation scan 2026-09-14
created_at: "2026-09-14T18:01:43+01:00"
updated_at: "2026-09-16T12:01:00+01:00"
---

# Fail closed when a Kanban worker exits without a terminal transition

## Reviewed local candidate — 16 September 2026, 12:01 IST

- Forge completed exact local candidate commit `98468308d0b99740f2835ee707eda9f2c3e6e4ab` / tree `01c8f12cb4375a4cc957cfcdd4ef563358010de4` from installed base `682a95258ce9e877cfb607a5ada6436183efdebb`. The live worktree resolves to that tuple and has one modified evidence Markdown file after the commit; the candidate is not described as clean.
- The implementation receipt records 10 focused passes and 68 sibling passes / one skip. Vera independently returned `ACCEPT WITH CONDITIONS` after exact-artifact resolution, first-pass focused and sibling re-runs with retries disabled, and the five required adversarial probes. The held path preserved the human-present gate and did not retry, notify, complete or unblock in the isolated store.
- **Do not install yet.** Vera recommends **park** because delayed-ack or truncated `UNKNOWN` cards remain running and can later be stale-reclaimed despite a completed event; installation would also hold review-phase crashes and remove their existing protocol-violation retry budget. The 357–360 fixtures were synthetic reconstructions, not imported Finder logs. Additional medium findings cover a dirty evidence note, leftover worker PID on already-blocked cards, notifier-cursor movement and stale failure copy.
- The candidate remains local-only: not pushed, merged, installed or exercised on the live dispatcher. The Finder replay, human-present acknowledgement, live board, gateway restart and genuine Windows runtime were not exercised. Promotion, installation and live-runtime change remain Sam's decision. The `kanban.auto_decompose: false` versus historical promotion contradiction remains open.

## Material proposal, 14 September 2026 — terminal-transition guard for Kanban workers

Add a **deterministic end-of-run guard that converts a worker exit without `kanban_complete`, `kanban_request_review`, `kanban_block`, or another valid terminal lifecycle transition into one explicit fail-closed receipt and held task state**. This is a workflow-integrity proposal, not permission to resume blocked work or infer completion.

### Bottleneck

[[project_state/donworth-studio]] records that, after blocked run `306`, an auto-decomposer promotion spawned Finder replay runs `357`–`360`. All four crashed because the workers exited without `kanban_complete` or `kanban_block`; none produced Start, Stop, or replay evidence. The card returned to a costly ambiguous control-plane path even though the unchanged human gate required Sam to be physically present at the unlocked Mac and say `accepted worktree folder open`.

The live configuration recorded in that note still reports `kanban.auto_decompose: false`, while the historical promotion happened anyway. This proposal does not guess at that contradiction's cause. It addresses the independently observed repeatable failure at the worker boundary: a run can end without a durable lifecycle outcome, leaving dispatch/retry logic to reconstruct intent from a crash.

This is distinct from [[items/ops-desktop-ui-approval-readiness-gate]], which checks whether a native UI review should be dispatched, and from [[items/ops-project-state-reconciler]], which reconciles live state into canonical notes. Neither guarantees that every dispatched worker leaves one valid terminal transition.

### Value category

- **Delivery reliability:** prevents silent or ambiguous run termination from becoming repeated crash/retry churn.
- **Founder attention protection:** keeps a known human-gated card held instead of repeatedly surfacing non-progress.
- **Cost and time reclaimed:** avoids repeated worker startup, context reconstruction, and reconciliation for runs that did no user-surface work.
- **Auditability:** gives each worker run one explicit terminal state and reason that downstream automation can evaluate deterministically.

### Smallest live test

Test the guard only on a disposable copy of the recorded Finder replay lifecycle fixtures; do not re-dispatch or mutate `t_f638f8a1`:

1. Replay the four recorded run outcomes (`357`–`360`) into an isolated test store with their absence of valid terminal transitions preserved.
2. On worker-process exit, require exactly one terminal-transition record. If none exists, atomically write `HELD_WORKER_EXIT_NO_TRANSITION` with task id, run id, last durable event id, timestamp, and non-secret failure class.
3. Preserve the task's pre-run blocked reason and human-present gate; do not promote, auto-decompose, retry, complete, or infer progress.
4. Prove idempotency by processing each fixture twice: the second pass must not create another transition, retry, comment, or notification.
5. Include positive fixtures for `kanban_complete`, `kanban_request_review`, and `kanban_block`; the guard must leave each valid transition unchanged.

The test ends with an isolated machine-readable receipt and human-readable summary. It performs no Finder action, board mutation, profile change, deployment, spend, or production action.

### Evidence of success

- Each of the four no-transition fixtures produces exactly one `HELD_WORKER_EXIT_NO_TRANSITION` receipt and zero retries or promotions.
- A second processing pass is byte-stable and creates no duplicate event or notification.
- Valid complete, review, and blocked fixtures are unchanged and never reclassified.
- The preserved blocked reason and exact human-present acknowledgement remain byte-for-byte intact.
- A fresh worker can determine from the receipt that no Start, Stop, replay, acceptance, or approval occurred and that only a human-approved resume may advance the card.
- The guard returns `UNKNOWN` rather than mutating state when the pre-run state or event sequence is incomplete or contradictory.

### Downside and failure mode

A lifecycle guard can hide a deeper worker bug if operators treat the held receipt as the fix, and an over-broad implementation could incorrectly hold a run whose terminal write succeeded but whose acknowledgement was delayed. It may also create a new retry loop if the dispatcher treats the new failure class as immediately runnable. Keep the transition write atomic with run finalisation, reconcile delayed acknowledgements before classifying, preserve the original blocker, suppress automatic retry/promotion for this class, and surface metrics so recurring no-transition exits trigger root-cause investigation rather than normalization.

### Approval boundary

Automation may inspect non-secret task/run events, classify whether a valid terminal transition exists, and in an isolated test emit the proposed held receipt. Any implementation in the live Hermes/Kanban runtime, task-state mutation, dispatcher behavior change, retry-policy change, profile restart, installation, or deployment requires Sam's approval and the accepted Donworth delivery path: Forge implementation in an isolated worktree followed by independent Vera verification. The guard may never approve human gates, resume Finder work, contact anyone, spend money, or mutate production.

### What it replaces

It replaces ambiguous worker crashes, repeated no-progress redispatch, and manual reconstruction of whether a run completed, blocked, or simply exited. It does **not** replace root-cause debugging, [[items/ops-desktop-ui-approval-readiness-gate]], [[items/ops-project-state-reconciler]], the Finder human-present gate, Vera's user-surface acceptance, or Sam's approval decisions.

### Provenance

Grounded in the live-board reconciliation preserved by [[project_state/donworth-studio]] and [[items/ops-project-state-reconciler]]: runs `357`–`360` all exited without a terminal Kanban transition and produced no Start, Stop, or replay receipt. The required explicit failure, recovery, and durable handoff properties come from [[decisions/2026-08-31-agent-legible-system-design-standard]] and [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. The current `kanban.auto_decompose: false` versus historical promotion contradiction is preserved as an open cause, not resolved by inference. No live board, runtime, task, profile, repository, user interface, deployment, or production state was changed during this proposal scan.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[project_state/donworth-studio]] — four no-transition Finder replay crashes and preserved human gate
- [[items/ops-project-state-reconciler]] — canonical reconciliation of the live task and configuration contradiction
- [[items/ops-desktop-ui-approval-readiness-gate]] — complementary pre-dispatch human-readiness gate
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — explicit failure and durable handoff standard
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]] — bounded delivery, recovery, and approval requirements
- [[companies/donworth-ai-solutions]] — parent operating company

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/donworth-ai-solutions]]
- [[context/index]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[decisions/2026-09-16-hermes-routing-drift-correction-and-daily-driver]]
- [[items/ops-desktop-ui-approval-readiness-gate]]
- [[items/ops-project-state-reconciler]]
- [[project_state/donworth-studio]]

