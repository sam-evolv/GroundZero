---
id: oh
company_id: openhouse-ai
headline: Database V2 migration is stabilising. Sprint 5 PRs are merged. Vercel production is healthy.
valid: true
updated_at: "2026-06-26T16:56:31+01:00"
---

The V2 rollout is still on track for end of month. Real Longview Estates data remains live across Longview Park, Ardan View, Rathard Lawn, and Rathard Park. PR #184 and PR #186 were merged on 2026-05-23. Checked 2026-06-26 16:56 IST. GitHub open PRs remain #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6. Current open issues in sam-evolv/property-assistant remain #195, #194, #130, #128, #125, and #123.

## Summary
- Production migration is still the top priority.
- Vercel production deployment was inspected again on 2026-06-26 at 16:56 IST and the latest deployment is Ready.
- Guardrails remain in shadow mode and the eval suite still needs expansion before flipping to active.
- Supabase CLI is installed, but remote anomaly checks were not completed because `SUPABASE_ACCESS_TOKEN` is unset and local `supabase status` is blocked by Docker not running.

## Next actions
- Keep monitoring the production migration until the backup tables can be dropped after a clean week.
- Triage any open issues that affect the portal experience.

## Risks
- Supabase remote anomaly checks are blocked in this environment because no access token is available and local status checks cannot run without Docker.

## Connected vault notes

- [[companies/openhouse-ai]] — parent company
- [[goals/oh-activation]] — activation goal
- [[goals/oh-v2-launch]] — V2 migration goal
- [[goals/oh-aftercare-os]] — aftercare OS vision
- [[items/oh-production-migration]] — stabilize migration
- [[items/oh-onboarding-cut]] — strongest design candidate
- [[items/oh-warranty-triage-router]] — AI issue triage
- [[briefs/openhouse-ndrc-accelerator-pitch]] — NDRC pitch
- [[imports/claude/openhouse-company-memory]] — shared signals: openhouse, company, claude