---
id: oh
company_id: openhouse-ai
headline: Database V2 migration is stabilising. Sprint 5 PRs are merged. Vercel production is healthy.
valid: true
updated_at: "2026-06-27T12:01:00+01:00"
role: project-state
---

The V2 rollout is still on track for end of month. Real Longview Estates data remains live across Longview Park, Ardan View, Rathard Lawn, and Rathard Park. PR #184 and PR #186 remain merged. Checked 2026-06-27 12:01 IST. GitHub open PRs remain #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6. Current open issues in sam-evolv/property-assistant remain #195, #194, #130, #128, #125, and #123. Vercel production is still Ready. Supabase remote anomaly checks are still blocked in this environment because `SUPABASE_ACCESS_TOKEN` is unset and `supabase status` cannot run without a working Docker daemon.

## Summary
- Production migration is still the top priority.
- Vercel production deployment was inspected again on 2026-06-27 at 12:01 IST and the latest deployment is Ready.
- Guardrails remain in shadow mode and the eval suite still needs expansion before flipping to active.
- Supabase remote anomaly checks are still blocked because `SUPABASE_ACCESS_TOKEN` is unset and local `supabase status` cannot reach Docker.

## Next actions
- Keep monitoring the production migration until the backup tables can be dropped after a clean week.
- Triage any open issues that affect the portal experience.

## Risks
- Supabase remote anomaly checks are blocked in this environment because no access token is available and local status checks cannot run without Docker.

## Connected vault notes

- [[companies/openhouse-ai]] - parent company
- [[goals/oh-activation]] - activation goal
- [[goals/oh-v2-launch]] - V2 migration goal
- [[goals/oh-aftercare-os]] - aftercare OS vision
- [[items/oh-production-migration]] - stabilize migration
- [[items/oh-onboarding-cut]] - strongest design candidate
- [[items/oh-warranty-triage-router]] - AI issue triage
- [[briefs/openhouse-ndrc-accelerator-pitch]] - NDRC pitch
- [[imports/claude/openhouse-company-memory]] - shared signals: openhouse, company, claude

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/2026-06-28]]
- [[briefs/openhouse-ndrc-accelerator-pitch]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[companies/openhouse-ai]]
- [[context/capture-workflow]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[goals/oh-guardrails-active]]
- [[goals/oh-room-inference]]
- [[goals/oh-v2-launch]]
- [[items/oh-guardrails-eval]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-pricing-experiment]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-sprint5-close]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[items/ops-project-state-reconciler]]

