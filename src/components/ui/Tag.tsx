export function Tag({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "ink";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-hairline px-2.5 py-1 text-[11px] leading-none ${
        tone === "ink" ? "text-ink/80" : "text-muted"
      }`}
    >
      {children}
    </span>
  );
}
