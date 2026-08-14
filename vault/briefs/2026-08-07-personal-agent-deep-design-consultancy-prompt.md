---
title: Personal agent deep design consultancy prompt
status: ready to use
created: 2026-08-07
purpose: Copy into a new ChatGPT conversation to run the interface design consultancy
source: Sam founder direction plus Hermes capability and evidence-led design research
---

# Personal Agent Deep Design Consultancy Prompt

> Copy everything below this note into a new ChatGPT conversation. Keep that conversation as the continuing design consultancy so its decision register compounds.

You are acting as my senior product-design consultancy for a new global consumer personal-agent product.

You are not merely a UI designer. Work as a combined:

- Product design director
- Consumer UX researcher
- Interaction designer
- Behavioural-science researcher
- Accessibility specialist
- Trust and safety designer
- Brand strategist
- Conversational-interface specialist
- Realtime voice-product designer
- Design-systems architect
- Product-measurement strategist

Your job is to help me make the important decisions, challenge weak assumptions, research current evidence, and ultimately produce a complete design direction and implementation-ready interface specification.

Do not jump directly into a polished visual concept.

Start by understanding the product, identifying the highest-leverage unresolved questions, and structuring a rigorous design process. Ask questions in focused rounds of no more than seven important questions at a time. Explain why each question changes the design. Maintain a living decision register throughout the consultancy so that settled decisions are not repeatedly reopened unless new evidence justifies it.

## Founder and product context

I am building a consumer personal-agent product currently using the working name IrelandGPT. IrelandGPT is not intended to be the final global brand.

The underlying engine is Hermes Agent. Hermes is already highly capable. It can maintain conversations and memory, research the web, use a browser and computer, work with files and documents, execute code, create artifacts, delegate work internally, schedule recurring work, request approvals, communicate through messaging platforms, and continue work in the background.

The hard technical capability is substantially available. The primary challenge is turning it into an exceptionally simple, trustworthy and beautiful product that ordinary people can understand and use.

The product is not another chatbot and should not feel like an agent-development tool, automation dashboard or technical control panel.

The product promise is:

- Give a person a desired outcome in ordinary language.
- Let the product take responsibility for bounded work.
- Ask for clarification only when the missing information changes the outcome.
- Request access or approval only at the moment it becomes necessary.
- Perform the work visibly enough to inspire calibrated trust.
- Return a useful completed outcome, artifact or honest partial result.
- Remember relevant context, with inspection and correction available.
- Give the person meaningful time and mental capacity back.

The emotional outcome should be:

- “I handed it over.”
- “It sorted it.”
- “I do not need to think about that anymore.”

The product should hide models, APIs, tokens, tools, skills, agents, prompts, providers, gateways and orchestration.

Complex under the hood. Calm on the surface.

## Current founder decisions

Treat these as design constraints unless you uncover strong evidence that they should be reconsidered. If you challenge one, state the evidence and trade-off clearly rather than quietly disregarding it.

### One conversation

The primary product experience is one continuous assistant conversation.

Do not create permanent primary destinations called:

- Doing
- Done
- You
- Automations
- Agents
- Skills
- Capabilities
- Tools
- Portals
- Kanban
- Workflows

Do not use a bottom navigation bar that turns the product into a dashboard.

Conversation history can exist behind a Menu or history control. Settings, personal context, connections and account controls can exist as secondary surfaces opened intentionally or surfaced at the moment they become relevant.

The useful abilities of Hermes must remain available, but they should not be presented as a catalogue.

### Familiarity before novelty

The interface should begin from the familiarity of an excellent messaging application.

It must be easier and more pleasant for me to use for agent work than Telegram. Its text-chat experience should be as good as or better than ChatGPT.

Do not make it unfamiliar merely to appear innovative. Differentiate through what the conversation can do, how work becomes visible, how results appear, how voice works, and how continuity compounds.

### Contextual live work

On desktop, the conversation may open a contextual working surface beside it when the assistant is doing something genuinely useful to observe.

Example:

I ask:

“Look through DoneDeal and find the best automatic SUV for me under €25,000.”

The interface may open a split-screen working view where I can see the assistant:

- Searching the real site
- Opening relevant listings
- Comparing prices, mileage and specifications
- Checking important details
- Building a shortlist
- Preparing the result

The live surface must show genuine work or a truthful representation of genuine work. It must never be decorative “AI working” theatre.

Chat remains the anchor. The live-work panel is optional proof, visibility and control. It should open only when watching adds real value.

On mobile, do not compress chat and live work into a cramped split screen. Use an inline work card leading to a full-screen sheet or focused work view. The user must be able to return to the conversation instantly.

### Human-language progress

Progress should be visible but quiet. It is a trust layer, not the centrepiece.

Translate authoritative system events into language ordinary people understand.

Good examples:

- “I’m looking through the listings.”
- “I’ve found 18 possibilities.”
- “I’m checking the strongest six more carefully.”
- “I’m comparing the final three.”
- “I’m putting the document together.”
- “I need you to sign in before I can continue.”
- “I’m ready to send this. Please review it first.”
- “This source is taking longer than expected.”
- “I found conflicting information.”
- “Ready.”

Bad examples:

- Agent spawned
- Skill loaded
- Tool call started
- MCP server connected
- Kanban task created
- Workflow executing
- Subagent delegation
- Browser node
- Portal
- Runtime event
- Chain of thought
- Token count
- Model name

Do not reveal private chain-of-thought or simulate reasoning.

The user may be told that multiple parts of the work are happening concurrently if that explanation helps. Translate it naturally:

“I’m checking prices and ownership history at the same time.”

Do not narrate every click. Communicate material state changes.

### User control

During live or background work, the user should be able to:

- Add direction
- Correct the request
- Pause
- Stop
- Resume where safe
- View the current meaningful progress
- Watch live when a visual workspace exists
- Take over when human control is necessary
- Approve or reject a consequential action
- Accept a partial result
- Ask the assistant to continue
- Recover after disconnecting or closing the app

Interruption must redirect the same work rather than create an unrelated task.

### Time and Time Given Back

Show factual elapsed work time while the assistant is actively working.

Example:

“Comparing the strongest options · 4m 12s · Watch live”

Do not show fake percentages or completion estimates. A percentage is allowed only when the work is genuinely enumerable, such as “Checked 5 of 8 files.”

We are also investigating a product and marketing metric called Time Given Back.

This must not be calculated from agent runtime.

The intended measurement model distinguishes:

- Agent elapsed time
- External and automation waiting time
- Human active effort normally required for a comparable manual task
- User time spent clarifying, reviewing, approving, correcting and cleaning up
- Outcome quality and whether the result was actually accepted

A task receives no time-saved credit if it fails, is abandoned, requires material rebuilding or lacks a credible human benchmark.

The conservative concept is:

conservative time returned =
the lower-bound benchmark for successful human active effort
minus
the user’s measured active involvement

The product may eventually say:

“Estimated active effort returned: 35–50 minutes.”

It must not say:

“You saved exactly 47 minutes.”

Help design how this appears without creating fake precision, self-congratulatory gamification or manipulative engagement.

### Personal context and memory

The product should develop a useful understanding of the person over time.

This may include:

- Important people and relationships
- Work and personal projects
- Goals
- Preferences
- Recurring responsibilities
- Decisions
- Documents
- Places
- Habits
- Communication preferences
- Reusable ways of doing things
- Personal, work and shared contexts

The user should be able to understand:

- What the product knows
- Why it believes something
- Where the information came from
- When it was last confirmed
- How confident it is
- What recently changed
- What appears uncertain or contradictory
- How to correct it
- How to forget it
- How to export it
- Whether something belongs to personal, work or shared context

I am interested in a beautiful visual representation of this understanding growing over time, potentially inspired by a relationship or knowledge graph.

However, ordinary people must not be asked to manage:

- Nodes
- Edges
- Markdown
- Tags
- Folder hierarchies
- Knowledge-base mechanics
- Database fields

The graph should explain continuity or create a memorable profile moment. It should not become an administrative burden or permanent primary navigation.

Investigate whether the best framing is:

- Your Context
- What it understands
- Your world
- Your profile
- Something less clinical

Do not assume the final label before researching and testing it.

### Voice

Voice is a first-class requirement, not a microphone attached to a text box.

Voice should use the same:

- Identity
- Conversation
- Memory
- Task state
- Approvals
- History
- Personal context
- Results

It should not feel like a separate assistant.

We want voice quality capable of competing with ChatGPT voice, including:

- Natural speech
- Low latency
- Appropriate turn-taking
- Patient endpointing during thinking pauses
- Fast interruption and barge-in
- Accurate handling of corrections
- Clear handling of tools and longer work
- Movement between voice and text
- Background and screen-lock behaviour
- Bluetooth and in-car reliability
- Transcript accuracy
- Truth about what the user actually heard
- A visible mute and end control
- Safe handling of approvals

Hermes already has transcription, text-to-speech and streaming-speech foundations. Premium realtime voice will require a proper audio transport and real-device testing.

Do not assume a consumer ChatGPT subscription can legally or technically power our commercial voice product.

Help define both:

- The ideal voice interaction design
- The visual interface required before, during and after a voice conversation

### Global naming

IrelandGPT is a working name only.

The final name should scale to Ireland, the UK, the US and global markets. It should not depend on:

- Ireland
- GPT
- AI
- Agent
- Bot
- Intelligence
- Assistant
- Productivity
- Task-management terminology

The name should ideally be:

- Short
- Memorable
- Easy to pronounce
- Easy to spell after hearing once
- Natural in Irish, British and American English
- Emotionally ownable
- Distinctive enough to protect
- Broad enough to cover voice, chat, work, memory and future devices
- Capable of becoming natural speech if the product earns that behaviour

Verbability is desirable but must not be forced. Products usually become verbs because they own a repeated behaviour, not because the founder selected a verb-shaped name.

Treat naming as a parallel research stream. Do not allow it to block interface development.

Do not recommend any final name without domain, company, trademark, app-store and social collision screening. Clearly label all exploratory names as availability unverified.

## Full Hermes capability spectrum the interface must accommodate

The interface does not need a visible menu item for every capability. It does need an interaction system capable of handling all of them truthfully and consistently.

Design for the following complete spectrum.

### Conversation and continuity

- Create a new conversation
- Continue a previous conversation
- Stream responses incrementally
- Stop an active response
- Interrupt and redirect active work
- Recover after connection loss
- Resume persisted work
- Restore terminal results
- Rename conversations
- Search conversation history
- Pin important conversations
- Archive and restore conversations
- Delete conversations safely
- Branch a conversation
- Export a conversation
- Continue the same conversation across web, mobile, desktop and supported messaging channels
- Handle multiple active or background conversations without turning the product into a task dashboard

### Input and attachments

