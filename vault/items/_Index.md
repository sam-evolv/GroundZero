---
title: Ground Zero Ideas Index
purpose: Active idea notes and status at a glance
updated_at: "2026-07-22"
---

# Ideas Index

This index tracks the current active idea queue. Each entry links to its item note.

## Cara

| Item | Summary | Size | Status |
|---|---|---|---|
| [[items/cara-founder-voice-dogfood]] | Full founder brainstorming calls + memory + post-call artefacts | L | building 🔥 |
| [[items/cara-phase0-m1-live-call]] | One live +353 call with transcript + cost log | M | building |

## OpenHouse AI

| Item | Summary | Size | Status |
|---|---|---|---|
| [[items/oh-onboarding-cut]] | Cut agent onboarding to three screens | M | proposed 🔥 |
| [[items/oh-onboarding-packet-automation]] | Auto-generate onboarding packet | M | proposed |
| [[items/oh-handover-readiness-scan]] | Handover readiness scan | M | proposed |
| [[items/oh-scheme-launch-scorecard]] | Single launch scorecard | M | proposed |
| [[items/oh-warranty-triage-router]] | AI issue triage + draft reply | M | proposed |
| [[items/oh-warranty-evidence-pack]] | Warranty evidence from photos + history | M | proposed |
| [[items/oh-guardrails-eval]] | Expand guardrails eval to 50+ | M | proposed |
| [[items/oh-pricing-experiment]] | Post-launch pricing experiment | M | proposed |
| [[items/oh-production-migration]] | Stabilize production migration | S | proposed |
| [[items/oh-warranty-filter]] | Warranty filter on dashboard | S | proposed |
| [[items/oh-rls-audit]] | RLS policy audit | S | building |
| [[items/oh-dtc-home-savings-scan-concierge]] | Validate paid DTC Home Savings Scan with 10 concierge customers | S | proposed |
| [[items/oh-uk-aftercare-design-partner-sprint]] | Validate UK evidence-led aftercare with five design partners | S | proposed |

## OpenBook

| Item | Summary | Size | Status |
|---|---|---|---|
| [[items/ob-no-show-deposits]] | Refundable deposits to kill no-shows | L | proposed |
| [[items/ob-no-show-deposit-workflow]] | Automate deposit + reminder sequence | M | proposed |
| [[items/ob-no-show-deposit-proof-sprint]] | Validate deposit policy and economics with five venues | S | proposed 🔥 |
| [[items/ob-realtime-availability]] | Live venue calendar sync | L | pr_ready |
| [[items/ob-venue-health-radar]] | Venue churn health score | M | proposed |
| [[items/ob-cancellation-waitlist]] | Auto-fill from waitlist | M | proposed |
| [[items/ob-loyalty-points]] | Cross-venue loyalty points | L | snoozed |

## Evolv Renewables

| Item | Summary | Size | Status |
|---|---|---|---|
| [[items/renew-grid-automation]] | Automate grid export reporting | M | proposed |
| [[items/renew-compliance-portal]] | Client compliance portal | M | proposed |
| [[items/renew-compliance-reporting-automation]] | Auto-build compliance packs | M | proposed |
| [[items/renew-reporting-source-baseline]] | Baseline one live reporting cycle before automation | S | proposed 🔥 |

## Consultancy / quick revenue

| Item | Summary | Size | Status |
|---|---|---|---|
| [[items/consultancy-cork-property-outreach]] | Contact first 10 Cork property prospects | S | building 🔥 |

## Operations

| Item | Summary | Priority | Status |
|---|---|---|---|
| [[items/ops-daily-sync-digest]] | Daily ops anomaly check | P1 | proposed |
| [[items/ops-project-state-reconciler]] | Reconcile project_state from live signals | P1 | proposed |
| [[items/ops-source-to-wiki-ingest]] | Auto-file imports into wiki | P1 | proposed |
| [[items/ops-pr-issue-ageing-escalator]] | Stale PR/issue escalation | P1 | proposed |
| [[items/ops-daily-report-pack]] | Daily reporting per company | P1 | proposed |
| [[items/ops-weekly-status-pack]] | Weekly cross-company brief | P2 | proposed |
| [[items/ops-index-maintenance-bot]] | Auto-maintain items/_Index.md | P2 | proposed |
| [[items/ops-capture-inbox-refinery]] | File capture inbox scraps | P2 | building |
| [[items/ops-meeting-followup-assembler]] | Post-meeting recap + scheduling | P3 | proposed |

## Promotion recommendations, 18 July 2026

- [[items/ob-no-show-deposit-proof-sprint]] is mature enough for a bounded validation project after the OpenBook live-state refresh. A full payments build remains gated on venue commitment, conversion and policy evidence.
- [[items/renew-reporting-source-baseline]] is mature enough for a bounded discovery project. It should precede the three Renew automation and portal proposals.
- [[items/ops-project-state-reconciler]] is project-worthy as internal infrastructure after Cara's P0 measurement gap. Fold daily reporting, ageing and weekly views into one evidence pipeline rather than creating parallel projects.
- [[items/ops-capture-inbox-refinery]] is already implemented and is now marked building. Consolidate [[items/ops-source-to-wiki-ingest]] into the same knowledge-ingestion path.
- [[items/cara-phase0-m1-live-call]] remains a sub-milestone of [[items/cara-founder-voice-dogfood]], not a separate commercial project.

## Promotion recommendations, 22 July 2026

- [[items/oh-handover-readiness-scan]] is mature enough as one consolidated project specification after migration validation becomes available. [[items/oh-scheme-launch-scorecard]] should be its management and export view, not a second project.
- [[items/oh-uk-aftercare-design-partner-sprint]] is mature enough as a bounded commercial validation specification, but should not activate under the current one-proof-loop WIP limit. Activate only when a warm channel or inbound design partner exists.
- [[items/ops-index-maintenance-bot]] should not become a standalone project. Fold deterministic index validation into the existing refiner or daily evidence pipeline.
- Existing 18 July recommendations for OpenBook deposits, Renew reporting baseline and the project-state reconciler remain valid. Their stale live-state prerequisites are unchanged.

## Cross-references

- Goals feeding these items: [[goals/oh-activation]], [[goals/oh-aftercare-os]], [[goals/oh-v2-launch]], [[goals/oh-guardrails-active]], [[goals/oh-room-inference]], [[goals/ob-retention]], [[goals/ob-supply]], [[goals/renew-pipeline]]
- Ops MOC: [[context/ops-automation-moc]]
- Business opportunities: [[context/business-opportunities-moc]]
