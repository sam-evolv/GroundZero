---
name: openhouse-openbook-design
description: Use this skill to generate well-branded interfaces and assets for OpenHouse AI and OpenBook, either for production or throwaway prototypes, mocks or slides. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping both products.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Two products share one DNA:

- **OpenHouse AI** — property-tech for residential developers. Light surfaces, warm gold accents, premium polish.
- **OpenBook** — AI-first booking platform. Two surfaces: **Business dashboard** (Linear/Stripe/Vercel dark aesthetic, dense, keyboard-first) and **Consumer app** (iOS 26 liquid-glass, springy, per-business primary colours).

**Shared rules (non-negotiable)**

- Brand gold is **#D4AF37**. Never #f5b800, never yellow, never amber.
- Near-black is **#080808** (OpenBook) or **#111827** (OpenHouse text).
- Typography: Inter (sans), Source Serif 4 (editorial accents), JetBrains Mono for numerics. Tight letter-spacing on headings (-0.01 to -0.02em). Body line-height 1.6.
- Icons: Lucide only. Never emoji, never FontAwesome.
- Radii: 10/12/14/18px. Never rounded-none on interactive elements.
- Motion: `cubic-bezier(0.16, 1, 0.3, 1)`, 150/250/300/350ms. Never linear.
- Every interactive element has hover, focus-visible, active:scale-[0.98], disabled:opacity-50.
- Voice: direct, confident, no fluff. No exclamation marks. No emoji in UI copy. No em dashes. Button labels are verbs.
- Forbidden: purple/blue gradient AI-slop, rainbow accents, pastel palettes, chat-bubble sparkle decorations, generic stock photography.

**What to read first**

1. `README.md` — full brand philosophy, content fundamentals, visual foundations, iconography
2. `colors_and_type.css` — every token as CSS variables; import it into any HTML you create
3. `ui_kits/<product>/` — pixel-perfect component recreations; copy components from here rather than inventing new ones
4. `assets/` — real logos (horizontal, stacked, gold mark, dark mark, app icon)

**If creating visual artifacts** (slides, mocks, throwaway prototypes), copy assets out of `assets/` and build static HTML files that link `colors_and_type.css`. Match the aesthetic of the target surface — warm light for OpenHouse, dark-dense for OpenBook Business, glassy iOS for OpenBook Consumer.

**If working on production code**, lift exact token values from `colors_and_type.css` and follow the component patterns in the UI kits.

**If the user invokes this skill without other guidance**, ask which product and surface they're designing for, what they want to build, then act as an expert designer with this brand.

The test: "Would this ship on apple.com, stripe.com, linear.app or vercel.com?" If no, it is not done. Less, but better.
