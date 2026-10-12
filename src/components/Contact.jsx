import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    teamSize: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName.trim() && formData.email.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      teamSize: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info-col reveal">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">
              Have questions or want to see a live demo?
            </h2>
            <p className="section-description">
              We are here to help. Reach out to our team to see how PeopleSoft works or ask any questions about setting it up for your company.
            </p>
          </div>

          <div className="contact-form-panel reveal reveal-delay-1">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-badge">Message Sent!</div>
                <h3 className="success-title">Thank you, {formData.firstName}!</h3>
                <p className="success-text">
                  We received your request for <strong>{formData.company || 'your team'}</strong>. A member of our team will email you at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">Book a Free Demo</h3>
                <p className="form-subheading">
                  Fill in your details below and we will contact you shortly.
                </p>

                <div className="form-row-two">
                  <div className="form-field">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="e.g. Arun"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="e.g. Kumar"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="arun@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-row-two">
                  <div className="form-field">
                    <label htmlFor="company" className="form-label">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="teamSize" className="form-label">How many employees do you have?</label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className={`form-select ${!formData.teamSize ? 'is-placeholder' : ''}`}
                    >
                      <option value="" disabled>Select number of employees</option>
                      <option value="1-25">1 – 25 employees</option>
                      <option value="26-100">26 – 100 employees</option>
                      <option value="101-500">101 – 500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="form-label">Your Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us what you need or ask any questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
