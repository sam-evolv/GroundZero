---
id: openhouse-product-truth-night-audit-2026-08-04
title: OpenHouse product-truth night audit (2026-08-04)
date: 2026-08-04
type: brief
status: read-only-audit
scope: bounded, no repo edits, no migrations, no credentials, no deploy
critic: ornith-local:q5 (local, untrusted, unloaded after use)
---

# OpenHouse product-truth night audit — 2026-08-04

A bounded, read-only audit of what OpenHouse can **prove today**, what is **built but inactive**, what is **genuinely useful** to a developer/homeowner, and which gaps most threaten a **paid developer pilot**. All claims are labelled **Observed** (verified from local repo / vault this session) or **Inferred** (reasonable but not independently confirmed this session). Code of truth is `git`; the canonical vault note is read-only for this audit.

## Source paths (read-only)
- Repo: `/Users/samdonworth/GroundZero/repos/property-assistant` — branch `claude/new-session-0jdf52`, `origin/main` HEAD `ad327a4b` ("feat: hide not-yet-operational options on welcome chooser").
- Flag gate: `apps/unified-portal/lib/feature-flags.ts`.
- Agent contract: `apps/unified-portal/lib/openhouse-agent/v1/prompt.ts` (v1.4), `service.ts`.
- Runtime-provisioning evidence: `app/api/scheme-intelligence/sessions/route.ts`, `app/api/onboarding/submit/route.ts`, `app/api/care-dashboard/archive/upload/route.ts`, `app/api/compliance/[developmentId]/upload/route.ts`, `app/api/lettings/document-upload/route.ts`, `app/api/lettings/lease-upload/route.ts`, `app/api/care/third-party/upload-init/route.ts`.
- Vault: [[companies/openhouse-ai]], [[project_state/oh]], [[briefs/2026-07-30-openhouse-yc-usage-evidence]], [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]], [[briefs/2026-07-24-openhouse-market-readiness-audit]], [[context/openhouse-product-map]].

