---
id: ob
company_id: openbook
headline: Empire Gym's public surface still exposes event/lesson CTAs and Stripe checkout links; the clean unpublished GymMaster worktree remains three local commits beyond current template `main`, while the base checkout is conflicted and stale.
valid: true
updated_at: "2026-09-05T16:04:00+01:00"
role: project-state
---

OpenBook's immediate commercial path is a minimum client portal for editing text and photos, followed by Stripe subscriptions at €79/month. Existing lead-generation infrastructure may support a constrained automated prospecting pilot, but the old 20-minute-per-demo manual workflow is parked.

**Live source-custody reconciliation, 2026-09-05 16:04 IST:** Direct GitHub readback places `sam-evolv/OB-ClientSiteTemplate` `main` at `a34f25707f65779d4e386e811e518af09a8c8e3a`, 25 commits beyond the base checkout's stale local `origin/main` and HEAD `b1f0d6ce8be92b40d289c3c6c408929052019f0a`. That base checkout still has an unresolved `components/sections/About.tsx` index conflict plus staged changes in `lib/schemas/business.ts` and `package-lock.json`; no merge, rebase, cherry-pick, revert or sequencer marker is present, so this is unresolved index state rather than proof of an active operation. The isolated GymMaster worktree remains clean at `658e67a0970770a1c11569d2bdf41cf2d094790c` / tree `0f84cc36edb420cd6229f53de2c28e27da19559b`, with no upstream or remote head; immutable Git shows current remote `main` is its ancestor and the candidate is three local commits ahead. `sam-evolv/OpenBook` `main` remains `c72bf48bc40fb0995bc48ff3d0eb6994344dc5d7`, with two open pull requests and two open non-PR issues. A fresh fetch of `https://www.empiregym.ie/` returned HTTP `200`, contained the event and lesson CTAs, ten `Join now` markers and six distinct Stripe anchor links, and contained no `GymMaster` marker. No rendered browser interaction, checkout, deployment, database, payment or repository mutation was exercised; client self-edit, billing and live GymMaster acceptance remain open.

**Live source-custody correction, 2026-09-05 08:12 IST:** The previously reported missing GymMaster checkout is available again at `/Users/samdonworth/GroundZero/worktrees/empire-gymmaster-20260814` and is registered in `/Users/samdonworth/OB-ClientSiteTemplate`'s live worktree inventory. It is clean on local branch `feat/empire-gymmaster-20260814` at unchanged commit `658e67a0970770a1c11569d2bdf41cf2d094790c` / tree `0f84cc36edb420cd6229f53de2c28e27da19559b`, with no upstream and no remote ref containing the commit. This restores direct source custody; it does not prove deployment or live GymMaster acceptance. A fresh fetch of the exact named public site returned HTTP `200`, contained “Book your event”, “Book a lesson” and ten `Join now` markers, and linked six times to `buy.stripe.com`; no `GymMaster` marker was present. Browser rendering was unavailable because the browser provider supplied no CDP endpoint, so no rendered interaction or checkout acceptance is claimed. No repository, deployment, DNS, database or payment mutation occurred; client self-edit, subscription and live GymMaster acceptance remain open.

**Live custody correction, 2026-09-02 00:15 IST:** GitHub `sam-evolv/OpenBook` `main` remains `c72bf48bc40fb0995bc48ff3d0eb6994344dc5d7`, with two open pull requests and two open issues. The detached `/Users/samdonworth/OpenBook` checkout remains at `7df5aec839a574098fb539fe667e3de4fdabe2bd` and now has 14 status entries. The previously recorded accepted GymMaster worktree `/Users/samdonworth/GroundZero/worktrees/empiregym-opendevs` is absent and is no longer present in the repository's live worktree registry; its accepted commit/history remains prior evidence, but no current local checkout was available for direct verification. The exact named public surface `https://www.empiregym.ie/` resolves and returned HTTP `200`; fresh extraction still exposes event/lesson CTAs, five membership offers, a day pass and direct Stripe links. This is fetched-content and availability evidence only: browser rendering and checkout were not exercised. No deployment, DNS, database, payment or repository mutation occurred; client self-edit, subscription and GymMaster acceptance remain open.

