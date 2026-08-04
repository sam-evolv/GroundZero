const { useState } = React;

// ───── Dark theme primitives ─────
function DarkButton({ variant = 'primary', size = 'md', children, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
    fontFamily: 'Inter, sans-serif', fontWeight: 500,
    cursor: 'pointer', border: '1px solid transparent',
    transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
  };
  const sizes = {
    sm: { padding: '4px 10px', fontSize: 12, borderRadius: 8 },
    md: { padding: '6px 14px', fontSize: 13, borderRadius: 10 },
  };
  const variants = {
    primary: { background: '#D4AF37', color: '#080808', borderColor: 'rgba(212,175,55,.4)', fontWeight: 600 },
    dark:    { background: '#161a22', color: '#eef2f8', borderColor: '#1e2531' },
    ghost:   { background: 'transparent', color: '#9ca8bc', border: '1px solid transparent' },
  };
  return <button style={{ ...base, ...sizes[size], ...variants[variant] }} {...rest}>{children}</button>;
}

function DIcon({ name, size = 14, color = 'currentColor' }) {
  const p = {
    home: <><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></>,
    chart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    cmd: <><path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z"/></>,
    sparkle: <><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></>,
    up: <><path d="M12 19V5M5 12l7-7 7 7"/></>,
    dot3: <><circle cx="5" cy="12" r="1.5" fill={color}/><circle cx="12" cy="12" r="1.5" fill={color}/><circle cx="19" cy="12" r="1.5" fill={color}/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
    bolt: <><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></>,
    link: <><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>;
}

function DBadge({ tone = 'neutral', children }) {
  const tones = {
    gold:    { bg: 'rgba(212,175,55,.12)', fg: '#D4AF37' },
    success: { bg: 'rgba(16,185,129,.14)', fg: '#34d399' },
    error:   { bg: 'rgba(239,68,68,.14)',  fg: '#f87171' },
    warning: { bg: 'rgba(245,158,11,.14)', fg: '#fbbf24' },
    info:    { bg: 'rgba(59,130,246,.14)', fg: '#60a5fa' },
    neutral: { bg: 'rgba(255,255,255,.06)', fg: '#9ca8bc' },
  };
  const t = tones[tone];
  return <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 5,
    font: '500 11px Inter', padding: '2px 8px', borderRadius: 6,
    background: t.bg, color: t.fg, letterSpacing: '.01em',
  }}>{children}</span>;
}

// ───── Sidebar ─────
function DSidebar({ active = 'Overview' }) {
  const items = [
    { label: 'Overview', icon: 'home' },
    { label: 'Bookings', icon: 'calendar', badge: '3' },
    { label: 'Customers', icon: 'users' },
    { label: 'Analytics', icon: 'chart' },
    { label: 'MCP', icon: 'bolt', gold: true },
    { label: 'Settings', icon: 'settings' },
  ];
  return (
    <aside style={{
      width: 240, background: '#0f1115', borderRight: '1px solid #1e2531',
      padding: 16, display: 'flex', flexDirection: 'column', gap: 4,
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px', marginBottom: 16 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7,
          background: 'linear-gradient(135deg,#D4AF37,#8B6428)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          font: '700 13px Inter', color: '#080808' }}>O</div>
        <div style={{ font: '600 14px Inter', color: '#eef2f8', letterSpacing: '-0.01em' }}>OpenBook</div>
      </div>

      <button style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px',
        background: '#12151b', border: '1px solid #1e2531', borderRadius: 8,
        font: '400 12px Inter', color: '#778199', cursor: 'pointer',
        justifyContent: 'space-between', marginBottom: 12,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <DIcon name="search" size={13} /> Search
        </span>
        <span style={{ font: '500 10px Inter', padding: '1px 5px', borderRadius: 4, background: '#1e2531' }}>⌘K</span>
      </button>

      {items.map(i => (
        <button key={i.label} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 10, padding: '7px 10px', borderRadius: 7,
          background: active === i.label ? 'rgba(212,175,55,.08)' : 'transparent',
          border: active === i.label ? '1px solid rgba(212,175,55,.2)' : '1px solid transparent',
          color: active === i.label ? '#D4AF37' : i.gold ? '#D4AF37' : '#9ca8bc',
          font: active === i.label ? '500 13px Inter' : '400 13px Inter',
          cursor: 'pointer', textAlign: 'left',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <DIcon name={i.icon} size={14} /> {i.label}
          </span>
          {i.badge && <DBadge tone="gold">{i.badge}</DBadge>}
        </button>
      ))}

      <div style={{ flex: 1 }} />
      <div style={{
        padding: 12, border: '1px solid rgba(212,175,55,.2)', borderRadius: 10,
        background: 'linear-gradient(135deg,rgba(212,175,55,.08),transparent)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <DIcon name="bolt" size={12} color="#D4AF37" />
          <div style={{ font: '600 11px Inter', color: '#D4AF37', letterSpacing: '.04em',
            textTransform: 'uppercase' }}>MCP live</div>
        </div>
        <div style={{ font: '400 11px Inter', color: '#9ca8bc', lineHeight: 1.5 }}>
          Your business is discoverable by ChatGPT, Claude and Gemini.
        </div>
      </div>
    </aside>
  );
}

Object.assign(window, { DarkButton, DIcon, DBadge, DSidebar });
