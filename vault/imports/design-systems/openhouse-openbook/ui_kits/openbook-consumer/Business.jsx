function BusinessScreen({ biz, onBack, onBook }) {
  const [slot, setSlot] = useState('14:30');
  const slots = ['09:00','09:30','10:00','10:30','11:00','13:00','13:30','14:00','14:30','15:00','15:30','16:00'];
  const services = [
    { name: "Men's cut", time: '30 min', price: '€25' },
    { name: 'Beard trim', time: '15 min', price: '€18' },
    { name: 'Fade + beard', time: '45 min', price: '€38' },
    { name: 'Hot towel shave', time: '30 min', price: '€30' },
  ];

  return (
    <div style={{ paddingBottom: 140 }}>
      {/* Hero */}
      <div style={{
        position: 'relative', height: 220,
        background: `linear-gradient(145deg, ${biz.color}, ${shade(biz.color, -25)})`,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,.4), transparent 60%)',
        }} />
        <button onClick={onBack} style={{
          position: 'absolute', top: 18, left: 16, width: 36, height: 36, borderRadius: 18,
          background: 'rgba(255,255,255,.3)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,.4)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><GIcon name="back" size={16} color="#fff" /></button>
        <div style={{ position: 'absolute', bottom: 22, left: 20, display: 'flex',
          alignItems: 'flex-end', gap: 14 }}>
          <BizIcon color={biz.color} icon={biz.icon} size={72} />
          <div>
            <div style={{ font: '700 22px Inter', color: '#fff', letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,.2)' }}>{biz.name}</div>
            <div style={{ font: '400 13px Inter', color: 'rgba(255,255,255,.85)', marginTop: 2 }}>{biz.cat}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 20px 0' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
          {[
            { icon: 'star',   label: `${biz.rating} rating` },
            { icon: 'clock',  label: 'Open · 09–18' },
            { icon: 'location', label: biz.dist },
          ].map(p => (
            <GlassCard key={p.label} style={{ padding: '10px 12px', flex: 1 }}>
              <GIcon name={p.icon} size={13} color={biz.color} />
              <div style={{ font: '500 12px Inter', color: '#080808', marginTop: 4 }}>{p.label}</div>
            </GlassCard>
          ))}
        </div>

        <div style={{ font: '600 13px Inter', color: 'rgba(0,0,0,.5)', letterSpacing: '.06em',
          textTransform: 'uppercase', marginBottom: 10 }}>Services</div>
        <GlassCard style={{ padding: '4px 0', marginBottom: 22 }}>
          {services.map((s, i) => (
            <div key={s.name} style={{
              padding: '14px 16px', display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', borderBottom: i < services.length - 1 ? '1px solid rgba(0,0,0,.06)' : 'none',
            }}>
              <div>
                <div style={{ font: '500 14px Inter', color: '#080808' }}>{s.name}</div>
                <div style={{ font: '400 12px Inter', color: 'rgba(0,0,0,.5)', marginTop: 2 }}>{s.time}</div>
              </div>
              <div style={{ font: '600 14px "JetBrains Mono", monospace', color: '#080808' }}>{s.price}</div>
            </div>
          ))}
        </GlassCard>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ font: '600 13px Inter', color: 'rgba(0,0,0,.5)', letterSpacing: '.06em',
            textTransform: 'uppercase' }}>Today · Wed 17 Apr</div>
          <div style={{ font: '500 12px Inter', color: biz.color }}>Change date</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
          {slots.map(s => (
            <button key={s} onClick={() => setSlot(s)} style={{
              padding: '11px 0', borderRadius: 12, cursor: 'pointer',
              font: '500 14px "JetBrains Mono", monospace',
              background: slot === s ? biz.color : 'rgba(255,255,255,.7)',
              color: slot === s ? '#fff' : '#080808',
              border: slot === s ? `1px solid ${biz.color}` : '1px solid rgba(255,255,255,.7)',
              backdropFilter: 'blur(24px)',
              boxShadow: slot === s ? `0 4px 14px ${biz.color}55` : '0 2px 8px rgba(0,0,0,.04)',
              transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
            }}>{s}</button>
          ))}
        </div>
      </div>

      {/* Floating book CTA */}
      <div style={{
        position: 'absolute', left: 16, right: 16, bottom: 100,
        padding: 14, borderRadius: 20,
        background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(32px) saturate(200%)',
        border: '1px solid rgba(255,255,255,.8)', boxShadow: '0 16px 48px rgba(0,0,0,.16)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ font: '400 11px Inter', color: 'rgba(0,0,0,.55)' }}>Men's cut · Today</div>
          <div style={{ font: '600 15px Inter', color: '#080808' }}>{slot} · €25</div>
        </div>
        <button onClick={onBook} style={{
          padding: '12px 22px', borderRadius: 14, cursor: 'pointer',
          background: biz.color, color: '#fff', border: 'none',
          font: '600 14px Inter', letterSpacing: '-0.005em',
          boxShadow: `0 6px 20px ${biz.color}66`,
          transition: 'transform 150ms',
        }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
          Book now
        </button>
      </div>
    </div>
  );
}

function ConfirmScreen({ biz, onDone }) {
  return (
    <div style={{ padding: '40px 20px 120px', display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center' }}>
      <div style={{
        width: 96, height: 96, borderRadius: 32,
        background: `linear-gradient(145deg, ${biz.color}, ${shade(biz.color, -25)})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 16px 40px ${biz.color}55`,
        animation: 'pop 400ms cubic-bezier(0.16,1,0.3,1)',
        marginBottom: 24,
      }}>
        <GIcon name="check" size={44} color="#fff" />
      </div>
      <div style={{ font: '700 26px Inter', letterSpacing: '-0.02em', color: '#080808', marginBottom: 6 }}>
        You're booked
      </div>
      <div style={{ font: '400 15px Inter', color: 'rgba(0,0,0,.6)', lineHeight: 1.6, maxWidth: 280 }}>
        Men's cut at {biz.name}, today at 14:30. We've sent a confirmation to your email.
      </div>

      <GlassCard style={{ padding: 18, width: '100%', marginTop: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ font: '400 13px Inter', color: 'rgba(0,0,0,.55)' }}>Service</span>
          <span style={{ font: '500 13px Inter', color: '#080808' }}>Men's cut</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ font: '400 13px Inter', color: 'rgba(0,0,0,.55)' }}>When</span>
          <span style={{ font: '500 13px "JetBrains Mono"', color: '#080808' }}>Wed 17 Apr · 14:30</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ font: '400 13px Inter', color: 'rgba(0,0,0,.55)' }}>Where</span>
          <span style={{ font: '500 13px Inter', color: '#080808' }}>{biz.cat}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between',
          paddingTop: 12, borderTop: '1px solid rgba(0,0,0,.08)' }}>
          <span style={{ font: '500 14px Inter', color: '#080808' }}>Total</span>
          <span style={{ font: '600 14px "JetBrains Mono"', color: '#080808' }}>€25.00</span>
        </div>
      </GlassCard>

      <button onClick={onDone} style={{
        marginTop: 24, padding: '13px 28px', borderRadius: 14, cursor: 'pointer',
        background: '#080808', color: '#fff', border: 'none',
        font: '600 14px Inter', width: '100%',
      }}>Add to calendar</button>
    </div>
  );
}

Object.assign(window, { BusinessScreen, ConfirmScreen });
