
import React from 'react';

export const TwoQuavers: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '60px' }}>
        <svg viewBox="0 0 60 100" fill="currentColor">
            {/* Note 1 */}
            <ellipse cx="15" cy="90" rx="10" ry="7"/>
            <rect x="24" y="20" width="4" height="70" />
            {/* Note 2 */}
            <ellipse cx="40" cy="90" rx="10" ry="7"/>
            <rect x="49" y="20" width="4" height="70" />

            {/* Beam */}
            <path d="M 26 20 L 51 20 L 51 27 L 26 27 Z" />
        </svg>
    </div>
);
