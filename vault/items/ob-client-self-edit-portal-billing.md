---
id: ob-client-self-edit-portal-billing
company_id: openbook
domain: bizdev
title: OpenBook client self-edit portal plus Stripe billing
rationale: OpenBook already has one live customer and a second prospect (Grace), but charging is blocked by a promised light self-edit portal. This is the single highest-value near-term revenue unblock in the portfolio.
council_note: New idea from 24 July reset gap analysis · Effort S-M
effort: M
impact: 92
state: building
is_one_thing: false
source: ground-zero-incubation 2026-07-24
run_date: "2026-07-24"
created_at: "2026-07-24T06:30:00+01:00"
updated_at: "2026-09-23T00:16:00+01:00"
sync_status: "Checked 2026-09-23 00:16 IST. Empire Gym production moved to Ready CLI deployment `dpl_Es9HL…`, whose metadata names GitHub-resolvable `feat/empire-gym-live` commit `b53f724…`; the clean remote branch is now `603ee53…`, one commit past the deployed tree. GymMaster CTAs and the admin login remain rendered, but authenticated editing/photo isolation, subscription/access/payment states and downstream enrollment remain open."
---

## Reconciliation checkpoint — 23 September 2026 00:16 IST

Vercel now binds Empire Gym production to Ready CLI deployment `dpl_Es9HLq7XNSk5McaGWtCAvHpDuqGu`, superseding source-unbound `dpl_7CLd…`. Deployment metadata names remote `feat/empire-gym-live` commit `b53f724b53e5108dbb27f05d5164c45d8b07f50b` / tree `ecf9a2fc70b7834bc3c9c1206e3667bdba8594c6`; that commit resolves in GitHub. The clean local and remote branch now agree at `603ee53…` / tree `e945f4f2…`, one cleanup commit after the deployed tree, and diverge from template `main` `3e6bfa11…` from common base `a34f257…`. Three public reads were stable at HTTP `200`, 125,521 bytes and `ce305ce…`; Chromium rendered the five GymMaster membership CTAs, GymMaster day pass and ADMIN entry, while `/dashboard/login` rendered the email/password sign-in surface. Keep this item `building`: no credentials were entered and authenticated text/photo editing, upload behavior, tenant isolation, password reset, subscription/access states, downstream enrollment, checkout/payment behavior and independent exact-artifact acceptance remain unverified. No repository, deployment, DNS, database or payment mutation occurred.

## Reconciliation checkpoint — 22 September 2026 20:21 IST

Two anonymous root readbacks returned HTTP `200` and 125,521 bytes with differing SHA-256 values `7fbf8c74…` then `57b72e35…`, while both contained 12 raw `gymmasteronline.com` markers; exact bytes are therefore request-variant rather than a stable deployment identity. A real Chromium render of `https://www.empiregym.ie/` showed five membership CTAs and one day-pass CTA targeting `empiregym.gymmasteronline.com`; the ADMIN link still reaches the rendered `/dashboard/login` sign-in surface. No destination, checkout, authenticated edit or upload was opened. Vercel still identifies source-unbound Ready deployment `dpl_7CLdCxkTwz9niJgtELKpqn8d9r6R`. Template `main` advanced by one verified commit to `3e6bfa1114f0aa2e0e5a6e3404944ee29cf92662` / tree `5eb0e759b1632fc8c85a779985dd3abea1554f5b`; the commit modifies only `scripts/empire-gym-seed.sql` to replace nine membership URLs. The stale base remains conflicted at `b1f0d6c…`, while clean no-upstream candidate `658e67a…` and remote `main` now diverge from common base `a34f257…`. Keep this item `building`: GymMaster link publication is now rendered, but authenticated text/photo editing, tenant isolation, subscription/access states, downstream enrollment, checkout/payment behavior and exact deployment-source provenance remain unverified. No credentials were entered and no repository, deployment, DNS, database or payment mutation occurred.

## Reconciliation checkpoint — 22 September 2026 04:21 IST

An initial anonymous request to `https://www.empiregym.ie/` returned application HTTP `404`, 5,483 bytes, SHA-256 `4c4dcd62a71b02e23b5855e5a056296ade0dac39390e717fd32767c6047e3b0e`, title “Donworth Studio Client Site Template”, while `/dashboard/login` returned HTTP `200`. Repeated requests later in the same bounded reconciliation returned the recorded HTTP `200`, 125,017-byte root at exact SHA-256 `5164666d2efd493840b1c2fe47bcafe9d0d256b813568f109011faa967b2b937`, and the apex redirected to the same `www` response. Vercel still bound all live aliases to Ready source-unbound deployment `dpl_7CLdCxkTwz9niJgtELKpqn8d9r6R`; template `main` remained `a34f257`, OpenBook `main` `c72bf48` with two open pull requests / two non-PR issues, and no deployment or repository identity changed. Preserve this as a transient availability inconsistency, not a proven persistent outage or repair. Keep this item `building`: cause/duration, authenticated editing, tenant/photo behavior, subscription states, access gating, GymMaster publication, checkout acceptance and deployment source provenance remain unverified. No credentials were entered and no repository, deployment, DNS, database or payment mutation occurred.

