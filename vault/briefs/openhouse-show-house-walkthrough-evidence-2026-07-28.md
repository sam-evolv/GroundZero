---
title: OpenHouse A1 show-house walkthrough evidence report
company_id: openhouse-ai
date: 2026-07-28
status: walkthrough-ingested
case_id: openhouse-a1-show-house-2026-07-28
---

# OpenHouse A1 show-house walkthrough evidence report

Related records:

- [[openhouse-show-house-evidence-capture-2026-07-28]]
- [[openhouse-show-house-manual-evidence-register-2026-07-28]]

## Executive finding

The two walkthrough clips are sufficient to seed a useful living Home Record, reconstruct the principal room sequence, confirm the physical presence of the AquaBox and Daikin indoor equipment, identify visible heating distribution upstairs, locate multiple wall controls, and confirm labelled EV-charger and solar-PV circuits in the consumer unit.

They are not sufficient to identify every exact model, read control settings, establish the ground-floor heat-emitter design, identify the ventilation plant, calculate the PV array, or assess actual operating performance.

This is a strong first OpenHouse case because the assistant can already resolve meaningful handover confusion without diagnosing faults or promising savings.

## Source integrity

### Walkthrough part 1

- Source file: `video_f2362333954e.mov`
- Cache path: `/Users/samdonworth/.hermes/cache/videos/video_f2362333954e.mov`
- Duration: 96.67 seconds
- Resolution: 464 by 848 pixels
- Video: H.264, 30 frames per second
- Audio: AAC, no speech detected
- File size: 20,145,878 bytes
- SHA-256: `059fe044c27b9038d5053d4566d072e32ddd930422f55d70bb6a3b1e6c991cc1`

### Walkthrough part 2

- Source file: `video_72d7061a7c0a.mov`
- Cache path: `/Users/samdonworth/.hermes/cache/videos/video_72d7061a7c0a.mov`
- Duration: 52.57 seconds
- Resolution: 464 by 848 pixels
- Video: H.264, 30 frames per second
- Audio: AAC, no speech detected
- File size: 10,984,127 bytes
- SHA-256: `6a367d2aa0f770a2c3fcea211a889e45cf75a42c37c609a6be43adb7694ca81b`

## Evidence-quality limitation

The Telegram copy is portrait video at 464 by 848 pixels. It is suitable for room context and medium-sized equipment but not reliable OCR of small rating plates or controller displays. Exact labels require separate still photographs.

## Reconstructed room sequence

### Ground floor

Directly observed sequence:

1. Front entrance and hall.
2. Front living room.
3. Stair and internal hall.
4. Ground-floor WC.
5. Plant/storage cupboard containing a distributed pipe manifold and AquaBox equipment.
6. Open-plan kitchen and dining space.
7. Utility area with washing machine, tumble dryer and external door.
8. Consumer unit cupboard.
9. Cabinet containing the Daikin indoor unit and visible hydraulic components.

### First floor

Directly observed sequence:

1. Stair and upper landing.
2. Main bathroom.
3. Primary bedroom.
4. Ensuite shower room.
5. Further bedroom with blue/green decor.
6. Further bedroom with pink decor.

The walkthrough appears to show three bedrooms in total. This should be verified against the floor plan before being treated as a canonical property fact.

## Installed-system observations

## 1. AquaBox clean-water storage and pressure system

### Directly visible

- A blue rectangular AquaBox tank is physically installed in a ground-floor plant/storage cupboard.
- A controller mounted on top is labelled `AQUABOX SYSTEMS LTD.`.
- A manufacturer serial label is visible in the video and must be redacted from public material.
- The controller has two green indicator areas/buttons and one larger white control/button on its lower face. Their active state cannot be established confidently from the moving footage.
- A metal outlet/inlet assembly is visibly connected above the controller.
- Blue and white pipework connects the tank area to a wall-mounted distributed manifold.
- The wall manifold has multiple individually valved branches and red/blue markings.
- A powered wall connection with a red indicator is visible nearby.
- The tank label appears to reference an Acuaria 07S pump family, but the exact text and tank capacity are not reliable enough to record as installed facts.

### Manual relationship

The supplied AquaBox Classic document identifies the system as clean/potable-water storage and constant-pressure equipment. It is not the domestic-hot-water cylinder.

