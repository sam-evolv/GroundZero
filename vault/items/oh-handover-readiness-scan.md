---
id: oh-handover-readiness-scan
company_id: openhouse-ai
domain: innovation
title: Scan scheme handover readiness for missing evidence and blockers
rationale: OpenHouse already tracks handover, documents, issues, and aftercare. There is no single readiness scan that shows what is still missing before a scheme goes live.
council_note: New idea from gap analysis · Effort M
effort: M
impact: 80
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T00:02:14+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
High. Every missing document, unresolved issue, or incomplete homeowner setup item creates launch friction and support risk. A readiness scan reduces avoidable delays, makes handover feel more controlled, and gives developers a cleaner proof point that the scheme was managed properly.

## Technical approach
- Score each scheme against a readiness checklist covering documents, contacts, homeowner comms, warranty settings, and open issues.
- Pull signals from the Developer Portal, Data Hub, issue workflow, and onboarding state.
- Surface a red, amber, or green readiness view before launch.
- Highlight the exact blockers instead of only showing aggregate status.
- Reuse the same scan output for internal follow-up tasks and customer-facing evidence.

## Risks
- A noisy readiness score could create false confidence or unnecessary panic.
- The checklist can become too broad if it tries to cover every possible launch detail.
- Stale source data will undermine trust, so refresh quality matters.

## Effort
M. Mostly a rules and aggregation problem with a clear UI surface. The first version can stay read-only and become more valuable if it is paired with existing launch admin workflows.

## Market timing
Timely. Buyers increasingly expect software that proves operational readiness, not just task tracking. Readiness scoring also fits the current shift toward tighter evidence and auditability in proptech.

## Connects to

- [[items/oh-onboarding-cut]] — onboarding flow + readiness scan compound
- [[items/oh-onboarding-packet-automation]] — packet automation feeds readiness data
- [[items/oh-warranty-evidence-pack]] — evidence pack is a readiness output
- [[goals/oh-aftercare-os]] — aftercare OS vision this serves
- [[goals/oh-activation]] — activation feeds from clean handover
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- [[context/openhouse-product-map]] — product surface this ships on


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[companies/openhouse-ai]]
- [[context/openhouse-product-map]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[items/oh-dtc-home-savings-scan-concierge]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-uk-aftercare-design-partner-sprint]]
- [[items/oh-warranty-evidence-pack]]
- [[project_state/oh]]


## Incubation update, 22 July 2026

This overlaps materially with [[items/oh-scheme-launch-scorecard]]. The readiness scan is the underlying rules and blocker engine. The scorecard is only a view and export of the same result. Building them as separate projects would duplicate source mapping, thresholds and trust work.

Commercial value comes from proving that a developer will use the output to approve a launch, chase missing evidence or reduce post-handover exceptions. The first version should therefore run against the four live Longview schemes as a deterministic, internal-only checklist. Measure missing inputs found, false blockers, time saved and whether an operator acts on the result. Do not add AI scoring until the rules produce a stable decision.

Effort remains medium for one shared data contract and read-only operator view. Main risks are stale source fields, false green status and checklist sprawl. Current production migration and unavailable remote Supabase validation block a trustworthy launch.

## Recommendation
Promote one consolidated handover-readiness project after migration validation is available. Absorb [[items/oh-scheme-launch-scorecard]] as its customer-facing view rather than launching two projects.
