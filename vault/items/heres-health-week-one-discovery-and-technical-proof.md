---
kind: item
id: heres-health-week-one-discovery-and-technical-proof
company_id: heres-health
title: Here’s Health Week 1 discovery and technical proof
state: building
status: active
priority: P0
effort: M
impact: 95
source: Sam-supplied project briefs, 2026-08-13 and 2026-08-29
created_at: "2026-08-13T00:00:00+01:00"
updated_at: "2026-09-27T20:10:00+01:00"
---

# Here’s Health Week 1 discovery and technical proof

## Hosted Square v30/v26 directly verified; launch remains NO-GO — 27 September 2026, 20:10 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and without review at unsigned `25c8ec4b…` / tree `4299cd40…`, 168 commits / 374 PR-reported changed files ahead; both checks remain failed and there is no exact-head app deployment.
- Direct read-only Supabase authority now verifies ACTIVE Square production v30 / sandbox v26, superseding the prior direct v29/v25 checkpoint. Shopify API v28, account deletion v12 and Shopify install v14 are unchanged; the hosted ledger remains at 17 migrations and all 13 listed public tables report RLS enabled.
- This closes only the hosted-version evidence gap. Exact source/host binding, actor/approval, Shopify `read_orders`, checkout/recovery, signed-device timing, store and client acceptance remain open. The source-authored Android/iOS/phone-install records were not independently accepted.
- Keep Week 1 `building`. No merge, app deployment, provider/database/payment mutation, client contact, store action or physical-device interaction occurred; launch remains **NO-GO**.

## Source advanced through store-build-2 records; launch remains NO-GO — 26 September 2026, 20:10 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and without review at unsigned `25c8ec4b…` / tree `4299cd40…`: 168 commits / 374 PR-reported changed files ahead of `main`, seven commits touching 27 files beyond `ad7ace90…`. Both current-head checks ran and failed; there is no exact-head app deployment.
- Exact-head `CURRENT-STATUS.md` remains **NO-GO** and source-claims an inactive Android internal-testing draft for `1.0.0 (2)`, a signed but not uploaded iOS `1.0.0 (2)`, Apple still attaching build `1.0.0 (1)`, and an updated standalone phone build installed/launched while physical timing remains unverified. This reconciliation did not access store consoles, interact with a device, rerun tests or independently accept those records.
- Exact-head source also claims Square production v30 / sandbox v26 and Shopify `read_orders` advanced, while production checkout remains disabled and end-to-end recovery unverified. Hosted Supabase was not re-read; retain the prior direct hosted checkpoint until a new direct readback supersedes it.
- Keep Week 1 `building`. No merge, app deployment, provider/database/payment mutation, client contact or store action occurred. Signed-device timing, in-store, app-store and client acceptance remain open.

## Source, hosted backend and release records advanced; launch remains NO-GO — 26 September 2026, 16:57 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and without review at unsigned `ad7ace90…` / tree `66ca0cf2…`: 161 commits / 364 PR-reported changed files ahead of `main`, and 34 commits / 64 files beyond `9ed05cc6…`. Both checks failed before runner start because the Actions budget prevented use, and there is no exact-head app deployment.
- Exact-head `CURRENT-STATUS.md` remains **NO-GO**. Its leading release record now claims Apple received, processed and attached build `1.0.0 (1)`, with encryption declaration outstanding and no review submission or release; later source records also claim reviewer/physical-device checks. This reconciliation did not access App Store Connect, install or exercise a physical build, submit/release an app, rerun tests or independently accept those source-authored claims.
- Direct read-only Supabase metadata reports 17 migrations and 13 RLS-enabled listed public tables. ACTIVE functions are Square production v29, Square sandbox v25, Shopify API v28, account deletion v12 and Shopify install v14. The exact source tree also has 17 migration files, but sauna redemption remains source-only and deletion-retention scheduling hosted-only, with additional version-identifier differences; exact byte binding, actor and approval remain open.
- Keep Week 1 `building`. The separate public sample-data preview remains byte-unchanged and unbound to the PR; no merge, app deployment, provider/database/payment mutation, client contact or app-store action was performed by this reconciliation. Signed-device, in-store, app-store and client acceptance remain open.

