---
title: Planet satellite data opportunity
purpose: Capture the Planet.com satellite-data business opportunity for later exploration
created_at: "2026-06-26T19:25:49+01:00"
source: Telegram conversation with Sam about Planet.com CEO podcast
status: parked-for-later
---

# Planet satellite data opportunity

## Trigger
Sam heard the Planet.com CEO describe high-frequency Earth imagery that can be purchased via API and flagged it as a potentially huge source of use cases for OpenHouse, Evolv Renewables, or another company.

## Core thesis
Planet is not the product. The product is:

> **what changed, why it matters, and what to do next.**

Planet’s imagery/API layer is most interesting when wrapped in a vertical workflow: alerts, reports, risk flags, sales triggers, and recommended next actions.

## Planet capabilities checked
- PlanetScope Monitoring: near-daily global landmass imagery at roughly **3.7m** resolution.
- Public product copy claims **300M+ sq km/day** of imagery collection.
- Archive reaches back many years; newer daily archive is useful for before/after comparison.
- APIs include Data, Orders, Subscriptions, Basemaps/Tiles/OGC, tasking, analytics/statistics.
- Planetary Variables include soil water, crop growth/biomass, temperature, forest carbon, and field boundaries.
- Public price examples observed: around **$2.7k–$9.65k/year** for a small area-under-management example, depending on region/tier. Treat as directional because contract minimums and real scaling need confirmation.

## Best opportunity wedges

### 1. Construction Watch
Automated satellite progress/risk reports for construction and infrastructure sites.

Potential signals:
- land clearing
- foundations / site preparation
- access roads
- roofing or major visible progress
- materials/equipment arrival at broad scale
- stalled projects
- flooding/waterlogging
- encroachment or nearby development

Potential buyers:
- property developers
- construction firms
- lenders
- insurers
- councils
- infrastructure operators

Likely offer:
> Weekly AI-assisted site-progress reports across a portfolio of construction sites.

Estimated small-pilot operating cost:
- **Manual/no-Planet MVP:** roughly €250–€1,300/month, mostly human review.
- **Small Planet-backed pilot:** roughly €500–€2,500/month, depending heavily on data area and Planet commercial terms.
- Use public/free imagery first, then trial Planet only after buyer validation.

### 2. Solar farm construction and O&M monitoring
Potentially very relevant to renewables, especially utility-scale solar.

Use cases:
- monitor solar farm construction progress
- flag vegetation encroachment
- detect flooding/waterlogging
- monitor access roads and site boundaries
- support investor/owner reporting
- prioritize maintenance inspections after weather events

Potential buyers:
- solar developers
- EPC contractors
- asset owners
- O&M providers
- project finance/lenders
- insurers

Likely offer:
> We monitor your solar project sites from space and send weekly/monthly progress, vegetation, and risk reports.

Fit with Evolv Renewables:
- Strongest for commercial/utility-scale sites rather than small residential installs.
- Could compound with Evolv’s existing reporting pain if it moves into portfolio monitoring or owner-facing reporting.
- Residential rooftop solar is less compelling for Planet alone because 3.7m imagery is too coarse for individual small-panel detail.

### 3. Commercial solar lead intelligence
More near-term and OpenBook/OpenHouse-adjacent than full satellite monitoring.

Use satellite/maps/business data to find commercial prospects:
- large roofs
- industrial estates
- warehouses
- farms
- factories
- cold storage
- hotels
- schools
- car dealerships
- high-consumption businesses
- visible lack of existing solar

Likely offer:
> Ranked commercial solar leads with roof/site suitability, business context, and tailored outreach.

This probably needs a blend of Planet/public imagery, Google/Apple/OSM, business listings, planning data, and manual review rather than Planet alone.

### 4. Property/land due-diligence reports
Satellite-backed property intelligence:
- nearby land-use changes
- new construction nearby
- flood/water/vegetation context
- access changes
- planning-risk context when combined with local planning data

Potential buyers:
- estate agents
- auctioneers
- planning consultants
- land buyers
- insurers

## What not to build first
- Generic satellite data viewer.
- Generic “AI for satellite images” platform.
- Consumer property app.
- Competing directly with Planet’s analytics.

## Validation plan for later
1. Pick one wedge: solar farm monitoring, construction watch, or commercial solar lead intelligence.
2. Build 3–5 mock reports manually using public imagery + planning/business data.
3. Show to real buyers and ask if weekly/monthly monitoring is worth **€500+/month**.
4. Only then use Planet trial/API or talk to Planet sales.
5. Keep the first product as a service/reporting workflow before building a dashboard.

## Related notes
- [[briefs/solar-installer-software-wedge]] — solar software wedge
- [[companies/evolv-renewables]] — parent company
- [[project_state/renew]] — live status
- [[context/consulting-wedges]] — consulting wedge context
- [[goals/renew-pipeline]] — sign three rooftop deals
- [[items/renew-grid-automation]] — grid export automation
- [[items/renew-compliance-portal]] — compliance portal
- [[companies/openhouse-ai]] — cross-domain: OH progress evidence
- [[companies/openbook]] — cross-domain: venue monitoring
- [[context/business-opportunities-moc]] — MOC hub
- [[briefs/ai-money-patterns-2026-06]] — pattern context

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/ai-money-patterns-2026-06]]
- [[briefs/openhouse-energy-assistant-wedge]]
- [[briefs/solar-installer-software-wedge]]
- [[briefs/solar-installer-workflow-analysis]]
- [[companies/evolv-renewables]]
- [[companies/openbook]]
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[context/consulting-wedges]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[goals/renew-pipeline]]
- [[items/renew-compliance-portal]]
- [[items/renew-grid-automation]]
- [[project_state/renew]]

