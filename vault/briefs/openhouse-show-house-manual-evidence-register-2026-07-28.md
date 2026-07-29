---
title: OpenHouse A1 show-house manual evidence register
company_id: openhouse-ai
date: 2026-07-28
status: manual-evidence-ingested
case_id: openhouse-a1-show-house-2026-07-28
---

# OpenHouse A1 show-house manual evidence register

Related walkthrough evidence: [[openhouse-show-house-walkthrough-evidence-2026-07-28]]

## Case-study framing

These documents establish candidate equipment families and manufacturer-defined behaviour. They do not, by themselves, prove the exact installed variants, settings, commissioning state, array size, measured efficiency or energy savings.

The show house is currently suitable for testing:

- equipment and document recognition;
- plain-English explanation;
- a living Home Record;
- system relationship mapping;
- handover completeness checks;
- safe homeowner checks;
- specific installer or developer questions.

It is not yet suitable for proving actual household efficiency because the show house is not a normally occupied home and no operating dataset has been supplied.

## Evidence language

Every OpenHouse answer should distinguish:

- **Documented fact:** stated in a supplied manufacturer document.
- **Installed fact:** verified by an equipment label, commissioning record or installation schedule.
- **Visible observation:** directly visible in supplied media.
- **Derived calculation:** calculated from verified inputs, with method shown.
- **Hypothesis:** plausible but unconfirmed.
- **Missing evidence:** required before a stronger conclusion.
- **Professional action:** requires a qualified installer, electrician, BER assessor or other competent person.

## Source integrity

### Ohme ePod quick setup

- File: `ePod quick setup guide v1.0.pdf`
- Pages: 1
- Size: 201,717 bytes
- SHA-256: `4db7c0627d476a64cf6a3c07694095cd6de0fb6e9e31e84f7345e978afbb1ea2`
- Supplied cache path: `/Users/samdonworth/.hermes/cache/documents/doc_bc6ccfedab41_ePod quick setup guide v1.0.pdf`

### Ohme ePod CE declaration

- File: `EN_Ohme ePod CE DoC v1.0.pdf`
- Pages: 1
- Size: 147,943 bytes
- SHA-256: `e4dd43543b5153cd6c892c72d843a95350b56e98a16c72478f42dd5a8bc47c7a`
- Supplied cache path: `/Users/samdonworth/.hermes/cache/documents/doc_553772e882a8_EN_Ohme ePod CE DoC v1.0.pdf`

### Daikin Altherma technical data

- File: `Daikin Altherma ERGA-EV Range Specifications.pdf`
- Pages: 33
- Size: 3,209,984 bytes
- SHA-256: `44c694d855dead8831ebb6656fe2056cd701ae7cb202fb94ce93b365ed042c4a`
- Document identifier: `EEDEN22`
- Supplied cache path: `/Users/samdonworth/.hermes/cache/documents/doc_1cc4edfa4955_Daikin Altherma ERGA-EV Range Specifications.pdf`

### AquaBox Classic Series specification

- File: `AquaBox Classic Series Specification.pdf`
- Pages: 2
- Size: 2,390,948 bytes
- SHA-256: `cf0d7855cd10c0441f039596939cff9c81c775bcfd15275b85f37d09bdae7315`
- Supplied cache path: `/Users/samdonworth/.hermes/cache/documents/doc_98f360e6dfe4_AquaBox Classic Series Specification.pdf`

### Amerisolar module specification

- File: `AS_7M108_HC_FULL_Black_Module_Specification_N_type_1722_1134_30mm.pdf`
- Pages: 2
- Size: 806,128 bytes
- SHA-256: `b1cc8b978d0fff06245d022c072ec3ede5e8c2fb361899d9e0afb31ac36da1aa`
- Supplied cache path: `/Users/samdonworth/.hermes/cache/documents/doc_cc595fc8ba9b_AS_7M108_HC_FULL_Black_Module_Specification_N_type_1722_1134_30mm.pdf`

## Equipment record 1: Ohme ePod EV charger

### Documented facts

