---
title: OpenHouse A-rated homeowner primary integration
date: 2026-07-28
status: reviewed-strategy-input
company_id: openhouse-ai
source: Leo policy thesis artifact plus primary-source verification
---

# OpenHouse A-rated homeowner primary integration

## Primary verdict

Leo found a real and strategically useful thread.

Ireland and the EU are funding and regulating the improvement of the building asset, while measured outcomes can diverge materially from modelled or rated performance after occupation. The missing layer is not merely homeowner education. It is an evidence-backed operating layer that connects the home's intended performance, its systems and documents, the household's comfort needs, observed consumption and one safe next action.

This strengthens the existing OpenHouse Home Performance Check and developer handover thesis. It does not justify a pivot into government procurement, a broad energy dashboard, device integrations before demand proof or claims that residents are the sole cause of performance gaps.

The clearest category formulation is:

> **The rating describes what the home should be capable of. OpenHouse helps the household understand how it is actually operating and what to do next.**

“A-rated homeowner” is memorable internal shorthand. In public, use it carefully because it can sound as though the resident is being graded or blamed.

## What the evidence supports

### 1. Policy investment is concentrated on the asset

Ireland's National Retrofit Plan states a commitment of €8 billion to 2030 and targets 500,000 homes upgraded to B2 or better. RTÉ reported, citing SEAI figures, that €616 million was allocated to residential and community retrofit schemes for 2024, with €420 million spent, more than 54,000 upgrades supported, almost 22,000 homes reaching B2 or better and 3,609 heat pumps installed.

The strategic point is not that the funding is wasted. It is that capital measures and BER outcomes do not alone prove that the home will operate efficiently, comfortably or intelligibly in use.

### 2. BER and DEAP are not household outcome measurements

SEAI describes BER as an asset rating based on standardised assumptions rather than the conditions and preferences of a particular household. Its behavioural research found that surveyed households reported fewer heating hours than DEAP assumptions and lower-than-assumed heating demand. That is evidence of a model-versus-life mismatch, not proof that residents are operating homes incorrectly.

The OpenHouse product must keep these concepts separate:

- assessed or modelled performance;
- observed energy use;
- comfort preference and occupancy;
- settings and schedules;
- equipment and commissioning performance;
- weather, tariff and other contextual factors.

### 3. Irish evidence shows a meaningful performance gap

A peer-reviewed Irish analysis of 9,923 dwellings reported measured energy use approximately 39% below theoretical calculations under one treatment, rising to 53.61% under an alternate appliance adjustment. The authors explicitly state that the reasons for the gap require further investigation.

A separate post-occupancy evaluation of 12 deeply retrofitted social homes in southeast Ireland found:

- homes moved from F/G ratings to calculated A ratings;
- near-unanimous occupant satisfaction;
- some homes consumed more than twice predicted energy;
- one extreme home had mean winter temperature more than 7°C above the DEAP operating assumption;
- higher temperatures correlated with higher consumption;
- the heat pump itself exhibited operational inefficiencies.

This is the critical nuance. Higher energy use can reflect comfort, assumptions, controls, commissioning and equipment as well as behaviour. OpenHouse should diagnose an evidence hierarchy, not deliver moral judgement.

### 4. The data substrate exists, but activation is weak

ESB Networks' customer HDF can include up to two years of interval electricity data, including import and export where available. This is suitable for a file-first concierge test without requiring direct device APIs.

The CRU reported that, as of October 2023, 17% of smart-meter customers had activated smart-data services and 9% had adopted a time-of-use tariff. The CRU also considered personalised tariff comparison using uploaded smart-meter data. This supports a translation and activation gap, but it does not by itself prove willingness to pay OpenHouse.

A Northern Ireland natural experiment found that real-time usage feedback was associated with 11% to 17% lower electricity use. This is relevant evidence that timely feedback can change outcomes, but OpenHouse must not transplant that effect size into a savings claim for a different product, population or period.

### 5. EU policy is moving toward digital, operationally aware building records

The revised EPBD:

- entered into force on 28 May 2024;
- has a general national transposition deadline of 29 May 2026;
- allows energy performance to be calculated or metered;
- defines digital building logbooks as repositories for building-performance information;
- requires renovation passports to be accessible through digital building logbooks where available;
- addresses installation, adjustment and control of technical building systems;
- supports one-stop-shop technical assistance and building-owner guidance.

This aligns with the OpenHouse Home Record architecture. It does not grant OpenHouse policy status, procurement access or an automatic route to government revenue.

## What the evidence does not support

Do not claim:

- A-rated homes usually underperform because residents use them incorrectly;
- the 39% to 54% theoretical-versus-measured gap is a universal savings opportunity;
- OpenHouse can infer heat-pump efficiency from whole-home electricity data alone;
- OpenHouse will reduce bills by 11% to 17%;
- BER is defective or pointless;
- live monitoring exists before a real refresh source is connected;
- government, SEAI, CRU, developers or utilities want to buy this product;
- public funding already covers post-occupancy OpenHouse support;
- smart-meter data access is frictionless or real time.

Two phrases from Leo's source brief should stay out of public copy until better verified:

