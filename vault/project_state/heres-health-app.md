---
id: heres-health-app
company_id: heres-health
headline: Paying client, app in build. The 29 September iOS preflight audited `198edc8f…` plus local changes and found production Square and Shopify checkout disabled, signed build 2 stale against the café merge, and App Store/reviewer/device evidence incomplete. Local checks and iOS Simulator Release build pass; no deployment, new signed archive or submission occurred. Launch remains NO-GO.
valid: true
updated_at: "2026-09-29T13:13:00+01:00"
role: project-state
status: paid-engagement
---

# Here’s Health app project state

## iOS submission preflight remains NO-GO - 29 September 2026, 13:13 IST

- **Source and artifact:** Fresh clean clone of `sam-evolv/heres-health-app`, branch `codex/shopify-full-integration`, initial HEAD `198edc8f3f359de74a75a9a4690682f49d10ef0b`. Local, uncommitted fixes advanced only the iOS source build number from 2 to 3, removed misleading production café “test ordering” wording, regenerated a one-line Shopify Edge schema field needed for CI, and formatted two pre-existing release notes. Five preflight handoff files are in `/Users/samdonworth/Documents/New project/heres-health-ios-preflight-20260929/docs/release/`. No commit, push or Ground Zero sync occurred; other agents will not see these local changes until separately approved sync and readback.
- **Directly verified:** Production Square `/health` reports `live-read-only`, `checkoutEnabled:false`, three locations; Shopify `/health` reports `configured:true`, `checkoutEnabled:false` and recovery configuration ready. Supabase functions remain Square v30, Shopify v28, account deletion v12. The signed iOS 1.0.0 (2) IPA SHA-256 remains `16989bcd3039bd91c6322cb61b5b97c34e6693fd1ae96f9ed33aaf0c727cda97` and predates the café merge, so it is not the submission build. Xcode 26.6/iOS SDK 26.5 meets Apple's current toolchain floor. `pnpm check`, production workspace build and both Edge builds passed after local fixes. An isolated production-profile iOS Simulator Release build succeeded with source build number 3 and ten privacy manifests. Clean iPhone 17 simulator UI loaded guest onboarding, live Douglas café catalogue/price modifier and Shopify catalogue/basket; checkout was disabled. Unsigned simulator Keychain denied account reads (`-34018`), so account and café basket Add remained unverified rather than labelled production failures. The Mac locked before all UI routes could be completed.
- **Decision/gaps:** NO-GO for the promised commerce release. No live payment/order/booking was created. A new signed archive, physical-device account/checkout/deletion/accessibility tests, merchant food/till/refund acceptance, reviewer login, full privacy/export/age/rights declarations and authenticated App Store Connect readback are still required. Apple account login redirected to an authentication failure today. No backend deploy, flag change, Apple upload, review submission or release was done. Owner actions are ordered in `docs/release/ios-submit-tonight.md`; screenshots remain Sam's separate responsibility.
- **Next action:** Merchant and backend owners close the payment/food/provider gates, then build a fresh uniquely numbered signed archive from the frozen source, run the specified signed-device tests and complete private Apple console fields. Do not upload the old IPA. This is a local preflight receipt, not proof that the backend matches a source commit or that the app is deployed/archived/submitted.

## Merge and asset custody reverified; release remains blocked - 29 September 2026, 00:11 IST

- Private GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. PR #5 is merged into `codex/shopify-full-integration` as `198edc8f3f359de74a75a9a4690682f49d10ef0b` / tree `4e6b23b5070d93b60790fdbbdba769074a0ed32e`; broad draft PR #1 now points to that same head, 171 commits / 376 PR-reported files ahead of `main`, with zero reviews and two failed checks. Draft PR #4 remains open at `664b36fc…`, without checks or review.
- Seven local 1290 × 2796 build-2 screenshot JPEGs remain present. Archive `heres-health-apple-build2-screenshots.zip` is 2,503,914 bytes / SHA-256 `52de20a26989a9f9b307b005626544e09c2c145a8ab140f1af61fa42666b8ad0`; ZIP integrity passed. The assets remain local and have not been uploaded to App Store Connect.
- Direct Supabase remains at 17 migrations and 13 listed RLS-enabled public tables with ACTIVE Square v30/v26, Shopify API v28, account deletion v12 and Shopify install v14. The separate public preview remains byte-identical and unbound to the PR.
- Apple authentication/readback, build 2 upload/selection, export compliance, App Privacy, age rating, content rights, reviewer access, signed-device, provider-transaction, store and client acceptance remain open. No app deployment, provider/database/payment mutation, store submission, client contact or physical-device interaction occurred; launch remains **NO-GO**.

## Build 2 Apple screenshot assets captured locally - 28 September 2026, 20:45 IST

- User requested screenshots from the latest signed Apple build. An isolated iPhone 14 Pro Max / iOS 26.5 simulator was built from source commit `265653f`; its simulator-only app received the exact `main.jsbundle`, Expo app configuration and asset bytes extracted from signed IPA 1.0.0 (2). The JavaScript SHA-256 matched `02f98fd70aeb75b7cdf22939c42915664e77dab662de55660ad16ef5c0d8ff95`; the signed IPA remained unchanged at `16989bcd3039bd91c6322cb61b5b97c34e6693fd1ae96f9ed33aaf0c727cda97`.
- Seven direct app screenshots were saved as opaque 1290 x 2796 JPEGs in `/Users/samdonworth/Documents/Codex/2026-09-28/today-we-just-need-to-work/outputs/apple-screenshots-build2/`, with a README and checksum file. The archive is `/Users/samdonworth/Documents/Codex/2026-09-28/today-we-just-need-to-work/outputs/heres-health-apple-build2-screenshots.zip`; ZIP integrity passed. Screens cover Home, Douglas café, coffee menu, Flat White detail, Shopify catalogue/product and Sauna. Live café and shop products loaded and were visually inspected. No staged profile, synthetic product or app-store upload was used.
- The simulator guest Account screen reported a connection error and was excluded. This is an isolated simulator observation, not proof that the signed iPhone app fails; signed-device reviewer sign-in still needs a separate check. The screenshots have not been uploaded to App Store Connect. Build 2 upload/selection and export compliance, App Privacy, age rating, content rights and reviewer access remain open. Next action is owner review of the screenshot set, then upload to the 6.9-inch slot and verify Apple readback when authentication is available. No provider mutation, customer transaction, booking, app deployment or store submission occurred.

## Café fix merged; signed Apple build remains a separate upload candidate - 28 September 2026, 20:04 IST

