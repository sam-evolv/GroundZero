const { useState, useEffect } = React;

function GIcon({ name, size = 22, color = '#fff' }) {
  const p = {
    scissors: <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/></>,
    dumbbell: <><path d="M6.5 6.5h11v11h-11z"/><path d="M3 9v6M21 9v6M6.5 10h11v4h-11z"/></>,
    sparkles: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>,
    car: <><path d="M3 13l2-6h14l2 6v7h-3v-2H6v2H3z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></>,
    location: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></>,
    star: <><polygon points="12,2 15,9 22,9.3 17,14 19,21 12,17 5,21 7,14 2,9.3 9,9"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    chev: <><path d="M9 18l6-6-6-6"/></>,
    back: <><path d="M15 18l-6-6 6-6"/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
    home: <><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>;
}

// ───── Glass card ─────
function GlassCard({ children, style }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,.72)', backdropFilter: 'blur(32px) saturate(180%)',
      WebkitBackdropFilter: 'blur(32px) saturate(180%)',
      border: '1px solid rgba(255,255,255,.6)', borderRadius: 22,
      boxShadow: '0 8px 32px rgba(0,0,0,.08), inset 0 1px 0 rgba(255,255,255,.5)',
      ...style,
    }}>{children}</div>
  );
}

// Per-business gradient glass icon (iOS 26 liquid-glass)
function BizIcon({ color, icon, size = 64 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: `linear-gradient(145deg, ${color}, ${shade(color, -18)})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
      boxShadow: `0 8px 24px ${color}55, inset 0 1px 0 rgba(255,255,255,.45), inset 0 -1px 0 rgba(0,0,0,.15)`,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: 'linear-gradient(145deg, rgba(255,255,255,.35), transparent 55%)',
        pointerEvents: 'none',
      }} />
      <GIcon name={icon} size={size * 0.48} color="#fff" />
    </div>
  );
}

function shade(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + Math.round(255 * pct / 100)));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + Math.round(255 * pct / 100)));
  const b = Math.max(0, Math.min(255, (n & 0xff) + Math.round(255 * pct / 100)));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

Object.assign(window, { GIcon, GlassCard, BizIcon, shade });
