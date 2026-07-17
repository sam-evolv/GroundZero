---
title: Daily portfolio brief — 15 July 2026
date: 2026-07-15
kind: daily-portfolio-review
status: operational
---

# Daily portfolio brief — 15 July 2026

## Current state

- **Cara:** remains the primary founder bet. The active milestone is the 20–60 minute founder voice dogfood loop, but the current bottleneck is measurement: no recorded baseline yet for latency, interruptions, corrections, costs, or artefact quality.
- **OpenHouse AI:** V2 remains live across four Longview schemes. The local repo is clean and PR/issue counts are unchanged. Production is still Ready, but the latest production deployment is 17 days old, creating a delivery-staleness signal. Tenant-isolation/RLS work and migration cleanup remain open.
- **OpenBook:** 362 Dublin venues remain the recorded state. No-shows remain the primary churn driver; live availability sync is still marked `pr_ready` at PR #214, with no newer live-system check recorded.
- **Evolv Renewables:** one rooftop is generating and one is in survey. Compliance reporting remains manual, with no newer live-system check recorded.

## Top risks / blockers

1. **Cara:** real-call proof still depends on telephony credentials, a +353 number, controlled public exposure, signature validation, and an evidence-backed five-call exit gate.
2. **OpenHouse:** remote Supabase anomaly verification remains blocked by missing access and stopped Docker. The 17-day-old production deployment should be treated as a delivery-staleness risk, not as evidence of an outage.
3. **Portfolio telemetry:** OpenBook and Evolv status are stale in the vault, so current outcomes should not be inferred from their existing targets or counts.

## Top next actions

1. Create and use a one-call Cara scorecard, logging first-word latency, interruption recovery, continuity, artefact quality, corrections, and cost before comparing another voice provider.
2. Close and verify the OpenHouse tenant-isolation/RLS gap, then decide whether migration backup tables are ready for removal after the clean-week condition.
3. Review/ship OpenBook PR #214 only after validating calendar conflict handling; separately refresh the live venue and churn evidence.
4. Establish the current Evolv reporting cadence and inputs before building reporting automation.
5. Do not upgrade Hermes yet. If considered, run it as a backed-up, non-production reliability evaluation with an explicit pass/fail fixture.

## Worth escalating

- The clearest near-term leverage remains evidence and approved action, not more tools or infrastructure. The existing Cork property outreach test still needs an explicit approved/sent outcome ledger before it can be judged.

## Connected vault notes

- [[context/index]] — canonical context
- [[context/dashboard]] — active portfolio queue
- [[project_state/cara]] — Cara live state
- [[project_state/oh]] — OpenHouse live state
- [[project_state/ob]] — OpenBook live state
- [[project_state/renew]] — Evolv live state
- [[items/cara-founder-voice-dogfood]] — Cara P0 milestone
- [[items/oh-rls-audit]] — OpenHouse security work
- [[items/ob-realtime-availability]] — OpenBook PR-ready work
- [[items/consultancy-cork-property-outreach]] — approved founder-sales test
- [[briefs/daily-agentic-value-radar-2026-07-15]] — current research signal

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/daily-agentic-value-radar-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[context/index]]
- [[items/cara-founder-voice-dogfood]]
- [[items/consultancy-cork-property-outreach]]
- [[items/ob-realtime-availability]]
- [[items/oh-rls-audit]]
- [[project_state/cara]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/renew]]

