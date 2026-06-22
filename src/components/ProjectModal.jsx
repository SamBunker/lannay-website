import { useEffect, useRef } from 'react';
import '../styles/ProjectModal.css';

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close when clicking backdrop (outside content)
  const handleBackdropClick = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div className="modal" ref={modalRef} onClick={handleBackdropClick}>
      <div className="modal__content" ref={contentRef}>
        {/* Close button */}
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Header */}
        <div className="modal__header">
          <span className="modal__type">{project.type}</span>
          <h2 className="modal__title">{project.name}</h2>
          <div className="modal__meta">
            <span className="modal__date">{project.date}</span>
            <div className="modal__tags">
              {project.tags.map(tag => (
                <span key={tag} className="modal__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Images gallery */}
        {project.images && project.images.length > 0 && (
          <div className="modal__gallery">
            {project.images.map((img, i) => (
              <div key={i} className="modal__gallery-item">
                <img src={img.src} alt={img.alt || project.name} />
                {img.caption && <p className="modal__gallery-caption">{img.caption}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="modal__body">
          <p className="modal__description">{project.description}</p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal__highlights">
              <h3 className="modal__section-title">Key Contributions</h3>
              <ul>
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Documents / Links */}
        {project.documents && project.documents.length > 0 && (
          <div className="modal__documents">
            <h3 className="modal__section-title">Documents & Links</h3>
            <div className="modal__doc-list">
              {project.documents.map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__doc"
                >
                  <span className="modal__doc-icon">
                    {doc.type === 'pdf' ? '📄' : doc.type === 'link' ? '🔗' : doc.type === 'video' ? '🎬' : '📁'}
                  </span>
                  <span className="modal__doc-info">
                    <span className="modal__doc-name">{doc.name}</span>
                    <span className="modal__doc-type">{doc.type?.toUpperCase()}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer action */}
        <div className="modal__footer">
          <button className="btn-wave" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