The manual maps an ESPA Acuaria 07S 3M pump to 300 L and 500 L tanks, and a 4M pump to 725 L and 1,000 L tanks. The video does not resolve which tank is installed.

### Not established

- Exact tank model or capacity.
- Exact pump variant.
- Current pressure or controller state.
- What each manifold branch serves.
- Water source, commissioning state, compliance or performance.

### Required stills

- Tank model/capacity label photographed square-on.
- Pump label.
- Controller face and label without serial-number publication.
- Whole manifold photographed sharply.
- Any branch labels or water schematic.

## 2. Daikin indoor heat-pump and hot-water equipment

### Directly visible

- A floor-standing Daikin indoor unit is physically installed in cabinetry adjacent to the utility area.
- The front has a black upper panel and white lower panel with a visible Daikin logo.
- A blue illuminated circular control/display is visible. No temperature, mode, error code or operating message is readable.
- An Onecta-app sticker and pairing QR code are visible. The QR code is sensitive and should be redacted from any shared case study.
- A white expansion vessel is mounted above the unit.
- Visible copper and insulated pipework, valves and hydraulic components run above and beside the unit.
- A small circular gauge-like component appears in the hydraulic area, but its scale and reading are not legible.
- A yellow warning label is attached to the unit.
- No external model/rating plate is readable in the video.

### Manual relationship

The supplied Daikin technical data covers the ERGA-EV, ERGA-EVH and ERGA-EVH7 outdoor families with candidate EHVH integrated indoor combinations. The installed indoor unit's exact EHVH code and cylinder capacity remain unresolved.

### Not established

- Exact indoor model or integrated-cylinder capacity.
- Exact outdoor model.
- Current space-heating or hot-water state.
- Flow temperature, pressure, schedule, weather-compensation settings or COP.
- Hydraulic topology, commissioning quality or fault state.

### Required stills

- Indoor-unit external rating plate without opening covers.
- Ordinary user display photographed square-on.
- Outdoor-unit context and rating plate.
- Hydraulic label or schematic, if present.
- Commissioning and design sheets.

## 3. Electrical consumer unit

### Directly visible

- A white Hager consumer unit is installed in the utility/cabinet area.
- The enclosure door opens to expose only the normal protective-device fronts and printed schedules, not internal conductors.
- Multiple rows of labelled protective devices are present.
- Bottom-row labels `MAIN ISOLATOR`, `EV CHARGER` and `SOLAR PV` are visibly legible.
- A doorbell-transformer label is visible near the upper right.
- Installer and warning labels are present on the inside of the door.

### Meaning

The labelled `EV CHARGER` and `SOLAR PV` circuits are direct evidence that those systems have dedicated consumer-unit positions. They do not prove the current physical charger model, PV array size, inverter model, electrical condition or operational status.

### Safety boundary

Do not remove the consumer-unit cover, touch protective devices for the case study, test circuits or infer compliance from the video. A sharp photograph of the printed circuit schedule is sufficient.

## 4. Heating emitters and controls

### Directly visible

- White wall-mounted panel radiators are visible on the first-floor landing and in multiple upstairs rooms.
- A white vertical radiator or towel radiator is visible in the ensuite.
- A small rectangular wall control is visible in the ground-floor living room above the sofa area.
- Another small rectangular wall control is visible near the primary-bedroom/landing doorway.
- Neither control's manufacturer, model, displayed temperature or state is readable.
- No conventional radiator is visible during the ground-floor living, kitchen or dining sweeps.

### Candidate interpretation

The controls are plausible room thermostats and may be EPH devices, but brand and function cannot be confirmed from their shape alone.

The absence of visible ground-floor radiators may be consistent with underfloor heating, but the video does not prove that. The manifold beside the AquaBox appears associated with distributed water pipework, but its exact function must not be assumed to be underfloor heating.

### Required stills

- Each wall control square-on at close range, showing brand, model, displayed temperature and mode without changing settings.
- Ground-floor heat-emitter or underfloor-heating documentation.
- Any heating-zone labels or manifold specifically identified as heating.
- Radiator valves and labels only where relevant.

## 5. Ventilation and life-safety devices

### Directly visible

- A circular ceiling terminal is visible in the ensuite above the shower area.
- Several small circular ceiling-mounted devices are visible in rooms and circulation areas.

### Candidate interpretation

