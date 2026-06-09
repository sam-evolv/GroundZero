import { LogoMark } from "@/components/ui/LogoMark";

export function BriefHeader({
  date,
  heartbeat,
  summary,
}: {
  date: string;
  heartbeat?: string;
  summary?: string;
}) {
  return (
    <header>
      <div className="flex items-center gap-2.5">
        <LogoMark size={26} />
        <span className="text-[13px] font-medium tracking-[0.04em] text-ink/70">Ground Zero</span>
      </div>

      <h1 className="mt-6 font-serif text-[34px] font-normal leading-[1.05] text-ink">
        Morning brief
      </h1>
      <p className="mt-2 text-[13px] text-muted">{formatDate(date)}</p>

      {heartbeat && (
        <div className="mt-4 flex gap-2.5 rounded-2xl border border-hairline bg-surface px-4 py-3">
          <span className="mt-[3px] text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
            Council
          </span>
          <p className="text-[13px] leading-relaxed text-ink/80">{heartbeat}</p>
        </div>
      )}

      {summary && (
        <details className="mt-3 rounded-2xl border border-hairline bg-surface px-4 py-3">
          <summary className="cursor-pointer list-none text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            Council read
          </summary>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/80">{summary}</p>
        </details>
      )}
    </header>
  );
}

function formatDate(value: string): string {
  const date = new Date(value.length === 10 ? `${value}T00:00:00` : value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
