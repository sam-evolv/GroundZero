---
title: OpenHouse YC portal release-readiness audit
date: 2026-07-30
company_id: openhouse-ai
status: blocked-do-not-publish
---

# OpenHouse YC portal release-readiness audit

## Decision

Do not give YC the current showhouse account and do not merge or deploy the current `claude/new-session-0jdf52` branch to `main`.

The new My Home direction is strong and the candidate compiles, but the release is blocked by purchaser-authorisation failures, unsafe adjacent reviewer actions, unaudited document publication, incorrect fallback branding, visible layout defects, truth-labelling errors and an unmergeable branch composition.

Changing the showhouse email and password does not solve these problems. The purchaser portal currently treats the home identifier as a bearer credential in several paths. A separate reviewer email attached to the same record is also insufficient until server-side authorisation and reviewer isolation are fixed.

No account identity, production data, branch, main branch, Vercel alias or production deployment was changed during this audit.

## Provenance established

- Repository: `/Users/samdonworth/GroundZero/repos/property-assistant`
- Candidate branch: `claude/new-session-0jdf52`
- Candidate local HEAD: `08f64fa4`
- Tracked remote candidate: `origin/claude/new-session-0jdf52` at `25c40746`
- Candidate is one local commit ahead of its remote and has substantial uncommitted My Home work.
- Production branch: `origin/main` at `ad327a4b`
- Candidate merge base with `origin/main`: `602cbeb6`
- Candidate contains 38 branch-only commits, 50 changed files and roughly 5,926 inserted lines relative to the merge base.
- The branch mixes My Home with Cairn and Bayly assets, synthetic documents, Issues, demo-tour code, assistant changes, Places changes, seed scripts and unrelated product work.
- Production alias: `https://portal.openhouseai.ie`
- Vercel build logs for the production alias identify branch `main` and commit `ad327a4`.
- Private My Home preview: `https://property-assistant-mxx1852y3-openhouseais-projects.vercel.app`
- The private preview is an uploaded local-tree deployment rather than a clean Git commit deployment. It is evidence for visual review, not a reproducible release artifact.

## Current uncommitted candidate

The redesign currently exists across:

- `apps/unified-portal/components/purchaser/PurchaserMyHomeTab.tsx`
- `apps/unified-portal/app/homes/[unitUid]/page.tsx`
- `apps/unified-portal/lib/my-home/presentation.ts`
- `apps/unified-portal/scripts/smoke/my-home-presentation.smoke.ts`
- `apps/unified-portal/scripts/smoke/my-home-sparse-render.smoke.tsx`
- `apps/unified-portal/package.json`
- `package-lock.json`

The worktree also contains a modified generated `apps/unified-portal/tsconfig.tsbuildinfo`. It must not be carried into a release commit.

## Release-blocking security findings

### 1. Raw home identifiers grant purchaser access

`packages/api/src/qr-tokens.ts` accepts the raw `unit_uid`, raw unit UUID and colon-delimited token-shaped strings beginning with the unit identifier. Several routes call `validatePurchaserToken(token || unitUid, unitUid)`, making an omitted token equivalent to presenting the home identifier.

Required before reviewer access:

- fail closed when a purchaser credential is missing, expired, revoked, unpersisted or mismatched;
- derive the authorised unit exclusively from a server-validated credential or authenticated user context;
- make any showhouse exception an explicit server-side `external_demo/showhouse_safe` policy;
- test token A against unit B, missing tokens, forged prefixes, expired tokens and revoked tokens.

### 2. The home page resolves purchaser data without using the supplied credential

`apps/unified-portal/app/homes/[unitUid]/page.tsx` calls `/api/houses/resolve` with `token: unitUid`. The resolve route accepts raw UUIDs and human unit codes and returns purchaser identity, address, Eircode, development identifiers and sales or handover milestones.

Required:

- authorise before cache lookup and database access;
- return no purchaser or property data for an unauthenticated direct route;
- return a deliberately sanitised showhouse projection in external-review mode.

### 3. Chat scope is browser-controlled before reliable authorisation

The legacy chat route can accept browser-supplied unit, tenant, development and project context after invalid or missing token handling. Some early branches can persist messages before final authority is established.

Required:

- authorise first;
- derive all scope from the authorised server row;
- reject conflicting browser context;
- do not retrieve history, RAG documents, call a model or persist a message until authority and home scope are complete.

### 4. Documents are not explicitly published for purchaser or reviewer use

The purchaser document list admits broad project documents without a purchaser-publication or showhouse-safe marker. The download route accepts a document identifier after weak token validation and does not re-check unit, project, tenant, house type or publication eligibility.

