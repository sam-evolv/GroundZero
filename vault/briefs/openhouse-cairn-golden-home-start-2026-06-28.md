---
title: OpenHouse Cairn/Bayly Golden Home Start
created: 2026-06-28
status: started
company_id: openhouse-ai
tags:
  - OpenHouse
  - Property Assistant
  - Cairn Homes
  - Bayly
  - Golden Home
  - Product
  - Repository
---

# OpenHouse Cairn/Bayly Golden Home Start

## Source branch

Repository:

`/Users/samdonworth/GroundZero/repos/property-assistant`

Branch:

`claude/new-session-0jdf52`

Remote URL provided by Sam:

`https://github.com/sam-evolv/property-assistant/tree/claude/new-session-0jdf52`

## What was done safely

- Fetched and checked out `origin/claude/new-session-0jdf52`.
- Inspected the Cairn/Bayly implementation files.
- Did not run database migrations.
- Did not run seed scripts.
- Did not touch Supabase or production data.
- Did not read or print environment secrets.
- Ran local typecheck/build only.

## Key finding

This branch contains the actual Cairn/Bayly Golden Home work that matched the screenshots.

Important files:

| Area | File |
|---|---|
| Homeowner portal route | `apps/unified-portal/app/homes/[unitUid]/page.tsx` |
| New My Home tab | `apps/unified-portal/components/purchaser/PurchaserMyHomeTab.tsx` |
| Home energy API | `apps/unified-portal/app/api/purchaser/home-energy/route.ts` |
| Assistant chat UI | `apps/unified-portal/components/purchaser/PurchaserChatTab.tsx` |
| Multimodal/image issue route | `apps/unified-portal/app/api/assistant/chat/multimodal/route.ts` |
| OpenHouse agent prompt | `apps/unified-portal/lib/openhouse-agent/v1/prompt.ts` |
| Bayly document embedding script | `scripts/embed-bayly-sections.ts` |
| Cairn logo | `apps/unified-portal/public/cairn-logo.png` |
| Bayly logos | `apps/unified-portal/public/bayly-logo.png`, `apps/unified-portal/public/bayly-logo1.png` |
| Bayly docs | `apps/unified-portal/public/docs/34bayly-*.pdf` |

## Branch health issue found

`apps/unified-portal/app/api/chat/route.ts` was accidentally corrupted in the branch. It contained exactly:

```text
cat /tmp/chatroute.ts
```

That broke typecheck:

```text
app/api/chat/route.ts(1,1): error TS2304: Cannot find name 'cat'.
app/api/chat/route.ts(1,6): error TS2304: Cannot find name 'tmp'.
app/api/chat/route.ts(1,10): error TS2304: Cannot find name 'chatroute'.
```

Safe repair applied locally:

- Restored `apps/unified-portal/app/api/chat/route.ts` from `main`.
- Reran verification.

Verification after repair:

```bash
npm run typecheck
# PASS

npm run build
# PASS
```

Build caveat:

The build logs local Supabase env warnings for some statically generated auth pages:

```text
[AUTH] Failed to get session: either NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY env variables or supabaseUrl and supabaseKey are required
```

But the production build completes successfully. This matches the earlier main-branch behaviour in the local environment.

## What the Cairn/Bayly branch already has

### 1. My Home tab

`PurchaserMyHomeTab.tsx` adds a new homeowner-facing **My Home** surface.

It shows:

- home identity
- BER badge
- current month selector/display
- energy insight hero
- live simulated readings
- grid import total
- system cards for:
  - heat pump
  - ventilation/MVHR
  - EV charger
  - solar
- scheme comparison / anonymised benchmark language
- rate-window grid split
- recommendation cards
- local area mini-map
- demo-data disclaimer

Important copy currently present:

- `things to look at this month`
- `Ask why my electricity is high`
- `Your home's systems`
- `live from this home`
- `By rate window`
- `What would help`
- `Synthetic demo data, not a live meter feed`

### 2. Home energy data seam

`app/api/purchaser/home-energy/route.ts` returns only:

```ts
units.metadata.demo_home
```

This is a good safety boundary:

- validates purchaser token
- returns no other metadata
- fails quiet with `{ energy: null }`
- uses `Cache-Control: no-store`

This means the Cairn/Bayly demo is data-driven through the unit metadata, not hardcoded entirely in the component.

