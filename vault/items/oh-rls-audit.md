---
id: oh-rls-audit
company_id: openhouse-ai
domain: security
title: Close the tenant data gap before the V2 launch
rationale: Two tables on the V2 database still allow cross-tenant reads. Found in the pre-launch sweep.
council_note: Security flag · Effort S
effort: S
impact: 82
state: building
is_one_thing: false
source: morning-brief 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T06:30:00Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
This is launch-critical. Tenant isolation is table stakes for trust, so closing the gap protects the whole OpenHouse platform and avoids a self-inflicted support or security incident.

## Technical approach
- Identify the two tables that still allow cross-tenant reads.
- Add or fix RLS policies to enforce tenant scoping on every query path.
- Re-test the exact read paths that exposed the gap.
- Confirm the fix against live V2 schemes before launch.

## Risks
- A partial RLS fix can leave hidden read paths open.
- New policies can break legitimate dashboards if tenant filters are too strict.
- Validation has to cover both direct reads and any service-layer access.

## Effort
S. This should stay narrow, but the validation step matters as much as the code change.

## Market timing
Not a market trend issue. It is a credibility issue. If this slips, it hurts the launch narrative more than any feature gap.

## Connects to

- [[goals/oh-v2-launch]] — primary feeding goal
- [[items/oh-production-migration]] — production migration
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- security baseline
- premium trust bar


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-28]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[companies/openhouse-ai]]
- [[context/dashboard]]
- [[goals/oh-v2-launch]]
- [[items/oh-production-migration]]
- [[project_state/oh]]


## Recommendation
Treat as project-critical launch work. Do not broaden scope until the gap is closed and verified.
