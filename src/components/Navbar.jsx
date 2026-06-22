import { useState, useEffect, useRef } from 'react';
import lannayLogo from '../assets/images/lannay.svg';
import { searchAll } from '../data/searchIndex';
import '../styles/Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowLogo(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery('');
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = query.length >= 2 ? searchAll(query) : [];

  const grouped = results.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const handleSearchToggle = () => {
    setSearchOpen(prev => !prev);
    setQuery('');
    if (!searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleResultClick = (href) => {
    setSearchOpen(false);
    setQuery('');
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className={`nav__logo ${showLogo ? 'nav__logo--visible' : ''}`}>
          <img src={lannayLogo} alt="Lannay" className="nav__logo-img" />
        </a>

        <div className="nav__right">
          <button
            className={`nav__toggle ${menuOpen ? 'nav__toggle--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav__link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Search — after Contact */}
          <div className={`nav__search ${searchOpen ? 'nav__search--open' : ''}`} ref={wrapRef}>
            <button
              className="nav__search-btn"
              onClick={handleSearchToggle}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
            >
              {searchOpen
                ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              }
            </button>

            {searchOpen && (
              <div className="nav__search-field">
                <input
                  ref={inputRef}
                  className="nav__search-input"
                  type="text"
                  placeholder="Search portfolio, experience…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onFocus={() => setFocused(true)}
                />

                {focused && query.length >= 2 && (
                  <div className="nav__search-dropdown">
                    {Object.keys(grouped).length === 0 ? (
                      <div className="nav__search-empty">No results for "{query}"</div>
                    ) : (
                      Object.entries(grouped).map(([group, items]) => (
                        <div key={group} className="nav__search-group">
                          <div className="nav__search-group-label">{group}</div>
                          {items.map((item, i) => (
                            <button
                              key={i}
                              className="nav__search-result"
                              onClick={() => handleResultClick(item.href)}
                            >
                              <span className="nav__search-result-label">{item.label}</span>
                              <span className="nav__search-result-sub">{item.sublabel}</span>
                            </button>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
