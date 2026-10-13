import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content reveal">
          <p className="section-eyebrow">A smarter way to manage people</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Manage your employees, attendance,</span>
            <span className="hero-title-line">hiring in one place</span>
          </h1>
          <p className="hero-lead">
            PeopleSoft helps you keep track of your staff, check daily attendance, approve leaves, hire new team members easily.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Request Demo
            </a>
            <a href="#features" className="btn btn-secondary btn-lg">
              Explore Features <ChevronRight size={18} style={{ marginLeft: '4px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
