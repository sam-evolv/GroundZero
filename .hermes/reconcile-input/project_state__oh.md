---
id: oh
company_id: openhouse-ai
headline: Enterprise Ireland funding now depends on paid developer validation; OpenHouse resumes Sunday with that commercial objective.
valid: true
updated_at: "2026-08-21T16:03:00+01:00"
role: project-state
---

**Enterprise Ireland validation gate and focus decision, 2026-08-21:** Sam reports that the Enterprise Ireland meeting went okay and that Enterprise Ireland indicated external commercial validation, specifically a property developer paying for OpenHouse, would enable him to secure funding. This is Sam's report of the meeting, not a written funding commitment or completed offer. Sam decided to pause OpenHouse for the remainder of Friday, focus on Donworth AI Solutions, then resume OpenHouse on Sunday 23 August with paid developer validation and renewed relationship-led outreach as the explicit objective. This decision does not itself authorise outbound messages.

**Live source reconciliation, 2026-08-21 16:03 IST:** GitHub `main` remains `b1629c34`, with twelve open pull requests, six non-PR issues, no repository rulesets and no `main` branch protection. Vercel production deployment `property-assistant-mi8xczgvc` remains Ready and still owns the `portal.openhouseai.ie` alias; the portal returned HTTP `200`, proving availability only. Two newer preview deployments exist from 08:44–08:49 IST: `property-assistant-e0sb9mn6o` is Ready and `property-assistant-3t7ma94w1` is Error. Neither is production or owns the live alias, and Vercel inspection did not expose a source branch or immutable commit, so their source custody, review state and rendered acceptance remain unknown. The local V2 checkout remains at unpushed `ffb00731`, two commits ahead of its tracking branch and with an untracked `.worktrees/` directory; the separate SE Systems demo worktree remains at the same head with seven modified and two untracked paths and no upstream. No Supabase data, RLS or migration probe ran, and no repository, database, alias or production mutation was made.

**Live source-custody reconciliation, 2026-08-19 16:02 IST:** No verified remote delivery movement: GitHub `main` remains `b1629c34`, with twelve open pull requests, six non-PR issues, no repository rulesets and no `main` branch protection; `https://portal.openhouseai.ie` returned HTTP 200, which proves availability only. The local V2 checkout remains at unpushed `ffb00731`, two commits ahead of the current remote-tracking branch `25c09c9c`. A separate, previously unrecorded SE Systems demo worktree at `/Users/samdonworth/GroundZero/worktrees/se-systems-care-video-20260814` is on branch `demo/se-systems-care-video-20260814` at the same `ffb00731` head, has no upstream, and is dirty with seven modified and two untracked paths. This is source-custody drift only: the reconciliation established no immutable commit, review, test/build receipt, deployment, rendered-surface acceptance or production-data change for that worktree. No repository or production mutation was made.

**Live check, 2026-08-14 04:04 IST:** No verified delivery movement since the 13 August check. GitHub `main` remains at `b1629c34`; the queue remains twelve open PRs and six non-PR issues; PR #205 remains OPEN, MERGEABLE and CLEAN at exact head `5d56e3bb` with its five recorded checks successful; no pull request is associated with the current `main` commit. Repository rulesets remain empty and `main` remains unprotected. Vercel production deployment `property-assistant-mi8xczgvc` remains Ready and owns the `portal.openhouseai.ie` alias; the portal returned HTTP 200. The local V2 checkout remains at unpushed `ffb00731`, two commits ahead of its remote tracking branch, and the current `main` tree still contains none of the three probed My Home component/API paths. No Supabase data, migration or RLS probe was run: `SUPABASE_ACCESS_TOKEN` is unset, and although the Docker daemon is now available, `supabase status` fails because the local `supabase_db_property-assistant` container/stack does not exist. The database-authority blocker therefore remains, but its exact local cause is an absent project stack rather than an unavailable Docker daemon. No production mutation or rendered homeowner acceptance was attempted.