- Live GitHub readback verified [PR #5](https://github.com/sam-evolv/heres-health-app/pull/5) merged at 19:04:12 UTC, merge commit `198edc8f3f359de74a75a9a4690682f49d10ef0b`, into `codex/shopify-full-integration`. `main` remains `a61ff0825f338b4d0fad531eab0675cfc4015af4`. The merge adds the approved café photography fallback and a PII-free Westron/roster discovery record; it does not change an existing signed binary. [PR #4](https://github.com/sam-evolv/heres-health-app/pull/4) remains open/draft and needs provider sandbox proof before merge. PR #1 remains the broad draft integration candidate. Both exact merged-head GitHub checks ran and failed on the pre-existing generated Shopify Edge bundle drift: the regenerated bundle adds one `pageSize` schema line. This is unrelated to the café fallback, but blocks a clean PR #1 merge until source and generated output are reconciled.
- The local signed Apple IPA `HeresHealth.ipa` for `ie.hereshealth.app` 1.0.0 (2) remains at `/Users/samdonworth/Library/Caches/HeresHealthSubmission-20260926/store-build2/ios/HeresHealth.ipa`; SHA-256 was re-read as `16989bcd3039bd91c6322cb61b5b97c34e6693fd1ae96f9ed33aaf0c727cda97`, matching the 26 September store-build audit. PR #5 and PR #4 are absent from that artifact. App Store Connect reached `authResult=FAILED` on 28 September, so current Apple server state was not verified; the last verified source record says build 1 attached and build 2 not uploaded. Build 2 is ready to upload, not yet ready to submit for review. Selection, genuine screenshots, export compliance, App Privacy, age rating, content rights and reviewer access remain open.
- Google Play Console was read live on 28 September in the meeting task: app Draft, setup 9/11, Data safety and Store Listing incomplete, phone screenshots missing; Android build 2 remains in an inactive internal-testing draft. The six user-supplied payroll photos are output reports, not the roster export or BrightPay import template. No personnel data was copied into app source.
- Next action: upload and select the exact signed Apple build 2, capture screenshots from the matching production app, resolve the remaining App Store declarations and reviewer account, then read back the version page before submission. Keep PR #4 undeployed and unmerged pending Square/Shopify/Acuity provider evidence and merchant approval. No app deployment, provider/payment mutation or App Store submission occurred in this task.

## Hosted Square v30/v26 directly verified; release acceptance remains open — 27 September 2026, 20:10 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open and draft without review at unsigned `25c8ec4b45e4c70824b9cd03c9c20806dd34cf8b` / tree `4299cd40895712bac078326ef5054de959234745`: 168 commits / 374 PR-reported changed files ahead of `main`; both checks remain failed and there is no exact-head app deployment.
- Direct read-only Supabase authority for exact project `eiyxwxyroeviufniabeo` now verifies ACTIVE `square-api` v30 and `square-sandbox` v26, superseding the prior direct v29/v25 checkpoint. `shopify-api` v28, `account-deletion` v12 and `shopify-install` v14 are unchanged. The hosted ledger remains at 17 migrations and all 13 listed public tables report RLS enabled.
- This closes only the direct hosted-version evidence gap. Exact source-to-host bytes, deployment actor/approval, privately provisioned Shopify `read_orders`, production checkout and end-to-end recovery remain unverified. The source-authored Android/iOS/phone-install records were not independently accepted; no store console or physical device was exercised.
- No merge, app deployment, provider/database/payment mutation, client contact, app-store action or physical-device interaction was performed. Paid terms are unchanged; launch remains **NO-GO**, and signed-device timing, in-store, app-store and client acceptance remain open.

## Draft source advanced through store-build-2 records; direct release acceptance remains open — 26 September 2026, 20:10 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open and draft without review at unsigned `25c8ec4b45e4c70824b9cd03c9c20806dd34cf8b` / tree `4299cd40895712bac078326ef5054de959234745`: 168 commits / 374 PR-reported changed files ahead of `main`, seven commits touching 27 files beyond `ad7ace90…`. The bounded range changes Expo auth loading, café cache/loading paths, store build numbers, Square source and release/audit records.
- Both current-head GitHub checks ran and failed at 19:43 IST; this supersedes the prior “budget-blocked before runner start” description for this head only. GitHub still exposes no review or exact-head app deployment. Exact-head `CURRENT-STATUS.md` remains **NO-GO** and source-claims Android `1.0.0 (2)` uploaded/saved in an inactive internal-testing draft, signed App Store IPA `1.0.0 (2)` ready but blocked from Transporter by the locked Mac, Apple still attaching build `1.0.0 (1)`, and an updated standalone iPhone build installed/launched while physical timing remains unverified.
- The same exact-head source claims Square production v30 / sandbox v26 and privately provisioned Shopify `read_orders`, while keeping production checkout disabled and end-to-end Shopify recovery unverified. These are immutable source records, not independent App Store Connect, Play Console, provider, physical-device or client acceptance. Hosted Supabase metadata was not re-read in this bounded pass; the last direct hosted checkpoint remains the 16:57 record and is not silently superseded by source claims.
- No merge, deployment, provider/database/payment mutation, client contact, app-store action or physical-device interaction was performed by this reconciliation. Paid terms remain unchanged; signed-device timing, in-store, app-store and client acceptance remain open.

## Draft source and hosted release preparation advanced sharply; direct release acceptance remains open — 26 September 2026, 16:57 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open and draft without review at unsigned `ad7ace9086e831bfa07fc6544ea9eb40f661f520` / tree `66ca0cf2b944813b46a5859bc7fca3ff5784bb10`: 161 commits / 364 PR-reported changed files ahead of `main`, and 34 commits / 64 files beyond the 12:09 `9ed05cc6…` checkpoint. The bounded source range adds deletion receipts/retention, Shopify staging safeguards and Auth isolation, store-submission material and source-authored provider, reviewer and physical-device audit records.
- Both current-head checks failed before runner start because the Actions budget prevented use. GitHub exposes no review or exact-head app deployment. The exact-head `CURRENT-STATUS.md` still says public launch and submission are **NO-GO**; its leading release record now claims Apple received, processed and attached build `1.0.0 (1)`, with export-encryption declaration still outstanding and no review submission or release. This reconciliation verified that source-authored record and lineage only: it did not access App Store Connect, install or exercise a physical device build, submit/release an app or independently accept the claimed upload/attachment.
- Direct read-only Supabase metadata now reports 17 migrations and 13 RLS-enabled listed public tables. ACTIVE functions remain Square production v29, Square sandbox v25, Shopify API v28, account deletion v12 and Shopify install v14. The PR tree also has 17 migration files, but the sets do not match: `20260926102213_sauna_redemption_core.sql` remains source-only, while hosted `20260926113647_deletion_retention_schedule` has no matching migration file in the exact head; multiple source and hosted version identifiers also differ. Exact byte binding, deployment actor and approval remain unverified.
- The separate public sample-data preview remains Ready `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx` and byte-unchanged at HTTP `200`, 260,281 bytes / SHA-256 `e744f48d…`; it is not bound to this PR. No merge, app deployment, provider/database/payment mutation, client contact or app-store action was performed by this reconciliation. Paid terms remain unchanged, and signed-device, in-store, app-store and client acceptance remain open.

## Draft source and hosted Square functions advanced; launch remains NO-GO — 26 September 2026, 12:09 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open, draft, mergeable / `UNSTABLE` and without review at unsigned `9ed05cc608dab7e21f35fc240d411549289ce1c7` / tree `097272c97543def9452fbad4f4a7fe2635cf8877`: 127 commits and 325 PR-reported changed files ahead of `main`, and four commits / 58 files beyond `b5887087…`. The new tranche hardens checkout and session recovery, records post-deployment Square sandbox/refund evidence, adds source for sauna redemption and records a standalone iPhone rehearsal artifact.
- Both current-head checks failed before runner start because an Actions budget prevented use. There is no GitHub deployment for the head. Exact-head `CURRENT-STATUS.md` still says public launch and submission are **NO-GO** and records source-authored checks plus a successfully exported/verified signed standalone rehearsal IPA; it explicitly says neither physical installation is verified. This reconciliation verified the record and source lineage only and did not rerun tests, install the IPA, exercise a physical device, provider transaction, accessibility path, store submission or client acceptance.
- Direct read-only Supabase metadata now reports 14 migrations and 13 RLS-enabled listed public tables. ACTIVE functions are Square production v22, Square sandbox v18, Shopify API v20, account deletion v4 and Shopify install v6. The branch adds `20260926102213_sauna_redemption_core.sql`, but the hosted ledger still ends at `20260925121137_operational_health_snapshot`; sauna redemption therefore remains source-only/inactive. Exact source-to-function byte binding and deployment actor/approval remain unverified.
- The separate public preview remains Ready `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx`, byte-unchanged at HTTP `200`, 260,281 bytes / SHA-256 `e744f48d…`, and rendered its sample-data home; it is not bound to this PR. No merge, app deployment, provider/database/payment mutation, app-store action or client contact occurred. Paid terms and signed-device, in-store, app-store and client acceptance remain unchanged.

## Draft source and read-only Shopify function advanced; launch remains NO-GO — 25 September 2026, 20:12 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open, draft, mergeable / `CLEAN` and without review at unsigned `b5887087876ecf32fb61232d7d1c7beb09daf800` / tree `943ef4bd0de35b49bb969cc0c934681d1b3317f2`: 123 commits ahead of `main` and three commits / 77 files beyond `1c377c89…`. GitHub's full compare hit its 300-file cap, so no exact total changed-file count is asserted. The new tranche refines signed-in account activity, whole-app journey states, product presentation/direct lookup and basket/list continuity with matching source-authored audits and regressions.
- Both current-head checks pass. Exact-head `CURRENT-STATUS.md` still says public launch **NO-GO** and records source-authored test, database, JS-export and iOS Simulator evidence. This reconciliation verified the record and source lineage only; no test/build was independently rerun and no signed build, physical device, provider transaction, accessibility path, store submission or client acceptance was exercised.
- Direct read-only Supabase metadata remains at 14 migrations and 13 RLS-enabled listed public tables. Square v21/v17, account deletion v4 and Shopify install v6 are unchanged; `shopify-api` advanced from v19 to v20. The source record says the deployed v20 bundle matches the branch, but exact byte equivalence was not independently established here.
- **Reconciliation-side-effect record:** at 20:10:16 IST, a malformed intended read command created GitHub deployment record `6668217402` for exact head `b5887087…` with environment `production`. It has `production_environment: false`, no statuses and no matching Vercel deployment, so it is metadata rather than an app deployment. No rollback was attempted. No merge, app build/deployment, provider/database/payment mutation, app-store action or client contact occurred; paid terms and all release-acceptance gates remain unchanged.

## Draft source, CI and hosted backend advanced; release acceptance remains open — 25 September 2026, 16:07 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) is still open and draft, now mergeable / `CLEAN` at unsigned head `1c377c893611efb5d56f468e29649dcabd3234eb` / tree `13c624c8fb500e73bbd8c7f7533618ca2ce680c0`: 120 commits / 258 changed files beyond `main`, and ten commits / 93 files beyond the 12:18 `cb3d9b9d…` checkpoint. The exact tranche adds the Shopify-install source and nonce migration, deletion sign-in / operational-health migrations, integration-test isolation and profile, shop and sauna refinements.
- Both current-head GitHub checks completed successfully at 16:02 IST, superseding the prior Actions-budget blocker for this head only. The PR still has no review and GitHub reports no deployment for `1c377c89…`; a green workflow is not independent exact-artifact, provider, device, store or client acceptance. The committed `CURRENT-STATUS.md` still labels public launch **NO-GO** and records physical-device, authentication, accessibility and provider gates; those are source-authored records, not independently reproduced acceptance.
- Direct read-only Supabase metadata for exact project `eiyxwxyroeviufniabeo` reports ACTIVE `square-api` v21, `square-sandbox` v17, `shopify-api` v19, `account-deletion` v4 and `shopify-install` v6. The ledger now has 14 entries through `20260925121137_operational_health_snapshot`; all 13 listed public tables report RLS enabled. Corresponding function and migration paths now exist in the PR tree, correcting the 12:18 source-absence statement, but source filenames and hosted ledger versions differ and exact byte equivalence, deployment actor and approval were not established.
- The separate public preview remains Ready `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx` and byte-unchanged at HTTP `200`, 260,281 bytes / SHA-256 `e744f48d…`, with no PR binding. This reconciliation made no merge, deployment, provider/database/payment mutation, app-store action or client contact. Signed physical-device, in-store, app-store and client acceptance remain open.

## Hosted functions advanced again during final verification; source boundary remains open — 25 September 2026, 12:18 IST

- GitHub source remained unchanged at unsigned `main` `a61ff082…` and open draft PR #1 head `cb3d9b9d…` / tree `17e1cefc…`, 110 commits / 195 files ahead. The two budget-blocked checks, lack of review and lack of head deployment are unchanged.
- Final read-only Supabase metadata shows another hosted function transition: `square-api` v20, `square-sandbox` v16, `shopify-api` v18, `account-deletion` v2 and `shopify-install` v4, all ACTIVE. The migration ledger remains at the 12 entries through `20260925110306_shopify_install_nonces`; the listed public tables, including `shopify_install_nonces`, report RLS enabled.
- The complete current PR tree still has no `shopify-install` function or nonce migration and retains the differing source deadline version. Exact source/deployment binding, actor and approval therefore remain open. This is hosted operational progress, not signed-device, in-store, app-store or client acceptance. This reconciliation performed no provider/database/payment mutation.

## Provider rollout and draft branch advanced again; public launch remains NO-GO — 25 September 2026, 12:09 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open, draft, mergeable and `unstable` at unsigned head `cb3d9b9d15a21f8c44cc01f1cc19c010efa4c2ad` / tree `17e1cefc7de58f5eb21fbdaab2c23c273e6f3a75`: 110 commits / 195 changed files beyond `main`, eight commits / 55 files beyond the prior `3cd36e4f…` checkpoint. The exact tranche adds release hardening, account recovery, Square food metadata, provider-readiness evidence, merchant review material, a retail-refund draft and source migration `20260925085927_account_deletion_deadline.sql`.
- `CURRENT-STATUS.md` at the head labels public launch **NO-GO** and claims 776 passing tests plus one opt-in skip, 11 database scenarios and six live checks. Those are source-authored records only; this reconciliation inspected the committed source but did not rerun those tests or live checks. Both GitHub checks failed before runner start with zero steps/logs because an Actions budget prevented use; there is still no review, accepted status or head deployment.
- Direct read-only Supabase metadata for exact project `eiyxwxyroeviufniabeo` now shows additional migrations `20260925090131_account_deletion_deadline` and `20260925110306_shopify_install_nonces`; active functions are `square-api` v19, `square-sandbox` v15, `shopify-api` v17, `account-deletion` v1 and new `shopify-install` v1. The newly listed `shopify_install_nonces` table reports RLS enabled, as do the other listed public tables.
- The current complete GitHub tree contains no `shopify-install` function and no `shopify_install_nonces` migration; its account-deletion deadline migration also uses a different version (`20260925085927`) from the hosted ledger (`20260925090131`). The exact SQL equivalence, source binding, deployment actor and approval were not established. Treat the hosted provider/backend advance as source-unbound operational progress, not release acceptance.
- The separate public preview remains Ready `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx` and byte-unchanged at HTTP `200`, 260,281 bytes / SHA-256 `e744f48d…`, with no PR binding. Local worktree custody is unchanged. No merge, deployment, provider/database/payment mutation, app-store action or client contact was performed by this reconciliation; signed physical-device, in-store, app-store and client acceptance remain open.

## Hosted backend advanced out of band; release acceptance remains open — 25 September 2026, 00:29 IST

- GitHub `main` remains unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open, draft and mergeable / `unstable` at unsigned head `3cd36e4fc6b716cda09c2eeac03e7e8365acc7df` / tree `3caa4ab0df1c1fda86e081fcc66da1c1a8bff5e9`: 102 commits / 157 changed files beyond `main`, and 13 commits / 40 files beyond the prior `6b3a1fd3…` checkpoint. The new source spans café cancellation/payment recovery, connected onboarding and release preparation, local-backend/store-preflight tooling and audit records. GitHub shows no review, status context or head deployment; both checks again failed before runner start solely because the Actions budget prevented use.
- Local source custody also differs from an older historical paragraph: `/Users/samdonworth/Code/worktrees/heres-health-usual-moment-20260906` remains at accepted preview commit `49f19d44…` with eight untracked evidence videos, while `/Users/samdonworth/Code/worktrees/heres-health-visual-quality-20260906` is now on no-upstream branch `forge/heres-health-visual-quality-20260906` at `12a7bd57…` / tree `62a80f12…`, with 56 status entries and `README.md` as its one modified tracked file. This supersedes the old claim that the latter checkout remained at `586546fa…`; the checkout drift and untracked evidence do not establish a new candidate or acceptance.
- Direct read-only Supabase metadata now shows all five previously absent migrations applied: `20260924191411_account_deletion_requests`, `20260924191412_square_account_erasure`, `20260924191413_shopify_order_reconciliation`, `20260924191414_shopify_confirmation_recovery` and `20260924191445_account_deletion_operations`. Active functions are now `square-api` v18, `square-sandbox` v14, `shopify-api` v16 and new `account-deletion` v1; the 11 listed public tables all report RLS enabled. This supersedes only the prior absence statement. All four functions report platform `verify_jwt: false`; application-level authorization, exact source-to-deployment binding, deployment actor/approval and deletion/payment/order behavior were not exercised or established by this reconciliation.
- Three anonymous reads of the separate public preview remained byte-identical at HTTP `200`, 260,281 bytes and SHA-256 `e744f48dbf53ed3c4f6671225708c5fb958a36c25a051876184b4c79ce118742`, still with no PR binding. The hosted rollout is operational progress, not signed-device, in-store, app-store or client acceptance. No merge, deployment, provider/database/payment mutation, app-store action or client contact was performed by this reconciliation.

## Simulator audit was recorded after the manage-page fix; it remains source evidence, not acceptance — 24 September 2026, 20:19 IST

- Draft PR #1 advanced one unsigned audit-only commit from `7ad9467f…` to `6b3a1fd30af4c6a980cfe77d0cbc4ee95dc99b6f` / tree `ddd7dd390830822aa1e89e1312529d72493a34f6`, now 89 commits / 141 files ahead of unchanged unsigned `main` and nine commits / 11 files beyond `ded55d56…`. The added audit records an iOS 26.5 Simulator build and source-`85febb8` observations covering live catalogue reads, Square sandbox quote/recovery/decline/success/history, Shopify read-only catalogue, Acuity read-only/manage flows and six GET-only link checks; it explicitly says Shopify checkout, deletion submission, refunds, 3DS, VoiceOver, Dynamic Type, Android and physical devices were not tested, and hosted Supabase still lacked branch server changes.
- This reconciliation verified the exact committed audit and GitHub lineage only; it did not reproduce the simulator, build, payment, booking, provider or rendered results. The audit’s manage-mode prompt observation is historical against `85febb8` and is followed by the `7ad9467f…` source fix recorded at 20:14. Both checks on current head again failed before runner start because the Actions budget is blocked; no review, status context or head deployment exists. No merge, deployment, provider/database/payment mutation, signed-device, in-store, app-store or client acceptance occurred.

## Bookings-page close correction reached the draft PR; release gates remain open — 24 September 2026, 20:14 IST

- GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 advanced one verified-signature commit to `7ad9467fcfd13a5cdc9af0160a63752c124504de` / tree `fc50bf7dc98fee8f5255357c6db22824a362fb4b`, now 88 commits / 141 files ahead of `main` and eight commits / 11 files beyond `ded55d56…`. The new two-file diff makes the Acuity bookings-management page close directly without a false “Leave booking?” prompt while retaining that warning for a booking in progress, and adds two matching component tests.
- This is exact source evidence, not an independently rerun test or rendered/mobile acceptance. The two checks again failed before runner start because the Actions budget remains blocked; the head has no review, status context or deployment. Hosted Supabase and public preview evidence remain as at 20:07. No merge, deployment, provider/database/payment mutation, signed-device, in-store, app-store or client acceptance occurred.

## Third review-remediation tranche reached the draft PR; hosted release gates remain open — 24 September 2026, 20:07 IST

- Direct GitHub readback keeps unprotected `main` at unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open, draft and mergeable at verified-signature head `85febb863f0f987867e561971583eaacd3f1f15a` / tree `c290c8549e42fa03c6679aed15db6d08d2d49751`: 87 commits / 141 changed files beyond `main`, seven commits and nine files beyond `ded55d56…`. It has no GitHub review, commit status context or head deployment; GitHub labels the merge state `unstable` because the two checks are red.
- The bounded seven-commit tranche records three successive review corrections across Shopify replaced-checkout confirmation, account/basket identity, checkout-open-time rechecking and native-payment component lifetime, plus fail-closed Square cancellation retention. The committed audit says its regression tests failed on the reviewed predecessors and now pass, and claims `pnpm check` with 33 contract, 222 API, 408 mobile plus one skipped, 27 portal tests and 11 database scenarios. This reconciliation verified exact committed source, diff and audit records only; it did not independently rerun tests or exercise a simulator, native checkout, signed build, device, till, payment, booking or provider account.
- Both GitHub check annotations still say the jobs never started because an Actions budget prevented further use, so their failure state is a hosted-CI availability blocker rather than a code-test result. Direct read-only Supabase metadata remains unchanged: exactly five applied migrations ending at `20260923182949_shopify_checkout_storage`, active `square-api`, `square-sandbox` and `shopify-api`, no five newer branch migrations and no `account-deletion`; the ten listed public tables remain RLS-enabled. No application rows were read.
- The separate public preview remains Ready `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx` and byte-unchanged at HTTP `200`, 260,281 bytes and SHA-256 `e744f48d…`, with no PR binding. Hosted migration/function rollout, merchant decisions/secrets, controlled real order/refund and staff/till evidence, signed physical-device acceptance, privacy/store declarations, submission and client acceptance remain open. No merge, deployment, provider mutation, app-store action or client contact occurred.

## Draft branch expanded and local remediation is source-recorded; hosted release gates remain open — 24 September 2026, 16:12 IST

- Direct GitHub readback keeps unprotected `main` at unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1) remains open, draft and mergeable at GitHub-verified head `ded55d56f1f2713c47a1cea104704bb3f6ebf2b0` / tree `a6c477bcb201a3bd33e38333ad4879ee4e70c8a6`: 80 commits / 140 changed files beyond `main`, and 72 commits / 115 files beyond the prior `ed454ea…` checkpoint. It is not merged, has no review and has no head deployment.
- The exact source range adds account-deletion intake/erasure workflow, Shopify missed-callback/Admin reconciliation, Square collection/payment recovery, per-account session/basket isolation, Acuity trusted navigation, release-config hardening, five migrations and extensive regression/audit material. Committed records claim a fresh-checkout local pass at `de54d9f` with formatting, lint, typecheck, build, `668` tests plus one skipped live test, 10 migrations / 11 PGlite scenarios, JS exports and zero production advisories. This reconciliation verified those records and exact source custody only; it did not independently rerun them or exercise a simulator, signed build, device, till, payment, booking or provider account.
- GitHub now exposes two failed checks, superseding the prior zero-check state, but both check annotations say the job never started because an Actions budget prevented further use; there are no runner steps or logs, so this is a hosted-CI availability blocker rather than a code-test result. Direct read-only Supabase authority identifies project `eiyxwxyroeviufniabeo` as `ACTIVE_HEALTHY`, with exactly five applied migrations ending at `20260923182949_shopify_checkout_storage` and active `square-api`, `square-sandbox` and `shopify-api` functions. The branch's five 24 September migrations are absent and `account-deletion` is not deployed; the ten listed public tables are RLS-enabled. No application rows were read.
- The public preview remains the separate source-unbound Ready deployment `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx`; root readback remains HTTP `200`, 260,281 bytes and SHA-256 `e744f48d…`, with no binding to PR #1. Checkout writes and Square production ordering remain disabled. Hosted migration/function rollout, named deletion operations, merchant secrets/decisions, real order/refund and till evidence, signed physical-device acceptance, privacy/store declarations, submission and client acceptance remain open. No merge, deployment, provider mutation, app-store action or client contact was performed by this reconciliation.

