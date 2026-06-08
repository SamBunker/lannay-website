import { useState } from 'react';
import { categories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import '../styles/Portfolio.css';
import schoolFish from '../assets/images/scandi-61.png';
import scandi139 from '../assets/images/scandi-139.png';
import orangeFish from '../assets/images/scandi-small-orange-fish.png';
import cuteJellyfish from '../assets/images/cute-jellyfish-with-smiley-face.png';
import hammerfishImg from '../assets/images/scandi-hammerfish.png';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portfolio" id="portfolio">
      {/* Ocean decoration layer */}
      <div className="portfolio__ocean-layer">
        {/* Portfolio squid — floating right mid-section */}
        <div className="portfolio-squid">
          <img src={scandi139} alt="illustrated squid" />
        </div>

        {/* School of fish swimming across */}
        <div className="fish fish--school">
          <img src={schoolFish} alt="" />
        </div>

        {/* Solo orange fish at a different depth */}
        <div className="fish fish--solo">
          <img src={orangeFish} alt="" />
        </div>

        {/* Smiley jellyfish — left drift */}
        <div className="jellyfish jellyfish--2">
          <img src={cuteJellyfish} alt="smiling jellyfish" />
        </div>

        {/* Hammerfish — right side float */}
        <div className="hammerfish">
          <img src={hammerfishImg} alt="illustrated hammerhead shark" />
        </div>

      </div>

      <div className="container">
        <p className="section-label" style={{ color: 'var(--bioluminescent)' }}>Portfolio</p>
        <h2 className="section-title">
          Dive Into<br />
          <span className="accent-text">My Work</span>
        </h2>
        <p className="section-subtitle">
          From brand strategy to event coordination — here's a collection of projects
          where I've helped organizations connect with their audiences.
        </p>

        {/* Filter tabs */}
        <div className="portfolio__tabs" role="tablist">
          <button
            className={`portfolio__tab ${activeTab === 'all' ? 'portfolio__tab--active' : ''}`}
            onClick={() => setActiveTab('all')}
            role="tab"
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`portfolio__tab ${activeTab === cat.id ? 'portfolio__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              role="tab"
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Portfolio cards */}
        {categories
          .filter(cat => activeTab === 'all' || cat.id === activeTab)
          .map(cat => (
            <div key={cat.id} className="portfolio__category">
              <h3 className="portfolio__cat-title">{cat.title}</h3>
              <p className="portfolio__cat-desc">{cat.description}</p>
              <div className="portfolio__grid">
                {cat.items.map(item => (
                  <div
                    key={item.id}
                    className="portfolio__card"
                    onClick={() => setSelectedProject(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(item); }}
                  >
                    <div className="portfolio__card-inner">
                      <div className="portfolio__card-type">{item.type}</div>
                      <h4 className="portfolio__card-name">{item.name}</h4>
                      <span className="portfolio__card-date">{item.date}</span>
                      <div className="portfolio__card-tags">
                        {item.tags.map(tag => (
                          <span key={tag} className="portfolio__tag">{tag}</span>
                        ))}
                      </div>
                      <span className="portfolio__card-cta">View Details →</span>
                      <div className="portfolio__card-glow"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;