### 3. Assistant-to-My-Home bridge

`app/homes/[unitUid]/page.tsx` wires in:

- new `PurchaserMyHomeTab`
- active tab support
- pending question state
- `handleAskAssistant(question)` deep-links from My Home into Assistant

This lets buttons like `Ask why my electricity is high` prefill the assistant composer.

### 4. Image issue/multimodal route

`app/api/assistant/chat/multimodal/route.ts` is a serious foundation for the image issue flow.

It has:

- feature flag gating
- media auth
- cross-tenant checks
- placeholder media analysis
- housing reasoning v1 path
- OpenHouse agent v1 path
- issue report creation path when analysis/action warrants it
- anonymous analytics support
- document URL backfill for named docs

This supports the roadmap item: **Upload a photo of an issue**.

### 5. Agent prompt is aligned with the new OpenHouse thesis

`lib/openhouse-agent/v1/prompt.ts` now positions the assistant as a broad homeowner companion, not just RAG/search/customer support.

It explicitly says the assistant knows:

- specific house details
- rooms and dimensions
- fixtures/finishes
- installed systems
- recent energy readings
- available documents

It also gives clear behaviour for:

- defects
- photos
- issue reports
- safe uncertainty
- not over-logging normal new-build settlement

## Immediate product gaps to fix next

### Gap 1: My Home copy bug

Current copy:

```text
You are drawing on the day rate right now. Over half this month landed in the dearer windows, so the room is in shifting load to night.
```

Should become:

```text
You are drawing on the day rate right now. Over half this month landed in the dearer windows, so there is room to shift more load to night.
```

### Gap 2: Money / Comfort / Risk is implicit, not explicit

The My Home tab already contains the logic, but not the product language.

Add simple labels/cards:

- Money: EV charging/day-rate split, grid import, solar export
- Comfort: heat pump low-and-constant, MVHR running
- Risk: short-cycling, MVHR off/anomaly, possible warranty/device strain

### Gap 3: Live vs simulated wording is slightly risky

The UI uses words like `Live`, `right now`, and `Read from your meter and devices`, while the footer says `Synthetic demo data, not a live meter feed`.

For demo safety, either:

- keep the footer prominent enough, or
- adjust the copy to `Demo live view` / `Simulated right now` when `isDemo` is true.

### Gap 4: Bayly demo data source needs a safe read-only confirmation

The branch expects `units.metadata.demo_home` for the Bayly unit. Do not mutate it without explicit approval.

Need to inspect only if credentials/environment are explicitly made available and Sam approves querying the live DB.

### Gap 5: Assistant response quality still needs the canonical-question pass

Use the branch prompt and UI to test the 10 Golden Home questions:

1. What size is my living room?
2. Where is my stopcock?
3. What paint colour is in the kitchen?
4. What warranty covers my heat pump?
5. How do I reset the MVHR?
6. Can I drill into this wall?
7. Why is my electricity usage high?
8. How do I charge my EV more cheaply?
9. Is this crack/leak something to report?
10. Where are my fire safety documents?

Target answer format:

```text
Direct answer.
Specific home fact.
Source used.
Next action.
Linked document or button.
```

### Gap 6: Image issue flow needs visible entry point

The backend route exists, but the homepage/assistant landing should make it more obvious:

```text
Upload a photo of an issue
```

The interaction should remain cautious:

- not expert diagnosis
- issue intake and routing
- warranty relevance when grounded
- clear escalation only when issue report is actually created

## Recommended first implementation slice

### Slice 1: Make the existing Cairn/Bayly branch safe and demoable

Tasks:

1. Commit the `app/api/chat/route.ts` repair.
2. Fix the My Home copy bug.
3. Add explicit Money / Comfort / Risk labels to the existing recommendation/insight structure.
4. Make demo/live wording unambiguous when `isDemo` is true.
5. Add a visible assistant prompt/chip for `Upload a photo of an issue`.
6. Run `npm run typecheck`.
7. Run `npm run build`.
8. Do one browser QA pass on the Bayly homeowner route if a usable local token/demo URL is available.

### Slice 2: Golden Home answer QA

Tasks:

1. Test the 10 canonical questions.
2. Record outputs.
3. Tighten prompt/formatting/templates where answers are too generic.
4. Verify document URL backfill works for BER, floor plans, warranties, heat pump, ventilation and fire safety.

### Slice 3: Developer provisioning path

Tasks:

1. Identify how `metadata.demo_home` is created/updated.
2. Decide whether demo-home metadata becomes:
   - a temporary Bayly seed shape, or
   - a reusable `home_model` abstraction.
3. Add developer/admin tooling or a safe import path only after the demo is stable.

## Current local verification state

After the chat-route repair:

```bash
npm run typecheck
# passed

npm run build
# passed
```

Current branch has one staged local repair:

```text
M apps/unified-portal/app/api/chat/route.ts
```

No production data has been touched.

## 2026-06-28 continuation: Golden Home polish slice

Local product commit:

`ea7fb155 feat(homeowner): sharpen Cairn Golden Home demo`

Files changed:

- `apps/unified-portal/components/purchaser/PurchaserMyHomeTab.tsx`
- `apps/unified-portal/components/purchaser/PurchaserChatTab.tsx`

What changed:

- Fixed the visible My Home typo:
  - from: `so the room is in shifting load to night`
  - to: `so there is room to shift more load to night`
- Made demo/live wording safer for the Bayly synthetic energy view:
  - `Demo live view`
  - `Simulated right now`
  - `demo readings from this home model`
  - kept the explicit `not a live meter feed` language
- Added a dedicated `Money / Comfort / Risk` section to My Home:
  - Money: EV charging on the dear day rate
  - Comfort: heat pump low-and-constant running
  - Risk: short-cycling and ventilation downtime
- Changed `What would help` sublabel from `tap to do it` to `recommended actions`.
- Replaced generic assistant starter prompts with Golden Home prompts:
  - `What size is my living room?`
  - `Why is my electricity high?`
  - `What warranty covers my heat pump?`
  - `Upload a photo of an issue`
  - `Where are my fire safety documents?`
  - `How do I move EV charging to night?`
- Expanded the starter prompt grid so the six home-specific prompts can fit cleanly.

Verification:

```bash
npm run typecheck
# passed

npm run build
# passed
```

Build caveat remains the same local env warning about missing Supabase public env vars during static generation of auth/admin pages. The build completes successfully.

Safety:

- No database migrations.
- No seed scripts.
- No Supabase writes.
- No deployment.
- No push to GitHub.
- No production config changes.
- No secrets printed.

## 2026-06-28 continuation: energy intelligence pass

Local product commit pending at time of note update.

Files changed:

- `apps/unified-portal/lib/energy/home-energy-intelligence.ts`
- `apps/unified-portal/lib/house-context/loader.ts`
- `apps/unified-portal/lib/openhouse-agent/v1/prompt.ts`
- `apps/unified-portal/app/api/chat/route.ts`
- `docs/prompts/openhouse-assistant-v1.md`

What changed:

- Added a shared energy intelligence module that derives patterns from `units.metadata.demo_home`:
  - heat-pump COP vs design SPF
  - heat-pump excess kWh / excess percent
  - solar generated, exported, self-consumed and self-consumption percent
  - EV day-rate vs night-rate charging
  - night/day/peak grid-import split
  - day/peak exposure
  - Money / Comfort / Risk interpretation
  - next-best-actions for the homeowner
- Injected the derived `energy_intelligence` block into the OpenHouse Agent v1 HOUSE CONTEXT via `loadHouseContext`.
- Updated the v1 prompt so energy answers prefer the derived intelligence block for high-usage diagnosis, system patterns and next-best-actions.
- Switched legacy `/api/chat` energy answers to use the same shared intelligence module, keeping both runtime paths safe for the Golden Home demo.
- Synced `docs/prompts/openhouse-assistant-v1.md` with the live prompt.

Verification:

```bash
npx tsx apps/unified-portal/scripts/smoke/openhouse-agent-v1.smoke.ts
# passed

npm run typecheck
# passed

git diff --check
# passed

npm run build
# passed
```

Build caveat remains the same local env warning about missing Supabase public env vars during static generation of auth/admin pages. The build completes successfully.

Safety:

- No database migrations.
- No seed scripts.
- No Supabase writes.
- No production config changes.
- No secrets printed.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-07-12]]
- [[briefs/wiki-refiner-2026-07-13]]