## Draft Shopify/release PR opened; main and acceptance gates remain unchanged — 24 September 2026, 00:14 IST

- Direct GitHub readback shows unprotected `main` unchanged at unsigned `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. Draft PR [#1](https://github.com/sam-evolv/heres-health-app/pull/1), `codex/shopify-full-integration`, is open and GitHub reports it mergeable / `CLEAN` at unsigned head `ed454ea4948aff878eedbad6164a8b5db5e754d9` / tree `5abab22686d009001a086e98d1b173a651c263b8`, eight commits and 46 changed files beyond `main`.
- The exact PR diff adds mobile Shopify catalogue/detail/basket paths, checkout-recovery storage, a Supabase `shopify-api` Edge Function and migration, tests, audit records, and guarded EAS/release metadata. Its committed audit files claim merchant-approved Shopify/Supabase setup, test webhook deliveries, a no-payment cart, a temporarily opened then reclosed checkout-write gate, simulator catalogue/basket proof, passing source checks and an unsigned iOS Simulator Release build. This reconciliation verified only that those source-authored records exist at the exact head; it did not independently inspect Shopify, Supabase, Square or Acuity, rerun tests/builds, or exercise a signed binary or device.
- GitHub exposes no PR check runs, no commit-status contexts and no deployment records for `ed454ea…`. The public preview still renders the separate “Preview · sample data” Aoife home screen, but no source/deployment receipt binds that surface to PR #1. Account deletion, policy/build consistency, owned app IDs/signing, production checkout and fulfilment, staff acceptance, physical iPhone/Android proof, store submission and client acceptance remain open. No merge, deployment, provider mutation, app-store action or client contact was performed by this reconciliation.

## App-specific privacy notice is live; release declaration gates remain open — 23 September 2026, 20:17 IST

- Donworth's private marketing-site repository advanced to `11491d01bfa738a9cd39068d3e221e8cb21ac0ba` / tree `ad1f64749ac7bfe66189ad7835cf86051d460d6d`, adding `site/privacy.html`, `/privacy` routing and sitewide privacy links. GitHub records a successful exact-ref Production deployment, and Vercel resolves `www.donworthstudio.ie` to Ready deployment `dpl_FirzuiXX6Wj1x1HBdzADpMwa4nsG`.
- Direct readback of `https://www.donworthstudio.ie/privacy` returned HTTP `200`, 14,299 bytes and SHA-256 `188f3836…`; Chromium rendered “🐴 Here’s Health App Privacy Policy | Donworth Studio”, heading “Privacy policy.” and a notice dated 23 September 2026. The page names Tynestyle Trading Ltd trading as Here’s Health as operator, Donworth Studio as developer/Google Play developer-account name, and links to the existing website policy.
- These are published page assertions, not independent legal or client acceptance. This run did not reconcile the notice with the exact app build, SDK/network inventory, Apple App Privacy or Google Play Data safety answers, account-deletion implementation, retention decisions or controller/processor allocation. The apex version of `/privacy` still returns Vercel `404`; app-store ownership and the intended public deletion-request URL remain open.
- App source custody did not otherwise advance: private `sam-evolv/heres-health-app` `main` remains unsigned `a61ff082…`, the prior source-authored test-count contradiction remains, and no app test/build rerun, independent exact-artifact review, deployment binding, rendered app journey, physical-device proof, store action or client contact occurred.

