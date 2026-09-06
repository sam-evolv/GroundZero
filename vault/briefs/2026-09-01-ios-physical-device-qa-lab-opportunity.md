---
title: Dedicated iOS physical-device QA lab opportunity
purpose: Retain a selective-adoption path for real-iPhone regression testing when manual device QA becomes a bottleneck
source: Sam-shared X post and bounded repository audit, 2026-09-01
status: parked-for-later
---

# Dedicated iOS physical-device QA lab opportunity

## Trigger

Sam shared An Nayal's open-source iOS phone-farm post and asked whether it could be useful. After review, Sam directed that the option be kept “up your sleeve” and resurfaced only if it becomes useful.

Primary source: https://x.com/consumerxai/status/2094671763020132565
Repository: https://github.com/Git-Agni/prod-FARM-IOS-Core
Audited checkpoint: `bec43317c0b82942ddc5125320ac1ccbfd1c311b`

## Core thesis

The useful pattern is a dedicated, isolated real-iPhone acceptance lab for repeatable mobile regression evidence. It is not a Donworth Studio product feature and the bundled TikTok automation is not an adopted use case.

## Potential use

1. Run repeatable physical-device regression checks for Aire across dedicated test iPhones and iOS versions.
2. Give Donworth Studio a future evidence-backed “tested on real iPhones” delivery gate for committed mobile clients.
3. Support a future Here’s Health release candidate only if the client engagement resumes and physical-device QA becomes a real delivery need.
4. Complement Vera's rendered-device acceptance with scheduled screenshots, logs and execution history; never treat automation as a substitute for human acceptance on the real user surface.

## Audited constraints and risks

- At review, the repository was five days old, version `0.1.0-review.0`, with 33 commits, 75 stars, 19 forks, no tags/releases and a reported 29-test suite.
- The audited source declared GitHub-hosted CI, but no GitHub Actions workflow existed at that checkpoint.
- It requires macOS, full Xcode, Node 22+, PostgreSQL, Docker, Appium/XCUITest, signed WebDriverAgent, Developer Mode and an Apple Developer team.
- Device passcodes are stored unencrypted in local `devices.json` with mode `0600` and can be forwarded into trusted plugin subprocess environments.
- Plugins have full host filesystem, network, process, database and device authority; they are not sandboxed.
- Dashboard authentication is optional on loopback and requires a separately supplied authentication plugin before non-loopback binding.
- A lockfile-only dependency audit returned seven high-severity findings, including an `extract-zip` path-traversal advisory and issues in the direct WebdriverIO chain.
- The TikTok workflow is out of scope because of platform-policy, account and reputational risk.

## Resurface only when

- physical-iPhone testing across two or more dedicated devices or iOS versions becomes a repeated bottleneck;
- a committed client release requires reproducible real-device evidence;
- a spare erased test iPhone and an isolated Mac user or separate Mac are available;
- the exact candidate is re-audited at a pinned commit and high-severity dependency findings are resolved;
- loopback or authenticated private-network access, separate test Apple identity/team, no personal passcodes and no production accounts are enforced;
- a Donworth-owned QA plugin is preferable to the bundled TikTok automation.

## Current decision

Park for selective adoption. Do not install it on Sam's current active environment or connect Sam's personal iPhone. Do not make it a dependency of the current Donworth runtime/security work, Aire acceptance or the paused Here’s Health engagement.

## Connected vault notes

- [[context/business-opportunities-moc]] — cross-business opportunity map
- [[companies/personal-agent]] — Aire company context
- [[project_state/personal-agent]] — current mobile product and physical-device acceptance state
- [[project_state/donworth-studio]] — Donworth Studio delivery and runtime gates
- [[companies/heres-health]] — paused client context; future mobile QA only after recommitment
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — evidence and handoff standard

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/heres-health]]
- [[companies/personal-agent]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[project_state/donworth-studio]]
- [[project_state/personal-agent]]

