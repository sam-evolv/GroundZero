---
title: Aire Business operating intelligence thesis
created: 2026-08-10
status: exploratory-opportunity
source: Sam voice reflection, 2026-08-10
companies:
  - personal-agent
  - openhouse-ai
  - evolv-renewables
---

# Aire Business operating intelligence thesis

## Founder insight

Sam identified a broader business architecture behind Aire and OpenHouse: a configurable intelligent assistant connected to an organisation's authorised structured and unstructured data, capable of answering questions, diagnosing issues, adapting its interface to the user and performing bounded actions.

This is not intended as a non-agentic FAQ wrapper. The useful system combines intelligence, persistent context, role-aware data access, controlled autonomy and an interface generated from the job being done.

## Core proposition

> Give a business one governed operating-intelligence layer that understands its customers, assets, employees, documents, workflows and performance, then expose the appropriate assistant and interface to each authorised person.

The same underlying platform can project three distinct experiences:

1. **Customer Aire**
   - Knows the authenticated customer's purchased product, configuration, installation, warranty, documents and prior support history.
   - Answers questions about that exact asset rather than a generic product category.
   - Collects error codes, photographs, readings and other diagnostic evidence.
   - Resolves education and configuration issues, or routes warranty, safety and field-service cases with a complete evidence pack.

2. **Workplace Aire**
   - Gives employees role-authorised access to policies, procedures, product knowledge, prior resolutions and operational systems.
   - Supports onboarding, training and just-in-time guidance.
   - Performs bounded internal workflows while preserving approvals and audit history.

3. **Management Aire**
   - Answers source-linked questions across authorised business data.
   - Surfaces trends, exceptions, costs, service performance and operational opportunities.
   - Builds or modifies role-specific dashboards through a constrained component system.
   - Can progress from analysis to approved action through the same agent runtime.

## Concrete equipment-support example

For an EV-charger installer or manufacturer:

```text
verified customer identity
→ exact charger model, installation and configuration
→ manuals, warranty and prior issues
→ telemetry or user-supplied diagnostic evidence
→ safe diagnosis and confidence boundary
→ guided fix, evidence request, escalation or work order
→ verified outcome written back to the asset history
```

Email alone is not sufficient authentication for private asset history. Use an account session, magic-link or OTP flow and enforce tenant, organisation, role and asset ownership on every resource lookup.

## Why this is technically feasible now

The required primitives already exist:

- Hermes provides the agent loop, tools, skills, approvals, sessions, memory, durable work and event stream.
- Aire provides a consumer-oriented Chat, Work and Profile shell over that runtime.
- OpenHouse already models a living Home Record, property-specific questions, documents, installed systems, issue history and developer/homeowner views.
- OpenHouse Care already defines a structured renewable-aftercare front door and evidence trail across installation records, monitoring evidence, warranties and escalation.
- The renewable-operations thesis already defines a multimodal evidence graph linking assets, faults, work orders, imagery, interventions and verified recovery.

These are vertical implementations of one recurring pattern: **identity → authorised entity graph → evidence → intelligence → action → verified outcome**.

## What is already commoditised

The generic layer is crowded:

- Intercom Fin markets a customer agent that uses customer history and context, connects to business systems, and takes actions through APIs, data connectors and MCP.
- Glean Assistant searches company knowledge, queries data warehouses and BI tools, produces cited insights and performs cross-system work for employees.
- Moveworks combines enterprise search, role-aware access and workflow automation across employee systems.
- Salesforce Agentforce supports employee and customer agents integrated with Salesforce data and workflows.
- Microsoft Copilot Studio and Power BI combine low-code agents, connectors, human controls and natural-language analytics; Microsoft explicitly warns that weak semantic models can produce generic, inaccurate or misleading output.
- ServiceNow already spans customer service, employee service, workflow automation, analytics and governed AI agents at enterprise scale.
- Zendesk combines AI service agents, ticketing, knowledge, actions, workforce management and analytics.
- ThoughtSpot Spotter positions itself as an enterprise analytics agent over governed business data.

Therefore, "chat with company documents," generic support automation, enterprise search and natural-language analytics are not sufficient differentiation.

Official product sources checked 2026-08-10:

- https://www.intercom.com/fin
- https://www.glean.com/product/assistant
- https://www.moveworks.com/us/en/platform
- https://www.salesforce.com/agentforce/
- https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio
- https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction
- https://www.servicenow.com/products/ai-agents.html
- https://www.zendesk.com/service/ai/ai-agents/
- https://www.thoughtspot.com/product/spotter

## Potential differentiation

Aire Business should not compete as another horizontal chatbot builder. The stronger position is:

