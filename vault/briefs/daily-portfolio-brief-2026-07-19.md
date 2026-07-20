---
title: Daily portfolio brief — 19 July 2026
date: 2026-07-19
kind: daily-portfolio-review
status: operational
---

# Daily portfolio brief — 19 July 2026

## Current state

- **Cara:** remains the primary founder bet. The live +353 call is still a sub-milestone of the longer founder voice dogfood loop; no scored call baseline or completed exit-gate evidence is recorded.
- **OpenHouse AI:** production remains recorded as available and Ready, but the deployed commit was already 20 days old at the 18 July check. The 11-PR and 6-issue queue was unchanged, PR #204 was the only clean merge candidate, and Supabase/RLS verification remained blocked.
- **OpenBook:** a bounded five-venue deposit proof sprint is now defined. It must follow a live-state refresh and should test policy acceptance and economics before any broad payments build. Realtime availability remains `pr_ready` and is a prerequisite because unreliable inventory would contaminate the pilot.
- **Evolv Renewables:** a bounded source-baseline task is now defined: observe one complete compliance reporting cycle before choosing grid automation, report-pack automation, or a client portal.

## Top risks

1. **OpenHouse delivery staleness:** availability is healthy, but there is still no recorded delivery movement or authorised tenant-isolation verification.
2. **Portfolio evidence gaps:** Cara lacks a scored founder-call baseline; OpenBook and Evolv live-state evidence remains recorded as unrefreshed since 1 July.
3. **Premature building:** OpenBook payments and Evolv reporting automation both now have explicit discovery gates; bypassing them would turn stale assumptions into implementation work.

## Top next actions

1. Run and score Cara’s next substantive founder session against latency, interruption, continuity, artefact quality, and cost criteria.
2. Triage OpenHouse PR #204 and verify the RLS/tenant-isolation gap in an authorised environment; do not drop migration backup tables without a verifiable clean week.
3. Refresh OpenBook venue, no-show, churn, booking-conversion, and PR #214 evidence, then recruit five venues for the deposit-policy proof sprint if the baseline still supports it.
4. Observe one complete Evolv reporting cycle and produce a source map, manual-time baseline, exception list, and reviewed client-ready pack before selecting an automation scope.

## Worth escalating

- The clearest new leverage is not another feature build: it is the addition of two small evidence gates for OpenBook and Evolv that can prevent larger mis-scoped projects.
- OpenHouse remains the clearest execution risk because production availability is masking an ageing delivery queue and an unresolved verification gap.

## Connected vault notes

- [[context/index]] — canonical context
- [[context/dashboard]] — active portfolio queue
- [[briefs/daily-portfolio-brief-2026-07-18]] — prior review
- [[project_state/cara]] — Cara live state
- [[project_state/oh]] — OpenHouse live state
- [[project_state/ob]] — OpenBook recorded state
- [[project_state/renew]] — Evolv recorded state
- [[items/cara-founder-voice-dogfood]] — Cara P0 build
- [[items/oh-rls-audit]] — tenant-isolation verification
- [[items/oh-production-migration]] — migration cleanup gate
- [[items/ob-no-show-deposit-proof-sprint]] — five-venue validation
- [[items/ob-realtime-availability]] — inventory prerequisite
- [[items/renew-reporting-source-baseline]] — reporting discovery gate

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[context/index]]
- [[items/cara-founder-voice-dogfood]]
- [[items/ob-no-show-deposit-proof-sprint]]
- [[items/ob-realtime-availability]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/renew-reporting-source-baseline]]
- [[project_state/cara]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/renew]]

