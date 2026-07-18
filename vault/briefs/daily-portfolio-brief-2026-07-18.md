---
title: Daily portfolio brief — 18 July 2026
date: 2026-07-18
kind: daily-portfolio-review
status: operational
---

# Daily portfolio brief — 18 July 2026

## Current state

- **Cara:** remains the primary founder bet. No comparable scored founder-call baseline is recorded. Today’s agentic-value review found no new capability that clears the adoption gate above the existing instrumented founder voice loop.
- **OpenHouse AI:** the public portal returned HTTP 200 in 0.20s and production is Ready, but the deployed commit is now 20 days old. `main`, the 11 open PRs and the 6 non-PR issues remain unchanged; PR #204 is still the only clean merge candidate.
- **OpenBook:** the recorded state remains 362 Dublin venues, with no-shows as the top churn driver. Live availability sync remains `pr_ready`; no live-system refresh is recorded after 1 July.
- **Evolv Renewables:** one rooftop remains recorded as generating and one in survey. Reporting remains manual; no live-system refresh is recorded after 1 July.

## Top risks

1. **OpenHouse delivery staleness:** production is available, but there has been no recorded delivery movement and the engineering queue remains unchanged.
2. **OpenHouse verification gap:** Supabase data, migration anomalies and RLS remain unvalidated because remote access and local Docker are unavailable in the checking environment.
3. **OpenHouse checkout risk:** the canonical local clone is clean but stale; a separate Desktop clone has a large staged/untracked working tree and should not be used without explicit recovery and review.
4. **Portfolio evidence gaps:** Cara still lacks a scored founder-call baseline, while OpenBook and Evolv live-state evidence has not been refreshed since 1 July.

## Top next actions

1. Score Cara’s next founder session against the existing latency, interruption, correction, continuity, artefact and cost criteria before changing the stack.
2. Triage OpenHouse PR #204 and the ageing queue, then verify the tenant-isolation/RLS gap through an authorised environment.
3. Do not drop OpenHouse backup tables until a clean week of migration evidence is verifiable.
4. Refresh OpenBook venue, churn and PR #214 evidence before deciding whether to ship availability sync.
5. Refresh Evolv’s reporting cadence and source inputs before automating compliance packs.

## Worth escalating

- OpenHouse availability is healthy, but delivery staleness has reached 20 days and remains the clearest portfolio execution risk.
- The separate OpenHouse Desktop checkout is unsafe as a delivery base until its large staged/untracked state is reviewed.

## Connected vault notes

- [[context/index]] — canonical context
- [[context/dashboard]] — active portfolio queue
- [[project_state/cara]] — Cara live state
- [[project_state/oh]] — OpenHouse live state and 18 July check
- [[project_state/ob]] — OpenBook recorded state
- [[project_state/renew]] — Evolv recorded state
- [[items/cara-founder-voice-dogfood]] — Cara P0 milestone
- [[items/oh-rls-audit]] — OpenHouse security work
- [[items/oh-production-migration]] — migration cleanup gate
- [[items/ob-realtime-availability]] — OpenBook PR-ready work
- [[briefs/daily-agentic-value-radar-2026-07-18]] — current adoption signal
- [[briefs/daily-portfolio-brief-2026-07-17]] — prior portfolio review

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]

