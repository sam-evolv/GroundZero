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

## V2 truth-boundary checkpoint · 3 August 2026

Local V2 commit `ffb00731` records the independently reviewed My Home evidence boundary. It remains unpushed on `claude/new-session-0jdf52` and is not part of the current-live line.

Verified behavior:

- canonical token-bound home identity outranks and cannot be filled by fixtures;
- the home-energy endpoint fails closed without a validated token unit and does not create the service client before authorization;
- PostgREST reads are forced to `cache: no-store`;
- supplier bills require positive, meaningful historical evidence and reject ordinary grammatical negations, contractions and simulated provenance;
- historical bills, simulations and live telemetry remain visibly distinct;
- operational failures remain errors rather than being presented as an empty home record;
- the focused My Home smoke suite, non-incremental typecheck, production build and independent adversarial review passed.

The next safe V2 slice is the server capability boundary already required above: default deny, preview-only enablement, exact token-bound home allowlist, and shared denial at navigation, route, API and data-access layers. It must not use a public client flag, migration or production environment change as its first implementation.

## Current-live guard checkpoint · 3 August 2026

Local commit `0ae16083` records the independently reviewed structural current-live boundary. The trusted `pull_request_target` workflow executes the base branch's policy and treats the pull-request head only as inert Git diff data. It freezes frontend, library, configuration, environment, package, deployment, workflow, mobile-wrapper and release-audit surfaces; retains both sides of renames; and prevents a pull request from modifying the policy used to approve itself.

Verification passed:

- checker tests: 9/9;
- exact PR #205 head `5d56e3bb`: accepted with 19 files;
- exact V2 head `08f64fa4`: rejected with 39 violations;
- syntax and cached diff checks;
- independent adversarial code review.

This is a local code checkpoint, not enforcement. GitHub has no rulesets and `main` is unprotected; the workflow is absent from the trusted base; Vercel production isolation is unverified. Activation remains approval-gated in [[items/oh-live-portal-boundary-activation]].

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
- [[items/oh-live-portal-boundary-activation]]
- [[briefs/2026-08-03-current-live-boundary-and-v2-handoff]]
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-03-current-live-boundary-and-v2-handoff]]
- [[goals/oh-v2-launch]]
- [[items/oh-live-portal-boundary-activation]]
- [[project_state/oh]]
