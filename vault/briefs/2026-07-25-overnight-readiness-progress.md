---
date: 2026-07-25
status: overnight run — local only, nothing pushed/deployed
---

# Overnight local readiness — 25 July 2026

## 1. OpenHouse security worktree (`/Users/samdonworth/OpenHouse-market-readiness-audit`, branch `fix/market-readiness-foundations`)

**New local commit `2452f6c9` — fix(security): scope purchaser doc downloads to caller's own project/development.**

- Defect (IDOR): `apps/unified-portal/app/api/purchaser/docs-list/download/route.ts` validated the QR token against the caller's unit but then served **any** `docId`, letting a legitimate purchaser download documents from other units/developments/tenants. `docs-list` was already project-scoped; the download route was not.
- Fix: caller scope (supabase `project_id` + drizzle `development_id`) is resolved server-side from the QR-bound unit; requested document must match; fail closed on mismatch or unresolved scope. New helper `lib/security/doc-download-scope.ts` + tests. Upholds the invariant: authority is server-derived/DB-backed, never from URL/body IDs.
- Verification: 3/3 new tests + 11/11 total security tests pass; `tsc --noEmit` clean; `npm run build` succeeds; `git diff --check` clean; diff self-reviewed; `tsconfig.tsbuildinfo` churn reverted before commit. Worktree clean after commit.
- Recorded blocker (unchanged, not bypassed): build statically generates while logging `[AUTH] Failed to get session: … NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY … required` — production config must fail closed; remains a launch blocker.

## 2. OpenHouse provenance (read-only, git/local metadata only)

- Canonical remote: `https://github.com/sam-evolv/property-assistant.git`; audit worktree branches off it (`origin/main` head `ad327a4b`; local branch is unpushed).
- Root `vercel.json` (tracked) builds `apps/unified-portal` (`npm --workspace=@openhouse/unified-portal run build`, output `apps/unified-portal/.next`, plus 3 crons) — consistent with the unified portal being the deployed app at portal.openhouseai.ie.
- The "legacy copy" `property-assistant/` is **tracked inside the canonical repo** (895 files) and contains `.vercel/project.json` linking Vercel project `property-assistant` (`prj_okAOLGbRgbTKEvbl1RgD4UsRdZX2`, team `team_MBm9VwOONaQ3QPfzvPSMoUlM`). The repo root itself has no `.vercel` link. So the only local Vercel linkage evidence points at the nested legacy subtree, not the monorepo root — the tracked root `vercel.json` suggests Git-integration deployment, but which directory the Vercel project actually builds from cannot be confirmed locally.
- Next safe verification step: read-only `vercel project inspect property-assistant` (or dashboard check) to confirm the project's linked Git repo + root directory, and confirm it points at the monorepo root, not the nested legacy subtree. No write-side API calls made or needed.
- Release-control follow-up stands: quarantine/remove the tracked nested `property-assistant/` subtree after confirming deployment source.

## 3. OpenBook automation worktree (`/Users/samdonworth/OpenBook-automation-readiness`)

**New local commit `48ec57f`** — /dashboard/website owner-flow fix (priority 4; Preview-to-Claim deliberately untouched this run).

- Confirmed defect (from `d99cf69` Website tab v1): `app/(dashboard)/dashboard/website/actions.ts:109-111` dual-write mirrored `website_hero_headline_1` into **both** `website_headline` and `tagline`. Live customer sites render via legacy `app/sites/[slug]/page.tsx` (middleware host rewrite), which shows `website_headline` as hero H1 and `tagline` beneath it — so every editor save duplicated the headline, dropped headline line 2, and silently discarded the subhead. Contradicted the repo's own `docs/website-editor-columns.md` contract.
- Fix: new `lib/website/legacy-mirror.ts` (`website_headline` ← headline lines 1+2; `tagline` ← subhead; `about_long` unchanged); actions.ts spreads the helper. Copy/validation otherwise untouched.
- Verification: vitest `__tests__/website` 9/9 pass (5 new); `tsc --noEmit` clean except one pre-existing unrelated error (`generate-booking-pass.test.ts`, confirmed pre-existing via stash); `npm run build` succeeded; `git diff --check` clean.
- Noted, left alone: gallery DELETE matches `business_media` rows by URL (fragile on duplicates); `reorderGallery` non-atomic (acceptable at 8-item cap); pre-existing TS1501 in booking-pass test.

