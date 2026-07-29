---
title: OpenHouse YC showhouse product-demo recording run sheet
date: 2026-07-29
company_id: openhouse-ai
status: ready-pending-founder-visual-approval
---

# OpenHouse YC showhouse product-demo recording run sheet

## Decision

Use the private Longview showhouse preview as the primary recording surface:

`https://property-assistant-aadesgooq-openhouseais-projects.vercel.app`

Use the permissioned 8 Longview Park showhouse test record behind that preview. Do not display or distribute its authenticated route, token, purchaser identifiers, billing identifiers or reusable credentials.

The preview contains the latest My Home implementation. No production code deployment occurred. A production-configured fixture data write was used earlier to attach the evidence-backed showhouse model and must not be described as “production was untouched.”

## Why this is the strongest demo

The route now shows one coherent OpenHouse workflow rather than a generic dashboard:

1. A developer-sourced record exists for an individual home.
2. The homeowner sees verified systems, historical evidence and missing evidence.
3. Each system separates what is known, unknown and useful to do next.
4. The homeowner can open the real document library or ask a property-specific question.
5. A problem can return to aftercare with the correct home and evidence context.

This directly supports the YC application wedge: handover and aftercare for homebuilders.

## Verified showhouse and preview state

As checked on 29 July 2026:

- The Longview showhouse test record is fully populated.
- The latest My Home preview passed authenticated phone and desktop audits.
- Heating, Solar PV and Water are interactive system controls.
- The selected-system inspector shows Known, Unknown and Do next.
- The Documents action opens the real Documents tab.
- Ask about this system opens the assistant with a property-specific question prefilled but not automatically sent.
- Historical supplier evidence is structurally separate from simulated model values.
- Historical supplier bills cover 185 days, 1,703 kWh imported, 385 kWh exported and €653.95 billed.
- Solar evidence is historical only. No live Solar telemetry is claimed.
- The document library contains 59 scoped documents, including floorplans, handover documents, warranty documents and specifications.
- Existing showhouse test issues contain synthetic or controlled issue evidence for aftercare demonstration.

## Claim discipline

Do not claim:

- 281 users, customers, occupied homes or completed handovers
- Longview is an independent paying customer
- live energy metering or live Solar generation
- supplier integration
- automated optimisation or diagnosis
- measured savings
- the assistant replaces a builder, engineer or surveyor
- every answer cites an exact document title
- the showhouse test issues are external homeowner traction

Do not expose:

- purchaser names other than the controlled showhouse identity
- email addresses or phone numbers
- account, meter, billing, payment, barcode or serial identifiers
- browser address bars containing authenticated routes or tokens
- another home's documents or aftercare records

## Final 70-second demo

Record the screen only. Narrate naturally. Remove loading waits without altering product results. No title sequence, slides or music.

### 0 to 8 seconds: establish the home record

**Visual**

- Begin on the My Home first screen.
- Show the Longview identity and Useful now summary briefly.

**Narration**

> This is OpenHouse running on our permissioned Longview showhouse test record. The developer has provisioned the information for this specific home instead of handing the buyer a static folder.

### 8 to 25 seconds: show system evidence

**Visual**

- Scroll to the Home Record navigator.
- Select Solar PV.
- Hold on Known, Unknown and Do next.

**Narration**

> The homeowner can see what is recorded about each system, what remains unverified and the next useful action. Here the bills prove historical export, while current generation and inverter details remain explicitly unknown.

### 25 to 36 seconds: open the real document workflow

**Visual**

- Press Documents from the selected system.
- Show the search and category interface.
- Briefly show the home-scoped document library without opening a sensitive file.

**Narration**

> The same home record connects directly to its handover documents, manuals, warranties, floorplans and specifications.

### 36 to 54 seconds: ask a property-specific question

**Visual**

- Return to My Home.
- Select Heating.
- Press Ask about this system.
- Show the prepared question, send it and cut the response wait.
- Hold on the grounded answer.

**Question**

`Explain how the heating system in my home works and what I can safely adjust.`

**Narration**

> A homeowner can ask against the record of this exact property. OpenHouse uses the installed-system and handover context rather than giving a generic answer.

**Gate**

Do not record this segment until the returned answer has been checked for factual accuracy, safe wording and source behaviour on the exact preview route.

### 54 to 65 seconds: close the aftercare loop

**Visual**

- Show Get help on the selected system.
- Then cut to one pre-reviewed showhouse test issue in the developer aftercare view.
- Show only the controlled image, home context and status.

**Narration**

> If the homeowner needs help, the question or photograph returns to aftercare with the correct home and system context instead of becoming another unstructured email.

### 65 to 70 seconds: close

**Visual**

- Return to the showhouse Home Record navigator.

**Narration**

> OpenHouse gives homebuilders one system to hand over each home and manage what happens next.

## Recording preparation

- Use a fresh browser profile or prepared recording window.
- Hide bookmarks, personal tabs, notifications and password-manager UI.
- Crop the address bar from the recording.
- Set the viewport so text is readable at normal laptop playback size.
- Preload My Home, Documents, Assistant and the controlled developer aftercare view.
- Rehearse every click once without recording.
- Verify the assistant answer immediately before the final take.
- Use the current private preview, not an older Vercel host.

## Existing silent proof cut

The earlier silent cut remains at:

`/Users/samdonworth/GroundZero/vault/assets/yc/openhouse-yc-showhouse-demo-visual-cut-2026-07-29.mp4`

It is approximately 34 seconds and does not contain the current My Home actionability pass or narration. It is not the final submission asset.

## Final upload gate

- Target approximately 60 to 75 seconds unless the authenticated form states another limit.
- No private information is readable at any frame.
- Every shown interaction works on the exact preview.
- No unsupported product or traction claim appears in narration.
- Audio is clear and text is readable.
- Upload as an unlisted video.
- Verify the link while logged out.
- Add the verified URL to [[openhouse-yc-fall-2026-final-candidate-2026-07-29]].

## Connected vault notes

- [[openhouse-yc-fall-2026-final-candidate-2026-07-29]]
- [[openhouse-yc-fall-2026-question-audit-2026-07-29]]
- [[openhouse-yc-founder-video-recording-card-2026-07-29]]
- [[openhouse-yc-fall-2026-interview-evidence-pack-2026-07-29]]