## What OpenHouse can prove today (Observed)
- **Live, deployed developer portal** in `origin/main`: sales pipeline (`/api/pipeline/*`), scheme intelligence with RAG chat, insights, briefing, gaps (`/api/scheme-intelligence/*`), analytics-v2 (cost-model, document-health, gaps, question-analysis, rag, repeated-questions), knowledge base, compliance doc upload, noticeboard, FAQ, developer settings.
- **Live homeowner/purchaser portal** in `origin/main`: My Home (home-energy, home-model), grounded RAG chat (`/api/chat`) + general-home-agent multimodal route (`/api/assistant/chat/multimodal`), documents, noticeboard, maps, issues, videos count.
- **Separate Agent portal** (`app/agent/*`: applicants, viewings, drafts, voice capture, intelligence, autonomy, lettings) and **super-admin analytics** (`app/super/*`) — both present in `origin/main` and linked from UI/nav, not behind the `FEATURE_` flags inspected.
- **Verified usage evidence** ([[briefs/2026-07-30-openhouse-yc-usage-evidence]]): deployed assistant answered **259 property-specific questions across 79 home contexts** in 4 live Longview developments; 245 were not built-in prompts.
- **Longview developer proof pack** ([[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]): six-page, conservative evidence set, independently reviewed commit, no unsupported accuracy/workload/retention/payment claims.
- **Care portal** hardened (password auth, 29/29 protected matrix) but **preview-only**, not in production. See [[briefs/2026-08-01-openhouse-care-password-and-authority-hardening]].

## Built but inactive (Observed code, Inferred flag state)
The repo carries a large V2 assistant surface gated by runtime feature flags that default OFF:
- `FEATURE_ASSISTANT_IMAGE_UPLOAD` (Sprint 1), `FEATURE_OPENHOUSE_AGENT_V1` (Sprint 2), `FEATURE_HOMEOWNER_ISSUES` (Sprint 3.5a), `FEATURE_BUILDER_SNAG_APP` (Sprint 2), `FEATURE_DEVELOPER_DASHBOARD` (Sprint 3), `FEATURE_SCHEDULE` (Sprint 4), `FEATURE_HOUSING_REASONING_V1`, `FEATURE_VIDEOS` / `FEATURE_VIDEOS_PURCHASER`, `FEATURE_ASSISTANT_OS` (defaults ON unless explicitly `'false'`).
- **Inferred:** production flag state is **not verifiable from this session** (no scoped Vercel project link; the skill's mandatory gate forbids asserting flag state from an unscoped `vercel env ls`). The three demo flags (IMAGE_UPLOAD / OPENHOUSE_AGENT_V1 / HOMEOWNER_ISSUES) were reported ON by Sam as of June 2026, but that is a prior confirmation, not a this-session check. Treat "active today" as unconfirmed.
- **My Home V2 energy-intelligence layer** (ffb00731 on this branch) is **NOT in `origin/main` or PR #205** — isolated V2 line per [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]. The headline "energy intelligence / Money-Comfort-Risk for residents" wedge is therefore **absent from the deployed resident portals** today.

## Genuinely useful to a developer / homeowner (Observed)
- **Developer:** pipeline + scheme-intelligence RAG chat + analytics-v2 + knowledge base + compliance docs form a credible handover/aftercare evidence workflow. This is the real pilot wedge, not the broader "agent OS."
- **Homeowner:** grounded home-specific chat (specs, rooms, documents) + My Home energy/systems view + documents/noticeboard/maps. The assistant already answers real questions across 79 homes.
- **Useful-but-early:** Agent portal (lettings viewings/drafts/voice) is a distinct lettuce/lettings OS; valuable only if Sam's commercial route is agent/broker-led, which is not the current developer-handover pilot focus.

## Five decision-changing gaps threatening a paid developer pilot

### Gap 1 — Runtime schema mutation in live routes (RETAIN; reframe)
- **Observed:** `scheme-intelligence/sessions/route.ts` calls `supabase.rpc('exec_sql', { query: 'CREATE TABLE IF NOT EXISTS ai_sessions (...)' })` via the admin client on every admin GET. `onboarding/submit/route.ts` does the same for `onboarding_submissions` plus `createBucket`. These run in the request path, not a reviewed migration.
- **Classification: ADAPT.** This is the operational-readiness/hygiene defect the July audit flagged. It is idempotent DDL so "critical blocker" overstates it, but it still violates reviewed-migration discipline and should be moved to a pre-provisioned migration before any developer data lands. Adversarial critic hypothesis of RAG data-poisoning via this path was **rejected on inspection** — the DDL is a static string, not user-parameterized, so injection does not hold.

### Gap 2 — Public installer-content bucket + service-role in request path (RETAIN + ELEVATE)
- **Observed:** `care-dashboard/archive/upload/route.ts` calls `requireSession()` (any authenticated session), then `getServiceClient()` (service-role, RLS bypass), then `supabase.storage.createBucket(INSTALLER_CONTENT_BUCKET, { public: true })` at request time. The bucket is **public**. Similar runtime `createBucket` exists in compliance, lettings, and care/third-party upload routes (those not confirmed public).
- **Classification: BUILD (remediate now).** The critic correctly escalated this above my draft ranking: a public installer-content storage bucket reachable through a service-role client is a direct private-data-exposure vector (installer-uploaded documents/photos could be exfiltrated by URL if paths leak). This is the single highest-severity readiness defect for a pilot that handles resident data. Remove runtime `createBucket`; pre-provision the bucket as **private** with RLS-scoped access; keep service-role calls server-only with explicit tenant checks (the route does check `installation.tenant_id`, but the public bucket negates that protection).

### Gap 3 — Production feature-flag state unverifiable this session (RETAIN)
- **Observed/Inferred:** flag defaults are OFF in code; production ON-state cannot be confirmed without the scoped Vercel project. The live surface (which agent/scheme/analytics features a developer actually sees) may differ from intent.
- **Classification: ADAPT.** Before any pilot demo, confirm exact flag state from the dashboard and document it. The critic's addition — whether a rollback/monitoring mechanism exists for unexpected flag combinations — is a valid **Inferred** follow-up this static audit cannot confirm.

### Gap 4 — Headline energy-intelligence wedge not in deployed main (RETAIN)
- **Observed:** My Home V2 energy layer lives only on the isolated branch; `origin/main` resident portals lack the energy-system data.
- **Classification: BUILD (on isolated track).** The "Money / Comfort / Risk" resident story — the most differentiating claim — is not yet shippable to production residents. Keep it on the V2 line with a server-controlled default-off capability gate; do not let it hitchhike into the pilot's production surface prematurely.

### Gap 5 — Handover / QR identity security still open (RETAIN; Inferred)
- **Inferred (not freshly verified this session):** the 2026-07-24 market-readiness audit listed unsecured QR handover links as an unresolved blocker. This audit did not re-trace handover-link issuance.
- **Classification: ADAPT.** Confirm before pilot: handover/QR links must use an owned production domain, be revocable, expiring, scoped to the intended home/person, and auditable. Treat as a gating pilot question, not assumed solved.

## Single highest-leverage proof to create next
**A secure, independently-reviewed one-scheme developer handover pilot attestation** — not another feature. Concretely: (1) close Gap 2 (private pre-provisioned bucket, no runtime `createBucket`, service-role server-only) and Gap 1 (migrations instead of in-path `exec_sql`); (2) confirm Gap 3 flag state and Gap 5 handover identity from the Vercel dashboard; (3) produce one measured scheme-launch scorecard (validated unit/document input → living-home model → secure resident onboarding → grounded homeowner support → aftercare evidence) over a single real Longview scheme. This converts the verified 259/79 usage proof and the Longview proof pack into a saleable, defensible pilot without re-opening the broader "agent OS" scope. See [[briefs/2026-07-24-openhouse-market-readiness-audit]] and the commercial recommendation rule in the OpenHouse codebase skill (package one narrow workflow first; expand to BTR only after one resident-operation workflow is complete end-to-end).

## retain / adapt / build / avoid summary
- **Retain:** deployed developer + homeowner portals, scheme-intelligence RAG, analytics-v2, verified 259/79 usage evidence, Longview proof pack, Care preview hardening.
- **Adapt:** runtime-provisioning routes → reviewed migrations; confirm + document production flag state; verify handover/QR identity.
- **Build:** private pre-provisioned storage (kill public installer bucket), server-controlled My Home V2 capability gate, one-scheme pilot attestation + launch scorecard.
- **Avoid:** letting My Home V2 or Agent-portal breadth hitchhike into the first developer pilot; asserting production flag/feature state without a scoped Vercel check; treating the static-DDL "injection" hypothesis as a real vulnerability (rejected on inspection).

## Notes that link here
_Auto-generated section is managed by wiki-refiner; this audit does not modify existing notes._

## Connected vault notes
- [[companies/openhouse-ai]] — parent company facts and priorities
- [[project_state/oh]] — live status, My Home isolation, readiness gates
- [[briefs/2026-07-30-openhouse-yc-usage-evidence]] — verified 259/79 usage proof
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]] — six-page developer proof pack
- [[briefs/2026-07-24-openhouse-market-readiness-audit]] — P0 readiness gaps (runtime mutation, handover identity)
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]] — My Home V2 isolation decision
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]] — activation contract (separate DTC lane)
- [[context/openhouse-product-map]] — product surface map
- [[briefs/2026-08-03-current-live-boundary-and-v2-handoff]] — current-live boundary handoff
