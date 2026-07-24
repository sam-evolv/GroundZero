---
id: oh
company_id: openhouse-ai
headline: OpenHouse is the active focus; marketing site nearly complete, followed by investor/developer outreach and funding/award applications.
valid: true
updated_at: "2026-07-24T00:00:00+01:00"
role: project-state
---

## Current reset: 2026-07-24
OpenHouse is the active strategic focus. The marketing site is nearly complete. Next is investor/developer outreach, supported by the Entrepreneur Experience application and relevant AI award applications. Do not infer that the older UK/US or DTC route notes below override this current decision; they are preserved history.

**Market-readiness audit, 2026-07-24:** The canonical build succeeds, but OpenHouse is not yet safe to represent as enterprise/developer-rollout ready. Verified P0 work includes tenant-isolation fixes in an isolated local branch; unresolved blockers include dependency exposure, runtime schema mutation, unsecured QR handover links, release-tree ambiguity and fail-soft production configuration. See [[briefs/2026-07-24-openhouse-market-readiness-audit]].

The V2 rollout is still on track for end of month. Real Longview Estates data remains live across Longview Park, Ardan View, Rathard Lawn, and Rathard Park. PR #184 and PR #186 remain merged. Checked 2026-07-01. GitHub open PRs remain #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6. Current open issues in sam-evolv/property-assistant remain #195, #194, #130, #128, #125, and #123. Vercel production is still Ready. Supabase remote anomaly checks are still blocked in this environment because `SUPABASE_ACCESS_TOKEN` is unset and local `supabase status` cannot run without a working Docker daemon.

**Live check, 2026-07-15 07:00 IST:** the local `property-assistant` clone is clean, with no commits since yesterday; GitHub reports the default `main` branch was last pushed on 2026-07-02. The 11 open PRs and 6 open issues are unchanged in count; PR #204 is the only clean mergeable PR, while #180 is draft/dirty and #147, #146, #104, #98, #41, #38, #11 and #6 are dirty (with #40 unstable). Vercel's latest `property-assistant` production deployment is **Ready**, but is 17 days old; its newest preview deployment is 13 days old and two previews from 17 days ago are errored. This is a durable delivery-staleness signal, not evidence of a current production outage.

**Live check, 2026-07-16 07:00 IST:** GitHub `main` is unchanged at `ad327a4b` (commit 2026-06-28; repository last pushed 2026-07-02). The same 11 PRs and 6 non-PR issues remain open; #204 is still the only clean mergeable PR. Both available local clones are clean but on old feature/preview branches, not `main`; they should not be treated as an up-to-date production checkout. Vercel lists the latest `property-assistant` production deployment as **Ready** (18 days old) and the newest preview as **Ready** (14 days old); `https://portal.openhouseai.ie` returned HTTP 200 from Vercel. This confirms availability, while reinforcing delivery staleness; it does not validate Supabase data or RLS because remote Supabase access remains unavailable.

**Live check, 2026-07-17 07:01 IST:** No delivery movement since 16 July. GitHub `main` remains `ad327a4b` (committed 2026-06-28; repository last pushed 2026-07-02). All 11 PRs and 6 non-PR issues remain open; #204 remains the only clean mergeable PR and was last updated 2026-06-05. Both local clones are clean but remain on stale non-`main` branches. GitHub records the latest production deployment as **success** on 2026-06-28 (now 19 days old), while `https://portal.openhouseai.ie` returned HTTP 200 in 0.48s. Production is available but delivery is stale. Remote Supabase/RLS and migration-anomaly validation remain blocked: `SUPABASE_ACCESS_TOKEN` is not configured and local Docker is unavailable.

**Live check, 2026-07-18 morning IST:** GitHub `main` still points to `ad327a4b` (2026-06-28), and the queue is unchanged: 11 open PRs, 6 non-PR issues, with #204 the only `CLEAN` merge candidate. Vercel production for `ad327a4b` is **READY**; it was deployed 2026-06-28 and is now 20 days old. The public portal returned HTTP 200 in 0.20s. The canonical local clone at `repos/property-assistant` is clean but remains on the stale feature branch `claude/new-session-0jdf52` at 2026-06-29, so it is not a current production checkout. A separate Desktop clone has a broken branch with a very large staged/untracked working tree and should not be used for delivery work without explicit recovery and review. Remote Supabase/RLS validation remains unavailable because no `SUPABASE_ACCESS_TOKEN` is configured and local Docker is unavailable.

## Summary
- Production migration is still the top priority.
- Vercel production deployment was inspected again on 2026-07-01 and the latest deployment is Ready.
- Guardrails remain in shadow mode and the eval suite still needs expansion before flipping to active.
- Supabase remote anomaly checks are still blocked because `SUPABASE_ACCESS_TOKEN` is unset and local `supabase status` cannot reach Docker.

## Next actions
- Keep monitoring the production migration until the backup tables can be dropped after a clean week.
- Triage any open issues that affect the portal experience.
- Prepare and accept Carol Tallon’s warm Bridgewater Developments introduction in parallel with marketing-site refinement. Bridgewater is now verified as a high-fit, five-scheme Cork prospect. See [[items/oh-bridgewater-warm-introduction]].

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
- [[briefs/openhouse-ndrc-submission-sprint-2026-07-01]] - active NDRC submission sprint and deck QA plan
- [[briefs/openhouse-ndrc-application-pack-2026-07-01]] - NDRC application fields, answers, blockers and upload checklist
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]] - post-Cairn route reset: funding, UK/US channels, and DTC optionality
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]] - funding/backing route research
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]] - UK/US route research
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]] - DTC feasibility research
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] - DTC as core company thesis
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] - DTC Home Savings Scan / Home Agent plan
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] - DTC acquisition hooks and personas
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]] - savings guarantee and DTC energy mechanisms
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]] - 14-day DTC concierge MVP execution sprint
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]] - consultancy quick-revenue strategy
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]] - Cork property prospect list for consultancy sprint
- [[imports/claude/openhouse-company-memory]] - shared signals: openhouse, company, claude

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[briefs/2026-06-28]]
- [[briefs/2026-06-30]]
- [[briefs/2026-07-22-reset-and-bridgewater-opportunity]]
- [[briefs/bridgewater-openhouse-discovery-brief-2026-07-22]]
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]]
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[briefs/daily-portfolio-brief-2026-07-19]]
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]]
- [[briefs/openhouse-ndrc-accelerator-pitch]]
- [[briefs/openhouse-ndrc-application-pack-2026-07-01]]
- [[briefs/openhouse-ndrc-submission-sprint-2026-07-01]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]]
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
- [[items/consultancy-cork-property-outreach]]
- [[items/oh-bridgewater-warm-introduction]]
- [[items/oh-dtc-home-savings-scan-concierge]]
- [[items/oh-guardrails-eval]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-pricing-experiment]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-sprint5-close]]
- [[items/oh-uk-aftercare-design-partner-sprint]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[items/ops-project-state-reconciler]]

