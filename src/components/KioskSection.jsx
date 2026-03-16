import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './KioskSection.css';

const bullets = [
  'No touchscreen login needed',
  'PIN or QR scan to release',
  'Document auto-deleted post-print',
  'Available 24 hours, 7 days a week',
];

function KioskIllustration() {
  return (
    <div className="kiosk-illus">
      {/* Glow halo */}
      <div className="kiosk-illus__glow" />

      {/* Kiosk body */}
      <div className="kiosk-body">
        {/* Top panel with screen */}
        <div className="kiosk-screen">
          <div className="kiosk-screen__inner">
            <div className="kiosk-screen__brand">
              <span className="kiosk-brand-copy">Copy</span>
              <span className="kiosk-brand-flow">Flow</span>
            </div>
            <div className="kiosk-screen__status">CF-4821 ✅</div>
            <div className="kiosk-screen__msg">Printing...</div>
            <div className="kiosk-screen__bar">
              <div className="kiosk-screen__bar-fill" />
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="kiosk-logo-strip">🖨️ CopyFlow</div>

        {/* Keypad dots */}
        <div className="kiosk-keypad">
          {[...Array(9)].map((_, i) => <div key={i} className="kiosk-key" />)}
        </div>

        {/* Output slot */}
        <div className="kiosk-slot">
          <div className="kiosk-slot__paper" />
        </div>
      </div>

      {/* Floating token badge */}
      <div className="kiosk-token-badge">
        🔑 <span className="kiosk-token-text">CF-4821</span>
      </div>
    </div>
  );
}

export default function KioskSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="colleges" className="kiosk-section" ref={sectionRef}>
      <div className="container">
        <div className="kiosk-section__grid">
          {/* Left: Text */}
          <div className="kiosk-section__text reveal">
           
            <h2 className="two-tone-heading kiosk-section__h2">
              Walk Up. <span className="accent">Scan. Done.</span>
            </h2>
            <p className="kiosk-section__body">
              CopyFlow kiosks live on your campus — near the library, canteen, or main block.
              Open 24/7. Just enter your PIN and your document comes out.
            </p>
            <ul className="kiosk-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <CheckCircle2 size={18} className="kiosk-check" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="btn-primary" style={{ marginTop: '32px', alignSelf: 'flex-start' }}>
              Find a Kiosk Near You →
            </a>
          </div>

          {/* Right: Kiosk illustration */}
          <div className="kiosk-section__illus reveal" style={{ transitionDelay: '0.2s' }}>
            <KioskIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
