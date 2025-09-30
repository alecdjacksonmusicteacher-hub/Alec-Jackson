
import React from 'react';

export const Minim: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '40px' }}>
        <svg viewBox="0 0 40 100" fill="none" stroke="currentColor" strokeWidth="4">
            <ellipse cx="20" cy="90" rx="12" ry="8"/>
            <line x1="31" y1="20" x2="31" y2="90" />
        </svg>
    </div>
);
