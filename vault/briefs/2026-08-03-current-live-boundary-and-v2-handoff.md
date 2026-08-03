---
title: Current-live boundary and isolated My Home V2 handoff
company_id: openhouse-ai
date: 2026-08-03
status: active
role: brief
---

# Current-live boundary and isolated My Home V2 handoff

## Non-negotiable release split

Current Longview homeowner portals remain on `origin/main` without My Home. The new My Home surface remains isolated on `claude/new-session-0jdf52` and may use only a separate, non-production preview. No production alias may be moved to V2.

## Isolated V2 checkpoint

Local commit `ffb00731` records the independently reviewed My Home truth boundary. It is unpushed and undeployed.

Verified properties:

- canonical token-bound identity is the only home authority;
- fixtures cannot override or complete home identity;
- home-energy access fails closed without a validated token unit;
- the service client is created only after authorization;
- PostgREST requests force `cache: no-store`;
- operational failures do not become empty-record claims;
- documented systems and supplier bills require positive evidence;
- grammatical negations, contractions and simulated provenance fail closed;
- historical supplier bills, simulations and live telemetry remain separate.

Verification passed through the combined My Home smoke suite, non-incremental typecheck, full isolated production build, diff check and independent adversarial review.

## Current-live guard implementation

The local guard branch is `hermes/protect-live-no-my-home`, based on `origin/main` at `ad327a4b`. The staged guard uses trusted `pull_request_target` base code and treats the pull-request head only as inert Git diff data. It does not check out or execute PR-controlled files, package hooks, scripts, imports or actions.

The structural policy freezes current-live routes, UI, client-capable libraries, translations, assets, build/runtime configuration, package and lock metadata, deployment workflows and mobile wrapper/release surfaces. It permits only exact separately reviewed PR #205 files and non-runtime audit, hardening, smoke and test script changes.

Local fixtures currently show:

- guard tests: 9/9 pass;
- PR #205 exact head `5d56e3bb`: pass with 19 changed files;
- V2 exact head `08f64fa4`: rejected with 39 violations;
- cached diff check: pass.

The independently reviewed local guard checkpoint is `0ae16083` (`ci: freeze current live portal frontend`). It remains unpushed and is not remotely active.

## Enforcement status

The guard is not enforced remotely:

- GitHub repository rulesets returned `[]`;
- `main` branch protection returned `404 Branch not protected`;
- the workflow is not yet present on the trusted base branch;
- Vercel production-branch and alias isolation are unverified.

Activation requires explicit approval and is tracked in [[items/oh-live-portal-boundary-activation]]. Green local code or optional CI must never be described as an enforced merge boundary.

## Next V2 slice

Build a server-controlled My Home capability boundary on the isolated V2 line:

- default deny;
- preview-only enablement;
- exact token-bound home allowlist;
- navigation absent when denied;
- page, API and data access denied by the same server policy;
- no client flag as authority;
- no migration, production environment or alias change in the first slice.

## Connected notes

- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[goals/oh-v2-launch]]
- [[project_state/oh]]
- [[items/oh-live-portal-boundary-activation]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[project_state/oh]]
