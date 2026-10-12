import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

const currentYear = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer reveal">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Logo size={24} />
            <p className="footer-summary">
              PeopleSoft helps you manage employee profiles, daily attendance, and hiring in one easy place.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">Navigation</span>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-nav-title">Features</span>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Employee Directory</a></li>
              <li><a href="#features" className="footer-link">Attendance & Leave</a></li>
              <li><a href="#features" className="footer-link">Hiring & Onboarding</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} PeopleSoft Inc. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
          >
            Back to top <ArrowUp size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
