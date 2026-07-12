---
id: cara-phase0-m1-live-call
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

## Connected vault notes

- [[companies/cara]] — parent project
- [[project_state/cara]] — live state
- [[briefs/cara-starter-product-spec]] — source spec
- [[context/business-opportunities-moc]] — opportunity hub

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-success-strategy-2026-07-11]]
- [[companies/cara]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[project_state/cara]]

