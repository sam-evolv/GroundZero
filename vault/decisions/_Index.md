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
| 2026-08-03 | [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]] - Keep My Home isolated from current live portals | Production fixes remain based on `main`; My Home stays on the isolated V2 line until a server-controlled, default-off exact-home capability gate and rollout proof exist | Active |
| 2026-07-28 | [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]] - Ten-minute home-specific value is a DTC viability gate | Limit compulsory activation to address, building confirmation, consent, one goal and at most one optional evidence action; acquire and inherit the rest passively; reconsider broad paid DTC if this cannot be repeated | Active |
| 2026-07-28 | [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]] - Exhaust home-context acquisition through a bounded lab before broad DTC build | Extend the €79 concierge validation across varied homes; recover context in parallel; productise only repeated high-value, low-friction routes | Active |
| 2026-07-27 | [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]] - OpenHouse becomes the home-specific operating assistant | Energy and homeowner operation are the first recurring proof loop; guided capture and external-assistant context are bounded future experiments | Active |
| 2026-07-27 | [[decisions/openhouse-dtc-concierge-validation-2026-07-27]] - Validate DTC through paid concierge plans before broad consumer build | Test Upgrade Ready against Home Performance; 20 paid plans gate productisation; no universal savings or device-control claims | Active |
| 2026-06-19 | [[decisions/ground-zero-canonical]] — Ground Zero vault is canonical shared context | All models read/write vault; no re-deriving from chat | Active |
| 2026-06-09 | Stack fixed: React, Next.js, Supabase, Vercel | No framework migrations proposed | Active |
| 2026-06-09 | Security audited and hardened | 10 endpoints remediated, RLS on 35+ tables | Active |

## Personal agent venture

| Date | Decision | Consequences | Status |
|---|---|---|---|
| 2026-08-06 | [[decisions/2026-08-06-personal-agent-delegation-first-promise]] - Design and position IrelandGPT around delegation and time returned | First use completes a hated job; models and connectors stay hidden until needed; consequential actions stay approval-gated | Active |
| 2026-08-06 | [[decisions/2026-08-06-personal-agent-runtime-first-sequence]] - Reach full Hermes Desktop outcome parity before simplification | Rebrand the complete working surface first; keep all capability reachable on phone; introduce connectors conversationally; redesign from founder dogfood | Active |

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
| 2026-08-03 | [[decisions/2026-08-03-day-job-bonus-and-openhouse-gates]] - Keep the day job through the January bonus unless an exit gate is met | Preserve runway; reconsider only for funded accelerator acceptance, verified commercial runway, a materially better formal offer, or a genuine health/integrity gate | Active |
| 2026-06-19 | [[decisions/ground-zero-canonical]] — vault is canonical | Hermes, Claude, Gemini all source from vault; no re-deriving from chat | Active |
| 2026-07-14 | [[decisions/ai-founder-coach-operating-agreement-2026-07-14]] — Hermes acts as candid AI founder coach | Voice context compounds into grounded challenge, decision support and execution focus | Active |
| 2026-07-22 | [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]] — private-by-default six-month proof experiment | Extends the founder OS across health, capacity, job, cash clarity, and one commercial proof loop; review after 14 days | Active |

## How to use

When you make a decision:
1. Create `decisions/<slug>.md` using the [[templates/decision]] template
2. Add it to this log chronologically
3. Link it from the relevant company, goal, or item note

## Connected vault notes

- [[companies/personal-agent]] — active personal-agent venture
- [[companies/openhouse-ai]] — OH decisions
- [[companies/openbook]] — OB decisions
- [[companies/evolv-renewables]] — Renew decisions
- [[goals/oh-funder-pitch]] — funder narrative depends on these
- [[context/dashboard]] — dashboard references active decisions
- [[items/_Index]] — items may be blocked by decisions
