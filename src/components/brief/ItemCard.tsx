"use client";

import { useOptimistic, useState, useTransition } from "react";
import type { Company, Item, ItemState } from "@/lib/vault/types";
import { Tag } from "@/components/ui/Tag";
import { StatePill } from "@/components/ui/StatePill";
import { approveItem, discussItem, rejectItem, snoozeItem } from "@/app/actions";

const REJECT_REASONS = ["Too risky", "Too costly", "Not now", "Not interested"];

type Mode = "idle" | "reject" | "discuss";

export function ItemCard({
  item,
  company,
  highlight = false,
}: {
  item: Item;
  company?: Company;
  highlight?: boolean;
}) {
  const [state, setState] = useOptimistic(item.state, (_, next: ItemState) => next);
  const [isPending, startTransition] = useTransition();
  const [mode, setMode] = useState<Mode>("idle");
  const [note, setNote] = useState("");
  const [flash, setFlash] = useState<string | null>(null);

  function runState(next: ItemState, action: () => Promise<void>) {
    startTransition(async () => {
      setState(next);
      try {
        await action();
      } catch {
        // Revalidation reconciles the optimistic state if the write failed.
      }
      setMode("idle");
    });
  }

  function sendNote() {
    const text = note.trim();
    if (!text) return;
    startTransition(async () => {
      try {
        await discussItem(item.id, text);
      } catch {
        // Ignore; the note simply did not persist.
      }
      setNote("");
      setMode("idle");
      setFlash("Noted");
      setTimeout(() => setFlash(null), 2200);
    });
  }

  return (
    <article
      className={`rounded-card bg-surface p-5 ${
        highlight ? "border-[1.5px] border-gold" : "border border-hairline"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {company && <Tag tone="ink">{company.short ?? company.name}</Tag>}
          {item.domain && <Tag>{capitalize(item.domain)}</Tag>}
        </div>
        <StatePill state={state} />
      </div>

      <h3 className="mt-3.5 text-[17px] font-medium leading-snug text-ink">{item.title}</h3>
      {item.rationale && (
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{item.rationale}</p>
      )}

      {item.councilNote && (
        <div className="mt-3.5 flex items-center gap-2 border-t border-hairline pt-3.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
            Council
          </span>
          <span className="text-[12.5px] text-muted">{item.councilNote}</span>
        </div>
      )}

      <div className="pt-3.5" aria-busy={isPending}>
        <Actions
          state={state}
          mode={mode}
          note={note}
          flash={flash}
          pending={isPending}
          prUrl={item.prUrl}
          onApprove={() => runState("approved", () => approveItem(item.id))}
          onSnooze={() => runState("snoozed", () => snoozeItem(item.id))}
          onReject={(reason) => runState("rejected", () => rejectItem(item.id, reason))}
          onSetMode={setMode}
          onNote={setNote}
          onSendNote={sendNote}
        />
      </div>
    </article>
  );
}

function Actions({
  state,
  mode,
  note,
  flash,
  pending,
  prUrl,
  onApprove,
  onSnooze,
  onReject,
  onSetMode,
  onNote,
  onSendNote,
}: {
  state: ItemState;
  mode: Mode;
  note: string;
  flash: string | null;
  pending: boolean;
  prUrl?: string;
  onApprove: () => void;
  onSnooze: () => void;
  onReject: (reason: string) => void;
  onSetMode: (mode: Mode) => void;
  onNote: (note: string) => void;
  onSendNote: () => void;
}) {
  if (flash) {
    return <p className="text-[12.5px] text-muted">{flash}</p>;
  }

  if (mode === "reject") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {REJECT_REASONS.map((reason) => (
          <Secondary key={reason} disabled={pending} onClick={() => onReject(reason)}>
            {reason}
          </Secondary>
        ))}
        <Ghost disabled={pending} onClick={() => onSetMode("idle")}>
          Cancel
        </Ghost>
      </div>
    );
  }

  if (mode === "discuss") {
    return (
      <div className="flex items-center gap-2">
        <input
          autoFocus
          value={note}
          onChange={(e) => onNote(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSendNote();
          }}
          placeholder="Add a note for the council"
          className="min-w-0 flex-1 rounded-full border border-hairline bg-bg px-4 py-2 text-[13px] text-ink outline-none placeholder:text-muted focus:border-gold"
        />
        <Primary disabled={pending} onClick={onSendNote}>
          Send
        </Primary>
        <Ghost disabled={pending} onClick={() => onSetMode("idle")}>
          Cancel
        </Ghost>
      </div>
    );
  }

  if (state === "pr_ready") {
    return (
      <div className="flex flex-wrap gap-2">
        {prUrl ? (
          <a
            href={prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-bg"
          >
            Review PR
          </a>
        ) : (
          <Primary disabled>Review PR</Primary>
        )}
        <Secondary disabled={pending} onClick={() => onSetMode("discuss")}>
          Discuss
        </Secondary>
      </div>
    );
  }

  if (state === "building") {
    return (
      <div className="flex flex-wrap gap-2">
        {prUrl ? (
          <a
            href={prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-hairline px-4 py-2 text-[13px] text-ink/80 transition-colors hover:bg-white/[0.03]"
          >
            View
          </a>
        ) : (
          <Secondary disabled>View</Secondary>
        )}
      </div>
    );
  }

  if (state === "proposed") {
    return (
      <div className="flex flex-wrap gap-2">
        <Primary disabled={pending} onClick={onApprove}>
          Approve
        </Primary>
        <Secondary disabled={pending} onClick={() => onSetMode("reject")}>
          Reject
        </Secondary>
        <Secondary disabled={pending} onClick={() => onSetMode("discuss")}>
          Discuss
        </Secondary>
        <Secondary disabled={pending} onClick={onSnooze}>
          Snooze
        </Secondary>
      </div>
    );
  }

  return null;
}

function Primary({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-bg transition-opacity disabled:opacity-50"
    >
      {children}
    </button>
  );
}

function Secondary({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full border border-hairline px-4 py-2 text-[13px] text-ink/80 transition-colors hover:bg-white/[0.03] disabled:opacity-50"
    >
      {children}
    </button>
  );
}

function Ghost({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full px-3 py-2 text-[13px] text-muted transition-colors hover:text-ink disabled:opacity-50"
    >
      {children}
    </button>
  );
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
