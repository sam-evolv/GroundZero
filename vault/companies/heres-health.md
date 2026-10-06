---
id: heres-health
name: Here’s Health
short: Here’s Health
sector: Health-food retail, cafés, ecommerce and wellness
role: client-company
status: active-delivery
created_at: "2026-08-13"
---

# Here’s Health

## Matching rota source candidate identified; hosted/build acceptance remains open — 4 October 2026, 08:19 IST cutoff

- Historical `main` remains `a61ff082…`; draft PR #1 remains open/draft, clean and unreviewed at `06f17e88…`. Open/draft PR #6 is mergeable/clean at unsigned `f81f1c63…`, with 27 commits / 208 files, one successful check and zero reviews. Direct inspection shows the exact hosted migration filenames plus rota API, mobile, portal, payroll, persistence and recovery source. This corrects the prior blanket “no migration/source match” claim: a matching source candidate exists, but no inspected deployment receipt binds hosted state to that head, all commits are unverified, and build 8 predates the rota tranche.
- Hosted rota rows remain one tenant / revision 7, one identity, five entities, one audit row, two completed requests and two version-6 conflict scopes including `synthetic-test-site`. The production Shopify row remains `awaiting-payment` without native or confirmed order after a 07:10 UTC reconciliation heartbeat; all 27 Square orders remain sandbox-only, authoritative Shopify orders remain empty, deletion remains one completed plus one requested row and notification queues remain empty.
- A fresh Apple-console attempt failed closed on the running-Chrome profile lock, so **Waiting for Review at 21:01 IST on 1 October remains the last verified Apple state**. No payment, fulfilment/refund, deletion completion, rota UI/device, merchant, client or release acceptance advanced. Public launch remains **NO-GO** and paid terms are unchanged.

## Hosted rota persistence became active without source binding; launch stays NO-GO — 3 October 2026, 20:16 IST cutoff

- GitHub remains unchanged at historical `main` `a61ff082…` and open/draft, clean, unreviewed PR #1 head `06f17e88…`, with two successful exact-head checks. Current code searches still find no migration IDs `20261002203423`, `20261002203444` or `rota_tenants`. Submitted build 8 remains bound to older source `5a3d452…` plus evidence `9089494…`; the hosted rota state is outside the binary's accepted evidence. A fresh Apple-console attempt failed closed on the running-Chrome profile lock, so **Waiting for Review at 21:01 IST on 1 October remains the last verified Apple state**.
- Direct Supabase remains `ACTIVE_HEALTHY` at 24 migrations / 24 listed RLS-enabled public tables. The six source-unbound `rota_*` tables now contain one tenant at revision 7, one employee identity, five entities, one audit row, two completed-request rows and two version-6 conflict scopes; one scope explicitly names `synthetic-test-site`. Exact deployed source, actor/approval, test-versus-client-data provenance, UI/device binding and client acceptance remain open. Do not treat persistence rows as rendered or accepted rota delivery.
- Public commerce health remains HTTP `200` and checkout-enabled. All 27 Square orders are sandbox-only (23 paid, four unpaid); no production Square payment exists. The production Shopify session remains `awaiting-payment` without native or confirmed order and was updated at 19:00 UTC on 3 October. Deletion remains one completed plus one requested row; notification tables remain empty. No payment, fulfilment/refund, deletion completion, rota/device, merchant, client or release acceptance advanced. Public launch remains **NO-GO** and paid terms are unchanged.

## Hosted rota schema appeared without source binding; launch stays NO-GO — 3 October 2026, 00:23 IST cutoff

- GitHub remains unchanged at historical `main` `a61ff082…` and open/draft, clean, unreviewed PR #1 head `06f17e88…`. Submitted iOS build 8 remains bound to older source `5a3d452…` plus release evidence `9089494…`; later source and hosted schema are outside the binary's accepted evidence. A fresh App Store Connect readback redirected to sign-in, so **Waiting for Review at 21:01 IST on 1 October remains the last verified Apple state**, not a current-console claim.
- Direct Supabase is `ACTIVE_HEALTHY` but advanced from 22 migrations / 18 listed public tables to 24 migrations / 24 listed public tables. New hosted migrations `20261002203423 roster_persistence` and `20261002203444 roster_entity_storage` add six RLS-enabled `rota_*` tables, all currently empty. Current PR-head and GitHub searches return no match for either migration ID or `rota_tenants`, leaving exact source, deployment actor/approval and app/UI binding open. Production commerce, deletion and notification rows are unchanged.
- No payment, confirmed order, fulfilment/refund, deletion completion, rota/device, merchant or client acceptance advanced. Public launch remains **NO-GO** and paid terms are unchanged.

## A second deletion request is pending; commerce and Apple acceptance did not advance — 2 October 2026, 12:21 IST cutoff

- GitHub is unchanged at historical `main` `a61ff082…` and open/draft, clean, unreviewed PR #1 head `06f17e88…`, with 197 commits / 453 files and two green checks. Build 8 remains bound to older source `5a3d452…` plus release evidence `9089494…`. A fresh Apple-console readback was blocked again because running Chrome held the real-profile credential databases, so **Waiting for Review at 21:01 IST remains the last verified state**, not a current-console claim.
- Direct Supabase remains healthy. Production Square/Shopify checkout flags and the 2/3 enabled Square-location gate are unchanged; the single production Shopify session remains `awaiting-payment` with no native or confirmed order. The deletion ledger now contains one `completed` request and a second request still in `requested`, created `2026-10-02T08:10:56Z` and due `2026-10-30T08:10:56Z`; `alerted_at` and `completion_notified_at` are null. Actor, rendered receipt and handling outcome for the new request remain unverified. Notifications remain disabled and all three queues remain empty.
- No payment, confirmed order, fulfilment/refund, deletion completion, physical-device, merchant or client acceptance advanced. Public launch remains **NO-GO** and paid terms are unchanged.

## Build 8 entered Apple review; a production Shopify cart exists but acceptance remains open — 2 October 2026, 00:23 IST cutoff