## Reconciliation checkpoint — 21 September 2026 21:07 IST

Vercel now binds `https://www.empiregym.ie/` to Ready production deployment `dpl_7CLdCxkTwz9niJgtELKpqn8d9r6R`, created 21 September 20:36:56 IST. The inspected deployment record exposes no Git metadata, so exact source and independent review provenance remain unavailable. Anonymous root readback returned HTTP `200`, 125,017 bytes and new SHA-256 `5164666d2efd493840b1c2fe47bcafe9d0d256b813568f109011faa967b2b937`. A real Chromium render showed event/lesson CTAs, five visible `Join now →` membership links, one Stripe day-pass link, no GymMaster marker and an `ADMIN` link. The anonymous `/dashboard` route redirected to `/dashboard/login`, which rendered “Sign in to edit your website”, email/password fields, Sign in and Forgot your password. No credentials were entered, no authenticated edit or upload was attempted, and no purchase link or checkout was opened. Direct repository custody remains unchanged: template `main` `a34f257`; conflicted stale base `b1f0d6c`; clean unpublished GymMaster worktree `658e67a` / tree `0f84cc3`, three commits beyond template `main` with no upstream; OpenBook `main` `c72bf48` with two open pull requests and two non-PR issues. Keep this item `building`: an admin entry/sign-in surface is now rendered in production, but authenticated text/photo editing, tenant isolation, subscription states, access gating, GymMaster publication, checkout acceptance and deployment source provenance remain unverified. No repository, deployment, DNS, database or payment mutation occurred.

## Reconciliation checkpoint — 21 September 2026 08:07 IST

Vercel now binds `https://www.empiregym.ie/` to Ready production deployment `dpl_G4fgJZkSaPSHY6TDpwZAdB5NJDJ5`, created 20 September 14:21 IST from `source: cli`; authenticated deployment metadata is empty, so exact Git source and independent review provenance are unavailable. Anonymous root readback returned HTTP `200`, 125,017 bytes and SHA-256 `15a138eb2cfc2152eccad185880b590f4690cba6d9ede1a43b2cf883718676d7`. A rendered browser inspection showed the event and lesson CTAs, five visible `Join now →` membership links and one Stripe day-pass link, with no rendered GymMaster marker. No purchase link or checkout was opened, so payment behavior is not accepted. Direct repository custody is unchanged: template `main` remains `a34f257`; the base checkout remains at `b1f0d6c` with the same unresolved About conflict plus two staged files; the clean unpublished GymMaster worktree remains `658e67a` / tree `0f84cc3`, with no upstream or remote containment and three local commits beyond current template `main`; and OpenBook `main` remains `c72bf48` with two open pull requests and two open non-PR issues. Keep this item `building`: deployment source provenance, the minimum content model, tenant isolation, live editing/photo handling, subscription states, GymMaster publication and checkout acceptance remain unverified. No repository, deployment, DNS, database or payment mutation occurred.

## Reconciliation checkpoint — 5 September 2026 16:04 IST

Direct GitHub `sam-evolv/OB-ClientSiteTemplate` `main` is `a34f257`, 25 commits beyond the base checkout's stale `b1f0d6c` tracking state. The base checkout retains one unresolved About-component index conflict plus two staged files and has no active merge/rebase/cherry-pick marker. The clean unpublished GymMaster worktree remains at `658e67a` / tree `0f84cc3`, with no upstream or remote head; Git proves current remote `main` is its ancestor and the candidate is three local commits ahead. The exact public site returned HTTP `200`, with event/lesson CTAs, ten `Join now` markers, six distinct Stripe anchors and no `GymMaster` marker. Browser rendering and checkout were not exercised. Keep this item in `building`: the minimum content model, tenant isolation, live editing/photo handling, subscription states, deployment provenance and payment behavior remain unverified.

## Reconciliation checkpoint — 5 September 2026 08:12 IST

The clean unpublished GymMaster worktree is again available at `/Users/samdonworth/GroundZero/worktrees/empire-gymmaster-20260814`, registered under `/Users/samdonworth/OB-ClientSiteTemplate`, and unchanged at `658e67a` / tree `0f84cc3` with no upstream or remote containment. This corrects only the 2 September source-custody gap; it is not deployment or live GymMaster acceptance. The exact public site returned HTTP `200`, with fetched HTML still exposing event/lesson CTAs, ten `Join now` markers and six `buy.stripe.com` links, while no `GymMaster` marker was present. Browser rendering and checkout were not exercised because the browser provider exposed no CDP endpoint. Keep this item in `building`: the minimum content model, tenant isolation, live editing/photo handling, subscription states and payment behavior remain unverified.

## Reconciliation checkpoint — 2 September 2026 00:15 IST

