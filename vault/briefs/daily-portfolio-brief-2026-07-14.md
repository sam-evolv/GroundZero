---
title: Daily portfolio brief — 14 July 2026
date: 2026-07-14
kind: daily-portfolio-review
status: operational
---

# Daily portfolio brief — 14 July 2026

## Current state

- **Cara:** the primary founder bet remains the P0 founder voice dogfood loop. The current quality route is a measured native iOS → Realtime WebRTC benchmark with a Cara-owned memory/action control plane; the existing browser/Hermes path is a proof-of-architecture, not the production-quality answer.
- **OpenHouse AI:** V2 remains live across four Longview schemes and Vercel was last recorded as Ready. Migration cleanup and the tenant-isolation/RLS audit are still open.
- **OpenBook:** live availability sync is marked `pr_ready` at [PR #214](https://github.com/sam-evolv/openbook/pull/214). No-shows remain the recorded primary churn driver.
- **Evolv Renewables:** one rooftop install is generating and one remains in survey; compliance reporting still consumes manual time.

## Top risks / blockers

1. **Cara:** real-call testing still depends on a +353 number, telephony credentials, a controlled public endpoint, and Twilio signature validation. Do not advance to pilots until the five-call founder exit gate and cost/latency evidence exist.
2. **OpenHouse:** two V2 tables are recorded as allowing cross-tenant reads. Remote anomaly verification is also blocked in the recorded environment by unavailable Supabase access and Docker.
3. **Portfolio hygiene:** OpenHouse, OpenBook, and Evolv goal notes still carry end-of-June targets, but the vault contains no current outcome measurements. Their status should be reconciled from live systems before treating the targets as achieved or missed.

## Next actions

1. Run Cara's same-session contract through the two initial voice paths and capture acoustic latency, barge-in, continuity, post-call artefact quality, and per-call cost.
2. Close and verify the OpenHouse RLS gap before expanding V2 or removing backup tables.
3. Review/ship OpenBook PR #214, then validate conflict handling against a venue calendar before relying on it operationally.
4. Establish the actual Renew reporting cadence and evidence inputs before starting its reporting-automation build.

## New signal worth tracking

Today's AI research brief recommends defining a provider-neutral asynchronous-job contract for Cara post-call work. This is a bounded post-call experiment only; it should not change the live voice-loop benchmark.

## Connected vault notes

- [[context/index]] — canonical context
- [[context/dashboard]] — active portfolio queue
- [[project_state/cara]] — Cara live state
- [[project_state/oh]] — OpenHouse live state
- [[project_state/ob]] — OpenBook live state
- [[project_state/renew]] — Evolv live state
- [[items/cara-founder-voice-dogfood]] — Cara P0 milestone
- [[items/oh-rls-audit]] — OpenHouse launch-critical security work
- [[items/ob-realtime-availability]] — OpenBook PR-ready work
- [[items/renew-compliance-reporting-automation]] — Evolv operational lever
- [[briefs/daily-ai-brief-2026-07-14]] — related research signal

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/daily-ai-brief-2026-07-14]]
- [[context/index]]
- [[items/cara-founder-voice-dogfood]]
- [[items/ob-realtime-availability]]
- [[items/oh-rls-audit]]
- [[items/renew-compliance-reporting-automation]]
- [[project_state/cara]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/renew]]

