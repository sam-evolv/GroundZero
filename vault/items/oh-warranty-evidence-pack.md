---
id: oh-warranty-evidence-pack
company_id: openhouse-ai
domain: innovation
title: Turn warranty issues into an evidence pack
rationale: Current warranty data is split between issue_reports and assistant_media_analysis, which makes it hard to prove patterns, priority, and resolution history to developers.
council_note: New idea from gap analysis · Effort M
effort: M
impact: 78
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T11:05:00Z"
updated_at: "2026-09-20"
sync_status: "Checked 2026-06-26 16:56 IST. OpenHouse repo still has 11 open PRs and 6 open issues. Vercel production latest deployment remains Ready. Supabase remote anomaly check is blocked by missing SUPABASE_ACCESS_TOKEN and a stopped Docker daemon."
---

## Opportunity size
This is more than a filter. A warranty evidence pack lets OpenHouse package recurring defects, supporting photos, and resolution state into something a developer can actually use. That strengthens aftercare trust and creates a more defensible premium story.

## Technical approach
- Extend issue_reports with warranty metadata.
- Group related issues by scheme, unit, room, and defect type.
- Pull supporting images and analysis notes into a downloadable evidence pack.
- Add simple export formats for developer review and warranty meetings.
- Reuse room inference so the pack can cluster issues more intelligently.

## Risks
- Overpromising automated certainty on warranty classification.
- Cross-table joins could get messy if the data model stays split.
- If the export is too manual, it becomes another report no one uses.

## Effort
M. Roughly a week if it is a report and UI slice, longer if the workflow also includes approvals and signoff.

## Market timing
Timely. Buyers of proptech software are asking for more evidence, less admin, and AI that reduces aftercare noise rather than adding another inbox.

## Connects to

- [[items/oh-warranty-filter]] — warranty column is the input
- [[items/oh-warranty-triage-router]] — triager feeds the pack with classified issues
- [[goals/oh-aftercare-os]] — aftercare OS vision this serves
- [[goals/oh-room-inference]] — room inference makes the pack smarter
- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — live status
- [[context/openhouse-product-map]] — product surface this ships on


## Incubation update, 20 September 2026: latent-defects cover and claim-readiness receipt

### Bounded proposal

Narrow the first version of this item to one static, exact-home **latent-defects policy and claim-readiness receipt** for a permissioned Longview home.

The receipt should bind the home's actual insurance certificate and policy to the records a developer operator or homeowner would need to retrieve when a defect is reported: pre-handover inspection or snag material, dated issue evidence, developer correspondence, photographs, relevant system or asset identifiers, and visible gaps. It must not decide whether a defect is covered, submit a claim, replace the policy wording, or present OpenHouse as an insurer, broker, surveyor or legal adviser.

This is a manual proof inside the existing warranty evidence-pack item. It is not a HomeBond integration, a partnership approach or a separate product. It should only become a paid-pilot appendix when a live developer buyer confirms that policy and evidence retrieval is a real aftercare burden.

### Verified evidence and limits

HomeBond's current buyer page links two latent-defects insurance product summaries, Essential 300 for houses, duplexes and low-rise apartments and Essential 500 for mid- and high-rise apartments. The linked IPIDs are dated February 2023. Both say the insurance applies only to the address on the Certificate of Insurance; any restriction is recorded on that certificate; and the full policy documentation, not the summary, governs the cover.

The same IPIDs say the policyholder should arrange a thorough independent inspection before handover, report identified defects, damage or danger to the developer before completing the purchase, keep the reports and developer correspondence, and produce them to HomeBond if requested for a claim. HomeBond's current claims page starts with the policyholder checking the policy issued for the dwelling, then reporting the problem; if the matter warrants investigation, HomeBond issues a claim form and may appoint a technical adviser before a settlement report.

HomeBond says more than 700,000 dwellings have been registered with HomeBond Warranty or HomeBond Insurance since 1978. That is a provider-reported cumulative figure. It is not a count of current policies, claims, OpenHouse-addressable homes or paying buyers.

These sources establish that exact-home policy identity, dates, restrictions, inspection records and correspondence matter operationally. They do not establish that Longview uses HomeBond, that any current issue is insured, that a complete Longview record set exists, or that a developer will pay for the receipt. The selected home's actual provider, certificate and policy remain authoritative.

### Assumptions to falsify

- One permissioned Longview home has an actual latent-defects insurance certificate, policy wording and associated handover records that OpenHouse may inspect.
- The insured address and policy period can be bound to the exact OpenHouse home without guessing from scheme or house type.
- Relevant inspection, snag, issue and developer-correspondence records exist but are slower to recover than they should be.
- A source-linked receipt reduces evidence search or misrouting without making a coverage judgement.
- The result adds value beyond the current folder, issue report and insurer's own claims process.
- A live developer buyer cares about this retrieval problem enough for it to support the existing paid-validation conversation.

### Smallest validation test

Use one home and only records OpenHouse already has legitimate permission to inspect. If its provider is not HomeBond, use that provider's actual documents and treat the HomeBond sources only as evidence for the research question.

