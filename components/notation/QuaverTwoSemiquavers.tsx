
import React from 'react';

export const QuaverTwoSemiquavers: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '90px' }}>
        <svg viewBox="0 0 90 100" fill="currentColor">
            {/* Quaver */}
            <ellipse cx="15" cy="90" rx="10" ry="7"/>
            <rect x="24" y="20" width="4" height="70" />
            {/* Semiquaver 1 */}
            <ellipse cx="45" cy="90" rx="10" ry="7"/>
            <rect x="54" y="20" width="4" height="70" />
            {/* Semiquaver 2 */}
            <ellipse cx="70" cy="90" rx="10" ry="7"/>
            <rect x="79" y="20" width="4" height="70" />

            {/* Beams */}
            <path d="M 26 20 L 81 20 L 81 27 L 26 27 Z" />
            <path d="M 56 32 L 81 32 L 81 39 L 56 39 Z" />
        </svg>
    </div>
);
