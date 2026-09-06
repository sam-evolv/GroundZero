---
title: Here’s Health — Marcel iOS design-reference notes
date: 2026-09-03
status: reference-only
source_type: X-hosted product-design video
source_url: https://x.com/marcelkargul/status/2095262696983691520
---

# Here’s Health — Marcel iOS design-reference notes

## Purpose

Capture transferable interaction and visual-system mechanisms from Marcel’s mobile-app concept for possible **restrained, preview-only** use in the already-approved Here’s Health app direction. This is not approval for a redesign, source imitation or implementation.

## Provenance and evidence boundary

- Original post: [Marcel on X](https://x.com/marcelkargul/status/2095262696983691520), published 2 September 2026.
- Author’s own design claims: “Flawless shadows,” “Consistent spacing,” a `430 × 932` design canvas, “Simplifying everything down,” and “Great typography (SF Pro Rounded).”
- Reviewed source variant: 1080 × 1080 H.264, 60 fps, 14.716667 seconds, no audio stream in this variant.
- Local source-video SHA-256: `265ca099455ea80108cdd3e93d58f21f62528b5e6f1cd7ff25f764d9e18343b3`.
- Method: chronological contact sheets at 1 fps and 2 fps. Exact easing constants, type weights, spacing tokens and implementation framework are not creator-confirmed.

## Directly observed sequence

Approximate timestamps are based on sampled frames rather than the creator’s timeline.

- **0–1 s — Today/home into Consult:** a pale mint-white phone surface resolves into a `Consult` screen. Content is grouped into a short priority list, “More resources” and category shortcuts.
- **1–3 s — Consult detail:** a tap/focus pulse appears over a list row. The page remains compositionally stable while the selected path becomes the sole event.
- **3–5 s — Backpain/program:** the interface transitions through a washed-out intermediate state into a focused program page. A wide editorial exercise image anchors the page; short programme facts and progress sit beneath it.
- **5–7 s — Consult into Insurance:** the app returns to the Consult hub, then crossfades into `Insurance`. Three coloured top shortcuts precede concise sections for claims/documents and proposed or recent items.
- **8–10 s — Today/home:** a central `610` score with a green semicircular progress arc leads the hierarchy. Small supporting metrics sit beneath it; a vertical list of daily actions follows.
- **10–12 s — Medical team:** the screen transitions into `Medical team`, using small colour-coded rows for clinicians/services and compact communication controls.
- **12–14.7 s — return to Today:** the content fades back to the same home composition, reinforcing a hub-and-spoke product model.

## Observed visual grammar

### Composition and hierarchy

- One primary purpose per screen: consult, programme, insurance, team or today.
- Large quiet margins around a narrow mobile canvas; content uses consistent full-width insets and predictable vertical gaps.
- Sections are short and clearly titled rather than presented as a large dashboard grid.
- The home score is the only oversized datum; other information remains deliberately subordinate.
- One editorial image is used only where it gives a programme emotional context, not as decoration across every screen.

### Material, colour and depth

- Near-white surfaces sit over a very pale mint wash.
- Cards and controls are separated mainly by subtle elevation, soft diffuse shadows and tonal change rather than heavy borders.
- Rounded rectangles and circular indicators repeat across rows, cards, icons, progress and the navigation dock.
- Green is the dominant progress/success colour; blue, aqua, amber and rose identify secondary categories.
- Depth is restrained: a few stacked planes, no persistent 3D camera or glass spectacle.

### Typography and iconography

- The post explicitly names SF Pro Rounded. The sampled frames also show rounded, friendly letterforms and prominent tabular-looking numerals.
- Screen titles are compact; section labels are semibold; metadata is smaller and lower contrast.
- Icons are small, simple and colour-coded. They support row scanning instead of becoming standalone illustrations.

### Navigation and motion

- A floating bottom dock persists across the main surfaces.
- The active destination sits inside a soft pill, giving location more weight than inactive icons.
- Transitions preserve the phone and navigation frame while content fades, washes out or crossfades between states.
- A circular tap/focus pulse briefly makes direct manipulation visible.
- The sequence uses one visual event per beat; it does not move every card independently.

## Inferences — not directly proven

- The spacing appears compatible with an 8-point base and tighter 4-point sub-steps, but exact tokens cannot be measured reliably from the social encode.
- The soft elevation likely combines low-opacity ambient and contact shadows rather than one dark drop shadow.
- Motion appears to use eased opacity/position changes and possibly spring settling; exact durations and curves are unknown.
- The persistent dock suggests a small set of top-level destinations with modal or pushed detail routes.

## Restrained translation to Here’s Health

### Governing recommendation

Adopt the reference’s **calm hub-and-spoke clarity, consistent spacing, soft card depth and one-event-at-a-time motion**. Do not import its identity wholesale. Here’s Health should still look like the already-approved Here’s Health product, and the owner’s “no material redesign” direction remains controlling.

### Preview-only elements worth testing

1. **Calmer Today/Home composition**
   - Use one useful primary state—next order, next sauna session, current offer or pickup readiness—not an invented wellness score.
   - Follow with a short vertical list: reorder, upcoming booking, available offer, notification requiring attention.
   - Keep business truth explicit: each item labels `Café`, `Shop` or `Sauna`.

2. **Floating navigation dock with an active pill**
   - Preserve the established destinations: `Home`, `Café`, `Shop`, `Sauna`, `Account`.
   - Let the active pill move/settle gently while inactive icons remain quiet.
   - Do not let the dock imply that Café and Shop share a cart.

3. **Mode-specific header and commerce identity**
   - Café surfaces use a clearly labelled **Café basket · Square**.
   - Shop surfaces use a clearly labelled **Shop basket · Shopify**.
   - Badge colour, basket icon and checkout copy must remain distinct even if the surrounding brand shell is unified.

4. **Sauna as a focused programme-like journey**
   - Borrow the Backpain page’s single editorial image plus concise facts for the existing Session Pass preview: selected date, time, guest count, peak/off-peak state and safe next action.
   - Use progress only for truthful steps such as selection completeness; do not imply booking, payment or entitlement before Acuity confirms it.

5. **Soft elevated rows and status colour**
   - Apply a restrained dual-shadow recipe to high-value cards only: checkout handoff, next booking, order status and offer.
   - Use Here’s Health’s approved palette; reserve green for confirmed success/readiness rather than applying it to every card.

6. **One-event-at-a-time feedback**
   - On add-to-basket, booking selection, favourite or notification action, animate the changed control and its destination cue—not the whole screen.
   - Use a quick focus pulse or tonal lift as feedback, with a non-motion equivalent.

7. **Account as a compact service hub**
   - Translate the concise Medical Team/Insurance grouping into `Orders`, `Bookings`, `Favourites`, `Offers`, `Notifications` and `Support`.
   - Keep history filtered by source system; do not manufacture a unified transaction ledger that Square and Shopify cannot truthfully support.

## Do not copy

- The Cocoon identity, exact screen layouts, iconography, colours or proprietary health/insurance concepts.
- A synthetic health score: Here’s Health has no verified data basis for one.
- Low-contrast mint-on-white text, tiny metadata or shadow-only affordances.
- Universal SF Pro Rounded if it conflicts with the approved Here’s Health typography; use the reference’s friendly hierarchy, not necessarily its font.
- Washed-out transition states that make the interface appear disabled for too long.
- A shared Café/Shop cart, shared checkout or cross-system rewards implication.
- Decorative motion that delays ordering, checkout, booking or accessibility focus.

## Preview acceptance criteria

Before any mechanism spreads beyond a disposable preview:

- Compare the reference-inspired variant with the accepted current Here’s Health screen at matching iPhone and Android widths.
- Preserve the existing information architecture and owner-approved visual identity.
- Verify `Home`, `Café`, `Shop`, `Sauna` and `Account` at normal and large text sizes.
- Minimum 44 × 44 pt touch targets; WCAG-appropriate contrast; VoiceOver/TalkBack labels and logical focus order.
- Provide reduced-motion behavior: no blur wash, no travelling dock pill required, immediate state change plus colour/icon/text confirmation.
- Test slow-network and image-failure fallbacks; the next action and commerce owner must remain visible without imagery.
- Confirm Café/Square and Shop/Shopify baskets remain operationally and visually separate.
- Treat the source as influence only; implementation requires a new Forge card and independent Vera review of the exact preview artifact.

## Additional reference source — CollectUI

- Source: [CollectUI](https://collectui.com/) — a current, dynamically loaded gallery of curated interface images with search, categories, tags, designers, trending and favourites.
- Directly observed gallery structure: large neutral canvas, compact top navigation, persistent category rail, three-column visual grid, generous card spacing, small pattern tags and creator attribution.
- **Evidence boundary:** gallery inclusion demonstrates visual inspiration, not usability, accessibility, conversion, technical feasibility or a complete end-to-end journey. Many entries are isolated presentation frames. Any candidate pattern must be traced to its original designer or live product where possible and tested in Here’s Health’s real flow.

### Collections relevant to Here’s Health

- [Mobile app](https://collectui.com/designs/mobile-app-ui-design-inspiration)
- [Navigation](https://collectui.com/designs/navigation-ui-design-inspiration)
- [E-commerce](https://collectui.com/designs/e-commerce-ui-design-inspiration)
- [Checkout](https://collectui.com/designs/checkout-ui-design-inspiration)
- [Onboarding](https://collectui.com/designs/onboarding-ui-design-inspiration)
- [User profile](https://collectui.com/designs/user-profile-ui-design-inspiration)
- [Notifications](https://collectui.com/designs/notification-ui-design-inspiration)
- [Calendar](https://collectui.com/designs/calendar-ui-design-inspiration)
- [Error states](https://collectui.com/designs/error-state-ui-design-inspiration)

### How to use it without creating design drift

1. Search by the **job** a Here’s Health screen must perform, not by fashionable visual style.
2. Shortlist one mechanism at a time: navigation location, modifier selection, pickup time, basket handoff, booking date, empty state or notification grouping.
3. Record the original creator/source, the user problem solved, accessibility risks and the exact Here’s Health adaptation.
4. Compare the candidate against the accepted current screen at matching iPhone and Android widths.
5. Reject any pattern that blurs the Café/Square and Shop/Shopify boundary, invents an unsupported status, or materially changes the owner-approved identity.
6. Implement only through a bounded preview, then require real-flow and accessibility evidence before adoption.

The CollectUI site itself offers one modest transferable mechanism: **search + category + small descriptive tags make a visually dense library scannable**. A restrained analogue could help Here’s Health users scan favourites, prior orders or offers, but it should not become a desktop-like category rail on mobile.

## Connected vault notes

- [[companies/heres-health]] — client and brand context
- [[project_state/heres-health-app]] — live delivery state
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]] — controlling commerce and product-boundary decision
- [[context/product-motion-video-design-standard]] — reusable motion principles
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]] — product direction
- [[context/index]] — canonical context entry point

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[companies/heres-health]]
- [[context/index]]
- [[context/product-motion-video-design-standard]]
- [[decisions/2026-08-13-heres-health-whole-brand-platform-with-separate-commerce]]
- [[project_state/heres-health-app]]