## Remote source advanced; evidence conflict and release gates remain open — 19 September 2026, 20:14 IST

- Direct GitHub readback places unprotected `main` at unsigned commit `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`, a linear three-commit fast-forward from `26696615…`. The 47-file range adds Shopify Storefront, durable checkout/order storage, signed webhook handling, deterministic tests, native-build preparation and migration `20260919131500_shopify_checkout_storage.sql`; the tree now contains 415 tracked blobs. The two additional branch heads remain `b629203b…` and `e63b5f8a…`.
- All three new commits are unsigned and single-parent descendants of the already-unrelated remote lineage, so the prior exact-artifact verdict still does not transfer. The exact named `heres-health-usual-moment-20260906` worktree is no longer at recorded rejected candidate `a56fe568…`; it is now on older `49f19d44…` with no tracked changes and eight untracked evidence WebMs. This is local custody drift, not acceptance or release progress.
- Source-authored evidence is internally inconsistent: `CURRENT-STATUS.md` at `a61ff082…` claims 494 passing tests, while committed `verification-summary-2026-09-19.json` totals 481 (`285 + 154 + 33 + 9`), names `26696615…` as its verification base, and records one skipped Shopify live test. This run verified those committed records and their contradiction only; it did not rerun tests/builds or independently inspect Square, Shopify or Acuity.
- The public preview remains separate and byte-unchanged at HTTP `200`, 260,281 bytes and SHA-256 `e744f48dbf53ed3c4f6671225708c5fb958a36c25a051876184b4c79ce118742`. No remote-main deployment, independent exact-artifact review, rendered journey, physical-device proof, app-store action or client contact is inferred.

