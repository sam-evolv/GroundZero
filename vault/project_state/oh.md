---
id: oh
company_id: openhouse-ai
headline: Database V2 migration is stabilising. Sprint 5 PRs are merged. Vercel production is healthy.
valid: true
updated_at: "2026-06-24T12:01:21+01:00"
---

The V2 rollout is still on track for end of month. Real Longview Estates data remains live across Longview Park, Ardan View, Rathard Lawn, and Rathard Park. PR #184 and PR #186 were merged on 2026-05-23. Current open issues in sam-evolv/property-assistant are #195, #194, #130, #128, #125, and #123.

## Summary
- Production migration is still the top priority.
- Vercel production deployments are currently healthy. Latest deployment is ready.
- Guardrails remain in shadow mode and the eval suite still needs expansion before flipping to active.

## Next actions
- Keep monitoring the production migration until the backup tables can be dropped after a clean week.
- Triage any open issues that affect the portal experience.

## Risks
- Supabase remote anomaly checks could not be completed in this session because no access token was available.