## Source and hosted Square functions advanced; launch remains NO-GO — 26 September 2026, 12:09 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft, mergeable / `UNSTABLE` and without review at unsigned `9ed05cc6…` / tree `097272c9…`: 127 commits and 325 PR-reported changed files ahead of `main`, and four commits / 58 files beyond `b5887087…`. Both checks were blocked before runner start by the Actions budget and GitHub reports no deployment for the head.
- Exact-head `CURRENT-STATUS.md` remains **NO-GO**. It records source-authored checks and a successfully exported/verified signed standalone rehearsal IPA, but explicitly says neither physical installation is verified. This reconciliation did not rerun tests, install the IPA, exercise a physical device, provider transaction, accessibility path, store submission or client acceptance.
- Direct read-only Supabase metadata reports 14 migrations and 13 RLS-enabled listed public tables. ACTIVE functions are Square production v22, Square sandbox v18, Shopify API v20, account deletion v4 and Shopify install v6. The new sauna-redemption migration is present in source but absent from the hosted ledger and remains inactive.
- Keep Week 1 `building`. The separate public sample-data preview remains byte-unchanged and unbound to the PR; no merge, app deployment, provider/database/payment mutation, app-store action or client contact occurred.

## Source and read-only Shopify function advanced; launch remains NO-GO — 25 September 2026, 20:12 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft, mergeable / `CLEAN` and without review at unsigned `b5887087…` / tree `943ef4bd…`: 123 commits ahead of `main` and three commits / 77 files beyond the 16:07 `1c377c89…` checkpoint. GitHub's full compare hit its 300-file cap, so no exact total changed-file count is asserted. The new tranche refines signed-in account activity, route/journey states, product presentation, direct product lookup, basket/list continuity and matching regression/audit material.
- Both current-head checks pass. Exact-head `CURRENT-STATUS.md` still labels public launch **NO-GO** and records source-authored test, database, JS-export and iOS Simulator evidence. This reconciliation verified the record and source lineage only; it did not independently rerun those commands or exercise a signed build, physical device, provider transaction, accessibility path, store submission or client acceptance.
- Direct read-only Supabase metadata remains at 14 migrations and 13 RLS-enabled listed public tables. Square v21/v17, account deletion v4 and Shopify install v6 are unchanged; `shopify-api` advanced from v19 to v20. The branch record says the v20 bundle matches its source, but exact deployed-byte equivalence was not independently established here.
- **Reconciliation-side-effect record:** at 20:10:16 IST, a malformed intended read command created GitHub deployment record `6668217402` for exact head `b5887087…` with environment `production`. The record has `production_environment: false`, no deployment statuses and no matching Vercel deployment; it is metadata, not a deployed app. No rollback was attempted. Keep Week 1 `building`; no merge, app build/deployment, provider/database/payment mutation, app-store action or client contact occurred.

## Source, CI and hosted-backend checkpoint — 25 September 2026, 16:07 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open and draft, now mergeable / `CLEAN` at unsigned `1c377c89…` / tree `13c624c8…`, 120 commits / 258 files ahead of `main` and ten commits / 93 files beyond the 12:18 `cb3d9b9d…` checkpoint. Corresponding Shopify-install, nonce, deletion-protection and operational-health source paths now exist, correcting the prior source-absence statement.
- Both current-head checks completed successfully, superseding the prior Actions-budget blocker for this head only. There is still no review or head deployment, and exact-head `CURRENT-STATUS.md` still labels public launch **NO-GO**. Do not treat workflow success or source-authored test/device claims as provider, signed-device, store or client acceptance.
- Read-only Supabase metadata now reports ACTIVE Square v21/v17, Shopify API v19, account deletion v4 and Shopify install v6, with 14 migrations through the operational-health snapshot and RLS enabled on all 13 listed public tables. Source filenames and hosted ledger versions differ, so exact byte equivalence, deployment actor and approval remain open.
- Keep Week 1 `building`. The separate preview remains byte-unchanged and unbound to the PR; no merge, deployment, provider/database/payment mutation, app-store action or client contact occurred. Signed physical-device, in-store, app-store and client acceptance remain open.

## Final hosted-function checkpoint; source boundary remains open — 25 September 2026, 12:18 IST

