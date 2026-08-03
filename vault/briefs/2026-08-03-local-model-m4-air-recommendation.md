---
title: Best local model for Sam's M4 MacBook Air
checked_at: "2026-08-03"
status: researched-not-installed
owner: Sam Donworth
privacy: private
---

# Best local model for Sam's M4 MacBook Air

## Hardware verified

- MacBook Air `Mac16,12`
- Apple M4, 10 CPU cores
- 16 GB unified memory
- 84 GiB filesystem space currently available
- macOS 26.2
- Ollama 0.20.2 installed; no local models currently installed
- MLX, MLX-LM, llama.cpp Python bindings, Transformers and PyTorch are not installed
- Current memory pressure reported 54% free, with approximately 2.1 GiB swap already used
- No thermal or performance warning recorded

The fanless Air and 16 GB unified memory make a quality 8B–9B quantized model the comfortable class. A 12B Q4 model fits, but leaves less headroom for browsers, Hermes, IDEs and long contexts. Models above roughly 14B total weights require aggressive quantization or swapping and are not the default recommendation.

## Recommendation

### Best comfortable all-round local agent

**DeepReinforce Ornith 1.0 9B, GGUF Q5_K_M**

- Hugging Face: `deepreinforce-ai/Ornith-1.0-9B-GGUF`
- Exact weight file: `ornith-1.0-9b-Q5_K_M.gguf`
- Weight size: 6,467,969,472 bytes, approximately 6.47 GB decimal
- License: MIT
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

No model was downloaded during this research.

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
