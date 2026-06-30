---
title: OpenHouse DTC energy savings guarantee research
company_id: openhouse-ai
date: 2026-06-29
status: research-brief
source: delegated web research
---

# OpenHouse DTC energy savings guarantee research

## Bottom line

A consumer DTC home-energy assistant **can credibly promise savings for specific high-load households**, but should **not** promise universal “subscription pays for itself” savings.

Best segments:

1. **UK EV owners on flat/default tariffs** — strongest savings case.
2. **UK Octopus customers / smart-tariff candidates** — best API/data route.
3. **Homes with EV + solar/battery + flexible loads** — good savings potential through off-peak charging, export/import optimisation and battery scheduling.
4. **Heat pump homes with poor settings** — plausible but harder to guarantee.
5. **Demand response participants** — useful bonus/retention feature, not primary subscription justification.

Weakest segment:
- generic non-EV, non-solar, non-heat-pump households on ordinary tariffs. Savings are often too small or uncertain to justify paid subscription unless bundled with switching, bill-checking and alerts.

## Defensible savings mechanisms

### 1. Electricity tariff / bill optimisation

Credible claim:

> We compare your actual half-hourly usage against available tariffs and show whether switching could save you money.

Why credible:
- arithmetic using historical usage and published tariff rates
- especially strong in the UK because Octopus exposes account, meter, tariff, consumption and price endpoints

Data required:
- half-hourly or daily electricity consumption
- current tariff/unit rates/standing charge
- region/postcode
- meter type and eligibility
- EV, solar, battery, heat pump ownership
- UK Octopus: API key and account number
- Ireland: ESB Networks smart meter HDF/CSV download or supplier bill data
- US: Green Button / Green Button Connect where available

Defensible wording:
- “Based on your last 12 months of usage, Tariff X would have cost £Y less/more.”
- “Potential saving if your usage pattern stays similar.”
- “We do not switch you without consent.”

Risky wording:
- “We guarantee you the cheapest tariff.”
- “Save £X every year” without caveats.

### 2. EV charging optimisation

Credible claim:

> For EV households that can charge at home, shifting charging to a suitable off-peak/smart EV tariff can save hundreds per year.

Illustrative calculation from research:
- UK EV, 8,000 miles/year, 3.5 miles/kWh
- ~2,286 kWh/year
- shift from ~24.5p/kWh to 8p/kWh
- annual saving ~£377
- at 12,000 miles/year: ~£566

This is enough to support a £5–£10/month subscription for many EV homes.

Best MVP path: UK + Octopus EV tariffs first.

### 3. Heat pump settings and tariff-aware heating

Credible claim:

> We can identify heat pump schedules/settings likely to increase consumption and recommend lower-cost operating patterns.

Mechanisms:
- lower flow temperature where comfort allows
- correct weather compensation curve
- avoid inefficient aggressive setbacks/reheats
- preheat during cheaper tariff windows where suitable
- detect backup/resistive heating overuse

Illustrative calculation:
For a home using 5,000 kWh/year for heat pump electricity:
- 3% reduction: ~150 kWh, ~£37/year at 24.5p/kWh
- 5% reduction: ~250 kWh, ~£61/year
- 8% reduction: ~400 kWh, ~£98/year

This can help pay for low-cost subscription, but only if the home has meaningful heating load and poor baseline settings.

Avoid “guaranteed 20% heat pump savings.”

### 4. Solar self-consumption and battery optimisation

Credible claim:

> We schedule flexible loads/battery charging to maximise value of your solar and cheap-rate electricity.

Savings logic:
- value comes from import rate minus export rate plus time-of-use arbitrage
- shifting 1,000 kWh from export/import replacement with a 10p/kWh spread saves ~£100/year
- bigger savings where import/export spreads are larger or battery can charge off-peak and discharge peak

Caveats:
- battery degradation
- round-trip efficiency losses
- export payments
- tariff eligibility

### 5. Demand response / flexibility rewards

Credible claim:

> We alert you to paid flexibility events and automate participation where supported.

Commercial reality:
- good retention feature
- not reliable enough alone to justify subscription
- event frequency and payouts vary

### 6. Appliance fault / always-on load detection

Credible claim:

> We can flag abnormal always-on loads and unusual changes in your usage pattern.

Good examples:
- immersion heater left on
- EV charging at peak unexpectedly
- heat pump backup heater running excessively
- fridge/freezer/dehumidifier unusually high runtime
- pump/fan stuck on
- solar/battery export/import behaving oddly

Illustrative calculation:
- 100W always-on load = 876 kWh/year
- at 24.5p/kWh = ~£215/year

Avoid claiming full appliance disaggregation from ordinary smart-meter data.

## Region reality

### UK

Best initial market.

Pros:
- smart meters widely deployed
- half-hourly data through suppliers
- Octopus API is unusually strong
- mature smart tariffs: Agile, Intelligent Octopus Go, Go, export tariffs, Saving Sessions
- EV smart charging value is clear

Recommended launch wedge:

> UK Octopus users with EV / solar / battery / heat pump.

### Ireland

Good medium-term market, weaker API story.

Pros:
- smart meter rollout exists
- ESB Networks lets users view/download smart meter usage data
- HDF/CSV half-hourly files appear available via ESB Networks online account
- high electricity prices make behavioural/tariff savings meaningful