- GitHub source remained at unsigned `main` `a61ff082…` and draft PR #1 `cb3d9b9d…` / tree `17e1cefc…`, 110 commits / 195 files ahead, with budget-blocked checks, no review and no head deployment.
- Read-only Supabase metadata advanced again to ACTIVE `square-api` v20, `square-sandbox` v16, `shopify-api` v18, `account-deletion` v2 and `shopify-install` v4. Migrations remain unchanged at 12 entries through `20260925110306_shopify_install_nonces`; listed public tables report RLS enabled.
- Keep Week 1 `building`: the complete PR tree still has no Shopify-install function or nonce migration, so exact source binding, actor and approval remain open. Hosted progress is not signed-device, in-store, app-store or client acceptance. No provider/database/payment mutation or client contact was performed by this reconciliation.

## Current source/provider boundary; launch remains NO-GO — 25 September 2026, 12:09 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft, mergeable / `unstable` at unsigned `cb3d9b9d…` / tree `17e1cefc…`, now 110 commits / 195 files ahead of `main` and eight commits / 55 files beyond `3cd36e4f…`. The exact source tranche adds release/account recovery, Square food metadata, provider-readiness and merchant-review work. Its current status record says launch is NO-GO and claims broad test/live-check results; this run did not independently rerun them. Both hosted checks were prevented from starting by the Actions budget, with no review or head deployment.
- Read-only Supabase metadata now shows active `square-api` v19, `square-sandbox` v15, `shopify-api` v17, `account-deletion` v1 and new `shopify-install` v1. New migration ledger entries are `20260925090131_account_deletion_deadline` and `20260925110306_shopify_install_nonces`; the new `shopify_install_nonces` public table reports RLS enabled.
- Keep Week 1 `building`: the current complete GitHub tree contains neither `shopify-install` nor a `shopify_install_nonces` migration, and the source deadline migration uses `20260925085927` rather than hosted `20260925090131`. Exact equivalence, source/deployment binding, actor and approval remain open. The hosted rollout is operational progress, not signed-device, in-store, app-store or client acceptance.
- Public-preview and local-worktree custody remain unchanged and unaccepted for release. No merge, deployment, provider/database/payment mutation, app-store action or client contact was performed by this reconciliation.

## Hosted backend rollout and current source boundary — 25 September 2026, 00:29 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and mergeable / `unstable` at unsigned head `3cd36e4f…` / tree `3caa4ab0…`, 102 commits / 157 files ahead of `main` and 13 commits / 40 files beyond `6b3a1fd3…`. The new source covers café cancellation/payment recovery, connected onboarding/release preparation, local Supabase/store-preflight tooling and audit records. It has no review, status context or head deployment; both checks again failed before runner start because the Actions budget prevented use.
- Local worktree custody is not release progress. The usual-moment checkout remains at `49f19d44…` with eight untracked evidence videos. The no-upstream visual-quality checkout is now at `12a7bd57…` / tree `62a80f12…` with 56 status entries and one modified tracked file (`README.md`), superseding its older `586546fa…` base description without creating an accepted candidate.
- Read-only Supabase metadata now shows the five previously absent migrations applied and `account-deletion` v1 active alongside `square-api` v18, `square-sandbox` v14 and `shopify-api` v16. All 11 listed public tables report RLS enabled. This supersedes the earlier hosted-absence checkpoint. All four functions report platform `verify_jwt: false`; this run did not exercise application-level authorization, deletion execution, payments, orders or exact source-to-deployment provenance, and did not establish who approved or performed the rollout.
- Three public-preview reads remained byte-identical at HTTP `200`, 260,281 bytes / SHA-256 `e744f48d…`, still unbound to the PR. Keep Week 1 `building`: hosted rollout is operational progress, not signed-device, in-store, app-store or client acceptance. No merge, deployment, provider/database/payment mutation, app-store action or client contact was performed by this reconciliation.

## Simulator audit source custody and acceptance boundary — 24 September 2026, 20:19 IST