- Product named in the declaration: Ohme ePod.
- Declared model number: `EP0-07EU-4G-BLSTD-01`.
- Manufacturer: Ohme Technologies Ltd.
- Manufacturer address in the declaration: Unit 74, Penrose Wharf, Penrose Quay, Cork, T23 HF51.
- Declaration dated 1 May 2023.
- The declaration references the EMC, Low Voltage, Radio Equipment, RoHS and WEEE directives and relevant EV charging, EMC, residual DC detection and connector standards.
- Commissioning can be performed by an authorised installer through the Ohme installer web app.
- The physical-button route applies only to new units that have not been commissioned.
- Maximum-current choices shown by the guide: 10 A, 16 A, 20 A, 25 A and 32 A.
- The accept-defaults path is 32 A maximum with load balancing disabled.
- Load-balancing supply values shown: 32 A, 40 A, 60 A, 80 A and 100 A.
- The guide distinguishes clamp-reading pass and fail states through amber and red LED states, with green used on successful exit or disabled-load-balancing paths.

### Not established

- That the physical show-house charger carries the exact declared model number.
- Its commissioned maximum current.
- Whether load balancing is enabled.
- Its selected load-balancing supply value.
- The clamp installation, reading or health.
- The electrical installation design, protective-device selection or charger circuit capacity.
- Any vehicle, account, tariff or charging schedule.

### Walkthrough observation

- The physical charger is not shown in either walkthrough clip.
- A dedicated consumer-unit circuit labelled `EV CHARGER` is visible. This supports the presence of an EV-charger circuit but does not identify the charger or its configuration.

### Capture required

- One contextual photograph of the installed charger and cable position.
- One close photograph of the external model/rating label.
- One photograph of the current LED state without pressing any buttons.
- Installation certificate or handover sheet, if available.
- An authorised, redacted homeowner-app screenshot only if it reveals useful user-facing settings without exposing account, vehicle, location or access information.

### Safety boundary

Do not enter installer mode, hold buttons, change the maximum current, disable or enable load balancing, open the unit or electrical enclosure, or infer wiring adequacy from a photograph. These are installer and electrician matters.

## Equipment record 2: Daikin Altherma low-temperature split heat-pump family

### Documented facts

- Product family: Daikin Altherma low-temperature split.
- Outdoor families covered: `ERGA-EV`, `ERGA-EVH` and `ERGA-EVH7`.
- Candidate detailed outdoor variants include `ERGA04EV`, `ERGA06EVH` and `ERGA08EVH7`, alongside `EAV3` and `EAV3A` ordering codes in later tables.
- Candidate integrated indoor-unit combinations include `EHVH04SU18E6V`, `EHVH04SU23E6V`, `EHVH08SU18E6V` and `EHVH08SU23E6V`.
- Refrigerant family stated: R-32 Bluevolution.
- Manufacturer states outdoor heat extraction down to minus 25°C and includes a WLAN cartridge.
- Heating ambient operation range in the technical table: minus 25°C to 25°C dry bulb.
- Nominal 4-series figures at the two declared test conditions:
  - heating capacity 4.30 kW and 4.60 kW;
  - electrical input 0.850 kW and 1.26 kW;
  - COP 5.10 and 3.65;
  - outdoor sound power 58 dB(A).
- Nominal 6-series figures at the two declared test conditions:
  - heating capacity 6.00 kW and 5.90 kW;
  - electrical input 1.24 kW and 1.69 kW;
  - COP 4.85 and 3.50;
  - outdoor sound power 60 dB(A).
- Nominal 8-series figures at the two declared test conditions:
  - heating capacity 7.50 kW and 7.80 kW;
  - electrical input 1.63 kW and 2.23 kW;
  - COP 4.60 and 3.50;
  - outdoor sound power 62 dB(A).
- The stated test conditions are 7°C/6°C outdoor dry-bulb/wet-bulb, with leaving-water temperatures of 35°C and 45°C respectively.

### Interpretation boundary

The COP, capacity, annual-energy and efficiency-class figures are laboratory or regulatory figures for specific product combinations and test conditions. They are not measurements of this show house and must not be presented as the home's current COP, consumption or savings.

### Walkthrough observation

- A floor-standing Daikin indoor unit is visibly installed in cabinetry beside the utility area.
- Its blue circular front control/display is illuminated, but no mode, temperature or error text is readable.
- An Onecta pairing QR is visible and must be redacted from public material.
- A white expansion vessel, copper/insulated pipework, valves and a gauge-like component are visible above and beside the unit.
- The exact model/rating plate and outdoor unit are not shown clearly enough to select a range variant.