Required:

- create an explicit `published_to_purchasers/showhouse_safe` policy;
- include only a reviewed synthetic or permissioned document set;
- reauthorise every download against the credential-bound home and publication policy;
- issue short-lived signed URLs rather than redirecting to stored file URLs.

### 5. Noticeboard exposes neighbours and allows production writes

The purchaser navigation exposes a development-wide noticeboard. It returns author names and unit or address labels and permits posts and comments.

Required for YC:

- remove the noticeboard from reviewer mode, or
- place the reviewer home in a fully synthetic isolated development containing no real residents;
- enforce read-only mode server-side for reviewer sessions.

### 6. Reviewer actions can alter state

Chat, home notes, information requests, issue and media creation, notification reads, notification preferences, push registration and noticeboard actions can write data.

Required:

- explicitly decide which reviewer actions are part of the demonstration;
- route them into an isolated synthetic dataset or a server-enforced reviewer sandbox;
- ensure no operational recipient, real resident, developer workflow or notification endpoint is affected;
- make reviewer access revocable and time-limited.

### 7. Adjacent unauthenticated agent APIs expose private applicant data

The code audit found unauthenticated applicant list and applicant detail paths that can expose or modify names, contact details, addresses, employment, income, pets, smoking, AML and reference status.

This is not part of the My Home demo, but it is an urgent production security issue and needs a separate hardening release before broadly publishing this application surface.

## Showhouse account conclusion

The founder-controlled showhouse record is not yet safe to hand to YC by changing its email and password.

Why:

- email ownership is not the effective security boundary;
- raw home identifiers and stored purchaser tokens remain reusable;
- logout does not reliably revoke all persisted access;
- the account can expose project-wide documents and noticeboard content;
- reviewer clicks can create production records or change state;
- code does not enforce synthetic or sanitised showhouse content;
- a separate reviewer identity would still inherit the same unsafe routes and actions.

The right target is a separate, revocable reviewer identity bound to one explicitly safe showhouse projection after the authorisation work is complete. If speed requires the existing showhouse identity, it may only be used after the same server-side controls, data scrub and action isolation pass.

## My Home product review

### What is strong

- The page makes the exact-home record tangible.
- Known, Unknown and Do next is a credible product primitive.
- Historical supplier evidence is labelled separately from simulated modelling.
- Heating, Solar PV and Water connect the record to documents and assistant actions.
- The energy and completeness sections communicate a compounding home record rather than a generic chatbot.
- Authenticated evidence recorded on 29 July says the showhouse contains 59 scoped documents and controlled issue evidence.

### Release blockers in the current UI

- The selected-system status sentence overflows and clips across the inspector header on both mobile and desktop.
- The status receives a green verified treatment even when evidence text says equipment is unverified or only a circuit label is known.
- Demo metadata can override the authenticated property address and development, allowing stale fixture identity to label the wrong home.
- Bill comparison assumes array order instead of sorting by validated period dates.
- Network, 401 and 500 failures collapse into “Your home record is being prepared”, misrepresenting an outage as incomplete developer data.
- Four or five systems can overflow the fixed-height mobile navigator.
- Sparse payloads can render an empty map and a `0/0` completion shell rather than one coherent empty state.
- Maps remains implemented but is no longer reachable from the mobile navigation or redesigned My Home surface.
- The page header falls back to a Cairn logo when a development logo is absent.
- The assistant independently falls back to Bayly branding when a development logo is absent.
- Assistant CTAs imply grounding in supplier bills and home-record evidence, but the safe minimal release does not yet prove that grounding.
- The page initially starts on Chat. A first-time intro and automatic demo tour then move the user between surfaces, which can make a fresh reviewer journey unpredictable.

### Visual evidence

Hydrated component renders were captured at 393 by 852 and 1280 by 900. The complete page looks substantially better than the current production portal, but the clipped status line is visibly broken at both sizes.

Local QA artifacts:

- `/tmp/openhouse-yc-my-home-hydrated-mobile-full.png`
- `/tmp/openhouse-yc-my-home-hydrated-desktop-full.png`
- `/tmp/oh-yc-demo-contact-sheet.jpg`

These are disposable audit artifacts, not publication assets.

## Portal entry review

Production currently presents two choices: My Home and Developer Portal.

The private preview presents five choices: My Home, OpenHouse Select, Estate Agent, My Energy System and Developer Portal. That makes the company look less focused and gives a reviewer more unrelated surfaces to explore.

For YC reviewer access:

- use a direct reviewer sign-in URL rather than the multi-product chooser;
- do not expose the developer, agent, care or Select entry points;
- redirect the authenticated reviewer directly to the one safe showhouse My Home experience;
- keep a clear sign-out path that revokes the reviewer session.

## Verification completed

Passed on the current dirty candidate:

- My Home presentation smoke test;
- My Home sparse-render smoke test;
- Longview showhouse fixture smoke test;
- dynamic demo-tour smoke test;
- unified-portal TypeScript check;
- unified-portal production build;
- `git diff --check`.

The current lint command is not a real gate. It launches interactive ESLint setup and then exits successfully because the package script uses `next lint || true`.

`npm audit --omit=dev` reports 37 production dependency findings:

- 4 critical;
- 10 high;
- 18 moderate;
- 5 low.

Direct critical or high packages include Next.js, jsPDF, Drizzle ORM, PostCSS, Sharp and xlsx. This needs scoped triage. Do not run a blind major-version audit fix before the YC release.

## Safest publication path

Do not merge, rebase or bulk cherry-pick the current demo branch.

Create a new integration branch from `origin/main` at `ad327a4b` and use a small reviewed commit series:

1. Purchaser authority hardening and foreign-unit regression tests.
2. Reviewer or external-demo policy with one-home scope, revocation and safe response projection.
3. Explicit purchaser and reviewer document-publication policy.
4. Server-enforced reviewer action policy or isolated synthetic write sandbox.
5. Minimal My Home read APIs.
6. Presentation helpers and focused tests.
7. Minimal shell and navigation integration against main.
8. Redesigned My Home component with the visual and truthfulness defects fixed.
9. Optional assistant actions only after home-record grounding is verified.
10. Private preview from a clean Git commit.
11. Authenticated desktop and phone audit from a fresh browser with the intended reviewer identity.
12. Foreign-home, direct-route, document-ID, noticeboard and write-action probes.
13. Production approval.
14. Merge to main.
15. Production deployment and logged-out plus authenticated smoke test.

## Explicit exclusions from the release PR

- Cairn and Bayly fallback logos;
- 34 Bayly PDFs and embedding scripts;
- Issues tab and Issues API unless the reviewer sandbox is deliberately included;
- Golden Home demo-tour code;
- broad assistant prompt, multimodal, Places or unrelated chat changes;
- fixture and production seed scripts;
- generated `tsconfig.tsbuildinfo`;
- unrelated lockfile churn;
- unrelated product chooser additions.

## Data and migration impact

The My Home UI itself does not require a database migration. The current energy endpoint expects `units.metadata.demo_home`, while home-model reads existing unit, unit-type and room-dimension records.

Before any data operation:

- confirm the exact showhouse unit is marked safe for external review;
- review every field in `metadata.demo_home`;
- confirm bill evidence provenance and remove account, meter, payment, barcode and serial identifiers;
- review all documents, issue text, photos, chat history, notifications and noticeboard content;
- verify no production operational recipient will receive reviewer-created content;
- treat any seeding or metadata change as a separate approved production operation.

## Go or no-go gate

The portal becomes ready only when all of these are true:

- a reviewer cannot open any home by raw identifier;
- token A cannot read or write unit B;
- direct unauthenticated resolve returns no home or purchaser data;
- the reviewer sees one safe home and no account switcher;
- documents are explicitly purchaser-published and reviewer-safe;
- foreign document IDs return 403 or 404;
- noticeboard and adjacent real-resident content are inaccessible;
- reviewer writes are isolated or intentionally disabled;
- no Cairn or Bayly fallback branding appears;
- the clipped status and evidence-state defects are fixed;
- Maps is either deliberately restored or fully retired;
- assistant answers are checked against the exact home record;
- lint is non-interactive and fail-closed;
- the clean integration branch passes typecheck, build, tests and scoped dependency review;
- the exact clean commit is deployed to a private preview;
- the intended credentials work from a fresh browser without Sam’s intervention;
- the account can be revoked and restoration is tested;
- Sam approves the production merge and deployment.

## Immediate recommendation

Do not use the production portal URL in the YC application yet. Keep the current private preview only as an internal visual reference. Build the minimal secure integration branch from main, create the isolated reviewer identity after the authority boundary exists, and publish only after the clean preview passes the full matrix above.

## Connected notes

- [[openhouse-yc-showhouse-product-demo-run-sheet-2026-07-29]]
- [[openhouse-yc-fall-2026-high-conviction-redraft-2026-07-30]]
- [[2026-07-30-openhouse-yc-live-application-execution]]
- [[companies/openhouse-ai]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]

