---
title: Daily portfolio brief — 17 July 2026
date: 2026-07-17
kind: daily-portfolio-review
status: operational
---

# Daily portfolio brief — 17 July 2026

## Current state

- **Cara:** remains the primary founder bet. The founder voice exit gate is defined, but no comparable scored call baseline is recorded. Today’s agentic-value review reinforces measurement of the existing loop before another voice-stack change.
- **OpenHouse AI:** the public portal returned HTTP 200 in 0.48s, but there has been no delivery movement since 16 July. Production is now 19 days old, `main` remains `ad327a4b`, and the same 11 PRs and 6 non-PR issues remain open. PR #204 is still the only clean mergeable PR.
- **OpenBook:** the recorded state remains 362 Dublin venues, with no-shows as the top churn driver. Live availability sync remains `pr_ready`; no live-system refresh is recorded after 1 July.
- **Evolv Renewables:** one rooftop remains recorded as generating and one in survey. Reporting remains manual; no live-system refresh is recorded after 1 July.

## Top risks

1. **OpenHouse delivery staleness:** availability is confirmed, but the ageing production deployment and unchanged engineering queue show no active shipping movement.
2. **OpenHouse verification gap:** Supabase data, migration anomalies and RLS remain unvalidated because remote access and local Docker are unavailable in the checking environment.
3. **Cara evidence gap:** changing providers or adding infrastructure before a scored founder session would not prove the active quality gate.
4. **Portfolio telemetry:** OpenBook and Evolv project-state evidence is now more than two weeks old.

## Top next actions

1. Score Cara’s next founder session on first-word latency, interruption recovery, transcript corrections, cost per minute, continuity, artefact accuracy and willingness to reuse.
2. Triage OpenHouse PR #204 and the ageing PR/issue queue, then close and verify the tenant-isolation/RLS gap.
3. Make the OpenHouse backup-table decision only when a clean week of migration evidence can be verified.
4. Refresh OpenBook venue, churn and PR #214 evidence before deciding whether to ship the availability sync.
5. Refresh Evolv’s reporting cadence and source inputs before automating compliance packs.

## Worth escalating

- OpenHouse is available but not actively shipping; delivery staleness remains the clearest portfolio execution risk.
- Cara’s next useful milestone is a measured founder call, not another integration.

## Connected vault notes

- [[context/index]] — canonical context
- [[context/dashboard]] — active portfolio queue
- [[project_state/cara]] — Cara live state
- [[project_state/oh]] — OpenHouse live state and 17 July check
- [[project_state/ob]] — OpenBook recorded state
- [[project_state/renew]] — Evolv recorded state
- [[items/cara-founder-voice-dogfood]] — Cara P0 milestone
- [[items/oh-rls-audit]] — OpenHouse security work
- [[items/oh-production-migration]] — migration cleanup gate
- [[items/ob-realtime-availability]] — OpenBook PR-ready work
- [[briefs/daily-agentic-value-radar-2026-07-17]] — current measurement signal
- [[briefs/daily-portfolio-brief-2026-07-16]] — prior portfolio review

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]

