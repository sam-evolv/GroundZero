---
id: cara-realtime-car-voice-acceptance
company_id: cara
created_at: "2026-07-12"
status: active
---

# Cara realtime car voice acceptance

## Objective

Create a voice relationship Sam voluntarily uses for 20-60 minute founder conversations while driving, before building broader SME product surfaces.

## Non-negotiable experience

- Starts before driving and then operates hands-free through the car's Bluetooth microphone and speakers.
- Natural full-duplex or near-full-duplex turn-taking: Sam can interrupt, correct, or talk over Cara without waiting for a monologue to finish.
- No conspicuous dead air. Measure end-of-user-speech to first-audible-response, not only model latency.
- Robust to road, wind, engine, indicator, radio, passenger, and variable mobile-network noise.
- A consistent, warm, distinct voice chosen through listening tests rather than assumed from a text prompt.
- Spoken output is concise and conversational: one thought at a time, no markdown/list-reading, no repeated filler acknowledgements, and no mandatory question at the end of every turn.
- Caller-scoped continuity across days through the Hermes brain and durable memory.
- Both sides of every conversation captured with timestamps, interruptions, errors, latency, and post-call artefacts.
- Every founder call becomes an evaluation case. Review weak turns, classify the failure, change one controlled layer, and compare the next run.

## Required capture per turn

- Final user transcript and confidence when available
- Assistant transcript actually sent to speech
- User speech start/end timestamps
- Assistant first-audio and final-audio timestamps
- End-to-first-audio latency
- Interruption start, cancelled audio span, and recovery outcome
- Noise/connection indicators when exposed by the transport
- Model, voice, prompt/version, transport, and configuration
- Human tags: useful, too long, generic, missed intent, wrong memory, unnatural, slow, talked over user, or audio failure

## Architecture constraint

Realtime speech transport may own audio turn-taking, VAD, denoising, and voice rendering, but Hermes remains the durable context/tool brain. Avoid two competing conversational brains. If a native speech-to-speech model speaks directly, define exactly when it calls Hermes and how memory/tool results are injected before committing to that architecture.

## Immediate decision under research

Compare current OpenAI Realtime, Gemini Live native audio, and ElevenLabs Conversational AI for iPhone WebRTC, car Bluetooth routing, barge-in, noise, latency, voice quality, transcript truth, recording, cost, and Hermes integration. Select the fastest credible founder-alpha path, then build provider boundaries so the stack can be changed without rewriting memory, evaluation, or artefact capture.

## Connected vault notes

- [[companies/cara]] - parent venture
- [[project_state/cara]] - live build state
- [[items/cara-founder-voice-dogfood]] - active milestone
- [[decisions/cara-founder-dogfood-voice-first]] - durable sequencing decision
- [[briefs/cara-founder-voice-build-sprint-2026-07-12]] - earlier build sprint