**Live public-content correction, 2026-08-30 20:02 IST:** `https://www.empiregym.ie/` returned HTTP `200`. Fresh fetched-page extraction contains “Book your event”, “Book a lesson”, five visible membership or pass offers and direct `Join now →` or day-pass links to Stripe; raw served HTML also contains `Stripe` and `Join now` markers and no `GymMaster` marker. This supersedes only the 28 August statement that the current public homepage content showed no visible Stripe or Join-now path. The browser provider supplied no CDP endpoint, so no fresh browser-rendered or interaction acceptance is claimed, and no checkout was opened. GitHub `main` remains `c72bf48`; the detached dirty local checkout remains at `7df5aec`; and the clean unpublished GymMaster worktree remains at `658e67a` with no upstream. No test, build, deployment, payment, database mutation or client self-edit acceptance occurred.

**Rendered live-surface reconciliation, 2026-08-28 00:07 IST:** Direct rendered inspection of `https://www.empiregym.ie/` showed “TAKING 2026 DATES”, “Book your event →” and “Book a lesson”. No visible “Join now”, Stripe or GymMaster marker appeared in the complete inspected semantic tree. This corrects the earlier claim that the current rendered homepage still presents the July Stripe flow. It does not prove either booking flow completes, any payment behaviour, deployment provenance, or GymMaster absence outside the inspected homepage. GitHub `main` remains `c72bf48`; the dirty detached local checkout and clean unpublished GymMaster worktree remain at their recorded heads and acceptance states.

**Live source-custody reconciliation, 2026-08-24 16:03 IST:** GitHub `main` remains `c72bf48`. A previously unrecorded local checkout at `/Users/samdonworth/OpenBook` is detached at remote-contained ancestor `7df5aec`, ten commits behind `main`, with nine modified tracked files and five top-level untracked entries. The tracked diff touches dashboard website actions, domain actions, prospect UI/types, site-card UI, iOS project/package resolution and `package.json`; untracked source includes a demo-prompt module/test plus research and prospect-trial artefacts. An untracked production-environment file is present but was not opened and no secret was read or copied into Ground Zero. This dirty detached source is implementation work only: no test, build, remote publication, database or payment mutation, deployment or rendered acceptance was run or inferred. The isolated Empire Gym GymMaster renderer remains clean and unpublished at `658e67a`; the owner-dashboard worktree remains clean and unpublished at `de26b62`; the base renderer remains conflicted; the prospect-preview renderer remains clean at `0d4e25c`; and the schema worktree remains at `c45ebda` with its recorded 15-line uncommitted bucket declaration. `https://www.empiregym.ie` returned HTTP `200`; server-rendered HTML still contains Stripe and `Join now` references and no GymMaster reference. This proves availability and the served source markers only, not rendered acceptance.

**Live source-custody reconciliation, 2026-08-21 04:03 IST:** Core delivery state is unchanged: the isolated Empire Gym GymMaster renderer remains clean and unpublished at `658e67a`, the owner-dashboard worktree remains clean and unpublished at `de26b62`, the base renderer remains conflicted in `components/sections/About.tsx` with two additional modified files, and OpenBook GitHub `main` remains `c72bf48`. `https://www.empiregym.ie` returned HTTP `200`; its server-rendered HTML still contains Stripe and `Join now` references and no GymMaster reference, which proves the recorded July flow is still served but not rendered acceptance. The separate prospect-preview renderer branch advanced one documentation-only commit from recorded `d6df29c` to clean local `0d4e25c`, still with no upstream or remote containment. Its schema worktree remains at local `c45ebda` but is now dirty with 15 uncommitted lines that add the `prospect-preview-assets` bucket declaration; that declaration is not in the committed head, correcting the earlier blanket description of the committed migration. No test or build was rerun, and no push, migration, deployment, database or payment mutation, public preview, or outreach occurred.

