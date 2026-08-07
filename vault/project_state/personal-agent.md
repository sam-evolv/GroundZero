---
title: Personal agent project state
status: building
updated: 2026-08-06
role: project-state
---

# Personal agent project state

## Current state

- Working repository: `/Users/samdonworth/Projects/IrelandGPT`.
- Hermes API Server is enabled on loopback and listening locally.
- The repository contains an authenticated responsive browser shell, BFF, relay and Hermes client for sessions, history, runs, SSE progress, approvals, recovery, stop, conversation actions, capabilities, automations and real multimodal photo input.
- Immutable candidate `2f6e6954a5666102bc4cf012caa54c0fb2e6cc96` passed independent review with 136 Python tests and 13 Node tests. It is not deployed.
- Final local product candidate `d533206b37e0aecb1d48c4a7cb8e972a0a284743` is paired with Hermes runtime `27f142544b3bbe7ef8fdbd5d6db8b7505614ea13`. The exact pair passed real-process lifecycle verification and independent immutable review. See [[briefs/2026-08-06-irelandgpt-runtime-product-candidate-handoff]].
- The current local shell now uses Ask, Doing, Done and You. Doing is backed by genuine run, approval and automation state; Done is backed by active and archived conversation resources and does not claim completion receipts.
- Production remains on the earlier founder-alpha build. The live bytes do not contain the approved local photo and Quiet Margin functionality.
- The selected-folder connector and SwiftUI simulator app remain in the repository as secondary/reference work.
- Hark Handoff has been studied against its launch video, technical article, public leaderboard and privacy policy. The adopted direction is a calm handoff desk: durable task identity, Doing, Done receipts, missing-detail states distinct from approvals, an inspectable You surface and bounded isolated browser execution.
- The 6 August product strategy session is now adopted as the design charter: IrelandGPT is a delegation-first personal operating system, with invisible models, just-in-time connectors, completed hated jobs as the first-use test, and time returned as the value proposition.
- The approved Quiet Margin candidate completed a real browser-selected JPEG run through Hermes, but deployment is now held because full Desktop capability parity is the correct product milestone.
- Sam clarified that the next phase must reproduce every useful Hermes Agent and Desktop outcome before further consumer simplification.
- The commercial follow-up is captured separately: bounded guest use before signup, frictionless conversion, a living user-owned Profile, optional context conversation and evidence-led €9.99/€19.99/premium/family tier hypotheses.
- Primary-source review verified DeepSeek V4 Flash and GPT-5.6 Luna, established an Irish adoption/payment baseline and confirmed that automatic parent monitoring is not a safe launch feature. Public tier prices remain hypotheses pending measured workload and conversion evidence.
- The later ChatGPT strategy session is reconciled into the charter: “Complex under the hood. Calm on the surface,” a suggest-to-autonomy trust ladder, Time to First Delegation under five minutes, evidence-backed Time Given Back, outcome-based Explore, founder-led first-100 GTM and one identity across web, phone, voice and supported messaging.
- Final product name remains open.

## Active objective

Reach full useful Hermes Desktop outcome parity in the branded responsive wrapper, then begin founder dogfood. Preserve the current visual shell, stop cosmetic refinement, and implement against [[items/personal-agent-hermes-desktop-parity]].

## Current blockers

- Full Desktop parity has not yet been implemented. Current live/adapted surfaces cover conversation core, basic capabilities, automations and local photo support only.
- Mobile navigation has passing source and behavior tests, but phone pixel verification remains unclaimed pending an approved screenshot run.
- Generic file and artifact delivery still needs a Hermes-owned opaque registry with ownership, metadata and retrieval boundaries.
- Memory, agents, background work, voice, connectors, profiles, richer settings and messaging continuity need product adapters.
- Trusted local filesystem, terminal, project and Git outcomes need an explicit paired-desktop path rather than direct public-browser exposure.
- Native mobile development is intentionally sequenced after web and desktop dogfood.

## Next verified milestones

1. Freeze the complete Hermes Desktop capability inventory from authoritative documentation and source.
2. Implement visible tool activity, queue/history, session search and complete conversation controls.
3. Implement safe files, previews, artifacts and rich result surfaces.
4. Implement memory, skills, agents, background work, schedules and activity history.
5. Implement voice, connections, profiles, preferences, messaging continuity and just-in-time conversational access requests.
6. Implement the paired-desktop path for local files, projects, terminal and Git outcomes.
7. Verify every parity ledger item on desktop and responsive phone through real Hermes resources.
8. Install the complete web app to the phone home screen and begin founder dogfood.
9. Capture latency, failures, friction and repeated value before redesigning capability discovery.
10. Add the Irish soul and selectable personality profiles, then evaluate tone across ordinary, formal, sensitive and high-stakes tasks.
11. Instrument founder workload cost and complete [[items/personal-agent-unit-economics-and-onboarding]] before setting public prices or allowances.

## Connected vault notes

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

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-06-hark-handoff-irelandgpt-translation]]
- [[briefs/2026-08-06-irelandgpt-business-model-evidence-ledger]]
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]
- [[briefs/2026-08-06-irelandgpt-onboarding-profile-and-business-model]]
- [[briefs/2026-08-06-irelandgpt-runtime-product-candidate-handoff]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]]
- [[briefs/hark-handoff-source-ledger]]
- [[companies/personal-agent]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[items/personal-agent-founder-dogfood-and-proof-loop]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[items/personal-agent-unit-economics-and-onboarding]]

