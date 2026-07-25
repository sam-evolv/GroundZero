---
id: ob
company_id: openbook
headline: Empire Gym's owner dashboard hardening is locally verified; safe publish/handoff is pending, and Stripe billing follows only after the owner journey is proven.
valid: true
updated_at: "2026-07-24T00:00:00+01:00"
role: project-state
---

OpenBook's immediate commercial path is a minimum client portal for editing text and photos, followed by Stripe subscriptions at €79/month. Existing lead-generation infrastructure may support a constrained automated prospecting pilot, but the old 20-minute-per-demo manual workflow is parked.

On 2026-07-24, the isolated Empire Gym owner-dashboard branch passed 587 tests and a production build. The verified handoff, safety decisions and renderer blocker are in [[briefs/2026-07-24-empire-owner-dashboard-hardening]].

On 2026-07-24, a separate fact-safe prospect preview factory was implemented locally for the existing dedicated preview host. It has an isolated preview table/bucket migration, tokenised `noindex` route, guarded draft/publish scripts, and a manual Instagram-ready queue. No migration, Vercel environment mutation, deployment, production write or outreach has occurred. See [[briefs/2026-07-24-openbook-prospect-preview-factory]].

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
- [[briefs/agentic-value-creation-revenue-cara-proof-plan-2026-07-14]]
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

