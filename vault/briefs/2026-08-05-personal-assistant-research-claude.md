---
title: Personal assistant product research - Claude
status: research
created: 2026-08-05
source: Claude (Opus 5) + cited sources
related:
  - briefs/2026-08-05-managed-agent-consumer-wedge
  - briefs/2026-08-05-mainstream-ireland-consumer-agent-experience
  - briefs/2026-08-05-personal-assistant-research-charter
---

# Personal assistant product research - Claude

**Workstream 1 of 7: Platform, channel and pairing feasibility**
Run against master research prompt v2. Six other workstreams remain outstanding.
All URLs accessed 2026-08-05.

---

## A. Executive verdict

**The single most decision-changing finding.** The charter's signature moment, "your computer on the move", was shipped by two of the three companies it names as competitors before the charter was written. Anthropic released Dispatch on 17 March 2026 and desktop computer use on 23 March 2026, letting a person assign a task from an iPhone and have Claude execute it on their Mac. Google shipped Gemini Spark on macOS on 1 July 2026 with a phone-to-Mac remote flow reached through Add > Computer. The mechanism is no longer differentiating. What remains open is the audience: both products are aimed at paying power users, both require the desktop to stay awake, both are explicitly unreliable at concrete actions, and neither is designed for a person who does not know what an agent is.

**What this workstream removes from the programme.**

1. **Section 7 of the charter (messaging and channel strategy) collapses to a paragraph.** Both external messaging routes are closed by policy, not by engineering difficulty. WhatsApp Business Platform prohibits general-purpose AI assistants as of 15 January 2026. Apple Messages for Business is brand-owner-only, requires an approved Messaging Service Provider, requires Apple to approve the use case, is customer-initiated, and requires access to a human agent. There is no compliant route for a consumer personal assistant on either. The native app is not the preferred surface. It is the only surface.
2. **The AirPods pairing analogy does not survive macOS.** Full Disk Access cannot be granted from an in-app prompt at all. The user must open System Settings and toggle it manually. Any design that assumes a tap-to-approve flow for broad file access is designing something macOS will not permit.
3. **"Users never see model names" collides with App Store guideline 5.1.2(i)**, updated 13 November 2025, which requires clear disclosure and explicit permission before sharing personal data with third-party AI. Providers must be named somewhere the user can see before consent.

**What it adds.** A real, time-boxed and geographically specific opening. Apple shipped Siri AI at WWDC on 8 June 2026 with personal context, onscreen awareness and cross-app actions, then announced the same week that it cannot ship it on iOS 27 and iPadOS 27 in the EU because of the Digital Markets Act, with no timeline. EU users get it on Mac and Vision Pro but not on iPhone or iPad. For an Ireland-based product aimed at EU consumers, the system-level competitor on the primary device is absent for an unknown period. The second-order effect matters more: the DMA interpretation Apple is objecting to would require it to open the same device-level access to third-party assistants. Either the window stays open, or it closes and third-party assistants gain capabilities on EU iPhones that they have nowhere else. Both branches favour an EU-domiciled challenger. Neither is under your control, so this is a reason to move, not a moat.

**What should not be built, in priority order.**

1. Any WhatsApp or iMessage route. Not "later", not "investigate". Policy-closed.
2. Any flow that requests Full Disk Access.
3. Any autonomous external action before approval and injection defences are tested.
4. A general-purpose chat surface. The one thing that is definitely commoditised.
5. Android-first anything, until the EU iOS gap is tested. The gap is iPhone-shaped.

**Hardest product risk.** Not pairing, not onboarding, not design. It is that the product's core architecture is the exact shape the security literature identifies as unfixable: an agent with access to private data, exposure to untrusted content, and the ability to communicate externally. OpenAI publicly acknowledged on 13 February 2026, when launching Lockdown Mode, that prompt injection in AI browsers may never be fully solved. The approval-first design in the charter is therefore not a trust nicety. It is the primary security control, and it should be specified and tested as one.

**Confidence: high** on channel closure and the Siri AI EU position, which rest on primary policy and vendor announcements. **Medium** on the competitive read of Dispatch and Gemini Spark, which rests on vendor documentation plus secondary hands-on reporting rather than my own observation. **Low** on how long the EU gap persists.

---

