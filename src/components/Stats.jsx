import { useEffect, useRef, useState } from 'react';
import '../styles/Stats.css';

const stats = [
  { value: 7,   suffix: '+', label: 'Clients Served',       sub: 'Brands, nonprofits & startups' },
  { value: 50,  suffix: '+', label: 'Athletes Supported',    sub: 'Juniata College Esports program' },
  { value: 14,  suffix: '',  label: 'Staff Members Led',     sub: 'Marketing & community relations' },
  { value: 10,  suffix: '+', label: 'Events Coordinated',    sub: 'Watch parties, sponsors & more' },
  { value: 100, suffix: '+', label: 'Community Members',     sub: 'Ministry of Games RSO' },
  { value: 5,   suffix: '',  label: 'Certifications',        sub: 'HubSpot, Apple & NOCTI' },
  { value: 3,   suffix: '',  label: 'Areas of Study',        sub: 'Psych · Marketing · Media Arts' },
  { value: 3.6, suffix: '',  label: 'GPA',                   sub: 'Graduated December 2024' },
];

function useCountUp(target, duration = 1400, started = false) {
  const [count, setCount] = useState(0);
  const isDecimal = !Number.isInteger(target);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, isDecimal]);

  return count;
}

function StatCard({ value, suffix, label, sub, started }) {
  const count = useCountUp(value, 1400, started);
  return (
    <div className="stats__card">
      <span className="stats__number">
        {Number.isInteger(value) ? count : count.toFixed(1)}{suffix}
      </span>
      <span className="stats__label">{label}</span>
      <span className="stats__sub">{sub}</span>
    </div>
  );
}

function Stats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" id="stats" ref={sectionRef}>
      <div className="container">
        <p className="section-label" style={{ color: 'var(--bioluminescent)' }}>By The Numbers</p>
        <h2 className="section-title">
          Results That<br />
          <span className="accent-text">Speak For Themselves</span>
        </h2>

        <div className="stats__grid">
          {stats.map(s => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