**Live check, 2026-08-13 16:07 IST:** Material delivery movement occurred after the prior check. GitHub `main` advanced directly from `ad327a4b` to verified commit `b1629c34` at 15:45 IST. The commit changes only `apps/unified-portal/lib/assistant/formatting.ts` and adds `tests/assistant/chat-markdown-lists.test.ts`; its stated scope is ordered-list, nested-list and partial-stream rendering. GitHub associates no pull request with the commit. Twelve PRs and six non-PR issues remain open. PR #205 remains OPEN, MERGEABLE and CLEAN at exact head `5d56e3bb` with its five recorded checks successful. Repository rulesets remain empty and `main` remains unprotected. Vercel production deployment `property-assistant-mi8xczgvc` cloned `main` at `b1629c3`, completed successfully, is Ready, and now owns the `portal.openhouseai.ie` alias; the public portal returned HTTP 200. This proves that the exact GitHub commit built and is being served. It does not prove the repaired formatting on a rendered homeowner surface, full type or lint validation, Supabase correctness or production-data integrity. The Vercel log explicitly skipped type and lint validation and reported 19 dependency-audit findings (4 moderate, 13 high and 2 critical); those findings are recorded as release debt, not attributed to this two-file repair. The live commit contains no My Home paths, but its direct promotion confirms the independently reviewed current-live guard is still not enforced. The local V2 checkout remains at unpushed `ffb00731`, two commits ahead of its remote tracking branch. No Supabase data, migration or RLS probe was run because the required database-authority path remains unavailable in this reconciliation.

**Superseded live check, 2026-08-13 12:01 IST:** No verified delivery movement since 6 August. GitHub `main` remained unprotected at `ad327a4b`; repository rulesets were empty. Twelve PRs and six non-PR issues were open. PR #205 remained OPEN, MERGEABLE and CLEAN at exact head `5d56e3bb`, with its five recorded checks successful. Vercel production `property-assistant-jsd3y3r67` remained Ready; duplicate production entry `property-assistant-clznx4vqo` reported UNKNOWN, and preview `property-assistant-oxrxrpeto` remained Error. A newer preview `property-assistant-23zx28spb` was Ready. `https://portal.openhouseai.ie` returned HTTP 200 in 0.38s. The local V2 checkout remained at unpushed `ffb00731`, two commits ahead of its remote tracking branch. No Supabase data, migration or RLS probe was run because the required database-authority path was unavailable in that reconciliation.

**Superseded live check, 2026-08-06 20:20 IST:** Second sync of the day. No change since the 16:10 check. `origin/main` is still `ad327a4b` (commit 2026-06-28T13:16:35Z); repository last pushed 2026-08-03T07:46:14Z. Twelve PRs open and six non-PR issues open, identical lists. PR #205 remains OPEN, MERGEABLE and CLEAN at head `5d56e3bb`, last updated 2026-08-03T07:50:40Z. Vercel production `property-assistant-jsd3y3r67` is Ready at 6 days old; the same-day duplicate production entry `property-assistant-clznx4vqo` still reports UNKNOWN with no duration; one preview from 6 days ago (`property-assistant-oxrxrpeto`) is in Error state. `https://portal.openhouseai.ie` returned HTTP 200 in 0.56s. Supabase CLI is authenticated and lists four projects (OpenBook, Runna, OpenHouse Database V2 `mddxbilpjukwskeefakz`, sam@evolvai.ie's Project); Docker is up, but no project is linked in this working copy and `supabase migration list` rejects `--project-ref`, so remote anomaly checks still need a link plus database password. `~/Documents/Obsidian Vault` remains unreadable: `stat` on the directory succeeds but `ls`, `find` and a Python `os.listdir` all hang until killed, so the notes named in the sync job still could not be read or updated. See [[Daily/2026-08-06]].

