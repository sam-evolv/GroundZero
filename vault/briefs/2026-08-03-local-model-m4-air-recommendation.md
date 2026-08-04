---
title: Best local model for Sam's M4 MacBook Air
checked_at: "2026-08-03"
status: installed-and-synthetic-pilot-passed
owner: Sam Donworth
privacy: private
---

# Best local model for Sam's M4 MacBook Air

## Verified completion, 2026-08-03

- Ornith 1.0 9B Q5_K_M is installed locally as `ornith-local:q5`, bound through Ollama only on `127.0.0.1:11434`, with 8K context and immediate unload after structured proposal generation.
- The exact GGUF is 6,467,969,472 bytes with SHA-256 `d1b36095636c096b04ea09e798a7a378956f2fa9099340bd54add1954aaf149c`.
- Short measured generation was approximately 12.8 to 13.0 tokens per second. The model occupies about 6.1 GB when loaded and uses the GPU. No short-run thermal warning appeared.
- The dedicated Colima evaluator uses the digest-pinned image `python@sha256:57cd7c3a7a273101a6485ba99423ee568157882804b1124b4dd04266317710de`.
- A real seven-probe containment matrix passed for non-root identity, no inherited canary secret, no host home or Docker socket, read-only mounts and root, no network, CPU/RAM/swap/PID cgroups, no-exec temporary storage, PID exhaustion, wall-time, output and file-size limits.
- The first synthetic OpenHouse retrieval campaign improved its held-out metric from `0.666667` to `1.000000`, reproduced the result in a fresh disposable container and committed only the allowlisted weight change. Two later non-improving proposals reverted automatically to the accepted commit.
- The evaluator guard now parses the editable Python artefact as AST without importing it, rejecting executable metric-forgery additions outside the literal weight dictionary.
- This is mechanics evidence only. No production OpenHouse code, customer data, credentials, push, merge, migration or deployment was involved.

See [[project_state/oh]] and [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]].

## Hardware verified

- MacBook Air `Mac16,12`
- Apple M4, 10 CPU cores
- 16 GB unified memory
- 84 GiB filesystem space currently available
- macOS 26.2
- Ollama 0.32.5 installed; verified local model `ornith-local:q5` available
- MLX, MLX-LM, llama.cpp Python bindings, Transformers and PyTorch are not installed
- Current memory pressure reported 54% free, with approximately 2.1 GiB swap already used
- No thermal or performance warning recorded

The fanless Air and 16 GB unified memory make a quality 8B–9B quantized model the comfortable class. A 12B Q4 model fits, but leaves less headroom for browsers, Hermes, IDEs and long contexts. Models above roughly 14B total weights require aggressive quantization or swapping and are not the default recommendation.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[project_state/oh]]

## Recommendation

### Best comfortable all-round local agent

**DeepReinforce Ornith 1.0 9B, GGUF Q5_K_M**

- Hugging Face: `deepreinforce-ai/Ornith-1.0-9B-GGUF`
- Exact weight file: `ornith-1.0-9b-Q5_K_M.gguf`
- Weight size: 6,467,969,472 bytes, approximately 6.47 GB decimal
- Repository metadata and README state MIT, but the linked licence file returned 404 and no licence or notice file was found. Private evaluation is reasonable; redistribution or commercial embedding requires clarification.
- Hugging Face usage at check: approximately 4.8 million downloads and 602 likes
- Designed for agentic coding, tool use and OpenAI-compatible serving
- The publisher documents direct integration with Hermes, Ollama and llama.cpp

Why Q5_K_M: it preserves more quality than Q4 while still leaving reasonable headroom on 16 GB. The weights are approximately 6.02 GiB. From the published architecture, an FP16 KV cache is approximately 1.0 GiB at 8K context, 2.0 GiB at 16K and 4.0 GiB at 32K, before runtime overhead. Use 8K as the normal responsive setting; 16K is reasonable when memory-heavy applications are closed. Do not use the advertised 262K maximum on this machine.

Suggested Ollama profile:

```text
FROM hf.co/deepreinforce-ai/Ornith-1.0-9B-GGUF:Q5_K_M
PARAMETER num_ctx 8192
PARAMETER temperature 0.6
PARAMETER top_p 0.95
PARAMETER top_k 20
```

Create and run:

```bash
ollama create ornith-local -f Modelfile
ollama run ornith-local
```

The verified Q5_K_M model was subsequently downloaded and imported as recorded in the completion checkpoint above.

## Alternatives

### Best quality and multimodal model that still fits

**Google Gemma 4 12B Instruct QAT Q4_0**

