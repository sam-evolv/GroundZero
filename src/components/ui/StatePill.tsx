import type { ItemState } from "@/lib/vault/types";

const config: Record<ItemState, { label: string; dot: string }> = {
  proposed: { label: "Proposed", dot: "bg-muted" },
  approved: { label: "Approved", dot: "bg-green" },
  building: { label: "Building", dot: "bg-amber" },
  pr_ready: { label: "PR ready", dot: "bg-green" },
  snoozed: { label: "Snoozed", dot: "bg-muted/50" },
  rejected: { label: "Rejected", dot: "bg-muted/50" },
  done: { label: "Done", dot: "bg-green" },
};

export function StatePill({ state }: { state: ItemState }) {
  const { label, dot } = config[state] ?? config.proposed;
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 text-[11px] leading-none text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {label}
    </span>
  );
}