- GitHub remains unchanged at historical `main` `a61ff082…` and open/draft, clean, unreviewed PR #1 head `06f17e88…` / tree `7300f199…`, with 197 commits / 453 files and two green exact-head checks. The canonical 21:01 IST operator receipt records signed iOS `1.0.0 (8)` uploaded, processed, selected and submitted, with **Waiting for Review** then shown. Build 8 is bound to app source `5a3d452…` plus release evidence `9089494…`, not the later source tail or current PR head. A fresh Apple-console readback was blocked at 00:16 IST by the live Chrome profile lock, so the 21:01 state remains the latest verified Apple authority rather than a same-minute claim.
- Direct Supabase remains healthy at 22 migrations / 18 listed RLS-enabled tables and unchanged ACTIVE function versions. Production Square and Shopify still expose `checkoutEnabled:true`; 2/3 production Square locations are now enabled. The production ledger records one Shopify command and one `awaiting-payment` session at 22:26 UTC, with provider cart / checkout URL but no native or confirmed order ID. This is live gateway evidence only: actor, rendered device, payment, order confirmation, fulfilment/refund and merchant/client acceptance remain unverified. A deletion request also reached `completed` at 21:49 UTC without independently verified actor or rendered receipt.
- Notifications remain disabled, all three notification queues remain empty and no notification-delivery cron exists. Build 8 is in review, but Apple approval/release, reviewer, merchant/provider/device and client acceptance remain open; public launch remains **NO-GO**. Paid terms are unchanged.

## Source allergen disclosure advanced; hosted checkout state now conflicts with source — 1 October 2026, 20:17 IST cutoff

- Draft PR #1 is open/draft, mergeable/clean and unreviewed at unsigned `06f17e88…` / tree `7300f199…`; it reports 197 commits / 453 files, zero reviews and two successful exact-head checks. The one-commit / seven-file tail after `20d8737…` adds supplied-menu declaration data/helpers and café product rendering. Exact-head records claim 52 menu-entry/product references and green local checks, but the work was not independently rerun or rendered, is not in uploaded/selected build 7, and has no merchant, physical-device or reviewer acceptance.
- Direct Supabase remains `ACTIVE_HEALTHY` with 22 migrations / 18 listed RLS-enabled public tables. ACTIVE versions now read Square v34/v30, Shopify v31, account deletion v15, Shopify install v17, café email v5 and notification worker v3. Repeated public health reads now report production Square and production Shopify `checkoutEnabled:true`, contradicting the exact-head release record that both remained off. Square's second gate still has 0/3 production locations enabled (sandbox 3/4), so café create/pay writes remain held there; Shopify exposes its production write gate as enabled. The time, actor, approval and exact source-to-host binding for the live flag change remain unknown, and no cart, checkout, order, charge or refund was exercised.
- Production order notifications remain disabled, notification device/outbox/recovery counts remain zero and the live cron list still has no notification-delivery job. Paid terms are unchanged. Allergen/recipe/variant approval, reviewer/privacy/compliance, merchant/provider/device, submission, release and client acceptance remain open; launch remains **NO-GO**.

## Build 7 and merchant evidence advanced; acceptance remains open — 1 October 2026, 00:18 IST cutoff

- Draft PR #1 is open/draft, mergeable/clean and unreviewed at unsigned `20d8737…` / tree `4f97ff7b…`; it reports 196 commits / 449 files, zero reviews and two successful exact-head checks. The three-commit / seven-file tail after `53278d6…` moves the app privacy URL to the merchant policy and records later build/privacy/menu evidence; the final two commits are documentation-only.
- Exact-head release records bind signed iOS `1.0.0 (7)` to source `0f9ee377…` and IPA SHA-256 `23a778e2…`, with Apple processing `Complete`, build 7 selected/saved and 12 privacy categories prepared as an unpublished draft. A fresh App Store Connect attempt was blocked before site load because running Chrome held the real-profile credential databases and Hermes refused an unsafe raw copy; no console, binary or physical-device acceptance is claimed. The live merchant policy was directly read at HTTP `200`, is effective 30 September and covers app/deletion handling. It names OpenHouse AI Limited as technical operator while Donworth's still-public policy names Donworth Studio as app developer; app source/store records now point to the merchant policy, but owner/legal wording still needs reconciliation.
- Supplied menu evidence supports proposed matches for 36 worksheet rows / 35 product IDs, not approved recipe/variant eligibility: 41 of 84 transcribed records have no printed code and Paul Street scope is unconfirmed. Hosted authority remains `ACTIVE_HEALTHY` at 22 migrations / 18 listed RLS-enabled tables and unchanged Square v33/v29, Shopify v30, account deletion v14, Shopify install v16, café email v4 and notification worker v2; production checkout/notifications and Shopify checkout remain disabled and no notification-delivery cron exists. Content rights, age/encryption/privacy completeness, reviewer, allergen, merchant/provider/device, submission, release and client acceptance remain open. Paid terms are unchanged; launch remains **NO-GO**.

## Deletion-receipt UI and hosted function versions advanced; acceptance remains open — 30 September 2026, 20:13 IST

- Draft PR #1 is open/draft, mergeable/clean and unreviewed at unsigned `53278d6…` / tree `b3c62a4c…`; both checks are successful. Direct compare reports 193 commits beyond unchanged `main`, and the PR reports 449 changed files. The two-commit / two-file tail after `2d45496…` corrects the real deletion-receipt screen's notice, spacing and Back navigation; its test/simulator statements remain source-authored rather than independently accepted.
- Direct hosted authority remains `ACTIVE_HEALTHY` with 22 migrations and 18 listed RLS-enabled public tables. Function versions advanced by one to Square v33/v29, Shopify v30, account deletion v14, Shopify install v16, café email v4 and notification worker v2. Public health still has production checkout/notifications disabled, sandbox checkout enabled with notifications disabled and Shopify checkout disabled; cron metadata still has no notification-delivery job.
- No fresh authenticated Apple-console or physical-device readback was obtained. Exact-head source still records build 6 as unsigned and final signed/archive/device work as pending. No signed build-6 candidate, APNs delivery, production transaction, reviewer/privacy/compliance completion, submission, release or client acceptance was verified. Paid terms are unchanged; launch remains **NO-GO**.

## Apple Push is enabled, but the signed delivery path remains blocked — 30 September 2026, 08:23 IST