## Canonical remote now has source; lineage, acceptance and deployment binding remain open — 19 September 2026, 12:19 IST

- Direct GitHub readback now exposes three unprotected branches in `sam-evolv/heres-health-app`. `main` is exact commit `2669661562e45744afeb6fa0f0aad2992a4d3eb1` / tree `ee077bbc17687a46bf332b0789d3cdafdcc827ab`, with ten commits and 401 tracked files; `review/integrated-simulator` is `b629203b…` and `codex/heres-health-owner-preview` is `e63b5f8a…`. This supersedes the earlier current-state claim that the canonical remote had no branches or commit.
- The source-custody contradiction is explicit. Clean local canonical `main` remains `9b842db0…`; clean independently accepted checkpoint remains `747bbacc…` / tree `c002f80f…`. Remote `main` has no merge base with either local lineage. A direct tree comparison against `747bbacc…` reports 311 files changed, 79,574 insertions and 783 deletions, so the remote cannot inherit the accepted checkpoint's verdict by name or chronology.
- Remote-authored `CURRENT-STATUS.md` and committed evidence JSON report 464 passing automated tests, one skipped Shopify live test, Square-sandbox observations across three cafés, six read-only Acuity links, and passing iOS/Android JavaScript exports. This reconciliation verified that those records exist at the exact remote commit; it did not rerun the tests/builds or independently inspect Square, Shopify or Acuity. The same remote receipt records 81 mobile lint errors, five warnings, a non-clean format check and no native-device acceptance.
- The public preview remains separate and unchanged: Vercel still binds `https://heres-health-preview.vercel.app/` to unaccepted Ready CLI deployment `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx`, with no Git metadata; direct root readback remains HTTP `200`, 260,281 bytes and SHA-256 `e744f48dbf53ed3c4f6671225708c5fb958a36c25a051876184b4c79ce118742`. No remote-main deployment, independent exact-artifact review, rendered journey, physical-device proof, app-store action or client contact is inferred.

