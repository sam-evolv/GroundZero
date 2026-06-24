"use client";

import { useMemo, useState } from "react";
import type { LaunchBrief } from "@/lib/vault/types";

export function LaunchSharePanel({ launch }: { launch: LaunchBrief }) {
  const [message, setMessage] = useState<string | null>(null);
  const bundle = useMemo(() => buildBundle(launch), [launch]);

  async function copy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setMessage(`${label} copied.`);
    } catch {
      setMessage("Clipboard copy failed — please copy manually.");
    }
  }

  return (
    <section className="rounded-card border border-hairline bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Share</p>
          <h2 className="mt-1 text-[16px] font-medium text-ink">Copy the launch kit</h2>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <button
          type="button"
          onClick={() => copy(`${window.location.origin}/launch/${launch.id}`, "Public link")}
          className="rounded-full border border-hairline bg-bg px-4 py-2 text-[13px] font-medium text-ink"
        >
          Copy public link
        </button>
        <button
          type="button"
          onClick={() => copy(bundle.landing, "Landing page copy")}
          className="rounded-full border border-hairline bg-bg px-4 py-2 text-[13px] font-medium text-ink"
        >
          Copy landing page
        </button>
        <button
          type="button"
          onClick={() => copy(bundle.outreach, "Outreach bundle")}
          className="rounded-full border border-hairline bg-bg px-4 py-2 text-[13px] font-medium text-ink"
        >
          Copy outreach bundle
        </button>
      </div>

      {message && <p className="mt-3 text-[12.5px] text-muted">{message}</p>}
    </section>
  );
}

function buildBundle(launch: LaunchBrief) {
  const landing = [
    launch.landingHeadline ?? launch.title,
    launch.landingSubhead ?? launch.offer,
    ...(launch.landingPoints ?? []),
    launch.landingCta ? `CTA: ${launch.landingCta}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const outreach = [
    `Launch: ${launch.title}`,
    "",
    "--- Landing page ---",
    landing,
    "",
    "--- Outreach ---",
    launch.outreachMessage ?? "",
    "",
    "--- Follow-up ---",
    launch.followUpMessage ?? "",
    "",
    "--- Qualification questions ---",
    ...(launch.qualificationQuestions ?? []),
    "",
    "--- Signal capture ---",
    launch.signalCapture ?? "Track replies, calls booked, objections, and pilots.",
  ]
    .filter((line, index, all) => !(line === "" && (index === 0 || all[index - 1] === "")))
    .join("\n");

  return { landing, outreach };
}
