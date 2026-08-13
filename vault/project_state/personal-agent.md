---
title: Personal agent project state
headline: Native iPhone founder dogfood is active; the mobile source-of-truth worktree is dirty and stable owner-bound connectivity plus physical rendered-screen acceptance remain open release gates.
status: building
updated: 2026-08-13
role: project-state
---

# Personal agent project state

## Current state

- **Live repository check, 2026-08-13 12:01 IST:** Canonical product repository remains `/Users/samdonworth/Projects/IrelandGPT`, while the mobile source-of-truth worktree remains `/Users/samdonworth/Projects/IrelandGPT-aire-production-ready`, branch `aire-production-ready-20260810`, at `1023d99 fix: preserve personal connection and app identity`. The mobile worktree is no longer clean: six tracked files are modified and `.aire-mobile-source-of-truth.json`, `tests/test_aire_mobile_release_gate.py` and `tools/aire_mobile_release_gate.py` are untracked. Those working changes propose a mobile release gate and additional launcher/runtime safeguards, but they are not a committed immutable candidate and were not independently reviewed, built, installed or rendered-screen accepted in this reconciliation. The root repository remains an older web/desktop candidate with separate uncommitted work and is not the mobile source of truth.
- Hermes API Server is enabled on loopback and listening locally.
- The repository contains an authenticated responsive browser shell, BFF, relay and Hermes client for sessions, history, runs, SSE progress, approvals, recovery, stop, conversation actions, capabilities, automations and real multimodal photo input.
- Immutable candidate `2f6e6954a5666102bc4cf012caa54c0fb2e6cc96` passed independent review with 136 Python tests and 13 Node tests. It is not deployed.
- Final local product candidate `d533206b37e0aecb1d48c4a7cb8e972a0a284743` is paired with Hermes runtime `27f142544b3bbe7ef8fdbd5d6db8b7505614ea13`. The exact pair passed real-process lifecycle verification and independent immutable review. See [[briefs/2026-08-06-irelandgpt-runtime-product-candidate-handoff]].
- The prior Ask, Doing, Done and You shell was rejected after founder phone review. Those labels and automation/capability inventories are no longer the intended consumer information architecture.
- Sam's Aire v3 mobile artifact is now the accepted visual baseline. Chat handles delegation and collaboration, Work handles persistent jobs and outcomes, and Profile is secondary for context and authority. Desktop remains to be adapted with contextual live work.
- Local simplification work exists only as an interim integration baseline. It has not been accepted or redeployed and must not be treated as the visual source of truth.
- Production remains on the earlier founder-alpha build. The live bytes do not contain the approved local photo and Quiet Margin functionality.
- The selected-folder connector and SwiftUI simulator app remain in the repository as secondary/reference work.
- Hark Handoff has been studied against its launch video, technical article, public leaderboard and privacy policy. Its durable handoff and bounded browser-work mechanics remain useful, but Doing, Done and You are superseded as primary navigation.
- The 6 August product strategy session is now adopted as the design charter: IrelandGPT is a delegation-first personal operating system, with invisible models, just-in-time connectors, completed hated jobs as the first-use test, and time returned as the value proposition.
- The approved Quiet Margin candidate completed a real browser-selected JPEG run through Hermes, but deployment is now held because full Desktop capability parity is the correct product milestone.
- Sam clarified that the next phase must reproduce every useful Hermes Agent and Desktop outcome before further consumer simplification.
- The commercial follow-up is captured separately: bounded guest use before signup, frictionless conversion, a living user-owned Profile, optional context conversation and evidence-led €9.99/€19.99/premium/family tier hypotheses.
- Primary-source review verified DeepSeek V4 Flash and GPT-5.6 Luna, established an Irish adoption/payment baseline and confirmed that automatic parent monitoring is not a safe launch feature. Public tier prices remain hypotheses pending measured workload and conversion evidence.
- The later ChatGPT strategy session is reconciled into the charter: “Complex under the hood. Calm on the surface,” a suggest-to-autonomy trust ladder, Time to First Delegation under five minutes, evidence-backed Time Given Back, outcome-based Explore, founder-led first-100 GTM and one identity across web, phone, voice and supported messaging.
- The Vibiz Connector source audit adds a concrete vertical-operator pattern: one delegation should create one authoritative Work object with recognizable milestones, approval gates, outputs and receipts. Aire should adopt the compression and role shift, while rejecting implied revenue proof, broad autonomy claims and unclear confirmation boundaries. See [[briefs/2026-08-07-vibiz-connector-source-audit-and-aire-lessons]].
- [[context/personal-context-data-contract]] is now the normative Profile/context boundary. It specifies append-only provenance, correction and supersession, explicit missing-value semantics, exact ownership, retrieval minimisation, authentication separation and backup/restore acceptance.
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] makes this project state, not Hermes injected memory, authoritative for durable Aire context.
- Muse Glimmer 30B is verified as Apache 2.0 and Hermes-compatible by its official model card, but its supported quantized envelope starts at 24 GB. Sam's current 16 GB Mac is below that gate, so no model was downloaded or routed. See [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]].
- Product name is Aire.
- The iOS presentation contract now requires one canonical structured assistant-response renderer for streaming and persisted replies, with headings, typography, lists, links, quotes, code/status panels and deliberate spacing. Per-message Read aloud controls are prohibited.
- Personal-device owner authentication and endpoint bootstrap persist across ordinary Home Screen relaunches in the personal debug build. Production must not read or persist the personal owner credential.
- Authentication failure and backend-connectivity failure are separate product states. A valid owner credential plus an unreachable backend must show connection recovery, not Sign in.
- The branded Aire app icon is an explicit build invariant for every relevant configuration.
- Build, tests, installation, launch and authenticated traffic are not physical-screen acceptance. User-visible iPhone changes require rendered-screen evidence before they can be called fixed.
- Direct phone-to-Mac access can fail on guest Wi-Fi client isolation even when both devices share the SSID. USB or a stable owner-bound relay is required; an ephemeral tunnel is not a durable release endpoint.

