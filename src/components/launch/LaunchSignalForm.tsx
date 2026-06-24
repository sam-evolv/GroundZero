"use client";

import { useState, useTransition } from "react";
import { recordLaunchSignalNow } from "@/app/actions";
import type { LaunchBrief } from "@/lib/vault/types";

const SIGNAL_TYPES = ["reply", "call booked", "pilot", "objection", "ignored", "revenue"] as const;

export function LaunchSignalForm({ launch }: { launch: LaunchBrief }) {
  const [signalType, setSignalType] = useState<(typeof SIGNAL_TYPES)[number]>("reply");
  const [note, setNote] = useState("");
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function submit() {
    startTransition(async () => {
      setMessage(null);
      const result = await recordLaunchSignalNow({
        launchId: launch.id,
        companyId: launch.companyId,
        signalType,
        note: note.trim(),
      });
      if (!result.ok) {
        setMessage(result.error);
        return;
      }
      setMessage(`Saved ${signalType} signal to the vault.`);
      setNote("");
    });
  }

  return (
    <section className="rounded-card border border-hairline bg-surface p-5">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Signal log</p>
        <h2 className="mt-1 text-[16px] font-medium text-ink">Record what the market says</h2>
      </div>

      <div className="mt-4 grid gap-3">
        <label className="grid gap-1.5">
          <span className="text-[12px] font-medium text-ink">Signal type</span>
          <select
            value={signalType}
            onChange={(e) => setSignalType(e.target.value as (typeof SIGNAL_TYPES)[number])}
            className="rounded-2xl border border-hairline bg-bg px-3 py-2 text-[13px] text-ink outline-none"
          >
            {SIGNAL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5">
          <span className="text-[12px] font-medium text-ink">Note</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            placeholder="What happened? What did they say? What should happen next?"
            className="rounded-2xl border border-hairline bg-bg px-3 py-2 text-[13px] text-ink outline-none placeholder:text-muted"
          />
        </label>

        <button
          type="button"
          onClick={submit}
          disabled={pending || note.trim().length === 0}
          className="w-fit rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-bg disabled:opacity-50"
        >
          {pending ? "Saving" : "Save signal"}
        </button>
      </div>

      {message && <p className="mt-3 text-[12.5px] text-muted">{message}</p>}
    </section>
  );
}