- Draft PR #1 is open/draft, mergeable/`clean` and unreviewed at unsigned `2d45496…` / tree `537c7b30…`, with both exact-head checks successful. Direct REST reports 191 commits / 449 files, correcting the prior capped 100-commit count. The four-commit / 22-file tail after `38f23ae…` aligns migration history and restores exact source for the already-hosted deletion-retention schedule; it does not change native/app runtime or hosted behavior.
- Direct hosted authority remains `ACTIVE_HEALTHY` with 22 migrations, 18 listed RLS-enabled public tables and ACTIVE Square v32/v28 plus notification worker v1. The preserved signed App Store IPA remains build 5 at 27,939,032 bytes / SHA-256 `bd154ce5…`. Rendered Apple receipts show Push Notifications enabled and an Active App Store profile with Push Notifications, while App Store Connect remains on build 5, Prepare for Submission / Missing Compliance.
- The new profile is not locally installed, no APNs sender key or notification-delivery cron exists, and the overnight goal was blocked at 07:52 IST on Mac unlock/profile download plus separate sender-key/private-storage approval. There is no signed build-6 candidate, physical-device push acceptance, production café/shop acceptance, reviewer/compliance completion, submission or release. Paid terms are unchanged; launch remains **NO-GO**.

## Notification foundation is hosted; signed/store/client acceptance remains open — 30 September 2026, 04:13 IST

- Draft PR #1 is open/draft, `CLEAN` and unreviewed at unsigned `38f23ae…` / tree `057bc6a2…`, with both exact-head checks successful, 100 PR commits and 443 reported changed files. The eight commits / 35 files after `1f6ce683…` repair generated-worker CI and add notification recovery/client lifecycle, native corrections, private Auth lookup, hosted-deployment records and migration-history safeguards. This is implementation/CI evidence, not independent review, merge or release acceptance.
- Direct hosted authority is `ACTIVE_HEALTHY` with 22 migrations and 18 public tables, all RLS-enabled. Square v32/v28, Shopify API v29, account deletion v13, Shopify install v15, café confirmation email v3 and notification worker v1 are ACTIVE; the worker body exactly matched exact-head GitHub source. Production checkout and notifications remain disabled, and no notification-delivery cron exists. Existing cron jobs cover deletion retention, Shopify reconciliation and café confirmation email only.
- Paid terms are unchanged. The preserved signed App Store IPA remains `1.0.0 (5)`, 27,939,032 bytes / SHA-256 `bd154ce5…`, with fresh strict signature verification. Current source names build 6, but no new signed archive, Apple processing/selection, physical-device pass or APNs delivery was verified. Merchant, reviewer, declarations, APNs/signing, final device/provider, store and client acceptance remain open; launch remains **NO-GO**.

## Build 5 is in the saved Apple draft; final acceptance remains open — 30 September 2026, 00:21 IST

- Draft PR #1 is open/draft, `UNSTABLE` and unreviewed at `1f6ce683…`; canonical `main` remains `a61ff082…`. The newest source adds a disabled-by-default APNs worker and notification-delivery migration, but both current-head checks fail at the first formatting gate on generated `cafe-order-notifications/index.ts`; prior head `5d5d6ca3…` was green. The exact signed App Store IPA is `1.0.0 (5)`, 27,939,032 bytes / SHA-256 `bd154ce5…`, with fresh strict signature verification passing. A preserved rendered App Store Connect receipt visibly shows Prepare for Submission, build 5, Missing Compliance, disabled Save and enabled Add for Review; the committed source audit records delivery, processing and saving. The current Apple browser session had expired, so same-minute live console state was not independently reread. No review submission or release is claimed.
- Direct hosted authority now shows 18 migrations, 14 listed RLS-enabled public tables and ACTIVE Square v31/v27, Shopify API v29, account deletion v13, Shopify install v15 and café confirmation email v3. The branded account confirmation page rendered at HTTP `200` on Ready but source-unbound Vercel deployment `dpl_7aUK…`. Production checkout remains disabled; the active five-minute Shopify reconciliation schedule and successful recent invocations do not prove order recovery or merchant acceptance.
- Paid terms are unchanged. Component acceptance on development build 4 and a separate café receipt rehearsal does not establish combined build-5 device/provider acceptance. Export compliance, reviewer access/details, privacy/age/rights declarations, merchant live-commerce/till/refund workflow, client acceptance and store review remain open. Newer notification source at the PR head is not in build 5, not hosted, not CI-clean and not device-accepted; launch remains **NO-GO**.

## Build 3 is signed/exported locally; store and client acceptance remain open — 29 September 2026, 16:12 IST recheck

- The integration branch and draft PR #1 remain open/draft and unreviewed at `198edc8f…` / tree `4e6b23b5…`, with two failed checks. The isolated preflight checkout retains five modified tracked files and five untracked release handoff documents; no commit or push occurred.
- The locally exported App Store IPA was re-read at 27,854,748 bytes, version/build `1.0.0 (3)`, bundle `ie.hereshealth.app`, SHA-256 `b2f0d27b81d61a0896d53c1390c03277c6f065f9c0f6166150f07feb3bbc7282`. Its exact exported app passes strict code-sign verification under Apple Distribution team `FZXRCW547P`, with `get-task-allow=false`.
- Direct Supabase authority remains `ACTIVE_HEALTHY`, with 17 migrations, 13 listed RLS-enabled public tables and ACTIVE Square v30/v26, Shopify API v28, account deletion v12 and Shopify install v14. Production Square/Shopify checkout remains disabled.
- Local export is not Apple validation, upload, processing, build selection or submission. Signed-device, provider-transaction, reviewer, store and client acceptance remain open; launch remains **NO-GO**. Paid terms are unchanged, and no app deployment, provider/database/payment mutation, store action or client contact occurred in this reconciliation.

## Café fix merged and build-2 screenshots captured; store submission remains blocked — 29 September 2026, 00:11 IST readback

