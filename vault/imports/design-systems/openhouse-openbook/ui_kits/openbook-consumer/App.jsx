function TabBar({ active = 'home', onChange }) {
  const tabs = [
    { id: 'home',     icon: 'home',     label: 'Home' },
    { id: 'search',   icon: 'search',   label: 'Explore' },
    { id: 'bookings', icon: 'calendar', label: 'Bookings' },
    { id: 'account',  icon: 'user',     label: 'Account' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: 20, zIndex: 10,
      padding: '10px 8px',
      background: 'rgba(255,255,255,.75)', backdropFilter: 'blur(40px) saturate(200%)',
      border: '1px solid rgba(255,255,255,.7)', borderRadius: 28,
      boxShadow: '0 16px 40px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.5)',
      display: 'flex', justifyContent: 'space-around',
    }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)} style={{
          flex: 1, padding: '6px 4px', background: 'transparent', border: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          cursor: 'pointer', color: active === t.id ? '#D4AF37' : 'rgba(0,0,0,.5)',
          transition: 'color 150ms',
        }}>
          <GIcon name={t.icon} size={20} color={active === t.id ? '#D4AF37' : 'rgba(0,0,0,.5)'} />
          <span style={{ font: '500 10px Inter' }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function ConsumerApp() {
  const [screen, setScreen] = useState('home');
  const [biz, setBiz] = useState(null);

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 10%, #ffe9a8, transparent 50%), radial-gradient(circle at 80% 90%, #f8d5e8, transparent 55%), #f3ecd8',
      fontFamily: 'Inter, sans-serif', padding: 24,
    }}>
      {/* iPhone frame */}
      <div style={{
        width: 390, height: 844, borderRadius: 55, background: '#0a0a0a',
        padding: 11, boxShadow: '0 40px 120px rgba(0,0,0,.3), 0 0 0 1px rgba(0,0,0,.1)',
        position: 'relative',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: 44, overflow: 'hidden',
          position: 'relative',
          background: 'linear-gradient(180deg, #fef3d0 0%, #fff 30%, #fff 60%, #fdf0f6 100%)',
        }}>
          {/* Dynamic island */}
          <div style={{
            position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
            width: 120, height: 34, background: '#0a0a0a', borderRadius: 20, zIndex: 50,
          }} />
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <StatusBar />
            {screen === 'home' && <HomeScreen onPick={b => { setBiz(b); setScreen('business'); }} />}
            {screen === 'business' && biz && <BusinessScreen biz={biz} onBack={() => setScreen('home')} onBook={() => setScreen('confirm')} />}
            {screen === 'confirm' && biz && <ConfirmScreen biz={biz} onDone={() => { setScreen('home'); setBiz(null); }} />}
          </div>
          <TabBar active={screen === 'business' || screen === 'confirm' ? 'home' : screen}
            onChange={s => { setScreen(s === 'home' ? 'home' : s); }} />
          {/* Home indicator */}
          <div style={{
            position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
            width: 134, height: 5, background: 'rgba(0,0,0,.4)', borderRadius: 3, zIndex: 100,
          }} />
        </div>
      </div>

      <style>{`
        @keyframes pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ConsumerApp />);