**Live check, 2026-08-06 16:10 IST:** No delivery movement. `origin/main` remains `ad327a4b` (2026-06-28); repository last pushed 2026-08-03T07:46:14Z, which was the PR #205 branch push. Twelve PRs are open (#205, #204, #180 draft, #147, #146, #104, #98, #41, #40, #38, #11, #6); #205 is still MERGEABLE and CLEAN at head `5d56e3bb` and unmerged, and #204 is also CLEAN. The same six non-PR issues remain open (#195, #194, #130, #128, #125, #123). The serving Vercel production deployment `property-assistant-jsd3y3r67` is Ready at 6 days old and `https://portal.openhouseai.ie` returned HTTP 200 in 0.56s; a same-day second production entry `property-assistant-clznx4vqo` reports status UNKNOWN and is worth an eyeball. The Supabase CLI is now authenticated and `supabase projects list` succeeds, and Docker is now running, so the previously recorded Docker blocker is cleared; remote anomaly checks still need a linked project ref or explicit `--project-ref`, and `SUPABASE_ACCESS_TOKEN` is unset in the job shell. Separately, `~/Documents/Obsidian Vault` is currently unreadable: directory listing and file reads hang and time out, so the notes named in the sync job could not be read or updated. See [[Daily/2026-08-06]].

## Current direction: 2026-07-28

**PR 205 and developer-proof checkpoint, 2026-08-03:** Exact independently reviewed commit `5d56e3bbf73de57a40231ef8236b68b46dd107d3` was pushed to existing PR #205. GitHub now reports the PR mergeable and `CLEAN`; Unified Portal Quality, PWA and Capacitor audit, Mobile release readiness, Vercel and Vercel Preview Comments all passed against that exact head. Nothing was merged, promoted to production or applied to Supabase. Migration 073 remains a separate production operation requiring explicit approval. A truthful six-page Longview developer proof pack is complete at [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]] and `artifacts/openhouse-proof-pack/OpenHouse_Longview_Developer_Proof_Pack_2026-08-03.pdf`. It uses the conservative 259-question, 79-home-context evidence set and excludes unsupported accuracy, workload, retention, payment and customer-endorsement claims. The next external commercial action remains accepting and progressing Carol Tallon's Bridgewater introduction.

**My Home release boundary, 2026-08-03:** Current live portals must remain without the new My Home option because those homes are not connected to the required energy-system data. Repository inspection confirms `origin/main` does not track the My Home component, purchaser home-energy/home-model routes or home-energy intelligence layer; the isolated V2 line does. PR #205 contains none of those paths, so it does not leak My Home, although its own release gates remain. Production fixes must branch from current `origin/main`; My Home continues only on an isolated V2 branch and preview until a server-controlled, default-off exact-home capability gate and rollout proof exist. See [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]].

**My Home truth-boundary checkpoint, 2026-08-03:** Local V2 commit `ffb00731` independently passed adversarial review after closing fixture-identity authority, negated evidence and bill-provenance bypasses, operational-error ambiguity, pre-auth service-client creation and stale PostgREST reads. Focused smokes, non-incremental typecheck and a clean isolated production build passed. The commit remains unpushed and undeployed. The next V2 slice is a preview-only, default-deny, exact-home server capability gate; no client flag, migration, production environment or alias change is authorised.

**Current-live enforcement status, 2026-08-03:** Local guard commit `0ae16083` independently passed code review after structural frontend, library, environment, build, deployment, workflow, mobile-wrapper, rename and policy-self-modification bypasses were closed. GitHub reports no repository rulesets and `main` returns `404 Branch not protected`, so no required merge check exists and the guard must not be described as enforced. Vercel production-branch and alias isolation are unverified. The commit remains unpushed. Approval-gated activation is tracked in [[items/oh-live-portal-boundary-activation]]. The consolidated implementation handoff is [[briefs/2026-08-03-current-live-boundary-and-v2-handoff]].

**Verified local autoresearch checkpoint, 2026-08-03:** A checksum-verified private local model and fail-closed, digest-pinned Colima evaluator completed the synthetic OpenHouse retrieval mechanics pilot. The held-out score improved from `0.666667` to `1.000000`, reproduced in a fresh disposable container, and two later losers reverted automatically. No production code or data was used or changed. This is containment and workflow evidence, not an OpenHouse answer-quality result. The next useful gate is a frozen non-production benchmark with independently certified expected evidence before any real retrieval tuning. See [[briefs/2026-08-03-local-model-m4-air-recommendation]].