- Private GitHub `main` remains unsigned `a61ff082…`. Café image PR #5 merged into `codex/shopify-full-integration` as `198edc8f…` / tree `4e6b23b5…`; broad draft PR #1 now points to that same head, 171 commits / 376 PR-reported changed files ahead of `main`, with zero reviews and both checks failed. Promotions PR #4 remains open/draft at `664b36fc…`, without checks or review.
- Seven local screenshots were re-read as 1290 × 2796 JPEGs, covering Home, café/coffee, Flat White, Shopify catalogue/product and Sauna. Archive `heres-health-apple-build2-screenshots.zip` is 2,503,914 bytes / SHA-256 `52de20a26989a9f9b307b005626544e09c2c145a8ab140f1af61fa42666b8ad0`; ZIP integrity passed. They remain local and have not been uploaded to App Store Connect.
- Direct Supabase authority remains unchanged at 17 migrations, 13 listed RLS-enabled public tables and ACTIVE Square v30/v26, Shopify API v28, account deletion v12 and Shopify install v14. The separate public preview remains byte-identical and unbound to the PR.
- Build 2 selection/upload, Apple authentication/readback, export compliance, App Privacy, age rating, content rights, reviewer access, signed-device, provider-transaction, store and client acceptance remain open. Launch remains **NO-GO**; no app deployment, provider/database/payment mutation, store submission or client contact occurred in this reconciliation.

## Hosted Square v30/v26 directly verified; acceptance remains open — 27 September 2026, 20:10 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 remains open, draft and without review at unsigned `25c8ec4b…` / tree `4299cd40…`, 168 commits / 374 PR-reported changed files ahead; both checks remain failed and there is still no exact-head app deployment.
- Direct read-only Supabase authority now verifies ACTIVE Square v30/v26, superseding the prior direct v29/v25 checkpoint. Shopify API v28, account deletion v12 and Shopify install v14 are unchanged; the hosted ledger remains at 17 migrations and all 13 listed public tables report RLS enabled.
- This closes only the hosted-version evidence gap. Exact source/host binding, deployment actor/approval, Shopify `read_orders`, production checkout/recovery, store/device claims and client acceptance remain open. Launch remains **NO-GO**.
- Paid terms are unchanged. No merge, app deployment, provider/database/payment mutation, client contact, app-store action or physical-device interaction occurred; signed-device timing, in-store, app-store and client acceptance remain open.

## Draft source advanced through store-build-2 records; acceptance remains open — 26 September 2026, 20:10 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 remains open, draft and without review at unsigned `25c8ec4b…` / tree `4299cd40…`, now 168 commits / 374 PR-reported changed files ahead and seven commits touching 27 files beyond `ad7ace90…`. Both current-head checks ran and failed; there is still no exact-head app deployment.
- Exact-head source remains **NO-GO** and records Android `1.0.0 (2)` in an inactive internal-testing draft, signed iOS `1.0.0 (2)` ready but not uploaded because Transporter is blocked by the locked Mac, Apple still attaching build `1.0.0 (1)`, and an updated standalone phone build installed/launched while physical timing remains unverified.
- Source also claims Square v30/v26 and Shopify `read_orders` advanced, with production checkout still disabled and end-to-end recovery unverified. These are source records, not independent store, provider, device or client acceptance. Hosted Supabase was not re-read in this bounded pass; the 16:57 direct hosted checkpoint remains the latest direct authority.
- Paid terms are unchanged. No merge, deployment, provider/database/payment mutation, client contact, app-store action or physical-device interaction occurred; signed-device timing, in-store, app-store and client acceptance remain open.

## Draft source and hosted release preparation advanced sharply; acceptance remains open — 26 September 2026, 16:57 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 remains open, draft and without review at unsigned `ad7ace90…` / tree `66ca0cf2…`, now 161 commits / 364 PR-reported changed files ahead and 34 commits / 64 files beyond `9ed05cc6…`. Both checks were blocked before runner start by the Actions budget and there is no exact-head app deployment.
- Exact-head source still labels public launch/submission **NO-GO**. Its leading release record now claims Apple received, processed and attached build `1.0.0 (1)`, with export-encryption declaration outstanding and no review submission or release. No direct App Store Connect or independent physical-device authority was inspected, so the claimed delivery/attachment and newer reviewer/device records remain source evidence rather than accepted operational state.
- Read-only Supabase metadata reports 17 migrations and 13 RLS-enabled listed public tables, with Square v29/v25, Shopify API v28, account deletion v12 and Shopify install v14. Source and hosted migration sets still differ: sauna redemption is source-only, deletion-retention scheduling is hosted-only, and version identifiers differ. Exact source/deployment binding, actor and approval remain open.
- The separate public preview remains byte-unchanged and unbound to the PR. Paid terms are unchanged; no merge, app deployment, provider/database/payment mutation, client contact or app-store action was performed by this reconciliation, and signed-device, in-store, app-store and client acceptance remain open.

## Draft source and hosted Square functions advanced; release acceptance remains open — 26 September 2026, 12:09 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 remains open, draft, mergeable / `UNSTABLE` and without review at unsigned `9ed05cc6…` / tree `097272c9…`, now 127 commits / 325 PR-reported changed files ahead and four commits / 58 files beyond `b5887087…`. Both checks were blocked before runner start by the Actions budget, there is no exact-head deployment, and the exact-head record remains **NO-GO**.
- Read-only Supabase metadata reports 14 migrations and 13 RLS-enabled listed public tables. Square production/sandbox advanced to v22/v18; Shopify API v20, account deletion v4 and Shopify install v6 are unchanged. The new sauna-redemption migration exists only in source and is absent from the hosted ledger, so that capability remains inactive.
- The source-authored status records a successfully exported/verified signed standalone rehearsal IPA but explicitly says no physical installation is verified. The separate public sample-data preview remains byte-unchanged and unbound to the PR. Paid terms are unchanged; no merge, app deployment, provider/database/payment mutation, store action, client contact or signed-device, in-store, app-store or client acceptance occurred.

## Draft source and read-only Shopify function advanced; release acceptance remains open — 25 September 2026, 20:12 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 remains open, draft, mergeable / `CLEAN` and without review at unsigned `b5887087…` / tree `943ef4bd…`, 123 commits ahead of `main` and three commits / 77 files beyond `1c377c89…`. The full compare hit GitHub's 300-file cap, so no exact total changed-file count is asserted. Both checks pass, while the exact-head status remains **NO-GO**.
- Read-only Supabase metadata remains at 14 migrations and 13 RLS-enabled listed public tables. Square v21/v17, account deletion v4 and Shopify install v6 are unchanged; Shopify API advanced to v20. Exact deployed-byte equivalence and deployment actor/approval remain unverified.
- A malformed reconciliation read command created GitHub deployment metadata record `6668217402` for `b5887087…` at 20:10:16 IST with environment `production`. It has `production_environment: false`, no statuses and no matching Vercel deployment, so it is not evidence of an app deployment. No rollback was attempted.
- Paid terms are unchanged. Source-authored tests and Simulator renders are not independent signed-device, provider, in-store, app-store or client acceptance; no merge, app build/deployment, payment/provider/database mutation, store action or client contact occurred.

