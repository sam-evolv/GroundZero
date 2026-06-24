---
id: oh-production-migration
company_id: openhouse-ai
domain: security
title: Stabilise production migration and drop backup tables
rationale: Real Longview Estates data is live across four schemes. Need one clean week before dropping backup tables.
council_note: Security pass · Effort S
effort: S
impact: 95
state: proposed
is_one_thing: false
source: ground-zero-vault 2026-06-09
run_date: "2026-06-09"
created_at: "2026-06-09T20:00:00Z"
updated_at: "2026-06-24T11:05:00Z"
---

## Opportunity size
This is a high-value reliability task. Four schemes already run on live data, so the migration clean-up protects revenue, support load, and customer trust.

## Technical approach
- Keep backup tables until a clean week passes.
- Compare row counts, key aggregates, and recent mutations between live and backup tables.
- Watch for tenant-level anomalies in Longview Park, Ardan View, Rathard Lawn, and Rathard Park.
- Drop backups only after validation logs stay clean.

## Risks
- Silent drift between live and backup tables.
- Edge-case data issues surfacing only under real tenant usage.
- Premature cleanup before the system has earned a stable week.

## Effort
S. Mostly monitoring and validation, plus a small cleanup step at the end.

## Market timing
Not market-driven, but operationally urgent. A production data cleanup is the kind of task that protects the whole commercial story.

## Connects to
- OpenHouse V2 launch
- Sprint 5 fixes
- premium trust bar

## Recommendation
Keep as a current launch hygiene task. Finish the clean week and then remove the backups.