## Paid commercial terms — 16 September 2026

Sam’s current correction: **€5,000 + VAT deposit paid**. The app **is being built now**. **€10,000 + VAT** is due when the app is completed (€15,000 + VAT). Completion means the finished app; do not invent extra criteria. This supersedes the 5 September “not fully committed / pre-sales only” commercial status. Remaining technical evidence for Square/Shopify/Acuity, physical-device and app-store is delivery work, not a reason to treat the job as unpaid. Full note: [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]].

## Public preview alias drift; accepted hosted binding no longer current — 7 September 2026, 20:03 IST

- Live Vercel inspection shows `https://heres-health-preview.vercel.app/` now resolves to Ready production deployment `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx`, created 7 September at 10:09:57 IST, superseding accepted deployment `dpl_GeDQdf2EPTTeDNccui5uggNn7R5F` on the public alias.
- Fresh root readback returned HTTP `200`, 260,281 bytes and SHA-256 `e744f48dbf53ed3c4f6671225708c5fb958a36c25a051876184b4c79ce118742`. It does not match accepted commit `49f19d44…` `app/index.html` SHA-256 `4e727d0f8e7ba27644551c3858835fbcfb5f8152c823d1f111266fdc1b85aeed`. Vercel inspection exposed no immutable source commit or independent review receipt for the new deployment, so its source, change scope and acceptance are open; HTTP `200` and Ready status prove availability only.
- Local accepted source remains `49f19d44…` / tree `bd9082cb…` with eight untracked evidence files. No authenticated commerce path, physical-iPhone playback, rendered acceptance of the new hosted bytes, Sam taste approval or Conor send is inferred.

## Final directed film accepted with conditions; human and client gates remain open — 7 September 2026, 04:04 IST

- **The initial replacement failed the real-motion gate.** Vera task `t_f46dc47b` rejected exact MP4 `b084e971…`: its technical encode and truthful state stills were valid, but Size/Milk/Save and Home entrance were not continuous native motion and the cut did not meet the directed-film bar.
- **The shared capture root was repaired before final assembly.** Vera accepted short temporal proof `75a852a43aedd95867602514946c689a2682c0fc16d9d0b52a7cdc7f54fcd505` with conditions after independently binding and recapturing genuine Home/photo motion plus the continuous Regular→Large→Coconut→Save→Replace→saved-Home path. Final task `t_baf78ca1` then returned `ACCEPT WITH CONDITIONS` on exact film `4dd37679ab3c9c9038efca71273078734fd96834fb165b8d5365d6ff650c4ec6`, with temporal and package gates accepted and the bounded art-direction/format/browser gates accepted with conditions. It is not claimed as Shapelayer parity or Sam's aesthetic approval.
- **Direct artifact readback at 04:04 matched the reviewed receipt.** The attached final is `6,823,867` bytes, 34.000 seconds, silent H.264 High, `1080×1920`, `60 fps`, `yuv420p`, limited-range BT.709. It remains bound to accepted source `49f19d44f199ae8598cb2e724f84327dc65557eb` / tree `bd9082cb945a3338326225b21bc119767dbe4d17`; tracked app source is unchanged, while eight untracked evidence WebMs mean the worktree is not described as clean.
- **Sam-only presentation is recorded, not client delivery.** The live board records a native Telegram `sendVideo` success to Sam as `message_id 28974` with matching returned dimensions, duration and byte size. This is API-side upload metadata only: observed phone playback/colour, Sam taste approval, real Telegram/WhatsApp recipient rendering and any Conor send remain open. The public preview still returned HTTP `200` with accepted root SHA-256 `4e727d0f…`; no app bytes, deployment, Square/Shopify/Acuity path, account, transaction, app-store state or production integration changed.

## Corrected app accepted and published; directed film remains open — 7 September 2026, 00:02 IST

- **The rejected `a56fe56…` lineage was corrected and independently accepted with conditions.** Forge task `t_1446610d` produced local commit `49f19d44f199ae8598cb2e724f84327dc65557eb` / tree `bd9082cb945a3338326225b21bc119767dbe4d17` / bundle SHA-256 `50004ccaffc88c99b6bd49030f6f7ceccf5fe1b1bd6d5227c78c942fc51f10f5`. Vera task `t_6cc818f5` independently reproduced Chromium and WebKit Home-entry and café/drink motion, toast-free share artwork, readable allergen/detail layout, Shop `Added ✓`, the browser-local usual journey, 159 resolved imagery slots and new tests that fail on the rejected snapshot. Retained conditions are the brief Back-overlay completion, a forced-scroll geometry caveat with readable pixels and a stale implementation receipt superseded by Vera's verdict.
- **Those exact bytes are now live on the isolated public preview.** Forge release task `t_c98ae5c9` published only the accepted 76-file runtime to `https://heres-health-preview.vercel.app/` as deployment `dpl_GeDQdf2EPTTeDNccui5uggNn7R5F`. Vera task `t_45736ee7` independently accepted the hosted preview with conditions after 76/76 anonymous hash matches, public 1200×630 OG JPEG verification and Chromium/WebKit 320/390/430 navigation plus 390-pixel usual, Shop, Sauna, motion and reduced-motion journeys. Direct 7 September 00:02 readback still returned HTTP `200`, root SHA-256 `4e727d0f8e7ba27644551c3858835fbcfb5f8152c823d1f111266fdc1b85aeed`, and Vercel `READY` on that exact deployment. The protected `heres-health-app` deployment remained separate and unchanged in the release/review receipts.
- **The client film is not yet accepted at Sam's directed quality bar.** Vera task `t_645ee068` accepted recut MP4 SHA-256 `69345e5cdfd0633d45bbedef6411df6bf6f330c892bc92632bf174e78fc3a528` only as a truthful 33.9-second walkthrough, not as the required Shapelayer-level launch film; it was not attached for client handoff and `ready_to_send` is false. At 00:02, follow-on Forge task `t_d3f63524` was running a directed composition pass, with no completed artifact or independent verdict yet.
- **Boundaries remain explicit.** No physical iPhone/Safari check, real Telegram/WhatsApp unfurl, Square, Shopify or Acuity transaction, account inspection, client contact, app-store action or production integration is proven by this preview. Sam still owns any Conor send.

## Imagery baseline live; nav and personal-usual candidate remain gated — 6 September 2026, 20:29 IST

