import React from 'react';

const FEATURES = [
  {
    step: '01',
    name: 'Employee Records',
    tagline: 'See all your team members and their details in one place.',
    description: 'Keep everyone\'s phone number, job title, department, documents in one spot. Search for any teammate instantly without asking around.',
    highlights: [
      'Full profiles with contact details, photo, job title',
      'Department list showing who reports to whom',
      'Staff can update their own personal info anytime',
      'Quick search by name, role, or department'
    ],
    preview: {
      title: 'Employee Records · 50 Active Staff',
      headers: ['Employee', 'Department', 'Status'],
      rows: [
        { name: 'Sakthi Vel', sub: 'Product Designer', dept: 'Design', status: 'Active', statusClass: 'status-positive', avatar: 'SV' },
        { name: 'Arun Kumar', sub: 'Software Engineer', dept: 'Engineering', status: 'Active', statusClass: 'status-positive', avatar: 'AK' },
        { name: 'Yogitha Sri', sub: 'HR Specialist', dept: 'HR Team', status: 'Active', statusClass: 'status-positive', avatar: 'YS' },
        { name: 'Vijay Anand', sub: 'Sales Executive', dept: 'Sales', status: 'Active', statusClass: 'status-positive', avatar: 'VA' },
        { name: 'Meena Sundar', sub: 'Operations Lead', dept: 'Operations', status: 'Active', statusClass: 'status-positive', avatar: 'MS' }
      ]
    }
  },
  {
    step: '02',
    name: 'Attendance & Leave',
    tagline: 'Track daily check-ins and approve leaves in seconds.',
    description: 'Employees can mark attendance with one click and apply for leaves easily. Managers can approve or decline requests in seconds from any device.',
    highlights: [
      'Simple daily check-in and check-out tracking',
      'Clear count of remaining sick and vacation days',
      'Fast 1-click approvals for managers',
      'See who is present and who is away today'
    ],
    preview: {
      title: 'Today’s Attendance Overview',
      headers: ['Employee', 'Check-in Time', 'Status'],
      rows: [
        { name: 'Hari Prasad', sub: 'In Office', time: '09:00 AM', status: 'Present', statusClass: 'status-positive', avatar: 'HP' },
        { name: 'Swetha Raman', sub: 'Working Remote', time: '09:05 AM', status: 'Present', statusClass: 'status-positive', avatar: 'SR' },
        { name: 'Vishwa Nathan', sub: 'Sick Leave', time: 'Not checked in', status: 'On Leave', statusClass: 'status-attention', avatar: 'VN' },
        { name: 'Siva Prakash', sub: 'In Office', time: '08:50 AM', status: 'Present', statusClass: 'status-positive', avatar: 'SP' },
        { name: 'Sunil Mohan', sub: 'In Office', time: '09:10 AM', status: 'Present', statusClass: 'status-positive', avatar: 'SM' }
      ]
    }
  },
  {
    step: '03',
    name: 'Hiring & Onboarding',
    tagline: 'Find good candidates and welcome new hires smoothly.',
    description: 'Track job applicants from first interview to final job offer. When someone accepts, add them to your staff list with one click.',
    highlights: [
      'Track applicants through each interview stage',
      'Keep interview notes and ratings in one shared place',
      'Simple onboarding checklist for new joiners',
      'Turn hired candidates into active employees instantly'
    ],
    preview: {
      title: 'Open Job Positions',
      headers: ['Job Title', 'Applicants', 'Current Stage'],
      rows: [
        { name: 'Software Engineer', sub: 'Engineering', count: '24 Applicants', status: 'Final Interview', statusClass: 'status-progress', avatar: 'SE' },
        { name: 'Product Designer', sub: 'Design', count: '18 Applicants', status: 'Reviewing Tasks', statusClass: 'status-progress', avatar: 'PD' },
        { name: 'Customer Support', sub: 'Support', count: '31 Applicants', status: 'Screening', statusClass: 'status-progress', avatar: 'CS' },
        { name: 'Accountant', sub: 'Finance', count: '12 Applicants', status: 'Offer Sent', statusClass: 'status-positive', avatar: 'AC' }
      ]
    }
  }
];

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="features-header reveal">
          <p className="section-eyebrow">Features</p>
          <h2 className="section-title">
            Simple tools to handle your daily HR work
          </h2>
          <p className="section-description">
            Everything you need to manage employees, attendance, hiring in one place.
          </p>
        </div>

        <div className="features-stack">
          {FEATURES.map((item, index) => (
            <div key={item.step} className={`feature-item ${index % 2 === 1 ? 'feature-reverse' : ''} reveal`}>
              <div className="feature-text">
                <span className="feature-step-num">{item.step}</span>
                <h3 className="feature-item-title">{item.name}</h3>
                <p className="feature-item-tagline">{item.tagline}</p>
                <p className="feature-item-desc">{item.description}</p>

                <div className="feature-points-box">
                  <span className="points-title">What is included:</span>
                  <ul className="points-list">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="point-item">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="feature-visual">
                <div className="ui-window">
                  <div className="ui-window-header">
                    <span className="ui-window-title">{item.preview.title}</span>
                    <span className="ui-window-status">Live Preview</span>
                  </div>

                  <div className="ui-window-body">
                    <div className="ui-table">
                      <div className="ui-table-header">
                        <span>{item.preview.headers[0]}</span>
                        <span>{item.preview.headers[1]}</span>
                        <span>{item.preview.headers[2]}</span>
                      </div>

                      {item.preview.rows.map((row, rIdx) => (
                        <div key={rIdx} className="ui-table-row">
                          <div className="ui-user-cell">
                            {row.avatar && <span className="ui-avatar">{row.avatar}</span>}
                            <div>
                              <div className="ui-user-name">{row.name}</div>
                              {row.sub && <div className="ui-user-sub">{row.sub}</div>}
                            </div>
                          </div>

                          <div className="ui-mid-cell">
                            {row.dept && <span className="ui-dept-tag">{row.dept}</span>}
                            {row.time && <span className="ui-time-text">{row.time}</span>}
                            {row.amount && <span className="ui-amount-text">{row.amount}</span>}
                            {row.count && <span className="ui-count-text">{row.count}</span>}
                          </div>

                          <span className={`ui-status-pill ${row.statusClass}`}>
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
