# Here's Health — Project Master Brief

**Date:** 29 August 2026  
**Status:** Working brief / AI handoff context  
**Purpose:** Structured record of the meeting, decisions, opportunities and implementation plan. Not a final technical specification.

## 1. Executive Summary

Here's Health and Donworth Studio are proceeding with the project. The immediate priority is to turn the approved design into a production-quality iOS and Android app. The owner requested no material design changes.

First release: Shopify health-food store, cafés, sauna/cold plunge, customer accounts, offers/rewards, click & collect/takeaway and relevant notifications.

Existing systems discussed:
- **Shopify** — online catalogue/e-commerce.
- **Square** — café catalogue/POS/payments.
- **Sauna booking platform** — appears connected with Square; verify exact architecture.
- **Westron** — long-standing retail POS.
- **Planday** — rostering.
- **BrightPay** — payroll.
- **Existing loyalty/rewards** — exact platform still to map.

Longer term, build a Here's Health digital platform: customer app + shared integration/data layer + management portal + analytics + rostering/payroll workflow + operational automations + AI business intelligence + AI/agent readiness + potentially a customer-facing Here's Health Assistant.

**Principle:** core app and integrations first. Do not let later AI ideas delay launch.

---

## 2. Business Context

Here's Health spans health-food shops, Shopify e-commerce, multiple cafés, a new café due in roughly two months, sauna/cold plunge, wellness specialist, physiotherapist, warehousing, approximately 100 employees and a newsletter with approximately 10,000 monthly readers.

The opportunity is largely about connecting fragmented systems and selectively automating/replacing processes where there is a clear return.

---

## 3. Immediate Objective — Ship the App

Platforms: **iOS + Android**.

The existing prototype is effectively approved. Refine it slightly, then code it. Do not redesign for the sake of it.

Quality bar: fast, elegant, polished, intuitive, reliable, native-feeling, simple for ordinary customers and driven by live source-system data rather than duplicate manual catalogues.

---

## 4. Core Integrations

### Shopify
Shopify remains source of truth for online retail. Product additions/removals, prices, descriptions, images, availability, collections, bundles/stacks etc. should flow automatically to the app wherever supported. No second manually maintained catalogue.

### Square
Square remains source of truth for café catalogue/operations where appropriate. Menu, pricing and availability changes should automatically reflect in the app wherever supported.

### Sauna
The booking platform appears to integrate with Square. Verify the exact setup before building anything separate. Prefer integrating the working system over replacing it.

---

## 5. Shared Here's Health Backend

Create one modular Here's Health backend/integration layer rather than isolated backends for every feature.

It can connect the customer app, Shopify, Square, sauna booking, Westron where possible, loyalty/promotions, rostering/BrightPay workflow, management portal and future AI services.

Shopify/Square remain operational sources of truth. The Here's Health layer synchronises and normalises relevant data and can own cross-system functionality such as customer identity, campaigns, QR entitlements, notifications, analytics, integration logs and future unified loyalty.

---

## 6. Management / Admin Portal

Build toward a secure web portal for management, with selected views potentially available in-app.

Potential sources: Shopify, Square, Westron, café sales, online sales, sauna bookings, stock/warehouses, promotions, customer behaviour and rostering.

Potential outputs:
- Revenue/sales trends by channel
- Best/slowest sellers
- Category performance
- Café performance
- Online vs physical
- Products bought together
- Stock/low-stock where data allows
- Sauna utilisation
- Offer performance
- App adoption
- Click & collect
- Repeat behaviour
- Subscription performance later

Build conventional reliable dashboards first; layer AI on top.

---

## 7. AI Business Intelligence

Once data is reliable, management could ask:
- What were our fastest-growing products over 90 days?
- What products are regularly bought together?
- What is moving unusually slowly?
- How did café sales compare with last month?
- Which categories are growing?
- Has anything unusual happened this week?
- What performs best by store?

The value is not “AI” itself; it is making fragmented information easier to understand and act on.

---

## 8. Westron POS — Major Automation Opportunity

Westron has been embedded for approximately 25 years and is cheap, so do not assume it should be replaced immediately.

