import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Philosophy() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.phil-header', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.phil-content', {
      scrollTrigger: {
        trigger: '.phil-content',
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} id="philosophy" className="section">
      <div className="container">
        <span className="label phil-header">SYS_REQ</span>
        <h2 className="phil-header">Architectural Intent</h2>
        
        <div className="schematic-card phil-content" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.125rem)', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--fg)' }}>
            Most modern continuity systems rely heavily on ecosystem lock-in, proprietary account dependencies, and cloud-based routing. The result is a telemetry-heavy, black-box architecture where users inherently lose ownership, control, and local autonomy.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.125rem)', lineHeight: 1.8, margin: 0, color: 'var(--fg)' }}>
            ClipRelay bypasses this entirely. Utilizing a high-performance Rust core, data never leaves your local network. It works natively across platforms without enforcing a corporate ecosystem, and employs an activity-centric workflow to protect you from silent remote overwrites.
          </p>
        </div>
      </div>
    </section>
  );
}
