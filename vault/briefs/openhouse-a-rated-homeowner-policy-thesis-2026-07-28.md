---
title: OpenHouse A-rated homeowner policy thesis
date: 2026-07-28
status: research-brief
company_id: openhouse-ai
source: Ground Zero context plus current official and peer-reviewed research
owner: Leo Kanban t_426d7752
---

# OpenHouse A-rated homeowner policy thesis

## Executive verdict

**The underlying idea is strong. The framing needs one correction.**

Ireland is investing heavily in better-performing homes, but a BER is an asset rating, not proof of how a home performs in use. Irish evidence shows material gaps between theoretical and actual consumption, especially in efficient homes. The policy and service stack is still weighted toward grants, installation and final BER certification. It is much thinner after handover, when the resident must understand heating, ventilation, hot water, solar, EV charging, tariffs and controls.

That is a credible OpenHouse wedge:

> **OpenHouse is the performance-after-handover layer that helps residents get the intended comfort, cost and carbon outcomes from a modern or upgraded home, while creating consented evidence of what happens after the BER.**

Do not publicly frame this as homeowners failing a test. “An A-rated home needs an A-rated homeowner” is memorable internal shorthand, but it can sound blaming and patronising. The stronger public line is:

> **An A-rated home should deliver an A-rated living experience. OpenHouse helps make sure it does.**

## Bottom line for the business

This thesis should **strengthen the existing Home Performance Check and home operating-assistant direction**, not create a new product or trigger a government-sales detour.

The best near-term commercial move is a five-home, paid or payment-committed Home Performance Check concierge test. Use the results to create the proof asset needed for a developer, One Stop Shop or housing-body pilot. Government and research funding become leverage after evidence exists, not the first customer.

## What the evidence actually says

### 1. Ireland is putting serious money into the asset

The National Retrofit Plan targets **500,000 homes upgraded to B2 by 2030** and **400,000 existing homes fitted with heat pumps**. The original plan allocated **€8 billion of carbon-tax receipts to residential retrofit through 2030**. This is a multiannual policy allocation rather than money already spent, and reporting in 2025 indicated that part of the remaining commitment was under departmental review. Its delivery pillars focus on demand, finance, supply chain, skills, standards and governance. One Stop Shops are intended to remove homeowner hassle through a managed upgrade process.

The programme is already operating at scale. SEAI reported through RTÉ that in 2024 it disbursed **€616 million** in grants and supports, including **€420 million for 54,000 home energy upgrades**. Almost **22,000 upgrades reached B2 or better**. Only **3,609 projects included a heat-pump grant**, which matters because the operational-complexity opportunity will initially be concentrated rather than universal.

**Commercial implication:** the policy budget and upgrade volume are real. The mistake would be assuming all upgraded homes are equally suitable customers. Prioritise homes with heat pumps, solar, EVs, batteries, MVHR or a recent deep retrofit.

