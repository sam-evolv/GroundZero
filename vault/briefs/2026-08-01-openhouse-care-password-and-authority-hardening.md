---
title: OpenHouse Care password and exact-installation authority hardening
company_id: openhouse-ai
date: 2026-08-01
status: controlled-local-pass-final-review-and-deployed-gates-pending
source: verified committed source, production schema aggregate, controlled local production-build probes and independent review
---

# OpenHouse Care password and exact-installation authority hardening

## Current verdict

The prior 37-file Care candidate received independent PASS, but the first explicitly authorized controlled active-account probe found a real production-schema mismatch in the content API. That route was corrected against the inspected live schema and all controlled local checks now pass. The amended exact commit is undergoing a final independent review before the authorized isolated preview deployment.

- Canonical artifact command: `git diff --cached --no-ext-diff`
- Superseded reviewed diff: 36 files at `de71c377f12c306d8bcb21da215620f8762b305c52e764d3ddd139b11f3ce271`, independent PASS from `deleg_99c1ac54`
- Superseded reviewed patch: `1592f8635b9796bc63fcd9f65e7cf86eabe443befa0576cea5c436d0db9c09ce`, 37 files, PASS from `deleg_2bcb28bc`
- Current amended commit: `474562be3d5b722b5258f21207b1ec79f349fc56`
- Current 43-file commit patch SHA-256: `562666a9f53e7a568c5d5464cac44cc7a131d79a6e1449145a3e8ab51ae4a6cb`
- Current worktree: clean
- Current independent review: `deleg_c053bba2`, pending; earlier reviews were invalidated by subsequent truthfulness, persistence, navigation and redirect fixes
- Migration 077 SHA-256: `32c76592082716231dfa9d2958779b9a1ece1dd785a68d7e0f1726f6cc14b3de`

Sam explicitly approved both a dedicated controlled Care test relationship and an isolated immutable preview with no alias movement. A separate plus-addressed auth identity and one clearly synthetic active installation were created under the single internal OpenHouse tenant; postconditions confirmed the exact relationship and no customer record was modified. Credentials remain outside the vault in a temporary mode-600 file. The local production build now passes password login, session persistence, exact-home page and API reads, foreign-installation denial, logout and post-logout denial. Migration 077 remains applied and verified. The preview has not yet been deployed because final amended-commit review is pending. Nothing was pushed, merged or aliased; the certified YC reviewer deployment and credentials remain unchanged.

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
- Authenticated middleware login redirects now pass through the shared literal/encoded-backslash-safe internal-path validator; the crafted decoded-backslash exploit remained on-origin while a valid Care continuation redirected correctly
- Synthetic conversation, messages and pending service request were deleted after proof; zero marked records remained
- Synthetic controlled-email and loopback limiter buckets were removed with zero known keys remaining
- Current 43-file amended commit verification: four smokes, TypeScript, Next 15.5.22 build, classifier/navigation/nullable-metric/persistence regressions, controlled operational rerun and cleanup, diff check and zero-hit secret scan pass; worktree clean

Existing build warnings remain for `unpdf` direct `import.meta` access and a caught dynamic-server-usage diagnostic; the production build completed successfully.

## Mandatory deployment gates

Migration 077 and the local production-build application-role limiter proof are complete. The remaining gates are:

1. Deploy an immutable candidate only with explicit authorization, then repeat the distributed threshold proof through that serverless deployment and confirm `429` plus `Retry-After`.
2. Use a controlled active Care identity to prove password login and durable session/cookie behavior.
3. Prove exact-installation success and foreign-installation denial across pages and all protected APIs.
4. Prove logout and copied-URL denial.
5. Prove recovery delivery, callback, password update, replay/expiry behavior and successful subsequent login.

Sam's controlled auth identity currently has no active Care installation. One other active customer identity match exists but is not controlled and was not accessed. These gates cannot be replaced by source smokes, anonymous probes or aggregate account inventory.

## Release rule

Do not deploy Care, create or alter controlled identities/installations, move aliases, alter credentials, push or merge this work without explicit authorization. The code candidate and migration have passed, and the limiter passed locally against the live database, but release remains blocked on deployed-serverless and controlled-identity gates.

## Connected vault notes

- [[project_state/oh]] — current OpenHouse project state
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]] — separate certified YC reviewer boundary
- [[companies/openhouse-ai]] — company context
- [[goals/oh-aftercare-os]] — aftercare operating-system vision
- [[items/oh-rls-audit]] — authorization and direct data-plane workstream
