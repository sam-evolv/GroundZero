---
id: ob
company_id: openbook
headline: Empire Gym's GymMaster membership integration is locally implemented on an unpublished branch; the live site still serves the July Stripe flow, and safe publication remains pending.
valid: true
updated_at: "2026-08-15T00:09:00+01:00"
role: project-state
---

OpenBook's immediate commercial path is a minimum client portal for editing text and photos, followed by Stripe subscriptions at €79/month. Existing lead-generation infrastructure may support a constrained automated prospecting pilot, but the old 20-minute-per-demo manual workflow is parked.

**Live source reconciliation, 2026-08-15 00:09 IST:** the isolated Empire Gym renderer worktree at `/Users/samdonworth/GroundZero/worktrees/empire-gymmaster-20260814` is clean at local commit `658e67a` on branch `feat/empire-gymmaster-20260814`, with no upstream and no remote ref containing that commit. Direct source inspection verifies an Empire-only GymMaster signup and member-login integration, exact-tenant origin validation, and source changes intended to replace the legacy membership catalogue and Stripe join CTAs. Its targeted suite passed 36/36 tests. `npm run build` exited 0 and compiled/generated the app, but ESLint did not execute because the framework passed removed ESLint options, so lint remains unverified. This work is not deployed or live: Vercel still serves the 2026-07-30 production deployment `ob-client-site-template-acjw0e1w7`, and the live server-rendered HTML contains no GymMaster reference and still routes membership `Join now` actions to Stripe. The separate owner dashboard remains at `de26b62`, and the dirty base-renderer conflict remains unresolved. No push, deployment, database or payment mutation, or outreach occurred during this reconciliation.

On 2026-07-24, the isolated Empire Gym owner-dashboard branch passed its recorded tests and a production build. **Live repository check, 2026-08-13 12:01 IST:** the dashboard worktree remains clean at local commit `de26b62` with no upstream. The renderer source worktree still has an unresolved merge conflict in `components/sections/About.tsx` plus two modified files, so publish/handoff remains blocked. `https://www.empiregym.ie` returned HTTP 200, which proves availability only. The verified handoff, safety decisions and renderer blocker are in [[briefs/2026-07-24-empire-owner-dashboard-hardening]].

On 2026-07-24, a separate fact-safe prospect preview factory was implemented locally for the existing dedicated preview host. It has an isolated preview table/bucket migration, tokenised `noindex` route, guarded draft/publish scripts, and a manual Instagram-ready queue. No migration, Vercel environment mutation, deployment, production write or outreach has occurred. See [[briefs/2026-07-24-openbook-prospect-preview-factory]].

**Live GitHub correction, 2026-08-13 12:01 IST:** PR #214 is not a ready realtime-availability change. It was merged on 8 June 2026 and contains a two-file MCP booking-confirmation copy change. OpenBook `main` has since advanced to `c72bf48`. The stale item metadata is corrected in [[items/ob-realtime-availability]].

## Connected vault notes

- [[companies/openbook]] - parent company
- [[goals/ob-retention]] - reduce churn below 4%
- [[goals/ob-supply]] - reach 500 venues
- [[items/ob-no-show-deposits]] - primary commercial lever
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]] - consultancy quick-revenue strategy
- [[items/ob-venue-health-radar]] - churn prediction
- [[briefs/2026-07-24-openhouse-openbook-reset]] - current portal, billing and lead-generation reset
- [[items/ob-realtime-availability]] - booking feature
- [[launches/launch-2026-06-24-launch-openbook-no-show-reduction-wedge]] - launch brief

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/2026-06-28]]
- [[briefs/2026-07-24-empire-owner-dashboard-hardening]]
- [[briefs/2026-07-24-openbook-prospect-preview-factory]]
- [[briefs/2026-07-24-openhouse-openbook-reset]]
- [[briefs/2026-07-27-market-intel]]
- [[briefs/agentic-value-creation-revenue-cara-proof-plan-2026-07-14]]
- [[briefs/chatgpt-voice-founder-os-2026-07-31]]
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[briefs/daily-portfolio-brief-2026-07-19]]
- [[companies/openbook]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/openhouse-openbook-design-system]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[goals/ob-retention]]
- [[goals/ob-supply]]
- [[items/ob-cancellation-waitlist]]
- [[items/ob-client-self-edit-portal-billing]]
- [[items/ob-loyalty-points]]
- [[items/ob-no-show-deposit-proof-sprint]]
- [[items/ob-no-show-deposit-workflow]]
- [[items/ob-no-show-deposits]]
- [[items/ob-prepared-leadgen-loop]]
- [[items/ob-realtime-availability]]
- [[items/ob-venue-health-radar]]
- [[items/ops-project-state-reconciler]]

