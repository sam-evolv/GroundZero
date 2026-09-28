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
updated_at: "2026-09-28T16:11:00+01:00"
sync_status: "Checked 2026-09-28 16:11 IST. GitHub main advanced seven verified commits / 60 files to 31a66a14 and exact-head Ready deployment dpl_Ddf8 now owns production. Source includes auth, tenant-ownership and tenant-scoped analytics fixes but no migration path. Supabase advisor counts remain 30/2/17/4 plus disabled leaked-password protection; no controlled second-user/tenant actor path ran. Keep building and unaccepted."
---

## Verified source/deployment checkpoint — 28 September 2026, 16:11 IST

- GitHub `main` advanced seven verified commits / 60 files from `0a9d0509…` to verified merge `31a66a14…` / tree `a912e8aa…`; exact-head Ready production is `dpl_Ddf8…` and owns `portal.openhouseai.ie`.
- The immutable range includes source-level tenant-scoped analytics plus auth and tenant-ownership checks on archive, information-request, BTR and data-hub routes. It contains no migration path, and source presence or deployment success is not an RLS or actor-path acceptance receipt.
- Supabase remains `ACTIVE_HEALTHY`. Advisors observed at `2026-09-28T15:05:33.872Z` retain 30 RLS-enabled/no-policy findings, two security-definer views, 17 mutable-search-path functions, four authenticated-executable security-definer functions, `vector` in `public` and disabled leaked-password protection; every listed public table still reports RLS enabled.
- Chromium rendered only the anonymous login chooser. A missing route redirected to login; no controlled second-user/tenant, persisted-row, storage, authenticated route or homeowner journey ran. Keep the item `building` and unaccepted.

## Live security-advisor checkpoint — 26 September 2026, 20:10 IST

- GitHub `main` remains `0a9d05096a9f7d598cc24334aecfa8452ebaeb70`; exact Supabase project `mddxbilpjukwskeefakz` remains `ACTIVE_HEALTHY`.
- Direct read-only security advisors observed at `2026-09-26T19:08:09.990Z` report 30 RLS-enabled/no-policy findings across `demo_backups` and `public`, two `public` security-definer views, 17 mutable-search-path function findings, the `vector` extension in `public`, four authenticated-executable security-definer functions and disabled leaked-password protection.
- These are advisor findings, not proof of exploitability or tenant isolation. The original two cross-tenant tables remain unnamed; the six authenticated-global SELECT policies and 17 backup-named public tables from the prior checkpoint remain open intended-scope/cleanup work.
- No application rows were read and no controlled second-user/tenant, persisted-row, storage or rendered homeowner path ran. Keep the item `building` and unaccepted.

## Direct database-policy checkpoint — 24 September 2026, 08:08 IST

- GitHub `main` remains `0a9d05096a9f7d598cc24334aecfa8452ebaeb70`; Ready production remains `dpl_J2VgNgzb3tQ9XnHcaQZDtL5bb4si`, with `portal.openhouseai.ie` returning HTTP `200` and the recorded staging URL returning `404`.
- Read-only catalog inspection of exact Supabase project `mddxbilpjukwskeefakz` (`OpenHouse Database V2`, `ACTIVE_HEALTHY`) found 164 public tables, all 164 with RLS enabled and none with RLS disabled. This is a configuration fact, not proof that every policy enforces intended tenant boundaries.
- Six explicit policies allow all `authenticated` users to `SELECT` from `answer_gap_log`, `developer_codes`, `house_types`, `kitchen_selection_options`, `poi_cache` and `video_resources`. Their intended global-versus-tenant scope is not recorded here. The original defect also does not name its two tables, so the catalog result cannot be mapped to or reproduce that exact failure.
- No application rows were read and no controlled second-user/tenant, `auth.uid()`, service-layer, storage or rendered homeowner path ran. Keep the item `building`; acceptance still requires naming and re-testing the original two read paths with authorised actor identities.

## Live-source checkpoint — 20 September 2026, 04:03 IST

- GitHub `main` remains `0a9d05096a9f7d598cc24334aecfa8452ebaeb70`, with 12 open pull requests and 6 open non-PR issues. The production alias remains on Ready deployment `dpl_J2VgNgzb3tQ9XnHcaQZDtL5bb4si` and returned HTTP `200`.
- An authenticated Vercel deployment read with Git-repository metadata now exposes source `git`, branch `main` and exact `meta.githubCommitSha` `0a9d05096a9f7d598cc24334aecfa8452ebaeb70`, closing the prior production-source metadata gap.
- No authenticated cross-user or `auth.uid()` database/storage probe, migration-application receipt, persisted-row check, production document read/write path or rendered homeowner journey was exercised. The RLS audit remains blocked at its original acceptance boundary.

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
- [[briefs/2026-09-11-openhouse-built-to-innovate-buyer-subsidy-gate]]
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
- [[briefs/substack-draft-2026-09-27-more-precise-not-complete]]
- [[companies/openhouse-ai]]
- [[context/dashboard]]
- [[context/index]]
- [[goals/oh-v2-launch]]
- [[items/oh-production-migration]]
- [[items/oh-warranty-evidence-pack]]
- [[items/ops-daily-sync-digest]]
- [[project_state/oh]]


## Recommendation
Treat as project-critical launch work. Do not broaden scope until the gap is closed and verified.