GitHub `main` remains `c72bf48`. The detached local checkout remains at `7df5aec` with 14 status entries. The previously recorded accepted GymMaster worktree at `/Users/samdonworth/GroundZero/worktrees/empiregym-opendevs` is absent and no longer registered in the live OpenBook worktree inventory, so its prior acceptance cannot be treated as a currently available checkout. The exact named site `https://www.empiregym.ie/` resolves and returned HTTP `200`; fresh extraction still includes event/lesson CTAs, five membership offers, a day pass and direct Stripe links. Browser rendering and checkout were not exercised. Keep this item in `building`: this checkpoint proves a current source-custody gap only, not the minimum content model, tenant isolation, client editing, photo handling, subscription state or payment behavior. No DNS, deployment, database, payment or repository mutation occurred.

## Reconciliation checkpoint — 30 August 2026 20:02 IST

The current fetched `https://www.empiregym.ie/` page returned HTTP `200` and exposes event and lesson CTAs plus five membership or pass offers with direct `Join now →` or day-pass Stripe links. Raw served HTML contains `Stripe` and `Join now` markers and no `GymMaster` marker. This corrects the 28 August public-content description, but the browser provider supplied no CDP endpoint, so no fresh rendered interaction or checkout acceptance is claimed. GitHub `main` remains `c72bf48`; the detached dirty local checkout remains at `7df5aec`; and the clean unpublished GymMaster worktree remains at `658e67a` with no upstream. This does not prove the minimum content model, tenant isolation, live client editing, photo handling or verified subscription states. Keep the item in `building` and preserve the sequence below.

## Reconciliation checkpoint — 28 August 2026 00:07 IST

The current rendered Empire Gym homepage shows “TAKING 2026 DATES”, “Book your event →” and “Book a lesson”; the inspected semantic tree showed no visible “Join now”, Stripe or GymMaster marker. This corrects the earlier live-homepage description but does not prove either booking completes, the minimum content model, tenant isolation, live client editing, photo handling, billing states, or GymMaster absence outside the homepage. Keep this item in `building` and preserve the sequence and acceptance gates below.

## Reconciliation checkpoint — 24 August 2026 16:03 IST

The local checkout at `/Users/samdonworth/OpenBook` is detached ten commits behind GitHub `main` and has uncommitted changes touching dashboard website actions, domain actions and site-card UI. This is relevant source for the self-edit slice but does not prove the minimum content model, tenant isolation, live rendering or Stripe subscription states. No test, build, webhook exercise, charge, deployment or rendered customer acceptance occurred during reconciliation. Keep the item in `building` and preserve the sequence below.

## Opportunity size
Direct and immediate. This is not a speculative wedge, it is the release valve on revenue that already exists. One customer is live and Grace is a warm prospect. At €79/month, two to three customers cover most or all of the roughly €300/month AI and development subscription burn, which turns the portfolio cash-flow negative-to-neutral without new customer acquisition. Every additional venue on the same portal is near-pure margin because the content model is standardised.

## Technical approach
- Define the minimum content model first: the small set of editable fields (hero text, about text, opening hours, menu or service text) plus a photo set (add, replace, remove) per client site.
- Build a scoped self-edit portal so each client edits only their own site text and photos, with no code changes and no redeploy. Content should be data-driven from Supabase so edits render live.
- Enforce per-client permissions and tenant isolation so one client cannot see or edit another's content.
- Add Stripe monthly subscriptions at €79/month once the portal is usable and customer-facing terms are clear. Verify webhook and billing states (active, past_due, canceled) before charging anyone.
- Gate live-site editing on an active subscription so billing and access are one system.

## Risks
- Scope creep into a full CMS. The guardrail is the fixed minimum content model, not an open page builder.
- Billing edge cases (failed payment, cancellation, refunds) charging or locking a client incorrectly. Mitigate by testing webhook states before go-live.
- Photo handling (size, format, storage cost) if uploads are unconstrained. Constrain dimensions and count.
- Charging before the portal genuinely removes the manual edit burden would break trust with the first customer.

## Effort
S to M. The content model and edit UI are a focused slice on the existing stack. Stripe subscription plus webhook verification is well-trodden. The work is bounded precisely because the content model is deliberately small.

## Market timing
Not timing-sensitive. This is an existing promise to an existing customer. The value is realised the moment charging starts, so the only clock that matters is Sam's weekend capacity.

## Connects to
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] — the decision that scopes this work
- [[briefs/2026-07-24-openhouse-openbook-reset]] — full context and weekend order
- [[items/ob-prepared-leadgen-loop]] — the follow-on that this unblock gates
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status
- [[goals/ob-supply]] — protects and grows paying venue count


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-24-openhouse-openbook-reset]]
- [[briefs/2026-09-27-openbook-gymmaster-membership-attribution-proof]]
- [[companies/openbook]]
- [[context/dashboard]]
- [[context/index]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[goals/ob-supply]]
- [[items/ob-prepared-leadgen-loop]]
- [[items/ops-project-state-reconciler]]
- [[project_state/ob]]


## Recommendation
This is the clearest promotion candidate in the OpenBook queue and is already committed in the 24 July decision. Treat it as an active build, not a proposal. Sequence: minimum content model, then scoped edit portal tested against the live customer site, then Stripe €79/month with verified webhook states before any charge. Do not expand into a general CMS.
