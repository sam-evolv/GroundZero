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
updated_at: "2026-09-03T04:02:00+01:00"
sync_status: "Checked 2026-09-03 04:02 IST. GitHub main remains 0a9d0509 and the live alias remains on Ready deployment dpl_J2VgNgzb3tQ9XnHcaQZDtL5bb4si. Vercel exposes explicit Next.js build settings but no immutable gitSource SHA; no authenticated database/storage policy probe or migration receipt ran. The item stays building and unverified."
---

## Live-source checkpoint — 3 September 2026, 04:02 IST

- GitHub `main` remains `0a9d05096a9f7d598cc24334aecfa8452ebaeb70`, with 12 open pull requests and 6 open non-PR issues. The production alias remains on Ready deployment `dpl_J2VgNgzb3tQ9XnHcaQZDtL5bb4si` and returned HTTP `200`.
- Current Vercel metadata exposes explicit Next.js install/build/output settings, correcting the earlier null build-configuration observation, but still exposes no immutable `gitSource` SHA.
- No authenticated cross-user or `auth.uid()` database/storage probe, migration-application receipt, persisted-row check or production document read/write path was exercised. The RLS audit remains blocked at its original acceptance boundary.

## Live-source checkpoint — 1 September 2026, 12:08 IST

- GitHub `main` advanced to `0a9d05096a9f7d598cc24334aecfa8452ebaeb70` and includes private-document storage-policy/schema migrations plus user-facing document path changes. A clean detached worktree matches that exact remote commit.
- Vercel reports a Ready production deployment from source SHA `0a9d0509…`, and the public portal returns HTTP 200.
- This does **not** close the item: no authenticated cross-user or `auth.uid()` database/storage probe, migration-application receipt, direct persisted-row check or production document read/write evidence was exercised. The RLS audit remains blocked exactly at its original acceptance boundary.

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
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[briefs/2026-08-01-openhouse-care-password-and-authority-hardening]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[briefs/daily-portfolio-brief-2026-07-19]]
- [[briefs/substack-draft-2026-08-16-the-machine-kept-receipts]]
- [[briefs/substack-draft-2026-08-23-someone-still-has-to-pay]]
- [[briefs/substack-draft-2026-08-30-a-client-said-proceed]]
- [[briefs/substack-draft-2026-09-06-proceed-was-too-strong]]
- [[companies/openhouse-ai]]
- [[context/dashboard]]
- [[goals/oh-v2-launch]]
- [[items/oh-production-migration]]
- [[project_state/oh]]


## Recommendation
Treat as project-critical launch work. Do not broaden scope until the gap is closed and verified.
