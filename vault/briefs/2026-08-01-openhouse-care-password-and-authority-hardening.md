---
title: OpenHouse Care password and exact-installation authority hardening
company_id: openhouse-ai
date: 2026-08-01
status: exact-pass-protected-preview-gates-pass-recovery-pending
source: verified committed source, exact independent review, production schema aggregate, controlled local and protected-preview runtime probes
---

# OpenHouse Care password and exact-installation authority hardening

## Current verdict

The final 44-file Care artifact passed exact independent review and the authorized immutable preview gates. Password authentication, exact-installation authorization, deployed protected APIs, two-turn conversation continuity, shared distributed throttling, hydrated mobile-browser navigation, logout and copied-URL denial all pass against the immutable preview. Password-recovery email lifecycle proof remains pending because no controlled mailbox is configured. The preview remains SSO-protected and no production or certified-reviewer alias was moved.

- Canonical committed-artifact command: `git show --format= --no-ext-diff HEAD`
- Superseded reviewed diff: 36 files at `de71c377f12c306d8bcb21da215620f8762b305c52e764d3ddd139b11f3ce271`, independent PASS from `deleg_99c1ac54`
- Superseded reviewed patch: `1592f8635b9796bc63fcd9f65e7cf86eabe443befa0576cea5c436d0db9c09ce`, 37 files, PASS from `deleg_2bcb28bc`
- Current amended commit: `7ef348815eda44dfa12009f84fa24d00d501ff6f`
- Current 44-file commit patch SHA-256: `d28d85b2dda942bbd92a02e14fce4dbbb1a444d519dd0da7ec4f8f65f975d8d8`
- Current worktree: clean
- Current independent review: `deleg_891e961d`, exact PASS; earlier reviews were invalidated by subsequent availability, continuity, truthfulness, persistence, navigation and redirect fixes
- Migration 077 SHA-256: `32c76592082716231dfa9d2958779b9a1ece1dd785a68d7e0f1726f6cc14b3de`
- Immutable Care preview deployment: `dpl_hCxwgBHcXbtqtmxHnsZs5HA86CiJ`, target `preview`, status `Ready`
- Immutable Care preview URL: `https://openhouse-yc-review-6132ywg4n-openhouseais-projects.vercel.app`

Sam explicitly approved both a dedicated controlled Care test relationship and an isolated immutable preview with no certified-alias movement. A separate plus-addressed auth identity and one clearly synthetic active installation were created under the single internal OpenHouse tenant; postconditions confirmed the exact relationship and no customer record was modified. Credentials remain outside the vault in a temporary mode-600 file. Migration 077 remains applied and verified. The exact PASS commit was deployed to a protected immutable preview with `NEXT_PUBLIC_YC_REVIEWER_PREVIEW=false` only for that deployment so the existing YC reviewer project's containment flag did not block Care. Vercel SSO remained enabled throughout. The temporary automation-bypass secret used by `vercel curl` and Playwright was revoked after proof, with zero bypass entries confirmed. Nothing was pushed, merged or promoted; `openhouse-yc-showhouse.vercel.app` still resolves to certified deployment `dpl_8G4UazFJPjBukkyAPjyTTQ1xN8Rz`, and its credentials remain unchanged.

## Product decision

Routine OpenHouse Care authentication uses Supabase email and password. Email links remain only for password recovery and controlled first-password enrollment.

Authentication and installation authority are separate:

- A successful Supabase login does not grant Care access by itself.
- Invalid credentials and authenticated-but-unauthorized users receive the same generic denial.
- Sessions created for authenticated users without Care authority are cleared.
- Recovery reports success only when Supabase accepts the delivery request and uses generic account-existence messaging.
- Login, reset and auth-callback return paths use one same-origin validator that rejects absolute URLs, protocol-relative URLs and raw or encoded backslashes.

## Exact-installation authority

Every protected homeowner surface requires continuing server-side authority for the exact requested installation.