1. Freeze the actual Certificate of Insurance, governing policy wording and retrieval date. Do not rely on the public IPID where the actual documents differ.
2. Build a source matrix containing: OpenHouse home ID, insured address, provider, product or policy identifier, certificate identifier, effective and end dates, named cover sections, monetary limits, excess, restrictions, source page or section, document owner and missing field.
3. Use evidence states such as `SOURCE_CONFIRMED`, `DOCUMENT_MISSING`, `ADDRESS_MISMATCH`, `DATE_UNRESOLVED` and `PROVIDER_QUERY_REQUIRED`. Do not use `COVERED`, `VALID_CLAIM` or `DECLINED`.
4. Bind the permissioned pre-handover inspection or snag report, developer notifications and replies, issue chronology, photographs and relevant asset or system identifiers to the same exact home. Preserve original dates and authors.
5. Run three retrieval tasks: locate the governing policy and dates for one issue; locate the pre-handover and developer-correspondence trail; produce a source-only issue packet with an explicit list of questions that only the developer, provider or a competent professional can answer.
6. Compare elapsed time, files opened, unresolved fields and corrections with the current folder-search process.
7. Decide `DISCARD`, `RETAIN_AS_MANUAL_APPENDIX`, or `SEEK_APPROVAL_FOR_MINIMUM_FIELDS`.

### Pass and kill gates

Retain the proof only if every core policy field is either source-confirmed or visibly unresolved, the insured address binds to the exact home, all three retrieval tasks point to exact source locations, assembly takes no more than 60 minutes after the files are available, and an internal developer operator identifies a material reduction in search time or misrouting risk.

Discard or park it if the actual certificate or policy is unavailable, exact-home binding depends on assumption, the current folder already answers the questions quickly, the useful output requires an insurance or legal interpretation, or no live developer buyer values the workflow. One successful home is evidence for a manual appendix only, not a production build or market claim.

### Downside and safeguards

- Policy terms, limits, periods, excesses and restrictions can differ by provider, product, certificate and effective date. A public summary must never overwrite the home's actual documents.
- A complete-looking packet can create false confidence about eligibility. Keep coverage and causation outside OpenHouse's decision boundary.
- Pre-purchase known defects, later alterations, maintenance history and incident evidence can affect a provider's assessment. Record source facts without inferring their legal or insurance consequence.
- Reports, addresses, photographs, signatures and correspondence can contain personal or security-sensitive data. Use the minimum permissioned subset and keep it inside the approved boundary.
- This proof must not compete with [[items/oh-rls-audit]], [[items/oh-production-migration]] or the current paid-developer validation objective.

### Approval boundary

This update authorises desk research and proposes one local, static test using already permissioned records. It does not authorise contacting HomeBond, another insurer, a broker, developer, homeowner, surveyor or professional; submitting or progressing a claim; deciding coverage, liability, causation or compliance; uploading records to an unapproved service; changing production code, schemas or customer data; publishing policy or defect material; spending money; changing OpenHouse project state; or making a buyer claim.

Sam must approve any live-file test outside the existing permission boundary, provider query, partnership approach, external pilot, sales appendix, production field or buyer communication.

### Provenance

Primary HomeBond sources reviewed 20 September 2026:

- Home Buyers and currently linked Essential 300 and Essential 500 IPIDs: https://www.homebond.ie/home_buyers
- Essential 300 IPID, dated February 2023: https://www.homebond.ie/wp-content/uploads/2023/02/Essential-300-LDI-IPID-FINAL-02.23.pdf
- Essential 500 IPID, dated February 2023: https://www.homebond.ie/wp-content/uploads/2023/02/Essential-500-LDI-IPID-FINAL-02.23.pdf
- Claims procedure: https://www.homebond.ie/home_buyers/claims
- Provider background and cumulative registration statement: https://www.homebond.ie/about_us

No Longview policy, certificate, inspection report, defect record or claim file was opened during this research pass. Provider identity, exact terms, record availability, retrieval burden and buyer value remain open gates.

### Connected vault notes

- [[context/business-opportunities-moc]] - opportunity map
- [[companies/openhouse-ai]] - parent company and exact-home evidence strategy
- [[project_state/oh]] - current commercial and P0 gates
- [[items/oh-developer-outreach-proposal-pack]] - possible commercial container only after approval
- [[items/oh-handover-readiness-scan]] - adjacent source-readiness workflow
- [[items/oh-warranty-triage-router]] - separate issue-classification workflow
- [[items/oh-warranty-filter]] - existing warranty-relevance data dependency
- [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]] - adjacent completion evidence
- [[briefs/2026-09-18-openhouse-safety-file-custody-future-works-proof]] - adjacent later-work evidence
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] - prevents a competing product build

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-09]]
- [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]]
- [[briefs/2026-09-18-openhouse-safety-file-custody-future-works-proof]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[context/openhouse-product-map]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-room-inference]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-dtc-home-savings-scan-concierge]]
- [[items/oh-handover-readiness-scan]]
- [[items/oh-production-migration]]
- [[items/oh-rls-audit]]
- [[items/oh-scheme-launch-scorecard]]
- [[items/oh-uk-aftercare-design-partner-sprint]]
- [[items/oh-warranty-filter]]
- [[items/oh-warranty-triage-router]]
- [[project_state/oh]]


## Recommendation
This is a stronger commercial idea than the raw filter alone. It is a plausible project once the data plumbing is in place.
