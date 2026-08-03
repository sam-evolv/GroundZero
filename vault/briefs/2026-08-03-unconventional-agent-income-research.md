---
title: Unconventional agent-income research
checked_at: "2026-08-03T15:05:00+01:00"
status: research-complete-pending-independent-challenge
owner: Sam Donworth
privacy: private
---

# Unconventional agent-income research

## Question

Can Sam use Hermes-style agents or AI to produce meaningful, globally transactable income without generic website work, an agency sales motion, public LinkedIn activity, daytime meetings, or low-paid hourly task work?

## Candid answer

Yes, but not through an effortless autonomous-money loop. The public evidence strongly rejects that framing. The clearest low-cash route is to place a narrowly useful machine capability inside a marketplace where buyers already pay per result, rather than build another standalone SaaS and then search for distribution.

The strongest bounded experiment found is an **Apify Store replacement Actor**: identify an existing paid automation with proven usage but poor reliability, build a materially better drop-in alternative, and charge per successful result. The first candidate is Google Trends data and alerts.

This is a test, not an income claim.

## Research access and limitations

- Reddit's direct public API returned `403`, so current Reddit threads and comments were inspected through Brave's indexed public search results. These are public anecdotes, not audited accounts.
- X's official API was configured but returned `402 credits depleted`. No credits were purchased. X claims were not treated as evidence.
- Substack's live search was inspected in an isolated browser. Results were dominated by broad promises such as “How to Build AI Agents That Generate Revenue” and “These 9 AI Businesses Will Make You $1M.” These titles were treated as marketing, not proof.
- Hacker News stories were collected through the public Algolia API.
- Apify mechanics, pricing, usage, ratings and run statistics were inspected from Apify's official documentation, pricing page and public Actor API.

## What the social evidence actually says

### Repeated negative signal

Across indexed Reddit discussions, people repeatedly asked whether anyone was making money from agents at all. High-voted answers warned that:

- visible revenue claims often lead to courses, communities or tools;
- generic flows are copied quickly and race to the bottom;
- the profitable work is usually boring, deeply integrated, human-backed and outcome-specific;
- building is now easier than distribution;
- many autonomous-agent demos have little evidence of paying demand.

One indexed answer from a technology executive said they saw only a few profitable deployments, generally combining traditional software, LLMs and human backstops. This is anecdotal but consistent with the broader corpus.

### Specific but self-reported positive examples

- A developer associated with paid.ai described a PDF extraction agent sold at **$0.10 per processed document**, illustrating usage-metered outcomes rather than subscriptions for “an agent.” This is a Reddit claim, not independently audited revenue.
- PhoneScreen AI described charging per completed voice screening and claimed several thousand completed screens. The product and usage model are public; the revenue amount is not independently verified.
- One commenter claimed monthly revenue from a non-profit grant-application agent. No independently verifiable amount was supplied.
- Other contributors described custom workflow automation at $800–$2,000 per project and recurring “AI employee” support. Those require client acquisition and are outside Sam's preferred operating constraints.

The transferable pattern is not the quoted income. It is **metering a narrow completed task that has obvious buyer value**.

## Ranked models

### 1. Marketplace replacement Actor

**Verdict:** Best first experiment.

Do not invent a product category. Find a paid marketplace tool with existing users, visible dissatisfaction or failures, and a task that can be rebuilt legally and reliably.

Apify Store officially supports paid web-scraping, automation and AI-agent Actors. It supports pay-per-event pricing, pays the developer 80% of revenue before any developer-borne platform usage costs, handles customer billing, and can expose eligible Actors to other agents through x402 and Skyfire. Apify's current free plan is $0, includes $5 of monthly platform/Store usage and requires no credit card.

Payouts are not frictionless. The publisher must provide billing details, complete KYC and supply tax documentation when requested. The documented minimum payout is $20 through PayPal or Wise and $100 through other methods; sub-threshold balances roll forward. Irish payout eligibility was not explicitly confirmed in the public documentation and must be checked before publication.

#### First candidate: Google Trends Reliability Actor

Official public Actor data checked on 3 August 2026:

- Existing Actor: `apify/google-trends-scraper`
- Total users: **11,428**
- Users in the previous 30 days: **1,110**
- Runs in the previous 30 days: **21,692**
- Failed or timed-out runs: **4,747**, or **21.9%**
- Rating: **3.1166/5** from 31 reviews
- Current free-tier event price: **$0.003 per result**

This is actual evidence of platform demand and visible dissatisfaction. It is not evidence that a new entrant will receive traffic or profit.

#### Wedge

A reliable Google Trends Actor with:

- retries and clear partial-failure receipts;
- country, category, timeframe and comparison support;
- normalized output with timestamps;
- change-only watch mode;
- optional brief or alert event;
- deterministic tests against known fixtures;
- transparent success-rate reporting.

The product is a callable result, not a dashboard or website.

#### Cheapest falsification test

1. Build a local Actor-compatible spike without publishing it.
2. Run 100 test cases across countries, categories, timeframes and comparison queries.
3. Compare output completeness and failure rate with the incumbent on the same cases.
4. Stop if success is below 98%, source access is legally or technically unsuitable, or reliable maintenance requires expensive proxies.
5. If it passes, use only the included Apify free credits for Store validation.
6. Do not buy promotion, proxies, courses or a paid Apify plan before the first external run.

