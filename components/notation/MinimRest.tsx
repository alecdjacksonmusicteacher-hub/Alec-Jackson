import React from 'react';

export const MinimRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '40px' }}>
        <svg viewBox="0 0 40 100" fill="currentColor">
            <rect x="8" y="45" width="25" height="10" />
        </svg>
    </div>
);
