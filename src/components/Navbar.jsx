import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container nav-container">
        <a href="#home" className="nav-brand" onClick={closeMenu}>
          <Logo />
        </a>

        <nav className="nav-menu" aria-label="Main Navigation">
          <a href="#about" className="nav-link">Why PeopleSoft</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary nav-cta" href="#contact">
            Request demo
          </a>
          <button
            type="button"
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={20} className="toggle-icon" />
            ) : (
              <Menu size={20} className="toggle-icon" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-menu">
            <a href="#about" className="mobile-link" onClick={closeMenu}>Why PeopleSoft</a>
            <a href="#features" className="mobile-link" onClick={closeMenu}>Features</a>
            <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
            <a href="#contact" className="btn btn-primary mobile-btn" onClick={closeMenu}>
              Request Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