### Current pain
Large pricing spreadsheets contain hundreds/thousands of lines, including products Here's Health does not stock. The owner's father manually finds stocked products, identifies cost/resale price changes and updates Westron. This can consume days.

### Target workflow
1. Import supplier spreadsheet.
2. Match SKUs/products to Here's Health catalogue.
3. Ignore irrelevant products.
4. Detect price changes.
5. Flag ambiguous/unusual changes.
6. Apply agreed margin/pricing rules where appropriate.
7. Present proposed changes for human approval.
8. Approve/reject exceptions.
9. Import/push approved changes into Westron using safest supported mechanism.
10. Keep audit trail.

Do not implement blind autonomous pricing.

### Research
Find exact Westron vendor/version, API, database architecture, import/export, CSV/Excel support, identifiers/SKUs, backups, stock/transaction exports and whether it can feed the Here's Health platform. Desktop automation only as a last resort.

Return with a concrete Westron automation plan at the next substantive review.

---

## 9. Rostering — Planday → BrightPay

Current: **Planday**, approximately €3/employee/month × approximately 100 employees = **approximately €300/month / €3,600/year**. Bizimply was considered but would cost broadly the same. **BrightPay** handles payroll and should remain.

Planday's important function is producing staff/time data in the required payroll format. The owner supplied a template/example.

Investigate a Here's Health rostering module:
- Employees, locations, roles
- Availability
- Shift creation / weekly rota
- Hours
- Leave/absence where required
- Manager controls
- Staff access
- Export
- BrightPay-compatible output

If reliably replicated, the direct saving is approximately €3,600/year.

Before replacing Planday verify BrightPay import requirements, current export, breaks, overtime, holidays, multi-location staff, pay rates, permissions, audit requirements, GDPR/security, approvals and relevant employment/timekeeping rules.

---

## 10. New Café + App Launch

New café expected in approximately two months. **Target app launch: roughly three weeks before café opening.**

Use that period to drive installs, familiarise customers with the app and establish repeat behaviour, then use the café opening as a second promotional event.

Owner is open to aggressive introductory offers, potentially e.g. **50% off coffee via the app** for an initial period.

Desired habit: **Open app → order → collect → repeat.**

Campaign capabilities may include dates, eligibility, usage limits, repeat/single use, redemption tracking, QR/promo redemption, push notifications and analytics.

Map the existing loyalty system before building another one.

---

## 11. Café — Takeaway & Click & Collect

All café breakfast/lunch is available takeaway. Make click & collect a major app use case:
- Browse menu
- Order ahead
- Pay
- Select collection
- Order status where supported
- Reorder favourites
- Fast collection

Also explore local-business promotions: office lunch runs, weekday repeat orders, team lunch collection and potentially scheduled recurring orders. Validate café operational capacity first.

---

## 12. Sauna & Cold Plunge

Facility is strong but underutilised. Give it proper prominence in the app: information, availability, booking, payment, management, reminders, rebooking, bundles/add-ons and potentially packages/membership later.

---

## 13. Sauna Add-ons — QR Redemption

Current: customer books sauna + café add-on; staff prepare/give physical ticket; customer hands ticket to café.

Proposed:
1. Book sauna in app.
2. Add coffee/açaí/etc.
3. Payment/order recorded.
4. App generates unique QR entitlement.
5. Café scans it.
6. Entitled item appears.
7. Café fulfils it.
8. Entitlement marked redeemed and cannot be reused.

Potentially support multiple entitlements, partial redemption, expiry, booking association, timestamp/location and audit trail.

---

## 14. Subscriptions & Recurring Revenue

Owner liked subscriptions.

### Individual products
Recurring 30/60/90-day delivery for appropriate repeat products, or simple replenishment reminders: “You may be running low. Reorder?”

Assess Shopify's existing subscription ecosystem before custom-building.

### Curated stacks
Examples: sleep, morning, training/recovery stacks. One-off or subscription.

### Influencer/expert stacks
Relevant creators/experts could promote curated stacks, creating distribution, attribution, recurring revenue and higher basket values. Handle health claims, endorsements and recommendation language carefully.

---

## 15. Wellness Specialist & Physiotherapist