- an authorised operating record for the business's real-world customers and assets;
- customer, employee and management experiences projected from the same source of truth;
- persistent entity and issue history rather than document retrieval alone;
- evidence-linked answers and explicit uncertainty;
- one action-and-verification loop across chat, dashboards, work and notifications;
- domain packs for property handover, installed equipment and renewable operations;
- premium role-specific interfaces that can adapt without exposing a technical agent builder;
- model and runtime independence through Hermes rather than dependence on one CRM or model vendor.

The moat is not the LLM or dashboard. It is the structured entity graph, permissions, connector mappings, accumulated issue-to-resolution history, domain evaluation sets and verified operational outcomes.

## Dynamic dashboard feasibility

The dashboard idea is feasible if implemented as **constrained generative UI**, not arbitrary model-written frontend code in production.

1. Define a governed semantic layer: approved entities, metrics, dimensions, relationships, query policies and freshness.
2. Provide a fixed library of tested components: metric, trend, table, timeline, map, issue queue, asset card, evidence viewer and approval card.
3. Let Aire produce a validated JSON layout and query plan using only those components and authorised metrics.
4. Validate every query server-side, enforce row-level access and display provenance/freshness.
5. Save role-specific views as versioned layouts with rollback.
6. Let users request changes conversationally, but preview material changes before saving shared dashboards.

This can feel intelligently generated while remaining secure, testable and visually coherent.

## Architecture

Hermes should remain the **bounded execution substrate**, not the enterprise system of record or tenant-policy authority. Aire should remain the human-facing Chat, Work, Profile, progress, approval and receipt shell. A separate Aire Business control plane must enforce tenancy, identity, data policy, workflow definitions, connector scope, budgets, audit and the semantic metrics layer before data or actions reach Hermes.

The current personal Hermes runtime is not, by itself, a sufficient hostile-content, enterprise-tenancy or SaaS authorisation boundary. It should sit behind workflow-scoped credentials, redacted events and deterministic policy enforcement.

### Shared platform layer

- multi-tenant identity, organisations, users, roles and asset/customer ownership;
- connector framework for databases, CRMs, ticketing, file stores, telemetry and approved APIs;
- canonical entity graph with source, confidence, timestamp and ownership on every claim;
- document and knowledge retrieval with citations;
- semantic metrics layer for governed analytics;
- Hermes runtime for reasoning, tools, skills, work, approvals and artifacts;
- event and audit ledger covering every read, recommendation, action and outcome;
- notification and escalation system tied to authoritative state;
- constrained interface schema shared by chat cards, work detail and dashboards.

### Vertical packs

Every vertical still needs its own:

- entity and asset model;
- connector mappings;
- terminology;
- diagnostic trees and safety boundaries;
- role policies;
- workflow actions;
- evaluation cases;
- compliance and liability controls;
- interface templates.

A shared platform does not make unrelated verticals reliable automatically.

## Portfolio fit

The strongest current interpretation is a product family, not an immediate collapse into one generic brand:

- **Aire Personal** proves the individual assistant, runtime wrapper, memory, work and adaptive interface.
- **Aire Business** begins as shared internal infrastructure and can become the enterprise product family only after repeated paid evidence.
- **OpenHouse** remains the property/developer vertical and first deep business proof, with its premium brand and property-specific data model.
- **OpenHouse Care** can validate installed-equipment aftercare with CSV/document onboarding before broad integrations.
- **Renewable Operations Intelligence** can later reuse the entity/evidence/action architecture for portfolio assets.

OpenHouse is therefore potentially the first vertical beachhead and reference implementation of Aire Business, not a redundant project. No merger or rebrand is decided by this note.

The clearest company structure is one product family with two currently distinct ventures: Aire Personal and OpenHouse. Aire Business earns a public identity only after at least two independent paid vertical deployments prove that the shared tenant, evidence, workflow, approval, dashboard and connector primitives materially reduce the cost and time of the second implementation. Until then, it is valuable internal architecture rather than a third public startup.

## Robotics and physical-world extension

Robotics, drones, 360 capture, thermal imaging and other field systems can become evidence-acquisition tools for the same operating graph:

```text
capture platform
→ geolocated/asset-linked observation
→ model-assisted defect or change detection
→ human or rules-based validation
→ prioritised issue/work order
→ repair or intervention
→ recapture and verified closure
```

Possible verticals include roads and potholes, solar farms, wind assets, invasive-species mapping, construction progress and underground/industrial inspection.

The shared software and evidence architecture is plausible. The sensors, models, standards, field operations and liability are vertical-specific. Initial validation should ingest partner-provided imagery or surveys rather than purchasing hardware or training broad proprietary models.

## Main risks and falsifiers

