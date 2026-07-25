---
id: oh-onboarding-cut
company_id: openhouse-ai
domain: design
title: Cut agent onboarding to three screens
rationale: 42% of new agents drop off before their first listing. The flow is nine screens today.
council_note: Design pass · Effort M
effort: M
impact: 95
state: proposed
is_one_thing: true
source: morning-brief 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T06:30:00Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
Very high. Forty-two percent of new agents drop off before their first listing, so onboarding is directly suppressing activation and revenue.

## Technical approach
- Cut the flow from nine screens to three.
- Move non-critical setup into progressive disclosure.
- Pre-fill scheme and agent data wherever possible.
- Keep one clear path to the first listing creation.
- Preserve compliance-only steps behind an optional expansion.

## Risks
- Oversimplifying the flow could hide important setup detail.
- Design changes might conflict with the premium bar if they feel too generic.
- Any drop in required data quality will hurt downstream support.

## Effort
M. A focused design and build slice, likely a few days if scope stays tight.

## Market timing
Very timely. Best-in-class SaaS onboarding is increasingly AI-assisted and shorter, not longer. Users expect fast setup and instant value.

## Connects to

- [[goals/oh-activation]] — primary feeding goal: activation is the gate
- [[goals/oh-aftercare-os]] — aftercare OS vision this serves
- [[items/oh-onboarding-packet-automation]] — sister item: packet + flow cut compound
- [[items/oh-handover-readiness-scan]] — readiness scan feeds onboarding quality
- [[items/oh-scheme-launch-scorecard]] — scorecard is the management view
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- [[context/openhouse-product-map]] — product surface this ships on


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-09]]
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[companies/openhouse-ai]]
- [[context/dashboard]]
- [[context/openhouse-product-map]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-scheme-launch-scorecard]]
- [[project_state/oh]]


## Recommendation
This is one of the strongest candidates to become a project because it attacks the metric that is currently stuck. It should move ahead once migration work is quiet enough to support UX changes.
