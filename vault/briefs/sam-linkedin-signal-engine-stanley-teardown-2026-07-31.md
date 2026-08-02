---
title: Stanley teardown and Sam LinkedIn Signal Engine
created: 2026-07-31
status: reviewed
owner: Leo
---

# Stanley teardown and Sam LinkedIn Signal Engine

## Bottom line

Stanley is a conversational content operations layer. Its real value is not the writing model. It closes the full loop from raw founder context to ideas, drafts, approval, publishing, measurement and the next draft.

Sam should not clone Stanley as a broad multi-platform SaaS. The highest-value move is to build a private, LinkedIn-first **Signal Engine** around Hermes, Telegram and Ground Zero. It should be optimized for qualified commercial conversations for OpenHouse and OpenBook, not posting volume or vanity engagement.

The first version should be human-approved and copy-paste published. LinkedIn API publishing can be added only after the workflow proves it creates useful conversations.

## What Stanley appears to do

### Verified from first-party product pages and policies

Stanley presents itself as an AI Head of Content that works through iMessage, Telegram and the web. The current product claims to:

- learn a creator's voice from past posts and voice notes;
- proactively send ideas and draft concepts;
- create platform-specific drafts;
- maintain a content calendar;
- schedule and publish across X, LinkedIn, Threads, Instagram, YouTube and Substack;
- check post performance after publication;
- identify patterns behind stronger posts;
- feed those patterns into future drafts;
- monitor comments, DMs and opportunities where platform permissions allow;
- connect additional context sources such as Notion, Slack, calendars, meeting notes and GitHub.

The authenticated product marketing also shows a recurring automation library called **Rituals**. Visible routines include Morning Brief, Evening Report, Calendar Sync, GitHub to X, Granola to Posts, Outliers, Post Momentum, Second Wave, Trend Alerts, People Radar and Opportunity Watch. This is meaningful evidence of a durable scheduled-job layer rather than a simple chat wrapper. It does not prove that every displayed routine is production-ready or fully autonomous.

An official launch demonstration shows a Slack connection hosted through Composio. Composio therefore appears to provide at least part of Stanley's connector and OAuth execution layer.

The first-party landing page describes the core loop as: voice note in, draft, schedule, post and performance back in one conversation.

Stanley's privacy policy says that, when LinkedIn is connected, it may access:

- posts and drafts;
- likes, comments and impression metrics;
- public name, headline and profile URL;
- information about how the user interacts with LinkedIn while using Stanley.

The policy separately describes Instagram content, drafts and engagement access, and YouTube video, channel and analytics access.

The policy says third-party AI providers process prompts and content. It also says content is not used to train general AI models, providers are contractually restricted from training on it, and human review is limited to abuse, safety or legal reasons. Stanley may still use content to improve its own service, and may use aggregated or de-identified data for research and development.

Stanley's beta terms for X say it may draft, generate, schedule or post content on the user's behalf. The terms also say connected account content and metadata may be processed through Stan's systems and third-party AI providers.

### Product mechanics

The likely operating loop is:

1. **Account connection**
   - User authenticates to Stanley.
   - Social accounts are connected through platform OAuth.
   - Historical posts, profile information and available metrics are imported.

2. **Voice model**
   - Past posts are embedded or otherwise indexed.
   - Writing patterns are extracted, including sentence length, openings, recurring language, humour and formatting.
   - Voice notes add current phrasing and context.

3. **Signal collection**
   - The system reads connected context sources and social activity.
   - It identifies recent events, audience questions, stronger post patterns and possible content angles.

4. **Planning and drafting**
   - Candidate ideas are ranked.
   - Drafts are created for each platform.
   - A calendar assigns proposed publication times.

5. **Conversational approval**
   - The user reviews in iMessage, Telegram or the web.
   - Short replies approve, edit, reschedule or reject a draft.

6. **Publishing**
   - Approved posts are sent through official platform APIs where access permits.
   - The published URL is returned to the conversation.

7. **Measurement and learning**
   - Performance is checked after publication.
   - The system links results to hook, topic, format, audience and timing.
   - Stronger patterns influence future recommendations.

### Observed public implementation details

The public Stanley application uses:

- React Router on the frontend;
- Clerk for authentication;
- PostHog for product analytics;
- Sentry for monitoring and session replay;
- platform advertising and conversion tracking scripts.

