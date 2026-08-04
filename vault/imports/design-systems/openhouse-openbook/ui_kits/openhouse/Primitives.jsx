const { useState } = React;

// ──────────────── Primitives ────────────────
function Button({ variant = 'primary', size = 'md', children, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'Inter, sans-serif', fontWeight: 600,
    cursor: 'pointer', border: '1px solid transparent',
    transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
    letterSpacing: '-0.005em',
  };
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 12, borderRadius: 10 },
    md: { padding: '10px 18px', fontSize: 14, borderRadius: 14 },
    lg: { padding: '12px 22px', fontSize: 15, borderRadius: 14 },
  };
  const variants = {
    primary: { background: '#D4AF37', color: '#fff', borderColor: 'rgba(184,147,76,.4)', boxShadow: '0 1px 2px rgba(0,0,0,.06)' },
    dark:    { background: '#111827', color: '#fff', borderColor: 'rgba(0,0,0,.2)' },
    outline: { background: '#fff', color: '#374151', borderColor: '#e5e7eb' },
    ghost:   { background: 'transparent', color: '#6b7280' },
  };
  return <button style={{ ...base, ...sizes[size], ...variants[variant] }} {...rest}>{children}</button>;
}

function Input({ label, error, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label && <label style={{ font: '500 13px Inter', color: '#374151' }}>{label}</label>}
      <input
        style={{
          padding: '10px 14px', font: '400 15px Inter', border: `1px solid ${error ? '#ef4444' : '#e5e7eb'}`,
          borderRadius: 10, background: '#fff', color: '#111827', outline: 'none',
        }}
        {...rest}
      />
      {error && <div style={{ font: '500 12px Inter', color: '#991b1b' }}>{error}</div>}
    </div>
  );
}

function Badge({ tone = 'neutral', children }) {
  const tones = {
    gold:    { bg: 'rgba(212,175,55,.12)', fg: '#8B6428', dot: '#D4AF37' },
    success: { bg: '#ecfdf5', fg: '#065f46', dot: '#10b981' },
    error:   { bg: '#fef2f2', fg: '#991b1b', dot: '#ef4444' },
    warning: { bg: '#fffbeb', fg: '#92400e', dot: '#f59e0b' },
    info:    { bg: '#eff6ff', fg: '#1e40af', dot: '#3b82f6' },
    neutral: { bg: '#f3f4f6', fg: '#374151', dot: '#6b7280' },
  };
  const t = tones[tone];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: '600 11px Inter',
      padding: '3px 10px', borderRadius: 9999, background: t.bg, color: t.fg, letterSpacing: '.02em' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot }} />
      {children}
    </span>
  );
}

// Tiny Lucide-style icons
function Icon({ name, size = 16, color = 'currentColor' }) {
  const paths = {
    home: <><path d="M3 12l2-2 7-7 7 7 2 2"/><path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"/></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
    chart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></>,
    bell: <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></>,
    logout: <><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></>,
    file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="M10.85 12.15L19 4M18 5l3 3M15 8l3 3"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
}

Object.assign(window, { Button, Input, Badge, Icon });