- Official Hugging Face repo: `google/gemma-4-12B-it-qat-q4_0-gguf`
- Main GGUF: 6,975,879,296 bytes
- Multimodal projector: 175,115,616 bytes
- Apache 2.0
- Text, image and audio input; configurable reasoning; native function calling
- Up to 256K advertised context, but use 8K–16K on this Mac
- Google says QAT Q4 preserves quality similar to bfloat16 while reducing memory
- Vendor-reported Gemma 4 12B results include 77.2% MMLU-Pro, 77.5% AIME 2026 without tools and 72.0% LiveCodeBench v6

This is the higher-capability general and multimodal option, but its dense 12B compute is slower and more thermally demanding on a fanless Air. Its FP16 KV cache is approximately 3.0 GiB at only 8K context and 6.0 GiB at 16K, in addition to roughly 6.50 GiB of weights and runtime overhead. Prefer it when image/audio understanding matters, run it around 4K–8K context, and close memory-heavy applications; it is not the quiet always-on background worker.

### Best conservative always-on business/RAG model

**IBM Granite 4.1 8B Q4_K_M**

- Official/compatible GGUF: `ibm-granite/granite-4.1-8b-GGUF`
- Q4_K_M size: 5,347,914,400 bytes
- Apache 2.0
- Strong official support for extraction, classification, summarization, RAG, multilingual dialogue, code and function calling

This is the lowest-risk operational model for local document pipelines and structured tool use, but Ornith is the stronger first choice for coding and agent work.

### Experimental option, not recommended first

`Qwen3.6-14B-A3B-FableVibes-GGUF` has 14B total and approximately 3B active parameters. Its Q3_K_M is 6.77 GB and Q4_K_M is 8.47 GB. It may be fast because of the MoE architecture, but it is a community tune rather than an official Qwen release, and current MLX/GGUF support is less established. Do not make it the trusted default.

## Models to avoid on this Mac

- DeepSeek V4, Kimi K3 and other very-large MoE models: active parameters may be small, but all quantized expert weights still need memory/disk bandwidth.
- Dense 27B–35B Q4 models: likely to consume most unified memory and trigger swap.
- 1-bit or 2-bit 27B experimental quants as a default: they fit by sacrificing quality and ecosystem certainty.
- Any advertised 128K–256K context as the normal setting: theoretical context is not a comfortable 16 GB operating point.

## High-value local use cases

1. **Private coding sidecar**
   - inspect repositories;
   - write contained patches and tests;
   - explain failures;
   - generate migrations or scripts for later independent review;
   - keep proprietary code local.

2. **Hermes local fallback or worker**
   - route low-risk mechanical subtasks to Ornith;
   - preserve cloud models for strategy, difficult reasoning and high-stakes review;
   - run tool calls through a tightly scoped local OpenAI-compatible endpoint.

3. **Private Ground Zero RAG**
   - answer questions across the Obsidian vault without uploading notes;
   - generate backlinks, tags, summaries and stale-note suggestions;
   - pair with a local embedding model and source citations.

4. **Document extraction and evidence ledgers**
   - transform planning documents, manuals, PDFs and public reports into structured JSON/CSV;
   - extract claims, dates, entities and exact passages;
   - flag contradictions for human verification.

5. **Voice and meeting pipeline**
   - combine local Whisper transcription with the local model;
   - clean voice reflections;
   - create private workout logs, meeting summaries and decision notes;
   - keep raw audio and transcripts on-device.

6. **Background monitoring and triage**
   - classify cron outputs, repository changes, opportunity feeds and alerts;
   - summarize only material changes;
   - produce local first-pass decisions without cloud token cost.

7. **Drafting and transformation**
   - produce email/message drafts, structured briefs, checklists and data transformations;
   - rewrite text into Sam's natural style;
   - require review before important external communication.

8. **Multimodal local analysis with Gemma 4**
   - inspect screenshots, scanned documents, diagrams and audio;
   - generate source-grounded descriptions;
   - use when privacy outweighs the extra latency.

## Is it worth using for continuous OpenHouse improvement?

### Verdict

**Yes as a constrained experiment engine and cheap private worker. No as an unsupervised agent that edits the whole product forever.**

