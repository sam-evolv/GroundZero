function TopBar({ user = 'sam@evolvai.ie', role = 'developer', onLogout }) {
  return (
    <div style={{
      background: '#080808', borderBottom: '1px solid rgba(212,175,55,.2)',
      padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/openhouse-mark-gold.png" style={{ width: 28, height: 28 }} />
          <div style={{
            font: '700 18px Inter', letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg,#e8c547,#b88a18)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>OpenHouse AI</div>
        </div>
        <nav style={{ display: 'flex', gap: 0 }}>
          {['Dashboard', 'Developments', 'Units', 'Purchasers', 'Care'].map((l, i) => (
            <a key={l} style={{
              padding: '22px 16px', font: '500 13px Inter',
              color: i === 0 ? '#fff' : '#9ca3af',
              borderBottom: i === 0 ? '2px solid #D4AF37' : '2px solid transparent',
              textDecoration: 'none', cursor: 'pointer',
            }}>{l}</a>
          ))}
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button style={{ background: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
          <Icon name="bell" size={18} color="#9ca3af" />
        </button>
        <div style={{ font: '500 13px Inter', color: '#d1d5db' }}>{user}</div>
        <Badge tone="gold">{role}</Badge>
        <button onClick={onLogout} style={{
          background: 'transparent', color: '#9ca3af', border: 'none',
          font: '500 13px Inter', cursor: 'pointer', padding: '6px 10px', borderRadius: 8,
        }}>Logout</button>
      </div>
    </div>
  );
}

function KpiCard({ label, value, delta, deltaTone = 'up', accent }) {
  return (
    <div style={{
      background: '#fff', border: accent ? '1px solid #FEF9C3' : '1px solid #e5e7eb',
      borderRadius: 12, padding: 18,
      boxShadow: accent ? '0 4px 20px rgba(212,175,55,.08)' : '0 2px 12px rgba(12,12,12,.04)',
    }}>
      <div style={{ font: '500 12px Inter', color: '#6b7280', marginBottom: 6 }}>{label}</div>
      <div style={{
        font: '700 28px Inter', letterSpacing: '-0.02em', lineHeight: 1,
        ...(accent && {
          background: 'linear-gradient(135deg,#D4AF37,#B8934C)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
        })
      }}>{value}</div>
      {delta && (
        <div style={{
          font: '500 12px Inter', marginTop: 8,
          color: deltaTone === 'up' ? '#10b981' : '#ef4444',
        }}>
          {deltaTone === 'up' ? '▲' : '▼'} {delta}
        </div>
      )}
    </div>
  );
}

function UnitsTable({ units, onSelect }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#f9fafb' }}>
            {['Unit', 'Type', 'Reserved by', 'Handover', 'Status', ''].map(h => (
              <th key={h} style={{
                font: '600 11px Inter', letterSpacing: '.06em', textTransform: 'uppercase',
                color: '#6b7280', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #e5e7eb',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {units.map((u, i) => (
            <tr key={u.id} onClick={() => onSelect?.(u)} style={{
              cursor: 'pointer', transition: 'background 150ms',
            }} onMouseOver={e => e.currentTarget.style.background = '#f9fafb'}
               onMouseOut={e => e.currentTarget.style.background = '#fff'}>
              <td style={{ padding: '14px', borderBottom: i < units.length-1 ? '1px solid #f3f4f6' : 'none',
                fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 500, color: '#111827' }}>{u.id}</td>
              <td style={{ padding: '14px', borderBottom: i < units.length-1 ? '1px solid #f3f4f6' : 'none', color: '#111827' }}>{u.type}</td>
              <td style={{ padding: '14px', borderBottom: i < units.length-1 ? '1px solid #f3f4f6' : 'none', color: '#374151' }}>{u.buyer}</td>
              <td style={{ padding: '14px', borderBottom: i < units.length-1 ? '1px solid #f3f4f6' : 'none',
                fontFamily: 'JetBrains Mono, monospace', color: '#374151' }}>{u.handover}</td>
              <td style={{ padding: '14px', borderBottom: i < units.length-1 ? '1px solid #f3f4f6' : 'none' }}>
                <Badge tone={u.tone}>{u.status}</Badge>
              </td>
              <td style={{ padding: '14px', borderBottom: i < units.length-1 ? '1px solid #f3f4f6' : 'none',
                textAlign: 'right', color: '#9ca3af' }}>
                <Icon name="arrow" size={16} color="#9ca3af" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Object.assign(window, { TopBar, KpiCard, UnitsTable });
