---
title: "Substack draft: The week got more precise, not more complete"
date: 2026-09-27
period_start: 2026-09-21
period_end: 2026-09-27
status: private-draft
publish_status: not-published
privacy: private until Sam decides otherwise
source: Ground Zero weekly synthesis
review_required: true
previous: "[[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]"
role: brief
---

# The week got more precise, not more complete

Last week, the clean fact was that a client had paid a deposit.

This week did not produce an equally clean follow-on milestone. The app did not become finished. OpenHouse did not gain a new paying developer. A set of live systems moved, but most of the important acceptance gates stayed open.

What changed was the precision of the warnings.

That is useful. It is also much less satisfying than a launch, a buyer or a completion payment.

## Paid work can still be a no-go

The Here’s Health app is still paid client work and still in build.

The draft pull request advanced again this week. It now sits 168 commits and 374 pull-request-reported changed files ahead of the repository’s main branch. The latest seven commits touched 27 files across authentication loading, café behavior, store builds, Square work and release records.

Both checks on the current head ran and failed. The pull request remains a draft. The project’s own current-status record still says **NO-GO**.

The source records say that an Android build was saved as an inactive internal-testing draft, that a signed iOS build is ready but not uploaded, and that an updated standalone phone build was installed and launched. Those are operational claims in the project record, not independently accepted release evidence. Signed-device timing, in-store behavior, provider behavior, app-store submission and client acceptance remain open.

This is the less flattering half of being paid to build something real. The deposit turned work into an obligation, but it did not shorten the distance between “a build exists” and “the client can safely rely on it.”

A large branch is not a finished product. A signed build is not a release. An installed phone build is not client acceptance. Failed checks do not become less important because the commercial relationship is real.

## OpenHouse became easier to describe and harder to wave away

OpenHouse’s production source did not advance this week. The portal remained available and the exact Supabase project remained healthy.

A direct database reconciliation established that all 164 public tables have row-level security enabled. That sounds reassuring until it is put beside the rest of the evidence.

The current security-advisor record includes 30 row-level-security-enabled tables with no policies, two security-definer views, 17 mutable-search-path function findings, four security-definer functions executable by authenticated users, and disabled leaked-password protection. Six authenticated-global SELECT policies and 17 backup-named public tables also remain open review boundaries.

Those findings do not prove that a homeowner’s data can be crossed, that the system is exploitable or that an incident has occurred. No homeowner rows were read for this work. No controlled second-user journey, persisted-row comparison or rendered homeowner acceptance was exercised.

They do prove that “the database is healthy” and “tenant isolation is accepted” are different statements.

The dashboard now puts the tenant-data gap first for OpenHouse. That is the correct order. A living Home Record depends on trust in the boundary between one home and another. Better research, stronger positioning and a working public portal cannot compensate for an unclosed isolation gate.

This is progress in the narrow sense that the unknowns are better named. It is not progress in the sense that a buyer has paid for OpenHouse or that the risk has been removed.

## More things were live than finished

OpenBook’s Empire Gym site moved onto a production deployment that can be tied back to source. The public site rendered its GymMaster membership routes and its website-admin login.

No authenticated text or photo edit was accepted. Tenant and photo isolation were not tested. Billing, access state, payment and downstream GymMaster enrolment remain unverified.

Donworth Studio’s public site also moved. The broken apex-host route was repaired, and the app privacy and deletion wording was published on a source-bound deployment and rendered in Chromium. The page now describes account deletion, retained deletion receipts and app privacy boundaries.

That publication is real. Legal acceptance, client acceptance and reconciliation with the actual app-store submissions are not. The signed Donworth Studio desktop app also remains byte-stable and unlaunched, with authenticated Mac use, genuine Windows runtime and physical-device acceptance still open.

The pattern is repetitive because the distinction matters. A page can be live without its claims being accepted. A login can render without the authenticated workflow working. A signed desktop bundle can exist without anyone exercising the current user journey.

The machinery moved. The evidence did not permit me to call the products complete.