**YC reviewer production checkpoint, 2026-08-01:** The Fall 2026 application is submitted and in review. The authentic sanitized 8 Longview Park reviewer portal is live at its stable URL with exact-home `reviewer_full` authority, direct REST/RPC/storage/GraphQL probes pass after migration 076, browser and grant-lifecycle suites pass, and the Assistant returns the verified AquaBox warranty date as 7 November 2026. Existing reviewer credentials remain unchanged. Final evidence and residual non-blocking work are in [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]].

**Care authentication hardening, 2026-08-01:** Migration 077 and the exact 44-file artifact now pass independent review. Commit `7ef348815eda44dfa12009f84fa24d00d501ff6f`, patch SHA-256 `d28d85b2dda942bbd92a02e14fce4dbbb1a444d519dd0da7ec4f8f65f975d8d8`, was deployed only to SSO-protected immutable preview `dpl_hCxwgBHcXbtqtmxHnsZs5HA86CiJ`. The protected deployed matrix passed 29/29 across password login, exact-home access, all protected operational APIs, foreign-installation denial, two-turn SSE continuity, ordered history, logout and post-logout denial. Ten concurrent invalid attempts produced shared database count 10 and generic 401s; attempt 11 produced 429 with positive Retry-After and count 11 across 11 distinct Vercel request IDs. Hydrated mobile Chrome passed 12/12 for login, truthful system/telemetry presentation, Profile/Assistant navigation, verified-empty history, logout and copied-URL denial with zero page errors. All controlled messages, conversations, service requests and limiter keys were removed. The temporary Vercel automation bypass was revoked, SSO remains enabled, and Vercel's automatically created rolling preview alias was removed after proof. Nothing was pushed, merged or promoted; `openhouse-yc-showhouse.vercel.app` remains on certified deployment `dpl_8G4UazFJPjBukkyAPjyTTQ1xN8Rz`. Password-recovery lifecycle proof remains blocked by the absence of a controlled mailbox; controlled multi-home and installer-fallback runtime proofs remain optional scope gates before broad release. See [[briefs/2026-08-01-openhouse-care-password-and-authority-hardening]].

**YC and NDRC status, 2026-07-29:** OpenHouse is Sam's first YC application and the only company he has considered applying with. He is fully committed to going full-time and is open to relocating to San Francisco if accepted. Sam completed the NDRC pre-accelerator interview on 29 July 2026 and reports that it went really well; the formal decision is pending. NDRC has not offered funding, requested equity or created a commitment. OpenHouse has €0 revenue, no outside investment and approximately €10,000 of founder funding.

**Commercial correction, 2026-08-05:** Sam confirmed that Bridgewater, Hallmark and Cairn have said no, multiple Glenveagh routes have not produced a meeting, and O'Flynn Construction is not a credible buyer route because of direct competitive dynamics. Sam estimates that the closed or inaccessible developers represent approximately 15 per cent of annual Irish new-home output. He will continue testing Ireland, but UK and US expansion become rational primary routes if the remaining material Irish channels do not open. The execution priority remains founder-led revenue, not speculative product work. See [[briefs/2026-08-05-openhouse-revenue-first-founder-sales-reset]].

**Superseded commercial snapshot, 2026-08-04:** Carol Tallon introduced Sam to David at Bridgewater, confirmed she had spoken to both about each other and sent David the OpenHouse interview, and Sam replied proposing a call or meeting. This was the position before Sam's 5 August confirmation that Bridgewater said no. The supporting proof and rapid-onboarding material remain reusable for other developer conversations. See [[briefs/2026-08-04-bridgewater-meeting-preparation]], [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]], [[items/oh-bridgewater-warm-introduction]], [[items/oh-bridgewater-rapid-onboarding]] and [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]].

**Superseded commercial research checkpoint, 2026-08-04:** The initial developer queue treated Bridgewater, Evara, Glenveagh, Cairn, Sean Gallagher and O'Flynn Group as possible routes. Sam's 5 August founder correction closed or materially downgraded Bridgewater, Cairn, Glenveagh and O'Flynn. The corrected queue is [[briefs/2026-08-04-openhouse-qualified-developer-outreach-queue]]. Care remains HOLD on build and GO only on five installer-process interviews followed by a €500 prepaid 30-day concierge pilot; one payment is the minimum build signal. DTC should validate a €79 Upgrade Ready Plan before any €5/month subscription thesis. See [[briefs/2026-08-04-openhouse-care-installer-paid-validation]] and [[briefs/2026-08-04-openhouse-dtc-upgrade-ready-plan-validation]].

