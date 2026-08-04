function StatusBar() {
  return (
    <div style={{
      height: 54, padding: '0 30px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', font: '600 16px "SF Pro", Inter', color: '#080808',
    }}>
      <span>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#080808"><path d="M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 2h2v9h-2z"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#080808" strokeWidth="1.5"><path d="M2 5a9 9 0 0112 0M5 7.5a5 5 0 016 0M8 10v.5"/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="1" y="2" width="22" height="8" rx="2" stroke="#080808" strokeWidth="1"/><rect x="3" y="4" width="14" height="4" fill="#080808"/><rect x="24" y="4" width="1.5" height="4" rx=".5" fill="#080808"/></svg>
      </div>
    </div>
  );
}

function HomeScreen({ onPick }) {
  const recent = [
    { id: 'murphys',   name: "Murphy's Barbers", cat: 'Barbershop · Cork',    color: '#D4AF37', icon: 'scissors', rating: 4.9, dist: '0.4 km' },
    { id: 'fitcork',   name: 'FitCork Gym',      cat: 'Gym · Douglas',        color: '#ef4444', icon: 'dumbbell', rating: 4.7, dist: '1.2 km' },
    { id: 'soleil',    name: 'Soleil Hair',      cat: 'Hair salon · Patrick', color: '#ec4899', icon: 'sparkles', rating: 4.8, dist: '0.8 km' },
    { id: 'wellspa',   name: 'Wellspring Spa',   cat: 'Spa · Blackrock',      color: '#8b5cf6', icon: 'heart',    rating: 4.9, dist: '2.1 km' },
  ];
  const cats = [
    { label: 'Barbershops', icon: 'scissors', color: '#D4AF37' },
    { label: 'Gyms',        icon: 'dumbbell', color: '#ef4444' },
    { label: 'Salons',      icon: 'sparkles', color: '#ec4899' },
    { label: 'Spas',        icon: 'heart',    color: '#8b5cf6' },
    { label: 'Driving',     icon: 'car',      color: '#3b82f6' },
    { label: 'Physios',     icon: 'heart',    color: '#10b981' },
  ];

  return (
    <div style={{ padding: '0 20px 120px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div>
          <div style={{ font: '400 13px Inter', color: 'rgba(0,0,0,.55)' }}>
            <GIcon name="location" size={12} color="rgba(0,0,0,.55)"/> Cork, Ireland
          </div>
          <div style={{ font: '700 28px Inter', letterSpacing: '-0.02em', color: '#080808', marginTop: 2 }}>
            Good evening, Julia
          </div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: '50%',
          background: 'linear-gradient(135deg,#D4AF37,#8B6428)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          font: '600 14px Inter', color: '#fff',
          boxShadow: '0 4px 12px rgba(212,175,55,.3)' }}>JD</div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '13px 18px',
        background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255,255,255,.7)', borderRadius: 16,
        boxShadow: '0 4px 16px rgba(0,0,0,.06)', marginBottom: 24,
      }}>
        <GIcon name="search" size={18} color="rgba(0,0,0,.4)" />
        <input placeholder="Barber near me tomorrow at 6pm" style={{
          flex: 1, border: 'none', outline: 'none', background: 'transparent',
          font: '400 15px Inter', color: '#080808',
        }} />
      </div>

      <div style={{ font: '600 13px Inter', color: 'rgba(0,0,0,.5)', letterSpacing: '.06em',
        textTransform: 'uppercase', marginBottom: 12 }}>Browse</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 26 }}>
        {cats.map(c => (
          <button key={c.label} style={{
            background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          }}>
            <BizIcon color={c.color} icon={c.icon} size={58} />
            <div style={{ font: '500 12px Inter', color: '#080808' }}>{c.label}</div>
          </button>
        ))}
      </div>

      <div style={{ font: '600 13px Inter', color: 'rgba(0,0,0,.5)', letterSpacing: '.06em',
        textTransform: 'uppercase', marginBottom: 12 }}>Recent</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {recent.map(b => (
          <button key={b.id} onClick={() => onPick(b)} style={{
            background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255,255,255,.7)', borderRadius: 18,
            padding: 14, display: 'flex', alignItems: 'center', gap: 14,
            textAlign: 'left', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,.04)',
            transition: 'transform 150ms',
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <BizIcon color={b.color} icon={b.icon} size={54} />
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 15px Inter', color: '#080808', letterSpacing: '-0.005em' }}>{b.name}</div>
              <div style={{ font: '400 12px Inter', color: 'rgba(0,0,0,.55)', marginTop: 2 }}>{b.cat}</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                <span style={{ font: '500 12px Inter', color: '#080808',
                  display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  <GIcon name="star" size={11} color="#D4AF37" /> {b.rating}
                </span>
                <span style={{ font: '400 12px Inter', color: 'rgba(0,0,0,.5)' }}>{b.dist}</span>
              </div>
            </div>
            <GIcon name="chev" size={16} color="rgba(0,0,0,.3)" />
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { StatusBar, HomeScreen });