These details are not the defensible part of the product. The defensible layer is the accumulated voice model, creator context, performance history, conversational habit and cross-platform permissions.

### Claims that are not independently verified

The launch post states that Stanley had around 100 beta users, average engagement above 50 percent and a public-account analysis cost of about one dollar in model tokens. These are founder claims from the launch material, not independently verified results.

The public client contains a real streaming X analysis flow at `POST /api/research-handle/stream`. It returns a profile event followed by streamed analysis tokens. This verifies that the public X audit is a live backend lookup and generation workflow, but it does not reveal the model or upstream X data source.

No public price was found. Access still appears to be waitlist or selected beta access, despite the terms stating that Stanley for X was expected to transition to Stanley One in June 2026.

## Buy, integrate or build

### Buying Stanley

**Benefit:** fastest access to the finished cross-platform workflow.

**Weakness:** Stanley would still lack the deepest source of Sam's advantage, Ground Zero's company context, decisions, proof assets, target relationships and product state. Connecting sensitive founder and company context to another platform also creates a wider privacy surface.

### Building a full clone

**Do not do this.** Multi-platform OAuth, publishing, analytics normalization, scheduling and inbox monitoring would create substantial platform work before proving commercial value.

### Recommended approach

Build a focused internal system first:

- LinkedIn first;
- Telegram as the command surface;
- Ground Zero as read-only business context;
- local private storage for drafts, performance and audience information;
- explicit Sam approval before every publication;
- commercial outcomes as the primary metric.

This should be a distribution system for the businesses, not another business to maintain.

## Proposed product: Signal Engine

### Job to be done

Turn what Sam is already doing, learning and saying into credible LinkedIn content that reaches the right people and creates warm commercial conversations, without adding another weekly planning job.

### Why it fits Sam better than Stanley

- It knows OpenHouse product state, proof assets, safety constraints and live commercial wedges.
- It knows OpenBook's Cork SMB positioning and preview workflow.
- It can distinguish evidence from founder speculation.
- It can use Telegram voice notes, which already match Sam's natural capture habit.
- It can optimize for known relationship cohorts rather than general audience growth.
- It can preserve the no-fluff, grounded voice already captured in Ground Zero.
- It can enforce company-specific confidentiality and claims rules.

## Audience map

The last known LinkedIn context contains approximately 683 connections. The system should treat that as a relationship graph, not a follower count.

### Cohort 1: OpenHouse buyers and partners

Relevant known relationships include people at Cairn, Glenveagh, Evara, HISCo, LDA and SE Systems.

Content should build authority around:

- safer homeowner AI;
- exact-home context rather than generic chat;
- better handover and buyer education;
- aftercare evidence and lower support friction;
- energy-system understanding in modern homes;
- privacy-safe scheme insight;
- developer proof and product demonstrations.

### Cohort 2: OpenHouse capital and strategic access

Relevant known relationships include Elkstone, Temporis and Ardcairn.

Content should demonstrate:

- product velocity;
- disciplined safety and evaluation;
- founder insight into the home handover problem;
- evidence of developer interest or independent use;
- a credible route from individual homeowner value to developer-scale economics.

### Cohort 3: OpenBook distribution

Cork Chamber and local SMB relationships are the strongest channel.

Content should focus on:

- AI-native local business infrastructure;
- booking through assistants and messaging channels;
- why a website should produce business, not merely exist;
- factual before-and-after demonstrations;
- local founder-led delivery.

### Cohort 4: founder credibility

Use genuine proof from product building, customer work, Cork networks, renewable energy and golf management only when it supports a useful commercial thesis. Personal stories should remain specific and true, not become generic founder theatre.

## Content allocation

For the first month:

- 75 percent OpenHouse authority and product proof;
- 25 percent OpenBook proof or local SMB infrastructure.

Founder and operator stories are formats within those lanes, not a third editorial lane. Evolv can supply real operating evidence, but it should not become another feed topic.

OpenHouse gets the majority because it has the highest revenue ceiling and the current need is independent developer proof. OpenBook remains useful, but it should not make Sam's profile look like several unrelated sales feeds.

## Core workflow

### 1. Capture

Inputs:

