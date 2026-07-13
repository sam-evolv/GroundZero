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

- Starter documentation remains the source product brief, but the working Hermes implementation now supersedes its missing-code archive.
- Working repo: `/Users/samdonworth/GroundZero/repos/cara-hermes`, branch `hermes/founder-voice-alpha`.
- Local commits include the Hermes-backed voice alpha and mobile hands-free browser loop; nothing has been pushed remotely.
- Dedicated Hermes profile and API brain run locally, with caller-scoped continuity, streamed responses, SQLite transcripts/events, interruption/error capture, and structured post-call artefacts.
- A temporary HTTPS mobile voice page is reachable from Sam's iPhone and successfully completes the public WebSocket → Hermes → streamed reply loop.
- **Current limiting layer:** browser speech recognition and browser speech synthesis are suitable only for first contact. They are not sufficient for robust car Bluetooth use, background noise, natural barge-in/talk-over, or controlled branded voice quality.
- P0 has therefore tightened from "make one call" to **a repeatedly useful 20-60 minute hands-free car conversation with low latency, natural interruption, noise resilience, full two-sided capture, and daily quality iteration**.
- Naming still likely moves from Cara to Orla; do not let naming block founder dogfooding.

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
- [[briefs/cara-realtime-car-voice-acceptance]]
- [[briefs/cara-starter-product-spec]]
- [[briefs/cara-success-strategy-2026-07-11]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[briefs/wiki-refiner-2026-07-12]]
- [[companies/cara]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[items/cara-phase0-m1-live-call]]

