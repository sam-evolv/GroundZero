---
title: OpenHouse taking-in-charge boundary and aftercare-routing proof
created: 2026-09-19
status: bounded-research-proposal
company_id: openhouse-ai
scope: one static, permissioned Longview phase and source-backed shared-asset boundary test
source: ground-zero opportunity incubation
---

# OpenHouse taking-in-charge boundary and aftercare-routing proof

## Bounded proposal

Test whether OpenHouse can turn the already-held records for one permissioned Longview phase into a source-linked **taking-in-charge boundary receipt** for shared roads, footpaths, parking, open space, lighting, drainage, water services, fire hydrants and related estate assets.

The receipt should answer four operational questions without making a legal or engineering judgement:

1. Which phase and mapped asset does each source record cover?
2. What formal status evidence exists for that asset: request, inspection, outstanding works, council resolution, private-management evidence or no verified status?
3. Which source should a developer operator check before routing an aftercare query?
4. Where do responsibility, ownership or maintenance boundaries remain unresolved?

This is one static source-and-routing test inside [[items/oh-handover-readiness-scan]], not a taking-in-charge application service, ownership register, council integration, professional certification or new product line. The commercial question is narrow: **does a source-backed phase and asset boundary reduce misrouted shared-area questions enough to strengthen one paid developer handover or aftercare pilot?**

## Verified evidence

Cork City Council's current taking-in-charge page says that, after a residential development is completed in accordance with the relevant permission and conditions, a developer may request that public areas be taken in charge. It names a consultant engineer's completion certificate, as-constructed drawings, a drainage survey, and required wayleaves or title transfers as supporting records. The council then inspects the site against the permission, conditions and required standards.[1]

Cork City Council's linked policy identifies development roads, associated lighting and hydrants, water and sewer services, open spaces, car parks and some site boundaries as possible scope. It also states that maintenance liability remains with the developer or owner until the council formally takes the estate in charge, that taking-in-charge does not by itself transfer ownership of the relevant land, and that phased taking-in-charge may be considered only where a phase is isolated, has a unique access and has clear demarcation. The policy is dated 2010, so it is useful as the council's currently linked operational policy, not as a complete statement of current law.[2]

The Office of the Planning Regulator describes taking-in-charge as the formal transfer of responsibility for certain public areas, structures and services. Its guide says scope varies by permission, development type and local authority. It also warns that private areas in a multi-unit development are not normally taken in charge and that one development can contain a mix of public and private roads. The OPR page notes that the Planning and Development Act 2024 is being commenced in phases and that transitional arrangements remain; the selected phase therefore needs current, file-specific status evidence rather than a generic legal assumption.[3][4]

A Cork City consultation for Lios Rua in Ballyvolane shows the local process producing a mapped, asset-specific proposal covering roads, footpaths, public lighting, open spaces, watermains, sewers and surface-water drainage. That is evidence that an asset-and-map receipt has a real local source shape. It is **not** evidence that any Longview phase has the same scope or has been taken in charge.[5]

## Why this is new but adjacent

[[briefs/2026-09-18-openhouse-safety-file-custody-future-works-proof]] asks where later-work safety information sits and who holds the relevant file. [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]] asks which exact homes a statutory completion pack covers.

This proposal asks a different aftercare question: **for a shared-area issue, what phase and asset does the evidence cover, what formal status evidence exists, and which source must be checked before the issue is routed?** The output should be one appendix to the existing handover-readiness workflow. It must not duplicate the Safety File map, BCMS receipt or an old OMC operating-company thesis.

A vault duplicate search on 19 September 2026 found no existing taking-in-charge proposal. The only direct adjacent record was the Safety File custody brief, plus a separate historical OMC concept. The July focus decision also rules out opening a competing product build, so this remains a manual proof inside the existing item.

## Assumptions to falsify

- One Longview phase has a legitimately permissioned set of planning, engineering, map or correspondence records that OpenHouse may inspect.
- Those records support asset-level or clearly bounded phase-level statements without guessing from filenames or site layout.
- Shared-area aftercare questions are currently slow or misrouted because status and source boundaries are reconstructed manually.
- A developer operator can distinguish a council resolution, request, inspection or private-management record from an informal belief about who is responsible.
- The selected records are current enough to support a dated receipt, or staleness can be shown visibly.
- One compact boundary receipt is more useful than linking the unchanged source folder.
- A live developer buyer values the routing layer enough for it to support the existing paid-pilot conversation.

## Smallest validation test

Use one already permissioned Longview phase and only records OpenHouse may legitimately inspect. Keep the work local and static.

1. Confirm the governing planning authority and exact permission/phase reference from authoritative project evidence; do not infer jurisdiction from the estate name.
2. Freeze the available planning conditions, phase map, as-constructed drawings, drainage survey, completion certificate, wayleave/title evidence, utility records, taking-in-charge correspondence and any formal resolution or public notice already held.
3. Select no more than ten shared assets across roads, lighting, drainage, open space, parking or utilities.
4. Build a deterministic matrix with: asset, mapped location, phase, source file/page/drawing reference, source date, formal status evidence, current-record custodian, next source to check, privacy classification and confidence state.
5. Use evidence states that describe the record rather than decide responsibility: `RESOLUTION_EVIDENCE`, `REQUEST_EVIDENCE`, `INSPECTION_OR_REMEDIATION_EVIDENCE`, `PRIVATE_MANAGEMENT_EVIDENCE`, `OUT_OF_SCOPE_EVIDENCE` or `UNRESOLVED`.
6. Run three permissioned aftercare-routing tasks covering different shared-asset types. Use anonymised historical Longview questions where available; otherwise label the task as a synthetic workflow probe.
7. For each task, require an exact source citation and a visible stop when ownership, maintenance or status cannot be established.
8. Compare elapsed operator time, source-opening count, corrections and routing confidence with the current folder-search process.
9. Decide `discard`, `retain as a manual paid-pilot appendix`, or `seek approval to add the minimum phase/asset/status-evidence fields to the handover-readiness specification`.