- Telegram voice notes;
- relevant changes in Ground Zero;
- approved product releases and demo assets;
- verified customer or prospect questions;
- meeting notes explicitly marked safe for content;
- prior LinkedIn posts and edits;
- public market or founder signals.

A source event is not automatically a post. It becomes a candidate only after commercial relevance and confidentiality checks.

### 2. Route

Every candidate gets:

- company;
- intended audience cohort;
- commercial objective;
- evidence sources;
- confidentiality level;
- shelf life;
- recommended format.

### 3. Create angles

The system should propose no more than three angles and rank them. Example labels:

- strongest commercial angle;
- strongest authority angle;
- strongest human angle.

### 4. Draft in Sam's voice

The writing system retrieves relevant past examples and applies explicit constraints:

- one clear point per post;
- concrete examples before abstraction;
- no invented numbers or customer claims;
- no em dashes;
- no generic AI excitement;
- no false vulnerability;
- no inflated founder language;
- no engagement bait;
- no forced call to action.

### 5. Challenge and verify

A separate review pass should check:

- Is every factual claim supported?
- Is anything confidential or commercially premature?
- Is the target reader obvious?
- Does the post create a credible next conversation?
- Does it sound like Sam rather than a content marketer?
- Is this worth spending reputation on?

### 6. Approve in Telegram

Each draft should arrive with a short control vocabulary:

- `approve`
- `edit: <instruction>`
- `hold`
- `kill`
- `why`

No post is published without an explicit approval tied to the final text.

### 7. Publish

Phase 1 uses copy and paste by Sam. This avoids API work while the content thesis is being tested.

Phase 2 can use LinkedIn's official Share on LinkedIn product. LinkedIn's official documentation states that the `w_member_social` OAuth permission is required to create a post for an authenticated member. API access and current product terms must be rechecked before implementation.

Do not assume that publishing permission provides full reading or analytics access. LinkedIn marks `r_member_social`, used to retrieve member posts, comments and likes, as restricted. Member post analytics use a separate restricted permission. Community Management integrations can also require technical sign-off. The MVP should therefore use Sam's own LinkedIn archive and manual metric capture, not scraping.

### 8. Measure

Capture at 24 hours, 72 hours and 7 days:

- impressions;
- reactions;
- comments;
- reposts;
- profile views where available;
- target-role engagement;
- inbound messages;
- warm introductions;
- meetings or demos;
- opportunities influenced.

The system should optimize first for qualified conversations and opportunities, then for target-role engagement. Impressions are diagnostic, not the goal.

### 9. Convert carefully

After a post, the system can recommend up to three thoughtful follow-ups to people who actually engaged or are clearly relevant. It must never auto-send DMs, auto-comment or manufacture familiarity.

## Proposed Hermes architecture

### Dedicated profile

Create a separate Hermes profile and Telegram chat called `signal` after the manual workflow is validated. This fits Sam's preference for clean specialist chats.

The profile should have:

- read access to Ground Zero;
- an explicit content strategy skill;
- Telegram voice transcription;
- local file and SQLite access;
- web research tools;
- no deployment, payment or external messaging rights;
- no LinkedIn credential in the first phase.

### Storage

Use a private local SQLite database outside canonical Ground Zero notes for operational content data.

Suggested tables:

- `source_events`
- `audience_cohorts`
- `content_candidates`
- `drafts`
- `approvals`
- `publications`
- `metric_snapshots`
- `commercial_events`
- `voice_edits`

Ground Zero remains the source for company truth. Operational drafts, connection exports and performance history should not be pushed into shared canonical notes by default.

### Agent roles

Use one orchestrator with five bounded passes rather than many free-running agents:

1. **Signal scout:** identifies candidate events and external angles.
2. **Strategist:** assigns company, audience and commercial objective.
3. **Voice writer:** produces the draft from retrieved examples.
4. **Skeptic:** rejects weak, generic, unsupported or confidential content.
5. **Analyst:** learns from edits, engagement quality and commercial outcomes.

### Scheduled jobs

After the manual loop works:

- Monday morning: rank the week's best three content opportunities.
- Tuesday and Thursday: prepare one draft for review.
- Daily: scan only approved public sources for relevant market signals.
- After publication: request or ingest performance snapshots at 24 hours, 72 hours and 7 days.
- Friday: send a short commercial review, including what created conversations and what to stop.

