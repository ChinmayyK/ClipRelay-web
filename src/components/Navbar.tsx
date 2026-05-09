import { useState, useEffect } from 'react';

export function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/logo.png" alt="" width={40} height={40} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--accent-alt)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ClipRelay</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#philosophy" className="nav-link">SYS_REQ</a>
          <a href="#features" className="nav-link">ARCH</a>
          <a href="https://github.com/ChinmayyK/cliprelay" className="nav-link">SRC</a>
          <button 
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            style={{ border: '1px solid var(--border)', padding: '0.25rem 0.5rem' }}
          >
            {theme === 'dark' ? 'INV_THEME' : 'DRK_THEME'}
          </button>
        </div>
      </div>
    </nav>
  );
}
