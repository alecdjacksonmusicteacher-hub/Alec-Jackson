import React from 'react';

export const DottedCrotchetQuaver: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '95px' }}>
        <svg viewBox="0 0 95 100" fill="currentColor">
            {/* Dotted Crotchet */}
            <ellipse cx="20" cy="90" rx="12" ry="8"/>
            <rect x="31" y="20" width="4" height="70" />
            <circle cx="42" cy="90" r="4" />

            {/* Quaver */}
            <ellipse cx="60" cy="90" rx="10" ry="7"/>
            <rect x="69" y="20" width="4" height="70" />
            {/* Quaver Flag - Redrawn to point towards 5 o'clock */}
            <path d="M 73 20 q 20 15 15 35 q -2 -5 -12 -25 z" />
        </svg>
    </div>
);