OpenHouse is closing its external-pilot safety gates while opening a bounded DTC validation track. Developer commercial proof owns the week: use only verifiable Longview evidence and execute the corrected Ireland/UK/US founder-sales reset. DTC remains a capped manual research lane. Its sequence is now coherent: a free, no-card ten-minute reveal tests recognition and usefulness; a real €79 payment or refundable commitment is required before deeper concierge fulfilment; twenty paid or payment-committed plans still gate broad consumer productisation. The three-home truth test validates activation mechanics and evidence quality, not demand. Developer handover and DTC remain two routes into one living Home Record. This direction does not authorise production deployment, migration application, paid acquisition, vendor contracting, payment handling or device control.

**Founder Alpha checkpoint, 2026-07-27:** A private local tracer bullet now proves one synthetic capture → understand → notice → act → remember loop. It accepts only the bundled fictitious heat-pump artifact, creates provenance-bearing candidate facts, requires confirmation of all material evidence, generates one deterministic Money/Comfort/Risk notice, requires explicit advisory approval, records a bounded outcome receipt and restores only invariant-valid local state. The implementation is default-off and development-only; production page/API probes return 404, no Supabase, database, storage, OCR, LLM, notification, connector or device-control path was added, and the final fail-closed review passed. Local code checkpoint: `a210268c` on `feat/dtc-founder-alpha`; nothing was pushed or deployed. This proves product-loop mechanics only, not OCR, production memory, live monitoring, identity, measured savings or demand.

**Next bounded proof, 2026-07-28:** Run one operator-mediated test on Sam's occupied home before further DTC build. Required private inputs are Sam's Eircode or address, building confirmation, explicit consent and one current homeowner goal. The first reveal must comply with [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]], preserve claim-level evidence and provenance, and request at most one optional artifact. Pass only when the result changes a decision, action or question without founder rescue. A merely interesting reveal or stated willingness does not count. If deeper fulfilment is warranted, payment or a refundable commitment comes after the free reveal and before manual continuation. Longview private material requires organisational permission; an independent older-home test requires that owner's consent; vendor credentials are not required for this proof.

## Prior reset: 2026-07-24
OpenHouse is the active strategic focus. The marketing site is nearly complete. The earlier statement that older DTC notes were historical has now been superseded only by the bounded 2026-07-27 DTC validation decision. Developer outreach, NDRC preparation and market-readiness work remain active.

**Market-readiness audit, 2026-07-24:** The canonical build succeeds, but OpenHouse is not yet safe to represent as enterprise/developer-rollout ready. Verified P0 work includes tenant-isolation fixes in an isolated local branch; unresolved blockers include dependency exposure, runtime schema mutation, unsecured QR handover links, release-tree ambiguity and fail-soft production configuration. See [[briefs/2026-07-24-openhouse-market-readiness-audit]].

**Local readiness progress, 2026-07-25:** [[briefs/2026-07-25-overnight-readiness-progress]] records verified local-only security hardening and provenance checks. The work remains unpushed and does not remove the recorded production configuration blocker or the need for Sam's decision on the tracked legacy subtree.

The V2 rollout is still on track for end of month. Real Longview Estates data remains live across Longview Park, Ardan View, Rathard Lawn, and Rathard Park. PR #184 and PR #186 remain merged. Checked 2026-07-01. GitHub open PRs remain #204, #180, #147, #146, #104, #98, #41, #40, #38, #11, and #6. Current open issues in sam-evolv/property-assistant remain #195, #194, #130, #128, #125, and #123. Vercel production is still Ready. Supabase remote anomaly checks are still blocked in this environment because `SUPABASE_ACCESS_TOKEN` is unset and local `supabase status` cannot run without a working Docker daemon.

