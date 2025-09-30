
import React from 'react';

export const FourSemiquavers: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '110px' }}>
        <svg viewBox="0 0 110 100" fill="currentColor">
            {/* Note 1 */}
            <ellipse cx="15" cy="90" rx="10" ry="7"/>
            <rect x="24" y="20" width="4" height="70" />
            {/* Note 2 */}
            <ellipse cx="40" cy="90" rx="10" ry="7"/>
            <rect x="49" y="20" width="4" height="70" />
            {/* Note 3 */}
            <ellipse cx="65" cy="90" rx="10" ry="7"/>
            <rect x="74" y="20" width="4" height="70" />
            {/* Note 4 */}
            <ellipse cx="90" cy="90" rx="10" ry="7"/>
            <rect x="99" y="20" width="4" height="70" />

            {/* Beams */}
            <path d="M 26 20 L 101 20 L 101 27 L 26 27 Z" />
            <path d="M 26 32 L 101 32 L 101 39 L 26 39 Z" />
        </svg>
    </div>
);