- **The public preview materially advanced after the noon checkpoint.** Vera task `t_4055bfa8` accepted the 159-slot image-reconciliation artifact with conditions at commit `12a7bd57c036a52ecc21eb4860d6990afb4bbf65`; its 73-image hosted publication was then recorded against the separate preview. A fresh anonymous read at `https://heres-health-preview.vercel.app/` returned HTTP `200`, and the live root is byte-identical to `app/index.html` at `12a7bd5` (SHA-256 `eeca71df1d105ccf048e7a59d1a0cb48dc7115eb4ecccfb60a6c695e02909f01`) with all 73 referenced `/assets/images/...` paths present in source. This supersedes the earlier incomplete 91-slot local-refinement state; it does not prove production integration or a physical-device result.
- **Sam's real phone screenshot then exposed a separate bottom-navigation gap.** Forge task `t_12fc5a1c` produced local checkpoint `14f1162bb827120b0e9ccfccc3ef0355e1274b23`; Vera task `t_e3d1d255` independently accepted it with conditions after rendered Chromium/WebKit geometry and an injected `visualViewport` mismatch. The reviewed normal-WebKit screenshot shows the tab bar meeting the bottom edge with no visible beige strip. This remains emulated browser evidence: it is not yet a same-browser physical iPhone/Telegram close-out and has not replaced the public `12a7bd5` bytes.
- **The new combined local candidate was rejected and is not releasable as submitted.** Exact clean worktree `/Users/samdonworth/Code/worktrees/heres-health-usual-moment-20260906` was reviewed at commit `a56fe568772753270cbb42060cffedecb83e41b0` / tree `b380390037210e700a3a0759ca1d27058842f2fa`, based on accepted nav checkpoint `14f1162`; its retained bundle hashes to `e484fc8b2b9ec012eb8d9d999b18663b0dc5defff819030656bbd24939715173`. Vera task `t_76caa3a8` reproduced the usual save/persist/add journey, 159-slot imagery, café “Added ✓” and 80 nav-flush checks on the changed CSS, then issued `REJECT`: `phone-motion.js` runs in the document head before `#phone-app` exists, so Home entrance and photo-to-detail motion never bind. The share image contains a transient save toast, the save footer clips allergen copy, drink-detail copy paints into the preview notice, and Shop “Added ✓” was not visually reproduced.
- **Release and human gates remain explicit.** Rework task `t_1446610d` is running in the same isolated worktree; no repaired commit exists yet. After a new exact-artifact Vera acceptance, remaining gates are approval-bounded publication, signed-out hosted content/version and social-metadata readback, the short real-product walkthrough, and Sam's same-browser physical-phone check. No Square, Shopify, Acuity, live transaction, account, app-store or Conor communication gate closed.

## Published browser preview superseded by physical-phone quality rejection — 6 September 2026, 12:09 IST

- **Commercial status was corrected by Sam on 5 September.** The 29 August record that Here’s Health and Donworth Studio were “proceeding” is preserved below as historical context, but the owner is not yet fully committed. Current work is a bounded pre-sales proof intended to earn that commitment, not authorization to complete the production platform or live integrations for free.
- **A faithful phone-browser preview was built and published under explicit artifact-bound approval.** The retained source is commit `586546fac563de588507210dcedc6d1b77b1a9d2` / tree `83a005958df60a47ac135e524612e586147c9912`. Its local gates recorded `426/426` browser checks and a native independent review accepted it with conditions at that scope. Sam then explicitly approved publication of those exact bytes. Live Vercel inspection at 12:09 IST confirms separate preview deployment `dpl_5XhpC2q6vwzqp6r3xzE6XJuDwN59` remains `READY`; the publication receipt binds all 51 hosted files to the reviewed bundle and records anonymous Chromium/WebKit smoke. Existing production deployment `dpl_HLwJCr4jVUo1HJbZ7QZUJVuoH95M` also remains `READY` and separate.
- **That functional acceptance is superseded for visual quality.** Sam’s physical-phone Shop screenshot exposed obvious unequal product-card alignment and blank image tiles. The approved design direction remains the original Claude inner-app experience in the real phone viewport, but the published `586546f…` preview is not the current quality bar and its prior publication approval does not authorize replacement bytes.
- **The latest local premium-and-imagery candidate is incomplete and not accepted.** `/Users/samdonworth/Code/worktrees/heres-health-visual-quality-20260906` remains at base commit `586546f…` with modified and untracked source, tests, assets and evidence; no candidate commit exists. Its 83-file source manifest is `c2fed85e1ffbeadffad6d23fdd2c518d36ef8ea19699299228cce7be2d20cc28`. Independent supervisor readback confirms `39/39` source regressions, fidelity and inventory checks, plus a partial Chromium/WebKit 430-pixel premium slice with two passing scenarios, 50 screenshots and no console errors. The overall browser receipt correctly exits `1`: imagery is incomplete, with 91 unresolved slots across 31 entities, and the full 23-screen visual sweep was not accepted. No final independent review or new deployment occurred.
- **Open decision:** either permit corrections from inaccurate sample catalogue records to verified current merchant products and clearly label illustrative café photography where exact merchant assets are unavailable, or require Here’s Health to supply exact photography. No substitutions were silently made. No Conor contact, real payment, booking, provider-account access, app-store action or physical native-app acceptance occurred.
- **Native checkpoint remains separate and preserved.** The accepted `747bbacccd663384c940e0d25c1d37d262f57840` worktree and canonical `9b842db0a63b1f4b6008a7fd934538a9768e508b` checkout are still clean; the GitHub repository still exposes zero branches. The unresolved Hermes included-only routing baseline remains on HOLD, although Sam approved the bounded native Codex exception used for the browser preview.

## Independently accepted source handoff artifact — 5 September 2026, 00:13 IST

- Vera task `t_61385abf` independently accepted `heres-health-app-source-747bbac.zip` at `2,409,097` bytes / SHA-256 `86b0cd87846704b1820af02a22e18d1fbe71e965926eec0e82a43c247dc0e170`, bound to local commit `747bbacccd663384c940e0d25c1d37d262f57840` / tree `c002f80f56d61bbf6669b48204a24faf243bdba5`.
- Independent extraction matched all `160/160` tracked files byte-for-byte and an independently recreated Git archive. The accepted and canonical worktrees remain clean; canonical HEAD remains `9b842db0a63b1f4b6008a7fd934538a9768e508b`. The canonical GitHub repository still exposes default branch metadata but zero branches and repository size zero.
- This is a source-custody handoff artifact only. It was not uploaded to Astra or any third party, pushed, merged, deployed, installed, signed or run on a physical device. Sam approval is required before sending that exact ZIP; Square, Shopify, Acuity, staff workflow, account ownership, release-mode, physical-device and production gates remain open.

## Verified local engineering checkpoint — 31 August 2026

- Donworth Studio’s Forge implementation and Vera’s independent detached-worktree review both accepted local commit `747bbacccd663384c940e0d25c1d37d262f57840` (tree `c002f80f56d61bbf6669b48204a24faf243bdba5`) at checkpoint scope. It is one commit above the protected delivery base `9267fe0c77c07a9a88f9697de0a6f4b94af8b200`; the implementation and verifier worktrees were clean.
- The accepted checkpoint makes the sauna Session Pass preview derive from the selected peak/off-peak date, time and guest count. It does not claim that booking, payment, refund, entitlement, calendar or directions actions occurred; Acuity remains the only live sauna boundary. Café/Square and Shop/Shopify separation, owner/customer isolation and client-secret exclusion were independently retained.
- Vera independently passed format, lint, typecheck, build, production audit and `101/101` tests, including `73/73` mobile Session Pass tests. On iPhone 17 Pro / iOS 26.5 Simulator, a fresh current-source Metro bundle rendered Home and Session Pass at normal text and a two-test XCUITest rerun passed the returning Session Pass path plus Home/Café/Shop/Sauna/Account sweep. Forge’s separate large-accessibility-text evidence was also reviewed.
- Acceptance is conditional: first-run completion remains composite evidence across two exact-SHA runs rather than one clean green transition assertion. No physical-device, release-mode, provider-account, live booking/payment or production proof exists.
- No push, merge, deployment, provider contact or production mutation occurred. The canonical GitHub repository reports `main` as its metadata default branch but still exposes no refs or branches, and its `main` commits endpoint reports an empty repository; the accepted commit remains local with no upstream.

## Verified from Sam’s supplied meeting record

- On 30 August, Sam confirmed that the canonical repository for the project is `https://github.com/sam-evolv/heres-health-app.git`.
- The initial delivery base is the independently verified candidate commit `9267fe0c77c07a9a88f9697de0a6f4b94af8b200`; local `main` at `9b842db0a63b1f4b6008a7fd934538a9768e508b` remains its historical base.
- On 30 August, Sam confirmed that Conor Philpott is an owner of Here’s Health.