## Active objective

Stabilise the current native iPhone founder-dogfood candidate as the trustworthy personal Skippy surface. Preserve the accepted Chat, Work and Profile architecture while proving ordinary relaunch authentication, durable connectivity, canonical structured replies, branded identity and live rendered-screen behaviour. Continue the six-month [[goals/personal-agent-ai-operated-company-proof]] mission without weakening release evidence or reinterpreting accepted product invariants.

## Current blockers

- Full Desktop parity has not yet been implemented. Current live/adapted surfaces cover conversation core, basic capabilities, automations and local photo support only.
- The accepted Aire v3 mobile replacement has been directly rendered and interaction-tested. Desktop adaptation, production data integrity, accessibility and truthful Hermes event mapping remain unresolved.
- Generic file and artifact delivery still needs a Hermes-owned opaque registry with ownership, metadata and retrieval boundaries.
- Memory, agents, background work, voice, connectors, profiles, richer settings and messaging continuity need product adapters.
- Trusted local filesystem, terminal, project and Git outcomes need an explicit paired-desktop path rather than direct public-browser exposure.
- Native iPhone founder dogfood is active. Web and desktop parity remain required product outcomes, but the older root-repository candidate must not overwrite the accepted mobile source of truth.

## Next verified milestones

1. Keep `IrelandGPT-aire-production-ready` as the current mobile source of truth, preserve its uncommitted work as protected concurrent state, and cut a new immutable candidate only after those changes are reviewed and verified without allowing older worktrees to overwrite its product invariants.
2. Replace ephemeral guest-network connectivity with a stable owner-bound endpoint or paired-device route.
3. Exercise an ordinary Home Screen relaunch with no developer environment and verify authenticated traffic.
4. Capture the live rendered iPhone screen and Home Screen icon after that ordinary relaunch.
5. Verify no Read aloud controls and correct structured typography in both streaming and persisted replies on the physical phone.
6. Verify Sign in appears only for genuine missing or invalid authentication, while connectivity failure presents recovery.
7. Keep regression tests for auth persistence, endpoint persistence, production isolation, icon packaging and canonical response rendering.
8. Continue safe files, artifacts, voice, background work and complete useful Hermes outcome parity through the accepted Chat, Work and Profile interface.
9. Release a new immutable founder candidate only after code review, tests, signed build, ordinary relaunch, authenticated runtime traffic and physical rendered-screen acceptance all pass.
10. Record accepted project changes back into Ground Zero before declaring the work complete.

