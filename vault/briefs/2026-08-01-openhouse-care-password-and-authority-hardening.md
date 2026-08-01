---
title: OpenHouse Care password and exact-installation authority hardening
company_id: openhouse-ai
date: 2026-08-01
status: independent-review-pending
source: verified local source, production build and direct local runtime probes
---

# OpenHouse Care password and exact-installation authority hardening

## Product decision

Routine OpenHouse Care authentication should use email and password. Recovery email remains only for password reset and first-password enrollment. Ordinary magic-link login is being removed because it adds friction.

This work is local and staged for independent review. It has not been pushed, merged or deployed. It does not change the certified YC reviewer deployment, alias, mode, home or credentials.

## Authentication contract

- Supabase email/password authenticates the user.
- Authentication alone never grants Care access.
- Invalid credentials and authenticated users without an authorized Care installation receive the same generic login failure.
- A session created for an authenticated but unauthorized user is cleared before the response.
- Recovery initiation returns generic messaging and sends users back to the Care login after password establishment.
- Login and handover-code attempts use the strict authentication rate-limit bucket.

## Continuing installation authority

A browser-supplied installation UUID is not authority.

The homeowner Care data plane now requires one of three server-verified relationships:

1. A Supabase user verified with `auth.getUser()` whose normalized verified email exactly matches the requested active installation's server-managed `customer_email`.
2. An authenticated installer session whose tenant owns the requested active installation.
3. A short-lived HttpOnly, SameSite HMAC handover capability. It is checked against the live active installation and current access code on every request, expires after eight hours, and does not store the raw access code.

`user_contexts` is explicitly excluded as an authority source because authenticated browser users can write their own rows. It remains display and redirect state only.

## Protected homeowner surfaces

Exact installation authority is applied before privileged data access in:

- Care page layout and dynamic metadata
- Per-home PWA manifest
- Telemetry and alerts
- Installer guides and content
- Assistant conversations and chat
- Service records
- Service booking
- Alert dismissal

The Assistant's synthetic household fallback was removed. Missing or revoked installation data now fails closed instead of becoming plausible fabricated home context.

## Verified local evidence

- Care password and RLS boundary smoke: pass
- Care homeowner exact-installation authority smoke: pass
- TypeScript: pass
- Next production build: pass
- `git diff --cached --check`: pass
- Staged secret scan: zero hits
- Anonymous Care page: streamed redirect shell to `/login/care`; no Care installation provider rendered
- Anonymous direct homeowner APIs: eight read/write probes returned HTTP 401
- Login password throttling: ten invalid attempts returned HTTP 401; attempt eleven returned HTTP 429 with `Retry-After`
- Handover-code throttling: ten invalid attempts returned HTTP 404; attempt eleven returned HTTP 429 with `Retry-After`

## Release blockers and residual proof

- Fresh independent security review of the exact staged authentication and authority slice is pending.
- A real authorized Care account has not yet completed the password-login proof.
- The complete recovery-email, callback, password-update and subsequent-login lifecycle has not been proven end to end.
- An authenticated wrong-installation request has not yet been exercised with a controlled account.
- The current rate limiter is process-local. It is defense in depth and must not be represented as a distributed serverless password-spraying control.
- No Care deployment, push or merge is authorized until these gates are resolved or explicitly accepted.

## Connected vault notes

- [[project_state/oh]] - current OpenHouse project state
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]] - separate certified YC reviewer boundary
- [[companies/openhouse-ai]] - company context
- [[goals/oh-aftercare-os]] - aftercare operating-system vision
- [[items/oh-rls-audit]] - authorization and direct data-plane workstream
