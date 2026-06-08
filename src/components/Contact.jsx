import { useMemo } from 'react';
import '../styles/Contact.css';
import anglerfish from '../assets/images/anglerfish.webp';

function Contact() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: `${Math.random() * 6}s`,
      x: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 6}s`,
      size: `${2 + Math.random() * 4}px`,
    })),
  []);

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
              Let's Create<br />
              <span className="accent-text">Together</span>
            </h2>
            <p className="contact__desc">
              Whether you need a marketing strategy, brand consultation, event coordination,
              or creative content — I'd love to hear about your project.
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
      </div>
    </section>
  );
}

export default Contact;