Hermes cron jobs run in fresh sessions, so each prompt must include its precise data sources, output format and safety rules. The jobs should deliver to the dedicated Signal Telegram chat.

## Voice learning without fine-tuning

Do not begin with model fine-tuning.

Use retrieval and edit learning:

1. Import Sam's LinkedIn post archive.
2. Select the strongest 20 to 50 representative posts.
3. Store post text, topic, date, format and available metrics.
4. For each new draft, retrieve the most similar examples.
5. Save Sam's final edits as a structured diff.
6. Update voice rules when the same edit pattern repeats.

This is easier to inspect, safer to correct and more useful with a relatively small corpus than a fine-tuned model.

## Two-week validation plan

### Setup

1. Request Sam's LinkedIn data export, especially connections and past shares.
2. Rank 60 commercially relevant property connections, then identify the 15 strongest routes to independent OpenHouse proof.
3. Create a local content database.
4. Import representative past posts and one or two examples Sam considers strongly in his voice.
5. Create the drafting and skeptic prompts.
6. Keep publication manual.

### Four-post experiment

Publish four posts over two weeks:

1. **OpenHouse thesis:** why a homeowner assistant needs exact-home context rather than generic answers.
2. **OpenHouse proof:** one verified product or evaluation insight showing how safer behaviour is built.
3. **OpenHouse market insight:** a specific handover, aftercare or energy-understanding problem that developers already face.
4. **OpenBook proof:** why a local business needs AI-native booking and distribution infrastructure rather than another brochure website.

Each post must name a primary audience cohort and a desired commercial next step before drafting begins.

Alongside the posts, spend two short sessions each week reading priority contacts' posts and adding a useful comment only where Sam has genuine operator-level insight. Do not generate generic comments. This relationship activity may be more commercially valuable than increasing posting frequency.

### Success gate

Continue building automation only if the two-week test produces most of the following:

- at least two qualified commercial conversations, or one credible demo, meeting or warm introduction;
- at least three of four drafts accepted after limited editing;
- average Sam editing time below 15 minutes;
- no factual corrections after publication;
- clear evidence that one or more content themes attract relevant roles.

If the posts get attention but no relevant conversations, fix positioning and conversion before adding automation.

## Post scoring model

Score drafts before Sam sees them:

- commercial relevance: 25 points;
- audience specificity: 20 points;
- factual evidence: 15 points;
- founder credibility: 15 points;
- strength of opening: 10 points;
- usefulness or insight: 10 points;
- voice match: 5 points.

Apply hard rejection for:

- unsupported claims;
- confidential information;
- fake personal stories;
- generic AI commentary;
- mixed company messages;
- performative founder motivation;
- content that exists only to maintain a posting streak.

## Commercial upside

### Immediate

- stronger OpenHouse authority among developer, property and capital relationships;
- more consistent proof distribution without asking Sam to plan content each week;
- a measurable route from product work to warm conversations;
- lower time cost for drafting and reviewing.

### Later

If the system produces repeatable commercial outcomes internally, parts of it could become an OpenBook premium growth service. Do not productize it before the internal proof exists. OpenBook's customer audience and preferred social channels may differ materially from Sam's LinkedIn audience.

## Risks

- LinkedIn API access and analytics permissions can change and may require app review.
- Broad social scraping or automation would create platform and account risk.
- Posting too frequently across unrelated companies could weaken positioning.
- A voice model trained on weak or overly polished drafts would compound the wrong style.
- Vanity metrics can create false confidence if no opportunities follow.
- Sensitive Ground Zero context must never be sent to a publication workflow without a source-level confidentiality check.

## Recommended next action

Do not build a social publishing platform yet.

Run the manual Signal Engine MVP before building a dashboard, LinkedIn integration or multi-agent application:

1. import Sam's LinkedIn export;
2. create the 60-person property map, 15 pilot-path shortlist and voice corpus;
3. connect Telegram voice-note capture to a local content queue;
4. generate the first four commercially targeted drafts;
5. publish manually, add useful comments around priority accounts and measure qualified conversations for two weeks.

Only then decide whether LinkedIn OAuth publishing, analytics ingestion and a dedicated Telegram plugin are worth building.

The 30-day commercial objective is one credible independent OpenHouse pilot opportunity. Supporting targets are five relevant developer conversations and three workflow reviews or discovery calls. These are experiment thresholds, not market benchmarks.

