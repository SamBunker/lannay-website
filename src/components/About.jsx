import chloePhoto from '../assets/images/hero/chloe-3.png';
import '../styles/About.css';
import scandiFish from '../assets/images/scandi-small-green-fish.png';
import iconEsports from '../assets/images/icons8-gaming-hand-100.png';
import iconGraduate from '../assets/images/icons8-graduate-100.png';
import iconMedal from '../assets/images/icons8-medal2-100.png';
import iconPainting from '../assets/images/icons8-painting-100.png';
import iconTalking from '../assets/images/icons8-talking-100.png';
import iconKorea from '../assets/images/icons8-south-korea-100.png';

const funFacts = [
  { icon: iconGraduate, label: 'One Major, Triple Excellence', detail: 'Psych · Marketing · Media' },
  { icon: iconTalking, label: 'Brand Consultant', detail: 'Startup Strategy' },
  { icon: iconMedal, label: 'Led 14-Person Team', detail: 'Esports Marketing' },
  { icon: iconPainting, label: 'HubSpot Certified', detail: 'Digital Marketing' },
  { icon: iconKorea, label: 'Korean Club VP', detail: 'Cross-Cultural Events' },
  { icon: iconEsports, label: 'Esports Athlete', detail: 'Overwatch & Valorant' },

];

const skills = [
  'Marketing Strategy', 'Brand Design', 'Content Creation', 'Social Media',
  'Event Planning', 'Community Engagement', 'Adobe Creative Cloud', 'Graphic Communications',
];

function About() {
  return (
    <section className="about" id="about">
      {/* Small reef fish swimming through */}
      <div className="about__fish about__fish--1">
        <img src={scandiFish} alt="" />
      </div>

      <div className="about__inner">
        <div className="container">
          <div className="about__grid">
            <div className="about__content">
              <p className="section-label" style={{ color: 'var(--bright-cyan)' }}>About Me</p>
              <h2 className="section-title">
                Creative Heart,<br />
                <span className="accent-text">Strategic Mind</span>
              </h2>
              <p className="about__bio">
                I'm Chloe Webb — a creative professional with a background in Psychology,
                Marketing, and Integrated Media Arts. I thrive at the intersection of strategy
                and storytelling, helping organizations build authentic brands that connect
                with their communities.
              </p>
              <p className="about__bio">
                From directing marketing efforts for a collegiate esports program to consulting
                for local businesses and nonprofits, I bring a detail-oriented, audience-first
                approach to every project. Whether it's crafting a social media strategy,
                designing print materials, or planning a community event — I love turning
                ideas into impact.
              </p>
              <div className="about__skills">
                {skills.map(skill => (
                  <span key={skill} className="about__skill">{skill}</span>
                ))}
              </div>
            </div>

            <div className="about__image-col">
              <div className="about__portrait">
                <img src={chloePhoto} alt="Chloe Webb" />
                <div className="about__portrait-border"></div>
              </div>
            </div>
          </div>

          <div className="about__facts">
            {funFacts.map(fact => (
              <div key={fact.label} className="about__fact">
                <img src={fact.icon} alt="" className="about__fact-icon" />
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-detail">{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
