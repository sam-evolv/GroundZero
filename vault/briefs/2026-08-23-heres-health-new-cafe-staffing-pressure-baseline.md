---
title: Here’s Health new-café staffing-pressure baseline
date: 2026-08-23
status: bounded-research-proposal
company_id: heres-health
kind: opportunity-brief
source: Official Square Labor and Orders API documentation, Irish WRC employment-record guidance, Irish DPC data-protection-by-design guidance, and Sam's active Here’s Health source brief
---

# Here’s Health new-café staffing-pressure baseline

## Bounded proposal

After the launch-critical Here’s Health work is stable, and only if the real account review confirms that one café uses Square schedules and timecards or can provide equivalent manager-controlled exports, test a **14-trading-day scheduled-versus-actual staffing-pressure baseline** at one location.

The proof should compare published coverage, actual aggregate hours and order pressure by agreed time block, then surface only repeated periods where staffing and demand appear mismatched. It is not an automated roster, payroll system, employee-performance score, legal-compliance product or launch dependency. The first output is a manager-reviewed diagnostic built from minimum necessary, read-only data. Do not use names, wages, tips, free-text notes or individual productivity rankings.

This tests a scheduling opportunity already named in Sam's supplied Here’s Health brief without assuming that Here’s Health has a staffing problem. It should become a paid operating pilot only if the baseline changes or confirms real roster decisions that native Square views do not already make easy.

## Why this clears the research bar

### Verified Ground Zero fit

- [[imports/heres-health-app-project-brief-2026-08-13]] identifies scheduling and demand forecasting as possible future operational-AI opportunities and records a new café as the immediate launch context.
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] keeps management intelligence and operational AI outside the consumer launch critical path.
- [[items/heres-health-week-one-discovery-and-technical-proof]] requires the real Square account, location structure, hardware and staff workflow to be inspected before scope is locked.
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] protects the six-week commerce path and excludes broader AI from delaying launch.
- The existing [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]] concerns aggregate Square and Shopify commerce reporting. It does not test planned-versus-actual labour coverage or roster decisions.
- Ground Zero filename searches on 23 August 2026 found no Here’s Health scheduling, roster or labour proposal and no parked or rejected item to reactivate.

### Verified platform and Irish operating evidence

Square's current Labor API distinguishes **ScheduledShift** records, which represent planned schedules, from **Timecard** records, which represent actual worked shifts. Square says the API can manage schedules and actual time worked, including breaks, and can support labour forecasting, labour-cost reporting and staffing optimisation. Scheduled shifts can be searched by date range, location, team member, assignment and publication status; current timecards can be searched by location, team member, status and time boundaries.

The scheduled-shift API requires Square API version `2025-05-21` or later. Square's older `Shift` endpoints were deprecated on 21 May 2025 and retired on 21 May 2026, so any proof in this project must use current **Timecard** endpoints rather than copying older Shift examples. Reading schedules and timecards requires approved Square access; scheduled-shift capabilities can also depend on the seller's Square configuration and Shifts subscription.

Square's `SearchOrders` endpoint can search sales, returns and exchanges across one or more locations and filter or sort the result. Square also warns that offline Point of Sale orders may take up to 72 hours to arrive. A staffing baseline must therefore reconcile recent demand blocks after late orders arrive instead of treating the same-day picture as final.

The Workplace Relations Commission says Irish employers must maintain statutory records including each employee's start and finish times, meal breaks and rest periods. This makes accurate time records operationally important, but it does not authorise Sam to repurpose employee data or turn a roster diagnostic into a compliance claim.

The Irish Data Protection Commission says data protection should be designed into a project early and that only data necessary for each specific purpose should be gathered by default. The proof should therefore keep identifiable workforce records inside a client-controlled environment and expose only aggregate blocks or manager-owned exceptions.

These sources establish technical plausibility and a strict data boundary. They do **not** establish that Here’s Health uses Square scheduling/timecards, has costly coverage mismatch, or would pay for a custom workflow.

## Smallest validation test

Run only after Sam approves the exercise and Here’s Health names the owner of staffing, employment records and the resulting decision.

