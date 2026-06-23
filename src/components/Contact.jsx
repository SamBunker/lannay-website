import { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import anglerfish from '../assets/images/anglerfish.webp';

function TreasureChest() {
  const [phase, setPhase] = useState('closed'); // closed | open | grabbed | gone
  const timerRef = useRef(null);

  const handleClick = () => {
    if (phase !== 'closed') return;
    setPhase('open');
    timerRef.current = setTimeout(() => setPhase('grabbed'), 3000);
  };

  useEffect(() => {
    if (phase === 'grabbed') {
      timerRef.current = setTimeout(() => setPhase('gone'), 1800);
    }
    return () => clearTimeout(timerRef.current);
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div className={`chest-wrap chest-wrap--${phase}`} onClick={handleClick} role="button" tabIndex={0} aria-label="Open treasure chest">
      {/* Bubbles that float up when chest opens */}
      {(phase === 'open' || phase === 'grabbed') && (
        <div className="chest__bubbles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="chest__bubble" style={{ '--i': i }} />
          ))}
        </div>
      )}

      {/* Squid arm that reaches in when grabbed */}
      {(phase === 'grabbed') && (
        <div className="chest__squid-arm">
          <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120,30 C90,25 70,15 50,20 C35,24 20,32 10,30" stroke="rgba(180,100,220,0.85)" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <path d="M50,20 C48,10 44,5 40,8" stroke="rgba(180,100,220,0.7)" strokeWidth="4" strokeLinecap="round"/>
            <path d="M35,24 C32,14 28,10 25,13" stroke="rgba(180,100,220,0.7)" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M20,30 C18,20 15,16 12,18" stroke="rgba(180,100,220,0.7)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      {/* Chest SVG */}
      <svg className={`chest__svg chest__svg--${phase}`} viewBox="0 0 90 65" xmlns="http://www.w3.org/2000/svg">
        {/* Chest body */}
        <rect x="5" y="32" width="80" height="28" rx="4" fill="#5c3d0e" stroke="#3a2508" strokeWidth="1.5"/>
        <rect x="5" y="40" width="80" height="4" fill="#c8920a" opacity="0.75"/>
        {/* Lock plate */}
        <rect x="36" y="34" width="18" height="14" rx="2" fill="#c8920a" stroke="#7a5506" strokeWidth="1"/>
        <circle cx="45" cy="39" r="3.5" fill="#3a2508"/>
        <rect x="43" y="40" width="4" height="5" rx="1" fill="#3a2508"/>
        {/* Lid — open state rotates this group */}
        <g className={`chest__lid ${phase === 'open' || phase === 'grabbed' ? 'chest__lid--open' : ''}`}>
          <rect x="5" y="8" width="80" height="26" rx="4" fill="#7a5212" stroke="#3a2508" strokeWidth="1.5"/>
          <path d="M5,24 Q45,8 85,24" fill="#6b4510" stroke="#3a2508" strokeWidth="1"/>
          <rect x="5" y="26" width="80" height="4" fill="#c8920a" opacity="0.75"/>
          {/* Lid hinges */}
          <circle cx="15" cy="32" r="3" fill="#c8920a" stroke="#7a5506" strokeWidth="0.8"/>
          <circle cx="75" cy="32" r="3" fill="#c8920a" stroke="#7a5506" strokeWidth="0.8"/>
        </g>
        {/* Gold coins peeking out when open */}
        {(phase === 'open' || phase === 'grabbed') && (
          <>
            <ellipse cx="38" cy="34" rx="6" ry="3" fill="#f0b800" opacity="0.9"/>
            <ellipse cx="50" cy="33" rx="5" ry="2.5" fill="#e8a500" opacity="0.85"/>
            <ellipse cx="58" cy="34" rx="4" ry="2" fill="#f0b800" opacity="0.9"/>
          </>
        )}
      </svg>

      {!['open', 'grabbed'].includes(phase) && (
        <span className="chest__hint">click me</span>
      )}
    </div>
  );
}

function Contact() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: `${Math.random() * 6}s`,
      x: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 6}s`,
      size: `${2 + Math.random() * 4}px`,
    }))
  );

  return (
    <section className="contact" id="contact">
      {/* Bioluminescent particles */}
      <div className="contact__particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              '--delay': p.delay,
              '--x': p.x,
              '--duration': p.duration,
              '--size': p.size,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="contact__layout">
          {/* Left: contact info */}
          <div className="contact__left">
            <p className="section-label" style={{ color: 'var(--bioluminescent)' }}>Get In Touch</p>
            <h2 className="section-title">
              Let&apos;s Create<br />
              <span className="accent-text">Together</span>
            </h2>
            <p className="contact__desc">
              Whether you need a marketing strategy, brand consultation, event coordination,
              or creative content — I&apos;d love to hear about your project.
            </p>

            <div className="contact__links">
              <a href="mailto:webbcl20@gmail.com" className="contact__link">
                <span className="contact__link-icon">✉</span>
                <div className="contact__link-text">
                  <strong>Email</strong>
                  <span>webbcl20@gmail.com</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/webbcl" target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="contact__link-icon">in</span>
                <div className="contact__link-text">
                  <strong>LinkedIn</strong>
                  <span>linkedin.com/in/webbcl</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: anglerfish */}
          <div className="contact__right">
            <div className="contact__anglerfish-wrap">
              <img src={anglerfish} alt="illustrated deep sea anglerfish" />
            </div>
          </div>
        </div>

        {/* Treasure chest — bottom of section */}
        <div className="contact__chest-area">
          <TreasureChest />
        </div>
      </div>
    </section>
  );
}

export default Contact;