### Not established

- Exact installed outdoor and indoor models.
- Nominal design output selected for the dwelling.
- Cylinder size, even though 180 L and 230 L integrated combinations appear in the range.
- Heat-loss calculation, design flow temperature, weather-compensation curve or bivalent settings.
- Emitter type and design, hydraulic layout, zoning or EPH relationship.
- Commissioning values, actual flow rate, temperatures, electrical input or COP.
- Whether the WLAN or Onecta functions are enabled.

### Capture required

- Contextual and rating-plate photographs of both outdoor and indoor Daikin units.
- User-facing controller screen and visible mode without changing settings.
- Hot-water cylinder or integrated-unit label.
- External photographs of visible pipework, pumps, valves, manifolds and zone labels.
- Heat-pump design and commissioning sheet, if available.
- Heat-loss or emitter-design record, if available.
- EPH model labels and each room-control location.

### Safety boundary

Do not open covers, enter installer menus, alter weather compensation, change maximum water temperatures, disable legionella protection, reset faults or diagnose refrigerant, hydraulic or electrical problems from media alone.

## Equipment record 3: AquaBox Classic clean-water storage and pressure system

### Classification correction

This document does not describe a domestic-hot-water cylinder. It describes a clean and potable-water storage and constant-pressure system with a submersible multistage pump and controller.

### Documented facts

- Product family: AquaBox Systems Classic Series.
- Purpose: domestic and commercial clean-water applications, storage of clean/potable water and reliable constant pressure.
- Advertised noise level: 45 dB at one metre.
- Pump family: ESPA Acuaria 07S.
- Controller functions described: start on minimum water request, dry-run protection, integrated check valve, pressure gauge, auto-reset and anti-seize.
- Pump mapping:
  - Acuaria 07S 3M for 300 L and 500 L tanks;
  - Acuaria 07S 4M for 725 L and 1,000 L tanks.
- Model variants:
  - `CSR300`, rectangular, 300 L;
  - `CSR500`, rectangular, 500 L;
  - `CSC500`, cylindrical, 500 L;
  - `CSC725`, cylindrical, 725 L;
  - `CPN1000`, rectangular, 1,000 L.
- The 300 L and 500 L rows state 0.6 to 3.9 m³/h, 4 to 33 m head, 3 bar, 0.37 kW, 0.5 HP, 220 to 240 V, single phase.
- The 725 L and 1,000 L rows state 0 to 4 m³/h, 2 to 43 m head, 4 bar, 0.55 kW, 0.75 HP, 220 to 240 V, single phase.
- Manufacturer asks for 500 mm pump-removal clearance for horizontal tanks and 750 mm for vertical tanks.
- Units and trays must be installed on a clean, even, sufficiently strong platform that supports the full water weight.

### Not established

- Exact model, capacity or pump variant.
- Current pressure, controller settings, water source, plumbing role or operating condition.
- Whether the installation platform and clearances comply.

### Walkthrough observation

- A blue rectangular AquaBox tank is visibly installed in a ground-floor plant/storage cupboard.
- The top-mounted controller is visibly labelled `AQUABOX SYSTEMS LTD.`.
- Blue and white pipework connects the tank area to a multi-branch valved manifold.
- The footage appears to reference an Acuaria 07S pump family, but exact pump and capacity text are not reliable enough to promote to installed facts.
- A serial label is visible and must be redacted from public material.

### Capture required

- Contextual photograph showing the AquaBox in relation to nearby plumbing.
- Tank and pump labels.
- Controller and pressure gauge at rest, without adjustments.
- Any water-system schematic or handover sheet.

### Safety boundary

Do not adjust pressure, force a pump cycle, isolate valves, remove covers or declare an installation compliant from photographs. Water quality and plumbing compliance require appropriate evidence and competence.

## Equipment record 4: Amerisolar AS-7M108-HC Black solar-module family

### Documented facts

