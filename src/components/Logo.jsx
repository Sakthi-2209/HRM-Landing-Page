import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={`brand-mark ${className}`}>
      <span className="brand-name">PeopleSoft</span>
    </div>
  );
}
