import { useEffect, useRef } from 'react';
import { Shield, Bot, MapPin, Smartphone } from 'lucide-react';
import './FeaturesGrid.css';

const features = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    desc: 'Files are encrypted end-to-end and auto-deleted within 1 hour of printing.',
    extra: 'razorpay',
    color: 'var(--feature-security-color)',
    bg: 'var(--feature-security-bg)',
  },
  {
    icon: Bot,
    title: 'Smart Bot, Zero Learning Curve',
    desc: 'Works on WhatsApp AND Telegram. No new app. No account needed.',
    extra: 'channels',
    color: 'var(--feature-bot-color)',
    bg: 'var(--feature-bot-bg)',
  },
  {
    icon: MapPin,
    title: 'Campus Kiosks',
    desc: 'Kiosks placed at high-traffic campus spots. Always on. Always ready.',
    extra: 'kiosk',
    color: 'var(--feature-kiosk-color)',
    bg: 'var(--feature-kiosk-bg)',
  },
  {
    icon: Smartphone,
    title: 'Works on Any Phone',
    desc: 'No smartphone? No problem. The token works on any device with WhatsApp.',
    extra: 'phone',
    color: 'var(--feature-phone-color)',
    bg: 'var(--feature-phone-bg)',
  },
];

function FeatureExtra({ type }) {
  if (type === 'razorpay') return (
    <div className="feat-extra">
      <span className="feat-badge feat-badge--green">🔒 Encrypted</span>
      <span className="feat-badge feat-badge--blue">Razorpay</span>
    </div>
  );

  if (type === 'channels') return (
    <div className="feat-extra">
      <span className="feat-badge feat-badge--wa">WhatsApp</span>
      <span className="feat-badge feat-badge--tg">Telegram</span>
    </div>
  );

  if (type === 'kiosk') return (
    <div className="feat-kiosk-pins">
      <span className="feat-pin">📍 Library</span>
      <span className="feat-pin">📍 Canteen</span>
      <span className="feat-pin">📍 Main Gate</span>
    </div>
  );

  if (type === 'phone') return (
    <div className="feat-extra">
      <span className="feat-badge feat-badge--slate">Android</span>
      <span className="feat-badge feat-badge--slate">iOS</span>
      <span className="feat-badge feat-badge--slate">KaiOS</span>
    </div>
  );

  return null;
}

export default function FeaturesGrid() {
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
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="container">
        <div className="features-section__header reveal">
          <span className="section-eyebrow">Features</span>
          <h2 className="two-tone-heading features-heading" style={{ fontSize: 'var(--text-h2)', color: 'var(--navy)' }}>
            Everything You Need, <br></br><span className="accent">Nothing You Don't</span>
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="feat-card reveal"
                style={{ transitionDelay: `${i * 0.1}s`, '--feat-color': feat.color, '--feat-bg': feat.bg }}
              >
                <div className="feat-card__icon-wrap">
                  <Icon size={22} style={{ color: feat.color }} strokeWidth={2} />
                </div>
                <h3 className="feat-card__title">{feat.title}</h3>
                <p className="feat-card__desc">{feat.desc}</p>
                <FeatureExtra type={feat.extra} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