- Sam recorded on 29 August that Here’s Health and Donworth Studio are proceeding with the project.
- The owner effectively approved the existing prototype direction and requested no material design changes.
- Intended first-release direction covers iOS and Android, Shopify retail, café ordering, sauna/cold plunge, accounts, offers/rewards, click and collect/takeaway and relevant notifications.
- Relevant systems identified in the meeting include Shopify, Square, Acuity, Westron, Planday, BrightPay and an existing loyalty/rewards system.
- Conor supplied Sam with login information for Shopify, Square and Acuity; the accounts have not yet been inspected.
- Acuity is reported to integrate with Square. Loyalty is believed to be tied to Shopify. Both remain unverified until the live configurations are inspected.
- Operational decisions involve Conor, his brother and his father. Product and journey acceptance will be shared principally between Sam and Conor.
- The new café is expected in roughly two months; the discussed target is app release roughly three weeks before opening.
- Westron supplier-price processing and the Planday-to-BrightPay workflow are named operational opportunities for later proof.

## Not yet technically verified

- Canonical GitHub now exposes three unprotected branches, but remote `main` has no merge base with the clean local canonical or independently accepted lineages. Integration, branch authority and exact-artifact acceptance remain unresolved; no push, merge, install or release should be inferred without Sam's explicit current approval.
- This reconciliation did not independently inspect the supplied Shopify, Square or Acuity accounts. Remote-authored evidence claims Square-sandbox observations and read-only Acuity link checks; Shopify merchant integration and provider-account acceptance remain open.
- The committed remote receipts claim sandbox catalogue/order/payment/refund paths, but they were not independently re-executed here and do not establish production fulfilment, staff receipt, hardware or live checkout acceptance.
- No café hardware or staff workflow has been observed.
- No legal, privacy, allergen, consent or accessibility materials have been reviewed.
- Apple Developer and Google Play ownership is not yet decided; the ownership, administration and transfer position must be resolved before submission.
- The €15,000 + VAT fee, paid €5,000 + VAT deposit and €10,000 + VAT completion balance are recorded. Signed scope detail, support agreement and final acceptance owner remain unresolved.
- The whole-brand app direction is now recorded as accepted in principle by the owner, but exact release scope and integration commitments remain subject to discovery.

## Active milestone

[[items/heres-health-week-one-discovery-and-technical-proof]]

Complete discovery and prove the critical integration path before locking release scope or integration promises.

## Acceptance gate for Week 1

- Secure access is available without putting production secrets in the mobile client or vault.
- Square Sandbox catalogue, modifiers, one representative order and intended staff fulfilment route are exercised.
- Shopify catalogue, basket and Checkout Kit path are exercised against the real store configuration or an agreed safe test setup.
- Current Square hardware and café operations are mapped.
- Here’s Health Apple Developer and Google Play organisation account status is known.
- Client-facing Phase One scope explicitly distinguishes launch-critical, launch-optional and post-launch work.
- The six-week plan is re-estimated from evidence and accepted dependencies.

## Scope control

Launch-critical candidates:

- Café catalogue, modifiers, collection scheduling, payment, order submission and status.
- Shopify catalogue, basket and secure checkout.
- Sauna information and booking through the verified existing route, with a safe link fallback if a native integration cannot be proven before scope freeze.
- Location preference, essential account functions, notifications and operational error states.
- Real-device, payment, hardware and staff-pilot verification.

Likely deferrable unless discovery proves low-risk:

- Unified rewards across Square and Shopify.
- Deep personalisation and recommendations.
- Replenishment reminders.
- Full content and recipe system.
- Broad AI and automation features.

## Immediate dependencies

- Sam authenticating directly into the supplied Shopify, Square and Acuity accounts without placing credentials in chat, Ground Zero, source control or the app.
- Confirmed scoped roles and least-privilege access for continued technical work.
- A focused café operations and hardware walkthrough only where the account evidence cannot establish the real staff flow.
- Brand assets, photography and legal policies.
- Agreement on scope, price, support, app-store ownership and acceptance responsibilities.

## Connected vault notes

- [[briefs/2026-09-03-heres-health-marcel-ios-design-reference]] — reference-only notes on transferable mobile interaction and visual-system mechanisms; no redesign or implementation approval
- [[imports/heres-health-project-master-brief-2026-08-29]] — Sam-supplied post-meeting master brief
- [[imports/heres-health-meeting-record-addendum-2026-08-29]] — Sam’s corrections on access, Acuity, decision-makers and app-store ownership
- [[companies/heres-health]] — client company
- [[items/heres-health-week-one-discovery-and-technical-proof]] — active work item
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — full distilled brief
- [[imports/heres-health-app-project-brief-2026-08-13]] — supplied source
- [[people/conor-heres-health]] — client owner
- [[people/keith-crowley]] — referral relationship
- [[context/index]] — canonical context entry point
- [[items/_Index]] — active item index

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
- [[briefs/2026-09-03-heres-health-marcel-ios-design-reference]]
- [[briefs/2026-09-05-heres-health-notification-state-and-consent-receipt-gate]]
- [[briefs/substack-draft-2026-08-16-the-machine-kept-receipts]]
- [[briefs/substack-draft-2026-08-23-someone-still-has-to-pay]]
- [[briefs/substack-draft-2026-08-30-a-client-said-proceed]]
- [[briefs/substack-draft-2026-09-06-proceed-was-too-strong]]
- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]
- [[briefs/substack-draft-2026-09-27-more-precise-not-complete]]
- [[briefs/wiki-refiner-2026-08-30]]
- [[briefs/wiki-refiner-2026-08-31]]
- [[briefs/wiki-refiner-2026-09-01]]
- [[briefs/wiki-refiner-2026-09-02]]
- [[briefs/wiki-refiner-2026-09-03]]
- [[briefs/wiki-refiner-2026-09-04]]
- [[briefs/wiki-refiner-2026-09-05]]
- [[briefs/wiki-refiner-2026-09-06]]
- [[briefs/wiki-refiner-2026-09-07]]
- [[briefs/wiki-refiner-2026-09-08]]
- [[briefs/wiki-refiner-2026-09-09]]
- [[briefs/wiki-refiner-2026-09-10]]
- [[briefs/wiki-refiner-2026-09-11]]
- [[briefs/wiki-refiner-2026-09-12]]
- [[briefs/wiki-refiner-2026-09-13]]
- [[briefs/wiki-refiner-2026-09-14]]
- [[briefs/wiki-refiner-2026-09-15]]
- [[briefs/wiki-refiner-2026-09-16]]
- [[briefs/wiki-refiner-2026-09-17]]
- [[briefs/wiki-refiner-2026-09-18]]
- [[briefs/wiki-refiner-2026-09-19]]
- [[briefs/wiki-refiner-2026-09-20]]
- [[briefs/wiki-refiner-2026-09-21]]
- [[briefs/wiki-refiner-2026-09-22]]
- [[briefs/wiki-refiner-2026-09-23]]
- [[briefs/wiki-refiner-2026-09-24]]
- [[briefs/wiki-refiner-2026-09-25]]
- [[briefs/wiki-refiner-2026-09-26]]
- [[briefs/wiki-refiner-2026-09-27]]
- [[briefs/wiki-refiner-2026-09-28]]
- [[companies/donworth-ai-solutions]]
- [[companies/heres-health]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]]
- [[items/donworth-publishable-and-outreach]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/heres-health-westron-price-file-diff-proof]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]
- [[people/conor-heres-health]]
- [[people/keith-crowley]]
- [[project_state/donworth-studio]]

