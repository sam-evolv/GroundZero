---
id: ops-aire-hermes-upstream-impact-triage
company_id: ground-zero
domain: ops
title: Triage upstream Hermes changes into an Aire compatibility queue
rationale: The reconciler observes fast upstream drift, but Sam still has to reconstruct which changes affect Aire's accepted product and runtime boundaries.
council_note: Aire upstream impact triage · Effort S
priority: P1
effort: S
impact: 89
state: proposed
is_one_thing: true
source: Ground Zero workflow automation scan 2026-08-17
run_date: "2026-08-17"
created_at: "2026-08-17T18:01:00+01:00"
updated_at: "2026-08-18T20:05:00+01:00"
---

# Triage upstream Hermes changes into an Aire compatibility queue

## Reconciliation checkpoint, 18 August 2026 20:05 IST

Direct GitHub inspection places NousResearch Hermes `main` at `57f1219d`, 17 commits beyond the 16:02 `8911e2e0` checkpoint and 758 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially isolate relay client-timeout payloads (`aa09c8fe`), normalise sparse OpenAI response objects through the streaming path (`9664e386`), configure the Desktop Capabilities view against the selected profile's own gateway (`d8e23869`), add editable Bot Mode group identity (`4349cbbb`), and extend delegated-CLI refusal coverage (`9c0fcceb`, `57f1219d`). These are material review inputs for Aire's request reliability, Profile-scoped capability authority, Desktop parity and orchestration evidence; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..57f1219d`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 16:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `8911e2e0`, 19 commits beyond the 12:02 `daca3869` checkpoint and 741 commits beyond compatibility base `f0c222c`. Exact changed paths and commits materially add a Desktop in-app browser address bar and history (`5117eb7c`), browser gestures and agent-opened web links (`ccabff89`, `d48b4415`), hotkey access (`a9a4a040`), remote-agent localhost explanation (`3e9859be`), deep Settings and credential search (`eb6922a8`, `2d579af8`), loopback reach through an SSH gateway and primary-transport preview routing (`0600738f`, `956642c4`, `8911e2e0`), plus clearer TUI reference vocabulary and composition (`e69d2fda`, `c1358e45`). These are material review inputs for Aire's contextual live-work browser, Desktop parity, remote-runtime routing and mainstream settings discoverability; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..8911e2e0`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 12:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `daca3869`, 22 commits beyond the 08:02 `b95ec1cb` checkpoint and 722 commits beyond compatibility base `f0c222c`. Exact changed paths and commits add default-profile display naming across CLI, API and Desktop (`a1682376`), neighbouring-session promotion after closing the main split-pane session (`2d511f55`), multi-group/threaded/@-mention Bot Mode routing (`4bb7e491`, `9bea4391`, `6abe6ede`, `daca3869`), and canonical spillover persistence for oversized tool results (`c91681c6`, `8a770aae`). These are material review inputs for Aire's Profile identity, Desktop recovery, orchestration and artifact/result-retention contracts; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..daca3869`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 08:02 IST

Direct GitHub inspection places NousResearch Hermes `main` at `b95ec1cb`, 31 commits beyond the 04:01 `c9ce66e` checkpoint and 700 commits beyond compatibility base `f0c222c`. Exact changed paths now include Desktop connection routing and primary-backend startup, Sessions/Bots pane enforcement, gateway settings, Bot Mode group-turn handling, macOS translucency, parked-branch update guards, and delegation/process provenance. These are material review inputs for Aire's Desktop parity, connection continuity, durable work and orchestration boundaries; they do not establish Aire integration or progress.

