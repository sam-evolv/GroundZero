---
title: OpenHouse Care password and exact-installation authority hardening
company_id: openhouse-ai
date: 2026-08-01
status: migration-pass-deployed-and-controlled-identity-gates-pending
source: verified staged source, local production build, local runtime probes and independent exact-diff review
---

# OpenHouse Care password and exact-installation authority hardening

## Current verdict

The exact staged Care code candidate received an independent **PASS** with no concrete code release blocker.

- Canonical artifact command: `git diff --cached --no-ext-diff`
- Canonical staged diff SHA-256: `de71c377f12c306d8bcb21da215620f8762b305c52e764d3ddd139b11f3ce271`
- Scope: 36 staged files, zero unstaged entries
- Independent review: `deleg_99c1ac54`, PASS
- Migration 077 SHA-256: `32c76592082716231dfa9d2958779b9a1ece1dd785a68d7e0f1726f6cc14b3de`

This is a code-review and migration pass, not release authorization. Sam explicitly approved migration 077 on 1 August 2026. The exact checksum above was verified, the live preconditions passed, and the complete file was applied once through `psql` with `ON_ERROR_STOP`; its transaction committed successfully. The limiter passed through the local production build against the live production database, but must still be repeated on the eventual deployed serverless candidate. Controlled-account production runtime gates also remain mandatory. Nothing was committed, pushed, merged or deployed. The certified YC reviewer deployment and credentials were unchanged.

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