**Live check, 2026-07-15 07:00 IST:** the local `property-assistant` clone is clean, with no commits since yesterday; GitHub reports the default `main` branch was last pushed on 2026-07-02. The 11 open PRs and 6 open issues are unchanged in count; PR #204 is the only clean mergeable PR, while #180 is draft/dirty and #147, #146, #104, #98, #41, #38, #11 and #6 are dirty (with #40 unstable). Vercel's latest `property-assistant` production deployment is **Ready**, but is 17 days old; its newest preview deployment is 13 days old and two previews from 17 days ago are errored. This is a durable delivery-staleness signal, not evidence of a current production outage.

**Live check, 2026-07-16 07:00 IST:** GitHub `main` is unchanged at `ad327a4b` (commit 2026-06-28; repository last pushed 2026-07-02). The same 11 PRs and 6 non-PR issues remain open; #204 is still the only clean mergeable PR. Both available local clones are clean but on old feature/preview branches, not `main`; they should not be treated as an up-to-date production checkout. Vercel lists the latest `property-assistant` production deployment as **Ready** (18 days old) and the newest preview as **Ready** (14 days old); `https://portal.openhouseai.ie` returned HTTP 200 from Vercel. This confirms availability, while reinforcing delivery staleness; it does not validate Supabase data or RLS because remote Supabase access remains unavailable.

**Live check, 2026-07-17 07:01 IST:** No delivery movement since 16 July. GitHub `main` remains `ad327a4b` (committed 2026-06-28; repository last pushed 2026-07-02). All 11 PRs and 6 non-PR issues remain open; #204 remains the only clean mergeable PR and was last updated 2026-06-05. Both local clones are clean but remain on stale non-`main` branches. GitHub records the latest production deployment as **success** on 2026-06-28 (now 19 days old), while `https://portal.openhouseai.ie` returned HTTP 200 in 0.48s. Production is available but delivery is stale. Remote Supabase/RLS and migration-anomaly validation remain blocked: `SUPABASE_ACCESS_TOKEN` is not configured and local Docker is unavailable.

**Live check, 2026-07-18 morning IST:** GitHub `main` still points to `ad327a4b` (2026-06-28), and the queue is unchanged: 11 open PRs, 6 non-PR issues, with #204 the only `CLEAN` merge candidate. Vercel production for `ad327a4b` is **READY**; it was deployed 2026-06-28 and is now 20 days old. The public portal returned HTTP 200 in 0.20s. The canonical local clone at `repos/property-assistant` is clean but remains on the stale feature branch `claude/new-session-0jdf52` at 2026-06-29, so it is not a current production checkout. A separate Desktop clone has a broken branch with a very large staged/untracked working tree and should not be used for delivery work without explicit recovery and review. Remote Supabase/RLS validation remains unavailable because no `SUPABASE_ACCESS_TOKEN` is configured and local Docker is unavailable.

## Summary
- Production migration is still the top priority.
- Vercel production deployment was inspected again on 2026-07-01 and the latest deployment is Ready.
- Guardrails remain in shadow mode and the eval suite still needs expansion before flipping to active.
- Supabase remote anomaly checks remain blocked because `SUPABASE_ACCESS_TOKEN` is unset. Docker is available, but local `supabase status` cannot run because the `supabase_db_property-assistant` container/stack is absent.