Sources:
- [Government of Ireland, National Retrofit Plan](https://www.gov.ie/en/department-of-climate-energy-and-the-environment/publications/national-retrofit-plan/)
- [RTÉ, SEAI pays record €616m in energy upgrade grants in 2024](https://www.rte.ie/news/ireland/2025/0115/1490866-energy-upgrade-grants/)

Ireland is also producing A-rated new homes at scale. CSO reported that by the end of 2025, **99% of dwellings built from 2020 to 2025 had an A rating**, **94% used electricity as their main space-heating fuel**, and **85% contained a heat pump**. This is the clearest near-term cohort for an operating-assistant proposition because modern-home complexity is already mainstream within new supply.

Source:
- [CSO, Domestic Building Energy Ratings Quarter 4 2025](https://www.cso.ie/en/releasesandpublications/ep/p-dber/domesticbuildingenergyratingsquarter42025/)

### 2. BER is not operational performance

SEAI explicitly describes BER as an **asset rating rather than an operational rating**. Its 2025 Behavioural Energy and Travel Tracker analysis found that Irish households reported heating for just under **four hours per day** during the heating season, about half the eight hours assumed by DEAP. Only **15%** reported heating for eight hours or more. The survey covered roughly 1,000 participants in each of 12 monthly waves in 2023.

This does not mean households are universally wasteful. In fact, many use less heat than the model assumes. It means a BER cannot explain what a specific household is doing, whether its systems are configured properly or whether the resident is receiving the expected comfort and cost outcome.

**Commercial implication:** OpenHouse should not sell “better BER advice”. It should connect the asset record to actual use, preferences and observed outcomes.

Source:
- [SEAI, Challenging assumptions about how people in Ireland heat their homes](https://www.seai.ie/blog/how-people-ireland-heat-their-homes)

### 3. The Irish performance gap is large enough to matter

A peer-reviewed Irish study of **9,923 homes** found actual energy use was weakly responsive to EPC/BER level. The most efficient homes showed average actual-energy surpluses of **39% to 54% above theoretical use**, while the least efficient homes often used less than theoretical estimates. The authors caution against relying on theoretical ratings alone and recommend incorporating historical household energy use.

This does not isolate homeowner mistakes from modelling error, commissioning, weather, occupancy, comfort choices or equipment performance. It does establish that efficient-on-paper is not the same as efficient-in-use.

Source:
- Coyne and Denny, [Mind the Energy Performance Gap: testing the accuracy of building Energy Performance Certificates in Ireland](https://doi.org/10.1007/s12053-021-09960-1), *Energy Efficiency*, 2021

### 4. A-rated retrofit homes can materially underperform in use

A post-occupancy evaluation of **12 deeply retrofitted A-rated social homes in southeast Ireland** found some homes consumed more than twice predicted energy. In one extreme case, mean winter indoor temperature was more than **7°C above** the temperature assumed by DEAP. Higher indoor temperatures correlated with higher consumption, and the heat pumps also showed operational inefficiencies. Occupant satisfaction was nevertheless near unanimous.

This is an important nuance. Comfort is a legitimate outcome. The opportunity is not to punish people for being warm. It is to make the trade-off visible, detect system inefficiency and help the resident choose knowingly.

Source:
- Colclough et al., [Post occupancy evaluation of 12 retrofit nZEB dwellings](https://doi.org/10.1016/j.enbuild.2021.111563), *Energy and Buildings*, 2021

### 5. The data needed for a useful Irish first version already exists

ESB Networks lets smart-meter customers view and download up to **two years** of data in Harmonised Downloadable Format CSV files. Available files include 30-minute kW and kWh readings, day/night/peak summaries and import/export data where applicable. This supports an upload-first OpenHouse test without waiting for a national consumer API.

The current limitation is friction and refresh rate. A manual HDF upload can produce a baseline and retrospective diagnosis. It is not live monitoring unless the customer repeatedly supplies data or OpenHouse later gains a permissioned connector.

Source:
- [ESB Networks, My energy consumption](https://www.esbnetworks.ie/customer-support/customer-support-queries/meter-reading/my-energy-consumption)

### 6. Smart-meter infrastructure is underused commercially

Ireland had passed **two million smart-meter installations by 2025**, but activation lagged infrastructure. CRU reported that by October 2023, **17% of smart-meter customers** had activated smart data services through a supplier and **9%** had signed up for a time-of-use tariff. CRU also considered personalised price comparison using uploaded smart-meter data and stated that nothing prevented a price-comparison website or other market participant from offering that functionality, subject to applicable rules.

The figures are dated and should be refreshed before a pitch. They are still a strong policy signal: meter installation alone does not guarantee customer engagement or optimisation.

Source:
- [CRU, Smart Meter Time of Use Tariffs decision](https://www.cru.ie/publications/27776/)
- [ESB Networks, Smart Meter Upgrade](https://www.esbnetworks.ie/existing-connections/meters-readings/smart-meter-upgrade)

### 7. Feedback can change consumption, but a dashboard alone produces modest results

Ireland's 2011 Smart Metering Customer Behaviour Trial covered approximately **5,000 residential customers**. Time-of-use pricing and feedback reduced average electricity use by approximately **2.5%** and peak demand by approximately **8.8%**. Treatments involving an in-home display produced among the strongest reported responses, at approximately **3.2% overall** and **11.3% at peak**.

A separate Northern Ireland natural experiment found immediate feedback associated with a larger **11% to 17% decline** in electricity use, but that intervention involved keypad prepayment meters and should not be treated as an expected OpenHouse result.

**Commercial implication:** feedback works, particularly for timing, but the average Irish whole-home reduction was modest. OpenHouse must convert data into diagnosis and one home-specific action, not build another consumption dashboard.

Sources:
- [CRU, Smart Metering Customer Behaviour Trials Findings Report](https://www.cru.ie/publications/20549/)
- Gans, Alberini and Longo, [Smart meter devices and the effect of feedback on residential electricity consumption](https://doi.org/10.1016/j.eneco.2012.11.022), *Energy Economics*, 2013

### 8. Current retrofit service design appears to stop at the final BER

SEAI lists the One Stop Shop journey as home assessment, project management, grant application, contractor works, follow-up BER and finance support. It says the process runs from initial assessment through to final BER. The public service description does not list a persistent post-occupancy education, commissioning-support or measured-performance service.

This is evidence of a visible service-design gap, not proof that no One Stop Shop provides informal support.

Source:
- [SEAI, One Stop Shop Service](https://www.seai.ie/grants/home-energy-grants/one-stop-shop)

### 9. European policy is moving toward measured and digital building performance

The revised Energy Performance of Buildings Directive entered into force on 28 May 2024 and had a general national-transposition deadline of 29 May 2026. It covers renovation, decarbonisation, modernisation and digitalisation, and financing and technical assistance. The Commission also highlights one-stop shops, renovation passports and the use of actual operating conditions, typical user behaviour and metered data in relevant methodologies.

This creates narrative and future funding tailwinds. It does not automatically create a procurement route for OpenHouse.

Sources:
- [European Commission, Energy Performance of Buildings Directive](https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en)
- [EUR-Lex, Directive EU 2024/1275](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024L1275)

## Common operational failure modes worth testing

These are **test hypotheses**, not proven prevalence estimates for all Irish A-rated homes:

1. Heat-pump schedules, flow temperatures or backup heat are configured poorly.
2. Residents use heat-pump controls like a fast-response boiler and create costly cycling or reheating.
3. Hot-water settings or immersion use dominate an unexplained bill.
4. MVHR or ventilation is misunderstood, disabled, blocked or run in the wrong mode.
5. Solar generation is exported while flexible loads run at expensive times.
6. EV charging happens in peak windows or on a poor tariff.
7. Heating zones fight each other or controls do not match household routines.
8. The resident cannot distinguish a comfort preference from an equipment, commissioning or tariff problem.
9. Manuals and handover PDFs describe equipment generically rather than this home's actual configuration.
10. Nobody checks whether the home delivers the expected outcome after the final BER.

OpenHouse should diagnose only where the evidence supports it. It should ask for the next useful evidence item where it does not.

## Commercial route ranking

### 1. Fastest proof: paid Home Performance Checks

**Customer:** five Irish homes with a heat pump, solar, EV, MVHR or a recent deep retrofit.

**Inputs:** BER or handover pack, recent bill, optional HDF, equipment photos/nameplates, controls screenshots and a short comfort/routine questionnaire.

**Deliverable:**
- sourced home-system record
- plain-English operating guide for this home
- one evidence-backed Money, Comfort or Risk finding where supported
- one next action
- one next evidence request
- clear uncertainty and professional-escalation boundary

**Price:** retain the existing €79 concierge validation price so this policy work does not invalidate the matched Upgrade Ready versus Home Performance experiment.

**Why first:** this creates customer evidence in days and directly tests whether the thesis produces a useful paid outcome.

### 2. Best B2B wedge: 90-day Performance After Handover pilot

**Buyer:** a property developer or SEAI-registered One Stop Shop.

**Offer:** OpenHouse accompanies 10 to 20 homes for the first 90 days after handover or retrofit completion.

**Resident value:** setup guidance, first-bill explanation, system-specific questions, safe triage and periodic evidence requests.

**Buyer output:** anonymised aggregate report on engagement, recurring misunderstandings, documentation gaps, escalations, first-bill issues and evidence-backed performance opportunities. No household-level surveillance sold back to the buyer.

**Commercial hypothesis:** a paid design pilot in the low four figures is credible only after the five-home concierge test proves delivery time, usefulness and privacy acceptability. Pricing is not yet evidence-backed.

### 3. Highest strategic upside: research and programme partnership

Potential future routes include SEAI research calls, Enterprise Ireland Innovation Vouchers with a knowledge provider, local-authority or approved-housing-body post-occupancy research, and EPBD implementation work.

Use these to fund measurement and independent validation, not to avoid proving customer demand. Government buying cycles and consortium requirements make this a poor first revenue move for a solo founder.

### 4. Deprioritise for now: broad utility integration or autonomous control

Supplier apps, direct device APIs and automated heat/EV/battery control increase integration, liability and procurement complexity before the basic value proposition is proven. Ireland can launch file-first and advisory-only.

## Recommended 10-day action

### Goal

Prove that OpenHouse can turn ordinary home evidence into one useful, safe, home-specific operating intervention that somebody will pay €79 for.

### Test

Recruit five suitable homes, ideally:
- two recent A-rated new builds
- two recently retrofitted B2/A homes
- one high-load home with heat pump plus solar or EV

For each home:
1. Obtain explicit consent and define who can see the data.
2. Collect BER or handover information, one bill, optional HDF and four guided system photos.
3. Produce the Home Performance Check manually with OpenHouse's Money, Comfort and Risk frame.
4. Record analyst time, missing evidence, findings, resident reaction, accepted actions and safety escalations.
5. Ask for payment or payment commitment, not just positive feedback.
6. Recheck after seven days where the resident took an action. Record an outcome only if it can be verified.

### Pass criteria

- At least four of five homes receive one specific, evidence-backed action, question or evidence gap that the resident rates useful.
- At least two customers pay or make a genuine payment commitment at €79.
- Median delivery time is compatible with a future gross margin, with the manual bottleneck identified.
- Zero unsupported savings claims, unsafe control advice or privacy surprises.
- At least one reusable B2B proof artifact emerges without exposing household data.

### What to do with the result

If the test passes, package a one-page **Performance After Handover** pilot for Bridgewater, an existing developer relationship or one carefully selected One Stop Shop. If it fails, do not build telemetry. Compare the failure directly with the Upgrade Ready Plan results and keep the acquisition wedge that produces stronger payment commitment.

## Positioning options

### Strongest policy line

> Ireland is investing €8 billion to improve homes. OpenHouse helps verify that the comfort, cost and carbon benefits survive after the final BER.

### Strongest developer line

> The BER proves what the home was designed to be. OpenHouse helps the resident get the intended experience after handover.

### Strongest homeowner line

> Modern homes are complicated. OpenHouse learns how yours is built and helps you run it right.

### Avoid

- “Homeowners are the problem.”
- “Your A-rated home is inefficient because you use it wrong.”
- “Live monitoring” when the input is a manual HDF or bill upload.
- “Verified savings” without a baseline and a measured post-action result.
- “Government-backed” unless there is an actual programme relationship.

## Risks and unresolved questions

1. **Attribution:** performance gaps mix occupant behaviour, model assumptions, weather, commissioning, equipment and comfort preferences.
2. **Data cadence:** HDF upload supports diagnosis, not effortless live monitoring.
3. **Liability:** OpenHouse must stay advisory and route electrical, heating, ventilation and safety issues to qualified professionals.
4. **Privacy:** household-level consumption and routines are sensitive. The resident must control sharing, deletion and reuse.
5. **Willingness to pay:** the policy logic is stronger than the current demand evidence. The €79 test remains necessary.
6. **Buyer economics:** callback reduction and ESG/post-occupancy reporting value to developers and One Stop Shops have not yet been quantified.
7. **Rebound and comfort:** higher consumption can represent chosen comfort rather than waste. OpenHouse should explain the trade-off, not moralise.
8. **Representativeness:** the 12-home A-rated post-occupancy study is small; the 9,923-home performance-gap study is stronger but does not isolate causal mechanisms.

## Confidence

- **Policy and infrastructure thesis:** high
- **Existence of a measured performance gap:** high
- **OpenHouse product fit:** medium-high
- **Immediate government revenue route:** low
- **Paid homeowner demand at €79:** unproven, test now
- **Developer or One Stop Shop pilot value:** plausible, requires concierge evidence

## Relationship to existing OpenHouse strategy

This brief sharpens, rather than replaces:
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[briefs/openhouse-energy-intelligence-sketch]]
- [[companies/openhouse-ai]]
- [[project_state/oh]]

No shared canonical note was modified during this task.