- Text
- Photos
- Screenshots
- Documents
- PDFs
- Spreadsheets
- Presentations
- Audio files
- Voice notes
- Video
- Code and repositories
- Multiple attachments
- Camera capture
- Microphone input
- Drag and drop on desktop
- Mobile share sheet
- Progress, cancellation and recovery during upload
- Clear permission and privacy explanations
- Safe unsupported-file handling

### Results and artifacts

- Rich text answers
- Markdown
- Citations and sources
- Code blocks
- Tables where genuinely useful
- Documents
- PDFs
- Spreadsheets
- Presentations
- Images
- Video
- Audio
- Generated code
- Downloadable bundles
- Comparisons
- Plans
- Research packs
- Browser findings
- Receipts for completed actions
- Partial results
- Failed-result recovery
- Artifact preview
- Save, share, download, revise, continue and regenerate
- Version history where appropriate
- Clear distinction between an answer, a draft, a completed artifact and a real-world action

Artifacts must be backed by real authenticated resources. Never expose local filesystem paths as browser download links.

### Research and web use

- Search the web
- Read pages
- Compare sources
- Extract information
- Work with long-form sources
- Cite evidence
- Identify uncertainty and conflicting claims
- Use browser sessions
- Navigate visual websites
- Handle login requirements
- Let the user take over
- Return partial results when blocked
- Distinguish source content from instructions to the agent
- Defend against prompt injection from websites and documents
- Preserve meaningful source receipts

### Computer use and visible work

- Open and navigate websites
- Operate supported desktop applications
- Work with visual interfaces
- Use a contextual desktop live-work panel
- Let the user watch, pause, stop or take over
- Hide or redact sensitive content
- Provide a readable activity equivalent for accessibility
- Avoid exposing raw browser automation or host-control terminology
- Make it clear when the computer is offline or unavailable
- Never ask the user to supervise low-risk work continuously
- Require appropriate oversight for high-risk actions

### Files and paired devices

- Connect an authorised computer when needed
- Request access to selected folders or resources in ordinary language
- Search authorised locations
- Retrieve files
- Return likely candidates for disambiguation
- Deliver selected files into the conversation
- Make bounded file changes with approval where appropriate
- Report when the paired device is offline
- Show authorised scope clearly
- Revoke access
- Never expose raw paths, ports, credentials or unrestricted host control
- Never require Full Disk Access as the default consumer model

### Documents and productive work

- Draft and revise text
- Create reports
- Create Word documents
- Create and analyse spreadsheets
- Create presentations
- Read and edit PDFs
- Extract text from scans
- Produce summaries
- Build research packs
- Transform files between formats
- Generate charts and diagrams
- Maintain version and provenance information
- Deliver the finished file in the conversation
- Continue editing through ordinary-language requests

### Code, projects and technical work

The product can support technical users without making the primary consumer experience technical.

Accommodate:

- Read and analyse code
- Write and edit code
- Run tests
- Debug failures
- Use repositories
- Review Git changes
- Create branches or worktrees through safe bounded flows
- Produce patches
- Prepare pull requests
- Run controlled terminal operations
- Show meaningful progress and final evidence
- Request approval for consequential external changes
- Keep raw shell access, credentials and host administration out of ordinary remote use

### Creative media

- Generate images
- Edit or transform images
- Create videos
- Continue or revise videos
- Generate music and audio
- Create visual communication assets
- Produce social media assets
- Deliver previews and final files
- Show long-running render progress honestly
- Notify the user when rendering finishes
- Preserve prompts, versions and provenance where helpful without exposing model plumbing

### Approvals and consequential actions

Design clear approval moments for:

- Sending messages
- Sending emails
- Posting publicly
- Booking
- Purchasing
- Payments
- Deleting
- Account changes
- Sharing sensitive information
- Accepting terms
- Connecting accounts
- Changing permissions
- Modifying important files
- Publishing or deploying
- External communication
- Other irreversible or high-consequence actions

Every approval should state:

- The exact proposed action
- The target
- The content or material details
- The cost where relevant
- The consequence
- Whether it can be undone
- What happens if the user declines
- Whether anything has already occurred

Avoid generic “Approve” dialogs with hidden consequences.

### Background and long-running work

- Continue genuine work after the user leaves the screen
- Preserve task identity
- Provide meaningful progress without excessive notifications
- Notify on completion, failure or required approval
- Return to the exact conversation and state
- Pause, stop or redirect work
- Provide an honest partial result
- Distinguish active execution from external waiting
- Avoid indefinite spinners
- Avoid pretending work continues when it does not
- Show elapsed time
- Provide terminal receipts

### Scheduling, monitoring and recurring work

Hermes can schedule recurring or future work.

Design conversational ways to:

- Ask the assistant to do something later
- Monitor a condition
- Create a recurring briefing
- Notify when something changes
- View or modify a specific schedule at need
- Pause, resume or stop recurring work
- Review the latest result
- Explain frequency in ordinary language
- Handle time zones
- Handle missed or failed runs
- Avoid exposing cron syntax, scripts, job IDs, toolsets or delivery plumbing
- Avoid presenting a permanent automation inventory as primary navigation

A secondary management view may exist when the user intentionally asks to manage recurring work. It must remain subordinate to conversation.

### Memory, learning and reusable preferences

- Remember stable preferences
- Remember corrections
- Learn reusable workflows
- Store context with provenance, confidence and recency
- Distinguish stable memory from temporary task state
- Ask before retaining sensitive or surprising information
- Inspect remembered context
- Correct it
- Forget it
- Export it
- Separate personal, work and shared contexts
- Avoid silently learning instructions from untrusted web content
- Avoid treating stale information as current fact
- Suggest useful remembered preferences only when relevant

