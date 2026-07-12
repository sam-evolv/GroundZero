---
id: cara-elevenlabs-webrtc-hermes-custom-llm
date: "2026-07-12"
status: active
company_id: cara
---

# Cara uses ElevenLabs WebRTC with Hermes as the custom LLM

## Decision

Use ElevenLabs ElevenAgents as the first realtime car-audio layer over iPhone Safari WebRTC, while configuring its Custom LLM endpoint to the existing Hermes-compatible `/v1/chat/completions` brain.

## Why

- Shortest path to browser WebRTC, barge-in, configurable turn eagerness, voice quality, transcripts, audio retrieval, analytics, and evaluation.
- Avoids implementing browser PCM capture, echo cancellation, playback queues, recording, and interruption logic from scratch.
- ElevenLabs supports OpenAI-compatible custom LLM endpoints, so Hermes can remain the single semantic author instead of becoming an occasional tool behind a second conversational brain.
- Durable memory, project context, tools, and post-call synthesis stay portable outside the voice vendor.
- OpenAI Realtime remains the fallback if instrumented car testing shows ElevenLabs lacks sufficient noise or interruption control.

## Consequences

- Add a public authenticated custom-LLM streaming proxy from ElevenLabs to the isolated Cara Hermes API.
- Replace browser Web Speech APIs with the ElevenLabs client WebRTC session after an explicit user gesture.
- Ingest provider transcripts, audio, interruptions, and analysis into Cara's canonical call-event schema and Ground Zero review loop.
- Do not treat ElevenLabs hosted memory or knowledge bases as Cara's source of truth.
- A user-supplied ElevenLabs API key and configured agent are prerequisites for a real field test.

## Alternatives considered

- **OpenAI Realtime:** more low-level VAD/noise control and likely second-stage bake-off candidate, but more recording/evaluation infrastructure to build.
- **Gemini Live:** low cost and native audio, but preview status and no documented browser WebRTC transport create avoidable iPhone implementation risk.
- **Pipecat + Deepgram + Cartesia:** preserves a pure modular mouth/brain split and remains a viable fallback, but requires substantially more custom real-time plumbing before founder dogfooding.

## Connected vault notes

- [[companies/cara]] - parent venture
- [[project_state/cara]] - live state
- [[briefs/cara-realtime-car-voice-acceptance]] - acceptance criteria
- [[items/cara-founder-voice-dogfood]] - active milestone
- [[decisions/cara-founder-dogfood-voice-first]] - sequencing decision