**Live source reconciliation, 2026-08-15 00:09 IST:** the isolated Empire Gym renderer worktree at `/Users/samdonworth/GroundZero/worktrees/empire-gymmaster-20260814` is clean at local commit `658e67a` on branch `feat/empire-gymmaster-20260814`, with no upstream and no remote ref containing that commit. Direct source inspection verifies an Empire-only GymMaster signup and member-login integration, exact-tenant origin validation, and source changes intended to replace the legacy membership catalogue and Stripe join CTAs. Its targeted suite passed 36/36 tests. `npm run build` exited 0 and compiled/generated the app, but ESLint did not execute because the framework passed removed ESLint options, so lint remains unverified. This work is not deployed or live: Vercel still serves the 2026-07-30 production deployment `ob-client-site-template-acjw0e1w7`, and the live server-rendered HTML contains no GymMaster reference and still routes membership `Join now` actions to Stripe. The separate owner dashboard remains at `de26b62`, and the dirty base-renderer conflict remains unresolved. No push, deployment, database or payment mutation, or outreach occurred during this reconciliation.

On 2026-07-24, the isolated Empire Gym owner-dashboard branch passed its recorded tests and a production build. **Live repository check, 2026-08-13 12:01 IST:** the dashboard worktree remains clean at local commit `de26b62` with no upstream. The renderer source worktree still has an unresolved merge conflict in `components/sections/About.tsx` plus two modified files, so publish/handoff remains blocked. `https://www.empiregym.ie` returned HTTP 200, which proves availability only. The verified handoff, safety decisions and renderer blocker are in [[briefs/2026-07-24-empire-owner-dashboard-hardening]].

On 2026-07-24, a separate fact-safe prospect preview factory was implemented locally for the existing dedicated preview host. It has an isolated preview table/bucket migration, tokenised `noindex` route, guarded draft/publish scripts, and a manual Instagram-ready queue. No migration, Vercel environment mutation, deployment, production write or outreach has occurred. See [[briefs/2026-07-24-openbook-prospect-preview-factory]].

**Live GitHub correction, 2026-08-13 12:01 IST:** PR #214 is not a ready realtime-availability change. It was merged on 8 June 2026 and contains a two-file MCP booking-confirmation copy change. OpenBook `main` has since advanced to `c72bf48`. The stale item metadata is corrected in [[items/ob-realtime-availability]].

## Connected vault notes

- [[companies/openbook]] - parent company
- [[goals/ob-retention]] - reduce churn below 4%
- [[goals/ob-supply]] - reach 500 venues
- [[items/ob-no-show-deposits]] - primary commercial lever
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]] - consultancy quick-revenue strategy
- [[items/ob-venue-health-radar]] - churn prediction
- [[briefs/2026-07-24-openhouse-openbook-reset]] - current portal, billing and lead-generation reset
- [[items/ob-realtime-availability]] - booking feature
- [[launches/launch-2026-06-24-launch-openbook-no-show-reduction-wedge]] - launch brief

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/2026-06-28]]
- [[briefs/2026-07-24-empire-owner-dashboard-hardening]]
- [[briefs/2026-07-24-openbook-prospect-preview-factory]]
- [[briefs/2026-07-24-openhouse-openbook-reset]]
- [[briefs/2026-07-27-market-intel]]
- [[briefs/agentic-value-creation-revenue-cara-proof-plan-2026-07-14]]
- [[briefs/chatgpt-voice-founder-os-2026-07-31]]
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[briefs/daily-portfolio-brief-2026-07-19]]
- [[companies/openbook]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/openhouse-openbook-design-system]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[goals/ob-retention]]
- [[goals/ob-supply]]
- [[items/ob-cancellation-waitlist]]
- [[items/ob-client-self-edit-portal-billing]]
- [[items/ob-loyalty-points]]
- [[items/ob-no-show-deposit-proof-sprint]]
- [[items/ob-no-show-deposit-workflow]]
- [[items/ob-no-show-deposits]]
- [[items/ob-prepared-leadgen-loop]]
- [[items/ob-realtime-availability]]
- [[items/ob-venue-health-radar]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]

