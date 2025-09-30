
import React from 'react';

export const DottedMinim: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '60px' }}>
        <svg viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="4">
            <ellipse cx="25" cy="90" rx="12" ry="8"/>
            <line x1="36" y1="20" x2="36" y2="90" />
            <circle cx="50" cy="90" r="4" fill="currentColor" stroke="none" />
        </svg>
    </div>
);
