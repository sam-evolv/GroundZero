# OpenHouse & OpenBook — Design System

> **Index** · [colors_and_type.css](./colors_and_type.css) · [SKILL.md](./SKILL.md) · [assets/](./assets) · [preview/](./preview) · UI kits: [openhouse](./ui_kits/openhouse) · [openbook-business](./ui_kits/openbook-business) · [openbook-consumer](./ui_kits/openbook-consumer)


Two premium SaaS products under **OpenHouse AI Limited** (Cork, Ireland), founded by Sam Donworth. They share a single design DNA — black and brand gold, Inter + Source Serif 4, Apple-grade polish — but fork into distinct surfaces for different audiences.

The bar is **Apple, Stripe, Linear, Vercel, Notion**. Not "decent SaaS". If a screen could be confused for generic AI-generated UI, it is wrong.

---

## The two products

### OpenHouse AI — property-tech for residential developers
Digitises homeowner handover, aftercare, and the developer sales pipeline. Used by developers, Savills agents, solicitors, purchasers, and admins. Built on Next.js 16 / React 19 / Tailwind / Supabase / Vercel.

- **Developer dashboard** — unit pipelines, reservations, snag lists, analytics. Dense but never cluttered. The software a €500M development would use.
- **Purchaser portal** — `portal.openhouseai.ie`. A branded handover experience.
- **Savills agent portal** — pipeline-by-development, unit profiles.
- **iOS app** — property assistant, care requests, document access.
- **Admin console** — multi-tenant operations.

Aesthetic: warm gold accents on clean light surfaces.

### OpenBook — AI-first booking platform for Irish service businesses
Gyms, salons, barbers, physios, spas, driving schools. Businesses get a booking page at `openbook.ie/[slug]` in 15 minutes. Its defining USP: an MCP server at `mcp.openbook.ie` exposes businesses to ChatGPT, Claude and Gemini. Built on Next.js 14 / Vite / TS / Tailwind / Supabase / Netlify.

Two surfaces, shared tokens, **different visual languages**:

- **Business dashboard** — Linear/Stripe/Vercel aesthetic. Dark mode default. Dense data tables, tight rows, keyboard-friendly, subtle gold accents. For operators who live in the product.
- **Consumer app** — iOS 26 liquid-glass aesthetic. Glassy icons with per-business primary colours, springy animations, blurred backdrops, haptic-feel taps (`active:scale-[0.95]`). Native-feeling iOS in a browser.

---

## Sources

Everything was read directly from these sources. Links below for reference; readers may or may not have access.

| Source | Path / URL |
|---|---|
| OpenHouse monorepo | `github.com/sam-evolv/property-assistant` — `apps/unified-portal`, `apps/marketing` |
| OpenBook consumer app | `github.com/sam-evolv/OpenBook` — Vite + React + Framer Motion |
| OpenHouse marketing site | `github.com/sam-evolv/OpenHouse-MarketingSite` |
| Brand assets | uploaded logos in `uploads/` (copied to `assets/`) |
| Token source of truth | `apps/unified-portal/tailwind.config.ts` + `app/globals.css` |
| Production portal | `portal.openhouseai.ie` |
| Production booking | `openbook.ie` |

---

## Index

```
├── README.md                    — you are here
├── SKILL.md                     — Agent Skills manifest
├── colors_and_type.css          — all tokens as CSS variables
├── fonts/                       — (Google-hosted: Inter, Source Serif 4, JetBrains Mono)
├── assets/                      — logos, icons, marks
├── preview/                     — design-system cards (one per concept)
└── ui_kits/
    ├── openhouse/               — OpenHouse AI developer + purchaser portal
    ├── openbook-business/       — OpenBook dark dashboard
    └── openbook-consumer/       — OpenBook iOS liquid-glass app
```

---

## Content fundamentals

Voice is **direct, confident, operator-grade**. Never apologetic, never exclaim.

