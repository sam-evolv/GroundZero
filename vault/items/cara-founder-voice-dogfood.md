---
id: cara-founder-voice-dogfood
title: Complete the Cara founder voice dogfood loop
company_id: cara
status: building
size: L
priority: P0
created_at: "2026-07-12"
---

# Cara founder voice dogfood

## Outcome

Sam can ring Cara for a full 20–60 minute brainstorming meeting, find the conversation genuinely useful, receive a high-quality post-call artefact, and resume the thread later without restating it.

## Build order

1. Real +353 dial-in and identity recognition for Sam.
2. Best-available conversational voice baseline before cost optimisation.
3. Turn-taking: interruption, barge-in, backchannels, long thinking pauses, self-repair.
4. Protected working memory for long calls.
5. Persistent episodic + semantic memory across calls.
6. Brainstorming behaviour: challenge, structure, synthesis, and non-generic questions.
7. Live search/tool use with spoken progress updates.
8. Post-call artefact delivered by text within one minute.
9. Ring-back continuity: “pick up where we left off.”
10. Instrumentation and failure-to-gauntlet capture.

## Dogfood protocol

- Sam uses Cara for one real thinking session daily where practical.
- Do not script the calls; use live business/product problems.
- After each call, capture friction under: pickup, voice, turn-taking, intelligence, memory, tools, artefact, continuity.
- Convert each reproducible failure into an automated or recorded gauntlet scenario.
- Review weekly for repeated defects rather than reacting only to single subjective moments.

## Exit gate before external pilots

- Sam voluntarily chooses Cara for brainstorming rather than another voice interface.
- Five consecutive substantive calls complete without sev-1 defects.
- Two calls exceed 30 minutes without context loss.
- Three cross-day continuity tests pass.
- Post-call artefacts require only minor edits.
- Known failures have graceful fallback behaviour.

## Incubation analysis, 13 July 2026

### Commercial opportunity
The immediate value is not a new consumer voice product. Founder dogfooding de-risks the conversational core required for the intended Irish SME missed-call and workflow-recovery wedge. A reliable, asynchronous voice loop can protect bookings and enquiries for service businesses that lose revenue when calls go unanswered. The testable commercial claim after the exit gate is simple: recover enough qualified enquiries or staff time to justify a monthly fee.

### Technical approach
Keep the selected ElevenLabs WebRTC voice layer and Hermes Custom LLM semantic layer. Complete the controlled telephony edge with a +353 number, authenticated webhook and WebSocket handling, caller identity, interruption-safe streaming, durable transcripts and cost events. Use the recorded dogfood gauntlet to prioritise latency, barge-in, memory retrieval and artefact quality before adding SME integrations.

### Risks
- Telephony credentials, public endpoint security and signature verification remain prerequisites for real-call testing.
- A technically fluent call can still fail if long-form conversation feels interruptive or generic.
- Memory errors and weak post-call artefacts would destroy trust faster than a visible feature gap.
- Cost can become uneconomic if long calls are not measured from the first controlled call.

### Effort and timing
Large, but sequenced. The controlled real-call and measurement baseline is a small, bounded milestone. The five-call exit gate is the appropriate investment gate before any SME pilot, so no market-facing expansion should be scheduled yet.

### Market timing
Timely, but crowded. Real-time voice agents are improving quickly, which makes reliable turn-taking and a workflow-specific outcome more valuable than a generic voice bot. The differentiation must be trusted continuity and recovered business outcomes, not voice novelty.

### Recommendation
Do not promote this into a separate commercial project. It is already the active P0 build. Promote the Irish SME recovery pilot only after the founder exit gate is passed and per-call costs, latency and artefact quality are evidenced.

## Guardrail

This is founder dogfooding of the shared core, not a move toward a standalone consumer product. The commercial wedge remains Irish SME missed-call and workflow recovery once the core experience is ready.

## Connected vault notes

- [[decisions/cara-founder-dogfood-voice-first]] — strategic decision
- [[companies/cara]] — parent project
- [[project_state/cara]] — live status
- [[items/cara-phase0-m1-live-call]] — original live-call milestone
- [[briefs/cara-starter-product-spec]] — full context

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-founder-voice-build-sprint-2026-07-12]]
- [[briefs/cara-realtime-car-voice-acceptance]]
- [[briefs/cara-starter-product-spec]]
- [[briefs/daily-agentic-value-radar-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[companies/cara]]
- [[context/dashboard]]
- [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[decisions/cara-primary-founder-bet-self-serve-path-2026-07-13]]
- [[items/cara-phase0-m1-live-call]]
- [[project_state/cara]]

