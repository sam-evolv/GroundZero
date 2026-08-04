function StatCard({ label, value, delta, sparkline }) {
  return (
    <div style={{
      background: '#0f1115', border: '1px solid #1e2531', borderRadius: 12,
      padding: 18, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ font: '500 11px Inter', color: '#778199', letterSpacing: '.04em',
        textTransform: 'uppercase', marginBottom: 8 }}>{label}</div>
      <div style={{ font: '600 26px "JetBrains Mono", monospace',
        color: '#eef2f8', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
      {delta && (
        <div style={{ font: '500 11px Inter', color: '#34d399', marginTop: 8,
          display: 'inline-flex', alignItems: 'center', gap: 3 }}>
          <DIcon name="up" size={10} color="#34d399" /> {delta}
        </div>
      )}
      {sparkline && (
        <svg viewBox="0 0 100 28" style={{ position: 'absolute', bottom: 10, right: 14,
          width: 88, height: 28, opacity: .8 }}>
          <polyline fill="none" stroke="#D4AF37" strokeWidth="1.4"
            points="0,22 12,18 24,20 36,12 48,15 60,8 72,10 84,4 96,6" />
        </svg>
      )}
    </div>
  );
}

function BookingsTable() {
  const rows = [
    { t: '09:00', svc: 'Men\'s cut',    client: 'Conor Walsh',  price: '€25', src: 'MCP · Claude',  tone: 'gold' },
    { t: '09:30', svc: 'Beard trim',    client: 'Niamh Byrne',  price: '€18', src: 'Direct',         tone: 'neutral' },
    { t: '10:00', svc: 'Fade + beard',  client: 'David Moran',  price: '€38', src: 'MCP · ChatGPT',  tone: 'gold' },
    { t: '10:45', svc: 'Colour',        client: 'Aoife Doyle',  price: '€85', src: 'Direct',         tone: 'neutral' },
    { t: '11:30', svc: 'Kids cut',      client: 'Sean Murphy',  price: '€15', src: 'Walk-in',        tone: 'neutral' },
    { t: '12:15', svc: 'Men\'s cut',    client: 'Mark Kelly',   price: '€25', src: 'MCP · Gemini',   tone: 'gold' },
    { t: '13:00', svc: 'Hot towel shave', client: 'Paul Ryan',  price: '€30', src: 'Direct',         tone: 'neutral' },
  ];
  return (
    <div style={{ background: '#0f1115', border: '1px solid #1e2531', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #1e2531',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ font: '600 14px Inter', color: '#eef2f8' }}>Today — Wed 17 Apr</div>
          <DBadge tone="success">18 bookings</DBadge>
          <DBadge tone="gold">7 via MCP</DBadge>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <DarkButton variant="dark" size="sm">Day</DarkButton>
          <DarkButton variant="ghost" size="sm">Week</DarkButton>
          <DarkButton variant="ghost" size="sm">Month</DarkButton>
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {['Time', 'Service', 'Customer', 'Price', 'Source', ''].map(h => (
              <th key={h} style={{
                font: '500 10px Inter', letterSpacing: '.08em', textTransform: 'uppercase',
                color: '#778199', textAlign: 'left', padding: '8px 16px',
                borderBottom: '1px solid #1e2531', background: '#0b0c0f',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,.02)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
              <td style={{ padding: '10px 16px', borderBottom: '1px solid #12151b',
                font: '500 13px "JetBrains Mono", monospace', color: '#eef2f8' }}>{r.t}</td>
              <td style={{ padding: '10px 16px', borderBottom: '1px solid #12151b',
                font: '400 13px Inter', color: '#eef2f8' }}>{r.svc}</td>
              <td style={{ padding: '10px 16px', borderBottom: '1px solid #12151b',
                font: '400 13px Inter', color: '#9ca8bc' }}>{r.client}</td>
              <td style={{ padding: '10px 16px', borderBottom: '1px solid #12151b',
                font: '500 13px "JetBrains Mono", monospace', color: '#eef2f8', textAlign: 'left' }}>{r.price}</td>
              <td style={{ padding: '10px 16px', borderBottom: '1px solid #12151b' }}>
                <DBadge tone={r.tone}>
                  {r.tone === 'gold' && <DIcon name="bolt" size={10} color="#D4AF37" />} {r.src}
                </DBadge>
              </td>
              <td style={{ padding: '10px 16px', borderBottom: '1px solid #12151b', textAlign: 'right' }}>
                <DIcon name="dot3" size={16} color="#778199" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CommandPalette({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(8,8,8,.6)', backdropFilter: 'blur(8px)',
      zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 120,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 560, background: '#12151b', border: '1px solid #1e2531', borderRadius: 14,
        boxShadow: '0 24px 60px rgba(0,0,0,.6)', overflow: 'hidden',
      }}>
        <div style={{ padding: 14, borderBottom: '1px solid #1e2531',
          display: 'flex', alignItems: 'center', gap: 10 }}>
          <DIcon name="search" size={16} color="#778199" />
          <input autoFocus placeholder="Type a command or search…" style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            font: '400 14px Inter', color: '#eef2f8',
          }} />
          <span style={{ font: '500 10px Inter', padding: '2px 6px', borderRadius: 4,
            background: '#1e2531', color: '#778199' }}>ESC</span>
        </div>
        <div style={{ padding: 6 }}>
          {[
            { icon: 'plus', label: 'Create booking', hint: 'B' },
            { icon: 'calendar', label: 'Go to today', hint: 'T' },
            { icon: 'bolt', label: 'Preview MCP response', hint: 'M', gold: true },
            { icon: 'users', label: 'Add customer', hint: 'C' },
            { icon: 'link', label: 'Copy booking page link', hint: '⇧L' },
          ].map((i, idx) => (
            <div key={i.label} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
              borderRadius: 8, background: idx === 0 ? 'rgba(212,175,55,.08)' : 'transparent',
              color: i.gold ? '#D4AF37' : '#eef2f8', cursor: 'pointer',
            }}>
              <DIcon name={i.icon} size={14} color={i.gold ? '#D4AF37' : '#9ca8bc'} />
              <div style={{ flex: 1, font: '400 13px Inter' }}>{i.label}</div>
              <span style={{ font: '500 10px Inter', padding: '2px 6px', borderRadius: 4,
                background: '#1e2531', color: '#778199' }}>{i.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { StatCard, BookingsTable, CommandPalette });