## Draft source, CI and hosted backend advanced; release acceptance remains open — 25 September 2026, 16:07 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 advanced ten commits / 93 files from `cb3d9b9d…` to unsigned `1c377c89…` / tree `13c624c8…`, now 120 commits / 258 files ahead of `main`, and remains open, draft and mergeable / `CLEAN`. The tranche adds Shopify-install and nonce source, deletion/operations hardening and profile, shop and sauna refinements.
- Both current-head GitHub checks completed successfully, closing the prior Actions-budget blocker for this head only. There is still no review or head deployment. The exact-head status record remains **NO-GO** and retains provider, physical-device, authentication, accessibility, store and client gates; CI success is not independent release acceptance.
- Read-only Supabase metadata now reports ACTIVE Square v21/v17, Shopify API v19, account deletion v4 and Shopify install v6, plus 14 ledger entries through the operational-health snapshot. All 13 listed public tables report RLS enabled. Corresponding source paths now exist in the PR tree, correcting the earlier absence statement, but exact source/deployment byte binding, actor and approval remain unverified because source filenames and hosted ledger versions differ.
- The separate public preview remains byte-unchanged and unbound to the PR. No merge, deployment, provider/database/payment mutation, app-store action or client contact was performed; paid terms are unchanged and signed-device, in-store, app-store and client acceptance remain open.

## Hosted functions advanced again; source and acceptance boundaries did not — 25 September 2026, 12:18 IST

- GitHub remained at unsigned `main` `a61ff082…` and open draft PR #1 `cb3d9b9d…` / tree `17e1cefc…`, 110 commits / 195 files ahead, with budget-blocked checks, no review and no head deployment.
- Final read-only Supabase metadata now reports ACTIVE `square-api` v20, `square-sandbox` v16, `shopify-api` v18, `account-deletion` v2 and `shopify-install` v4. The 12-entry migration ledger remains unchanged through the nonce migration, and listed public tables report RLS enabled.
- The current complete PR tree still has no Shopify-install function or nonce migration. Exact source binding, actor and approval remain open; the hosted transition does not establish signed-device, in-store, app-store or client acceptance. This reconciliation made no provider/database/payment mutation or client contact.

## Provider rollout and draft source advanced; launch remains NO-GO — 25 September 2026, 12:09 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 remains open, draft, mergeable / `unstable` at unsigned `cb3d9b9d…` / tree `17e1cefc…`, now 110 commits / 195 files ahead of `main` and eight commits / 55 files beyond `3cd36e4f…`. The bounded source tranche adds release/account-recovery hardening, Square food metadata, provider-readiness and merchant-review material. Its `CURRENT-STATUS.md` says launch is NO-GO and claims broad local/live checks; this reconciliation verified the record only and did not rerun it. Both hosted checks were blocked before runner start by the Actions budget, with no review or head deployment.
- Hosted Supabase now reports `square-api` v19, `square-sandbox` v15, `shopify-api` v17, `account-deletion` v1 and new `shopify-install` v1, plus new ledger entries `20260925090131_account_deletion_deadline` and `20260925110306_shopify_install_nonces`. The new `shopify_install_nonces` table reports RLS enabled.
- This rollout has a material provenance gap: the current complete PR tree has no `shopify-install` function or `shopify_install_nonces` migration, and its deadline migration is versioned `20260925085927` rather than the hosted `20260925090131`. Exact SQL equivalence, source binding, actor and approval remain unverified. Hosted progress therefore does not establish signed-device, in-store, app-store or client acceptance.
- The separate public preview remains byte-unchanged and unbound to the PR. Paid terms are unchanged. This reconciliation made no merge, deployment, provider/database/payment mutation, app-store action or client contact.

## Hosted backend rollout is visible; release acceptance remains open — 25 September 2026, 00:29 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 is open, draft and mergeable / `unstable` at unsigned `3cd36e4f…` / tree `3caa4ab0…`, now 102 commits / 157 files ahead of `main` and 13 commits / 40 files beyond `6b3a1fd3…`. The new source covers café cancellation/payment recovery, connected onboarding/release preparation, local-backend/store-preflight tooling and audits. It has no review, status context or head deployment; both checks still fail before runner start because the Actions budget is blocked.
- Local custody did not produce a new accepted candidate: the usual-moment checkout remains `49f19d44…` with eight untracked evidence videos, while the no-upstream visual-quality checkout is now `12a7bd57…` / tree `62a80f12…` with 56 status entries and one modified tracked file (`README.md`). This supersedes its older `586546fa…` base description without implying progress or acceptance.
- Hosted Supabase now lists all five 24 September branch migrations as applied and exposes active `account-deletion` v1 alongside `square-api` v18, `square-sandbox` v14 and `shopify-api` v16. All 11 listed public tables report RLS enabled. This supersedes the prior absence statement. Every listed function reports platform `verify_jwt: false`; application-level authorization, exact source binding, deployment actor/approval and live deletion/payment/order behavior remain unverified.
- The separate public preview remained byte-identical across three reads at HTTP `200`, 260,281 bytes / SHA-256 `e744f48d…`, with no PR binding. Hosted rollout is operational progress, not signed-device, in-store, app-store or client acceptance; paid commercial terms are unchanged. This reconciliation made no merge, deployment, provider/database/payment mutation, app-store action or client contact.

## Simulator audit entered source custody; hosted and client acceptance remain open — 24 September 2026, 20:19 IST

- Draft PR #1 advanced one unsigned audit-only commit to `6b3a1fd3…` / tree `ddd7dd39…`, now 89 commits / 141 files ahead of unchanged unsigned `main` and nine commits / 11 files beyond `ded55d56…`.
- The committed audit records an iOS 26.5 Simulator build against source `85febb8`, Square sandbox quote/recovery/decline/success/history, read-only Shopify and Acuity flows and GET-only Acuity links. It also records that Shopify checkout, deletion submission, refunds, 3DS, accessibility, Android and physical devices were not tested, and that hosted functions did not include branch server changes. This run verified the audit record and source lineage only; it did not reproduce those observations.
- The audit’s manage-mode prompt finding predates the `7ad9467f…` fix recorded at 20:14. Current checks again failed before runner start because the Actions budget is blocked; no review, status context, head deployment, hosted rollout, signed-device, in-store, app-store or client acceptance exists.

