import { timeline, certifications, education } from '../data/portfolioData';
import '../styles/Experience.css';
import cuteJellyfish from '../assets/images/cute-jellyfish-with-smiley-face.png';

function Experience() {
  return (
    <section className="experience" id="experience">
      {/* Deep sea decoration layer */}
      <div className="experience__ocean-layer">
        {/* Anglerfish — swims slowly with glowing lure */}
        <div className="anglerfish">
          <svg width="50" height="35" viewBox="0 0 50 35" fill="none">
            {/* Body */}
            <ellipse cx="28" cy="20" rx="16" ry="12" fill="rgba(30,20,40,0.5)" stroke="rgba(100,80,120,0.2)" strokeWidth="0.8" />
            {/* Tail fin */}
            <polygon points="44,20 50,12 50,28" fill="rgba(30,20,40,0.35)" />
            {/* Eye */}
            <circle cx="18" cy="17" r="2.5" fill="rgba(0,255,204,0.4)" />
            <circle cx="18" cy="17" r="1" fill="rgba(0,255,204,0.8)" />
            {/* Lure stalk */}
            <path d="M16,14 Q10,5 8,2" stroke="rgba(100,80,120,0.25)" strokeWidth="0.8" fill="none" />
            {/* Glowing lure */}
            <circle cx="8" cy="2" r="3" fill="rgba(0,255,204,0.15)" />
            <circle cx="8" cy="2" r="1.5" fill="rgba(0,255,204,0.5)" className="angler-lure" />
          </svg>
        </div>

        {/* Deep sea jellyfish */}
        <div className="deep-jelly">
          <img src={cuteJellyfish} alt="smiling jellyfish" />
        </div>

      </div>

      <div className="container">
        <p className="section-label" style={{ color: 'var(--bioluminescent)' }}>Experience</p>
        <h2 className="section-title">
          Into the<br />
          <span className="accent-text">Depths</span>
        </h2>
        <p className="section-subtitle">
          My professional journey — each role taking me deeper into marketing, community building, and creative strategy.
        </p>

        {/* Timeline */}
        <div className="experience__timeline">
          <div className="experience__line"></div>

          {timeline.map((item, i) => (
            <div
              key={item.role}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
            >
              <div className="experience__marker">
                <div className="experience__marker-dot"></div>
                <span className="experience__depth">{item.depth}</span>
              </div>
              <div className="experience__card">
                <span className="experience__period">{item.period}</span>
                <h3 className="experience__role">{item.role}</h3>
                <span className="experience__org">{item.org}</span>
                <ul className="experience__highlights">
                  {item.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="experience__certs">
          <h3 className="experience__certs-title">Certifications</h3>
          <div className="experience__certs-grid">
            {certifications.map(cert => (
              <div key={cert.name} className="experience__cert">
                <span className="experience__cert-name">{cert.name}</span>
                <span className="experience__cert-meta">{cert.issuer} · {cert.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="experience__edu">
          <h3 className="experience__certs-title">Education</h3>
          <div className="experience__edu-grid">
            {education.map(edu => (
              <div key={edu.school} className="experience__edu-item">
                <h4>{edu.school}</h4>
                <p>{edu.degree}</p>
                <span className="experience__cert-meta">{edu.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
