
import React from 'react';

export const Crotchet: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '40px' }}>
        <svg viewBox="0 0 40 100" fill="currentColor">
            <ellipse cx="20" cy="90" rx="12" ry="8"/>
            <rect x="31" y="20" width="4" height="70" />
        </svg>
    </div>
);
