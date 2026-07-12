---
title: Cara starter product spec
created: 2026-07-11
source: /Users/samdonworth/.hermes/cache/documents/doc_704dc4f41859_cara-starter.zip
status: starter-pack ingested
---

# Cara starter product spec

Cara is a proposed Irish SME product: a phone-number-with-a-brain for businesses. Customers ring it and get a warm always-on receptionist; owners ring or message it as a PA that books jobs, drafts paperwork with approval, runs phone errands, and remembers the business.

## Core pitch

> Hire your first employee for about €3/day. She answers your phone, does your paperwork, runs errands, rings customers you never get time to, and never sleeps.

Emotional thesis: small business owners are short of rest more than software. Cara lets the business keep working while the owner stops.

## Non-negotiables

- User-facing copy says **digital assistant**, not AI/bot/agent/model/automation. Legal call disclosure remains mandatory: automated assistant / Art. 50.
- Money actions are approval-gated forever: quotes, invoices, payments drafted autonomously but never sent without explicit owner approval.
- No silent stalls: every instruction becomes a persistent task with visible state (`understood → in_progress → blocked → done`).
- No mid-call memory lapse: protected working memory + incremental summarisation; planted recall tests belong in CI.
- EU residency and DPAs throughout; no China-hosted APIs or xAI for call data.
- Cost discipline: prompt caching, ≥80% cascade routing, batch APIs for async work; frontier model for stakes.

## Chosen starter stack

- Voice/mouth: Pipecat preferred; LiveKit Agents fallback.
- Telephony: Twilio +353 first, Telnyx later.
- ASR: Deepgram streaming with business vocabulary boosting.
- Frontier model: Claude Sonnet-class via EU endpoint for planning, money, errands, ambiguity.
- Cascade: Gemini Flash-Lite; GLM-5.2 candidate only via EU/US-hosted inference or self-host.
- TTS: Cartesia Sonic default; ElevenLabs for premium voice tests; Sesame CSM/self-hosted Irish voices later.
- Brain: Hermes Agent behind an adapter; Cara's schema is the source of truth.
- Memory: Postgres + pgvector, with episodic, semantic, document, and protected working memory.
- App: later; iPhone-first React Native/Expo or PWA v1 only after call validation.

## Phase 0 sequence

1. M1: one live +353 call — Pipecat + Twilio + Deepgram + Cartesia + Claude; disclosure line; transcript to Supabase; <1.5s pickup; roughly 800ms voice-to-voice target.
2. M2: ingestion script — business name → website/Google profile/reviews → structured profile JSON.
3. M3: gauntlet v0 — Irish-accent recordings + planted-fact memory tests; CI-runnable.
4. M4: memory + ring-back continuity — recognise caller on second call; pass “remember what we said yesterday”.
5. M5: first trades vertical pack + Google Calendar booking + SMS/WhatsApp owner summaries.

## App/design stance

The app is the office you visit, not the desk you work at. Three screens only:

- Feed: cards, approvals, call summaries, money counter.
- Live: active call transcript, whisper, take over, errands in flight.
- Memory: search, playback, customers, files/connectors.

Design covenant: Turf & Cream palette, big warm type, one Atlantic green accent, no chat-bubble-primary UI, no purple gradients, no robots/sparkles/confetti, springs not durations, all empty/loading/error states written in Cara’s voice.

## Market wedge

- Ireland/EU-first positioning: +353 flow, Irish voices/culture, VAT/admin, Art. 50 compliance, EU data residency.
- Competes against answering services, dashboard-first AI receptionists, and app-first personal agents by combining callable number + business memory + actions + local trust.
- Grow Digital Voucher can halve year-one subscription cost.
- Headline metric: recovered €/customer/month.

## Key risk to solve by evidence

Hard Irish audio: accents, noisy vans, proper nouns, Eircodes, phone numbers, reg plates. The product is won by the harness: confirmation loops, memory-boosted correction, channel fallback, and an Irish Accent Gauntlet with ≥99.5% post-confirmation critical-field accuracy target.

## Immediate next action

Use `PHASE0.md` opening prompt to start M1 in Claude Code after accounts are opened: Twilio, Deepgram, Cartesia, Anthropic EU routing, Google AI Studio, OpenRouter, Supabase, optional ElevenLabs. Do not build app/dashboard/payments before one excellent recorded call exists.

## Source files in starter pack

- `CLAUDE.md` — project rules and stack summary
- `PHASE0.md` — setup checklist and first Claude Code prompt
- `docs/cara-master-spec.md` — full product/business/architecture spec
- `docs/cara-app-design-spec.md` — app and brand design spec
- `docs/cara-competitive-landscape.md` — competitor analysis and required additions
- `docs/cara-model-margin-strategy.md` — COGS and stack migration plan
- `docs/cara-worldclass-playbook.md` — quality bar and design/attachment playbook

## Connected vault notes

- [[context/index]] — shared entry point
- [[context/model-pack]] — compact portfolio context
- [[context/solo-founder-era]] — solo-founder/agentic-commerce lens
- [[context/business-opportunities-moc]] — opportunity hub
- [[companies/openbook]] — adjacent SMB service-business wedge
- [[people/sam-donworth]] — founder context

- [[imports/cara-conversation-summary-2026-07-12]] — shared signals: conversation, summary, cara

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/cara-success-strategy-2026-07-11]]
- [[companies/cara]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/cara-founder-dogfood-voice-first]]
- [[items/cara-founder-voice-dogfood]]
- [[items/cara-phase0-m1-live-call]]
- [[project_state/cara]]

