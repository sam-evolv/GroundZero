---
title: Evolv dynamic-tariff replay gate
created: 2026-10-09
status: bounded-research-proposal
company_id: evolv-renewables
scope: one customer-authorised Irish commercial-site tariff replay with no switch, control action or supplier contact
source: official CRU dynamic-tariff guidance and live Irish supplier product pages
---

# Evolv dynamic-tariff replay gate

## Bounded proposal

Test whether one **customer-authorised commercial site's real half-hour import pattern** is materially better or worse under a currently offered Irish standard dynamic electricity tariff before the customer changes contract or Evolv builds any optimisation product.

This is a narrow extension of [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] and [[items/renew-reporting-source-baseline]], not a new platform. The output is one source-linked decision receipt that separates:

- the site's existing tariff and actual import cost;
- standing charge, supplier-set base unit rate and the half-hour dynamic unit rate;
- fixed operating load from genuinely movable load;
- solar generation, on-site use and export remuneration; and
- measured results from hypothetical load shifting.

It must not recommend a switch from generic market data or turn a simulated saving into a customer claim.

## Verified evidence

Checked 9 October 2026.

1. **Dynamic tariffs are now an Irish business-customer option.** The CRU's April 2026 guide says standard dynamic tariffs became available to domestic and business customers from June 2026. Energia, SSE Airtricity, Bord Gáis Energy, Electric Ireland and PrePay Power / Yuno were obliged to offer the standard structure by then.
2. **The decision can be replayed at half-hour resolution.** The standard structure is a standing charge, a supplier-set base unit rate and a dynamic unit rate that changes every half hour. The CRU says the standard dynamic unit rate is the same across suppliers, while each supplier sets its own standing charge and base rate. Suppliers publish the next day's 48 prices and provide detailed half-hour price-and-usage billing.
3. **There is a protection, not a savings guarantee.** The CRU caps the standard dynamic unit rate at 50 cent/kWh and requires price alerts, but warns that prices are volatile and may be high when demand is high or renewable generation is low. The cap is not the customer's complete all-in unit cost because the base rate, standing charge, taxes and other charges still apply.
4. **Business eligibility and live availability are supplier-specific.** Electric Ireland's live SME page says a business needs a half-hour-capable smart meter, a CTF communications score of 4, an online account and e-billing. It publishes the same 50 cent/kWh dynamic-component cap and allows a return to another Electric Ireland Smart plan subject to normal terms. Energia describes dynamic tariffs for businesses and directs customers to its business team. SSE Airtricity currently asks businesses to register interest for a plan “when it's live,” despite also publishing guidance on its volatility. Availability therefore must be verified for the exact MPRN and supplier; it cannot be inferred from the national launch.
5. **The downside is operational, not only financial.** CRU guidance says the tariff is best suited to customers that can monitor prices and shift demand. SSE's business guidance says a site with fixed operating hours may not suit the tariff. Electric Ireland lists price spikes, budget uncertainty, peak-heavy consumption and daily monitoring as risks.

These facts establish a real decision problem adjacent to Evolv's owner-side solar assurance thesis. They do **not** establish savings for the live rooftop, supplier eligibility, a movable load, customer demand or a paid service.

## What remains unproven

- The live site's meter class, smart-meter status, CTF score and tariff eligibility are unknown.
- The site's current supplier, contract term, standing charge, import rate, export rate and exit conditions are unknown.
- No exact supplier term sheet or matched historical dynamic-price series has been supplied.
- The amount of operational load that can move without harming the business is unknown.
- A solar rooftop may reduce daytime imports but still leave expensive fixed-hour imports; the direction and size of any benefit must be measured.
- Supplier marketing pages do not prove that a tariff is the cheapest available option or that the customer should switch.

## Assumptions to test

1. The customer can provide a permissioned ESB Networks HDF, a current bill/contract summary and the exact supplier tariff terms without exposing credentials.
2. The supplier can provide exact price components and a corresponding price schedule suitable for a no-switch replay or prospective shadow period.
3. At least one material load is operationally movable; otherwise the exercise is only a risk screen.
4. Import, export and solar-generation evidence can be kept distinct so an import-tariff result is not misrepresented as total solar value.

## Smallest validation test

Run only for one real customer who is already considering tariff choice and explicitly authorises the data use.

