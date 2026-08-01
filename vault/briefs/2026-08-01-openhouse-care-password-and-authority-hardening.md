---
title: OpenHouse Care password and exact-installation authority hardening
company_id: openhouse-ai
date: 2026-08-01
status: code-review-pass-runtime-gates-pending
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

This is a code-review pass, not release authorization. The database migration and controlled production runtime gates below remain mandatory. Nothing was committed, pushed, merged, deployed or applied to production. The certified YC reviewer deployment and credentials were unchanged.

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

Existing build warnings remain for `unpdf` direct `import.meta` access and a caught dynamic-server-usage diagnostic; the production build completed successfully.

## Mandatory deployment gates

1. Review and explicitly approve application of the exact migration 077 checksum above.
2. Apply migration 077 transactionally and verify its postconditions.
3. Prove the deployed application database role can execute the limiter's atomic upsert.
4. Verify shared threshold enforcement, HTTP `429` and `Retry-After` in the deployed serverless environment.
5. Use a controlled active Care identity to prove password login and durable session/cookie behavior.
6. Prove exact-installation success and foreign-installation denial across pages and all protected APIs.
7. Prove logout and copied-URL denial.
8. Prove recovery delivery, callback, password update, replay/expiry behavior and successful subsequent login.

Sam's controlled auth identity currently has no active Care installation. One other active customer identity match exists but is not controlled and was not accessed. These gates cannot be replaced by source smokes, anonymous probes or aggregate account inventory.

## Release rule

Do not deploy Care, apply migration 077, move aliases, alter credentials, push or merge this work without explicit authorization. The code candidate has passed independent review, but production release remains blocked on the mandatory deployment gates.

## Connected vault notes

- [[project_state/oh]] — current OpenHouse project state
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]] — separate certified YC reviewer boundary
- [[companies/openhouse-ai]] — company context
- [[goals/oh-aftercare-os]] — aftercare operating-system vision
- [[items/oh-rls-audit]] — authorization and direct data-plane workstream