- Draft PR #1 advanced one unsigned audit-only commit to `6b3a1fd3…` / tree `ddd7dd39…`, now 89 commits / 141 files ahead of unchanged unsigned `main` and nine commits / 11 files beyond `ded55d56…`.
- The exact committed audit records an iOS 26.5 Simulator build at source `85febb8`; live catalogue reads; Square sandbox quote, interrupted recovery, decline, success and history; read-only Shopify/Acuity flows; and six GET-only Acuity link checks. It explicitly leaves Shopify checkout, deletion submission, cancellation-after-cancel, refunds, 3DS, accessibility, Android and every physical-device path untested, and says hosted Supabase did not include branch server changes.
- This run verified source custody only; it did not independently reproduce a build, simulator render, payment, booking, provider or user journey. The historical manage-mode prompt finding precedes the `7ad9467f…` code fix. Both current checks again failed before runner start because the Actions budget is blocked; no review, head deployment, hosted rollout, signed-device, in-store, app-store or client acceptance exists. Keep Week 1 `building`.

## Bookings-page close correction and final hosted-state readback — 24 September 2026, 20:14 IST

- Canonical `main` remains unsigned `a61ff082…`. Draft PR #1 advanced one verified-signature commit to `7ad9467f…` / tree `fc50bf7d…`, now 88 commits / 141 files ahead of `main` and eight commits / 11 files beyond `ded55d56…`. The exact two-file diff makes the Acuity bookings-management page close directly without a false leave-booking prompt, retains the warning for booking-in-progress mode and adds two component tests.
- This run verified committed source only. It did not rerun the tests or exercise a simulator, signed build, physical device, booking or provider account. Both checks again failed before runner start because the Actions budget is blocked; there is no review, status context or head deployment.
- Hosted Supabase and public preview evidence remain unchanged from 20:07. Keep Week 1 `building`; no merge, hosted rollout, provider/database/payment mutation, signed-device, in-store, app-store or client acceptance occurred.

## Third review-remediation tranche and hosted-state checkpoint — 24 September 2026, 20:07 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and mergeable at verified-signature head `85febb86…` / tree `c290c854…`, 87 commits / 141 files ahead of `main` and seven commits / nine files beyond `ded55d56…`. It is not merged and has no GitHub review, status context or head deployment.
- The new tranche records three review/fix cycles for Shopify replaced-checkout confirmation, identity/basket recovery, open-time rechecking and native-payment component lifetime, plus Square cancellation retry custody. Its committed audit claims the review regressions now pass and `pnpm check` completed across contract, API, mobile, portal and database suites. This run verified exact committed diff and audit records only; it did not rerun them or infer native checkout, signed-build, device, payment, till, booking or provider acceptance.
- Both hosted checks remain red solely because the Actions budget prevented runner start. Read-only Supabase metadata remains at five applied migrations through `20260923182949_shopify_checkout_storage`, active `square-api`, `square-sandbox` and `shopify-api`, and no five newer migrations or `account-deletion`. No application rows were read.
- Keep Week 1 `building`. The separate public preview is byte-unchanged and unbound to the PR; checkout writes and Square production ordering remain disabled. Hosted deployment, deletion owner/alerting and completion operations, merchant decisions/secrets, controlled real order/refund and till/KDS proof, signed physical-device acceptance, privacy/app-store declarations, submission and client acceptance remain open.

## Expanded remediation branch and hosted-state checkpoint — 24 September 2026, 16:12 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 is open, draft and mergeable at GitHub-verified head `ded55d56…` / tree `a6c477bc…`, 80 commits / 140 files ahead of `main` and 72 commits / 115 files beyond the prior checkpoint. It is not merged and has no review or head deployment.
- The source now records fixes and regressions for Shopify confirmation/recovery, Square collection/payment recovery, rejected sessions, per-account baskets, account deletion/erasure, Acuity navigation, abuse bounds and release config. Its own fresh-checkout receipt claims formatting/lint/typecheck/build, 668 tests plus one skipped live test, 10 migrations / 11 PGlite scenarios, mobile exports and zero production advisories. This run did not rerun those commands or infer simulator, device, payment, till, booking or provider acceptance from them.
- Both hosted checks are red because the Actions budget prevented runner start; they contain no workflow steps or logs. Read-only Supabase metadata shows the active hosted project still has only the five migrations through `20260923182949_shopify_checkout_storage` and active `square-api`, `square-sandbox` and `shopify-api`; the five newer migrations and `account-deletion` remain undeployed. No application rows were read.
- Keep Week 1 `building`. Checkout writes and Square production ordering remain disabled; hosted deployment, deletion owner/alerting and completion operations, merchant decisions/secrets, controlled real order/refund and till/KDS proof, signed physical-device acceptance, privacy/app-store declarations, submission and client acceptance remain open.

