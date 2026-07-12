---
title: Cara founder voice build sprint
created: 2026-07-12
status: ready, blocked on full source archive and provider credentials
---

# Cara Founder Voice Build Sprint

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task once the full code archive/repository is available.

**Goal:** Sam can call Cara for a genuinely useful 20–60 minute brainstorming meeting, receive an accurate post-call artefact, and resume the thread later.

**Architecture:** Use a provider-swappable realtime voice mouth connected to Cara-owned working memory, episodic memory, brainstorming policy, artefact generator, and gauntlet. Optimise first for conversational quality and instrumentation; optimise cost after a reliable baseline exists.

**Tech stack:** Twilio +353, benchmarked realtime voice runtime (managed baseline versus Pipecat/LiveKit), Deepgram or runtime-native ASR, best-quality reasoning model baseline, Cartesia/ElevenLabs or runtime-native voice baseline, Postgres/Supabase, Python.

## Delivery bands from 12 July 2026

- 14–16 July: first real dial-in conversation, transcript and logs.
- 19–26 July: useful founder dogfood alpha with long-call memory and post-call artefact.
- 2–23 August: strong private beta after daily use and gauntlet hardening.
- 23 August–4 October: credible external release candidate, depending on defects discovered through real calls.

These are focused-build estimates, not promises. Provider account setup, +353 number provisioning, access to the full source archive, and Sam's daily testing cadence are the main schedule dependencies.

## Sprint 0 — Recover and verify the baseline

- Locate/upload the full archive reported by the conversation handoff.
- Verify file tree, prototype, spreadsheet, scripts, and code.
- Run the reported 17 tests.
- Create repository if one does not exist.
- Record exact baseline and avoid rebuilding already-working components.

## Sprint 1 — Real call baseline

- Provision Twilio +353 number.
- Connect one realtime voice pipeline.
- Recognise Sam's caller ID.
- Persist transcript, timestamps, interruptions, latency, model usage, and cost.
- Deliver a real mobile-to-Cara call.

Exit: Sam completes an unscripted 10-minute call; transcript and metrics persist.

## Sprint 2 — Conversation quality

- Benchmark at least two mouth/model configurations on identical recordings/scenarios.
- Add endpointing, barge-in, long-pause tolerance, backchannels, interruption recovery, and concise verbal behaviour.
- Add a brainstorming system policy that challenges rather than flatters.
- Add manual per-call rating capture.

Exit: Sam prefers one configuration clearly and can talk for 20 minutes without repeated turn-taking frustration.

## Sprint 3 — Long-call and cross-call memory

- Protected verbatim working window.
- Incremental summarisation behind the window.
- Episodic write during calls.
- Semantic extraction after calls.
- Caller-context loader with recent open threads.
- Temporal retrieval for “yesterday morning” and thread resumption.

Exit: two 30-minute calls without material context loss and three cross-day continuity tests pass.

## Sprint 4 — Post-call artefacts

- Generate decisions, strongest ideas, open questions, and next actions.
- Deliver by SMS/WhatsApp within one minute.
- Store artefact with source-call linkage.
- Accept reply corrections and update memory.

Exit: three consecutive artefacts require only minor edits.

## Sprint 5 — Tool use and failure hardening

- Live web search with spoken progress messages.
- Safe timeout/retry/fallback behaviour.
- Convert real dogfood failures into gauntlet scenarios.
- Add daily regression run and weekly quality review.

Exit: five consecutive substantive calls without sev-1 defects; known failures degrade gracefully.

## Scope exclusions

- No native app.
- No external SME self-serve onboarding yet.
- No accounting, payments, outbound errands, staff roster, or multi-vertical work.
- No premature cascade/cost optimisation until a high-quality baseline exists.

## Immediate blockers

1. The uploaded zip is incomplete relative to the handoff; obtain the full latest code/archive or explicit repo path.
2. Provider accounts/keys and +353 number must be created by Sam; secrets must remain in `.env`, never Ground Zero.
3. A daily real-call dogfood window is required once dial-in works.

## Connected vault notes

- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[project_state/cara]]
- [[companies/cara]]
- [[imports/cara-conversation-summary-2026-07-12]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[companies/cara]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[project_state/cara]]

