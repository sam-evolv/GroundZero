export function BriefFooter({ parkedCount }: { parkedCount: number }) {
  if (parkedCount <= 0) return null;

  return (
    <footer className="mt-8 flex items-center justify-center gap-2 text-[12.5px] text-muted">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 14.5A7.5 7.5 0 1 1 9.5 4a6 6 0 1 0 10.5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {parkedCount} parked
    </footer>
  );
}