## Draft integration PR checkpoint — 24 September 2026, 00:14 IST

- Canonical GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 is open, mergeable / `CLEAN` and eight commits / 46 files ahead at unsigned `ed454ea4948aff878eedbad6164a8b5db5e754d9` / tree `5abab22686d009001a086e98d1b173a651c263b8`; it is not merged.
- The exact diff covers Shopify catalogue/detail/basket and recovery paths, a Supabase Edge Function and migration, tests, audit records and guarded mobile-release metadata. Its committed records claim live merchant/backend work, simulator proof, passing source checks and an unsigned simulator Release build; this reconciliation verified the records' presence only and did not independently rerun or inspect those provider, test, build or simulator actions.
- GitHub shows no check runs, commit-status contexts or deployments for the head. The public preview renders a separate sample-data screen and is not bound to the PR. Keep Week 1 `building`: signed device binaries, real checkout/order/webhook reconciliation, staff/hardware fulfilment, account deletion, policy/store declarations, owned app accounts, physical-device acceptance, submission and client acceptance remain open.

## Remote-source checkpoint — 19 September 2026, 20:14 IST

- Canonical GitHub `main` fast-forwarded linearly by three unsigned commits to `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`; the 47-file range adds Shopify Storefront, durable checkout/order storage, signed webhooks, deterministic tests and migration `20260919131500_shopify_checkout_storage.sql`. The tree now has 415 tracked blobs.
- The fast-forward remains on the separately authored remote lineage; prior local exact-artifact acceptance does not transfer. Source-authored `CURRENT-STATUS.md` claims 494 passing tests, while the committed verification summary totals 481, names `26696615…` as its base and records one skipped Shopify live test. This reconciliation verified the records and contradiction only; it did not rerun tests/builds or inspect provider accounts.
- The named usual-moment worktree is no longer at recorded rejected commit `a56fe568…`; it currently points to older accepted browser source `49f19d44…`, with no tracked changes and eight untracked evidence videos. Preserve this as custody drift, not restored acceptance of the remote or a release transition.
- Week 1 remains `building`. The public preview is still separate and byte-unchanged at HTTP `200`, 260,281 bytes and SHA-256 `e744f48d…`. Independent exact-remote review, provider/merchant acceptance, staff/hardware mapping, release mode, physical-device proof, app-store readiness and client acceptance remain open.

## Remote-source checkpoint — 19 September 2026, 12:19 IST

- Canonical GitHub now exposes unprotected `main` at `2669661562e45744afeb6fa0f0aad2992a4d3eb1` / tree `ee077bbc17687a46bf332b0789d3cdafdcc827ab` and two additional branches, superseding the prior current-state claim that no writable branch existed.
- The ten-commit remote lineage has no merge base with clean local canonical `9b842db0…` or clean independently accepted checkpoint `747bbacc…`. Its 401-file tree differs from `747bbacc…` across 311 files; no prior acceptance transfers to it.
- Committed remote records claim 464 passing tests, Square-sandbox observations across three cafés, read-only Acuity link checks and successful iOS/Android JavaScript exports, while also recording 81 mobile lint errors, five warnings, a non-clean format check and no native-device acceptance. This reconciliation verified the records' presence only; it did not re-execute tests/builds or inspect provider accounts.
- Week 1 remains `building`. Vercel still serves separate unbound deployment `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx` with unchanged root bytes and no Git metadata. Independent exact-remote review, provider-account proof, Shopify acceptance, staff/hardware mapping, release mode, physical-device proof, app-store readiness and client acceptance remain open.

## Directed-film checkpoint — 7 September 2026, 04:04 IST