Apify permits competing Actors but forbids copying another publisher's code or listing. It also requires ongoing maintenance, can pause remuneration for a faulty Actor, and requires urgent reported issues to be addressed within three business days. The spike must therefore test not only whether the Actor can run, but whether it can be maintained alongside full-time work.

### 2. Agent-callable evidence receipts

**Verdict:** Strong skill fit, weaker demand proof.

Publish a pay-per-event Actor that accepts a public URL and claim, then returns:

- exact quoted source passages;
- source date and retrieval time;
- contradiction and staleness flags;
- screenshot or content hash;
- a machine-readable evidence receipt.

This aligns with Sam's demonstrated evidence and release auditing. Apify's agentic-payment mechanism means other agents could discover and pay for the capability. However, current willingness to pay for this exact result is not proven. Build only after the marketplace experiment establishes that Sam can ship and operate an Actor.

### 3. Raw-data utility with paid intelligence add-on

**Verdict:** Plausible if attached to proven raw-data demand.

Apify shows strong demand for raw utilities rather than speculative “insight” wrappers:

- a leading App Store review scraper had 1,647 total users, 295 30-day users and 21,797 30-day runs;
- a YouTube transcript scraper had 22,168 total users, 2,975 30-day users and 392,380 30-day runs;
- by contrast, newly published pain-point, tender-fit and policy-monitoring Actors commonly showed only one to three users.

The smart version is therefore not “AI app-review consultant.” It is a dependable raw actor with an optional paid event for summarization, pain-point clustering, sponsor signals or evidence extraction. Raw output remains the primary paid event.

### 4. Success-fee recovery agent

**Verdict:** Economically clever, not the first build.

An agent prepares consumer evidence packs for a narrow recoverable claim such as warranty disputes, price-drop refunds, travel compensation or chargebacks. The user pays a fixed fee or percentage only when money is recovered.

This ties price to cash returned rather than hours. It also introduces legal-positioning, privacy, document-security, trust, regulated-claims and customer-support burdens. It requires a proven acquisition channel and should not be started during the OpenHouse proof week.

### 5. Distressed digital-asset operator

**Verdict:** Watchlist only.

Instead of building from zero, acquire a small neglected Actor, browser extension, API or content/data asset with existing usage, then use agents for support, reliability, documentation and monetization. This avoids the zero-distribution problem but introduces capital, fraud, platform-transfer and due-diligence risk. Do not spend until a specific asset's revenue is independently verified.

## Models rejected

- Generic AI automation agency
- Website production
- Faceless content farms
- Prompt packs and generic templates
- AI influencer channels
- GPT wrappers without proprietary demand or data
- Paid communities teaching agent income
- Broad AI newsletters without an existing audience
- Low-paid evaluation work presented as entrepreneurship
- Building many low-quality marketplace Actors and hoping one catches traffic

The Apify Store data itself shows why the last item is weak: many recent “intelligence” Actors have only one to three users. Marketplace presence helps distribution but does not create value automatically.

## Recommended decision

Run one **no-spend technical falsification spike** for the Google Trends Reliability Actor after the current OpenHouse proof-week priorities. Do not create a company, brand, landing page, content strategy or paid plan. If the agent cannot materially beat the incumbent's reliability with compliant, maintainable access, kill it immediately and move to the next marketplace gap.

## Sources

- [Apify monetization documentation](https://docs.apify.com/actors/publishing/monetize)
- [Apify pricing](https://apify.com/pricing)
- [Apify payout documentation](https://docs.apify.com/actors/publishing/monetize/monthly-payouts)
- [Apify Store publishing terms](https://docs.apify.com/legal/store-publishing-terms-and-conditions)
- [Apify Google Trends Actor](https://apify.com/apify/google-trends-scraper)
- [Apify public Actor API](https://api.apify.com/v2/acts/apify~google-trends-scraper)
- [Apify App Store Reviews Actor API](https://api.apify.com/v2/acts/thewolves~appstore-reviews-scraper)
- [Apify YouTube Transcript Actor API](https://api.apify.com/v2/acts/pintostudio~youtube-transcript-scraper)
- [PhoneScreen AI](https://phonescreen.ai)
- [Reddit: agents making real money are ugly](https://www.reddit.com/r/AI_Agents/comments/1r9rnt2/i_have_built_automations_for_a_dozen_startups/)
- [Reddit: monetizing built agents](https://www.reddit.com/r/AI_Agents/comments/1jjt4vu/who_here_has_created_an_agent_that_makes_them/)
- [Reddit: confusion about agentic automation income](https://www.reddit.com/r/AI_Agents/comments/1q2e8ht/im_very_confused_are_people_actually_making_money/)
- [Hacker News Algolia API](https://hn.algolia.com/api)

## Connected notes

- [[briefs/2026-08-03-bank-holiday-founder-reset]]
- [[briefs/2026-08-03-live-agentic-income-and-job-screen]]
- [[items/agentic-income-evidence-sprint]]
- [[decisions/2026-08-03-day-job-bonus-and-openhouse-gates]]
- [[context/agentic-value-creation-mission]]
- [[people/sam-donworth]]
