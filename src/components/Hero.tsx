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

    // Mouse Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!container.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to('.parallax-bg', {
        x: xPos * 2,
        y: yPos * 2,
        rotationX: -yPos * 0.5,
        rotationY: xPos * 0.5,
        ease: 'power2.out',
        duration: 1
      });
      
      gsap.to('.parallax-fg', {
        x: -xPos,
        y: -yPos,
        ease: 'power2.out',
        duration: 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Reveal terminal card
    gsap.from('.hero-terminal-card', {
      opacity: 0,
      y: 60,
      rotationX: 10,
      transformPerspective: 1000,
      duration: 1.5,
      delay: 0.8,
      ease: 'power3.out'
    });

    // Orbiting rings animation (rotating the entire container is perfectly responsive)
    gsap.to('.orbit-ring-1', {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'linear'
    });
    
    gsap.to('.orbit-ring-2', {
      rotation: -360,
      duration: 35,
      repeat: -1,
      ease: 'linear'
    });

    gsap.to('.orbit-ring-3', {
      rotation: 360,
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
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: container });

  return (
    <section ref={container} className="section" style={{ borderBottom: '1px dashed var(--border)', minHeight: 'calc(100vh - 85px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0', perspective: '1000px' }}>
      
      {/* Background Graphic */}
      <div className="parallax-bg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', maxWidth: '1000px', maxHeight: '1000px', pointerEvents: 'none', zIndex: 0, transformStyle: 'preserve-3d' }}>
        
        {/* Core Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateZ(-100px)', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)', filter: 'blur(30px)' }}></div>
        
        {/* Radar Rings */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', border: '1px solid rgba(56, 189, 248, 0.1)', borderRadius: '50%', transform: 'translateZ(-50px)' }}></div>
        <div style={{ position: 'absolute', top: '25%', left: '25%', width: '50%', height: '50%', border: '1px dashed rgba(249, 115, 22, 0.2)', borderRadius: '50%', transform: 'translateZ(-25px)' }}></div>
        <div style={{ position: 'absolute', top: '38%', left: '38%', width: '24%', height: '24%', border: '1px dotted rgba(226, 232, 240, 0.2)', borderRadius: '50%' }}></div>
        
        {/* Orbiting Elements */}
        <div className="orbit-ring-1" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
          <div style={{ position: 'absolute', top: '10%', left: 'calc(50% - 6px)', transform: 'translateY(-50%) translateZ(20px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--accent-alt)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent-alt)' }}></div>
            <div style={{ background: 'rgba(16, 29, 53, 0.6)', backdropFilter: 'blur(4px)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>MacBook Pro</div>
          </div>
        </div>
        
        <div className="orbit-ring-2" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
          <div style={{ position: 'absolute', top: '25%', left: 'calc(50% - 6px)', transform: 'translateY(-50%) translateZ(40px)', display: 'flex', alignItems: 'center', gap: '8px', flexDirection: 'row-reverse' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 20px var(--accent)' }}></div>
            <div style={{ background: 'rgba(16, 29, 53, 0.6)', backdropFilter: 'blur(4px)', border: '1px solid rgba(249, 115, 22, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>Pixel 7</div>
          </div>
        </div>
        
        <div className="orbit-ring-3" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
          <div style={{ position: 'absolute', top: '38%', left: 'calc(50% - 4px)', transform: 'translateY(-50%) translateZ(60px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--fg)', borderRadius: '50%', boxShadow: '0 0 15px var(--fg)' }}></div>
            <div style={{ background: 'rgba(16, 29, 53, 0.6)', backdropFilter: 'blur(4px)', border: '1px solid rgba(226, 232, 240, 0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>Win11 Desktop</div>
          </div>
        </div>
      </div>

      <div className="container parallax-fg" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
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
          fontWeight: 600,
          textShadow: '0 0 40px rgba(56, 189, 248, 0.2)'
        }}>
          Continuity, <br/>
          <span className="glitch" data-text="Decentralized." style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--accent-alt)' }}>Decentralized.</span>
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
        
        <div className="hero-reveal" style={{ marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--fg-dim)' }}>
          <span style={{ opacity: 0.5 }}>CURRENT BUILD:</span> <span style={{ color: 'var(--accent)' }}>v1.0.0-BETA</span> <span style={{ margin: '0 0.5rem', opacity: 0.3 }}>|</span> <span style={{ opacity: 0.5 }}>CORE:</span> <span style={{ color: 'var(--accent-alt)' }}>RUST (TOKIO)</span>
        </div>

        {/* Glassmorphic Terminal Window */}
        <div className="hero-terminal-card" style={{ marginTop: '3rem', width: '100%', maxWidth: '700px', background: 'rgba(16, 29, 53, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '12px', padding: '1.5rem', textAlign: 'left', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }}></div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 3vw, 0.9rem)', color: 'var(--fg-dim)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div><span style={{ color: 'var(--accent)' }}>❯</span> cliprelay daemon start --mesh</div>
            <div>[SYS] Core engine online. Initializing mDNS discovery...</div>
            <div>[P2P] Discovered 3 local nodes <span style={{ color: 'var(--fg)', opacity: 0.6 }}>(Win11-Desktop, Pixel-7, Mac-Studio)</span></div>
            <div>[SEC] Handshake complete. Establishing X25519 tunnel... <span style={{ color: 'var(--accent-alt)' }}>[OK]</span></div>
            <div style={{ color: 'var(--fg)' }}>[ACT] Mesh synchronized. Listening for events.<span className="cursor-blink"></span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