- The first replacement `b084e971…` failed independent art-direction review because its key interactions and Home entrance were stills rather than continuous temporal footage. The capture root was repaired and Vera accepted temporal proof `75a852a4…` before final assembly.
- Exact final film `4dd37679ab3c9c9038efca71273078734fd96834fb165b8d5365d6ff650c4ec6` is independently `ACCEPT WITH CONDITIONS`: genuine native motion and causal controls are preserved, the bounded directed narrative/readability and BT.709 browser format passed with conditions, and the source package is durably accepted. Direct readback matched `6,823,867` bytes, 34.000 seconds, silent `1080×1920` H.264 at 60 fps.
- The live board records Sam-only Telegram presentation as `message_id 28974`, which is upload metadata rather than observed phone playback or client delivery. Physical iPhone, platform/unfurl rendering, Sam taste approval and any Conor send remain open.
- Week 1 therefore stays `building`: the preview remains HTTP `200` on accepted root `4e727d0f…`, while Square/Shopify/Acuity account and transaction proof, staff hardware/fulfilment, app-account ownership, legal/commercial gates, release mode, physical-device acceptance and client approval remain open. No app, deployment, commerce or production state changed.

## Published corrected preview checkpoint — 7 September 2026, 00:02 IST

- Exact local candidate `49f19d44f199ae8598cb2e724f84327dc65557eb` / tree `bd9082cb945a3338326225b21bc119767dbe4d17` / bundle SHA-256 `50004ccaffc88c99b6bd49030f6f7ceccf5fe1b1bd6d5227c78c942fc51f10f5` is independently accepted with conditions. Vera reproduced the repaired motion bind in Chromium and WebKit, toast-free share art, readable detail layout, truthful café/Shop mutation feedback, browser-local usual persistence, 159 resolved image slots and regression tests that fail on rejected `a56fe56…`.
- The accepted 76-file runtime is live on isolated preview deployment `dpl_GeDQdf2EPTTeDNccui5uggNn7R5F`. Independent hosted review matched 76/76 anonymous files and exercised Chromium/WebKit mobile geometry and journeys. Direct 00:02 readback returned HTTP `200`, accepted root SHA-256 `4e727d0f8e7ba27644551c3858835fbcfb5f8152c823d1f111266fdc1b85aeed`, and Vercel reported the deployment `READY`; the protected original project remained unchanged in the receipts.
- The current 33.9-second MP4 `69345e5c…` is verified as truthful but is not accepted as the directed launch film and is not ready for Conor. Follow-on film task `t_d3f63524` was still running with no completed or independently reviewed replacement at this checkpoint.
- Week 1 stays `building`: physical-iPhone and real-unfurl checks, Square/Shopify/Acuity account and transaction proof, staff hardware/fulfilment, app-account ownership, legal/commercial gates, release mode and client approval remain open. No client message was sent.

## Evening pre-sales proof checkpoint — 6 September 2026, 20:29 IST

- Exact reviewed imagery baseline `12a7bd57c036a52ecc21eb4860d6990afb4bbf65` is now the public preview: fresh anonymous HTTP readback matched the live root to its `app/index.html` SHA-256 `eeca71df1d105ccf048e7a59d1a0cb48dc7115eb4ecccfb60a6c695e02909f01`, and retained publication evidence covers 73 hosted images. The earlier 91-unresolved-slot blocker below is superseded.
- Bottom-navigation fix `14f1162bb827120b0e9ccfccc3ef0355e1274b23` is independently accepted with conditions on local Chromium/WebKit geometry, not on Sam's physical Telegram/iPhone surface and not on the hosted preview.
- Clean local candidate `a56fe568772753270cbb42060cffedecb83e41b0` combines that nav fix with the approved browser-local personal usual, motion code and branded share metadata; its exact bundle SHA-256 is `e484fc8b2b9ec012eb8d9d999b18663b0dc5defff819030656bbd24939715173`. Vera task `t_76caa3a8` reproduced the usual journey, café “Added ✓”, 159 imagery slots and 80 nav-flush checks, but issued `REJECT` because motion never binds, the share image contains a transient toast, detail copy is clipped/overpainted and Shop “Added ✓” was not visually reproduced. Rework `t_1446610d` is running with no repaired commit yet. Publication, signed-out hosted version/unfurl checks, short walkthrough and same-browser physical-phone close-out remain gated.
- This advances bounded pre-sales craft only. Square, Shopify, Acuity, staff workflow, account ownership, app-store, release-mode, legal/commercial and live-transaction decisions remain open; no client message was sent.

## Pre-sales browser-preview checkpoint — 6 September 2026