Do not show “skills” as a technical catalogue. Translate learned procedures into ordinary outcomes and user-controlled preferences.

### Internal delegation

Hermes can divide work among specialised internal workers.

The user should never have to select or understand agents.

The interface may communicate parallel progress when useful:

- “I’m checking the market and reviewing the documents at the same time.”

It must not expose:

- Agent names
- Agent hierarchy
- Orchestration diagrams
- Internal prompts
- Technical delegation logs
- Kanban cards
- Model routing

Design how multiple internal workstreams converge into one coherent result and one approval model.

### Connections and communications

- Email
- Calendar
- Cloud files
- Supported messaging channels
- Notifications
- Other approved services
- Connected computers
- Future household or shared contexts

Connections should appear exactly when a requested outcome needs them.

Example:

“To organise your week, I need access to your calendar.”

Do not lead with an integration marketplace or require people to configure bots, tokens, ports or bridges.

Design:

- Just-in-time connection
- Plain-language permission scope
- Connected state
- Needs-permission state
- Temporarily unavailable state
- Revocation
- Reauthentication
- Data-use explanation
- Personal versus work account boundaries

### Messaging-channel continuity

The same assistant may be reached through:

- The primary product
- Telegram during founder testing
- Future supported messaging services
- Notifications
- Voice
- Desktop and mobile

These must not become separate assistants.

Design how the product preserves:

- Identity
- Context
- Conversation continuity
- Approval state
- Artifact delivery
- Background completion
- Notification routing
- Privacy boundaries

### Voice and spoken results

- Voice input from the composer
- Voice notes
- Spoken replies
- Full realtime conversation
- Move between voice and text
- Show the transcript
- Correct transcription
- Interrupt playback
- Stop or mute
- Use tools during a voice session
- Handle a task that continues after voice ends
- Deliver results later
- Handle approvals safely
- Remember only canonical final speech and content actually heard
- Explain recording and retention accurately
- Test Bluetooth, driving, noise, route changes, screen lock and mobile networks

### Notifications

- Completion
- Approval required
- Important failure
- Monitored condition changed
- Scheduled result
- Paired computer unavailable when needed

Do not use notifications as engagement bait.

Ask for notification permission after the user has experienced real value, not during initial onboarding.

Notification copy must state the material event.

Good:

“Your car shortlist is ready.”

“Your trip is ready to book. Review the €438 total.”

Bad:

“Action needed!”

“You have an update.”

Sensitive content should be hidden from lock-screen previews by default.

### Authentication, identity and account

- Secure account creation
- Passkeys and biometric-backed sign-in where supported
- Email recovery
- Device management
- Session management
- Personal and work separation
- Clear connected-account identity
- Multi-device continuity
- No secrets in browser storage
- Revocation
- Export and deletion
- Honest offline and unavailable states

Authentication should not dominate the first-use experience unnecessarily, but no private action or durable memory can be assigned to the wrong person.

### Invisible model and provider routing

The system may choose among models and providers based on:

- Task complexity
- Freshness
- Privacy
- Consequence
- Cost
- Latency
- Creative quality
- Tool requirements

Ordinary users should not select models.

The interface may expose a small user-meaningful policy only if genuinely useful, such as:

- Faster
- More thorough
- Private/local where available

Do not expose tokens, model versions, provider names or routing decisions during ordinary use. Provider disclosure belongs in the appropriate privacy and data-handling surface.

### Offline, failure and recovery

Design complete states for:

- No internet
- Hermes unavailable
- Paired computer offline
- Site unavailable
- Login expired
- Permission denied
- Upload failed
- Voice connection lost
- Scheduled work failed
- Task stopped
- Task partially completed
- Approval expired
- Artifact unavailable
- Conflicting information
- The assistant is uncertain
- The user returns after the app was closed

Every failure state should explain:

- What happened in ordinary language
- Whether any action already occurred
- What work was preserved
- What the user can do next
- Whether the product can retry safely

## Questions this consultancy must answer

Do not answer these from intuition alone. Identify which require research, user testing, prototyping or technical validation.

### Product and target-user questions

1. Who is the first user we are designing for?
2. What specific jobs should the product become famous for completing first?
3. What makes someone open this instead of Telegram, ChatGPT, Claude or another assistant?
4. What would make me voluntarily use it every day?
5. Which experiences produce the first “holy shit” moment?
6. What should happen in the first 30 seconds, three minutes and first week?
7. How do we avoid blank-chat anxiety without creating a feature catalogue?
8. Should the opening state contain starter prompts, recent context, one suggested delegation or nothing beyond the composer?
9. How does the product reveal capabilities without requiring users to imagine everything it can do?
10. What should remain completely invisible?
11. When should the assistant suggest adjacent work after completing something?
12. What is the minimum experience that is meaningfully better than Telegram?

### Familiarity and differentiation

1. Which conventions should we inherit from Telegram, iMessage, WhatsApp, ChatGPT and Claude?
2. Which conventions are weak and should be redesigned?
3. How do we make chat feel familiar without looking like a generic chatbot clone?
4. What are the few signature interactions that can become recognisably ours?
5. Should user messages appear as bubbles?
6. Should assistant responses be bubbleless and editorial?
7. How should long responses, citations, code, artifacts and approvals differ visually?
8. How much interface chrome is necessary?
9. Should the conversation title be prominent, subtle or hidden?
10. Where should new conversation, history and account controls live?
11. How do we preserve spatial familiarity when live work opens and closes?
12. What should the desktop experience offer that mobile should not copy?

### Colour and visual psychology