- Manufacturer/brand identified in the document: Amerisolar, a registered trademark of Worldwide Energy and Manufacturing USA Co., Ltd.
- Product family: `AS-7M108-HC Black`.
- Power variants at standard test conditions: 420 W, 425 W, 430 W, 435 W and 440 W.
- Module efficiencies: 21.51%, 21.76%, 22.02%, 22.28% and 22.53% respectively.
- Cell type: monocrystalline N-type, 108 cells arranged 6 by 18.
- Module dimensions: 1,722 by 1,134 by 30 mm.
- Module weight: 20.5 kg.
- Junction box: IP68, three diodes.
- Connector: MC4 or MC4-compatible.
- Operating temperature: minus 40°C to 85°C.
- Temperature coefficients:
  - Pmax: minus 0.30% per °C;
  - Voc: minus 0.25% per °C;
  - Isc: plus 0.045% per °C.
- Maximum system voltage: 1,000 V DC or 1,500 V DC.
- Maximum series-fuse rating: 25 A.
- Certifications stated: IEC 61215, IEC 61730 and CE, alongside ISO management-system certifications.
- Claimed warranties: 20-year product warranty and 30-year linear power-output warranty.

### Not established

- Exact installed wattage variant.
- Number of installed panels.
- Total DC array capacity.
- Roof orientation, tilt, string layout, shading or mounting design.
- Inverter make, model or AC output.
- Generation, self-consumption, export or savings.
- That the physical modules are the same product described in the supplied sheet.

### Walkthrough observation

- A dedicated consumer-unit circuit labelled `SOLAR PV` is visible.
- The roof modules, inverter, generation meter and isolators are not shown in the supplied walkthrough clips.

### Capture required

- Ground-level photographs showing each roof plane and visible array layout. Do not climb onto the roof.
- PV installation schedule or quotation identifying panel count and wattage.
- Inverter context and rating-plate photographs.
- User-facing generation display, redacted as needed.
- Generation meter and visible isolator labels from outside enclosures.
- Commissioning and electrical certificates, if available.

### Safety boundary

Do not open the inverter, isolators, consumer unit or meters, touch DC cabling, enter inverter installer settings or infer electrical compliance from photographs.

## Current Home Record status

### Candidate systems with manufacturer evidence

- EV charging: Ohme ePod family.
- Space heating and domestic hot water: Daikin Altherma ERGA family with EHVH candidate indoor combinations.
- Clean-water storage/pressure: AquaBox Classic family.
- Solar generation: Amerisolar AS-7M108-HC Black family.

### Still missing

- Exact floor-plan verification, although the walkthrough now supports a provisional ground-floor and first-floor room map.
- Exact rating-plate photographs for every installed device.
- EPH controller and thermostat manual/model.
- Heat-pump controller user manual and commissioning report.
- Ventilation-system model and documentation.
- Exact solar panel schedule/count and inverter documentation.
- BER certificate, advisory report and relevant design inputs.
- Electrical, EV and PV commissioning certificates.
- Floor plans and system schematics.
- Actual bills, smart-meter HDF, heat-pump telemetry and solar-generation data.
- Occupancy, comfort and operating-schedule context.

## Questions OpenHouse can safely answer from this evidence

- What is this device family and what job does it perform?
- Which manual belongs to which system?
- What do the Ohme LED colours and commissioning branches mean?
- Why is the AquaBox not the hot-water cylinder?
- Which exact rating plate should be photographed to resolve a model ambiguity?
- What do COP and panel wattage mean, and why are they not the same as measured household performance?
- Which documents should have been included at handover?
- Which checks are homeowner-safe and which require an installer or electrician?
- What evidence is needed before calculating array capacity or evaluating heat-pump operation?

## Questions OpenHouse must not answer conclusively yet

- Is the heat pump correctly sized or commissioned?
- Is the home operating efficiently?
- Is the EV charger circuit or load balancing configured correctly?
- Is the PV installation generating what it should?
- Is the AquaBox pressure or platform compliant?
- How much money or energy will the household save?
- Is any photographed condition a fault?

## Next case-study gate

The structured walkthrough is now ingested. The next evidence should be the targeted rating-plate, control, exterior-plant, inverter, charger and ventilation photographs listed in [[openhouse-show-house-walkthrough-evidence-2026-07-28]]. OpenHouse should then replace each remaining candidate-system record with:

1. installed-model confirmation;
2. visible state;
3. linked manufacturer source;
4. safe plain-English explanation;
5. unresolved evidence request;
6. one useful next action;
7. explicit escalation boundary.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-estate-learning-and-energy-connection-architecture-2026-07-28]]
- [[briefs/openhouse-home-context-acquisition-confidence-and-onboarding-2026-07-28]]