- the assertion that nothing prevents any other market participant from using the smart-data route;
- the suggestion that the Northern Ireland feedback study supports reductions up to 20%.

The directly verified figures are 17% smart-data activation, 9% time-of-use uptake and 11% to 17% lower consumption in the Northern Ireland study.

## Product implication

The Home Performance Check should be a **closed-loop operating baseline**, not an energy-tips report.

### Minimum evidence

- BER or handover information;
- latest bill;
- ESB Networks HDF where available;
- heat-pump, ventilation, hot-water, solar, battery or EV context relevant to the home;
- controls and nameplate photographs;
- household comfort and schedule preferences.

### Analysis structure

1. What the home is designed or documented to do.
2. What the available observations show.
3. What can and cannot be compared safely.
4. Candidate explanations separated into:
   - household preference or schedule;
   - control or setting;
   - commissioning or installation;
   - equipment behaviour;
   - weather, tariff or occupancy context;
   - model or evidence limitation.
5. One ranked action in Money, Comfort and Risk terms.
6. One next evidence request that could change the conclusion.
7. A seven-day or 30-day check-in to record what happened.

The output should never call a household inefficient. It should describe an observed pattern, the confidence, plausible explanations and the safest next step.

## Commercial implication

### Near term

Keep the existing matched €79 validation unchanged:

- Upgrade Ready Plan versus Home Performance Check;
- 20 paid or payment-committed plans before consumer productisation;
- payment, useful action, second evidence, return behaviour and fulfilment economics determine the winner;
- one explicitly permissioned real-home pack remains the immediate product-evidence gate before the matched payment test.

Leo's research sharpens Candidate B. It does not earn the right to skip the match or declare Home Performance the winner.

### Developer route

The strongest developer formulation is:

> **An A-rated handover should not end with a BER and a stack of manuals. OpenHouse gives the household a living Home Record and helps it understand the home after occupation.**

Potential developer proof measures, all requiring real data, include:

- first-bill and first-winter support;
- heat-pump and ventilation questions resolved;
- evidence of homeowner guidance being viewed and understood;
- recurring documentation or commissioning gaps identified;
- aftercare escalations avoided or better prepared;
- consented, anonymised scheme-level patterns.

This makes the energy direction part of handover and aftercare, not a separate dashboard product.

### Policy and institutional route

Treat policy as category validation and a later partnership surface, not the current sales plan.

A credible future pilot could involve an energy agency, approved housing body, local authority, One Stop Shop, developer or research partner. The pilot question would be:

> Can personalised, evidence-backed post-occupancy support improve understanding, produce safe actionable changes and reveal recurrent operational or commissioning gaps without compromising household privacy?

Do not start with a national policy pitch. First produce household evidence and a repeatable intervention protocol.

## Immediate execution sequence

1. Complete the already-defined permissioned real-home Home Performance pack.
2. Measure time to first useful finding and founder fulfilment effort.
3. Tighten the €79 Candidate B landing promise around an operating baseline, one evidence-backed opportunity and one next action.
4. Run the existing matched paid test against Upgrade Ready.
5. For Home Performance customers, request a seven-day or 30-day follow-up and record action, non-action and uncertainty.
6. After at least five completed Home Performance checks, examine whether patterns repeat strongly enough to support a developer or institutional pilot brief.
7. Only after payment and outcome evidence, approach a policy or research partner with a bounded study design.

## NDRC interview use

Do not add a fourth slide or reopen the approved deck. Use the research as Q&A depth.

### Twenty-second “why now” answer

> Ireland is investing billions in improving the physical performance of homes, but the rating is still a model of the asset. It does not help an individual household understand its heat pump, controls, bills or actual operating patterns after handover. OpenHouse can become the trusted operating layer between the home's technical potential and the homeowner's lived experience.

### If challenged on blame

> We are not assuming the homeowner is the problem. Irish post-occupancy research shows gaps can come from comfort preferences, modelling assumptions, settings, commissioning and equipment. OpenHouse's job is to separate those causes using evidence and recommend the safest next step.

### If asked who pays

> We are testing household willingness to pay through a matched €79 concierge experiment. Developers are a second distribution route because better post-handover guidance can reduce confusion and create stronger evidence around the homes they deliver. Government relevance strengthens the category, but we are not treating slow public procurement as the first revenue path.

## Verification notes

Primary review retrieved and checked all 11 cited source records on 28 July 2026. Direct publisher access for one Elsevier paper was blocked by a captcha, so its abstract was verified through Ulster University's institutional research record and its metadata through Crossref, OpenAlex and Semantic Scholar.

The full source collection and original Leo artifact remain at:

- [[briefs/openhouse-a-rated-homeowner-policy-thesis-2026-07-28]]
- `/tmp/leo-policy-source-check/` for the temporary primary-verification cache

## Connected notes

- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[project_state/oh]]
- [[companies/openhouse-ai]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-openhouse-construction-product-passport-ingestion-wedge]]
- [[briefs/openhouse-a-rated-homeowner-policy-thesis-2026-07-28]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[briefs/openhouse-show-house-evidence-capture-2026-07-28]]
- [[companies/openhouse-ai]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[project_state/oh]]