## Next actions
- Keep monitoring the production migration until the backup tables can be dropped after a clean week.
- Triage any open issues that affect the portal experience.
- Execute the corrected founder-sales reset across remaining credible Irish routes and parallel UK/US prospecting. Use the active operating kit, 31-row pipeline with 24 active contact-ready accounts, market messaging and one-scheme proposal template. Twelve UK and twelve ranked US accounts now have sourced routes, with two additional US alternatives parked; ten first-wave messages plus two second-wave drafts are ready for Sam's approval. The grounded Irish named-decision-maker queue now prioritises Ian McKee and Michael Hynes at Evara, plus distinct relationship-led messages for Sean Gallagher and Gavin Fitzgerald. The UK aftercare sprint is P0 commercial validation and the US regional-builder warranty lane is active discovery. Do not treat Bridgewater, Cairn, Glenveagh or O'Flynn as active pipeline without a materially new route. See [[briefs/2026-08-05-openhouse-revenue-first-founder-sales-reset]], [[briefs/2026-08-05-openhouse-founder-sales-operating-kit]], [[briefs/2026-08-05-openhouse-uk-aftercare-prospect-lane]], [[briefs/2026-08-05-openhouse-us-builder-channel-prospect-lane]], [[briefs/2026-08-05-openhouse-first-message-approval-queue]], [[briefs/2026-08-05-openhouse-paid-pilot-proposal-template]], [[briefs/2026-08-04-openhouse-qualified-developer-outreach-queue]], [[items/oh-uk-aftercare-design-partner-sprint]] and [[items/oh-us-builder-warranty-discovery-sprint]].
- Run the accelerator waiting period as a 30-day commercial-proof sprint: two developer discovery conversations, one written one-scheme pilot proposal and one paid pilot, signed letter of intent or decision-changing rejection. See [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]].