1. **Record the current workaround first.** Ask the café owner or manager how rosters are made, which system holds schedules and clock records, what decision they want to improve, and how much time they currently spend reviewing coverage. If the answer is already easy in Square or another workforce tool, stop.
2. **Confirm data availability without production mutation.** Verify whether the selected location has published Square `ScheduledShift` records and completed `Timecard` records for the same period. If Here’s Health schedules elsewhere, use a manager-approved export or stop; do not build a second roster system.
3. **Agree the minimum dataset.** In a client-controlled environment, use only location, pseudonymous worker key where reconciliation requires it, job category if necessary, scheduled start/end, actual start/end, recorded breaks, order timestamp/source and fulfilment state. Exclude names, contact details, wages, tips, payroll deductions, performance notes, health data and other locations.
4. **Freeze definitions before inspection.** Agree the timezone, trading day, 30- or 60-minute blocks, treatment of breaks, cancellations, refunds, online versus counter orders, and the 72-hour late-order reconciliation window. Do not call revenue a proxy for workload without client evidence.
5. **Build a 14-trading-day baseline.** For each block show only: planned aggregate labour hours, actual aggregate labour hours, order count, a source-supported fulfilment-pressure measure if available, late-data flag and variance from the manager's agreed coverage rule. Keep individual records out of the report.
6. **Surface repeated patterns, not one-off judgement.** Flag at most three periods that recur on at least two comparable days. Label each as an observation for manager review, not an instruction to cut or add hours.
7. **Let the manager choose one bounded change.** If a repeated pattern appears, the named manager may approve one small roster adjustment for a comparable week. Sam does not publish, assign or notify shifts and does not automate the decision.
8. **Reconcile and review.** Re-run the same measures after the manager-authored change, account for promotions, weather, opening-week effects and late orders, and ask whether the evidence improved a real decision or merely restated native reports.
9. **Offer nothing recurring without paid signal.** Only outline a 60-day paid pilot if the manager explicitly values continued diagnostics after seeing the manual result. Automation must reproduce the accepted diagnostic and preserve human roster ownership.

### Pass criteria

Proceed beyond the diagnostic only if all are true:

- schedules and actual time records reconcile to the client-approved source for the selected location;
- order figures reconcile after the 72-hour late-order window and source limitations remain visible;
- at least two repeated coverage-pressure periods appear across comparable days rather than one launch anomaly;
- the named manager says the baseline changed or confidently confirmed at least one roster decision that was previously uncertain;
- the proof saves at least 30 minutes of recurring weekly review or prevents a manager-defined operational problem, measured against the recorded baseline;
- no employee is ranked, scored or subjected to an automated decision, and no wage, tip or direct identifier leaves the client-controlled environment;
- the workflow does not replace the employer's statutory records or make a compliance claim; and
- Here’s Health explicitly agrees that a bounded paid pilot is worth funding before any integration or automation is built.

Stop if Square or the existing workforce tool already answers the question, schedules and timecards are unavailable or incomparable, launch-week demand is too unstable, employee-data ownership is unclear, the baseline produces no repeated decision, or there is no paid signal.

## Assumptions to falsify

- Here’s Health uses Square schedules/timecards, or can export comparable planned and actual hours, at the selected café.
- A named manager currently makes recurring staffing decisions with incomplete or fragmented evidence.
- Order timing is a useful workload signal for the chosen café after counter, online, refund and offline-order semantics are agreed.
- Two weeks contains enough comparable trading periods to reveal a directional pattern; a new-café opening may make this false.
- Aggregate coverage blocks are sufficient; individual productivity analysis and wage data are unnecessary.
- Native Square reports or the current roster tool do not already solve the decision cheaply.
- A manual diagnostic creates enough owner value to justify a separately funded pilot.

## Downside and constraints

- New-café launch conditions, promotions, weather, training and low volume can make a 14-day baseline misleading.
- Orders are not a complete workload measure: preparation complexity, cleaning, stock work, customer questions and non-order activity can dominate some periods.
- Scheduled and actual hours can differ for legitimate reasons. A variance is not evidence of poor employee performance.
- Workforce data affects employees even when pseudonymised. Re-identification can remain possible in a small team, so outputs must be aggregate and manager-controlled.
- Wages would enable labour-cost analysis but add sensitivity and scope. They are deliberately excluded from the first proof.
- Square scheduled-shift support is currently documented as Beta and seller configuration may not match the proposed flow.
- Same-day Square order totals can change when offline orders arrive, so near-real-time staffing claims would overstate certainty.
- A custom tool can duplicate Square Shifts or another roster product and create maintenance debt.
- The exercise must not compete with Week 1 discovery, consumer app delivery or Sam's higher-priority ventures.

