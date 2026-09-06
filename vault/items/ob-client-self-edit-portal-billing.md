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
updated_at: "2026-09-05T16:04:00+01:00"
sync_status: "Checked 2026-09-05 16:04 IST. Direct template main is now `a34f257`, 25 commits beyond the stale conflicted base checkout; the clean unpublished GymMaster candidate remains three local commits ahead with no remote head. The public site still exposes event/lesson and six Stripe anchors, not GymMaster. Deployment, client self-edit, subscription and live GymMaster acceptance remain open."
---

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
- [[companies/openbook]]
- [[context/dashboard]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[goals/ob-supply]]
- [[items/ob-prepared-leadgen-loop]]
- [[items/ops-project-state-reconciler]]
- [[project_state/ob]]


## Recommendation
This is the clearest promotion candidate in the OpenBook queue and is already committed in the 24 July decision. Treat it as an active build, not a proposal. Sequence: minimum content model, then scoped edit portal tested against the live customer site, then Stripe €79/month with verified webhook states before any charge. Do not expand into a general CMS.
