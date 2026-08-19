---
title: OpenHouse and OpenBook Design System
role: design-system
status: canonical
source: Sam-provided design-system archive
source_date: 2026-08-04
---

# OpenHouse and OpenBook Design System

This is the canonical design reference for future OpenHouse and OpenBook product interfaces, websites, presentations, prototypes and visual assets.

## Full source package

The complete source archive has been extracted to:

`vault/imports/design-systems/openhouse-openbook/`

Start with:

1. `README.md` for brand philosophy, content rules and surface-specific direction.
2. `colors_and_type.css` for exact tokens.
3. `ui_kits/openhouse/` for OpenHouse patterns.
4. `ui_kits/openbook-business/` for the OpenBook operator dashboard.
5. `ui_kits/openbook-consumer/` for the OpenBook consumer experience.
6. `assets/` for approved OpenHouse marks and lockups.
7. `preview/` for visual reference cards.

The package contains 107 files and 16,871,294 bytes of source material, including UI kits, preview cards, tokens, logos, marks and app icons.

## Shared design DNA

The quality bar is Apple, Stripe, Linear, Vercel and Notion. A surface that looks like generic AI-generated SaaS is wrong.

- Brand gold: `#D4AF37`.
- Gold gradient, used only for controlled brand moments: `#e8c547` to `#b88a18`.
- OpenBook near-black: `#080808`.
- OpenHouse primary text: `#111827`.
- Type: Inter for interface and body copy, Source Serif 4 for limited editorial accents, JetBrains Mono for numerics and code-like data.
- Icons: Lucide React only.
- Spacing: strict 4-point scale of 4, 8, 12, 16, 24, 32, 40, 48 and 64 pixels.
- Radii: 6, 10, 12, 14 and 18 pixels, with full pills only where semantically appropriate.
- Motion: 150, 250, 300 or 350 milliseconds using `cubic-bezier(0.16, 1, 0.3, 1)`.
- Accessibility floor: WCAG 2.1 AA, visible focus states, 44 by 44 pixel mobile touch targets, labelled inputs and reduced-motion support.

## Product-specific direction

### OpenHouse

- Warm, light, premium surfaces with restrained gold accents.
- Developer dashboards should feel capable of supporting a major residential development: information-dense, calm and never cluttered.
- Purchaser and homeowner surfaces should feel considered, trustworthy and easy to navigate.
- Standard cards use 12 or 18 pixel radii, soft card shadows and a restrained hover lift.
- Property imagery must be real, architectural and warm. Avoid generic stock photography and decorative visual noise.

### OpenBook business dashboard

- Dark mode by default.
- Linear, Stripe and Vercel visual language.
- Dense tables, tight rows, keyboard-friendly interaction and subtle gold accents.
- Use 10 pixel card radii, hairline borders and minimal shadow.
- This is an operator surface, not a consumer marketing screen.

### OpenBook consumer experience

- Native-feeling iOS liquid-glass direction.
- Glass cards, blurred backdrops, spring motion and mobile active scaling.
- Per-business primary colours are the one sanctioned exception to the shared black, gold and neutral palette.
- Consumer cards use 24 pixel radii and soft elevation.

## Content rules

- Voice is direct, confident and operator-grade.
- No exclamation marks in UI copy.
- No emoji in UI copy or as functional icons.
- No em dashes.
- Use sentence case for headings, buttons and menus, except proper brand names and genuine acronyms.
- Buttons use verbs such as `Create booking`, `Send invite` and `Save details`.
- Errors are calm and actionable.
- Address the person as `you`.
- Prefer numbers and specific outcomes over adjectives.

## Interaction requirements

Every interactive element must define:

- Hover state.
- Visible keyboard focus state with a gold ring.
- Active state, typically scale `0.98` on desktop and `0.93` to `0.95` on mobile.
- Disabled state at `opacity: 0.5` with no hover response.

Glass and blur are reserved for floating navigation, tab bars and the OpenBook consumer experience. They do not belong on dense dashboard tables.

## Forbidden patterns

- Any yellow or amber substitute for `#D4AF37`.
- Purple, indigo or blue AI-style gradients.
- Pastel or rainbow palettes.
- Generic stock photography.
- Decorative sparkle icons or AI badges.
- Emoji or Unicode glyphs as functional icons.
- Font Awesome, Heroicons or Material icons when Lucide is available.
- Arbitrary spacing, colours or type sizes outside the token system.
- Linear easing.
- Pure black shadows.
- Centre-aligned body-copy blocks.
- More than three typefaces on one surface.
- Missing hover, focus, active or disabled states.

## Source-of-truth and conflict rules

- Use the exact token values in `colors_and_type.css` rather than recreating them from memory.
- Copy established component patterns from the relevant UI kit before inventing a new pattern.
- Preserve approved product copy, claims and story when improving composition.
- Product facts in the design package are not automatically canonical. Current company and project-state notes override stale implementation, hosting or positioning statements.
- The product name is **OpenBook**, not OpenBook AI.
- OpenBook logo files in the package include explorations. Treat them as source material, not as an approved production logo, unless Sam explicitly selects one.
- OpenHouse visual work belongs in Sam's established Claude Design workspace when that workspace is the requested execution surface.

## Design-job load order

For every future OpenHouse or OpenBook design job:

1. Read this note.
2. Read the relevant company and project-state notes.
3. Open the package `README.md` and `colors_and_type.css`.
4. Inspect the UI kit for the exact target surface.
5. Reuse the real assets from `assets/`.
6. Verify accessibility, states, token adherence and forbidden-pattern compliance before presenting the work.

## Connected vault notes

- [[context/index]]
- [[context/model-pack]]
- [[companies/openhouse-ai]]
- [[companies/openbook]]
- [[project_state/oh]]
- [[project_state/ob]]
- [[briefs/openhouse-world-class-marketing-site-research-2026-07-23]]
- [[briefs/openhouse-fable-creative-direction-prompt]]

- [[imports/design-systems/openhouse-openbook/SKILL]] — shared signals: openhouse, openbook, design

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-fable-creative-direction-prompt]]
- [[briefs/openhouse-world-class-marketing-site-research-2026-07-23]]
- [[briefs/wiki-refiner-2026-08-05]]
- [[briefs/wiki-refiner-2026-08-06]]
- [[briefs/wiki-refiner-2026-08-07]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]
- [[briefs/wiki-refiner-2026-08-14]]
- [[briefs/wiki-refiner-2026-08-15]]
- [[briefs/wiki-refiner-2026-08-16]]
- [[briefs/wiki-refiner-2026-08-17]]
- [[briefs/wiki-refiner-2026-08-18]]
- [[companies/openbook]]
- [[companies/openhouse-ai]]
- [[context/index]]
- [[context/model-pack]]
- [[project_state/ob]]
- [[project_state/oh]]