The likely reference is Andrej Karpathy's [`autoresearch`](https://github.com/karpathy/autoresearch). It is not a model mysteriously rewriting its own intelligence. An agent edits one allowed file, runs a fixed five-minute experiment against one immutable metric, keeps an improvement or reverts it, logs the result, and repeats. Karpathy's original requires an NVIDIA GPU; [`autoresearch-mlx`](https://github.com/trevin-creator/autoresearch-mlx) ports the training experiment to Apple Silicon. Its published loop takes roughly six to seven minutes per experiment and warns that single-run gains can be noise, so replicated evaluation matters.

That design works because the editable surface, time budget and metric are exceptionally narrow. Applying the slogan to all of OpenHouse would create metric gaming, code churn and security regressions. The valuable transferable pattern is **propose → modify → verify → keep/revert → log**, not “let an agent improve everything forever.”

### What it would improve

A local model would not improve GPT-5.6's underlying weights or reasoning. It could improve the surrounding workflow by:

- making hundreds of cheap private first-pass hypotheses;
- running bounded code/test/retrieval experiments without cloud-token pressure;
- preserving failed experiments so GPT-5.6 does not repeat them;
- producing a nightly evidence summary for GPT-5.6;
- promoting only the few candidates that beat an immutable evaluation;
- keeping proprietary OpenHouse context on-device.

The best architecture is hybrid: GPT-5.6 defines the objective, constraints and review standard; the local model performs repetitive search; deterministic tests and held-out evidence score it; GPT-5.6 independently reviews only the survivors.

### Best first OpenHouse loop

Start with **offline retrieval and answer-grounding optimisation**, not the UI or whole repository.

- Work only in an isolated V2 worktree.
- Freeze current-live/My Home boundaries and production aliases.
- Permit changes only to an explicit retrieval/reranking/prompt allowlist.
- Make tenant guards, auth, migrations, fixtures, source documents and evaluator immutable.
- Build a held-out set from verified property questions, expected facts and expected source passages. Existing question counts are useful raw material but are not yet a certified answer-quality benchmark.
- Score retrieval recall, exact factual correctness, citation correctness, unsupported-claim rate, latency and cost separately.
- Run fixed-budget experiments; revert losers automatically.
- Replicate marginal wins to distinguish improvement from noise.
- Require typecheck, focused regression tests, build, boundary guard and independent cloud review before any candidate is considered.
- Never allow the loop to push, deploy, migrate, change Vercel, touch production data or certify itself.

A second useful loop could generate adversarial tenant/auth and routing test cases, but the local model must not be the sole judge of whether the security behavior is correct.

### Mac operating reality

The Mac is currently on AC power and configured not to system-sleep on AC, so multi-hour background processes are technically possible. However:

- the M4 Air is fanless and sustained inference can thermally throttle;
- 16 GB unified memory is shared by Ollama, Next.js builds, browsers and the OS;
- the Mac already reports approximately 2.1 GiB of swap used;
- loading a 9B Q5 model while running a full Next build can create memory pressure;
- long agent context is not durable memory; git commits, an experiment ledger and immutable evaluations must carry state across iterations.

For an overnight controller, use Ornith Q4_K_M or Q5_K_M at 4K–8K context and run expensive builds/evaluations sequentially. Unload Ollama between phases when necessary. Prefer bounded six-to-eight-hour campaigns with explicit checkpoints over a literal permanent loop. A dedicated Mac mini or remote worker is better if this becomes a 24/7 service.

Hermes cron is suited to short checks, not the core multi-hour experiment process. A durable background process, isolated Kanban worker or separate Hermes instance should own the campaign, heartbeat periodically, record every experiment and stop on repeated failures, thermal/memory pressure, disk limits or lack of measurable progress.

### Decision gate

Installing a local model is worth doing if the first pilot is treated as infrastructure validation:

1. Download Ornith Q4_K_M or Q5_K_M.
2. Benchmark generation speed, memory pressure and thermals on this Mac.
3. Give it one read-only OpenHouse repository task and compare its output with GPT-5.6.
4. Run a five-to-ten-iteration offline retrieval experiment with immutable tests.
5. Continue only if it produces at least one independently verified improvement without destabilising the Mac or increasing review burden.

If it mainly creates plausible-looking patches that GPT-5.6 must repair, stop. The objective is not more autonomous activity; it is more verified progress per euro and per hour of Sam's attention.

## Boundaries

A 9B local model will not match the current frontier cloud model on difficult strategy, long-horizon autonomy or high-stakes release judgment. Do not use it as the sole authority for:

- OpenHouse production changes;
- legal, tax, financial or safety decisions;
- factual current-world research without connected sources;
- large unsupervised code changes;
- final evidence certification.

Use it as a private, cheap, fast worker with tools and verification, not as an unreviewed decision-maker.

## Sources

- [Ornith 1.0 9B GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)
- [Ornith 1.0 9B model card](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)
- [Gemma 4 12B QAT Q4 GGUF](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)
- [Granite 4.1 8B](https://huggingface.co/ibm-granite/granite-4.1-8b)
- [Granite 4.1 8B GGUF](https://huggingface.co/ibm-granite/granite-4.1-8b-GGUF)

## Connected notes

- [[context/agentic-value-creation-mission]]
- [[people/sam-donworth]]
- [[briefs/2026-08-03-autonomous-eur100-experiment-charter]]
