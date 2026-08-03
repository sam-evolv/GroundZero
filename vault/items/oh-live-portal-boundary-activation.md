---
id: oh-live-portal-boundary-activation
company_id: openhouse-ai
title: Activate and require the current-live portal boundary
status: blocked
priority: critical
domain: release-safety
---

# Activate and require the current-live portal boundary

## Outcome

Make the independently reviewed current-live boundary a real merge gate without changing any production alias or deploying V2.

## Why blocked

The independently reviewed guard exists only as local commit `0ae16083`. GitHub currently reports:

- repository rulesets: none;
- `main` branch protection: not configured (`404 Branch not protected`).

The workflow is therefore not active or required. Vercel production-branch and alias isolation are also not certified. Repository and deployment setting changes require Sam's explicit approval.

## Approval-gated activation sequence

1. Push only the reviewed guard checkpoint branch.
2. Open a guard-only pull request against `main` with no application changes.
3. Bootstrap the trusted `pull_request_target` workflow onto the base branch through explicit human review.
4. Configure a repository ruleset or branch protection requiring `Current live portal boundary / frozen-current-live-frontend` on `main`.
5. Prove the required check blocks a controlled frontend-change test and passes the audited PR #205 exact head.
6. Verify maintainers cannot silently bypass the required check under the chosen ruleset.
7. Inspect Vercel production-branch settings and current aliases read-only; establish a separate V2 preview target before any V2 deployment.
8. Never move a current Longview production alias to a V2 deployment.

## Non-goals

- no PR #205 merge;
- no V2 merge into `main`;
- no deployment or migration;
- no production alias change;
- no repository setting change without approval.

## Connected notes

- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[goals/oh-v2-launch]]
- [[project_state/oh]]
