---
title: Phosphen post audit — Karpathy LLM use and graph engineering
kind: brief
status: complete
source: X post, original YouTube transcript, linked X article and primary-source cross-checks
run_date: "2026-08-05"
created_at: "2026-08-05T14:00:00+01:00"
---

# Phosphen post audit — Karpathy LLM use and graph engineering

## Bottom line

The post is useful packaging but unreliable framing. It splices together two separate sources:

1. Andrej Karpathy's **How I use LLMs**, published 27 February 2025, a 2 hour 11 minute practical tour of the 2025 consumer LLM ecosystem.[2]
2. Phosphen's own August 2026 article, **How to Graph Engineering: The Complete Guide**, about Claude Code dynamic workflows and multi-agent execution graphs.[3]

Karpathy did not “just prove” people were using ChatGPT wrong, and his video is not a graph-engineering tutorial. The post republishes a roughly 18-month-old video with its opening cut, then quotes an unrelated newer guide.

## Claim audit

### “The $200 tier found the bug, and Claude, Gemini, Grok and DeepSeek did too for free”

**Partly true, materially embellished.**

At 25:31–29:35, Karpathy tests one gradient-check bug:

- GPT-4o gives generic debugging advice and misses the issue.
- OpenAI o1 Pro, available to him through the $200/month Pro plan, finds the parameter packing/unpacking mismatch.
- Claude 3.5 Sonnet, Gemini, Grok 3 and DeepSeek R1 through Perplexity also find it.

This is one anecdotal task, not a benchmark. The video does not establish that every alternative was free in the configuration Karpathy used. The accurate conclusion is narrower: the expensive OpenAI reasoning model was not uniquely capable, and model/provider diversity can beat upgrading one subscription.

### “Your smartest model confidently lies about anything recent”

**Overstated.**

Karpathy explains that pretrained model knowledge has a cutoff and recommends a search tool for fresh information. He repeatedly warns that search and deep-research reports can still hallucinate and should be treated as a first draft whose citations must be opened and checked. His claim is not that smart models lie about all recent matters. It is that unsupported internal knowledge is the wrong mechanism for current facts.

### “A fresh chat makes the next answer more accurate”

**Conditionally true.**

At 16:23–18:02, Karpathy recommends a new chat when switching topics because irrelevant prior tokens can distract the model, slow generation and slightly reduce performance. He explicitly preserves the opposite condition: if earlier information is relevant to the task, keep it.

The operational lesson is task-scoped context, not indiscriminate context deletion. Durable preferences and decisions should live outside the transient conversation and be deliberately reintroduced when relevant.

### “Build your first loop”

**Not from Karpathy's video.**

That call to action belongs to Phosphen's linked graph-engineering article. The video covers consumer LLM use: model selection, reasoning models, web search, deep research, files, code execution, data analysis, artifacts, coding, voice, images, video, memory, custom instructions and custom GPTs.

## What Karpathy's video actually teaches

### Use the right capability, not merely the biggest model

- Start with a fast standard model for ordinary work.
- Escalate to a reasoning model for difficult maths, code or logic.
- Try a different provider when one model fails; the bug example shows meaningful diversity.
- Know which tools the current model actually has. A model without a calculator or code interpreter may improvise an answer instead of computing it.

### Treat current facts as retrieval problems

- Use web search for recent information.
- Use deep research for broad source collection and comparison.
- Treat the output as a research starting point, not verified truth.
- Open primary sources and confirm that the model represented them correctly.

### Inspect generated code and assumptions

Karpathy's Advanced Data Analysis example silently replaces an unknown 2015 OpenAI valuation with $100 million, then plots it. He calls this “sneaky” and says he would hesitate to recommend such tooling to someone unable to inspect the code. The enduring point is that executable output needs review, not that charts make an answer reliable.

### Keep the context window clean but preserve durable context deliberately

- Start a new conversation when the task changes.
- Keep relevant working context together.
- Use editable memory for durable preferences.
- Use custom instructions for global interaction rules.
- Turn repeated tasks into saved prompts or custom tools with concrete few-shot examples.

