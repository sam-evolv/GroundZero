"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { href: string; label: string; icon: (active: boolean) => React.ReactNode };

const tabs: Tab[] = [
  {
    href: "/",
    label: "Brief",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3.5" width="16" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8.5h8M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity={active ? 1 : 0.85} />
      </svg>
    ),
  },
  {
    href: "/goals",
    label: "Goals",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.6" opacity={active ? 1 : 0.85} />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
];

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-hairline bg-bg/85 backdrop-blur-xl">
      <div className="pb-safe mx-auto flex w-full max-w-[520px] items-stretch">
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`relative flex flex-1 flex-col items-center gap-1 pt-3 pb-2 text-[11px] tracking-wide transition-colors ${
                active ? "text-ink" : "text-muted"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 h-px w-10 rounded-full bg-gold transition-opacity ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              />
              {tab.icon(active)}
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
