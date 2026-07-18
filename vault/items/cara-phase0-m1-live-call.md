---
id: cara-phase0-m1-live-call
title: Complete Cara Phase 0 M1 — one live +353 call
company_id: cara
status: building
size: M
priority: P0
created_at: "2026-07-11"
---

# Cara Phase 0 M1 — one live call

## Outcome

A real +353 number can be rung from Sam's mobile and held in a natural conversation with Cara. Transcript is saved. Cost logging starts from the first call.

## Why this matters

The product risk is not the app. The risk is whether the phone-number experience feels alive, reliable, compliant, and accurate enough for Irish SME callers. This call is the first proof point and first demo asset.

## Build scope

- Scaffold backend enough for a live voice loop.
- Connect Twilio +353 number.
- Streaming ASR with Deepgram.
- Claude Sonnet-class response path via EU endpoint.
- Cartesia TTS.
- Mandatory disclosure line in greeting.
- Supabase/Postgres transcript persistence.
- Cost log per call: telephony minutes, ASR minutes, TTS chars, model tokens/cost.
- `.env.example` with exact required keys; secrets stay out of vault/repo.

## Acceptance test

- Sam rings the number from mobile.
- Pickup target: <1.5s to first word.
- Voice-to-voice target: roughly 800ms where feasible.
- 2-minute conversation feels alive.
- Transcript is visible in DB after hangup.
- Cost log is emitted.
- Recording saved as first demo asset if permitted.

## Prompt to use for first Claude Code session

```text
Read CLAUDE.md and docs/cara-master-spec.md §11. Start Milestone M1: a Pipecat pipeline connected to my Twilio number so I can ring it and have a natural conversation — Deepgram ASR, Claude Sonnet responses, Cartesia TTS, disclosure line in the greeting, transcript saved to Supabase. Scaffold the repo (backend/, gauntlet/, packs/), create .env.example, and tell me exactly what to put in .env. Then help me test it live on a real call.
```

## Incubation analysis, 18 July 2026

### Opportunity size
This is the narrow technical proof beneath Cara's commercial wedge. It does not create revenue alone, but it unlocks the test that matters: whether one recovered trade enquiry can justify a €99 to €149 monthly plan. The first call should therefore be valued as risk retirement and evidence creation, not as a product launch.

### Current technical route
The original Deepgram, Claude and Cartesia scope is now superseded by the selected ElevenLabs WebRTC voice layer with Hermes as the semantic and memory layer. The milestone still requires a real +353 edge, authenticated webhook handling, caller identity, transcript and event persistence, and a per-call cost record. Preserve provider-independent task, memory and audit schemas so the voice transport remains replaceable.

### Risks
- A two-minute demo can pass while the longer founder dogfood loop still fails on interruption, latency or context loss.
- Public telephony without signature validation creates an avoidable security exposure.
- Recording requires a clear consent and retention rule.
- Provider and model costs can make the intended SME price uneconomic if they are not logged from the first call.

### Effort
Small to medium for the controlled live-call edge once credentials and a number exist. The broader conversational quality problem remains inside [[items/cara-founder-voice-dogfood]] and must not be hidden inside this milestone.

### Market timing
The European Commission states that AI Act transparency rules take effect in August 2026 and that people should be informed when they are interacting with a machine. Cara's warm disclosure, audit trail and fallback policy are therefore launch requirements, not later polish. Source: [European Commission AI Act overview](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai), checked 18 July 2026.

### Recommendation
Keep this as an active sub-milestone, not a separate project. Mark it complete only when a real call, transcript, disclosure and cost record are evidenced. Do not treat completion as permission for external pilots until the founder dogfood exit gate passes.

## Connected vault notes

- [[companies/cara]] — parent project
- [[project_state/cara]] — live state
- [[briefs/cara-starter-product-spec]] — source spec
- [[context/business-opportunities-moc]] — opportunity hub

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-starter-product-spec]]
- [[briefs/cara-success-strategy-2026-07-11]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[companies/cara]]
- [[context/business-opportunities-moc]]
- [[context/dashboard]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[project_state/cara]]