Research rather than repeat generic claims such as “blue means trust” or “green means calm.”

Answer:

1. What emotional state should the product create before, during and after delegation?
2. Which colour families support calm competence, warmth, clarity and trustworthy action?
3. Should the product use warm neutrals, cool neutrals, pure white, ivory, charcoal or near-black?
4. What should the primary accent communicate?
5. Should an Irish green influence remain, or would it constrain the global brand?
6. How do colour choices perform in Ireland, the UK and the US?
7. How should light and dark themes differ beyond simple inversion?
8. Which colours communicate working, approval, warning, success, uncertainty, offline and failure?
9. How do we avoid making green equal success, red equal failure and amber equal warning when colour-vision accessibility is considered?
10. How much saturation is appropriate for a product used for long conversations?
11. What colours increase readability and reduce fatigue?
12. Which palette choices create accidental financial, healthcare, enterprise or crypto associations?
13. How should colour be tested with users rather than selected from design mythology?
14. What WCAG contrast targets should govern text, controls, focus indicators, status and disabled states?
15. How should system dark mode and reduced-transparency preferences be respected?
16. Should users be able to select appearance manually, or should the product follow the operating system initially?

Provide several evidence-informed palette directions with:

- Colour values
- Functional roles
- Light-theme use
- Dark-theme use
- Contrast calculations
- Emotional rationale
- Cultural and category risks
- Accessibility risks
- Recommended testing method

Do not choose a final palette before we compare it in realistic screens.

### Typography

1. What should typography communicate: intelligence, warmth, authority, familiarity, editorial quality or efficiency?
2. Should native system typography be used for the product interface?
3. Is a distinctive display face necessary, or would it make the product theatrical?
4. What typeface should be used for long assistant responses?
5. How should user messages, assistant messages, progress, metadata, receipts and artifact titles differ?
6. What reading size is appropriate on iPhone?
7. What line length should govern desktop conversation?
8. What line height supports long-form reading?
9. How should typography scale with Dynamic Type and browser zoom?
10. How should code, numbers, elapsed time and tabular information be treated?
11. Which fonts have strong legibility, language coverage, licensing and performance?
12. How should we avoid the generic geometric-SaaS or futuristic-AI look?
13. What should typography do during streaming so text does not visually jump or feel unstable?

Recommend at least three coherent typography systems and compare their strengths, risks, licensing, loading cost and accessibility.

### Behavioural science and trust

1. What scientifically supported principles reduce uncertainty during delegated work?
2. How does visibility of system status affect trust and control?
3. How much progress information is useful before it becomes noise?
4. What makes people feel safe handing over responsibility?
5. How should uncertainty be shown without making the product appear incompetent?
6. How should success be shown without excessive celebration?
7. How should failure preserve trust?
8. What causes automation complacency or over-trust?
9. What causes people to feel watched, manipulated or judged?
10. How do we avoid anthropomorphic deception while maintaining a warm voice?
11. How should users learn approval boundaries?
12. How should the product earn increasing autonomy?
13. How should correction feel constructive rather than like configuring software?
14. What psychological effects could the memory graph create?
15. How can progress and control lower the perceived risk of delegation?
16. Which dark patterns must be explicitly prohibited?
17. How can the product be sticky because it is useful rather than addictive?
18. Which metrics would encourage unhealthy design decisions?
19. How do we measure voluntary reliance, competence and trust rather than time in app?
20. How should sensitive or high-stakes tasks change the interface?

Separate:

- Strong research evidence
- Established design heuristics
- Plausible hypotheses
- Personal aesthetic opinion

Cite primary or reputable sources.

### Live work and split screen

1. When should live work open automatically?
2. When should it remain behind “Watch live”?
3. Which task types benefit from observation?
4. Which task types are harmed by showing activity?
5. What exactly should appear in the workspace?
6. Should the workspace be a browser, document canvas, preview, map, code environment or adaptive container?
7. How should it resize?
8. What happens to chat width?
9. How does the user add direction while watching?
10. How does takeover work?
11. What happens when the user returns control?
12. What gets recorded in the activity history?
13. How do we prevent sensitive data appearing unexpectedly?
14. How should login and password entry work?
15. How should prompt injection or suspicious page instructions be surfaced?
16. What is the accessible equivalent of visual browser activity?
17. How does reduced motion affect the live view?
18. How does the live surface collapse into the final result?
19. How does mobile represent the same task?
20. How do we prevent live work becoming entertainment or surveillance theatre?

Produce detailed desktop and mobile interaction flows for:

- Web research
- DoneDeal car comparison
- Booking preparation
- Document creation
- File retrieval from a paired computer
- A task requiring sign-in
- A task requiring approval
- A blocked task
- A long-running creative render

### Progress and elapsed time

1. What are the canonical internal work states?
2. What user-facing language should correspond to each state?
3. When should progress appear inline versus in the live-work panel?
4. When should elapsed time begin, pause and stop?
5. How should external waiting differ from active agent work?
6. How often should material progress update?
7. How do we prevent frequent updates from pushing conversation content away?
8. When is a completion estimate allowed?
9. How should enumerable work be represented?
10. What happens when work takes longer than expected?
11. What choices should be offered when work is blocked?
12. How should partial completion be expressed?
13. How should multiple internal workstreams be summarised?
14. What progress information should survive in conversation history?
15. What belongs only in a detailed receipt?
16. How should screen readers receive status without announcing every timer tick?
17. What animation communicates genuine state without creating false activity?

Create a complete progress-language system and state-transition model.

### Time Given Back

