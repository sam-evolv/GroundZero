---
title: Keep My Home isolated from current live portals
company_id: openhouse-ai
date: 2026-08-03
status: active
role: decision
---

# Keep My Home isolated from current live portals

## Decision

The current live homeowner portals must not gain the new **My Home** option while their homes are not connected to the required energy-system data.

The existing live experience remains on the production line. The My Home build continues on an isolated V2 line and isolated preview environment. V2 must not be merged wholesale into `main`.

## Verified repository boundary · 3 August 2026

- `origin/main` does not track the My Home component, home-energy route, home-model route or home-energy intelligence module.
- The V2 branch contains `PurchaserMyHomeTab.tsx`, `/api/purchaser/home-energy`, `/api/purchaser/home-model` and the home-energy intelligence layer.
- PR #205 does not contain any of those My Home paths. It is safe from My Home leakage specifically, although its answer-routing and migration changes retain their own release gates.

## Operating model

### Production line

- Base every live-portal fix from current `origin/main`.
- Permit only narrowly scoped bug, security and operational fixes.
- Keep the existing homeowner navigation and visible experience unchanged unless Sam approves a specific live change.
- Do not cherry-pick V2 shell, navigation, My Home, energy or synthetic-data commits.

### V2 line

- Continue My Home work only on the isolated V2 branch.
- Deploy it to a separate preview URL and preferably a separate Vercel project or otherwise strictly branch-scoped preview environment.
- Use synthetic or explicitly authorised test-home data only.
- Never point the V2 preview at live homeowner cohorts by changing a shared production alias.

### Eventual controlled rollout

My Home can reach shared production code only after a server-controlled capability model exists and passes independent review:

- capability disabled by default;
- enabled only for an explicitly authorised tenant, development or home;
- navigation item absent when the capability is disabled;
- every My Home API rejects disabled or ineligible homes server-side;
- no fallback to synthetic, default-development or request-supplied energy data;
- a home must satisfy a defined evidence/readiness contract before enablement;
- regression tests prove current live portals remain visually and behaviorally unchanged;
- exact-home preview evidence and rollback are verified before any production cutover.

A client-side feature flag alone is not sufficient authority. The server must fail closed.

## Merge gate

Every PR proposed for `main` must be checked for:

- My Home navigation or labels;
- `PurchaserMyHomeTab.tsx`;
- purchaser `home-energy` or `home-model` routes;
- home-energy intelligence or My Home presentation modules;
- V2-only fixtures, seed scripts or synthetic energy assumptions;
- package or shell changes required only by V2.

If any appear, the PR is not a current-live fix and must remain on the V2 line unless Sam explicitly approves a controlled capability-gated release.

## Consequences

- PR #205 may be assessed on its own answer-routing and migration merits without risking My Home exposure.
- V2 can progress quickly without putting incomplete energy experiences in front of current homeowners.
- Shared fixes should flow from production into V2 where needed, not by merging V2 wholesale back into production.
- The eventual release becomes an explicit cohort cutover rather than an accidental navigation change.

## Connected vault notes

- [[project_state/oh]]
- [[goals/oh-v2-launch]]
- [[items/oh-answer-quality-audit-loop]]
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