1. **Eligibility gate:** record meter class, half-hour capability, communications eligibility, supplier, contract boundary and whether the exact dynamic product is presently available. Stop if any field is unsupported.
2. **Input gate:** accept only customer-supplied HDF, current bill/contract fields, inverter summary where already available, and an exact supplier term sheet plus matched dynamic prices. Do not ask for login credentials.
3. **Replay:** compare the existing tariff with the exact dynamic structure across four representative weeks, including all known standing, base, dynamic, tax and regulated charge components. Keep export credits as a separate line.
4. **Shift scenario:** model only loads the owner identifies as genuinely movable. Preserve an unchanged-load result beside any hypothetical shifted-load result.
5. **Receipt:** return one page showing source dates, missing fields, weekly cost difference, volatility range, top expensive intervals, operational constraints and a clear `switch / investigate / stop` decision owned by the customer and supplier.

If exact historical prices are not available without entering the tariff, use a bounded forward shadow period only when the supplier makes the next-day schedules available without a switch. Do not substitute wholesale prices or a generic tariff curve for the contracted retail formula.

## Pass and kill gates

### Pass to a paid manual assurance offer only if

- the exact site and tariff are eligible;
- the replay is reproducible from customer-owned evidence;
- the result changes a real tariff, load-scheduling or solar-operations decision;
- any saving remains after all known charges and across more than one representative week; and
- the customer values the receipt enough to pay for a repeat or include it in the existing 60–90 day operational baseline.

### Kill or park if

- the meter or supplier is ineligible;
- exact tariff components or matched prices cannot be obtained;
- the business cannot shift meaningful demand;
- savings disappear when standing, base and regulated charges are included;
- the result depends on interrupting operations, battery/control hardware or daily manual monitoring the customer will not sustain; or
- a supplier or accredited comparison tool already gives the customer a clear, trusted answer at negligible effort.

A generic tariff explainer, an unpriced optimisation dashboard or a percentage-saving claim without exact site evidence does not pass.

## Downside and evidence boundary

- Dynamic pricing can increase bills for peak-heavy or inflexible businesses.
- The 50 cent/kWh cap applies to the standard dynamic component, not necessarily the complete bill.
- Supplier availability and terms can change; every receipt needs a checked date and exact product source.
- A replay is decision support, not regulated financial, engineering or energy-market advice.
- The proof must not automate equipment, schedule loads or imply that grid conditions, carbon intensity and price are interchangeable.
- A single site's result cannot establish a portfolio-wide product market.

## Approval boundary

This note authorises research and an unsent test design only. It does **not** authorise:

- contacting a supplier or customer;
- accessing an energy account or requesting credentials;
- switching tariff, accepting terms or changing an electricity contract;
- changing meter configuration, solar settings, batteries, controls or operating schedules;
- spending money, publishing savings claims or selling an assurance service; or
- changing [[project_state/renew]] from its current evidence boundary.

Sam must approve any outreach. The registered customer must separately approve data access and owns any tariff decision. Any later operational change remains with the customer, supplier and appropriately qualified parties.

## Provenance

- [CRU — Introducing the new Dynamic Price Tariff for electricity (April 2026 PDF)](https://www.cru.ie/documents/30576/Introducing_the_new_Dynamic_Price_Tariffs_for_electricity_.pdf)
- [CRU — Dynamic Price Tariffs for electricity](https://www.cru.ie/consumer-information/billing/dynamic-price-tariffs-for-electricity/)
- [Electric Ireland — SME dynamic price plans](https://www.electricireland.ie/business/business-plans/business-electricity/dynamic-price-plans)
- [Energia — Business billing and dynamic tariffs](https://www.energia.ie/business/help-and-support/billing-and-payment)
- [SSE Airtricity — business electricity plans](https://www.sseairtricity.com/ie/business/energy-supply/electricity)
- [SSE Airtricity — dynamic-tariff suitability for business](https://www.sseairtricity.com/ie/business/help-centre/dynamic-tariffs/what-do-you-need-to-know-about-this-tariff)

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/evolv-renewables]] — parent company
- [[project_state/renew]] — current evidence and WIP boundary
- [[goals/renew-pipeline]] — commercial rooftop goal
- [[items/renew-reporting-source-baseline]] — correct validation home
- [[items/renew-grid-automation]] — possible later data input, not authorised here
- [[briefs/2026-09-06-evolv-customer-authorised-meter-data-reconciliation-proof]] — existing HDF, inverter and supplier-statement proof
- [[briefs/2026-10-03-evolv-self-consumption-sress-export-route-gate]] — keep self-consumption, export support and import tariff decisions separate

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/business-opportunities-moc]]