### Pass gate

Retain the proof only if:

- every tested asset receives a source-backed evidence state, with uncertainty preserved;
- no output turns a request, inspection or map into a claim that the council has formally assumed responsibility;
- all three routing tasks point to the exact source or stop as `UNRESOLVED`;
- the matrix and tests take no more than 90 minutes once the source pack is available;
- an internal developer operator identifies at least one material reduction in search time or misrouting risk; and
- the result is demonstrably more useful than the existing folder structure.

### Kill gate

Discard or park the wedge if the governing file cannot be identified, records are unavailable or too stale, assets cannot be mapped below whole-estate level, the output depends on legal interpretation, the current process already answers the questions quickly, the proof duplicates the Safety File/BCMS work, or no live developer buyer values the routing layer.

## Downside and safeguards

- A council request, inspection, outstanding-works list or public consultation is not the same as a final taking-in-charge resolution.
- Responsibility, maintenance liability, land ownership and record custody are different concepts. Do not collapse them into one status.
- Scope can differ by permission, phase, asset and public/private boundary. Do not copy a generic council list into a Longview record.
- The Cork City policy is dated 2010 even though it remains linked from the current council page. Treat it as operational context and recheck the live authority file before any external use.
- Drawings, service routes, wayleaves and title records can be security-sensitive or confidential. Use the minimum approved subset and do not publish it.
- A polished map can create false confidence. Keep source dates, exact references, role boundaries and `UNRESOLVED` states visible.
- This proof must not compete with the P0 market-readiness gates or the paid-developer validation objective.

## Approval boundary

This note authorises desk research and proposes one static local mapping using records OpenHouse already has legitimate permission to inspect. It does not authorise:

- contacting Cork City Council, another authority, Uisce Éireann, an OMC, residents, contractors, professionals, developers, homeowners or any other third party;
- submitting or progressing a taking-in-charge request;
- deciding ownership, liability, maintenance responsibility, compliance or legal status;
- certifying drawings, drainage, infrastructure or completion;
- modifying production code, schemas, websites or customer data;
- publishing maps, service routes, title records, addresses or correspondence;
- spending money, changing OpenHouse project state, or making a buyer claim; or
- creating a separate taking-in-charge or OMC product.

Sam must approve any live-file test beyond already permissioned internal records, external verification, sales appendix, buyer communication or production field.

## Open gaps

- Governing authority, permission reference and formal taking-in-charge status for each Longview phase.
- Which shared assets and boundaries the selected phase records actually cover.
- Whether an authoritative final resolution, map or outstanding-works record is available internally.
- Current aftercare search time, misrouting frequency and operator correction burden.
- Whether any independent developer buyer values this evidence layer.
- Whether the 2010 Cork City policy has been superseded in any material respect not visible on the current linked page.

## Provenance

Official sources reviewed 19 September 2026. No Longview taking-in-charge file, drawing, correspondence, council resolution or customer record was opened during this research pass. The local status, asset scope and commercial value therefore remain unverified assumptions for the proposed static test.

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/openhouse-ai]] — parent company and exact-home evidence strategy
- [[project_state/oh]] — current P0 and paid-developer validation gates
- [[items/oh-handover-readiness-scan]] — correct validation container
- [[items/oh-developer-outreach-proposal-pack]] — possible commercial container only after approval
- [[briefs/2026-09-18-openhouse-safety-file-custody-future-works-proof]] — adjacent later-work custody proof
- [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]] — adjacent completion-scope proof
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]] — adjacent homeowner operating-guide proof
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] — prevents a competing product build

## Sources

1. [Cork City Council — Taking in Charge of Residential Development](https://www.corkcity.ie/en/council-services/services/planning/planning-application-process/taking-in-charge-of-residential-development)
2. [Cork City Council — Taking in Charge Policy for Residential Developments](https://www.corkcity.ie/media/f3qfvl1m/taking-in-charge-policy.pdf)
3. [Office of the Planning Regulator — A Guide to Taking in Charge of Completed Residential Developments](https://www.opr.ie/wp-content/uploads/2022/10/Planning-Leaflet-15-A-Guide-to-Taking-in-Charge-of-Completed-Residential-Developments.pdf)
4. [Office of the Planning Regulator — Planning Leaflets and 2024 Act transition notice](https://www.opr.ie/planning-leaflets)
5. [Cork City Council consultation — Lios Rua, Banduff Road, Ballyvolane](https://consult.corkcity.ie/en/consultation/notice-intention-take-charge-roads-within-residential-development-lios-rua-banduff-road-ballyvolane)

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-09-16-openhouse-hpi-v31-home-user-guide-proof]]
- [[briefs/2026-09-17-openhouse-bcms-completion-scope-home-record-proof]]
- [[briefs/2026-09-18-openhouse-safety-file-custody-future-works-proof]]
- [[briefs/substack-draft-2026-09-20-the-correction-came-with-a-deposit]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-handover-readiness-scan]]
- [[project_state/oh]]

