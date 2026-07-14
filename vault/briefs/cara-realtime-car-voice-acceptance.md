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

## Selected alpha path

ElevenLabs ElevenAgents is the temporary founder-alpha WebRTC transport because Sam has remaining credits and it minimizes time to a real car test. It uses Hermes through an OpenAI-compatible Custom LLM endpoint. This does not replace the production reference stack in `cara-master-spec.md`.

## Turn-taking requirements

- Initial endpointing is deliberately patient: prefer a short extra silence to interrupting a thought.
- Caller barge-in must stop Cara within 300 ms.
- Thinking pauses of at least 2.5 seconds must not routinely trigger Cara.
- Persist each caller's within-turn pause distribution, completed-turn silence, false endpoints, barge-ins, and correction events.
- Learn a bounded caller cadence profile only after enough clean observed turns; exclude transport drops and high-noise intervals.
- Use non-floor-seizing backchannels where supported; otherwise remain silent rather than guessing.
- After a genuinely complete turn, target first audible response below 1.5 seconds.

## Cost and model policy

- At the current published hosted-agent overage price of about $0.08/min, a 20-minute test is about $1.60, 30 minutes about $2.40, and 60 minutes about $4.80 before LLM usage.
- Production path remains Pipecat/LiveKit + Deepgram + Hermes + routed cascade/frontier models + Cartesia, with Sesame CSM evaluated for self-hosted voice later.
- Gemini Flash-class models handle cheap routine turns, routing, and extraction. Brainstorming, planning, consequential actions, and ambiguous requests escalate to a stronger model.

## Connected vault notes

- [[companies/cara]] - parent venture
- [[project_state/cara]] - live build state
- [[items/cara-founder-voice-dogfood]] - active milestone
- [[decisions/cara-founder-dogfood-voice-first]] - durable sequencing decision
- [[briefs/cara-founder-voice-build-sprint-2026-07-12]] - earlier build sprint

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-founder-voice-build-sprint-2026-07-12]]
- [[briefs/cara-world-class-product-route-research-2026-07-13]]
- [[companies/cara]]
- [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[decisions/cara-primary-founder-bet-self-serve-path-2026-07-13]]
- [[items/cara-founder-voice-dogfood]]
- [[project_state/cara]]