- Sam clarified that Here’s Health is not yet fully committed. The current browser work is bounded pre-sales proof, while production scope, integrations, accounts and commercial acceptance remain inside this Week 1 gate.
- Exact reviewed source `586546fac563de588507210dcedc6d1b77b1a9d2` / tree `83a005958df60a47ac135e524612e586147c9912` was published only after Sam approved those bytes. Live Vercel readback confirms the separate preview remains Ready and the existing production presentation remains separate. The release receipt binds 51 hosted files and anonymous Chromium/WebKit smoke, not physical-phone craft or production integration.
- Sam’s physical-phone screenshot then superseded the earlier functional acceptance by exposing uneven Shop card alignment and blank image tiles. The current local refinement has no candidate commit and no replacement publication. Its source manifest `c2fed85e1ffbeadffad6d23fdd2c518d36ef8ea19699299228cce7be2d20cc28` passed `39/39` source regressions and a partial two-engine premium slice, but correctly fails overall because 91 image slots across 31 entities remain unresolved; no final independent review ran.
- The next decision is whether inaccurate sample catalogue identities may be corrected to verified merchant products and clearly labelled illustrative café photography may fill otherwise unavailable slots, or whether exact client-provided assets are required. This does not close Square, Shopify, Acuity, staff workflow, account ownership, legal/commercial, release-mode, physical-device or live transaction gates.

## Accepted source handoff checkpoint — 5 September 2026

- The accepted local `747bbacccd663384c940e0d25c1d37d262f57840` source is now frozen in independently verified artifact `heres-health-app-source-747bbac.zip`: `2,409,097` bytes / SHA-256 `86b0cd87846704b1820af02a22e18d1fbe71e965926eec0e82a43c247dc0e170`, with all `160/160` tracked files matching the accepted Git tree.
- This does not advance Week 1 technical or commercial acceptance. The ZIP remains local and unuploaded; handing it to Astra requires Sam approval. Provider-account, transaction, staff-hardware, app-account, release-mode, physical-device and production gates remain open.

## Verified checkpoint — 31 August 2026

- The Week 1 evidence-mapping receipt was independently accepted with conditions against delivery base `9267fe0c77c07a9a88f9697de0a6f4b94af8b200`.
- A bounded local sauna Session Pass checkpoint at `747bbacccd663384c940e0d25c1d37d262f57840` was independently accepted with conditions. It truthfully derives date, time, guest count and peak/off-peak pricing, retains Acuity as the only live sauna boundary, and preserves the Square/Shopify separation and owner/customer privacy boundary.
- Independent checks passed format, lint, typecheck, build, production audit and `101/101` tests; current-source iOS Simulator evidence covered Home and Session Pass rendering plus a Home/Café/Shop/Sauna/Account regression sweep. This is simulator evidence, not physical-device or release acceptance.
- The item remains building. Square and Shopify account proofs, staff fulfilment and hardware mapping, app-account ownership, legal/commercial gates, a single-run first-run transition, release-mode proof, physical-device proof and live booking/payment proof remain open.
- The checkpoint is local only. No push, merge, deployment, provider contact or production mutation occurred, and the canonical remote still exposes no refs or writable branch.

## Problem

The owner has now accepted the whole-brand app direction in principle and requested no material redesign, according to Sam’s 29 August meeting record. The delivery risk has therefore shifted from proposal acceptance to technical and operational proof: the real Square account, hardware, fulfilment path, Shopify configuration, sauna-booking route, app-account readiness and operating policies still need inspection. Building past those unknowns risks a polished app that cannot be operated safely by staff or released against the new café deadline.

## Plan

### 1. Intake and access

- Inspect Conor’s supplied Shopify, Square and Acuity access with Sam authenticating directly in each account surface.
- Record account roles, merchants/locations, environments and least-privilege requirements without storing credentials in Ground Zero, chat, source control or the app.
- Confirm the legal entity, app ownership, account ownership and acceptance owners.

### 2. Square proof

- Map merchant and location structure.
- Inventory hardware, kitchen printers, KDS or Order Manager use.
- Inspect catalogue, categories, modifiers, availability and loyalty.
- Exercise one representative Sandbox flow: catalogue to configured item, collection time, payment/order creation, staff receipt, status transition, cancellation/refund handling.
- Confirm webhook verification, idempotency and missed-event reconciliation approach.

### 3. Café operations proof

- Map opening hours, cut-offs, preparation rules, collection-slot capacity, time-based menus, sold-out handling and location differences.
- Confirm allergen and dietary data ownership and disclaimers.
- Define how staff accept, prepare, complete and recover failed online orders.

