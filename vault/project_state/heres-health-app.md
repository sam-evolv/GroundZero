---
id: heres-health-app
company_id: heres-health
headline: The public preview serves the independently reviewed 159-slot imagery baseline at `12a7bd5`; local nav fix `14f1162` is accepted with conditions, while Vera found `a56fe56` does not bind its motion runtime and is not releasable as submitted.
valid: true
updated_at: "2026-09-06T20:29:00+01:00"
role: project-state
status: active-discovery
---

# Here’s Health app project state

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

- The canonical repository, protected delivery base and independently accepted local checkpoint are confirmed, but a writable remote branch remains unresolved because the remote exposes no refs or branches. GitHub metadata names `main` as the default branch while the `main` commits endpoint reports an empty repository; preserve this operational contradiction. The local checkpoint must not be pushed, installed or released without Sam’s explicit current approval.
- No supplied Shopify, Square or Acuity account has yet been inspected or verified.
- No sandbox catalogue, order, payment, fulfilment or checkout path has been proven.
- No café hardware or staff workflow has been observed.
- No legal, privacy, allergen, consent or accessibility materials have been reviewed.
- Apple Developer and Google Play ownership is not yet decided; the ownership, administration and transfer position must be resolved before submission.
- No exact budget, signed scope, support agreement or acceptance owner is recorded.
- The whole-brand app direction is now recorded as accepted in principle by the owner, but exact release scope and integration commitments remain subject to discovery.

## Active milestone

[[items/heres-health-week-one-discovery-and-technical-proof]]

Complete discovery and prove the critical integration path before locking scope, price or delivery promise.

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
- [[briefs/wiki-refiner-2026-08-30]]
- [[briefs/wiki-refiner-2026-08-31]]
- [[briefs/wiki-refiner-2026-09-01]]
- [[briefs/wiki-refiner-2026-09-02]]
- [[briefs/wiki-refiner-2026-09-03]]
- [[briefs/wiki-refiner-2026-09-04]]
- [[briefs/wiki-refiner-2026-09-05]]
- [[companies/donworth-ai-solutions]]
- [[companies/heres-health]]
- [[context/dashboard]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[items/donworth-publishable-and-outreach]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/heres-health-westron-price-file-diff-proof]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]
- [[people/conor-heres-health]]
- [[people/keith-crowley]]
- [[project_state/donworth-studio]]