## Bookings-page close correction advanced the draft branch; hosted release state did not — 24 September 2026, 20:14 IST

- Private GitHub `main` remains unsigned `a61ff082…`. Draft PR #1 advanced one verified-signature commit to `7ad9467f…` / tree `fc50bf7d…`, now 88 commits / 141 files ahead of `main` and eight commits / 11 files beyond `ded55d56…`.
- The exact two-file change closes the Acuity bookings-management page without the misleading leave-booking prompt, retains that warning for a booking in progress and adds two matching component tests. It was not independently rerun or rendered here. Hosted checks again failed before runner start because the Actions budget remains blocked; no review, status context or head deployment exists.
- Hosted Supabase and public preview evidence remain unchanged from 20:07. This is source progress, not release acceptance; no merge, deployment, provider/database/payment mutation, signed-device, in-store, app-store or client acceptance occurred.

## Third review-remediation tranche advanced the draft branch; hosted release state did not — 24 September 2026, 20:07 IST

- Private GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and mergeable at verified-signature head `85febb86…` / tree `c290c854…`, now 87 commits / 141 files ahead of `main` and seven commits / nine files beyond `ded55d56…`. It has no GitHub review or head deployment; its two checks did not start because the Actions budget blocked runner use.
- The new committed source and audit record three successive review corrections for Shopify confirmation and identity recovery, checkout-open-time guarding and native-payment lifetime, plus fail-closed Square cancellation retention. The source-authored audit claims the new regressions pass and `pnpm check` completed across contract, API, mobile, portal and database suites; this run verified exact source records only and did not independently rerun them or exercise a native checkout, signed build, device, till, payment, booking or provider account.
- Hosted Supabase metadata is unchanged at five applied migrations through `20260923182949_shopify_checkout_storage`, active `square-api`, `square-sandbox` and `shopify-api`, and no five newer branch migrations or `account-deletion`. The separate public preview remains byte-unchanged and unbound to the PR.
- This is source progress, not release acceptance. Production writes remain disabled; hosted deployment, merchant decisions/secrets, real order/refund and staff/till evidence, signed-device acceptance, privacy/store declarations, app-account ownership, submission and client acceptance remain open. The paid commercial terms are unchanged.

## Draft integration branch expanded; hosted release state did not — 24 September 2026, 16:12 IST

- Private GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 remains open, draft and mergeable at GitHub-verified head `ded55d56…` / tree `a6c477bc…`, now 80 commits / 140 files ahead of `main` and 72 commits / 115 files beyond the prior `ed454ea…` checkpoint. It has no review or head deployment.
- Source-authored remediation records claim the independently identified commerce, session, deletion, Acuity and release-config defects are now regression-covered and that a fresh checkout passed local formatting/lint/typecheck/build, 668 tests plus one skipped live test, migration scenarios, mobile exports and dependency audit. This run verified exact committed records only. The two GitHub checks did not start because the Actions budget blocked runner use; their red state is not a code-test result.
- Direct Supabase metadata confirms the hosted Here’s Health project is healthy but still has only the five migrations through `20260923182949_shopify_checkout_storage` and active `square-api`, `square-sandbox` and `shopify-api`; all five newer branch migrations and `account-deletion` are absent. The ten listed public tables have RLS enabled. No application rows, Shopify/Square customer data or Acuity booking data were read.
- This is substantial source progress, not release acceptance. Production writes remain disabled; hosted deployment, merchant decisions/secrets, real order/refund and staff/till evidence, signed-device acceptance, privacy/store declarations, app-account ownership, submission and client acceptance remain open. The paid commercial terms are unchanged.

## Draft Shopify/release integration is in review, not on main — 24 September 2026, 00:14 IST

- Private GitHub `main` remains unsigned `a61ff082…` / tree `6b874f03…`. Draft PR #1 is open and mergeable / `CLEAN` at unsigned `ed454ea…` / tree `5abab226…`, eight commits / 46 files ahead, with Shopify mobile/backend, checkout-recovery and guarded release-shell changes. It is not merged.
- The exact head contains audit records claiming merchant-approved Shopify/Supabase setup, test webhooks, a no-payment cart, simulator catalogue/basket proof, passing source checks and an unsigned simulator Release build. Those are verified source assertions, not independently rerun provider, test, build, signed-binary or physical-device evidence.
- GitHub exposes no check runs, status contexts or deployments for the PR head. The public preview still renders separate sample data and has no binding to this branch. Checkout/order/fulfilment, deletion/privacy consistency, signing and app-account ownership, real-device acceptance, store submission and client acceptance remain open; the paid commercial terms are unchanged.

## App-specific privacy notice published; release assurance remains open — 23 September 2026, 20:17 IST

- A source-bound Here’s Health app privacy notice now renders at `https://www.donworthstudio.ie/privacy` from Donworth site commit `11491d01…` / tree `ad1f6474…` and Ready Production deployment `dpl_FirzuiXX6Wj1x1HBdzADpMwa4nsG`. Direct readback returned HTTP `200`, 14,299 bytes and SHA-256 `188f3836…`; Chromium rendered the dated notice and “Privacy policy.” heading.
- The live page names Tynestyle Trading Ltd trading as Here’s Health as operator, describes Donworth Studio as developer and Google Play developer-account name, and links to the existing website policy. These are published assertions only: client/legal approval, controller/processor allocation, account ownership, build/data-flow accuracy, store declarations and deletion-path behavior were not independently established.
- This closes the prior observed absence of an app-specific notice on the inspected public surfaces, not the privacy release gate. The apex `/privacy` route remains `404`, app source remains unsigned `a61ff082…` with conflicting source-authored test totals, and no physical-device, production/app-store or client-acceptance gate advanced.

## Remote-source fast-forward; acceptance remains separate — 19 September 2026, 20:14 IST

