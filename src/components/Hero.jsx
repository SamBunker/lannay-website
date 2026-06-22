import lannayLogo from '../assets/images/lannay.svg';
import '../styles/Hero.css';

function Hero() {
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
        <div className="hero__signature-wrap">
          <img src={lannayLogo} alt="Lannay" className="hero__lannay" />
          <span className="hero__dotcom">.com</span>
        </div>

        <div className="hero__credit">
          <span className="hero__wave-hand">👋</span>
          <span className="hero__credit-text">
            Hi, I'm <strong className="hero__credit-name">Chloe Webb</strong> — and I love making ideas come to life.
          </span>
        </div>

        <p className="hero__summary">
          I help organizations communicate consistently, engage communities,
          and bring ideas to life through strategy and design.
        </p>

        <div className="hero__actions">
          <a href="#portfolio" className="btn-wave">View My Work</a>
          <a href="#contact" className="btn-wave btn-wave--accent">Get In Touch</a>
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
