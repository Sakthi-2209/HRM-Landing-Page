import React from 'react';
import { Users } from 'lucide-react';

export default function Logo({ size = 26, showText = true, className = '' }) {
  return (
    <div className={`brand-mark ${className}`}>
      <span
        className="brand-symbol"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `${size + 6}px`,
          height: `${size + 6}px`,
          background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
          color: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
          flexShrink: 0
        }}
      >
        <Users size={size - 8} strokeWidth={2.2} />
      </span>
      {showText && <span className="brand-name">PeopleSoft</span>}
    </div>
  );
}
