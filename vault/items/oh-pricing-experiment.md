---
id: oh-pricing-experiment
company_id: openhouse-ai
domain: bizdev
title: Test usage-based pricing for high-volume agencies
rationale: The top 5% of agencies drive 40% of usage but pay the flat rate.
council_note: Bizdev pass · Effort M
effort: M
impact: 58
state: proposed
is_one_thing: false
source: morning-brief 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T06:30:00Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
The top 5% of agencies drive 40% of usage, so pricing is leaving money on the table. A better model could improve ARPU without adding many accounts.

## Technical approach
- Split agencies by usage band and feature intensity.
- Test a usage-based tier or overage model for the heaviest accounts.
- Instrument the usage metric so billing is obvious and defensible.
- Run the experiment with a small cohort before any broad rollout.

## Risks
- Price shocks can create churn if value is not obvious.
- Usage metering can be messy if the billable unit is unclear.
- Support overhead rises if the model feels punitive.

## Effort
M. Mostly product, billing, and messaging work, with some instrumentation.

## Market timing
Usage-based and hybrid pricing are normal now, especially when power users consume a lot more product value than the average customer.

## Connects to

- [[goals/oh-activation]] — pricing affects activation
- [[goals/oh-funder-pitch]] — pricing is a funder-story lever
- [[goals/oh-v2-launch]] — post-launch pricing experiment
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status OpenHouse scale
- agency economics
- future product packaging


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]
- [[goals/oh-activation]]
- [[goals/oh-funder-pitch]]
- [[goals/oh-v2-launch]]
- [[project_state/oh]]

## Recommendation
This is a plausible project once the V2 launch is stable. It should not distract from the current reliability work.
