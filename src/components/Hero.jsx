import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const STATEMENT_WORDS = [
  { text: 'Ideas',      accent: false },
  { text: 'deserve',    accent: false },
  { text: '\n',         break: true   },
  { text: 'better',     accent: true  },
  { text: 'execution.', accent: false },
];

const BASE_DELAY = 0.15;
const CHAR_STEP  = 0.018;

function Hero() {
  const statementRef = useRef(null);

  useEffect(() => {
    const el = statementRef.current;
    if (!el) return;

    let charIndex = 0;

    STATEMENT_WORDS.forEach((word, wi) => {
      if (word.break) {
        el.appendChild(document.createElement('br'));
        return;
      }

      if (wi > 0 && !STATEMENT_WORDS[wi - 1].break) {
        const sp = document.createElement('span');
        sp.className = 'hero__char hero__char--space';
        sp.style.animationDelay = `${BASE_DELAY + charIndex * CHAR_STEP}s`;
        sp.innerHTML = '&nbsp;';
        el.appendChild(sp);
        charIndex++;
      }

      const wordWrap = document.createElement('span');
      wordWrap.style.cssText = 'display:inline-block;white-space:nowrap;';
      el.appendChild(wordWrap);

      for (const ch of word.text) {
        const span = document.createElement('span');
        span.className = 'hero__char' + (word.accent ? ' hero__char--accent' : '');
        span.style.animationDelay = `${BASE_DELAY + charIndex * CHAR_STEP}s`;
        span.textContent = ch;
        wordWrap.appendChild(span);
        charIndex++;
      }
    });

    return () => { el.innerHTML = ''; };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__sky">
        <div className="hero__sun" />
        <div className="hero__horizon-glow" />
      </div>

      <div className="hero__waves">
        <svg className="hero__wave hero__wave--1" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,50 1440,60 L1440,120 L0,120 Z" fill="rgba(4, 116, 186, 0.3)"/>
        </svg>
        <svg className="hero__wave hero__wave--2" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" fill="rgba(0, 167, 225, 0.2)"/>
        </svg>
      </div>

      <div className="hero__content">
        <p className="hero__statement" ref={statementRef} />

        <div className="hero__identity-bar">
          <span className="hero__id-name">Chloe Webb</span>
          <span className="hero__id-sep" />
          <span className="hero__id-logo">Lannay<span className="hero__dotcom">.com</span></span>
          <span className="hero__id-sep" />
          <span className="hero__id-role">Brand Strategy &amp; Design</span>
        </div>

        <div className="hero__actions">
          <a href="#portfolio" className="btn-wave">View My Work</a>
          <a href="#contact" className="btn-wave btn-wave--ghost">Get In Touch</a>
        </div>

        <div className="hero__scroll-cue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