**Rules:**
- **No exclamation marks** in UI copy. Ever.
- **No em dashes** in generated copy — use commas or full stops.
- **No emoji in UI copy.** Emoji are not functional icons; Lucide is.
- **Headlines are specific and outcome-led.** `"Your booking page, live in 15 minutes"` — not `"Grow your business with us"`.
- **Buttons are verbs.** `"Create booking"`, `"Send invite"`, `"Grab deal"` — never `"Click here"` or `"Submit"`.
- **Errors are calm and actionable.** `"Payment method declined. Try another card."` — not `"Oops! Something went wrong."`
- **Second person.** We address the user as `"you"` — not `"users"`, not "the user".
- **Sentence case** for headings, buttons, menu items. Exception: brand names (`OpenBook`, `OpenHouse AI`) and acronym labels (`FLASH DEAL`, `VAT`).
- **Numbers win over adjectives.** `"48 units reserved"` beats `"most units reserved"`.

**Tone reference — right vs wrong:**

| Wrong | Right |
|---|---|
| "Oops! Let's try that again 🎉" | "Payment declined. Try another card." |
| "Click here to submit your details!" | "Save details" |
| "Amazing! Your booking is confirmed!" | "Booked. We sent the receipt to you." |
| "Super easy setup in minutes" | "Live in 15 minutes" |
| "AI-powered smart assistant" | "Ask anything about your home" |

---

## Visual foundations

### Colour
Black and gold, only. `#D4AF37` is the gold — **not** `#f5b800`, not amber, not yellow. Purple / blue / indigo gradients are forbidden (they are the AI-slop signature). The single exception: per-business `primary_colour` fields on OpenBook consumer glass icons. All other brand surfaces are black, gold, and neutrals.

Gold shows up as:
- **Solid fill** on primary CTAs and brand marks.
- **Gradient** (`#e8c547 → #b88a18`) for large filled marks — OpenBook consumer CTAs, iOS app icon, avatars.
- **20% tint** on active tab icons, badges, small accents.
- **Glow** (`shadow-gold-glow`) on hover for hero CTAs and AI buttons.

### Type
Inter throughout. Source Serif 4 is reserved for editorial accents — quotes, hero eyebrow copy, a single landing headline. Never on buttons, never in data tables. Headings get tight tracking (`-0.01em` to `-0.02em`). Body is `1rem / 1.6` with no tracking. Three typefaces max on any one surface (sans + serif + mono).

### Spacing
Strict 4-pt scale: **4, 8, 12, 16, 24, 32, 40, 48, 64**. No arbitrary values. Dense layouts mean `16` between rows, not `17`.

### Backgrounds
Predominantly **flat neutrals**. White (`#ffffff`) in light mode, near-black (`#0b0c0f` or `#080808`) in dark. No stock photography. No full-bleed photo heroes unless they are real product shots. No decorative patterns. Gradients are brand gold only, and only on small accents — never on full backgrounds.

### Animation
- **Durations**: 150 / 250 / 300 / 350 ms. Longer than 350 feels sluggish.
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` — the "premium" curve. Never linear.
- **Spring** (via Framer Motion) on consumer surfaces for taps. `{ stiffness: 300, damping: 25 }` default; `{ 400, 15 }` for bouncy.
- **Motion-safe**: all animations respect `prefers-reduced-motion`.

### States
Every clickable element has:
- **Hover** — slight darker fill or lift.
- **Focus-visible** — 2px gold ring, `offset-2`.
- **Active** — `scale(0.98)` on desktop, `scale(0.93–0.95)` on mobile (haptic-feel).
- **Disabled** — `opacity-50`, no hover response.

### Borders
Hairline, always. `#e5e7eb` light / `#1e2531` dark. On interactive cards, `gold-100` borders signal brand-surface. Never draw borders thicker than 1.5px except on dashed placeholder states.

