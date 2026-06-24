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
updated_at: "2026-06-24T11:05:00Z"
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
- OpenHouse V2 launch
- security baseline
- premium trust bar

## Recommendation
Treat as project-critical launch work. Do not broaden scope until the gap is closed and verified.
