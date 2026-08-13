---
title: Here’s Health app project brief, supplied by Sam
source: Sam Donworth, Telegram
source_date: "2026-08-13"
kind: source-import
status: captured
---

# Here’s Health app project brief

This is a normalized source record of the project brief Sam supplied on 13 August 2026. It preserves the brief’s substantive requirements while correcting broken line wrapping. It is source material, not evidence that Here’s Health has accepted the expanded scope.

## Engagement context

- Client: Here’s Health.
- Primary contact: Conor, owner of Here’s Health.
- Referral source: Keith Crowley, Global Head of Sales at Dell.
- Keith previously worked with Sam on DavidHowardGolf.ie and recommended him based on that work.
- Here’s Health is an established Cork family business with multiple health-food stores, cafés, an online Shopify store and a sauna offering.
- A new café is expected to open in approximately three months.
- Conor’s original request was a café app connected to Square for online ordering, payment and collection, piloted at the new café and potentially rolled out to other cafés.
- Conor is going on holiday and is expected to send the available information and provide Shopify and Square access. Square has reportedly told him the integration is possible.
- Internal target: production-ready within six weeks, with approximately two additional weeks for testing, App Store review and launch preparation.

## Sam’s expanded product thesis

Sam recommends proposing **Here’s Health Digital Platform, Phase One**, not treating Shopify as a free addition to a café app. The new café is the launch event and high-frequency use case, while the existing Shopify store, physical locations, content and services give the app immediate and durable utility.

The app should be a premium, purpose-built consumer product rather than a website inside an app. Proposed primary navigation:

- Home
- Café
- Shop
- Rewards
- Account

## Home

Proposed home functions:

- Order from the café.
- Shop Here’s Health.
- New café launch content and countdown.
- Featured offers.
- Favourite and recent purchases.
- One-tap reordering.
- Rewards status.
- Store and café locations.
- Sauna booking.
- Seasonal health content and recipes.
- Use the customer’s preferred location to surface relevant actions without a forced café-versus-shop gateway.

## Café and Square

Proposed functions:

- Location selection.
- Live menus sourced from Square catalogue.
- Categories such as breakfast, lunch, drinks and treats.
- Product modifiers and customisations.
- Dietary and allergen information.
- Collection-time selection.
- Click and collect.
- Apple Pay, Google Pay and card payments where supported by the selected Square flow.
- Order confirmation, live preparation and collection status.
- Push notifications.
- Favourite items, one-tap reorder and café order history.

Operational requirement: orders must enter the existing Square environment so café staff do not manage a parallel order system. Square remains source of truth for café products, prices, modifiers and availability.

## Shop and Shopify

Proposed functions:

- Live Shopify product catalogue, categories and collections.
- Search and filtering.
- Product imagery and information.
- Current price and stock.
- Customer accounts.
- Retail basket.
- Shopify checkout.
- Previous online orders.
- Favourites.
- Replenishment reminders.
- Relevant product recommendations.

Shopify remains source of truth for products, prices, collections, inventory and promotions. The proposed implementation uses Shopify Storefront API for catalogue and basket functions, with Shopify Checkout Kit for final checkout.

## Rewards

- Initial café loyalty may use Square Loyalty if compatible with the current setup.
- Long-term ambition is a coherent brand-level rewards experience across café and retail.
- Potential capabilities include points or progress, app-only rewards, birthday offers, visit incentives, cross-promotions, referrals, personalised offers and a digital loyalty card.
- A technically unified Square and Shopify programme may require a separate application layer and must not delay the initial launch.

## Account and identity

Proposed functions:

- Personal details.
- Preferred café and store.
- Dietary preferences.
- Allergen information with appropriate disclaimers.
- Saved favourites.
- Café and Shopify order histories.
- Notification preferences.
- Marketing consent.
- Payment and account settings.
- Privacy controls.

Long-term direction: one customer-facing identity across Here’s Health while Square and Shopify remain separate commerce systems underneath.

## Explicit commerce boundary

Version one should not combine café and retail products into one transaction. Café items use a Square basket, payment and collection flow. Retail items use a Shopify basket, checkout and fulfilment flow. The customer may still see one brand, profile, home, favourites area, filtered order history, preferences, notifications and cross-category recommendations.

## Design ambition

- Premium wellness, hospitality and retail product rooted in the existing natural green palette, warm organic character, Cork heritage, logos and food imagery.
- High-quality editorial food and product photography.
- Refined accessible typography and natural colour palette.
- Clear distinction between Café and Shop without fragmenting the brand.
- Subtle motion and tactile interactions.
- Strong product cards, menu browsing and dietary/allergen presentation.
- Excellent basket, checkout, loading, empty, error and order-status states.
- Accessible sizing and contrast.
- Native-feeling payments and notifications.
- Fast performance on current iPhone and Android devices.
- Benchmark international health-food retailers, healthy café groups, wellness brands, grocery and convenience apps, click-and-collect products, Shopify-powered commerce and loyalty apps.
- Develop three distinct visual directions before selecting the final design language.

Flagship interaction: the customer opens the app, sees their preferred café, taps “Order your usual”, confirms collection time, pays with Apple Pay and receives live preparation updates.

Possible pre-opening launch surface:

- Full Shopify shopping.
- Coming Soon café.
- Launch content and countdown.
- Menu previews.
- Exclusive launch offers.
- Push-notification sign-up.
- Early rewards or incentives.

