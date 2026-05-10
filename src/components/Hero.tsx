import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    // Left content
    gsap.from('.hero-content > *', {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    });

    // Terminal 3D pop-in
    gsap.from('.hero-visual', {
      opacity: 0,
      scale: 0.9,
      rotationY: -15,
      rotationX: 10,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out'
    });

    // Terminal lines
    gsap.from('.t-line', {
      opacity: 0,
      x: -10,
      duration: 0.1,
      stagger: 0.4,
      delay: 1.2
    });

    // Blinking diagnostic lights
    gsap.to('.status-led', {
      opacity: 0.2,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: 'steps(1)'
    });
  }, { scope: container });

  return (
    <section ref={container} className="section" style={{ borderBottom: '1px dashed var(--border)', minHeight: 'calc(100vh - 85px)', display: 'flex', alignItems: 'center', perspective: '1000px' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="hero-content">
            <span className="label">SYS_VERSION: 1.0.0-BETA</span>
            <h1 className="glitch" data-text="Continuity Infrastructure">Continuity<br/>Infrastructure</h1>
            <p style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>
              ClipRelay transforms your local network into a private, encrypted mesh. Clipboard state, files, and activity move fluidly between your personal devices without ever leaving your network or touching the cloud.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="https://github.com/ChinmayyK/cliprelay" className="button-primary">INITIATE_SOURCE</a>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--fg-dim)', borderBottom: '1px dashed var(--fg-dim)' }}>&lt; 5MB BINARY</span>
            </div>
          </div>

          <div className="hero-visual" style={{ position: 'relative', transformStyle: 'preserve-3d' }}>
            <div className="terminal">
              <div className="t-lines" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="t-line"><span style={{ color: 'var(--accent)' }}>&gt;</span> cliprelay daemon start</div>
                <div className="t-line" style={{ color: 'var(--fg-dim)' }}>[SYS_INIT] Core engine online (Rust 1.80)</div>
                <div className="t-line" style={{ color: 'var(--fg-dim)' }}>[NET_BIND] Listening on 0.0.0.0:8080</div>
                <div className="t-line" style={{ color: 'var(--fg-dim)' }}>[MDNS_DISC] Found MacBook-Pro.local</div>
                <div className="t-line" style={{ color: 'var(--fg-dim)' }}>[MDNS_DISC] Found Pixel-7.local</div>
                <div className="t-line" style={{ color: 'var(--accent-alt)' }}>[SEC_HAND] X25519 Tunnel established</div>
                <div className="t-line" style={{ color: 'var(--accent)' }}>[STATUS_OK] Mesh active. Awaiting propagation.<span className="cursor-blink"></span></div>
              </div>
            </div>
            
            {/* Diagnostic Panel */}
            <div className="diagnostic-panel">
              <div>
                <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-alt)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>UPLINK</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="status-led" style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>SECURE</span>
                </div>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--accent-alt)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>PEERS</span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>03_ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