## Approval boundary

This note authorises research and a client-reviewable validation outline only. It does not authorise:

- contacting Conor, Here’s Health staff, employees, Square, the WRC, the DPC, a lawyer or another vendor;
- accessing or exporting schedules, timecards, breaks, orders, employee records, wages, tips, payroll, customer data or credentials;
- creating, changing, publishing or notifying a shift or roster;
- scoring an employee, recommending disciplinary action, reducing hours or making an automated employment decision;
- deciding legal basis, retention, employee-notice or employment-law compliance;
- representing that Here’s Health is overstaffed, understaffed, non-compliant or losing a quantified amount;
- adding scheduling, workforce analytics, AI, a paid pilot or support line to the active proposal;
- changing production, installing software, spending money or publishing a claim.

Any client contact, account/data access, employee-data processing, live diagnostic, roster change, paid proposal, implementation or production mutation requires Sam's explicit approval and Here’s Health's informed agreement. Employment and data-protection decisions remain with the client and its advisers.

## Provenance

- Canonical venture context reviewed: [[companies/heres-health]], [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]], [[imports/heres-health-app-project-brief-2026-08-13]], [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] and [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]].
- Duplicate and conflict check: the Here’s Health brief set through 22 August, [[context/business-opportunities-moc]], [[items/_Index]] and the recent decision log were reviewed. No scheduling/roster/labour proposal or conflicting decision was found. This proposal remains post-launch and read-only, preserving the adopted scope boundary.
- External evidence: the official Square, WRC and DPC pages below were fetched successfully from their live HTTPS origins on 23 August 2026. The Hermes web gateway and cloud browser were unavailable, so the official pages were retrieved directly. No private Here’s Health account, schedule, timecard, order, employee record or roster was inspected.

## Sources

- Square Developer — Labor API overview: https://developer.squareup.com/docs/labor-api/what-it-does
- Square Developer — Scheduling with the Labor API: https://developer.squareup.com/docs/labor-api/scheduling
- Square Developer — Retrieve Scheduled Shifts: https://developer.squareup.com/docs/labor-api/retrieve-scheduled-shifts
- Square API Reference — Search Scheduled Shifts: https://developer.squareup.com/reference/square/labor-api/search-scheduled-shifts
- Square API Reference — Search Timecards: https://developer.squareup.com/reference/square/labor-api/search-timecards
- Square API Reference — Search Orders: https://developer.squareup.com/reference/square/orders-api/search-orders
- Workplace Relations Commission — Working Hours & Breaks: https://www.workplacerelations.ie/en/what_you_should_know/hours-and-wages/working_hours/
- Workplace Relations Commission — Statutory Employment Records: https://www.workplacerelations.ie/en/what_you_should_know/employer-obligations/statutory-employment-records/
- Data Protection Commission — Data protection by Design and by Default: https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-design-and-default

## Connected vault notes

- [[context/business-opportunities-moc]] — nearest opportunity map
- [[companies/heres-health]] — client and commercial context
- [[project_state/heres-health-app]] — live discovery state
- [[items/heres-health-week-one-discovery-and-technical-proof]] — active P0 evidence gate; this proposal must not delay or enlarge it
- [[imports/heres-health-app-project-brief-2026-08-13]] — source that names scheduling and demand forecasting
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — protected launch sequence and post-launch operating-intelligence boundary
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — adopted scope boundary
- [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]] — adjacent commerce brief, not a workforce duplicate
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]] — adjacent privacy and release control
- [[items/_Index]] — active queue; this proposal is deliberately not promoted to a new item

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/2026-08-20-heres-health-side-by-side-owner-performance-brief]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-25-heres-health-square-react-native-android-16-payment-rail-proof]]
- [[companies/heres-health]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[items/heres-health-planday-brightpay-export-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[project_state/heres-health-app]]