### Shadows
Use the scale — `shadow-1 / 2 / 3` for elevation; `shadow-card / card-hover` for cards; `shadow-premium / premium-lg / gold-glow` for brand moments. Never `rgba(0,0,0,1)` — always softened.

### Radii
- `xs 6` — badges, small pills
- `sm 10` — inputs, dense buttons
- `premium 12` — standard card corners
- `md 14` — buttons (`rounded-lg`)
- `lg 18` — prominent cards, modals
- **Never** `rounded-none` on interactive elements.

### Transparency + blur
Reserved for two moments:
1. **Floating nav / tab bars** — `bg-surface/90 + backdrop-blur-xl`.
2. **OpenBook consumer glass cards** — `bg-white/90 dark:bg-neutral-900/90 + backdrop-blur-xl + border-white/20`. Never on dashboard data tables.

### Imagery
When present: warm, desaturated-slightly, no heavy grain, no b&w filters. Property shots feel considered and architectural. OpenBook business icons use per-business gradients (the one place colour expresses beyond gold). Placeholder: emoji in a gradient tile at `radius-squircle 20px`.

### Corner radii on cards
- OpenHouse portal cards: `rounded-premium (12px)` or `rounded-lg (18px)` with `shadow-card → shadow-card-hover` on hover + `translate-y(-2px)` lift.
- OpenBook business dashboard: tighter `rounded-sm (10px)` with hairline borders, no shadow — Linear aesthetic.
- OpenBook consumer: `rounded-card (24px)` with soft shadows.

---

## Iconography

**Lucide React only.** Not Heroicons, not FontAwesome, not Material. Default size `w-4 h-4` (16px), `text-neutral-400` for muted. Stroke weight is Lucide's default (2px).

**Never:**
- Emoji as functional icons (only allowed in demo / placeholder data on OpenBook consumer).
- Unicode glyphs as icons.
- Sparkle icons or "✨ AI" badges as decoration.
- Hand-rolled SVG when a Lucide name exists.

**Logo use:**
- `assets/openhouse-logo-horizontal.png` — horizontal lockup, gold mark + "OpenHouse Ai" wordmark. Default on light surfaces.
- `assets/openhouse-logo-stacked.png` — stacked lockup (mark above wordmark).
- `assets/openhouse-mark-gold.png` — mark only, gold, transparent bg. Use for favicons, small sizes.
- `assets/openhouse-app-icon.png` — iOS app icon (black squircle + gold mark).
- `assets/openhouse-mark-dark.png` — mark on dark square.

OpenBook has no dedicated logo yet — it is rendered typographically: `"Open" "Book " "AI"` where `AI` receives the gold gradient. See `ui_kits/openbook-consumer/Brand.jsx`.

**CDN link for Lucide** (used across UI kits): `https://unpkg.com/lucide-static@latest/font/lucide.css` for inline usage, or import from `lucide-react` in the real codebase.

---

## Forbidden — never

- `#f5b800` or any yellow-gold that isn't `#D4AF37`
- Purple / indigo / blue gradients
- Pastel palettes
- Rainbow accents
- Rounded-none on interactive elements
- Missing hover / focus-visible / active / disabled states
- Linear easing
- Pure black shadows (`rgba(0,0,0,1)`)
- Arbitrary hex values outside the token scale
- Generic stock photography
- Chat bubbles with "✨ AI" sparkles as decoration
- Centre-aligned body text blocks
- More than 3 typefaces on one surface
- Exclamation marks in UI copy
- Em dashes in generated copy
- Emoji as functional icons

---

## Accessibility — hard floor

WCAG 2.1 AA. 4.5:1 text contrast minimum. Visible focus states on every interactive element. 44×44px minimum touch targets on mobile. All inputs labelled. `motion-safe:` wrappers on animation. Dark mode is first-class, not an afterthought.

---

## When in doubt

> Would this ship on apple.com, stripe.com, linear.app or vercel.com? If no, it's not done.
>
> Less, but better.
