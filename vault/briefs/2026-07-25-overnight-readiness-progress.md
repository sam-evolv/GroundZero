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
