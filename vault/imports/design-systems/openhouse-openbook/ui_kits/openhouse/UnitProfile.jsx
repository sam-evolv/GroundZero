function TimelineStep({ step, current, last }) {
  const done = step.status === 'done';
  const active = step.status === 'active';
  return (
    <div style={{ display: 'flex', gap: 16, position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: done ? '#D4AF37' : active ? '#fff' : '#f3f4f6',
          border: active ? '2px solid #D4AF37' : done ? '2px solid #D4AF37' : '2px solid #e5e7eb',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: done ? '#fff' : active ? '#D4AF37' : '#9ca3af',
          font: '700 13px Inter',
          boxShadow: active ? '0 0 0 6px rgba(212,175,55,.15)' : 'none',
        }}>
          {done ? <Icon name="check" size={16} color="#fff" /> : step.n}
        </div>
        {!last && <div style={{
          width: 2, flex: 1, minHeight: 32, marginTop: 4,
          background: done ? '#D4AF37' : '#e5e7eb',
        }} />}
      </div>
      <div style={{ paddingBottom: 28, flex: 1 }}>
        <div style={{ font: '600 15px Inter', color: '#111827', letterSpacing: '-0.005em' }}>{step.title}</div>
        <div style={{ font: '400 13px Inter', color: '#6b7280', marginTop: 2 }}>{step.detail}</div>
        {step.date && <div style={{
          font: '500 11px JetBrains Mono', color: '#9ca3af', marginTop: 6, letterSpacing: '.04em'
        }}>{step.date}</div>}
      </div>
    </div>
  );
}

function UnitProfile({ unit }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12,
      boxShadow: '0 2px 12px rgba(12,12,12,.04)', overflow: 'hidden' }}>
      <div style={{ background: 'linear-gradient(135deg,#f9fafb,#fff)', padding: 24,
        borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ font: '500 11px Inter', textTransform: 'uppercase', letterSpacing: '.08em',
              color: '#6b7280', marginBottom: 6 }}>Riverside Gardens · Phase 2</div>
            <div style={{ font: '700 28px Inter', letterSpacing: '-0.02em', color: '#111827' }}>{unit.title}</div>
            <div style={{ font: '400 14px Inter', color: '#6b7280', marginTop: 4 }}>{unit.subtitle}</div>
          </div>
          <Badge tone={unit.tone}>{unit.status}</Badge>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 22 }}>
          {unit.stats.map(s => (
            <div key={s.label}>
              <div style={{ font: '500 11px Inter', textTransform: 'uppercase', letterSpacing: '.06em',
                color: '#9ca3af', marginBottom: 4 }}>{s.label}</div>
              <div style={{ font: '600 16px Inter', color: '#111827',
                fontFamily: s.mono ? 'JetBrains Mono, monospace' : 'Inter' }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ font: '600 14px Inter', color: '#111827', marginBottom: 16 }}>Handover progress</div>
        {unit.steps.map((s, i) => (
          <TimelineStep key={s.n} step={s} last={i === unit.steps.length - 1} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { TimelineStep, UnitProfile });
