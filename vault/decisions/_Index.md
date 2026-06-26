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
| 2026-06-19 | [[decisions/ground-zero-canonical]] — Ground Zero vault is canonical shared context | All models read/write vault; no re-deriving from chat | Active |
| 2026-06-09 | Stack fixed: React, Next.js, Supabase, Vercel | No framework migrations proposed | Active |
| 2026-06-09 | Security audited and hardened | 10 endpoints remediated, RLS on 35+ tables | Active |

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
