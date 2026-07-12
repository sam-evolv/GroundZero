---
id: cara
company_id: cara
headline: New idea Sam has started building: Irish SME callable digital assistant; Phase 0 is one live +353 call.
valid: true
updated_at: "2026-07-11T23:15:00+01:00"
role: project-state
---

# Cara project state

Sam clarified on 2026-07-11 that the uploaded `cara-starter.zip` is a **new idea he has started building**, not just a speculative brief.

## Current state

- Starter pack documentation exists with product spec, app/design spec, competitive landscape, margin strategy, and Phase 0 prompt.
- The 2026-07-12 conversation handoff reports an overnight build with Python code, 17 passing tests, an HTML prototype, financial model, scripts, one-pager, and name check.
- **Artifact discrepancy:** the cached `cara-starter.zip` Hermes inspected contains only 17 entries and no implementation files beyond README placeholders. Treat the richer artifacts as reported-but-unverified until the full/newer archive is located or uploaded.
- The correct next build unit remains M1: one live call connected to a +353 number with transcript persistence.
- Naming is urgent: the handoff reports Cara is crowded and recommends **Orla**, subject to proper IEDR/EUIPO/domain/app-store checks.

## Active milestone

[[items/cara-founder-voice-dogfood]] — build a voice experience Sam personally uses for long brainstorming meetings, post-call artefacts, and cross-call continuity.

[[items/cara-phase0-m1-live-call]] remains the underlying telephony milestone, expanded beyond a two-minute demo into the founder dogfood loop.

## Hermes implementation baseline — 12 July 2026

- GitHub `sam-evolv/Cara` was verified empty: no default branch and no Claude branch existed remotely at inspection time.
- Local clone: `/Users/samdonworth/GroundZero/repos/cara-hermes`.
- Separate local branch: `hermes/founder-voice-alpha` (not pushed).
- Dedicated isolated Hermes profile: `~/.hermes/profiles/cara`, with messaging credentials removed and an authenticated API server on `127.0.0.1:8643`.
- Implemented Twilio ConversationRelay webhook/WebSocket → caller-scoped Hermes Agent brain → interruptible spoken response.
- Verified real local end-to-end round trip through the running Cara service and Hermes API.
- Nine tests pass. Local commit: `f2bb0c6`.
- A real phone call now requires Twilio account credentials, a +353 number, and a public HTTPS/WSS tunnel; Twilio signature validation must be added before exposing the endpoint beyond controlled alpha use.

Acceptance target from the starter pack:

- Ring the number from a mobile.
- Talk for ~2 minutes.
- Assistant gives mandatory disclosure warmly.
- Conversation feels alive.
- Transcript lands in Supabase/Postgres.
- Costs are logged from first call.
- The call recording becomes the first demo asset.

## Connected vault notes

- [[companies/cara]] — parent project/company note
- [[briefs/cara-starter-product-spec]] — starter spec summary
- [[briefs/cara-success-strategy-2026-07-11]] — recommended success strategy
- [[imports/cara-conversation-summary-2026-07-12]] — full conversation handoff and artifact-verification note
- [[items/cara-phase0-m1-live-call]] — active item
- [[context/index]] — shared entry point
- [[context/model-pack]] — compact portfolio context

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-founder-voice-build-sprint-2026-07-12]]
- [[briefs/cara-success-strategy-2026-07-11]]
- [[companies/cara]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[items/cara-phase0-m1-live-call]]