### 4. Shopify proof

- Inspect plan, storefront access, product/collection structure, customer accounts, stock, discounts, fulfilment and checkout.
- Exercise catalogue, search, basket and Checkout Kit against an agreed safe environment.
- Confirm what order history and customer identity can be exposed safely in the app.

### 5. Product and commercial lock

- Freeze the accepted product direction while separating launch-critical, launch-optional and post-launch scope.
- Define price, change control, ongoing support, third-party cost ownership and acceptance responsibilities.
- Re-estimate the release plan from evidence and protect the café-opening cut line.

### Parallel Donworth AI-discovery experiment (non-launch-critical)

Once the Phase One scope is explicitly accepted, secure access is available and Here’s Health has consented to the exercise, use Here’s Health as the first bounded Donworth Studio test of Searchable-style AI discovery measurement.

- Keep the experiment separate from the Square, Shopify and app-release critical path.
- Begin with public URLs, public brand information and an agreed buyer-prompt baseline.
- Before any non-public client data is uploaded, obtain an agency-authorised agreement, DPA, model-training opt-out and marketing-reference opt-out.
- Measure mentions, citations, competitors and referral evidence; verify important findings manually.
- Implement only separately approved website, structured-data or source-corroboration changes, then remeasure.
- Do not promise ranking, recommendation or distribution by any AI platform.

## Done when

- Square and Shopify proof receipts are recorded.
- The staff fulfilment path is demonstrated, not assumed.
- Apple and Google organisation account status is known.
- Legal, privacy, consent, allergen, support and refund owners are named.
- A signed or explicitly accepted Phase One scope exists.
- The six-week production-candidate plan has a dependency-aware critical path and a protected cut line.
- Week 2 can begin with three visual directions against a stable, evidence-backed customer journey.

## Risk controls

- Do not combine Square and Shopify baskets or transactions in version one.
- Do not allow rewards unification or AI scope to delay launch.
- Do not promise App Store public availability by the six-week build date.
- Do not hold production credentials in the mobile app or vault.
- Do not treat “Square says it is possible” as an integration proof.
- Do not begin full visual build before the operational order path is proven.

## Connected vault notes

- [[imports/heres-health-project-master-brief-2026-08-29]] — Sam-supplied post-meeting master brief
- [[imports/heres-health-meeting-record-addendum-2026-08-29]] — Sam’s corrections on access, Acuity, decision-makers and app-store ownership
- [[companies/heres-health]] — client company
- [[project_state/heres-health-app]] — live project state
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — strategic brief
- [[imports/heres-health-app-project-brief-2026-08-13]] — supplied source
- [[people/conor-heres-health]] — primary client contact
- [[people/keith-crowley]] — referral source
- [[items/_Index]] — active item queue
- [[context/business-opportunities-moc]] — opportunity map

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-14-heres-health-food-waste-margin-baseline]]
- [[briefs/2026-08-15-heres-health-menu-allergen-evidence-workflow]]
- [[briefs/2026-08-16-heres-health-commerce-integrity-support-wedge]]
- [[briefs/2026-08-17-heres-health-customer-identity-linking-gate]]
- [[briefs/2026-08-18-heres-health-live-menu-and-pickup-promise-control]]
- [[briefs/2026-08-19-heres-health-ecommerce-accessibility-launch-gate]]
- [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]]
- [[briefs/2026-08-21-heres-health-shopify-replenishment-reminder-proof]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-23-heres-health-new-cafe-staffing-pressure-baseline]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[briefs/2026-08-28-heres-health-shopify-checkout-kit-architecture-gate]]
- [[briefs/2026-08-30-heres-health-acuity-sauna-booking-release-gate]]
- [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]]
- [[briefs/2026-09-05-heres-health-notification-state-and-consent-receipt-gate]]
- [[briefs/substack-draft-2026-08-23-someone-still-has-to-pay]]
- [[briefs/substack-draft-2026-08-30-a-client-said-proceed]]
- [[briefs/substack-draft-2026-09-06-proceed-was-too-strong]]
- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-westron-price-file-diff-proof]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-project-state-reconciler]]
- [[people/conor-heres-health]]
- [[people/keith-crowley]]
- [[project_state/heres-health-app]]