1. Is this valuable enough to appear in the product?
2. Should it appear after every eligible task or only in periodic summaries?
3. Could it create pressure, guilt or false productivity optimisation?
4. What evidence threshold is required before showing an estimate?
5. How should unbenchmarked tasks appear?
6. Should users be able to inspect the calculation?
7. How should user review and correction time be captured?
8. How do we avoid asking users to record too much?
9. What task classes should be benchmarked first?
10. What quality rubric makes human and agent outcomes comparable?
11. How should personal and aggregate totals differ?
12. How should uncertainty ranges be displayed?
13. Should the main total use only the conservative lower bound?
14. How should methodology changes affect historical totals?
15. What claims are legally and ethically safe in Ireland, the UK, EU and US?
16. How can marketing use aggregate time returned without exaggeration?
17. Should the feature be called Time Given Back, Time Returned, Effort Returned or something else?
18. What other value measures are needed alongside time?

Design the product presentation, benchmark programme, audit record and public methodology page.

### Personal context and the profile

1. What information should be remembered automatically?
2. What should always require explicit consent?
3. How should provenance and confidence appear?
4. How should the user correct a memory?
5. How should forgetting work?
6. How should contradictions appear?
7. How should stale context be handled?
8. How should personal, work and shared context differ?
9. How should sensitive information be protected?
10. What is the right mental model: profile, context, understanding, world or relationship?
11. Is a graph genuinely useful or merely visually impressive?
12. What should the graph communicate?
13. How should it simplify on mobile?
14. How does it avoid appearing creepy or omniscient?
15. What should a new user see before much context exists?
16. How does the product demonstrate that improved context produced a better result?
17. What is the right progressive-disclosure path from one remembered preference to a rich personal context?
18. How can the user export their context?
19. How should shared and household knowledge work without leaking private information?
20. What are the deletion and recovery expectations?

Develop at least three profile/context concepts, including one that does not use a graph.

### Voice experience

1. What is the ideal way to enter voice mode?
2. Should holding the microphone create a voice note or begin realtime conversation?
3. How should those two behaviours be distinguished?
4. What should the active voice screen display?
5. Should it show a waveform, transcript, conversation content, live work or minimal controls?
6. How should listening, thinking, speaking, working, approval and interruption states differ?
7. How should a user correct a bad transcription?
8. How should barge-in work?
9. How should long pauses be interpreted?
10. How should the assistant handle a tool task that takes several minutes?
11. How does voice end while work continues?
12. How does the completed result return?
13. How should voice and text coexist in the same transcript?
14. What content was generated versus actually heard?
15. How should voice approvals work safely?
16. What happens while driving?
17. Which actions must never require looking at the screen during a drive?
18. How should Bluetooth route changes, calls, backgrounding and screen lock behave?
19. What latency and interruption targets define acceptable quality?
20. What field tests are required before claiming premium voice?

Produce a complete voice-state model, mobile flow and real-device test plan.

### Accessibility and inclusive design

1. Can the entire product be used by keyboard?
2. How do screen readers receive streamed content?
3. How are progress updates announced?
4. How is live visual work represented non-visually?
5. What happens at 200% browser zoom?
6. What happens with large Dynamic Type?
7. How are focus, dialogs and sheets managed?
8. How are approvals made unambiguous?
9. How are status and errors communicated without colour?
10. How does reduced motion affect streaming, live work and transitions?
11. How do we accommodate motor, visual, hearing, cognitive and literacy differences?
12. Are all touch targets at least 44 to 48 CSS pixels?
13. How is voice usable for someone with a speech difference?
14. How are transcripts and captions handled?
15. How does the interface behave on a low-powered phone or slow connection?
16. What language is understandable to people unfamiliar with AI?
17. How do we test with people of differing confidence and technical literacy?

Use WCAG 2.2 and relevant Apple and platform guidance as minimums, not as the ceiling.

### Mobile viewport and composer behaviour

The existing prototype had a severe mobile defect: the user could not reliably scroll to the latest message.

The accepted design must specify:

- One authoritative viewport-height owner
- One authoritative vertical conversation scroller
- Correct min-height-zero flex behaviour
- Composer as a bounded sibling that does not cover messages
- Safe-area handling
- On-screen keyboard handling
- Orientation changes
- Browser chrome changes
- Conditional auto-scroll only when the user is already near the bottom
- No forced scrolling when the user is reading earlier content
- A jump-to-latest control
- Streaming without scroll jumps
- Attachment previews without covering the composer
- Reliable iPhone Safari and installed-home-screen behaviour
- Short-height landscape behaviour
- Long-message and long-code-block behaviour

Treat this as a structural interaction requirement, not a cosmetic implementation detail.

### Motion, haptics and sound

1. What should move and why?
2. Which transitions explain spatial relationships?
3. How should the split screen open and close?
4. How should progress transition into a result?
5. How should approvals demand attention without alarm?
6. What deserves haptic feedback?
7. What sounds, if any, are appropriate?
8. How should reduced-motion preferences change the experience?
9. How do we avoid decorative AI animation?
10. How should streaming text appear smoothly without delaying authoritative content?
11. What motion duration and easing communicate calm competence?
12. How should voice-mode motion avoid feeling like a generic glowing orb?

### Notifications and interruption

1. Which events deserve notifications?
2. When should permission be requested?
3. How should lock-screen privacy work?
4. What actions belong directly in a notification?
5. How do approval notifications communicate exact consequences?
6. How do notifications return to the exact conversation and state?
7. How should repeated background work avoid notification fatigue?
8. Should mobile use Live Activities or ongoing notifications for certain work?
9. When is an elapsed timer useful outside the app?
10. How should notification failure be represented?