The ensuite terminal is a strong candidate for an extract-ventilation terminal. Other ceiling devices may include smoke or heat alarms, but the footage is not detailed enough to classify each one.

### Not established

- MVHR, MEV or extract-fan system type.
- Ventilation-unit location or model.
- Airflow, commissioning, filter state or boost controls.
- Alarm types, interconnection or compliance.

### Required stills

- Ventilation plant, model label and ordinary user control.
- Representative supply and extract terminals.
- Bathroom/utility boost controls.
- Ventilation commissioning sheet.
- Life-safety-device labels only if needed for the Home Record.

## 6. Solar PV

### Directly visible

- A consumer-unit circuit is labelled `SOLAR PV`.

### Supplied-document relationship

The supplied Amerisolar AS-7M108-HC Black document covers 420 W to 440 W modules.

### Not observed in these clips

- Roof panels.
- Panel count or exact module wattage.
- Inverter.
- Generation meter or display.
- Battery.
- Isolators.
- Installation schedule or generation data.

No array-capacity or performance calculation is currently justified.

## 7. EV charging

### Directly visible

- A consumer-unit circuit is labelled `EV CHARGER`.

### Supplied-document relationship

The supplied Ohme documents cover the ePod family and an ePod declaration model, but the physical charger is not shown in the walkthrough.

### Not observed in these clips

- Physical charger.
- External charger rating label.
- LED state.
- Cable/connector.
- Load-management clamp or documentation.
- Commissioned current or load-balancing state.

Do not enter installer mode or change charger settings to collect evidence.

## 8. Building and room-level observations

### Directly visible

- Modern double-glazed-looking window and door units are present, but glazing construction and U-values cannot be determined visually.
- The kitchen/dining area has a glazed external opening and a separate external utility door.
- No obvious damage, fault or performance issue is established by the video.

### Not established

- Fabric specification, airtightness result, thermal bridging, insulation build-up or BER inputs.
- Floor area, dimensions or orientation.
- Heat-loss calculation.
- Actual room temperatures or comfort conditions.

## Privacy and publication controls

The source media contains:

- an AquaBox serial label;
- a Daikin Onecta pairing QR code;
- installer information inside the consumer-unit door;
- external street and neighbouring-home views;
- reflections that may reveal the camera operator.

Before any public case study, crop or redact serial numbers, QR codes, pairing information, precise location clues and unnecessary reflections. Keep original unredacted files permissioned and internal.

## What OpenHouse can now produce credibly

From the manuals and walkthrough, OpenHouse can already create:

- a room and plant-location map;
- a candidate installed-equipment register;
- a clear distinction between potable-water pressure equipment and domestic hot water;
- a plain-English explanation of the Daikin indoor unit and AquaBox roles;
- a list of installed-system evidence that is present and absent;
- safe questions for the installer/developer;
- a targeted handover-document audit;
- a minimum follow-up capture list;
- homeowner answers that show their evidence and uncertainty.

## What OpenHouse must not claim

- That the exact Daikin, AquaBox, Ohme or solar variants are confirmed where labels remain unreadable.
- That the ground floor definitely has underfloor heating.
- That any system is correctly or incorrectly commissioned.
- That the home is operating efficiently.
- That the PV system is producing an expected amount.
- That the EV charger is load balanced.
- That the visible consumer unit or plumbing is compliant.
- Any energy or cost saving.

## Minimum follow-up capture

A further broad walkthrough is unnecessary. The next evidence should be a short label-and-controls pass:

1. Living-room wall control close-up.
2. Upstairs wall control close-up.
3. Every other thermostat/controller in the house.
4. Daikin indoor-unit rating plate and user display.
5. Daikin outdoor unit and rating plate.
6. AquaBox tank capacity and pump labels.
7. AquaBox manifold and any branch labels.
8. Ohme charger context, external label and LED state.
9. PV inverter, external label and ordinary display.
10. Roof-array photograph from ground level plus panel schedule/count.
11. Ventilation unit, label and controller.
12. BER, heat-pump, PV, EV and ventilation commissioning records.

## Safest useful next action

Complete the label-and-controls pass without opening covers or changing settings. Once those stills are ingested, OpenHouse can convert the candidate equipment records into an installed Home Record and answer home-specific operating questions with evidence-linked confidence levels.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]
- [[decisions/openhouse-context-acquisition-lab-before-broad-dtc-build-2026-07-28]]

