import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content reveal">
          <p className="section-eyebrow">HR platform for modern teams</p>
          <h1 className="hero-title">
            Manage your employees, attendance, and hiring in one place
          </h1>
          <p className="hero-lead">
            PeopleSoft helps you keep track of your staff, check daily attendance, approve leaves, and hire new team members easily.
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
