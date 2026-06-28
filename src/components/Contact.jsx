import { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import anglerfish from '../assets/images/anglerfish.webp';

const TURNSTILE_SITEKEY = '0x4AAAAAADsbGJuYr_lMqDHf';
const SITEVERIFY_URL = 'https://turnstile-siteverify-lannay.samuelbunker.workers.dev';

const EMPTY = { name: '', email: '', message: '', honey: '' };

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

  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');
  const tsRef = useRef(null);
  const tsWidgetId = useRef(null);

  useEffect(() => {
    if (!TURNSTILE_SITEKEY) return;
    const render = () => {
      if (!tsRef.current || tsWidgetId.current !== null) return;
      tsWidgetId.current = window.turnstile.render(tsRef.current, {
        sitekey: TURNSTILE_SITEKEY,
        action: 'turnstile-spin-v1',
        theme: 'dark',
      });
    };
    if (window.turnstile) {
      render();
    } else {
      const script = document.querySelector('script[src*="turnstile"]');
      if (script) script.addEventListener('load', render);
      return () => script?.removeEventListener('load', render);
    }
  }, []);

  const resetTurnstile = () => {
    if (window.turnstile && tsWidgetId.current !== null) {
      window.turnstile.reset(tsWidgetId.current);
    }
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    try {
      if (TURNSTILE_SITEKEY && SITEVERIFY_URL) {
        const tsToken = (window.turnstile && tsWidgetId.current !== null)
          ? window.turnstile.getResponse(tsWidgetId.current)
          : document.querySelector('[name="cf-turnstile-response"]')?.value || '';

        if (!tsToken) {
          setStatus('error');
          setError('Please complete the security check.');
          return;
        }

        const tsRes = await fetch(SITEVERIFY_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ token: tsToken }),
        });
        const tsData = await tsRes.json().catch(() => ({}));
        if (!tsData.success) {
          setStatus('error');
          setError('Security check failed. Please try again.');
          resetTurnstile();
          return;
        }
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus('success');
        setForm(EMPTY);
        resetTurnstile();
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
        resetTurnstile();
      }
    } catch {
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  };

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
        {/* Top: contact info + anglerfish */}
        <div className="contact__layout">
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

          <div className="contact__right">
            <div className="contact__anglerfish-wrap">
              <img src={anglerfish} alt="illustrated deep sea anglerfish" />
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact__form-wrap">
          <div className="contact__form-header">
            <p className="section-label" style={{ color: 'var(--bioluminescent)' }}>Send a Signal</p>
            <h3 className="contact__form-title">Drop a Message<br /><span className="accent-text">Into the Deep</span></h3>
          </div>

          {status === 'success' ? (
            <div className="contact__success" role="status">
              <div className="contact__success-icon">
                <div className="contact__success-bubbles">
                  {[...Array(5)].map((_, i) => <span key={i} className="contact__success-bubble" style={{ '--i': i }} />)}
                </div>
                ✓
              </div>
              <h4>Message received.</h4>
              <p>Thanks for reaching out — I&apos;ll get back to you soon.</p>
              <button type="button" className="btn-wave btn-wave--ghost" onClick={() => setStatus('idle')}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__fields-row">
                <div className="contact__field">
                  <label htmlFor="lc-name">Name <span aria-hidden="true">*</span></label>
                  <input id="lc-name" type="text" required placeholder="Your name"
                    autoComplete="name" value={form.name} onChange={update('name')} />
                </div>
                <div className="contact__field">
                  <label htmlFor="lc-email">Email <span aria-hidden="true">*</span></label>
                  <input id="lc-email" type="email" required placeholder="your@email.com"
                    autoComplete="email" value={form.email} onChange={update('email')} />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="lc-message">Message <span aria-hidden="true">*</span></label>
                <textarea id="lc-message" rows="5" required placeholder="Tell me about your project..."
                  value={form.message} onChange={update('message')} />
              </div>

              {/* Honeypot */}
              <div className="contact__hp" aria-hidden="true">
                <label htmlFor="lc-honey">Website</label>
                <input id="lc-honey" type="text" tabIndex={-1} autoComplete="off"
                  value={form.honey} onChange={update('honey')} />
              </div>

              {TURNSTILE_SITEKEY && <div ref={tsRef} className="cf-turnstile contact__turnstile" />}

              {status === 'error' && <p className="contact__error" role="alert">{error}</p>}

              <button type="submit" className="btn-wave" disabled={status === 'sending'}>
                {status === 'sending' ? 'Transmitting…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
