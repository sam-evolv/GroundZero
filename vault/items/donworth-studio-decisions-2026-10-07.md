---
id: donworth-studio-decisions-2026-10-07
company_id: donworth-ai-solutions
headline: "Studio Saved Jobs Decisions check is a tested local source candidate; provider activation and Desktop acceptance remain separate."
valid: true
updated_at: "2026-10-07T08:33:37Z"
role: item
status: review
---

# Studio manual Decisions check, 7 October 2026

Sam requested Decisions API integration in the existing workflow. Source: delegated Codex
thread `01a0fe5d-0131-7577-bcca-36e3d0b150db`; completed task receipt
`/Users/samdonworth/Documents/Codex/2026-10-07/task-3/DECISIONS-HANDOFF.md`.

- Verified private Studio main `a1cec24eb756aa62214034ae21432acf6f2fbb05` and open/draft PR13
  head `6246fabe014fb3590b94e207031f57f0a503077a` during discovery. A separate local clone at
  `/Users/samdonworth/Documents/Codex/2026-10-07/task-3/donworth-decisions`, branch
  `codex/decisions-workflow-20261007`, contains tested commit
  `67b9d63a3523c8456ba72794f32f3aa2144d076e`, 15 files, 1204 additions and 4 deletions.
  Original Studio checkout remains clean. No remote push, PR creation, merge or deployment.
- Implemented Saved Jobs > New job > Check work priorities, using a separately entered
  redacted summary. It provides bounded category, capability, urgency, effort, lead and
  evidence suggestions. It cannot start work, alter a model, save a job or grant permissions.
  Hosted dot reasoning/chat orchestration and existing workflow execution are unchanged.
- Default shadow mode is offline, with explicit unknowns and human review. Provider use
  requires owning-profile suggestion configuration, existing approved OPENAI_API_KEY scope,
  and manual per-request consent. Official Decisions REST contract uses gpt-6-luna through
  existing httpx because the pinned Python SDK 2.24.0 lacks the Decisions resource.
- Verified 254 Python automation tests, 38 UI/localization tests, TypeScript, ESLint, Ruff,
  whitespace checks and 12/12 synthetic contract fixtures. Actual UI rendered an offline
  result with checkbox off, six unknowns and the review notice. These are implementation
  checks and mocked fixtures, not independent release or live model-quality acceptance.
  Evaluation explicitly records zero live provider calls and model_quality_measured false.
- Activation gap: direct Studio Decisions entitlement was not established. No actual
  credential values were inspected or configured, no private inbox content exported, and
  no live provider, inbox, agent action or background automation was activated. Approval
  of a synthetic/redacted live evaluation and its spend precedes suggestion activation.
  Candidate review, reconciliation of unmerged PR13, packaging/install and real Desktop
  acceptance remain separate. Accuracy, calibration, provider latency and costs unmeasured.
- Personal Hermes source/config/runtime, Here's Health launch code and other preview
  projects were not modified. A separate Hermes Decisions implementation was reported by
  the parent, so this candidate remains confined to Studio. Native scope messaging to the
  source thread was denied by automatic approval review for missing destination authorization;
  no message was sent or retried. Normal delegated completion provides the handoff.

Next action: review the exact local commit/patch, then confirm the approved direct provider
route and synthetic evaluation scope before any activation. Current Desktop release history
in [[project_state/donworth-studio]] is not superseded by this source work.
This Ground Zero write-back is local only; no vault commit, push or sync was initiated and
cross-agent availability has not been verified.

## Activation review follow-up, 7 October 2026

Read-only Studio-owned metadata checks found no .env/OpenAI key entry, direct OpenAI
provider or external secrets source in the bootstrap, legacy or account runtime homes.
No credential values were revealed and personal Hermes was not contacted. This establishes
an absent persistent route in inspected Studio profiles, not absence of OpenAI account
entitlement or transient cached credentials; no authenticated probe was made. Current remote
main and PR13 still match a1cec24e and 6246fabe, and the original Studio checkout is clean.
The saved New project root is Riverstick Motors; an older Studio release folder has a stale
Git pointer. Do not use either as evidence that this candidate is installed or released.

Exact offline activation scope is in
`/Users/samdonworth/Documents/Codex/2026-10-07/task-3/DECISIONS-ACTIVATION-PLAN.md`.
Proposed run is at most 12 sequential synthetic-only Decisions requests, one attempt each,
6 fixed questions, 5000-byte request maximum, 120000-input-token local stop budget and
USD 0.02 proposed approval budget. The API exposes no max-token/max-cost parameter;
these are client stop rules, not a guaranteed billing ceiling. Strict cap approval requires
an existing enforceable provider-side limit, which was not verified. Request payloads are
saved for inspection; executed requests remain zero. 12/12 is mocked contract/policy
coverage, not API accuracy. No configuration, activation, install, push or denied-message
retry occurred. Source thread requested no separate message; normal handoff is sufficient.
This follow-up is local only, with no vault commit, push or sync initiated.