The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`, and the observed long-running processes still predate the compatibility branches. The first live test now uses immutable range `f0c222c..b95ec1cb`; no queue, integration, reload or acceptance occurred, and all existing Profile, Work, receipt, streaming, icon and accessibility gaps remain open.

## Reconciliation checkpoint, 18 August 2026 04:01 IST

Direct GitHub inspection now places NousResearch Hermes `main` at `c9ce66e`, 66 commits beyond the prior `66221397` checkpoint and 669 commits beyond the compatibility base `f0c222c`. The new range materially touches peer messaging, profile-scoped session persistence and profile lifecycle, virtual-model alias recovery, cron media delivery, skill security scanning, Bot Mode/settings profile scope and database event-loop safety. The accepted and compatibility heads remain `83e582c`, `944a03e` and `1004f3e`; the observed long-running Aire and Hermes processes still predate the compatibility branches. This is a larger review input, not Aire product progress.

The original `4323c67d` range below remains the creation-time provenance for this proposal. This checkpoint's then-current range was `f0c222c..c9ce66e`; it is preserved as history and superseded for the first live test by the 08:02 checkpoint above.

## Material proposal, 17 August 2026

### Bottleneck

[[project_state/personal-agent]] records six upstream checkpoints between 20:03 on 16 August and 16:01 on 17 August. Across them, the accepted Aire candidate and local compatibility heads stayed fixed at `83e582c`, `944a03e` and `1004f3e`, while NousResearch Hermes `main` moved from `12b1f0f8` to `4323c67d` and reached 524 commits beyond the compatibility line's `f0c222c` base. Each checkpoint identifies relevant subsystems—runtime and gateway lifecycle, profiles, retained work, cron receipts, approvals, Desktop recovery, MCP and computer use—but the workflow stops at observation. Sam still has to reconstruct which upstream changes are required for the current Profile `404`, Work `502`, accepted Chat/Work/Profile contract and [[items/personal-agent-hermes-desktop-parity]], which are regression risks, and which can safely wait. Commit count alone is not a product priority, but repeated manual impact review is now a verified bottleneck.

This is distinct from [[items/ops-project-state-reconciler]]: its observation-ledger proposal makes the current state compact and auditable; this proposal converts a pinned upstream range into one bounded, decision-ready compatibility queue.

### Value category

- **Risk reduction:** catches upstream contract, recovery or security changes that could invalidate the local compatibility tranche before integration or acceptance.
- **Decision quality:** prioritises changes by named Aire blocker or accepted requirement rather than upstream volume or novelty.
- **Time reclaimed:** replaces repeated commit-range reading and subsystem reconstruction after every reconciliation checkpoint.
- **Delivery focus:** separates `REQUIRED NOW`, `REVIEW BEFORE INTEGRATION`, `MONITOR` and `NOT RELEVANT TO CURRENT AIRE GATE` without treating upstream movement as product progress.

### Smallest live test

Run one read-only analysis over the immutable GitHub comparison range `f0c222c..57f1219d`, using only commit metadata, changed paths and diffs plus these named Ground Zero authorities:

- [[project_state/personal-agent]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]

Group commits by consumer-facing contract rather than chronology, deduplicate merge and follow-up commits, and emit a draft queue with: exact upstream commit(s), changed path(s), affected Aire contract, current local coverage, classification, reason, required verification and explicit `UNKNOWN` fields. Limit the first test to the open Profile, Work, retained-work/receipt, session recovery, approval and gateway/runtime compatibility boundaries already named in Ground Zero. Do not fetch into or alter a local checkout, write code, integrate a commit, restart a process or drive a device.

### Evidence of success

- The receipt pins base `f0c222c`, head `57f1219d` and the canonical 758-commit divergence without interpreting the count itself as urgency.
- Every `REQUIRED NOW` or `REVIEW BEFORE INTEGRATION` row binds to at least one immutable upstream commit and changed path, one current Aire blocker or accepted requirement, and one explicit verification gate.
- The queue preserves `83e582c` as the physically startup-verified source of truth and keeps `944a03e` and `1004f3e` classified as unintegrated and unaccepted.
- Profile `404`, Work `502`, Work Receipt, fresh streaming, icon and accessibility gaps remain open unless direct evidence closes them.
- An independent reviewer can reproduce the classifications and finds no current requirement omitted, no superseded requirement enforced and no upstream-only feature promoted as Aire progress.
- Re-running the same pinned range produces a byte-identical queue and no new alert; only a changed upstream head or changed Ground Zero requirement can open a new review delta.

### Downside and failure mode

Path and commit-message heuristics can miss semantic API changes, over-rank noisy upstream work or under-rank a security or lifecycle regression. A large queue could also distract from repairing the already-known Profile and Work failures. Keep the scope to named Aire contracts, bind findings to exact diffs, cap `REQUIRED NOW` to changes with a direct current blocker or acceptance impact, and return `UNKNOWN` when the evidence is insufficient. The queue recommends review order; it never certifies compatibility.

### Approval boundary

Automation may read immutable GitHub metadata and diffs, already-present Git objects and the named Ground Zero notes, then write a draft compatibility-impact receipt. It may not fetch into or modify a local repository, create or switch a branch, cherry-pick, merge, rebase, edit tests or source, restart or reload a runtime, change configuration or routes, push, deploy, publish, drive the iPhone, promote a candidate or close an acceptance gap. Sam approves every integration and release action; immutable independent review and rendered-device acceptance remain separate gates.

### What it replaces

It replaces ad hoc reading of hundreds of upstream commits and repeated “what changed that matters to Aire?” reconstruction after four-hour reconciler runs. It does **not** replace [[items/ops-project-state-reconciler]], its observation ledger or source-custody manifest, [[items/ops-graph-engineering-pilot]], [[items/personal-agent-hermes-desktop-parity]], code review, integration work, tests, runtime verification or physical-device acceptance.

### Provenance

Grounded in the 16–18 August live reconciliations in [[project_state/personal-agent]], the unintegrated compatibility boundary in [[items/personal-agent-hermes-desktop-parity]] and [[companies/personal-agent]], the runtime-first sequence in [[decisions/2026-08-06-personal-agent-runtime-first-sequence]], the accepted Chat/Work/Profile contract in [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]], and the canonical authority boundary in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]. It also operationalises the earlier evidence rule that a Hermes update should be mapped to a named bottleneck rather than adopted merely to reduce commit lag.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[items/ops-project-state-reconciler]] — source observations and change-only projection
- [[items/ops-graph-engineering-pilot]] — independent evidence and review pattern
- [[items/personal-agent-hermes-desktop-parity]] — governing capability and acceptance ledger
- [[project_state/personal-agent]] — current source, runtime and physical-device state
- [[companies/personal-agent]] — Aire company context
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]] — integration sequence
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] — accepted product contract
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — authority boundary

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/personal-agent]]
- [[context/dashboard]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-project-state-reconciler]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[project_state/personal-agent]]