## Research multiplied faster than validation

Four new Evolv research proposals were added during the week.

They covered a renovation-passport-compatible evidence appendix, a grant and grid-connection readiness receipt, an electricity and carbon-claims boundary, and a future Local Business Flex readiness screen.

There is a coherent idea underneath them. The first commercial rooftop is live, reporting is still manual, and the possible value is not another dashboard. It is a source-linked record that helps an owner understand what was installed, what the grid and grant process requires, what the operating evidence actually supports, where a carbon claim stops, and whether a future flexibility opportunity is real.

None of the four proposals is a live service. None accessed customer data, contacted a customer, changed an operating asset or established willingness to pay. The Local Business Flex product is still under review, with final locations and prices unpublished. The other proposals all require permissioned source files and qualified confirmation before they can say anything useful about a real site.

This is the founder trap in a form I know well. Research can make a business feel as if it is widening. In reality, these notes are only useful if one bounded test changes an owner’s decision and eventually earns money. Until then, they are better questions, not a new line of revenue.

## What I actually reported feeling

There is no fresh mental or physical check-in in Ground Zero for this week.

The latest direct emotional report remains 3 August, when I said I felt stagnant rather than defeated. The latest physical-context correction remains 4 August, when I said the bank-holiday weekend had been genuine time off and that I was returning to the gym. The latest completed training session in the record is a lower-body session from 6 August.

None of that describes 21 to 27 September.

I cannot honestly say whether the failed checks frustrated me, whether the paid client work felt heavier, whether the OpenHouse security findings worried me, or whether the live-site movement felt encouraging. I cannot say whether I trained, slept properly, ate well or carried the week comfortably around a full-time job.

The record can now describe deployment lineage, database-policy findings and app-store boundaries in detail. It cannot describe the person doing the work this week.

That imbalance is part of the honest account. The system is becoming better at recording what the businesses did than how I was while doing it.

## The honest result

This week did not reverse last week’s commercial progress. The client remains paying and the app remains in build.

It also did not close the consequence of that progress. The current app branch is large, its checks failed, and launch is still a no-go. OpenHouse has a more specific tenant-safety review set but no recorded remediation or new paid developer validation. OpenBook and Donworth Studio produced real public-surface movement without closing their authenticated, legal or client-acceptance gates. Evolv gained four disciplined research proposals and no recorded buyer validation.

The reviewed Ground Zero record contains no new founder-certified payment or buyer commitment dated this week. That is not proof that nothing happened outside the vault. It is the limit of what this draft can claim.

The tempting version is that everything is converging at once: a paid app, a safer core product, a live client site, a stronger studio and a new energy-assurance opportunity.

The accurate version is more demanding.

One paid build is unfinished. One core company has an unresolved data boundary. Two public surfaces advanced further than their accepted workflows. Four new ideas are still proposals. My current physical and mental state is absent from the record.

The week got more precise. It did not become complete.

## Verification boundary

### Verified in Ground Zero or named live-source receipts

- Here’s Health remains a paying client and the app remains in build. The deposit and completion-payment terms were founder-certified on 16 September, but the vault does not contain the invoice or bank receipt.
- The current Here’s Health draft pull request is recorded as 168 commits and 374 pull-request-reported changed files ahead of `main`. Seven commits touching 27 files were added beyond the prior recorded head.
- Both current-head checks ran and failed. The pull request remains draft, has no recorded review or exact-head deployment, and the exact-head status remains `NO-GO`.
- Android, iOS and standalone-phone build statements are source-recorded operational claims. They were not independently accepted as signed-device, in-store, app-store or client-release evidence.
- OpenHouse production source remained unchanged during the reviewed period. The portal remained available and the exact Supabase project remained healthy.
- A direct read-only reconciliation reported all 164 public tables with row-level security enabled. Current security advisors also reported 30 row-level-security-enabled tables with no policies, two security-definer views, 17 mutable-search-path findings, four authenticated-executable security-definer functions and disabled leaked-password protection. These are findings, not proof of exploitability or a data breach.
- No OpenHouse homeowner row, controlled cross-user actor path, persisted-row comparison or rendered homeowner acceptance was exercised in the reviewed reconciliation.
- Empire Gym production became source-bound and rendered GymMaster routes plus an admin login. Authenticated editing, photo isolation, billing, payment and downstream enrolment were not accepted.
- Donworth Studio’s apex host was restored, and updated app privacy and deletion wording was published on a source-bound deployment and rendered in Chromium. Independent legal, client and app-store acceptance remain open.
- Four Evolv notes dated 22, 23, 25 and 26 September are explicitly bounded research proposals. They do not establish a live service, customer permission, buyer demand or payment.
- No new founder-certified payment or buyer commitment dated 21 to 27 September was found in the reviewed Ground Zero notes.