## Sources

- Stanley launch post: https://x.com/jayhoovy/status/2082872226517307471
- Stanley product site: https://www.getstanley.ai/welcome
- Stanley privacy policy: https://www.getstanley.ai/privacy
- Stanley X beta terms: https://www.getstanley.ai/legal/terms-of-service.pdf
- Product Hunt listing: https://www.producthunt.com/products/stanley-ai-head-of-content
- LinkedIn Share on LinkedIn documentation: https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin
- LinkedIn Posts API documentation: https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api
- Hermes cron documentation: https://hermes-agent.nousresearch.com/docs/user-guide/features/cron
- Hermes Telegram documentation: https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram
- Ground Zero: `companies/openhouse-ai.md`, `companies/openbook.md`, `project_state/oh.md`, `project_state/ob.md`, `context/founder-execution-os.md`, `context/openhouse-sales-routes.md`, `people/sam-donworth.md`

## Review (2026-07-31, reviewed by Hermes)

Verdict: approve for canonical integration with the tightening edits below; authorise only the two-week manual MVP, gated on a short setup checklist and a confidentiality guard.

Strengths
- Correct strategic call. Do not clone Stanley. A LinkedIn-first manual system gated behind a commercial success gate is the right scope and matches Sam's preference for grounded, outcome-tied work over vanity metrics.
- Tight alignment with current company state. The 75/25 OpenHouse/OpenBook split and the audience cohorts (Cairn, Glenveagh, Evara, HISCo, LDA, SE Systems, Elkstone, Temporis, Ardcairn, Cork Chamber) match openhouse-sales-routes and the Longview reality.
- Strong confidentiality posture. Skeptic pass, source-level confidentiality check, no LinkedIn credentials in Phase 1, and an operational SQLite DB kept outside the canonical vault.
- Honest evidence handling. Verified vs founder-claimed Stanley claims are clearly separated.

Tighten before implementation
1. Stale input dependency. The "683 connections" figure and the 60-person map depend on a LinkedIn export that has not been requested. Until that export lands, seed the pilot shortlist from the known cohorts in openhouse-sales-routes and the Longview relationships; make the 60-map explicitly conditional on the export.
2. Do not double-count the Bridgewater lead. Carol Tallon's Bridgewater warm introduction is already an active lead (oh-bridgewater-warm-introduction). The 30-day "one credible independent pilot path" should be additional to Bridgewater, and the MVP should be measured against net-new independent paths so it does not take credit for work already in flight.
3. Add a live founder-sensitivity guard. YC application, pending NDRC decision, €0 revenue, and the Longview internal deployment (no written agreement) are all live and sensitive. Content must not contradict the YC/NDRC founder narrative, must not expose unlaunched product details, and must not strain the Longview position (the other two principals see Sam's LinkedIn). Fold these into the skeptic pass checklist.
4. Time realism. The test lives on Sam doing manual publish plus two weekly comment sessions while holding a full-time role and running OpenHouse in evenings. Bound comment activity hard (two 15-minute sessions, only where Sam has genuine operator insight) and treat sub-15-minute editing as the gate, not an aspiration.
5. Voice corpus is a prerequisite, not a step. Setup needs 20 to 50 representative past posts plus one or two Sam considers strongly in-voice. Name this as a blocking prerequisite before drafting begins.

Verification limits
- External Stanley pages and the X launch post could not be re-checked from this environment (web tools unavailable). The brief already labels founder claims (100 beta users, 50 percent engagement, ~$1 token cost) as unverified, so no correction is needed, but the verification should be re-run if the brief is promoted to implementation.
- All cited Ground Zero dependencies were confirmed present: companies/openhouse-ai.md, companies/openbook.md, project_state/oh.md, project_state/ob.md, context/founder-execution-os.md, context/openhouse-sales-routes.md, people/sam-donworth.md.

Recommendation
Integrate into canonical context with the edits above. Authorise the two-week manual MVP only, contingent on Sam (a) requesting the LinkedIn export, (b) supplying the voice corpus, and (c) accepting the confidentiality guard. Do not build the dedicated signal profile, SQLite store, or cron cadence until the manual loop clears the success gate.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/wiki-refiner-2026-08-01]]

