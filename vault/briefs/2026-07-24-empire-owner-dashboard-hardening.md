---
name: Empire Gym owner dashboard hardening
status: verified local handoff
date: 2026-07-24
company: OpenBook
---

# Empire Gym owner dashboard hardening

## Verified reality

- Live site: `https://www.empiregym.ie` returned HTTP 200 on 2026-07-24 with title `Empire Gym — Inclusive strength gym · Matthew Hill, Cork.`
- The `empire-gym` business record is live, published and owner-linked, with `www.empiregym.ie`, 11 active services and 8 gallery items.
- The domain is verified on Vercel and attached to the dedicated `ob-client-site-template` project, not the OpenBook dashboard project.

## Implemented in isolated OpenBook branch

- Worktree: `/Users/samdonworth/OpenBook-empire-owner-dashboard`
- Branch: `feat/empire-owner-dashboard`
- Local dashboard commits:
  - `175a73e Harden owner website dashboard`
  - `f7d720f Keep hero uploads aligned with public renderer`
  - `de26b62 Remove stale hero media with owner deletion`
- Local renderer commit: `9f7aba8 Preserve owner About copy in renderer`

The Website dashboard now:

- resolves and opens the configured public custom domain rather than assuming `<slug>.openbook.ie`;
- shows a plain-language Site check for hero, about content, services, contact details, gallery and domain status;
- links the owner straight to the relevant edit surface;
- retains structured content/media editing through the existing dashboard;
- keeps hero uploads and removals aligned with the renderer-priority `business_media` record, so a changed or removed hero cannot be masked by stale media;
- makes custom-domain mutation operator-managed: client purchase, attach and removal actions are blocked server-side and removed from the customer UI.

## Why custom-domain mutation is disabled

The former flow could charge OpenBook's Vercel account for client-triggered domain purchases. It also could write a tenant domain before project attachment was proven. More fundamentally, Empire Gym's public renderer is a dedicated client-template Vercel project, so a generic dashboard action cannot safely determine the correct target project per business.

Re-enable only after implementing and testing an explicit per-business renderer-project mapping, verified Vercel attachment/status, billing/entitlement checks and a customer-confirmed payment path.

## Verification

- `npm test`: 64 files, 591 tests passed.
- `npm run build`: passed.
- `git diff --check`: passed before commit.
- Standalone `npx tsc --noEmit` still has a pre-existing ES2017 target mismatch in `__tests__/passes/generate-booking-pass.test.ts`; the production Next build typecheck passed.

## Remaining blocker before renderer deployment

The local `OB-ClientSiteTemplate` worktree has unresolved merge conflict markers in `components/sections/About.tsx`. Do not deploy that worktree until it is resolved and the renderer contract is built/tested.

## Connected vault notes

- [[project_state/ob]]
- [[companies/openbook]]
- [[briefs/2026-07-24-openhouse-openbook-reset]]