These services are under-promoted. The wellness specialist and physio create legitimate cross-flow into retail and sauna/cold plunge.

Potential future **Wellness** section: sauna/cold plunge, wellness specialist, physiotherapy, booking/contact, approved content and appropriate product pathways.

---

## 16. Newsletter — Approximately 10,000 Monthly Readers

Major owned distribution channel. Current newsletter contains offers/product explanations and Shopify links.

Immediate opportunity: use it for app acquisition and re-engagement.

**Newsletter offer → deep link into app → relevant product/collection → basket/purchase.**

For launch: app download promotion, app-exclusive offers, deep links and attribution tracking. Later: app collections, saved products, stacks, subscription prompts and consented personalisation.

---

## 17. Marketing & AI Staff Enablement

Owner is positive about business-grade ChatGPT or Claude adoption.

Potential engagement:
- Appropriate business/enterprise setup
- Permissions/governance
- Here's Health design system
- Reusable brand assets/templates
- Prompt/workflow library
- Training for marketing manager and relevant staff

Uses: social, email, graphics, posters, product campaigns, copy, campaign concepts, presentations and basic video/content production.

Aim: improve speed and consistency, not merely provide chatbot access.

---

## 18. AI / Agent Readiness

Prepare Here's Health for customers increasingly using AI assistants to discover and eventually purchase products.

Example: “I need magnesium, vitamin D and whey protein. Where should I buy them in Cork?”

Future: “I'm running low on those. Reorder them.”

Goal: maximise the chance Here's Health can be **found, understood, trusted and transacted with** by AI systems.

Potential work: structured product data, clear attributes/ingredients/dietary information, accurate locations, consistent listings, strong descriptions, authoritative content, reviews/reputation, machine-readable catalogue, APIs and emerging agent-commerce standards.

**No guarantee of ranking/recommendation inside ChatGPT, Claude or another third-party assistant.**

---

## 19. Future Here's Health Assistant

Later phase, not initial launch.

Example: “I've been told to take iron. What products do you stock that are relevant?”

Could search catalogue, present relevant options, explain approved product information, compare and link/add to basket.

Owner asked whether a strong high-margin bestseller could be prioritised. Do not secretly present margin-driven ranking as objective health advice. Use safety/relevance first and transparent merchandising labels such as “Here's Health recommends”, “Popular choice” or “Best seller” where appropriate. Higher-risk health questions should escalate appropriately.

---

## 20. Loyalty / Rewards

Existing rewards system must be mapped before new loyalty infrastructure is designed:
- Platform
- Customer IDs
- Mechanics
- Cross-channel coverage
- API
- Square/Shopify relationship
- Redemption rules
- Adoption

Prefer integration initially. If launch promotions cannot be represented cleanly, the Here's Health backend may manage campaign entitlements without creating a second loyalty balance.

---

## 21. Recommended Build Sequence

### Phase 0 — Technical discovery
- Confirm Shopify API/access
- Confirm Square API/access
- Map sauna booking integration
- Map rewards
- Map customer identity
- Confirm payment/checkout flows
- Define backend architecture
- Define secrets/security/environments
- Define webhooks/sync strategy
- Document sources of truth

### Phase 1 — Customer app
- Approved UI implementation
- Navigation/auth
- Shopify catalogue/search/product/basket/checkout
- Café catalogue/order/collection
- Sauna/booking
- Offers
- Notifications
- Deep links
- Analytics
- Production polish

### Phase 2 — Integration hardening
- Automatic Shopify sync
- Automatic Square sync
- Booking sync
- Webhooks/retries
- Logging/monitoring
- Edge cases
- Performance/security/testing

### Phase 3 — Minimum backend/admin
Only what is needed initially: integration health, campaigns if required, app analytics, relevant data capture and QR entitlements if launching them.

### Phase 4 — Pre-café launch
- App Store + Google Play release
- Newsletter launch campaign
- Intro offers
- Push/deep-link flows
- Measure installs/orders/redemptions
- Resolve issues before café opening

### Phase 5 — Management platform
Expand dashboards/data warehouse/unified reporting after core app is stable.

