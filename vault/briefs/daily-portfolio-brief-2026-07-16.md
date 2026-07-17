---
title: Daily portfolio brief — 16 July 2026
date: 2026-07-16
kind: daily-portfolio-review
status: operational
---

# Daily portfolio brief — 16 July 2026

## Current state

- **Cara:** remains the primary founder bet. The 20–60 minute founder voice dogfood loop is still the active milestone, but no measured founder-call baseline is recorded for latency, interruptions, corrections, cost, artefact accuracy, or cross-call continuity.
- **OpenHouse AI:** the portal returned HTTP 200 and the latest production deployment remains Ready. Delivery is stale: production is now 18 days old, `main` is unchanged at `ad327a4b`, and the same 11 PRs and 6 non-PR issues remain open. PR #204 is still the only clean mergeable PR.
- **OpenBook:** the recorded state remains 362 Dublin venues, with no-shows as the top churn driver. Live availability sync remains `pr_ready`, but no newer live-system check is recorded.
- **Evolv Renewables:** one rooftop remains recorded as generating and one in survey. Reporting is still manual, with no newer live-system check recorded.

## Top risks

1. **Cara evidence gap:** provider or telephony decisions made before a scored founder session would add infrastructure without proving conversation quality.
2. **OpenHouse verification gap:** public availability is confirmed, but Supabase data, migration anomalies, and RLS cannot be validated from the current environment. The two available local clones are on old branches and are not current production checkouts.
3. **Portfolio telemetry:** OpenBook and Evolv project-state evidence has not been refreshed since 1 July.

## Top next actions

1. Create a vendor-neutral Cara call scorecard and use it on the next founder session: first-word latency, interruption recovery, continuity, artefact accuracy, corrections, cost, and a simple reuse rating.
2. For OpenHouse, close and verify the tenant-isolation/RLS gap, then make an explicit decision on migration backup-table removal only after the clean-week evidence exists.
3. Triage OpenHouse PR #204 and the ageing PR/issue queue; production availability does not remove the delivery-staleness risk.
4. Refresh OpenBook live venue/churn evidence before deciding whether to ship PR #214.
5. Establish Evolv's current reporting cadence and source inputs before automating compliance packs.

## Worth escalating

- OpenHouse is available, not actively shipping. The unchanged code and ageing queue now represent the clearest portfolio delivery risk.
- Cara's highest-value move remains measurement of the existing loop, not another voice-stack change or Hermes update.

## Connected vault notes

- [[context/index]] — canonical context
- [[context/dashboard]] — active portfolio queue
- [[project_state/cara]] — Cara live state
- [[project_state/oh]] — OpenHouse live state and 16 July check
- [[project_state/ob]] — OpenBook recorded state
- [[project_state/renew]] — Evolv recorded state
- [[items/cara-founder-voice-dogfood]] — Cara P0 milestone
- [[items/oh-rls-audit]] — OpenHouse security work
- [[items/oh-production-migration]] — migration cleanup gate
- [[items/ob-realtime-availability]] — OpenBook PR-ready work
- [[briefs/daily-agentic-value-radar-2026-07-16]] — current measurement signal
- [[briefs/daily-portfolio-brief-2026-07-15]] — prior portfolio review

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]