Limitations:
- weaker standard consumer-authorised API than UK Octopus
- manual HDF upload friction
- tariff automation less mature

Recommended MVP:

> Upload your ESB HDF/CSV + bill, get tariff/savings report.

### US

Large but fragmented.

Pros:
- Green Button exists
- many utilities have EV/TOU tariffs and demand response

Cons:
- utility-by-utility integrations
- tariffs and rules vary by state/utility

Recommended route:
- do not start broad US
- pick one or two utility territories where Green Button Connect, TOU tariffs and EV rates are accessible

## Can OpenHouse promise “subscription pays for itself”?

Yes, but only for qualified users.

Guarantee-eligible households:
1. Own/lease EV and charge at home.
2. Have smart meter interval data.
3. Are on default/flat tariff or non-optimised EV tariff.
4. Have solar/battery with controllable inverter or clear import/export spread.
5. Have heat pump with meaningful heating load and visible inefficient behaviour.
6. Have high always-on load or anomalous usage.

Not guarantee-eligible:
- low-consumption households
- renters without tariff/device control
- already-optimised homes
- customers unwilling/unable to switch tariff or change behaviour
- homes with missing smart-meter data

## Proposed savings-backed offer

### Offer name

**OpenHouse Energy Savings Guarantee**

### Consumer promise

> If we cannot find verified first-year savings opportunities greater than your first year of subscription, you get your subscription back.

### Safer variant

> We only ask you to subscribe when your own data shows enough savings potential to cover the cost.

### Structure

#### Tier 1: Free Energy Check
- connect Octopus API / upload smart-meter data / upload bill
- calculate current annualised cost
- alternative tariff cost
- EV charging opportunity
- always-on load
- solar/export opportunity
- heat pump red flags
- outcome: “We found £X/year potential savings” or “You’re already optimised.”

#### Tier 2: Paid Assistant
£5–£10/month only after savings screen.

Includes:
- tariff monitoring
- EV charge schedule recommendations or automation
- heat pump setting checklist
- solar/battery scheduling prompts
- demand-response alerts
- monthly “savings verified” report

### Guarantee conditions

Applies only if:
- customer provides at least 30–90 days historical interval data
- customer has projected gross savings ≥ annual subscription fee
- customer follows recommended actions
- savings measured against documented baseline
- energy prices/tariffs normalized where needed
- comfort overrides and behaviour changes excluded unless measurable

Refund cap:
- limited to subscription fees paid in guarantee period
- do not guarantee utility bill reductions larger than subscription unless OpenHouse controls and verifies the actions

## Suggested MVPs

### MVP 1: UK Octopus Bill Killer

1. User selects EV / solar / battery / heat pump / none.
2. Connects Octopus API key + account number.
3. Pull account/meter/current tariff/half-hourly usage/available rates.
4. Ask EV miles, charger, solar/battery details, heat pump settings.
5. Simulate current tariff vs Intelligent Go/Go/Agile/export options.
6. Output “You can save £X/year by doing Y” with confidence and blockers.
7. Paid upgrade: monitoring, charge reminders/automation, usage deviation alerts, monthly savings report.

### MVP 2: Ireland smart-meter upload

1. User uploads ESB Networks HDF/CSV and latest bill.
2. Parse half-hourly usage.
3. Compare available tariffs manually maintained in database.
4. Identify peak share, night-rate suitability, EV/heat pump/solar patterns, always-on load.
5. Provide switching and behaviour report.
6. Paid tier only if identified savings exceed subscription.

### MVP 3: fault/anomaly detection

Start narrow:
- always-on load detection
- EV charging at wrong time
- heat pump backup heater suspicion
- solar export/import anomaly
- battery not discharging during peak
- weekend/holiday abnormal use

Avoid broad appliance disaggregation claims.

## Recommended positioning

Strongest tagline:

> Connect your smart meter. We find and track real savings from tariffs, EV charging, solar and heat pump settings — or you don’t pay.

More cautious version:

> We only ask you to subscribe when your own data shows enough savings potential to cover the cost.

Avoid:
- “AI cuts every home’s bill.”
- “Guaranteed 20% savings.”
- “We detect every appliance.”
- “Works with all suppliers/devices.”

## Key recommendation

The most defensible “subscription pays for itself” product is not generic home AI. It is a **qualified energy savings product** for high-load households, especially UK Octopus / EV / solar / battery / heat pump users.

For Ireland, start with ESB HDF/CSV upload and tariff/savings report. For broader home-agent positioning, pair this with Move-In Home Plan and Home Vault so OpenHouse can still serve users whose energy savings are not high enough to justify subscription alone.

## Connected vault notes

- [[companies/openhouse-ai]] — parent company
- [[project_state/oh]] — current project state
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]] — DTC home agent plan
- [[briefs/openhouse-dtc-acquisition-hooks-research-2026-06-29]] — acquisition hooks/personas
- [[briefs/openhouse-dtc-core-thesis-2026-06-29]] — DTC core thesis
- [[briefs/openhouse-dtc-home-context-research-2026-06-29]] — DTC context feasibility
- [[briefs/openhouse-energy-assistant-wedge]] — energy assistant wedge

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-dtc-concierge-mvp-sprint-2026-06-29]]
- [[briefs/openhouse-dtc-home-agent-plan-2026-06-29]]
- [[companies/openhouse-ai]]
- [[project_state/oh]]