1. **Horizontal competition:** incumbents already own CRM, support and employee-data distribution.
2. **Integration burden:** every customer may require expensive schema mapping and data cleanup.
3. **Authorisation errors:** a single cross-customer or cross-role disclosure is unacceptable.
4. **Analytics trust:** natural-language queries are dangerous without governed metric definitions.
5. **Diagnostic liability:** product, electrical, construction and engineering advice need confidence and escalation boundaries.
6. **Services trap:** bespoke onboarding can consume the margin unless vertical packs repeat.
7. **Weak buyer urgency:** broad intelligence sounds valuable but may not command budget without one expensive repeated workflow.
8. **Generated-interface instability:** arbitrary UI generation would create security, accessibility and maintenance failures.

The thesis is weakened if three target companies cannot provide a repeated operational workflow, usable data export and a budget owner who will pay for a verified outcome.

## Best first proof

Do not begin by building a universal portal builder. Reuse an existing vertical and prove the complete loop.

### Candidate: installed-equipment aftercare

- One installer or developer.
- Up to 100 installed assets/homes.
- CSV and document upload only.
- Authenticated customer view.
- Exact asset record and approved knowledge.
- Evidence collection and triage.
- Staff escalation/work queue.
- Management view of issue types, resolution time and avoidable visits.
- Human approval for customer-facing recommendations during the pilot.

This single deployment would exercise customer, workplace and management Aire while testing whether onboarding can become repeatable.

### Success evidence

- one paying design partner;
- data imported and correctly asset-bound;
- no cross-customer access in adversarial tests;
- source-linked answer accuracy on a fixed evaluation set;
- fewer repeated contacts or avoidable call-outs;
- faster complete intake and resolution;
- at least one dashboard altered conversationally through constrained components;
- a second company whose schema fits the same vertical pack with materially less setup effort.

### Indicative delivery reality

These are architecture estimates, not delivery promises:

- A credible single-tenant demonstration with imported records, cited answers, a constrained dashboard and an approval-stopped workflow is plausible in roughly two to four weeks.
- A reliable design-partner deployment with production identity, tested tenant isolation, one or two live read-only connectors, provenance, governed metrics, approvals, observability and contractual data boundaries is more plausibly eight to sixteen weeks.
- A repeatable multi-tenant product with onboarding tooling, SSO/SCIM, connector mappings, tenant administration, workflow versioning, audit export and several successful customers in one vertical is likely a six-to-twelve-month product programme.

The fastest serious commercial proof remains OpenHouse's first independent paid scheme because the product, buyer context and source-data model already exist. A second paid asset-heavy deployment, such as owner-side renewable operations or installed-equipment aftercare, is the test that Aire Business is genuinely shared product rather than generic AI infrastructure.

## Founder-level verdict

**Feasible now, strategically credible and highly aligned with Sam's existing portfolio.**

The broad vision is a large company. The buildable company begins with one vertical pack and one operational loop, while deliberately retaining the shared platform architecture. This is not an instruction to abandon other projects or run only one project. It is a way to make the projects compound: Aire contributes the agent and interface, OpenHouse contributes the deep property/asset model and customer proof, and renewables/robotics contribute future physical evidence channels.

The decisive question is not whether an LLM can answer questions over business data. It can. The decisive question is whether Aire can connect identity, authoritative records, evidence, actions and verified outcomes more cleanly than incumbent systems for a repeated domain workflow.

## Connected vault notes

- [[companies/personal-agent]] — Aire Personal and runtime product
- [[companies/openhouse-ai]] — property/developer vertical and living Home Record
- [[briefs/2026-08-04-openhouse-care-installer-paid-validation]] — installed-equipment aftercare validation
- [[briefs/2026-08-04-renewable-operations-business-proposition]] — asset evidence and verified-recovery architecture
- [[context/business-opportunities-moc]] — portfolio opportunity map
- [[briefs/planet-satellite-opportunity]] — physical evidence acquisition bridge
- [[briefs/2026-08-10-physical-world-intelligence-founder-debrief]] — founder debrief expanding the physical-evidence layer into asset-centric, time-aware intelligence
- [[project_state/personal-agent]] — current Aire build state
- [[project_state/oh]] — current OpenHouse state
- [[project_state/renew]] — current renewables state

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-openhouse-care-installer-paid-validation]]
- [[briefs/2026-08-04-renewable-operations-business-proposition]]
- [[briefs/2026-08-10-lindy-teammate-source-audit-and-aire-lessons]]
- [[briefs/2026-08-10-physical-world-intelligence-founder-debrief]]
- [[briefs/planet-satellite-opportunity]]
- [[companies/openhouse-ai]]
- [[companies/personal-agent]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[project_state/oh]]
- [[project_state/personal-agent]]
- [[project_state/renew]]

