import type { Item } from "@/lib/vault/types";

// v1 milestone: these render the agreed design but are not wired yet. The next
// milestone makes them write a decision and flip the item state, optimistically
// and over Realtime. Review PR already links out, since that needs no state.

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-bg"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="rounded-full border border-hairline px-4 py-2 text-[13px] text-ink/80 transition-colors hover:bg-white/[0.03]"
    >
      {children}
    </button>
  );
}

export function ItemActions({ item }: { item: Item }) {
  if (item.state === "pr_ready") {
    return (
      <div className="flex flex-wrap gap-2 pt-1">
        {item.prUrl ? (
          <a
            href={item.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-bg"
          >
            Review PR
          </a>
        ) : (
          <PrimaryButton>Review PR</PrimaryButton>
        )}
        <SecondaryButton>Discuss</SecondaryButton>
      </div>
    );
  }

  if (item.state === "building") {
    return (
      <div className="flex flex-wrap gap-2 pt-1">
        <SecondaryButton>View</SecondaryButton>
      </div>
    );
  }

  if (item.state === "proposed") {
    return (
      <div className="flex flex-wrap gap-2 pt-1">
        <PrimaryButton>Approve</PrimaryButton>
        <SecondaryButton>Reject</SecondaryButton>
        <SecondaryButton>Discuss</SecondaryButton>
        <SecondaryButton>Snooze</SecondaryButton>
      </div>
    );
  }

  return null;
}
