"use client";

import { useState, useTransition } from "react";
import { runCouncilNow, runLaunchLoopNow } from "@/app/actions";

export function HermesControls() {
  const [focus, setFocus] = useState("");
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function runCouncil() {
    startTransition(async () => {
      setMessage(null);
      try {
        const result = await runCouncilNow(focus.trim() || undefined);
        if (!result.ok) {
          setMessage(result.error);
          return;
        }
        const label = result.mode === "dry-run" ? "Dry run" : "Council";
        const count = `${result.itemsWritten} item${result.itemsWritten === 1 ? "" : "s"}`;
        setMessage(`${label}: ${count} added to the brief.`);
        setFocus("");
      } catch {
        setMessage("The council could not run. Check the server logs.");
      }
    });
  }

  function runLaunchLoop() {
    startTransition(async () => {
      setMessage(null);
      try {
        const result = await runLaunchLoopNow(focus.trim() || undefined);
        if (!result.ok) {
          setMessage(result.error);
          return;
        }
        const label = result.mode === "dry-run" ? "Dry run" : "Launch loop";
        setMessage(`${label}: ${result.title} saved to the vault.`);
        setFocus("");
      } catch {
        setMessage("The launch loop could not run. Check the server logs.");
      }
    });
  }

  return (
    <section className="rounded-card border border-hairline bg-surface p-4">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
          Council
        </span>
        <span className="text-[12px] text-muted">Convene the office on demand</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <input
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !pending) runCouncil();
          }}
          placeholder="Focus a council run or launch loop (optional)"
          disabled={pending}
          className="min-w-0 flex-1 rounded-full border border-hairline bg-bg px-4 py-2 text-[13px] text-ink outline-none placeholder:text-muted focus:border-gold disabled:opacity-50"
        />
        <button
          type="button"
          onClick={runCouncil}
          disabled={pending}
          className="shrink-0 rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-bg transition-opacity disabled:opacity-50"
        >
          {pending ? "Running" : "Run council"}
        </button>
        <button
          type="button"
          onClick={runLaunchLoop}
          disabled={pending}
          className="shrink-0 rounded-full border border-hairline bg-bg px-4 py-2 text-[13px] font-medium text-ink transition-opacity disabled:opacity-50"
        >
          {pending ? "Running" : "Run launch loop"}
        </button>
      </div>

      {message && <p className="mt-2 text-[12.5px] text-muted">{message}</p>}
    </section>
  );
}
