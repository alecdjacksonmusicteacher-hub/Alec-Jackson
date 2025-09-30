import React from 'react';

export const DottedMinimRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '60px' }}>
        <svg viewBox="0 0 60 100" fill="currentColor">
            {/* Minim Rest */}
            <rect x="15" y="45" width="25" height="10" />
            {/* Dot */}
            <circle cx="50" cy="50" r="4" />
        </svg>
    </div>
);