## Exact non-production state

- Nothing pushed, deployed, migrated, or mutated remotely. No secrets/signing/env changes. No outreach.
- Local-only commits this run: OpenHouse `2452f6c9`; OpenBook `48ec57f`. Both worktrees clean.
- Prospect-preview factory branches remain local-awaiting-activation per 2026-07-24 brief.

---

# Run 2 — later on 25 July 2026

## 1. OpenHouse security (`fix/market-readiness-foundations`)

**New local commit `97b95ebe` — fix(security): bind noticeboard comment access to caller's development.**

- Defect (cross-development IDOR): `app/api/purchaser/noticeboard/[noticeId]/comments/route.ts` GET/POST validated the target notice by `tenant_id` only, while the noticeboard list GET deliberately filters by the caller's `development_id`. A purchaser with a valid QR for a unit in development A could read and post comments on any notice in any other development of the same tenant via a foreign `noticeId`.
- Fix: new `lib/security/notice-scope.ts` (`isNoticeInCallerScope`, fail-closed, semantics mirror the list filter exactly incl. null-development handling) enforced in both GET and POST; returns 404 to avoid existence disclosure. Noticeboard PATCH/DELETE and comment PATCH/DELETE already enforce `unit_id` ownership — verified safe, untouched. `report/route.ts` similarly binds targets to `unit_id` for reports.
- Verification: node:test security suite 17/17 pass (6 new); `npx tsc --noEmit` clean; `npm run build` exit 0; `git diff --check` clean; `tsconfig.tsbuildinfo` churn reverted; diff self-reviewed. Worktree clean.
- Recorded blocker unchanged: build still logs 4× missing `NEXT_PUBLIC_SUPABASE_URL/ANON_KEY` auth warnings during static generation — launch blocker, not bypassed.
- Audited-and-safe this run: purchaser docs-list/profile/issues/notes routes derive scope from QR-bound unit; care homeowner routes trusting raw `installationId` (telemetry, service-records, content, chat, service-booking) remain a **documented deferred gap ("Batch 2")**, not fixed this run — flagging as the next security work item.

## 2. OpenHouse provenance — CLOSED (read-only, verified)

- `vercel project inspect property-assistant` (read-only): project `prj_okAOLGbRgbTKEvbl1RgD4UsRdZX2`, owner OpenHouseAi's projects, **Root Directory `.`**, Build Command `cd apps/unified-portal && npm run build`, Output `apps/unified-portal/.next`, Next.js preset.
- Conclusion: the deployed app is the monorepo's `apps/unified-portal`, built from the repo root — NOT the nested legacy `property-assistant/` subtree. The nested subtree's `.vercel/project.json` points at the same project but is inert for builds.
- Remaining follow-up (deliberate, needs Sam): quarantine/remove the tracked nested `property-assistant/` subtree (895 files) from the canonical repo.

## 3. OpenBook Preview-to-Claim (`feat/openbook-automation-readiness`)

**New local commit `ea106ee` — fix(prospecting): enforce prospect stage transitions server-side.**

- Gap: `transitionProspect` server action accepted any status jump; the human-review ladder (`transitionsFor`) was enforced client-side only, so a forged/replayed request could jump `sourced → live`, skipping the reviewed `converted` gate.
- Fix: new pure `isAllowedTransition` derived from the same `transitionsFor` map the UI renders (no drift possible); server action now loads current status and rejects moves the pipeline doesn't offer. No copy changes, no gates removed, no automation added.
- Verification: vitest 34/34 (admin+website suites, 2 new tests); tsc clean except known pre-existing TS1501; `npm run build` exit 0; `git diff --check` clean. Worktree clean.

## Exact non-production state (run 2)

- Nothing pushed, deployed, migrated, or mutated remotely. No secrets/env/signing changes. No outreach. One read-only Vercel inspect call.
- Local-only commits this run: OpenHouse `97b95ebe`; OpenBook `ea106ee`. Both worktrees clean; both branches unpushed.