## B. Kill-check results

| Assumption | Verdict | Source | Consequence |
|---|---|---|---|
| WhatsApp is a viable future channel for this assistant | **FALSE** | [WhatsApp Business Solution Terms change, reported 18 Oct 2025](https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/); [policy explainer, 27 May 2026](https://www.alibabacloud.com/help/en/chatapp/use-cases/whatsapp-ai-policy-2026-guide) | Remove from roadmap entirely |
| Apple Messages for Business is a viable future channel | **FALSE** | [Apple Messages for Business policies](https://register.apple.com/resources/messages/messaging-documentation/policies); [MSP compliance summary](https://www.infobip.com/docs/apple-messages-for-business/compliance-guidelines) | Remove from roadmap entirely |
| "Computer on the move" is an unclaimed differentiator | **FALSE** | [Anthropic, Dispatch and computer use, 23 Mar 2026](https://claude.com/blog/dispatch-and-computer-use); [TechCrunch, Gemini Spark on Mac, 1 Jul 2026](https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/) | Differentiate on audience and trust, not mechanism |
| Desktop pairing can feel like AirPods | **WEAKENED** | [TCC and Full Disk Access behaviour](https://lapcatsoftware.com/articles/FullDiskAccess.html); [macOS 26.4 TCC trace analysis, 8 Apr 2026](https://eclecticlight.co/2026/04/08/privacy-files-folders-or-full-disk-access/) | Achievable only with narrow, user-selected folder scopes |
| Model and provider choices can be fully hidden from users | **WEAKENED** | [Apple, updated App Review Guidelines, 13 Nov 2025](https://developer.apple.com/news/?id=ey6d8onl) | Disclosure required at consent; can stay out of the conversation surface |
| Apple's own assistant is the main competitive threat on iPhone in the EU | **FALSE for now** | [Apple Newsroom, Siri AI delayed in EU, 8 Jun 2026](https://www.apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/) | EU iPhone is the opening; act on a clock |
| Approval-first is primarily a trust and UX choice | **FALSE** | [OWASP Top 10 for Agentic Applications 2026 summary](https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/); [prompt injection survey, May 2026](https://www.vectra.ai/topics/prompt-injection) | Specify and test it as a security control |
| Accessibility is a legal gate for a solo-founder EU launch | **WEAKENED** | [DLA Piper on Irish Accessibility Regulations, Oct 2025](https://www.dlapiper.com/en-us/insights/publications/2025/10/navigating-the-irish-accessibility-regulations); [CCPC microenterprise guidelines](https://www.ccpc.ie/business/enforcement/accessibility/european-accessibility-act-guidelines-for-microenterprises/) | Microenterprise service exemption likely applies at alpha and lapses on growth. Not legal advice; verify with an Irish solicitor |

---

## C. Findings

### C1. The messaging channels are closed, and the reasons are structural

Meta added an AI-provider clause to the WhatsApp Business Solution Terms in October 2025. It prohibits providers of large language models, generative AI platforms and general-purpose AI assistants from using the Business Solution where that technology is the primary rather than incidental functionality, with Meta as sole judge of what counts. The rule applied to new API registrations from 15 October 2025 and to everyone from 15 January 2026. Reporting at the time named ChatGPT, Perplexity, Luzia and Poke as products that had to leave. Structured business automation for support, bookings, order tracking and notifications remains permitted. A personal assistant is squarely the banned category, and the discretion clause means a workaround framed as a "booking assistant" is a suspension risk rather than a strategy.

Apple Messages for Business fails on more axes. Registration is limited to official brand owners through Apple Business Register, requires selecting an approved Messaging Service Provider from Apple's list, and requires Apple to test and approve the use case before going live. It is customer-initiated: a business cannot open a conversation, and if the user deletes the thread the business cannot reach them again until they message first. Business Updates, added in September 2024, allow proactive messages only from Apple-authorised templates for a narrow set of use cases such as order updates and appointment reminders, with opt-in. Most decisively for this product, the channel policy requires access to a live agent during business hours and states that a business <cite>must not provide a limited or bot-only solution</cite>. An assistant with no humans behind it is non-compliant by construction.

The charter was right to say "do not treat iMessage as a generic programmable phone-number channel". The finding is stronger than that: there is no compliant Apple messaging route for this product at any scale, and there will not be one unless Apple changes the programme's purpose.

**What follows.** Native app plus push notifications plus Live Activities is the entire channel strategy for alpha and for the foreseeable roadmap. Budget the effort saved on bridges into the app's conversation quality, since it is now carrying the whole load.

### C2. The signature moment already ships, twice

Anthropic's Dispatch launched 17 March 2026 and computer use on macOS on 23 March 2026, both as research previews for Pro and Max subscribers. The design ordering is instructive and worth copying: Claude reaches for a direct connector first, then browser access, and only falls back to driving the screen. Anthropic asks permission per app and disables sensitive apps by default. Cowork lost the research-preview label on 9 April 2026 and extended to Windows.

Google shipped Gemini Spark on macOS on 1 July 2026, adding local file access to what had been a cloud assistant, with a phone-to-Mac remote path: keep the Mac app running, sign into the same Google account on both devices, connect over the same Wi-Fi or paired Bluetooth, then choose Add > Computer on the phone.

The reported limitations are the opening, and they are consistent across independent hands-on accounts:

| Limitation | Consequence for a challenger |
|---|---|
| Desktop must be awake and running | Whoever solves the asleep-device state well wins the moment that matters most |
| Search and synthesis reliable; concrete actions unstable | Narrow scope beats broad capability |
| Noticeable latency before execution starts | Progress honesty is a feature, not a consolation |
| Paid tiers only, developer-adjacent framing | Mainstream and free-first entry is unoccupied |
| macOS first, Windows later | Windows is underserved |
| Screen-driving is slower than direct integration | A file-retrieval product that never drives the screen can be faster and safer |

**What follows.** Stop describing the product as "your computer on the move". That sentence now describes two shipped competitor features. The defensible version is narrower and more honest: *authorised retrieval of a specific file or answer from a named device, for people who will never install a developer tool*. Retrieval is a much smaller surface than computer use, which makes it both more reliable and far less exposed to injection.

### C3. macOS permissions break the AirPods analogy, and there is a way around it

Full Disk Access is the one privacy scope on macOS that an app cannot prompt for. The user must open System Settings, find the app and enable it. There is no in-app path. Any onboarding built around a single tap to grant broad file access is impossible as specified.

What does work: narrower TCC scopes such as the Documents, Desktop and Downloads folders do generate system prompts, and user-selected folders granted through an open panel work without any special entitlement. This is not a workaround, it is a better design. It maps cleanly onto the charter's own promise of narrow permissions in plain English, and it produces a consent moment the user actually understands, because they picked the folder.

**Rule for the design constitution: the product never requests Full Disk Access. If a task needs a folder, the user chooses that folder.**

### C4. Device states need copy before they need engineering

The charter asks for exact user-facing copy for each device state. Based on the failure modes reported for the shipped competitors, these are the states that will actually occur, with suggested copy. Marked: recommendation, not observed fact.

| State | Suggested copy |
|---|---|
| Connected and awake | "Your MacBook is on and I can reach it." |
| Asleep | "Your MacBook is asleep, so I can't get that right now. I'll fetch it the moment it wakes, or you can try a version saved to the cloud." |
| Offline | "Your MacBook has been offline since 4:10pm. Nothing is lost, I just can't reach it." |
| Permission revoked | "You turned off my access to Documents on 12 June. I'd need that back to find this." |
| Ambiguous match | "I found three files that could be it. Which one?" plus dates and folders, never file paths. |
| Local-only item | "This one lives only on your MacBook. Want me to send you a copy, or leave it there?" |
| Update required | "Your MacBook needs the newer helper app. Takes about a minute next time you're at it." |
| Task failed mid-way | "I got as far as opening the file, then stopped. Nothing was sent or changed." |

The last one carries the most weight. Reporting on the shipped competitors describes tasks that stall part-way through permission sequences. A user who cannot tell whether a half-finished task changed anything will not delegate a second time.

### C5. Explanations are not automatically trust-building

The charter assumes visible progress and explanation increase informed trust. The human-factors literature is more specific and partly contradicts this. Explanations can be read as a general signal of competence rather than evaluated on their content, which increases reliance including on wrong outputs. Explanations that reveal where and why the system might fail improve reliance decisions more than generic explanations of reasoning. Cognitive forcing functions, which require the person to engage before accepting, reduce overreliance where passive explanation does not. The International AI Safety Report 2026 records automation bias persisting with current AI tools and varying by task, interface and accountability.

**What follows, as interface rules.**

1. Progress display shows what was done and what was touched, not reasoning narration. Reasoning narration reads as competence and inflates trust.
2. Every approval card names the one thing most likely to be wrong. "I matched this to the Kilbarry proposal because of the filename. I have not opened it to check."
3. The forcing function sits at the consequential action, not at the explanation. For send, post, buy, book, delete and share, the person supplies the missing element rather than tapping Confirm.
4. Do not treat a high approval rate as a success metric. It is equally consistent with the person having stopped reading.

### C6. Notification permission is a one-shot asset

On iOS the system notification prompt can be shown once per install, and a denial is permanent until the user changes Settings. Since Android 13 the model is functionally the same for new installs. Vendor benchmark data, which is weak evidence and should be treated as directional only, consistently reports iOS opt-in in the 44 to 51 percent range, with priming screens before the system prompt associated with materially higher acceptance.

For this product the implication is sharper than the general advice, because notifications are not a marketing channel here. They are how completed work gets delivered. A user who declines has a broken product, not a quieter one.

**Rule: never trigger the system notification prompt before the first task has actually completed. The prime is the receipt for work already done, not a promise about work to come.**

### C7. Compliance obligations that shape the interface

**App Store guideline 5.1.2(i)**, updated 13 November 2025, requires clear disclosure of which third parties personal data is shared with, explicitly including third-party AI, and explicit permission before doing so. This is the first time Apple named AI providers as a regulated category. It does not require exposing model choice in the conversation, but it does require a named-provider consent screen and an accurate App Privacy label. Reporting through 2026 indicates label mismatches are a common rejection cause.

**Live Activities**, per the 8 June 2026 guidelines revision (4.5.3), may not be used for spam, phishing or unsolicited messages. Genuine task progress is exactly the intended use. The risk is drift toward engagement prompts.

**European Accessibility Act**, in force in Ireland since 28 June 2025 via S.I. 636/2023. Microenterprises, meaning fewer than 10 staff and turnover or balance sheet not exceeding EUR 2 million, are exempt from the accessibility requirements **for services**, though not for products they place on the market. Penalties run to EUR 5,000 summary and EUR 60,000 on indictment, with possible personal liability for company officers. I am not a lawyer and this is not legal advice: whether a consumer software subscription is a "service" in scope, and whether the microenterprise exemption applies to it, needs an Irish solicitor's view before you rely on it either way. Two things are true regardless. The exemption, if it applies, expires the moment you hire past nine people, so building accessibility in later is more expensive than building it in now. And WCAG 2.2 SC 2.5.8 sets 24 by 24 CSS pixels as a floor, well below Apple's 44pt and Material's 48dp, so meeting platform guidance already clears the standard.

**GDPR.** EDPB Opinion 28/2024, adopted 17 December 2024 at the Irish DPC's request, deals mainly with model training rather than assistant deployment, but its emphasis on data subjects' reasonable expectations is directly relevant to a personal context layer. A product built on narrow, user-chosen scopes with visible provenance is easier to defend under that test than one built on bulk ingestion. That is a legal argument for the architecture the charter already wants.

### C8. The security architecture is the product architecture

The pattern across every significant agentic incident in 2025 and 2026 is the same combination: an agent with access to private data, exposure to untrusted content, and a route to communicate externally. Published CVEs include Microsoft Copilot, GitHub Copilot, Cursor and three prompt injection vulnerabilities in Anthropic's Git MCP server in January 2026. OWASP's Top 10 for Agentic Applications 2026 catalogues goal hijacking, tool misuse and memory poisoning as distinct risks. Reported attack success rates against agentic systems are high and adaptive attacks bypass most recommended defences. OpenAI acknowledged in February 2026 that this may never be fully patched.

The product's stated design already contains the right controls. The gap is that they are framed as trust features rather than as the security architecture. Concretely:

- Approval-first is the containment boundary, so it must hold for every path to an external action, not just the ones the user initiated.
- Memory poisoning is the threat to the Personal Ground Zero layer. Anything the assistant writes to durable context after reading untrusted content needs provenance and a review path.
- Retrieval-only from a paired device is dramatically safer than computer use on that device, because it removes the action surface. This is another argument for the narrower product.
- Prefer direct integrations over screen driving, matching the ordering Anthropic uses.

---

## D. Evidence ledger

Ranked by how much each entry changes a decision. 18 entries.

**1. Can WhatsApp carry this assistant?**
Recommendation: remove WhatsApp from the roadmap permanently. Classification: observed fact. Why it matters: eliminates a workstream and a distribution assumption. Sources: https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/ (18 Oct 2025); https://www.alibabacloud.com/help/en/chatapp/use-cases/whatsapp-ai-policy-2026-guide (27 May 2026). Evidence quality: credible secondary reporting on primary terms; the terms themselves should be read directly before final sign-off. Limitation: Meta defines "general-purpose" at its sole discretion, so narrow business-scoped automation may remain possible in some future form. Segment: all. Interface rule: no WhatsApp entry point, no WhatsApp in marketing copy. Cheap test: read the current WhatsApp Business Solution Terms directly. Success metric: none, this is a removal. Failure threshold: Meta publishes a compliant assistant category. Phase: do not build.

**2. Can Apple Messages for Business carry this assistant?**
Recommendation: remove permanently. Classification: observed fact. Why it matters: same. Sources: https://register.apple.com/resources/messages/messaging-documentation/policies; https://www.infobip.com/docs/apple-messages-for-business/compliance-guidelines. Evidence quality: platform owner policy plus certified-provider documentation. Limitation: policy could change, and Business Updates has expanded once already. Segment: iOS users. Interface rule: none. Cheap test: none needed. Failure threshold: Apple opens the programme beyond brand-to-customer service. Phase: do not build.

**3. Is "computer on the move" differentiating?**
Recommendation: no. Reposition around authorised retrieval for non-technical users. Classification: observed fact plus design recommendation. Why it matters: this was the charter's central claim. Sources: https://claude.com/blog/dispatch-and-computer-use (23 Mar 2026); https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/ (1 Jul 2026). Evidence quality: first-party product documentation and credible secondary. Limitation: both are early and reportedly unreliable at concrete actions, so the category is contested rather than settled. Segment: all. Interface rule: product copy never claims the mechanism, only the outcome. Cheap test: install both and run the same five retrieval tasks; record success rate and time. Success metric: your retrieval success rate exceeds theirs on the same tasks by a wide margin. Failure threshold: it does not. Phase: alpha.

**4. Is the EU iPhone gap real and how long does it last?**
Recommendation: treat as a time-boxed opening; do not treat as a moat. Classification: observed fact with open hypothesis attached. Why it matters: determines urgency and geography. Source: https://www.apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/ (8 Jun 2026). Evidence quality: primary vendor announcement. Limitation: duration unknown; Apple states no timeline. Segment: EU iPhone users. Interface rule: none directly; it sets sequencing. Cheap test: monitor EC and Apple statements monthly. Success metric: alpha in EU users' hands before Siri AI arrives on EU iOS. Failure threshold: resolution announced with a near-term date. Phase: alpha sequencing.

**5. Can the desktop pairing flow feel like AirPods?**
Recommendation: yes, but only with user-selected folder scopes. Never request Full Disk Access. Classification: observed fact plus design recommendation. Why it matters: the pairing flow is the product's most-cited design promise. Sources: https://lapcatsoftware.com/articles/FullDiskAccess.html; https://eclecticlight.co/2026/04/08/privacy-files-folders-or-full-disk-access/ (8 Apr 2026, macOS 26.4). Evidence quality: credible technical secondary; verify against current Apple TCC documentation before implementation. Limitation: TCC behaviour changes between macOS releases. Segment: Mac owners. Interface rule: pairing ends with a folder picker, in the user's own words, not an entitlement request. Cheap test: prototype the flow and time it end to end with five non-technical people. Success metric: median under 90 seconds, zero visits to System Settings. Failure threshold: anyone needs System Settings. Phase: alpha.

**6. Is approval-first a UX feature or a security control?**
Recommendation: a security control. Specify, test and red-team it as one. Classification: evidence-backed inference. Why it matters: changes who owns it and how it is validated. Sources: https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/ (11 Jun 2026); https://www.vectra.ai/topics/prompt-injection. Evidence quality: standards-body summary plus credible secondary. Limitation: vendor-authored security content overstates solvability of its own product category. Segment: all. Interface rule: no external action path bypasses the approval gate, including ones triggered by content the assistant read. Cheap test: red-team with a poisoned document in a watched folder. Success metric: zero external actions taken without an approval card. Failure threshold: any. Phase: alpha, blocking.

**7. Does visible reasoning build trust?**
Recommendation: no. Show what was done and what is most likely wrong, not reasoning narration. Classification: peer-reviewed evidence-backed inference. Why it matters: reverses a stated charter assumption. Sources: https://arxiv.org/pdf/2605.28255 (survey of trust calibration and explanation effects); https://arxiv.org/pdf/2602.24176 (post-XAI review); https://arxiv.org/pdf/2602.21012 (International AI Safety Report 2026, automation bias section). Evidence quality: peer-reviewed and scholarly review. Limitation: most studies are decision-support tasks, not delegated action; transfer is an inference. Segment: all, strongest for low-confidence users. Interface rule: every approval card carries one named uncertainty. Cheap test: A/B reasoning narration against did/uncertain framing; measure catch rate on seeded errors. Success metric: higher error catch rate without lower completion. Failure threshold: users disengage from approvals. Phase: alpha.

**8. When should the notification permission be requested?**
Recommendation: after the first completed outcome, never before. Classification: design recommendation on weak quantitative evidence. Why it matters: notification denial breaks delivery, not just engagement. Sources: https://www.pushwoosh.com/blog/increase-push-notifications-opt-in/; https://vmobify.com/blog/push-notification-strategy (25 May 2026). Evidence quality: **weak** (vendor benchmark). Limitation: no independent verification; figures vary widely by source. Segment: all. Interface rule: soft-ask framed as the receipt for finished work. Cheap test: instrument soft-ask acceptance and system-prompt conversion separately. Success metric: system-prompt acceptance above 70 percent among users who completed a first task. Failure threshold: below 50 percent. Phase: alpha.

**9. Can model and provider identity stay hidden?**
Recommendation: hidden in conversation, disclosed at consent and in settings. Classification: observed fact. Why it matters: resolves an apparent conflict in the product thesis. Source: https://developer.apple.com/news/?id=ey6d8onl (13 Nov 2025). Evidence quality: platform owner policy. Limitation: enforcement interpretation is not yet clear from published cases. Segment: iOS. Interface rule: one plain-language provider disclosure screen before first cloud processing, plus a permanent settings entry. Cheap test: draft the screen and comprehension-test it with five people. Success metric: users can say what leaves the device and to whom. Failure threshold: they cannot. Phase: alpha, blocking for App Review.

**10. Does the EAA gate an alpha launch?**
Recommendation: probably not at solo-founder scale, but design to WCAG 2.2 AA anyway. Classification: open question requiring legal input. Why it matters: determines whether accessibility is a gate or a quality choice at alpha. Sources: https://www.dlapiper.com/en-us/insights/publications/2025/10/navigating-the-irish-accessibility-regulations; https://www.ccpc.ie/business/enforcement/accessibility/european-accessibility-act-guidelines-for-microenterprises/. Evidence quality: regulator guidance and legal commentary. Limitation: I am not a lawyer; classification of the product as service or product is unresolved. Segment: all, especially older and low-confidence users. Interface rule: platform-native touch targets, Dynamic Type support, reduced motion respected. Cheap test: one hour with an Irish solicitor. Success metric: written position on scope. Failure threshold: n/a. Phase: alpha for design, pre-hire for legal.

**11. What is the minimum touch target?**
Recommendation: follow Apple 44pt and Material 48dp, which exceed the standard. Classification: observed fact. Why it matters: removes a design debate. Source: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html via https://wcag22aa.org/new-criteria/target-size/ (21 Jun 2026). Evidence quality: standards body. Limitation: none material. Segment: motor impairment, older users. Interface rule: no interactive element below platform minimum. Cheap test: automated audit. Success metric: zero violations. Failure threshold: any in an approval or cancel control. Phase: alpha.

**12. Can Live Activities carry task progress?**
Recommendation: yes, for genuine in-flight work only. Classification: observed fact. Why it matters: it is the honest-progress surface the charter wants. Source: https://developer.apple.com/news/?id=a233fmpw (8 Jun 2026, guideline 4.5.3). Evidence quality: platform owner policy. Limitation: none material. Segment: iOS. Interface rule: a Live Activity exists only while a task is genuinely running, and ends when it ends. Cheap test: review against 4.5.3 before submission. Success metric: no rejection. Failure threshold: rejection. Phase: alpha.

**13. Which device state matters most?**
Recommendation: the asleep desktop. Solve it explicitly. Classification: evidence-backed inference. Why it matters: it is the named limitation of both shipped competitors. Sources: https://www.the-ai-comparator.com/en/blog/claude-dispatch-control-desktop-from-phone (18 Mar 2026); https://www.aiagentslibrary.com/blog/gemini-spark-mac/. Evidence quality: credible secondary hands-on. Limitation: not independently verified by me. Segment: all. Interface rule: honest unavailable-state copy plus queue-on-wake plus a cloud fallback where a synced copy exists. Cheap test: diary study logging how often the desktop is asleep when a request is made. Success metric: fewer than 20 percent of requests dead-end. Failure threshold: above 40 percent, which would make the whole moment unreliable. Phase: alpha.

**14. Retrieval or computer use?**
Recommendation: retrieval only at alpha. Classification: design recommendation. Why it matters: halves the reliability and security surface. Sources: as entries 3 and 6. Evidence quality: inference from competitor limitations plus security literature. Limitation: retrieval alone may be too thin to be worth paying for; that is the thing to test. Segment: all. Interface rule: the desktop companion reads and sends; it does not click. Cheap test: concierge trial where retrieval is the only capability offered. Success metric: unprompted repeat use in week two. Failure threshold: users ask for actions the product refuses, in more than half of sessions. Phase: alpha.

**15. Does the DMA outcome change the opportunity?**
Recommendation: track it as the single most important external variable. Classification: open hypothesis. Why it matters: one branch grants third-party assistants iOS device access in the EU. Source: https://www.apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/ (8 Jun 2026); Apple's account of the regulators' position should be read as an interested party's characterisation, not a neutral summary of the DMA. Evidence quality: primary but partisan. Limitation: the European Commission's own position was not located in this run. Segment: EU iOS. Interface rule: none. Cheap test: monitor EC DMA decisions. Success metric: n/a. Failure threshold: n/a. Phase: monitoring.

**16. Is Windows underserved?**
Recommendation: probably, but do not act on it yet. Classification: open hypothesis. Why it matters: affects platform sequencing. Sources: as entry 3. Evidence quality: credible secondary. Limitation: absence of a shipped competitor is not evidence of demand. Segment: Windows owners. Interface rule: none. Cheap test: include Windows users in interview recruitment and compare stated friction. Phase: post-alpha.

**17. What should the first successful task be?**
Recommendation: retrieving one named document from a paired computer, delivered into the conversation. Classification: design recommendation. Why it matters: defines time-to-first-value. Limitation: not evidence-backed; this is the charter's own hypothesis carried forward as a hypothesis. Segment: prosumers first. Interface rule: onboarding drives toward this one outcome and nothing else. Cheap test: prototype and measure. Success metric: median time from install to first delivered file under five minutes. Failure threshold: above fifteen. Phase: alpha.

**18. Is the memory layer a security surface?**
Recommendation: yes. Treat writes to durable context after reading untrusted content as privileged. Classification: evidence-backed inference. Why it matters: memory poisoning is a named agentic risk category. Source: https://nhimg.org/complete-guide-to-the-2026-owasp-top-10-risks-for-agentic-applications (31 May 2026). Evidence quality: standards-body derived secondary. Limitation: OWASP agentic list is new and its categories are still stabilising. Segment: all. Interface rule: every durable memory item carries its source, and items derived from documents the user did not author are marked. Cheap test: seed a document containing instructions and check whether anything is written to memory. Success metric: nothing is. Failure threshold: anything is. Phase: alpha.

---

## E. Unverified register

| Item | What would settle it | Materiality |
|---|---|---|
| Current text of the WhatsApp Business Solution Terms AI-provider clause | Read the terms directly at business.whatsapp.com | Low. Multiple independent sources agree on substance |
| Whether Apple has any programme, current or planned, for personal assistants in Messages | Direct enquiry to Apple Business Register | Low. Nothing suggests one exists |
| Whether a consumer software subscription is a "service" in scope of the Irish Accessibility Regulations | Irish solicitor | Medium. Changes whether accessibility is a legal gate |
| The European Commission's own account of the Siri AI DMA dispute | EC press material | Medium. I have only Apple's characterisation |
| Actual first-run pairing UX of Gemini Spark and Claude Dispatch, observed by hand | Install both, record the flows | **High.** My competitive read rests on documentation and third-party hands-on, not observation |
| Whether a sandboxed Mac App Store build can support the required folder access, or whether Developer ID distribution is necessary | Prototype both | **High.** Determines distribution, discovery and update strategy |
| Reliability of iOS background delivery for long-running tasks in poor connectivity | Instrumented prototype | Medium |
| Whether retrieval alone is worth paying for | Concierge trial | **High.** This is the commercial question the whole workstream defers |

---

## F. Disagreement with the charter

1. **"The defining moment is your computer on the move."** It was. It is now a shipped feature at two competitors. Keep the capability, drop the positioning.

2. **"WhatsApp and iMessage-style routes can be investigated."** No. They are closed by policy. Investigating them further spends budget on a settled question.

3. **"Users do not choose models, tools, providers."** Correct as an interface principle, incorrect as an absolute. App Review requires named-provider disclosure with explicit permission. The principle survives as: no provider decisions in the conversation, full provider disclosure at consent.

4. **"Pairing must feel like AirPods."** Achievable for the pairing handshake, not for broad file access, because macOS forbids the flow. The charter should say: pairing feels like AirPods, permission feels like choosing a folder.

5. **"Consequential actions are approval-first by default."** Too weak. "By default" implies a configurable setting. Given the injection evidence, approval on external action should be non-negotiable at alpha with no user-facing override, because the person cannot assess the risk they would be accepting.

6. **"It should show honest, rich progress for meaningful work."** Partly counterproductive as stated. Rich reasoning display increases reliance without increasing accuracy. Rich *state* display is right; rich *reasoning* display is not.

7. **The charter has no budget, no timeline and no definition of who runs the alpha.** Every "cheap test" in this ledger assumes a solo founder with limited hours. The programme cannot be prioritised properly until the constraint is written down.

---

## Connected vault notes

- [[briefs/2026-08-05-personal-assistant-research-charter]] - the charter this answers, with three of its premises now falsified
- [[briefs/2026-08-05-managed-agent-consumer-wedge]] - core opportunity, architecture and product principles
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]] - existing mainstream-user onboarding and trust research
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]] - technical feasibility and staged success gates

## Source index

Platform policy: Apple Messages for Business policies and MSP onboarding (register.apple.com); Apple App Review Guidelines updates 13 Nov 2025 and 8 Jun 2026 (developer.apple.com/news); WhatsApp Business Solution Terms AI-provider clause as reported Oct 2025.
Vendor product: Anthropic Dispatch and computer use, 23 Mar 2026 (claude.com/blog); Gemini Spark on macOS, 1 Jul 2026 (techcrunch.com); Apple Newsroom on Siri AI EU delay, 8 Jun 2026 (apple.com/newsroom).
Regulator and standards: CCPC microenterprise EAA guidelines; S.I. 636/2023; EDPB Opinion 28/2024 (edpb.europa.eu); WCAG 2.2 SC 2.5.8 (w3.org); OWASP Top 10 for Agentic Applications 2026.
Scholarly: International AI Safety Report 2026 (arXiv 2602.21012); post-XAI review (arXiv 2602.24176); trust calibration and delegation survey (arXiv 2605.28255); Wischnewski et al., CHI 2023 trust calibration survey.
Weak, labelled as such: push notification opt-in benchmarks (pushwoosh.com, vmobify.com); hands-on accounts of Dispatch and Gemini Spark.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-05-managed-agent-consumer-wedge]]
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]]
- [[briefs/2026-08-05-personal-assistant-research-charter]]
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
- [[context/index]]

