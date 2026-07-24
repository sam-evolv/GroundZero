---
date: 2026-07-24
company: OpenBook
status: locally-implemented-awaiting-activation
---

# OpenBook prospect preview factory

## Why this matters

OpenBook already has enough Cork prospect inventory to test a higher-personalisation outbound loop. The constraint was not lead volume but producing truthful, reviewable previews without making each demo a 20-minute bespoke build.

## What is locally built and validated

Two isolated local branches now form the factory. Neither is pushed, deployed, or applied to production.

### Client template branch

Repository: `sam-evolv/OB-ClientSiteTemplate`  
Worktree: `/Users/samdonworth/OB-ClientSiteTemplate-prospect-preview`  
Branch: `feat/prospect-preview-factory`

Local commits:

- `9df5137` — factual snapshot compiler
- `cce503e` — tokenised, `noindex` `/preview/<token>` route
- `674aaf5` — guarded asset-copy, draft-generation and explicit publish scripts
- `ed4045f` — manual Instagram outreach queue and transparent message formatter
- `d6df29c` — operator runbook

The compiler refuses prospects missing a name, public descriptive text, or at least one public HTTPS image. It does not generate prices, hours, testimonials, booking links, founder details, or unsupported claims. Preview media is copied only after review into an isolated `prospect-preview-assets` bucket, recording original URLs and SHA-256 hashes.

The route serves only approved/unexpired `ready` or `sent` snapshots. Draft, expired and archived previews return 404. The preview carries a visible concept disclaimer and is `noindex`.

Validated locally:

- 10 focused factory tests passed
- `npm run typecheck` passed
- `npm run build` passed

### OpenBook schema branch

Worktree: `/Users/samdonworth/OpenBook-prospect-preview-schema`  
Branch: `feat/prospect-preview-schema`  
Local commit: `c45ebda`

It adds an isolated `prospect_previews` table with opaque tokens, immutable JSON snapshots, source URLs, copied-asset manifests, expiry, review/sent lifecycle timestamps, status guards and RLS with no public table policies. It declares the separate preview asset bucket. The migration is unrun.

`supabase db lint --local` could not run because no local Postgres/Supabase stack is active on this Mac. No database mutation was attempted.

## Existing infrastructure confirmed

- Dedicated preview host: `https://openbook-prospective-client-sites.vercel.app`
- Source template: `https://github.com/sam-evolv/OB-ClientSiteTemplate.git`
- Vercel project is a current static uploaded deployment, not Git-linked in its present configuration. A Git push alone will not deploy it.
- Current prospect inventory from the prior read-only count: 555 total, including 273 `to_contact` prospects.

## Daily operating loop after activation

1. Choose a high-score prospect and inspect source copy/images.
2. Run the compiler dry-run. It makes no writes.
3. Deliberately create a draft after factual/media review.
4. Review the rendered site and explicitly publish it.
5. Run the read-only ten-item queue.
6. Sam manually opens each Instagram profile and pastes the transparent message after final review.

No Instagram login, scraping or automatic outbound is part of this system.

## Activation still needs explicit approval

1. Apply the local OpenBook migration.
2. Add the server-only Supabase service-role credential to the existing Vercel project.
3. Deploy the template branch to the existing dedicated preview project.
4. Select one suitable real Cork business and run a controlled proof, inspecting the draft and public route before any outreach.

## Connected vault notes

- [[companies/openbook]] — company context
- [[project_state/ob]] — live OpenBook status
- [[briefs/2026-07-24-empire-owner-dashboard-hardening]] — separate owner portal work
- [[context/ops-automation-moc]] — reusable automation operating pattern
