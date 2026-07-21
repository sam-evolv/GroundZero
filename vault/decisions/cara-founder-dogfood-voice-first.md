---
title: Founder dogfood voice loop first
created: 2026-07-12
decision: accepted
status: active
---

# Founder dogfood voice loop first

## Decision

The first meaningful Cara milestone is not an SME receptionist release. It is a voice experience Sam personally wants to use for long, full-context conversations and brainstorming meetings.

Sam will dogfood Cara as his own callable assistant, surface nuanced failures through repeated real use, and use those observations to harden the voice, memory, artefact, and task systems before external release.

## Why

- Sam is a demanding, high-frequency first user who cares about presence, interruptions, memory, usefulness, and feel.
- Long brainstorming calls stress the system more deeply than scripted receptionist demos.
- Founder dogfooding exposes subtle defects: talking over the user, brittle pauses, shallow responses, context loss, repetitive phrasing, weak recall, poor post-call summaries, and failure to resume earlier threads.
- A product Sam reaches for voluntarily is a stronger foundation than a polished demo he would not personally use.

## First product loop

1. Sam rings Cara from his normal phone.
2. Cara recognises him and opens with relevant live context.
3. They hold a natural 20–60 minute brainstorming conversation.
4. Cara can search, reason, remember, ask good questions, and maintain context without interruption failures.
5. Within one minute of hang-up, Sam receives a useful artefact: summary, decisions, ideas, open questions, and next actions.
6. Sam can ring back later and say “pick up where we left off” without restating context.
7. Every failure becomes a reproducible gauntlet case.

## Acceptance criteria

- <1.5s first-word target.
- Natural turn-taking, interruption recovery, and tolerance for thinking pauses.
- No material mid-call context loss.
- 30-minute conversation completes without degradation or awkward reset.
- Brainstorm quality is genuinely useful, not generic agreement.
- Live web/tool use works when requested without derailing conversation.
- Post-call artefact arrives within one minute and accurately captures decisions.
- Next-call continuity passes across day boundaries.
- Cost, latency, interruptions, corrections, and model-routing decisions are logged.

## Product sequencing consequence

Build the personal founder loop first, but do not pivot into a standalone consumer assistant. This is an internal proving ground for the same capabilities the SME product needs: presence, memory, task continuity, post-call artefacts, and trust. Receptionist workflows and external pilots follow once the core conversation is something Sam voluntarily uses.

## Connected vault notes

- [[companies/cara]] — project context
- [[project_state/cara]] — live project state
- [[items/cara-founder-voice-dogfood]] — active implementation item
- [[items/cara-phase0-m1-live-call]] — earlier M1 milestone, now expanded
- [[briefs/cara-success-strategy-2026-07-11]] — commercial wedge strategy
- [[briefs/cara-starter-product-spec]] — founding product spec

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-14-morning-briefing-golf-cara]]
- [[briefs/cara-founder-voice-build-sprint-2026-07-12]]
- [[briefs/cara-realtime-car-voice-acceptance]]
- [[briefs/cara-starter-product-spec]]
- [[briefs/cara-success-strategy-2026-07-11]]
- [[briefs/cara-world-class-product-route-research-2026-07-13]]
- [[briefs/daily-agentic-value-radar-2026-07-16]]
- [[briefs/daily-agentic-value-radar-2026-07-18]]
- [[briefs/daily-agentic-value-radar-2026-07-20]]
- [[companies/cara]]
- [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]]
- [[decisions/cara-primary-founder-bet-self-serve-path-2026-07-13]]
- [[decisions/cara-telegram-founder-control-plane-2026-07-14]]
- [[items/cara-founder-voice-dogfood]]
- [[items/cara-phase0-m1-live-call]]
- [[project_state/cara]]