## The linked graph-engineering guide

The guide is the newer and more relevant source for Hermes. Its strongest contributions are:

- **Loops and graphs answer different control questions.** In a loop, the agent chooses the next step. In a graph, the operator already knows the broad topology and makes routing explicit.
- **Split work only where context can genuinely be isolated.** Parallel source reading is a good split. Planner, implementer, tester and reviewer roles that need the same context can create coordination overhead.
- **Keep runtime state out of the orchestrator's context when possible.** Pass only the structured result needed by the next node.
- **Separate refuted, survived and unjudged.** Infrastructure failure must not be reported as factual refutation. A 1–1 verifier split after one verifier fails should be unverified, not confirmed.
- **Use a clean, capable judging node.** The producer should not approve its own output. Review lenses such as security, correctness, cost and style should have explicit criteria.
- **Log budget cuts.** If evidence was collected but dropped before verification, “not found” becomes indistinguishable from “not reviewed.”
- **Default to one strong loop.** A graph earns its complexity only when work can parallelise, contexts differ, routing must be auditable, or failures and approvals need explicit handling.

The article's measured numbers, including 105 agents, 5,044,822 subagent tokens and a 36-minute runtime, are the author's own run and should be treated as first-party measurements, not independently reproduced results.[3]

## Primary-source cross-check on the multi-agent claim

Anthropic's own multi-agent research post reports that its Opus-led, Sonnet-subagent system beat a single Opus 4 agent by 90.2% on an internal research evaluation. The same source says token use alone explained 80% of BrowseComp performance variance and that multi-agent systems used about 15 times the tokens of chat interactions.[5]

Therefore Phosphen's caution is fair: the 90.2% result supports that Anthropic's complete system performed better on its internal task, but it does not isolate graph topology as the cause under equal model, token and tool budgets.

Anthropic's earlier architecture guidance also says to find the simplest solution possible and increase complexity only when needed, while defining workflows as predefined code paths and agents as systems that dynamically direct their own process.[4]

## Implications for Sam's system

This is confirmation, not a strategic reset. Ground Zero and Hermes already implement most of the valuable pattern:

- Ground Zero is durable, external context rather than one ever-growing chat.
- Specialist profiles and fresh task sessions provide context isolation.
- Kanban dependencies provide explicit fan-out, fan-in, blocking and terminal states.
- Independent review and fail-closed release rules avoid producer self-approval.
- Tool use is mandatory for arithmetic, current facts, file state and external actions.
- Skills and memory turn repeated interactions into reusable, inspectable instructions.

The worthwhile changes are narrower:

1. Preserve a three-state evidence verdict everywhere: **supported, refuted, unjudged/error**.
2. Record evidence dropped by caps or ranking so absence is not misreported as non-existence.
3. Give judging nodes clean context, a strong model and one explicit review lens.
4. Compare graph runs against a single-agent baseline on quality, cost and human corrections.
5. Collapse any node that does not create independent evidence, genuine parallelism, permission isolation or a meaningful gate.

These points reinforce the existing [[briefs/2026-08-04-graph-engineering-research-and-implementation]] and [[items/ops-graph-engineering-pilot]] rather than creating a second initiative.

## Connected vault notes

- [[briefs/2026-08-04-graph-engineering-research-and-implementation]] — prior evidence and implementation playbook
- [[items/ops-graph-engineering-pilot]] — bounded three-run Hermes pilot
- [[context/founder-execution-os]] — durable context and decision system
- [[context/agentic-value-creation-mission]] — autonomy and value-creation rules
- [[context/llm-wiki-pattern]] — durable external knowledge rather than one chat context
- [[briefs/2026-08-05-personal-assistant-research-codex]] — memory, permissions and task-state implications for the consumer assistant

## Sources

[1] https://x.com/phosphenq/status/2084972797218930708
[2] https://www.youtube.com/watch?v=EWvNQjAaOHw
[3] https://x.com/phosphenq/status/2083991226827567419
[4] https://www.anthropic.com/research/building-effective-agents
[5] https://www.anthropic.com/engineering/built-multi-agent-research-system

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]

