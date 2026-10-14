import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="header">
      <div className="container nav-container">
        <a href="#home" className="nav-brand">
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
        </div>
      </div>
    </header>
  );
}