## Proposed technical direction

- React Native shared iOS and Android application.
- Secure cloud backend.
- Square Catalog, Orders, Payments and relevant Loyalty APIs.
- Shopify Storefront API and Checkout Kit.
- Push notifications.
- Customer account and preference database.
- Analytics and event tracking.
- Verified webhook processing.
- Error monitoring and operational logging.
- Separate development, testing and production environments.
- No production credentials in the mobile application.
- Properly scoped Square and Shopify access, with sensitive operations handled by the backend.
- Idempotency protection for transactions and reconciliation for missed events.
- Multi-location architecture.
- Publication through Here’s Health-owned Apple Developer and Google Play organisation accounts.

## Required discovery

### Square

- Account and merchant/location structure.
- Hardware model and purpose at each café.
- Whether staff use Order Manager, kitchen printers or a kitchen display.
- How online orders should reach staff.
- Catalogue, menus, modifiers, loyalty, refunds, cancellations and collection workflow.
- Any Square guidance or technical contact.

### Café operations

- Opening hours and order cut-offs.
- Preparation-time and collection-slot capacity rules.
- Time-of-day availability and sold-out behaviour.
- Location-specific menus.
- Collection instructions, cancellation and refund policy.
- Staff responsibilities.
- Allergen and dietary classifications.
- Launch offer and marketing plan.

### Shopify

- Plan, configuration, theme and brand assets.
- Storefront API availability.
- Products, collections, customer accounts, stock and fulfilment.
- Existing applications and integrations.
- Discounts and promotions.
- Shipping and collection options.
- Checkout configuration.
- Order-history access.
- Privacy and marketing consent setup.

### Business and compliance

- Legal entity.
- Privacy policy, terms, refunds and support.
- GDPR responsibilities and marketing consent.
- Allergen disclaimers and accessibility requirements.
- Apple and Google organisation accounts.
- App ownership and ongoing maintenance responsibilities.

## Proposed delivery programme

### Week 1, discovery and technical proof

- Receive and review Conor’s information.
- Audit website and Shopify.
- Inspect Square setup and hardware.
- Establish secure access.
- Confirm customer and staff workflows.
- Prove Square catalogue, ordering and fulfilment in Sandbox.
- Prove Shopify catalogue, basket and checkout.
- Confirm Apple and Google organisation accounts.
- Finalise functional scope.

### Week 2, product and design

- Competitor and category research.
- Full customer journey.
- Three visual directions.
- Final design language and design system.
- Café and Shopify prototypes.
- Client validation of operational workflows.

### Week 3, core café build

- Authentication and accounts.
- Location selection.
- Square menu, catalogue, categories, products and modifiers.
- Basket, collection scheduling and initial order creation.

### Week 4, commerce integration

- Square payments, order submission, staff fulfilment and status.
- Shopify browsing, search, collections, basket and checkout.

### Week 5, retention and polish

- Push notifications, favourites, reorder, order history and dietary preferences.
- Analytics, error handling, accessibility, performance and interaction refinement.

### Week 6, production candidate

- End-to-end and real-device testing.
- Payments and Square hardware testing.
- Shopify checkout testing.
- Staff pilot and security review.
- App Store assets and metadata.
- Production deployment and store submissions.

### Weeks 7 and 8, release buffer

- Review responses, bug fixes, operational training, final content, marketing preparation, soft launch, customer testing and launch readiness.

The delivery objective is an early production candidate, not an unrealistic guaranteed public release date that ignores App Store review and third-party dependencies.

## Commercial position

Propose the work as **Here’s Health Digital Platform, Phase One** with explicit value across branded iOS and Android apps, café click-and-collect, Square integration, Shopify mobile commerce, accounts, notifications, content, launch infrastructure, analytics and future multi-location capability.

Do not frame the Shopify capability as an incidental extra. Recurring support should cover hosting, backend infrastructure, monitoring, security updates, API maintenance, OS compatibility, App Store releases, analytics, technical support and a defined improvement allowance.

## Longer-term AI opportunity

Conor wants to discuss AI across the business after returning from holiday at the end of August. Future opportunities may include owner intelligence across Square and Shopify, automated performance briefs, demand forecasting, purchasing, waste reduction, scheduling, support, marketing, recommendations, segmentation, replenishment, cross-selling, management reporting, anomaly detection and internal knowledge support.

The app should create clean, consented behavioural data foundations across searches, views, abandoned baskets, repeat café orders, modifiers, purchase frequency, preferred locations, cross-category behaviour, notification engagement and café-to-retail conversion. AI must not delay the consumer launch.

## Strategic importance to Sam

- This can become a flagship EvolvAI case study.
- Exceptional delivery could turn Keith and Conor into credible advocates in a wider network of established business owners.
- Success means demonstrating commercial judgement, premium product design, third-party integration, operational deployment, professional communication, ahead-of-expectation execution and a longer-term AI and digital-transformation roadmap.
- The goal is materially greater client value without losing control of scope, quality, cost or delivery risk.

## Connected vault notes

- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — distilled strategic brief
- [[companies/heres-health]] — client company
- [[project_state/heres-health-app]] — live engagement state
- [[items/heres-health-week-one-discovery-and-technical-proof]] — immediate milestone
- [[people/conor-heres-health]] — primary client contact
- [[people/keith-crowley]] — referral relationship
- [[context/business-opportunities-moc]] — opportunity map