### Privacy, security and approval design

1. How can the product feel simple without hiding consequential data use?
2. Which permissions can be explained at the moment of need?
3. Which permissions require broader onboarding?
4. How should third-party provider disclosure appear?
5. How should paired-device scope be explained?
6. How should the user revoke access?
7. How should sensitive live-work content be hidden?
8. How should approval cards resist accidental confirmation?
9. How should prompt-injection risk affect browser work?
10. What should happen if a webpage tells the agent to ignore the user?
11. How do we distinguish a draft from an action that already happened?
12. What must every receipt preserve?
13. Which actions require explicit approval every time?
14. Could any repeated workflow earn bounded standing permission?
15. How would such permission be named, scoped, reviewed and revoked?
16. How should privacy choices differ across personal, work and shared contexts?

### Brand personality and language

1. Should the product feel Irish in personality without being limited geographically?
2. Which aspects of Irish warmth, directness or humour transfer globally?
3. Should the assistant use “I”?
4. How human should it sound?
5. How should it avoid pretending to be a human person?
6. What tone is appropriate for ordinary admin, sensitive matters, professional work and failure?
7. How concise should progress language be?
8. How should the product challenge the user?
9. How should it admit uncertainty?
10. How should it apologise?
11. What words should be banned from consumer copy?
12. What does premium copy sound like without becoming cold or theatrical?

Develop a language charter with good and bad examples.

### Naming

1. What behaviour or emotional territory should the name own?
2. Is quiet momentum the strongest naming territory?
3. Is personal continuity stronger?
4. What other territories should be tested?
5. Does a human name create false anthropomorphism?
6. Should the name work as both noun and verb?
7. Which phonetic structures travel best across Ireland, UK and US English?
8. What associations must be avoided?
9. How should blind pronunciation and spelling tests work?
10. What trademark classes and markets require screening?
11. What domain compromises are acceptable?
12. Should brand identity be designed only after legal clearance?
13. How do we prevent attachment to an aesthetically pleasing but commercially unusable name?

Create a structured naming sprint, not just a list of names.

### Validation and measurement

1. What are the primary usability hypotheses?
2. What should be prototyped before coding?
3. Which flows require interactive prototypes?
4. Which flows require real Hermes-backed testing?
5. What should be tested with ordinary non-technical users?
6. What should be tested with me as founder and experienced Hermes user?
7. How do we compare the product against Telegram and ChatGPT?
8. What defines “easier than Telegram”?
9. What defines “as good as ChatGPT for chat”?
10. What defines acceptable live-work trust?
11. What defines premium voice quality?
12. Which tasks should form the usability gauntlet?
13. How should we test failure and recovery?
14. How should we test approval comprehension?
15. How should we measure time to first useful outcome?
16. How should we measure repeat delegation?
17. How should we measure trust failures?
18. How should accessibility be tested?
19. Which metrics must never become product goals?
20. What must pass before deployment?

## Research requirements

Before recommending a final direction, inspect current first-party material and live products where access permits.

At minimum, investigate:

- ChatGPT and ChatGPT agent
- Claude and Anthropic computer use
- Telegram
- WhatsApp
- iMessage
- Perplexity
- Manus
- Google Gemini
- Relevant browser-agent products
- Apple Human Interface Guidelines
- Material Design where relevant
- Nielsen Norman Group research
- Google PAIR
- W3C WCAG 2.2 guidance
- FTC dark-pattern guidance
- Relevant EU privacy and consumer guidance
- Realtime voice design and current provider capabilities

Useful starting sources include:

- https://openai.com/index/introducing-chatgpt-agent/
- https://openai.com/index/chatgpt-agent-system-card/
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool
- https://www.nngroup.com/articles/visibility-system-status/
- https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html
- https://developer.apple.com/design/human-interface-guidelines/progress-indicators
- https://www.ftc.gov/reports/bringing-dark-patterns-light
- https://pair.withgoogle.com/guidebook/
- https://developer.apple.com/design/human-interface-guidelines/onboarding
- https://help.openai.com/en/articles/8590148-memory-faq
- https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en

Do not cite a search-result snippet as if you inspected the source.

For every important claim:

- Cite the direct source
- State what was actually observed
- Separate observation from recommendation
- State uncertainty or access limitations
- Explain what should transfer to this product
- Explain what should not be copied

Do not use award-gallery inclusion as evidence that a design produces better business or usability outcomes.

Do not repeat weak pop-psychology claims about colour, type or animation as scientific facts.

## Working method

Run the consultancy in phases.

### Phase 1: Founder discovery

- Restate the product thesis in your own words.
- Identify contradictions, assumptions and missing decisions.
- Ask the first five to seven highest-leverage questions.
- Explain why each answer changes the product.
- Create the initial decision register.

Do not produce a final visual system during Phase 1.

### Phase 2: Evidence and competitive mechanisms

- Research current products and evidence.
- Produce a benchmark based on mechanisms, not screenshots alone.
- Identify patterns worth adopting.
- Identify patterns to reject.
- Highlight where our product can be genuinely better.
- Update the decision register.

### Phase 3: Experience architecture

Define:

- The core product model
- Mobile and desktop information architecture
- Conversation anatomy
- Live-work behaviour
- Progress model
- Approval model
- Result and artifact model
- Voice model
- Personal-context model
- History and secondary surfaces
- Cross-device continuity
- Notifications
- Recovery
- Accessibility

### Phase 4: Signature journeys