## Connected vault notes

- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — context authority and retrieval order
- [[companies/personal-agent]] — venture context
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]] — founder brief
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]] — current source direction
- [[items/personal-agent-hermes-desktop-parity]] — active parity ledger
- [[briefs/2026-08-06-irelandgpt-onboarding-profile-and-business-model]] — commercial and onboarding direction
- [[briefs/2026-08-06-irelandgpt-business-model-evidence-ledger]] — verified market, pricing and child-safety evidence
- [[imports/chatgpt/ireland-gpt-product-pricing-gtm-delegation-strategy-2026-08-06]] — later product, pricing and GTM source
- [[items/personal-agent-unit-economics-and-onboarding]] — evidence and unit-economics work
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]] — sequencing decision
- [[items/personal-agent-founder-dogfood-and-proof-loop]] — active work
- [[briefs/2026-08-06-hark-handoff-irelandgpt-translation]]: current competitive product translation
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]] — adopted design charter
- [[briefs/2026-08-06-irelandgpt-runtime-product-candidate-handoff]] — reviewed local runtime and product candidate
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]] — product promise decision
- [[imports/chatgpt/ireland-gpt-product-strategy-session-2026-08-06]] — verbatim strategy source
- [[imports/2026-08-06-personal-agent-founder-voice-notes]] — source
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]] — current founder direction
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] — active interface decision
- [[briefs/2026-08-07-aire-v3-independent-design-audit]] — directly tested design audit
- [[briefs/2026-08-07-vibiz-connector-source-audit-and-aire-lessons]] — source-audited vertical operator pattern and immediate product implications
- [[decisions/2026-08-07-personal-agent-single-conversation-live-work-interface]] — superseded conversation-only interpretation

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-06-hark-handoff-irelandgpt-translation]]
- [[briefs/2026-08-06-irelandgpt-business-model-evidence-ledger]]
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]
- [[briefs/2026-08-06-irelandgpt-onboarding-profile-and-business-model]]
- [[briefs/2026-08-06-irelandgpt-runtime-product-candidate-handoff]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]]
- [[briefs/2026-08-07-aire-six-month-autonomous-company-mission]]
- [[briefs/2026-08-07-aire-v3-independent-design-audit]]
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[briefs/2026-08-07-vibiz-connector-source-audit-and-aire-lessons]]
- [[briefs/2026-08-10-aire-business-operating-intelligence-thesis]]
- [[briefs/2026-08-10-lindy-teammate-source-audit-and-aire-lessons]]
- [[briefs/2026-08-11-aire-health-specialist-coach]]
- [[briefs/2026-08-12-aire-irish-trust-simplicity-and-sovereignty-thesis]]
- [[briefs/2026-08-12-irish-decision-simulation-opportunity]]
- [[briefs/2026-08-12-synthetic-ireland-full-concept]]
- [[briefs/hark-handoff-source-ledger]]
- [[companies/personal-agent]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[context/personal-context-data-contract]]
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-07-personal-agent-single-conversation-live-work-interface]]
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]]
- [[goals/personal-agent-ai-operated-company-proof]]
- [[items/aire-health-specialist-coach]]
- [[items/personal-agent-founder-dogfood-and-proof-loop]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[items/personal-agent-unit-economics-and-onboarding]]

