import { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const stats = [
  { value: 10000, suffix: '+', label: 'Prints Served', prefix: '' },
  { value: 60,    suffix: 's', label: 'Print Time',    prefix: '<' },
  { value: 2,     suffix: '',  label: 'Per B&W Page',  prefix: '₹' },
];

function CountUp({ target, suffix, prefix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const steps     = 60;
    const increment = target / steps;
    let current     = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  const display = target >= 1000
    ? (count >= 1000 ? (count / 1000).toFixed(1).replace('.0', '') + 'k' : count)
    : count;

  return (
    <span className="stat__num">
      {prefix}{display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      {/* Background pattern */}
      <div className="stats-section__bg" aria-hidden="true" />

      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item" style={{ animationDelay: `${i * 0.15}s` }}>
              <CountUp target={s.value} suffix={s.suffix} prefix={s.prefix} active={active} />
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="stats-section__sub">
          Growing every week across campuses in Pune, Mumbai, and Bangalore
        </p>
      </div>
    </section>
  );
}