### Sam’s reported feelings and physical context

- No fresh mental or physical self-report was found for 21 to 27 September 2026.
- On 3 August, Sam reported feeling stagnant rather than defeated.
- On 4 August, Sam said the bank-holiday weekend had been genuine time off and that he was returning to the gym.
- A health note records a completed lower-body session on 6 August. It is historical context, not evidence about the current week.
- This draft does not infer Sam’s current mood, sleep, nutrition, training, stress or physical condition.

## Statements requiring Sam’s review

- Confirm whether Here’s Health may be named publicly and whether its payment terms may be repeated outside a private journal.
- Confirm whether the pull-request size, failed checks and `NO-GO` status remain current and are fair to describe without overstating delivery risk.
- Confirm whether any signed-device test, store submission, client review or accepted release happened outside Ground Zero during the week.
- Confirm whether the OpenHouse security-advisor findings may ever be described publicly. A public version should probably generalise the counts unless disclosure serves a clear purpose.
- Confirm whether any OpenHouse buyer conversation, paid validation, proposal response or funding development from 21 to 27 September is missing from the vault.
- Confirm whether Empire Gym, GymMaster, Donworth Studio and the privacy-page work may be named publicly.
- Confirm whether any Evolv customer discussion or permissioned rooftop test changes the statement that the four notes remain research proposals.
- Add Sam’s actual mental and physical account of the week before considering publication.
- Reverify every client, payment, security, deployment, app-store and product-status claim immediately before publication.
- Remove the verification boundary and review section from a public version unless Sam wants the evidence format retained.

## Connected vault notes

- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]] - previous private founder-journal draft
- [[people/sam-donworth]] - founder profile and full-time operating reality
- [[context/dashboard]] - current portfolio operating view
- [[project_state/heres-health-app]] - paid-app source and release boundary
- [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]] - founder-certified commercial terms
- [[project_state/oh]] - OpenHouse production and security state
- [[items/oh-rls-audit]] - active tenant-data gate
- [[project_state/ob]] - Empire Gym publication and authenticated-workflow boundary
- [[project_state/donworth-studio]] - public-site and desktop acceptance state
- [[project_state/renew]] - live rooftop and manual-reporting baseline
- [[briefs/2026-09-22-evolv-commercial-renovation-passport-evidence-continuity-gate]] - bounded evidence-continuity proposal
- [[briefs/2026-09-23-evolv-commercial-solar-grant-grid-readiness-receipt]] - bounded grant and connection proposal
- [[briefs/2026-09-25-evolv-electricity-carbon-claims-evidence-boundary]] - bounded electricity-claims proposal
- [[briefs/2026-09-26-evolv-local-business-flex-evidence-readiness-gate]] - bounded flexibility-readiness proposal
- [[briefs/2026-08-03-bank-holiday-founder-reset]] - latest recorded direct emotional reflection
- [[briefs/2026-08-04-tuesday-founder-regroup]] - latest recorded physical-context correction
- [[health/2026-08-06-lower-body-session]] - latest recorded completed training session

## Backlink context

This private draft continues the founder-journal chain from [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]. Its source links create native Obsidian backlinks on the connected notes. No publication, client communication, deployment, database change, outreach or other external action is authorised by this draft.
