import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer reveal">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Logo />
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
      </div>
    </footer>
  );
}