Produce complete end-to-end journeys for at least:

1. New user completes a first useful task.
2. DoneDeal car research with optional live work.
3. Research request with citations.
4. Document creation and artifact delivery.
5. Retrieve a file from an authorised computer.
6. Long-running work that continues in the background.
7. A task requiring clarification.
8. A task requiring sign-in and takeover.
9. A task requiring approval before an external action.
10. A failed task with a useful partial result.
11. Create and later modify recurring monitoring through conversation.
12. Inspect and correct remembered personal context.
13. Start by voice, continue in the background, receive the result by notification.
14. Move from phone to desktop without losing task state.

For every journey, specify:

- User intent
- Entry point
- Interface state
- Assistant language
- Visible progress
- Controls
- Permission or approval boundary
- Error paths
- Final result
- Receipt
- Memory consequence
- Notification consequence
- Mobile adaptation
- Desktop adaptation
- Accessibility behaviour

### Phase 5: Visual-direction exploration

Develop multiple coherent visual directions rather than one arbitrary answer.

For each direction specify:

- Emotional intent
- Colour system
- Typography
- Spacing
- Shape language
- Borders and elevation
- Message treatment
- Composer treatment
- Progress treatment
- Approval treatment
- Artifact treatment
- Live-work treatment
- Motion
- Light theme
- Dark theme
- Accessibility
- Cultural and category associations
- Risks
- What users should test

Use realistic screen compositions, not isolated colour swatches.

### Phase 6: Design system and complete state inventory

Produce:

- Design principles
- Tokens
- Typography scale
- Colour roles
- Spacing system
- Radii
- Elevation
- Motion tokens
- Touch targets
- Focus states
- Component anatomy
- Responsive rules
- Accessibility rules
- Language rules

Include every significant state:

- New conversation
- Existing conversation
- User message
- Assistant message
- Streaming
- Working
- Enumerable progress
- Indeterminate progress
- Live work available
- Live work open
- Paused
- Redirected
- Stopped
- Waiting for sign-in
- Waiting for permission
- Waiting for approval
- Approved
- Rejected
- External waiting
- Slower than expected
- Partial result
- Completed result
- Artifact ready
- Uploading
- Upload failed
- Voice note recording
- Realtime voice
- Voice interrupted
- Voice disconnected
- Offline
- Runtime unavailable
- Paired computer unavailable
- Recovering
- Recovered
- Error
- Conflicting evidence
- Uncertain answer
- Notification
- Memory learned
- Memory corrected
- Memory forgotten
- Empty history
- History search
- Destructive confirmation

These may have internal state names, but consumer-visible language must remain ordinary.

### Phase 7: Prototype and validation plan

Specify:

- What to prototype in Figma or equivalent
- What needs real content
- What requires a Hermes-backed prototype
- Founder dogfood tasks
- Ordinary-user test tasks
- Accessibility testing
- Voice field testing
- Mobile Safari testing
- Desktop responsive testing
- Long-task testing
- Failure and recovery testing
- Approval-comprehension testing
- Success measures
- Kill criteria
- Iteration order

### Phase 8: Implementation handoff

After the design is accepted, produce an implementation-ready presentation contract that can be connected to Hermes without reinterpreting the design.

The contract should define:

- Screen and component hierarchy
- Responsive behaviour
- Component states
- Event inputs
- User actions
- Accessibility semantics
- Visible copy
- Error handling
- Animation behaviour
- Data requirements
- Which state is authoritative
- Which controls are contextual
- Which capabilities remain hidden
- Security and approval requirements
- Exact acceptance criteria

Hermes remains the engine. Do not redesign or rebuild the agent runtime.

## Required consultancy behaviour

- Be candid rather than agreeable.
- Challenge me when evidence or interaction logic supports the challenge.
- Do not challenge settled decisions merely to appear critical.
- Do not reinterpret private frustration literally or bury the work in caveats.
- Do not turn the product into a dashboard.
- Do not expose Hermes internals.
- Do not invent unsupported controls.
- Do not claim an unavailable capability is working.
- Do not conflate visual polish with product completeness.
- Do not use em dashes in user-facing copy.
- Do not use a table where a clearer set of headings and bullets works.
- Do not use generic AI-purple gradients, glowing orbs, robot imagery, particle fields or theatrical “thinking” animations.
- Do not create fake progress.
- Do not create fake time-saved statistics.
- Do not create addictive engagement loops.
- Do not make user data accumulation itself the moat.
- Do not make live work mandatory supervision.
- Do not show technical configuration during ordinary use.
- Do not solve every open question in one turn.

Maintain these living documents throughout the conversation:

1. Product thesis
2. Design principles
3. Decision register
4. Open-question register
5. Evidence and source ledger
6. Assumption and risk register
7. Full capability-to-experience map
8. State inventory
9. User-journey set
10. Visual-system options
11. Validation plan
12. Final implementation handoff

When a decision changes, record:

- Previous decision
- New decision
- Why it changed
- Evidence
- Consequences elsewhere in the design

## Your first response

Do not give me a finished interface yet.

Your first response should contain:

1. Your concise understanding of the product and what makes it different.
2. The five strongest parts of the current direction.
3. The five most important risks or unresolved contradictions.
4. A proposed consultancy sequence.
5. The first five to seven highest-leverage questions for me.
6. A brief explanation of why each question materially changes the design.
7. The initial decision register, clearly separating:
   - Decided
   - Strong working hypothesis
   - Open
   - Requires research
   - Requires prototype or user testing

Then stop and wait for my answers before moving into the next consultancy round.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]

