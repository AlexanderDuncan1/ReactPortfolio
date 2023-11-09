import React, { useState, useEffect } from 'react';

function Header() {
  const [currentSection, setCurrentSection] = useState(window.location.hash.replace('#', '') || 'about');

  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setCurrentSection(hash);
    } else {
      setCurrentSection('about');
    }
  };

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'contact', 'resume'];
      const current = sections.map((id) => document.getElementById(id))
                              .find((section) => {
                                if (section) {
                                  const rect = section.getBoundingClientRect();
                                  return rect.top >= 0 && rect.bottom <= window.innerHeight;
                                }
                                return false;
                              });
      if (current && current.id !== currentSection) {
        setCurrentSection(current.id);
        window.history.replaceState(null, null, `#${current.id}`);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  const getNavLinkClass = (section) => {
    return currentSection === section ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header-container">
      <h1>Alexander Duncan</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about" className={getNavLinkClass('about')}>About Me</a></li>
          <li className="nav-item"><a href="#portfolio" className={getNavLinkClass('portfolio')}>Portfolio</a></li>
          <li className="nav-item"><a href="#contact" className={getNavLinkClass('contact')}>Contact</a></li>
          <li className="nav-item"><a href="#resume" className={getNavLinkClass('resume')}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
