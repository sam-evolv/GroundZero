---
title: Cara world-class product route research
company_id: cara
date: 2026-07-13
status: research-synthesis
---

# Cara world-class product route research

## Bottom line
Cara should not be built as a browser speech demo plus an agent prompt. The quality target requires a native iPhone-first product, a measured realtime audio stack, one semantic author per live conversation, and a Cara-owned control plane for memory, actions, permissions and review.

The recommended first production-quality path is **direct native iOS → OpenAI Realtime over WebRTC**, with a Cara-owned action/memory gateway. Keep Gemini Live as the main second-provider benchmark and the existing modular Deepgram + frontier-model + Cartesia route as a controlled challenger behind the same Cara interfaces. **Do not insert LiveKit by default:** it is a strong later infrastructure option for telephony, provider routing, group sessions, server-side media control or fleet observability, but for one iPhone-to-one Realtime loop it adds an operational hop and possible latency. Hermes remains valuable for durable memory tooling, asynchronous work and post-call review, but should not compete with the live voice model as a second conversational author.

## Evidence gathered

### OpenAI
- [Realtime WebRTC](https://developers.openai.com/api/docs/guides/realtime-webrtc): OpenAI recommends WebRTC over WebSockets for browser/mobile client connections, with server-issued ephemeral client secrets or a server-mediated unified session flow.
- [Voice agents](https://developers.openai.com/api/docs/guides/voice-agents): OpenAI recommends speech-to-speech sessions for low-latency conversation, barge-in, natural turn-taking and realtime tool use; it identifies chained STT → agent → TTS as the better fit where deterministic intermediate logic is essential.

### LiveKit
- [LiveKit Agents](https://docs.livekit.io/agents/): provides WebRTC transport, telephony, turn handling, evaluation, realtime-model and modular-pipeline support.
- [Turn handling](https://docs.livekit.io/agents/logic/turns/): supports semantic turn detection layered over VAD, adaptive interruption handling, dynamic endpointing, noise cancellation and explicit realtime-model VAD configuration. Its documentation recognises that VAD-only endpointing is insufficient for natural conversation.

### Apple
- [CallKit](https://developer.apple.com/documentation/callkit): lets VoIP apps use native system calling UI and coordinate with system calling behaviours; Apple explicitly notes that it gives incoming and outgoing calls the familiar Phone-app interface.
- [Designing for iOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios): Apple’s design guidance emphasises iPhone ergonomics, voice interaction, frequent app switching and first-class system integrations.

## Architecture to prove

```text
Native iOS app + Bluetooth / AVAudioSession
        ↕ direct WebRTC (ephemeral credential)
OpenAI Realtime (primary live conversational author)
        ↕ typed tool calls only
Cara Action + Memory Gateway
  - identity and user profile
  - working / episodic / semantic memory
  - task state machine and idempotency
  - permission and approval policy
  - action connectors
  - audit/event trace
        ↕
Hermes (async research, long-running workflows, review/artefacts)
Postgres + pgvector (canonical data and memory)

Optional later: LiveKit only for an established need
  - telephony, provider routing, group rooms, server-side media,
    or fleet-level observability
```

### Non-negotiable boundary
The live model may speak; it must never directly own canonical memory, permissions, action execution or business configuration. The Cara control plane does. Hermes can execute background work and return structured results but must not become a second unseen speaker in the conversation.

## Product-quality gates

### Audio and conversation
- instrument **acoustic end-of-turn → first audible Cara word**, not model tokens
- target p50 < 1.0 s; p95 < 1.8 s for ordinary non-tool turns
- target audible barge-in stop < 300 ms
- start patient: do not routinely seize the floor during 2.5-second thought pauses
- distinguish genuine interruption from listener backchannels
- archive only caller-final text and assistant audio actually heard

### Real-life reliability
Run a controlled iPhone field gauntlet: parked, driving urban, motorway, windows open, radio, passenger, screen lock, Bluetooth reconnect, poor mobile network, long pause, talk-over, earlier-call recall, tool failure, and 20–60 minute session. One primary variable changes per run.

### Trust and actions
- every external action is a typed tool invocation through policy
- progressive permissions: read-only → draft → explicit approve → bounded autonomy
- money, contracts, personal-data disclosure and consequential outreach stay behind explicit approval
- a task has visible state: understood, in-progress, blocked, done; silent failure is sev-1
- user can inspect, correct, export and delete memory

### Product surface
Do not launch a dashboard first. Build a native iOS shell only after the audio loop is genuinely useful:
1. call / hold-to-talk
2. one calm feed of what Cara did and needs
3. memory search and privacy controls
4. one-tap Face ID approvals
5. native CallKit, Live Activities, widgets and shortcuts later as earned quality, not mock-up decoration.

## Execution sequence

### Phase A — 10-day voice benchmark and protocol foundation
Implement the same Cara session/tool contract on:
1. **direct native iOS → OpenAI Realtime over WebRTC**; and
2. modular Deepgram + strong text model + Cartesia.

Run the same 20 scripted and 10 real founder scenarios. Add Gemini Live as the next independent benchmark after the first two. Select the default only from measured in-car results, not marketing claims or provider lock-in. Maintain a provider-neutral internal `VoiceSession` and tool schema from day one.

### Phase B — make the first loop indispensable
Deliver: call Cara → natural conversation → recall yesterday correctly → create one approved action → receive a truthful completion/update. No broad app, payments, business packs or public waitlist until this works repeatedly.

### Phase C — owner-grade self-serve activation
Build sign-up → business/person ingestion → confirm profile → choose voice → first live call in under 10 minutes. Every generated profile assertion is reviewable. No opaque scraping or unconfirmed promises.

### Phase D — launch one vertical pack
Start with a narrow trades pack only after the general loop passes the gauntlet. Keep reception, calendar booking and post-call summary; defer outbound errands, payments and complex autonomy.

## Current gap assessment
The existing Cara implementation is a valuable proof-of-architecture, not yet a premium product: it has a streamed Hermes brain, browser fallback, Twilio relay path, SQLite events/artifacts and 27 passing tests, but it lacks production WebRTC, native iOS lifecycle/CallKit, a tested provider bake-off, canonical played-audio capture, adaptive cadence learning, an Irish-accent data gauntlet, action-policy control plane, and a live field-test corpus.

## Connected vault notes
- [[companies/cara]] — parent venture
- [[project_state/cara]] — live state
- [[briefs/cara-realtime-car-voice-acceptance]] — acceptance target
- [[decisions/cara-founder-dogfood-voice-first]] — sequencing
- [[decisions/cara-primary-founder-bet-self-serve-path-2026-07-13]] — strategy
- [[briefs/cara-starter-product-spec]] — original product vision

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-realtime-car-voice-acceptance]]
- [[briefs/cara-starter-product-spec]]
- [[briefs/wiki-refiner-2026-07-14]]
- [[companies/cara]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[decisions/cara-primary-founder-bet-self-serve-path-2026-07-13]]
- [[project_state/cara]]