## Risks
- Supabase remote anomaly checks are blocked because no access token is available; the local fallback is also unavailable because the project Supabase stack/container is absent, despite Docker itself being available.

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
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
- [[briefs/2026-07-24-openhouse-openbook-reset]]
- [[briefs/2026-07-25-overnight-readiness-progress]]
- [[briefs/2026-07-27-market-intel]]
- [[briefs/2026-07-30-openhouse-yc-live-application-execution]]
- [[briefs/2026-08-01-openhouse-care-password-and-authority-hardening]]
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]]
- [[briefs/2026-08-02-pr-205-merge-readiness-audit]]
- [[briefs/2026-08-03-bank-holiday-founder-reset]]
- [[briefs/2026-08-03-current-live-boundary-and-v2-handoff]]
- [[briefs/2026-08-03-local-model-m4-air-recommendation]]
- [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]]
- [[briefs/2026-08-04-bridgewater-meeting-preparation]]
- [[briefs/2026-08-04-business-post-ai-leadership-awards-application]]
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[briefs/2026-08-04-openhouse-care-installer-paid-validation]]
- [[briefs/2026-08-04-openhouse-dtc-upgrade-ready-plan-validation]]
- [[briefs/2026-08-04-openhouse-founder-morning-action-brief]]
- [[briefs/2026-08-04-openhouse-product-truth-night-audit]]
- [[briefs/2026-08-04-openhouse-qualified-developer-outreach-queue]]
- [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]]
- [[briefs/2026-08-04-tuesday-founder-regroup]]
- [[briefs/2026-08-05-openhouse-first-message-approval-queue]]
- [[briefs/2026-08-05-openhouse-founder-sales-operating-kit]]
- [[briefs/2026-08-05-openhouse-paid-pilot-proposal-template]]
- [[briefs/2026-08-05-openhouse-revenue-first-founder-sales-reset]]
- [[briefs/2026-08-05-openhouse-uk-aftercare-prospect-lane]]
- [[briefs/2026-08-05-openhouse-us-builder-channel-prospect-lane]]
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]]
- [[briefs/2026-08-10-aire-business-operating-intelligence-thesis]]
- [[briefs/2026-08-10-openhouse-west-x-west-future-foundry-entry]]
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[briefs/bridgewater-openhouse-discovery-brief-2026-07-22]]
- [[briefs/chatgpt-voice-founder-os-2026-07-31]]
- [[briefs/consultancy-cork-property-prospect-list-2026-06-30]]
- [[briefs/consultancy-quick-revenue-strategy-2026-06-29]]
- [[briefs/daily-portfolio-brief-2026-07-12]]
- [[briefs/daily-portfolio-brief-2026-07-14]]
- [[briefs/daily-portfolio-brief-2026-07-15]]
- [[briefs/daily-portfolio-brief-2026-07-16]]
- [[briefs/daily-portfolio-brief-2026-07-17]]
- [[briefs/daily-portfolio-brief-2026-07-18]]
- [[briefs/daily-portfolio-brief-2026-07-19]]
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[briefs/openhouse-a-rated-homeowner-policy-thesis-2026-07-28]]
- [[briefs/openhouse-a-rated-homeowner-primary-integration-2026-07-28]]
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]]
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]]
- [[briefs/openhouse-dtc-energy-savings-guarantee-research-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]]
- [[briefs/openhouse-ireland-funding-routes-2026-06-29]]
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]
- [[briefs/openhouse-ndrc-accelerator-pitch]]
- [[briefs/openhouse-ndrc-application-pack-2026-07-01]]
- [[briefs/openhouse-ndrc-interview-final-card-2026-07-29]]
- [[briefs/openhouse-ndrc-pre-accelerator-three-slide-fable-prompt-2026-07-28]]
- [[briefs/openhouse-ndrc-submission-sprint-2026-07-01]]
- [[briefs/openhouse-perfect-yc-application-playbook-2026-07-29]]
- [[briefs/openhouse-post-cairn-strategy-2026-06-29]]
- [[briefs/openhouse-pre-revenue-vc-shortlist-2026-07-29]]
- [[briefs/openhouse-recent-yc-acceptance-range-assessment-2026-07-29]]
- [[briefs/openhouse-show-house-evidence-capture-2026-07-28]]
- [[briefs/openhouse-uk-us-expansion-research-2026-06-29]]
- [[briefs/openhouse-yc-acceptance-patterns-and-competitive-positioning-2026-07-29]]
- [[briefs/substack-draft-2026-08-03-the-waiting-room]]
- [[briefs/substack-draft-2026-08-16-the-machine-kept-receipts]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[briefs/wiki-refiner-2026-06-28]]
- [[briefs/wiki-refiner-2026-07-25]]
- [[briefs/wiki-refiner-2026-07-26]]
- [[briefs/wiki-refiner-2026-07-27]]
- [[briefs/wiki-refiner-2026-07-28]]
- [[briefs/wiki-refiner-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-30]]
- [[briefs/wiki-refiner-2026-07-31]]
- [[briefs/wiki-refiner-2026-08-01]]
- [[briefs/wiki-refiner-2026-08-02]]
- [[briefs/wiki-refiner-2026-08-03]]
- [[briefs/wiki-refiner-2026-08-04]]
- [[briefs/wiki-refiner-2026-08-05]]
- [[briefs/wiki-refiner-2026-08-06]]
- [[briefs/wiki-refiner-2026-08-07]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]
- [[briefs/wiki-refiner-2026-08-14]]
- [[briefs/wiki-refiner-2026-08-15]]
- [[briefs/wiki-refiner-2026-08-16]]
- [[briefs/wiki-refiner-2026-08-17]]
- [[briefs/wiki-refiner-2026-08-18]]
- [[briefs/wiki-refiner-2026-08-19]]
- [[briefs/wiki-refiner-2026-08-20]]
- [[companies/openhouse-ai]]
- [[context/capture-workflow]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/openhouse-openbook-design-system]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[decisions/openhouse-ten-minute-dtc-activation-contract-2026-07-28]]
- [[goals/oh-activation]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-funder-pitch]]
- [[goals/oh-guardrails-active]]
- [[goals/oh-room-inference]]
- [[goals/oh-v2-launch]]
- [[items/consultancy-cork-property-outreach]]
- [[items/oh-answer-quality-audit-loop]]
- [[items/oh-bridgewater-rapid-onboarding]]
- [[items/oh-bridgewater-warm-introduction]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-dtc-home-savings-scan-concierge]]
- [[items/oh-guardrails-eval]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-live-portal-boundary-activation]]
- [[items/oh-marketing-site-conversion-instrumentation]]
- [[items/oh-onboarding-cut]]
- [[items/oh-onboarding-packet-automation]]
- [[items/oh-pricing-experiment]]
- [[items/oh-production-migration]]
- [[items/oh-proof-asset-engine]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-sean-gallagher-reconnection]]
- [[items/oh-sprint5-close]]
- [[items/oh-uk-aftercare-design-partner-sprint]]
- [[items/oh-us-builder-warranty-discovery-sprint]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-project-state-reconciler]]



---
