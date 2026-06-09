// The Ground Zero mark: concentric rings closing on a gold center.
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="256" cy="256" r="150" stroke="var(--gold)" strokeWidth="22" opacity="0.4" />
      <circle cx="256" cy="256" r="96" stroke="var(--gold)" strokeWidth="24" opacity="0.7" />
      <circle cx="256" cy="256" r="40" fill="var(--gold)" />
    </svg>
  );
}