### Phase 6 — Operational ROI projects
- Westron price automation
- Rostering/BrightPay replacement workflow
- Marketing AI/design system/training
- Further operational automations

### Phase 7 — Growth / intelligence
- Subscriptions
- Stacks/influencer stacks
- Advanced analytics
- AI business intelligence
- AI/agent readiness
- Customer-facing assistant when justified

---

## 22. Source-of-Truth Principle

Avoid duplicated maintenance.

- **Shopify:** retail/e-commerce catalogue.
- **Square:** café catalogue/operations where appropriate.
- **Booking platform:** sauna availability/bookings unless there is a reason to replace it.
- **BrightPay:** payroll.
- **Here's Health backend:** cross-system integration, entitlements, reporting, analytics, campaigns and future intelligence.

The app is the polished customer interface over these systems, not another isolated database staff must maintain.

---

## 23. Key Questions Still to Resolve

### Shopify
- Exact plan/API access?
- Customer accounts/authentication?
- Checkout architecture?
- Existing subscription apps?
- Inventory structure/locations?
- Collections/stacks structure?
- Webhooks?

### Square
- Separate café locations/catalogues?
- How are menu/catalogue and stock represented?
- Existing loyalty/rewards?
- Order-ahead workflow?
- Exact sauna relationship?
- Can current café hardware/software scan app QR codes?

### Westron
- Exact vendor/version?
- Imports/exports/API/database?
- Product identifiers?
- Stock and sales data access?

### Rostering
- Exact Planday → BrightPay process/file?
- Required fields/rules?
- Who creates/approves rotas?
- Locations/roles/pay rules?

### Customer experience
- One account across channels?
- Existing loyalty identity?
- Launch offer rules?
- Push consent strategy?
- Click & collect operating process?

---

## 24. Immediate Next Actions

1. Freeze approved design direction.
2. Inspect Shopify backend and document catalogue/account/checkout architecture.
3. Inspect Square setup and document café locations/catalogues/order flows.
4. Verify sauna booking ↔ Square relationship.
5. Map existing loyalty/rewards.
6. Draw one-page system/data-flow architecture.
7. Decide backend stack and data model.
8. Start coding production app shell.
9. Integrate Shopify first and make retail catalogue/basket flow reliable.
10. Integrate Square café flow.
11. Integrate sauna booking.
12. Add only minimum backend/admin functionality required for launch.
13. Test heavily.
14. Prepare App Store/Google Play release roughly three weeks before café launch.
15. Design app-launch/café-opening promotion strategy.
16. Use newsletter as primary initial distribution channel.
17. In parallel, research Westron automation.
18. Map Planday/BrightPay workflow and assess replacement feasibility.
19. Return to owner in roughly 3–4 weeks with working app progress plus a concrete Westron/operational plan.

---

## 25. Scope Discipline

There are many valuable opportunities. Do not build all of them at once.

**Launch-critical:** beautiful working app + Shopify + Square + sauna + required offers/ordering/booking flows.

**Next:** shared management data layer, dashboards, Westron automation and rostering assessment.

**Later:** subscriptions, deeper loyalty, AI intelligence, agent readiness and Here's Health Assistant.

The new café creates a real deadline. Protect it.

---

## 26. Commercial Logic

Prioritise projects that do at least one of three things:

1. Increase revenue.
2. Improve customer experience.
3. Save meaningful staff/management time or direct software cost.

Examples:
- App/click & collect → convenience + revenue.
- Subscriptions → recurring revenue.
- Café launch offers → adoption + habit.
- Sauna visibility → utilisation.
- Westron automation → management time saving.
- Rostering replacement → approximately €3,600/year direct software saving.
- Unified analytics → better management visibility.
- Newsletter → existing distribution for app acquisition.
- AI marketing workflows → staff productivity.
- Agent readiness → strategic future-proofing.

---

## 27. Working Thesis

The customer app is **Phase One**, not the entire opportunity.

The architecture should allow Here's Health gradually to move from several disconnected systems toward a coherent digital layer connecting customers, commerce, operations and management information.

But sequencing matters:

**Get the app excellent. Get the integrations reliable. Get the data clean. Then build intelligence and automation on top.**
