import React from 'react';

export const SemibreveRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '50px' }}>
        <svg viewBox="0 0 50 100" fill="currentColor">
            <rect x="12" y="35" width="25" height="10" />
        </svg>
    </div>
);
