
import React from 'react';

export const SemiquaverDottedQuaver: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '70px' }}>
        <svg viewBox="0 0 70 100" fill="currentColor">
            {/* Semiquaver */}
            <ellipse cx="15" cy="90" rx="10" ry="7"/>
            <rect x="24" y="20" width="4" height="70" />
            
            {/* Dotted Quaver */}
            <ellipse cx="55" cy="90" rx="10" ry="7"/>
            <rect x="64" y="20" width="4" height="70" />
            <circle cx="45" cy="90" r="3" />


            {/* Beams */}
            <path d="M 26 20 L 66 20 L 66 27 L 26 27 Z" />
            <path d="M 26 32 L 34 32 L 34 39 L 26 39 Z" />
        </svg>
    </div>
);
