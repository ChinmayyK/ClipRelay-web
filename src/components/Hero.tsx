import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal text
    gsap.from('.hero-reveal', {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.2
    });

    // Orbiting nodes animation
    gsap.to('.orbit-node', {
      rotation: 360,
      transformOrigin: "center 200px",
      duration: 20,
      repeat: -1,
      ease: 'linear'
    });
    
    gsap.to('.orbit-node-reverse', {
      rotation: -360,
      transformOrigin: "center 140px",
      duration: 15,
      repeat: -1,
      ease: 'linear'
    });

    // Blinking diagnostic lights
    gsap.to('.status-led', {
      opacity: 0.3,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, { scope: container });

  return (
    <section ref={container} className="section" style={{ borderBottom: '1px dashed var(--border)', minHeight: 'calc(100vh - 85px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0' }}>
      
      {/* Background Graphic */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', maxWidth: '800px', maxHeight: '800px', pointerEvents: 'none', opacity: 0.1, zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', border: '1px solid var(--accent-alt)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '70%', border: '1px dashed var(--accent)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40%', height: '40%', border: '1px solid var(--fg)', borderRadius: '50%' }}></div>
        
        {/* Orbiting Elements */}
        <div className="orbit-node" style={{ position: 'absolute', top: 'calc(50% - 200px)', left: 'calc(50% - 6px)', width: '12px', height: '12px', background: 'var(--accent-alt)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent-alt)' }}></div>
        <div className="orbit-node-reverse" style={{ position: 'absolute', top: 'calc(50% - 140px)', left: 'calc(50% - 6px)', width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent)' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="hero-reveal" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.35rem 1rem', borderRadius: '50px', marginBottom: '2rem', background: 'rgba(16, 29, 53, 0.8)', backdropFilter: 'blur(8px)' }}>
          <span className="status-led" style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-alt)', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 10px var(--accent-alt)' }}></span>
          <span style={{ color: 'var(--accent-alt)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
            LOCAL MESH NETWORK ACTIVE
          </span>
        </div>

        <h1 className="hero-reveal" style={{ 
          fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', 
          color: 'var(--fg)', 
          letterSpacing: '-0.03em', 
          lineHeight: 1.05, 
          marginBottom: '1.5rem', 
          textTransform: 'none',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600
        }}>
          Continuity, <br/>
          <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--accent-alt)' }}>Decentralized.</span>
        </h1>

        <p className="hero-reveal" style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', 
          color: 'var(--fg-dim)', 
          maxWidth: '650px', 
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          Seamlessly sync your clipboard, transfer massive files, and share links across macOS, Windows, Linux, and Android. <strong>Zero cloud servers. Zero data collection.</strong>
        </p>

        <div className="hero-reveal hero-buttons" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <a href="https://github.com/ChinmayyK/cliprelay/releases" className="button-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', letterSpacing: '0.1em' }}>DOWNLOAD BUNDLE</a>
          <a href="https://github.com/ChinmayyK/cliprelay" className="button-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', border: '1px solid var(--border)', color: 'var(--fg)', textDecoration: 'none', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'all 0.2s', background: 'rgba(0,0,0,0.2)' }}>INSPECT SOURCE</a>
        </div>
        
        <div className="hero-reveal" style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--fg-dim)' }}>
          <span style={{ opacity: 0.5 }}>CURRENT BUILD:</span> <span style={{ color: 'var(--accent)' }}>v1.0.0-BETA</span> <span style={{ margin: '0 0.5rem', opacity: 0.3 }}>|</span> <span style={{ opacity: 0.5 }}>CORE:</span> <span style={{ color: 'var(--accent-alt)' }}>RUST (TOKIO)</span>
        </div>

      </div>
    </section>
  );
}
