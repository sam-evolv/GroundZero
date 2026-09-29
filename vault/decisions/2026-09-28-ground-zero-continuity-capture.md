---
kind: decision
id: ground-zero-continuity-capture-2026-09-28
title: Capture meaningful task outcomes and context in Ground Zero
date: "2026-09-28"
status: active
---

# Ground Zero continuity capture

## Decision

On 28 September 2026, Sam authorized agents working with him to update Ground Zero after a task, or when a material fact, preference, decision, priority, requirement, correction, or handoff emerges. Agents may query Ground Zero for relevant context. The aim is shared continuity across agents and sessions.

## Operating rule

- When a Sam-specific answer is unknown or uncertain, check the relevant Ground Zero notes before querying other sources or guessing. Read the canonical entry points before context-dependent work. Check live sources or completed receipts where current operational state needs verification.
- Record durable outcomes in the appropriate vault note: project progress in `project_state/`, decisions in `decisions/`, active work in `items/`, stable personal or company facts in `people/` or `companies/`, and temporary uncategorized capture in `capture/inbox.md`.
- Capture only material changes and useful handoffs. Keep updates concise, dated, sourced, and clear about verified state, inference, blockers, and next action. Avoid duplicate task-by-task noise.
- Preserve prior history and corrections. Do not turn an unverified plan or test into a completion claim.
- Do not store secrets. This decision authorizes relevant vault updates; it does not authorize committing, pushing, syncing, publishing, sharing private vault data, or unrelated external actions.

## Context

Sam stated this instruction in the Codex task on 28 September 2026, following his Ground Zero context protocol. This extends the earlier canonical-source decision with explicit standing authorization for relevant updates.

Sam clarified in the same task that relevant information should be written into Obsidian and that agents should check the vault first when they do not know a Sam-specific answer.

## 28 September 2026 clarification

- **Source:** Sam's direct instruction in the current Codex task. **Verified:** the Ground Zero vault connector is available in this chat and the canonical repository path is accessible; this is an access check, not proof of any sync to other agents.
- Use the Ground Zero app only when its connector is actually present in the chat. For context-dependent questions, verify access and read the available protocol, `vault/context/index.md`, `vault/context/model-pack.md`, then only relevant notes. If access is unavailable, say so and do not guess from chat memory.
- Verify current operational facts against live sources or completed task receipts. Sam's current corrections take priority over older notes.
- After meaningful work or a material fact, decision, correction, or handoff, update the appropriate note when write access exists. Include date, source, verified status, gaps, and next action, then read the edit back. If access is read-only, show the proposed update and state that it was not saved.
- **Observed write in this Codex chat, 28 September 2026:** the connected `ground-zero-vault` app successfully edited this decision note, and a subsequent app read returned the new text. **Source:** the completed edit and readback in this task. **Verified status:** app-mediated write and readback work for this session; filesystem presence alone was not used as proof of write access.
- **Gaps:** no commit, push, sync, or cross-agent readback has been performed or verified. Connector availability and permissions can differ in future chats. **Next action:** check the connector at the start of each context-dependent task, use the relevant notes, and verify any later sync separately before treating a local edit as shared.

## Connected notes

- [[decisions/ground-zero-canonical]]
- [[context/index]]
- [[people/sam-donworth]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-09-28-cross-agent-ground-zero-continuity-proposal]]
- [[context/cross-agent-ground-zero-prompts]]
- [[context/index]]
- [[people/sam-donworth]]

