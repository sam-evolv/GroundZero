---
id: oh-scheme-launch-scorecard
company_id: openhouse-ai
domain: innovation
title: Score each scheme launch for readiness and customer risk
rationale: OpenHouse has a readiness scan, onboarding packet, and warranty evidence work, but no single scorecard that tells developers whether a scheme is actually ready to launch.
council_note: New idea from gap analysis · Effort M
effort: M
impact: 81
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T00:00:00+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
High. A launch scorecard turns scattered readiness signals into something a developer can understand quickly. It reduces last-minute surprises, creates a more premium handover experience, and gives Sam a sharper management view of which schemes are safe to push live.

## Technical approach
- Aggregate signals from handover readiness, onboarding status, unresolved issues, warranty setup, and missing documents.
- Compute a red, amber, green launch score with explicit blockers.
- Show the top three reasons a scheme is not ready.
- Optionally export a customer-facing PDF or email-ready summary.
- Reuse the same inputs for internal follow-up tasks.

## Risks
- A noisy score could create false confidence or unnecessary escalation.
- Too much aggregation can hide the real operational issue.
- Source data freshness matters more than the scoring model itself.

## Effort
M. Mostly rules, aggregation, and presentation work, but the score has to be trustworthy before it is shown externally.

## Market timing
Timely. Buyers want software that proves readiness and auditability, not just task tracking. A launch scorecard fits the broader move toward evidence-heavy proptech operations.

## Connects to

- [[items/oh-handover-readiness-scan]] — scorecard surfaces readiness scan output
- [[items/oh-onboarding-packet-automation]] — packet automation feeds scorecard data
- [[items/oh-warranty-evidence-pack]] — evidence pack is a scorecard input
- [[goals/oh-aftercare-os]] — aftercare OS vision
- [[goals/oh-activation]] — primary feeding goal
- [[goals/oh-v2-launch]] — V2 stability underpins the scorecard
- [[items/oh-onboarding-cut]] — scorecard is the management view of onboarding quality
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- [[context/openhouse-product-map]] — product surface this scores

## Recommendation
Strong project candidate once migration work is quieter. This is a natural premium layer above the existing launch and aftercare workflow.
