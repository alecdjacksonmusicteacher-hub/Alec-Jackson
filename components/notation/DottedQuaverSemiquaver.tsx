
import React from 'react';

export const DottedQuaverSemiquaver: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '70px' }}>
        <svg viewBox="0 0 70 100" fill="currentColor">
            {/* Dotted Quaver */}
            <ellipse cx="15" cy="90" rx="10" ry="7"/>
            <rect x="24" y="20" width="4" height="70" />
            <circle cx="35" cy="90" r="3" />
            
            {/* Semiquaver */}
            <ellipse cx="55" cy="90" rx="10" ry="7"/>
            <rect x="64" y="20" width="4" height="70" />

            {/* Beams */}
            <path d="M 26 20 L 66 20 L 66 27 L 26 27 Z" />
            <path d="M 58 32 L 66 32 L 66 39 L 58 39 Z" />
        </svg>
    </div>
);
