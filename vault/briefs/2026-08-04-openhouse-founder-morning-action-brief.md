---
id: openhouse-founder-morning-action-brief-2026-08-04
title: OpenHouse founder morning action brief (2026-08-04)
date: 2026-08-04
type: brief
status: draft-for-sam
scope: read-only synthesis, no app-code edits, no push/deploy/migrate
critic: ornith-local:q5 (local, loopback-only, unloaded after use)
---

# OpenHouse founder morning action brief (2026-08-04)

Bounded synthesis from the night audit, project state and company notes. Two named upstream briefs were absent this run, so only available evidence was used. See Evidence/proof gaps for the exact list.

## Current truth in five bullets

- Live deployed developer and homeowner portals already serve four real Longview schemes, with a verified 259 homeowner questions across 79 home contexts. (Observed, [[briefs/2026-07-30-openhouse-yc-usage-evidence]])
- A six-page, independently reviewed Longview developer proof pack is ready and conservative. (Observed, [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]])
- A warm Cork developer introduction is drafted and ready to send after the bank holiday. (Observed, [[items/oh-bridgewater-warm-introduction]])
- The differentiating resident wedge, the energy intelligence / Money-Comfort-Risk "My Home" surface, is isolated off production and not in any live portal today. (Observed, [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]])
- One live security defect remains: a public installer-content storage bucket is created at request time via a service-role client, and runtime DDL still lives in request handlers. Both are local-only and unpushed. (Observed from [[briefs/2026-08-04-openhouse-product-truth-night-audit]])

## The one outcome that matters next

Convert the Bridgewater warm route into one booked discovery call, backed by the ready proof pack, and make any pilot demo conditional on the public-bucket security fix landing first. External proof is the goal, but the demo cannot show real resident data until the bucket is private and pre-provisioned.

## Three ranked actions for Sam

1. Send the Carol reply and book the Bridgewater discovery call. It is cheap and a warm lead decays; use the drafted reply in [[items/oh-bridgewater-warm-introduction]]. Do not wait for the marketing site to be perfect.
2. Before any pilot demo, confirm from the Vercel dashboard that the public installer-content bucket is fixed (private, pre-provisioned) and confirm live feature-flag state plus handover/QR link identity. This is the go/no-go for showing real resident data.
3. Keep My Home V2 and the DTC lane on their bounded tracks. Neither should hitchhike into the first developer pilot. Run the founder-home DTC truth test only after the pilot shape is agreed ([[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]).

## Work agents can do without Sam

- Open a clean worktree from the verified git root and implement the Gap 2 remediation: remove runtime createBucket in the care-dashboard archive upload and related upload routes, pre-provision the bucket as private, keep the service-role client server-only with tenant checks. Keep local, no push.
- Move the in-path exec_sql / createBucket DDL out of request handlers into reviewed migrations in the same worktree.
- Draft the one-scheme pilot launch scorecard template (validated unit/document input to living-home model to secure resident onboarding to grounded homeowner support to aftercare evidence).
- Keep building the My Home V2 server capability gate on the isolated line: default-deny, exact-home allowlist, shared denial at navigation, route, API and data layers.
- Draft a GDPR / data-processing legal-basis and breach-response note for the pilot (red-team-flagged gap, see below).

## Decisions only Sam can make

- Whether to send the Bridgewater reply and the separate Sean reconnection now, and how to phrase them.
- Whether to accept a paid pilot shape and at what price: the €79 concierge gate versus a developer contract.
- Whether the first pilot scopes to one existing Longview scheme or a new external scheme.
- Whether to authorise pushing the local security-fix commits and any migration (deployment gate).
- Whether to prioritise the GDPR assessment before any outreach begins.

## Evidence / proof gaps

- Production feature-flag state was not verified this session (no scoped Vercel project link). Treat "active today" as unconfirmed, not fact. (Assumption)
- Handover/QR link identity security was not freshly re-traced. Treat as open until confirmed from the dashboard. (Assumption)
- A GDPR / data-processing legal basis and breach-response plan are absent for live resident PII. The red-team critic flagged this as a missing pre-pilot gate. (Assumption until assessed)
- The local autoresearch evidence-ranking campaign is BLOCKED: controller verdict FAIL, benchmark still draft pending reconciliation (per .autoresearch-sandboxes state). Do not treat any local-model ranking as production-ready. (Observed)
- The upstream briefs [[briefs/2026-08-04-openhouse-commercial-wedge-night-analysis]] and [[briefs/2026-08-04-openhouse-developer-pilot-operating-kit]] were not present this run. This brief used only the product-truth night audit, project state and company notes. (Observed gap)

## Seven-day success test

- Bridgewater reply sent and a discovery call date booked.
- Public-bucket fix implemented in a clean worktree, typecheck and build green, not pushed without approval.
- Live flag state and handover/QR identity confirmed and recorded.
- One-scheme pilot scorecard template drafted and reviewed.
- No My Home V2 or DTC code reaches the production surface.

## Stop-doing list

- Stop asserting production feature-flag or feature state without a scoped Vercel check.
- Stop letting My Home V2 or the Agent-portal breadth into the first developer pilot.
- Stop any broad developer cold-outbound until the two warm routes get a clean response window.
- Stop treating the static-DDL "injection" claim as a live vulnerability (rejected on inspection in the audit), but also stop leaving runtime createBucket in place.
- Stop any production deploy, migration or push without Sam's explicit approval.

## Red-team note (ornith-local:q5, loopback-only)

The critic argued the public-bucket fix (Gap 2) is the pre-pilot gate, not a pre-demo checkbox, and that a GDPR/data-processing basis is a missing P0. Both are retained above. The critic also claimed runtime DDL is a worse severity than an undocumented flag; the audit already found the DDL is a static string with no injection vector, so that severity claim is down-weighted to hygiene, not live exploit. The critic's "founder-home test adds selection bias" point is noted but the three-home lab already includes an independent older home, so the design holds.

## Exact first 90-minute work block

1. Minutes 0 to 10: Send the Carol/Bridgewater reply from [[items/oh-bridgewater-warm-introduction]] and mark external_action sent.
2. Minutes 10 to 30: Open the Vercel dashboard, list every FEATURE_ env var, confirm the three demo flags and handover/QR link properties, and record the result.
3. Minutes 30 to 75: In a clean worktree from the verified git root, implement Gap 2 (remove runtime createBucket, pre-provision private bucket, service-role server-only). An agent can run this in parallel while you confirm flags.
4. Minutes 75 to 90: Run npm run typecheck and npm run build on the worktree, record green or red, and do not push.

## Connected vault notes

- [[companies/openhouse-ai]]: parent company facts and priorities
- [[project_state/oh]]: live status, My Home isolation, readiness gates
- [[briefs/2026-08-04-openhouse-product-truth-night-audit]]: source night audit
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]: ready developer proof pack
- [[items/oh-bridgewater-warm-introduction]]: drafted warm reply, ready to send
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]: My Home V2 isolation decision
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]: DTC activation contract
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]: P0 readiness gaps
- [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]]: 30-day commercial-proof sprint