Live aggregate inspection, without exposing customer identifiers, found 18 unique active Care emails and one email linked to two active installations. Login therefore now denies zero matches, redirects one match directly and sends multiple matches to `/care`. That page verifies `auth.getUser()`, retrieves only live installations whose normalized server-managed customer email exactly equals the verified auth email, redirects a single result directly and renders an installation picker only for multiple verified results. Choosing a home does not grant authority; the exact destination is independently authorized again.

Homeowner authority requires:

- `auth.getUser()` verification
- exact installation ID
- normalized equality between the verified auth email and server-managed `installations.customer_email`
- `portal_status` in `active` or `activated`

Installer authority remains a separate fallback and is limited to the authenticated installer session's exact tenant. Browser-writable `user_contexts` rows never authorize Care.

The production schema has no supported `installations.access_code` or `installations.is_active`. Legacy handover-code access is therefore disabled:

- `/care` redirects to `/login/care`
- `/api/care/access` returns a generic `404`
- no capability cookie or handover HMAC remains

## Protected and disabled surfaces

Exact-installation checks guard the Care layout, metadata, manifest, telemetry, content, conversations, chat, service records, service requests and alert dismissal.

Unsafe unfinished surfaces are fail-closed:

- Legacy combined installation detail/mutation GET and PUT return `404`.
- The public SE Systems third-party upload page renders a not-found shell.
- Third-party upload-init, upload-complete and demo job lookup return `404`.
- No unauthenticated signed upload URL, runtime bucket creation or service-role upload mutation remains.
- Legacy `/care/select` renders not found and no longer exposes a hard-coded installation identifier.
- `/login/care` no longer contains the hidden `next`-activated admin login, fallback-installation query or arbitrary internal continuation branch; it is homeowner-only.

## Truthful-data boundary

Missing evidence is no longer converted into plausible operational facts:

- No synthetic household profile, telemetry, savings or hourly generation.
- Missing provider support returns an explicit telemetry-unavailable state.
- No query to nonexistent `installation_alerts` or unsupported telemetry credential fields.
- Unknown health renders `Status unavailable`, not healthy.
- The Assistant does not invent heat-pump type, refrigerant, controller, battery absence, warranty periods or document access.
- Placeholder documents and unsupported citations were removed.
- Service submissions are pending preferred-time requests, not confirmed appointments.

## Verified local evidence

After the final reviewer fixes:

- Four focused Care smokes: PASS
- Full TypeScript: PASS
- Next 15.5.22 production build: PASS
- Cached and unstaged diff checks: PASS
- Added-line secret scan: zero hits
- Raw and encoded backslash callback probes: safely returned to `/developer/overview`
- Valid internal callback path: preserved
- Legacy installation GET and PUT: `404`
- Third-party upload APIs: `404`
- Legacy Care access endpoint: `404`
- Anonymous protected Care APIs: denied
- Before migration 077, password login fails closed with HTTP `503` and `Retry-After`
- Migration 077 live preconditions: owner `postgres`, BYPASSRLS true, untrusted schema-create false, target table absent
- Migration application: `BEGIN` through `COMMIT` succeeded for the exact approved checksum
- Live postconditions: table owned by `postgres`; RLS enabled and forced; reset-time index present; expected five columns present; `PUBLIC`, `anon`, `authenticated` and `service_role` have no table privileges
- Actual application connection: `SUPABASE_DB_URL`, role `postgres`, BYPASSRLS true, insert/update rights confirmed
- Atomic limiter transaction probe: counts advanced exactly from 1 through 11; attempt 10 remained allowed; attempt 11 was blocked; positive retry interval; transaction rolled back with no retained probe row
- Actual login route probe using one synthetic nonexistent email and eleven varying documentation-range IPs: attempts 1–10 returned generic `401`; attempt 11 returned `429` with `Retry-After: 901`
- All twelve synthetic limiter keys from the route probe were deleted; read-back confirmed zero remained
- Multi-home RED/GREEN regression: prior exactly-one login behavior failed the test; zero/one/multiple behavior now passes
- Hidden admin/demo RED/GREEN regressions: the old `/login/care?next=...` admin branch and hard-coded `/care/select` identifier failed the tests; both are structurally removed and the focused smokes pass
- Current 37-file artifact after these fixes: four Care smokes, TypeScript, production build, diff checks and zero-hit secret scan all pass
- Anonymous `/care` runtime probe contains only the login redirect marker, no picker copy and no UUID-shaped Care path
- `/care/select` runtime probe renders a not-found shell with no legacy selector copy or hard-coded installation ID
- Controlled active relationship: dedicated auth identity, synthetic active installation and normalized exact-email relationship postconditions passed; no customer identity or installation was changed
- Initial controlled local matrix exposed HTTP 500 from `/api/care/content` because source selected nonexistent `installer_content.content_url`, `thumbnail_url`, `is_featured` and `display_order`
- Live schema inspection confirmed real columns `file_url`, `category`, `view_count` and `created_at`; the route now selects those fields and maps real `file_url` to the existing response `content_url`
- Corrected controlled local matrix: password login, cookie, authorized page, manifest, telemetry, content, conversations and service records passed; foreign page rendered not found; all foreign API reads returned `404`; logout passed; post-logout manifest returned `401`
- Controlled operational matrix: authorized assistant, pending service request and empty alert dismissal passed; corresponding foreign-installation requests returned `404`
- Unknown and unsupported system types no longer fall through to Solar PV in status tools, assistant prompts, service drafts or troubleshooting knowledge; only recorded or explicitly named equipment families select a family-specific branch
- Care Home and Assistant UI now also use explicit heat-pump, solar and unknown branches; unknown installations show `System type unavailable` and generic recorded-system prompts instead of solar generation, panel, inverter or heating claims
- Page, Home, Assistant and Profile now share one behavior-tested `heat_pump | solar | unknown` classifier, including common heat-pump variants; Profile renders equipment-specific details only for the verified family
- Care tab state now has one owner in the provider, so unknown-state and heat-pump navigation controls change the visible page rather than updating an unused state copy
- Nullable heat-pump temperature, target, cost, COP, CO2 and grant values remain unavailable instead of becoming zero/default 21; CO2 extrapolation, fabricated grant timeline and dead upload control were removed
- Profile's fabricated pending-document catalogue was replaced with a truthful no-verified-documents state
- Service-history, conversation-list, conversation-ownership and chat persistence errors now return or stream explicit unavailable failures instead of becoming verified-empty history or silently lost messages
- Streamed chat persists the assistant response before emitting completion; conversation creation, user/assistant inserts, history reads and conversation updates all check database errors
- Installation-authority and Care-layout database failures now propagate as retryable unavailable errors rather than false missing/unauthorized states
- Assistant history listing checks HTTP status and distinguishes loading, unavailable and verified-empty states
- SSE metadata now establishes the conversation id, subsequent messages reuse it, selected histories load through an exact-authorized GET, and prior history is loaded before current-message insertion to prevent duplicate prompt context
- Controlled two-turn SSE continuity proof passed metadata, same-conversation continuation, list visibility, ordered four-message history and foreign-history denial; cleanup removed all four messages and the conversation
- Authenticated middleware login redirects now pass through the shared literal/encoded-backslash-safe internal-path validator; the crafted decoded-backslash exploit remained on-origin while a valid Care continuation redirected correctly
- Synthetic conversation, messages and pending service request were deleted after proof; zero marked records remained
- Synthetic controlled-email and loopback limiter buckets were removed with zero known keys remaining
- Current 44-file amended commit verification: four smokes, TypeScript, Next 15.5.22 build, availability/continuity/truthfulness/persistence regressions, controlled two-turn runtime proof and cleanup, diff check and zero-hit secret scan pass; worktree clean
- Exact independent review `deleg_891e961d`: PASS for commit `7ef348815eda44dfa12009f84fa24d00d501ff6f`, exactly 44 files and patch SHA-256 `d28d85b2dda942bbd92a02e14fce4dbbb1a444d519dd0da7ec4f8f65f975d8d8`
- Protected immutable preview authenticated matrix: 29/29 checks passed across password login, authorized page, manifest, telemetry, content, conversations, service records, chat, pending service request, alert dismissal, foreign-installation denial, two-turn SSE continuity, exact ordered history, foreign-history denial, logout and post-logout denial
- Deployed shared limiter proof: ten concurrent invalid-password attempts produced ten generic `401` responses and shared database count 10; attempt 11 produced `429` with positive `Retry-After` and shared count 11; all eleven requests had distinct Vercel request IDs
- Hydrated mobile Chrome proof: 12/12 checks passed for login document, hydrated fields, password login, exactly one system-family UI branch, controlled solar presentation, telemetry unavailable rather than zero, Profile and Assistant navigation, verified-empty history UI, logout, copied-URL denial and zero uncaught page errors
- Preview cleanup: six controlled messages, two conversations and one service request were deleted after the API matrix; final read-back found zero marked conversations, service requests or active alerts
- Limiter cleanup: exact controlled subject and preview IP keys were deleted after each deployed/browser proof; final read-back found zero known or recent controlled keys
- Protection cleanup: CLI-generated 32-character automation bypass was revoked; project inspection confirmed zero automation-bypass entries and SSO protection still enabled
- Alias cleanup: Vercel automatically created a rolling project preview alias during deployment; it was explicitly removed after proof, and the live alias registry no longer lists it. The immutable hash URL remains Ready.
- Deployment cleanup: the redundant reviewer-contained preview and failed package-scope deployment created during this run were removed; only validated Care preview `dpl_hCxwgBHcXbtqtmxHnsZs5HA86CiJ` remains from the run.
- Certified YC reviewer isolation: `openhouse-yc-showhouse.vercel.app` still resolves to `dpl_8G4UazFJPjBukkyAPjyTTQ1xN8Rz`; no production deployment or stable alias movement occurred

