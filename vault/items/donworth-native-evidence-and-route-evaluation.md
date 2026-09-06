---
id: donworth-native-evidence-and-route-evaluation
company_id: donworth-ai-solutions
domain: ops
title: Verify and trial Donworth-native evidence receipts and route evaluation
priority: P1
effort: M
state: proposed
created_at: "2026-09-04T16:11:00+01:00"
updated_at: "2026-09-04T20:04:00+01:00"
---

# Verify and trial Donworth-native evidence receipts and route evaluation

## Objective

Add a first-party, fail-closed evidence receipt and bounded model-route evaluation capability to Donworth's Hermes operating workflow without creating another durable context store, replacing Skippy/Forge/Vera authority or changing live profiles automatically.

## Verified candidate — 4 September 2026, 16:11 IST

- Forge task `t_21456f6e` completed a local candidate in `/Users/samdonworth/Code/donworth-hermes-ops` at commit `d43f130c827ebc8a9e6245ec403be6a21fc4a6c8`, tree `6b683ac9f664fe6f8205afda97103b005241ad53`.
- Direct readback independently reproduced a clean worktree and wheel `donworth_ops-0.1.0-py3-none-any.whl` at `21,915` bytes / SHA-256 `4ec33ab32507a097f540ebcf357189d6c5abea685c88083679ea736d87b3b1ba`.
- Forge reports `44` passing tests, clean Ruff/Mypy, isolated plugin registration with two tools and zero hooks, and an honestly capped self-receipt. Those behavioral claims remain implementation evidence until Vera reproduces them.
- At 16:11 IST, Vera task `t_08aa9133` was running against the exact commit/tree/wheel tuple. The candidate had not yet been accepted, installed or enabled in Sam's live Hermes profile.

## Independent verdict — 4 September 2026, 20:04 IST

- Vera task `t_08aa9133` returned `ACCEPT WITH CONDITIONS` for the exact commit `d43f130c827ebc8a9e6245ec403be6a21fc4a6c8`, tree `6b683ac9f664fe6f8205afda97103b005241ad53` and wheel SHA-256 `4ec33ab32507a097f540ebcf357189d6c5abea685c88083679ea736d87b3b1ba`. Direct read-only reconciliation reproduced that live repository HEAD/tree and the `21,915`-byte wheel hash.
- Vera independently reproduced `44` tests, Ruff, Mypy, isolated CLI behavior, isolated plugin doctor (`2` tools, `0` hooks), and the required negative receipt/route cases. No live-profile enablement, live provider call, Ground Zero write, push, merge, deployment or paid evaluation formed part of that acceptance.
- The conditions are operationally material: evidence-level parsing is substring-based and ignores exit status; fake route outputs are not inherently marked and can select a winner; configured cost ceilings currently behave as unlock flags rather than enforced spend caps. Absolute artifact paths, unused runtime schemas and secret-name-only refusal remain lesser findings.
- The next step is optional and approval-gated: a disposable isolated-profile trial of the two tools with no paid calls. This verdict does not authorise live-profile installation or enablement, real-provider evaluation, or routing-policy changes.

## Acceptance boundary

1. Vera must bind its verdict to the exact commit, tree and wheel hash and independently reproduce fail-closed receipt and route-evaluation behavior.
2. Any isolated-profile trial after acceptance requires Sam's explicit approval; live-profile enablement is not implied.
3. Live model evaluation requires a separate approved task with explicit total/per-cell cost and time ceilings. No provider or model may be substituted silently.
4. Ground Zero remains the durable source of truth; the extension may emit evidence artifacts but may not become a competing biography, project ledger or decision store.

## Connected vault notes

- [[project_state/donworth-studio]] — current Donworth operating state
- [[project_state/personal-agent]] — installed Hermes and Aire compatibility state
- [[companies/donworth-ai-solutions]] — parent operating company
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — evidence and delivery standard
- [[decisions/2026-09-03-cost-efficient-agent-model-routing]] — accepted routing policy and evaluation context
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — canonical context boundary
- [[items/_Index]] — active item queue

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/donworth-ai-solutions]]
- [[context/index]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-09-03-cost-efficient-agent-model-routing]]
- [[project_state/donworth-studio]]
- [[project_state/personal-agent]]

