---
title: Decision Log
purpose: Chronological log of all durable decisions across the portfolio
kind: moc
---

# Decision Log

Every decision is stored in `decisions/` as a permanent note. This log orders them chronologically so you can trace the reasoning chain.

## OpenHouse AI

| Date | Decision | Consequences | Status |
|---|---|---|---|
| 2026-07-27 | [[decisions/openhouse-dtc-concierge-validation-2026-07-27]] - Validate DTC through the €79 Upgrade Ready Plan before broad consumer build | One Home Record architecture; 20 paid plans gate productisation; no universal savings or device-control claims | Active |
| 2026-06-19 | [[decisions/ground-zero-canonical]] — Ground Zero vault is canonical shared context | All models read/write vault; no re-deriving from chat | Active |
| 2026-06-09 | Stack fixed: React, Next.js, Supabase, Vercel | No framework migrations proposed | Active |
| 2026-06-09 | Security audited and hardened | 10 endpoints remediated, RLS on 35+ tables | Active |

## Cara

| Date | Decision | Consequences | Status |
|---|---|---|---|
| 2026-07-12 | [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]] - ElevenLabs WebRTC with Hermes Custom LLM | Fast barge-in/voice alpha while preserving Hermes as semantic brain | Active |
| 2026-07-12 | [[decisions/cara-founder-dogfood-voice-first]] - founder voice dogfooding before SME pilots | No broader product surfaces until Sam voluntarily uses the voice loop | Active |
| 2026-07-13 | [[decisions/cara-primary-founder-bet-self-serve-path-2026-07-13]] - Cara as primary founder bet; self-serve follows proof | Concentrate founder energy on product quality, then create plug-and-play onboarding | Active |
| 2026-07-14 | [[decisions/cara-telegram-founder-control-plane-2026-07-14]] - Telegram-first founder control plane | Validate messaging, voice-note, task and memory usefulness without confusing it with the live voice benchmark | Active |

## OpenBook

| Date | Decision | Consequences | Status |
|---|---|---|---|
| — | No formal decisions logged yet | — | — |

## Evolv Renewables

| Date | Decision | Consequences | Status |
|---|---|---|---|
| — | No formal decisions logged yet | — | — |

## Structural / cross-company

| Date | Decision | Consequences | Status |
|---|---|---|---|
| 2026-06-19 | [[decisions/ground-zero-canonical]] — vault is canonical | Hermes, Claude, Gemini all source from vault | Active |
| 2026-07-14 | [[decisions/ai-founder-coach-operating-agreement-2026-07-14]] — Hermes acts as candid AI founder coach | Voice context compounds into grounded challenge, decision support and execution focus | Active |
| 2026-07-22 | [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]] — private-by-default six-month proof experiment | Extends the founder OS across health, capacity, job, cash clarity, and one commercial proof loop; review after 14 days | Active |

## How to use

When you make a decision:
1. Create `decisions/<slug>.md` using the [[templates/decision]] template
2. Add it to this log chronologically
3. Link it from the relevant company, goal, or item note

## Connected vault notes

- [[companies/openhouse-ai]] — OH decisions
- [[companies/openbook]] — OB decisions
- [[companies/evolv-renewables]] — Renew decisions
- [[goals/oh-funder-pitch]] — funder narrative depends on these
- [[context/dashboard]] — dashboard references active decisions
- [[items/_Index]] — items may be blocked by decisions