Existing build warnings remain for `unpdf` direct `import.meta` access and a caught dynamic-server-usage diagnostic; the production build completed successfully.

## Mandatory deployment gates

Migration 077, exact review, protected-preview authentication, exact-installation isolation, serverless distributed throttling, conversation continuity, hydrated browser navigation, logout, copied-URL denial and cleanup are complete. The remaining gates are:

1. Prove password-recovery delivery, callback exchange, password update, expiry/replay denial and successful subsequent login through a controlled mailbox.
2. If multi-home picker behavior is required for the first release, add a second controlled synthetic relationship and prove the deployed picker without accessing the observed real multi-home customer identity.
3. Prove the exact-tenant installer fallback in the deployed environment if installer login is included in the release scope.
4. Define operational handling for customer email changes, installation reassignment, authority revocation and stale relationships before broad customer rollout.

The controlled identity has one synthetic active installation. Production aggregate inspection proved that legitimate multi-home relationships exist, but no real customer identity was accessed. Source and structural tests cover zero/one/many behavior; a deployed controlled multi-home picker proof remains a separate optional release gate.

## Release rule

Do not promote this preview, move aliases, alter credentials, push, merge, create another controlled relationship or release broadly without explicit authorization. The exact code, migration, deployed serverless boundary and current one-home controlled identity pass. Production promotion remains blocked on the recovery lifecycle and on any additional release-scope gates Sam chooses to require, including controlled multi-home and installer-fallback proofs.

## Connected vault notes

- [[project_state/oh]] — current OpenHouse project state
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]] — separate certified YC reviewer boundary
- [[companies/openhouse-ai]] — company context
- [[goals/oh-aftercare-os]] — aftercare operating-system vision
- [[items/oh-rls-audit]] — authorization and direct data-plane workstream

- [[imports/cara-conversation-summary-2026-07-12]] — shared signals: conversation, summary, 2026

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]]
- [[project_state/oh]]