- Canonical private GitHub `main` advanced linearly by three unsigned commits to `a61ff0825f338b4d0fad531eab0675cfc4015af4` / tree `6b874f03e84123a206cfabc12695cfec19b1da2d`. The 47-file range adds Shopify Storefront, checkout/order persistence, signed webhooks, deterministic tests and migration `20260919131500_shopify_checkout_storage.sql`; the tree now has 415 tracked blobs.
- This fast-forward remains on the separately authored remote lineage and does not inherit the accepted local checkpoint. The source's own evidence now conflicts: `CURRENT-STATUS.md` claims 494 passing tests, while the committed summary totals 481 and still names `26696615…` as its verification base. Those are source-authored records, not independently rerun evidence.
- The public preview remains byte-unchanged and separate at HTTP `200`, 260,281 bytes and SHA-256 `e744f48d…`. Independent exact-artifact review, merchant/provider acceptance, physical-device proof, production/app-store release and client acceptance remain open; commercial terms are unchanged.

## Canonical source-custody change — 19 September 2026, 12:19 IST

- The canonical private GitHub repository is no longer empty. Direct readback exposes unprotected `main` at `2669661562e45744afeb6fa0f0aad2992a4d3eb1` / tree `ee077bbc17687a46bf332b0789d3cdafdcc827ab`, plus `review/integrated-simulator` and `codex/heres-health-owner-preview` branches.
- Remote `main` is a ten-commit, 401-file lineage with no merge base to clean local canonical `9b842db0…` or clean independently accepted checkpoint `747bbacc…`; a direct comparison against the accepted tree spans 311 files. The remote therefore does not inherit the prior exact-artifact acceptance.
- The remote contains self-recorded build/provider evidence, including a 464-test summary, Square-sandbox and read-only Acuity records, and mobile-export hashes. This run verified repository custody only, not those provider actions or test/build results. The public preview remains on separate unbound Ready deployment `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx` with unchanged bytes and no Git metadata. Physical-device, production, app-store and client-acceptance gates remain open.

## Paid commercial terms — 16 September 2026

Sam’s current correction: Here’s Health has paid a **€5,000 + VAT deposit**. The app **is being built now**. **€10,000 + VAT** is due when the app is completed. Combined agreed fee **€15,000 + VAT**. Completion means the finished app; do not invent extra criteria. This supersedes the 5 September line that the owner was not yet fully committed and that work was only pre-sales proof. See [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]].

## Public-preview custody drift — 7 September 2026, 20:03 IST

- The public preview alias moved from independently accepted `dpl_GeDQdf2EPTTeDNccui5uggNn7R5F` to Ready deployment `dpl_HKAdgvTHYqKKTK6ae9vh7sE9PoSx`, created at 10:09:57 IST. Current root SHA-256 `e744f48d…` does not match accepted `49f19d44…` root `4e727d0f…`; no immutable source or review receipt was exposed for the replacement. Treat the current hosted preview as available but unbound and unaccepted until exact provenance and rendered journeys are independently verified.

## Verified directed-film checkpoint — 7 September 2026, 04:04 IST

- Final silent 34.0-second portrait film `4dd37679ab3c9c9038efca71273078734fd96834fb165b8d5365d6ff650c4ec6` is independently accepted with conditions after the preceding stills-based replacement `b084e971…` was rejected and the continuous-motion capture root was repaired. The reviewed final preserves genuine native Home/photo motion and the causal Large/Coconut/Save/Replace/saved-usual path; bounded art direction and format/browser acceptance do not establish Shapelayer parity or Sam's aesthetic approval.
- Direct artifact readback matched `6,823,867` bytes, `1080×1920`, 60 fps, silent H.264 High, `yuv420p` limited-range BT.709 and source `49f19d44…` / tree `bd9082cb…`. The board records Sam-only Telegram presentation as `message_id 28974`; this proves upload metadata, not phone playback or client delivery.
- The isolated preview remains unchanged and HTTP `200` at accepted root SHA-256 `4e727d0f…`. Physical iPhone, real platform/unfurl rendering, Sam taste approval and any Conor send remain open, as do Square/Shopify/Acuity, staff, account, app-store, legal/commercial and production gates.

## Verified preview checkpoint — 7 September 2026, 00:02 IST

- Corrected pre-sales candidate `49f19d44f199ae8598cb2e724f84327dc65557eb` / bundle SHA-256 `50004ccaffc88c99b6bd49030f6f7ceccf5fe1b1bd6d5227c78c942fc51f10f5` is independently accepted with conditions and now serves from the isolated `https://heres-health-preview.vercel.app/` deployment `dpl_GeDQdf2EPTTeDNccui5uggNn7R5F`. Vera independently matched all 76 hosted runtime files and exercised anonymous Chromium/WebKit mobile journeys; direct readback at this checkpoint returned HTTP `200` with accepted root SHA-256 `4e727d0f8e7ba27644551c3858835fbcfb5f8152c823d1f111266fdc1b85aeed` and Vercel reported the exact deployment `READY`.
- This closes the rejected `a56fe56…` motion/share/clipping gate and supersedes the older `12a7bd5` public baseline. It does not close physical-iPhone or real social-unfurl proof. The protected original Here’s Health deployment remains separate.
- The latest independently reviewed video, SHA-256 `69345e5c…`, is a truthful walkthrough but explicitly **not ready to send** as Sam's directed launch film; follow-on task `t_d3f63524` was still running at 00:02 with no completed or reviewed replacement. No Conor contact, commerce transaction, account access or production integration occurred.

## Snapshot

Established Cork family business with multiple health-food stores, cafés, an online Shopify store and a sauna/cold-plunge offering. A new café is expected in roughly two months, according to Sam’s 29 August meeting record. Sam was introduced to owner Conor by Keith Crowley.

## Commercial correction and preview state — 6 September 2026

### Evening delivery checkpoint — 20:29 IST

