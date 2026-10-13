import React from 'react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header reveal">
          <p className="section-eyebrow">Why Choose PeopleSoft</p>
          <h2 className="section-title">
            Stop using messy spreadsheets to run your company
          </h2>
          <p className="section-description">
            Many businesses use too many separate tools: Excel for attendance, chat messages for leaves, scattered files for employee records.
          </p>
          <p className="section-description">
            PeopleSoft brings all of this together into one easy app so you can manage your team with zero stress.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card reveal reveal-delay-1">
            <div className="about-card-number">01</div>
            <h3 className="about-card-title">All Employee Info in One Place</h3>
            <p className="about-card-text">
              Store employee profiles, phone numbers, email addresses, job roles, documents safely in one spot. Anyone can find what they need in seconds.
            </p>
            <div className="about-card-metric">
              <span className="metric-val">100%</span>
              <span className="metric-desc">Organized records</span>
            </div>
          </div>

          <div className="about-card reveal reveal-delay-2">
            <div className="about-card-number">02</div>
            <h3 className="about-card-title">Quick Attendance & Leave</h3>
            <p className="about-card-text">
              Staff can check in daily and ask for time off with one click. Managers can review and approve leave requests right away from any device.
            </p>
            <div className="about-card-metric">
              <span className="metric-val">1-Click</span>
              <span className="metric-desc">Fast leave approvals</span>
            </div>
          </div>

          <div className="about-card reveal reveal-delay-3">
            <div className="about-card-number">03</div>
            <h3 className="about-card-title">Simple Hiring & Onboarding</h3>
            <p className="about-card-text">
              Track job applicants from first contact to job offer. Welcome new hires and add them directly to your staff list without paperwork.
            </p>
            <div className="about-card-metric">
              <span className="metric-val">100%</span>
              <span className="metric-desc">Paperless onboarding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