- The separate public preview now serves the independently reviewed 159-slot imagery baseline at commit `12a7bd57c036a52ecc21eb4860d6990afb4bbf65`; anonymous live readback matched the deployed root to that exact source hash and the release evidence records 73 hosted image assets. This supersedes the incomplete local-imagery state below, but remains sample-data pre-sales proof rather than production authorization.
- Sam's later physical-phone screenshot exposed a bottom-navigation gap. Local fix `14f1162bb827120b0e9ccfccc3ef0355e1274b23` has an independent accept-with-conditions verdict and rendered Chromium/WebKit geometry, but has not been published and still needs a same-browser physical iPhone/Telegram check.
- Forge produced clean local candidate `a56fe568772753270cbb42060cffedecb83e41b0`, combining the accepted nav fix with the approved browser-local “Your usual” journey, motion code and branded share metadata. Vera task `t_76caa3a8` reproduced the usual journey, 159 imagery slots, café “Added ✓” and nav flush, but rejected the artifact because motion never binds, the share image contains a transient toast, and detail copy is clipped/overpainted. Rework task `t_1446610d` is running; no repaired commit exists. The rejected candidate was not pushed or deployed, and no Conor contact, live ordering/payment, account sync or production integration occurred.

- Sam corrected the engagement status on 5 September: the owner is not yet fully committed. The 29 August “proceeding” record below remains provenance, but current delivery is a bounded pre-sales browser preview intended to earn a firm commission, not production authorization.
- Sam approved publication of exact reviewed browser-preview source `586546fac563de588507210dcedc6d1b77b1a9d2` as a separate seven-day Vercel preview. Live inspection confirms preview deployment `dpl_5XhpC2q6vwzqp6r3xzE6XJuDwN59` remains Ready and the existing production presentation remains separate and Ready.
- Sam’s subsequent physical-phone screenshot rejected the published preview’s visual quality because product-card alignment and blank image tiles were obvious. A local refinement now preserves the accepted Claude design direction and fixes some geometry/media handling, but it remains uncommitted, unpublished and incomplete: its fail-closed imagery inventory records 91 unresolved slots across 31 entities.
- The next content gate is explicit. Use verified current merchant product identities and clearly labelled illustrative café photography only if Sam authorizes that correction, otherwise obtain exact client-supplied photography. No replacement deployment or Conor contact occurred.

## Current engagement

- Sam recorded after the 29 August owner meeting that Here’s Health and Donworth Studio are proceeding with the project.
- The owner effectively approved the existing prototype direction and requested no material design changes.
- Intended first-release direction: iOS and Android app covering Shopify retail, Square-backed café ordering, sauna/cold plunge, accounts, offers/rewards, click and collect/takeaway and relevant notifications.
- Technical discovery remains mandatory before final scope, release timing or integration commitments are locked.
- Shopify, Square, Acuity, Westron, Planday, BrightPay and the existing loyalty system were identified as relevant systems.
- Conor supplied Sam with login information for Shopify, Square and Acuity. The accounts still require live inspection; credentials must not be stored in Ground Zero, chat or source control.
- Acuity is reported to integrate with Square. Existing loyalty is believed to be tied to Shopify. Both claims remain technically unverified.
- Target discussed: app release roughly three weeks before the new café opens, subject to technical proof and third-party review dependencies.
- The café opening itself is not fixed; current expectation is roughly two months, dependent on building work.
- Operational decisions involve Conor, his brother and his father. Product and journey acceptance will be shared principally between Sam and Conor.

## Product boundary

- Square remains source of truth and transaction system for café catalogue, ordering, payment and fulfilment.
- Shopify remains source of truth and transaction system for retail catalogue, inventory, basket, checkout and fulfilment.
- Café and retail baskets stay separate in version one.
- A unified customer-facing brand, profile, favourites area, history and notifications may sit above the two systems.
- Cross-system rewards unification is later-stage work and must not delay launch.
- Apple Developer and Google Play ownership is not yet decided. Client ownership, Donworth administration and any transfer obligation must be resolved explicitly before submission.

## Strategic value

- The existing Shopify business can make the app useful before the café opens.
- The café can provide a high-frequency retention loop and launch event.
- The project can become a flagship Donworth Studio case study and open a longer-term digital, AI and operations relationship.
- The 29 August meeting surfaced concrete follow-on opportunities in Westron pricing administration, rostering/payroll workflows, management information, marketing enablement and AI readiness; none should delay the app.

## Open questions

- What signed scope, support model and final acceptance owner apply to the recorded €15,000 + VAT engagement?
- What Square account, location, hardware, catalogue, loyalty and fulfilment setup exists?
- What Shopify plan, account model, checkout configuration and API access exist?
- What is the exact café opening date and latest safe app-store submission date?
- What are the exact Acuity-to-Square, Westron, Planday-to-BrightPay and Shopify-linked loyalty architectures?
- Who owns operational acceptance, content, legal policies, app accounts and ongoing maintenance?

## Connected vault notes

- [[imports/heres-health-project-master-brief-2026-08-29]] — Sam-supplied post-meeting master brief
- [[imports/heres-health-meeting-record-addendum-2026-08-29]] — Sam’s corrections on access, Acuity, decision-makers and app-store ownership
- [[project_state/heres-health-app]] — live engagement state
- [[items/heres-health-week-one-discovery-and-technical-proof]] — immediate milestone
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — strategic and delivery brief
- [[imports/heres-health-app-project-brief-2026-08-13]] — supplied source record
- [[people/conor-heres-health]] — owner and primary contact
- [[people/keith-crowley]] — referral source
- [[context/business-opportunities-moc]] — opportunity map
- [[people/sam-donworth]] — delivery lead

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
- [[briefs/2026-09-01-ios-physical-device-qa-lab-opportunity]]
- [[briefs/2026-09-03-heres-health-marcel-ios-design-reference]]
- [[briefs/2026-09-05-heres-health-notification-state-and-consent-receipt-gate]]
- [[briefs/2026-09-29-heres-health-privacy-policy-audit]]
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
- [[briefs/wiki-refiner-2026-09-29]]
- [[briefs/wiki-refiner-2026-09-30]]
- [[briefs/wiki-refiner-2026-10-01]]
- [[briefs/wiki-refiner-2026-10-02]]
- [[briefs/wiki-refiner-2026-10-03]]
- [[briefs/wiki-refiner-2026-10-04]]
- [[briefs/wiki-refiner-2026-10-05]]
- [[companies/donworth-ai-solutions]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]]
- [[items/donworth-publishable-and-outreach]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/heres-health-westron-price-file-diff-proof]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-project-state-reconciler]]
- [[people/conor-heres-health]]
- [[people/keith-crowley]]
- [[people/sam-donworth]]
- [[project_state/heres-health-app]]

