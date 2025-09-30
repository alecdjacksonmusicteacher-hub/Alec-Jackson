import React from 'react';

export const TripletQuavers: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '90px' }}>
        <svg viewBox="0 0 90 100" fill="currentColor">
            {/* Triplet bracket and number. The bracket now opens downwards. */}
            <path d="M 26 15 L 26 8 L 48 8" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 58 8 L 81 8 L 81 15" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="53" y="15" textAnchor="middle" fontSize="16" fontWeight="bold">3</text>
            
            {/* Note 1 */}
            <ellipse cx="15" cy="90" rx="10" ry="7"/>
            <rect x="24" y="25" width="4" height="65" />
            {/* Note 2 */}
            <ellipse cx="40" cy="90" rx="10" ry="7"/>
            <rect x="49" y="25" width="4" height="65" />
            {/* Note 3 */}
            <ellipse cx="65" cy="90" rx="10" ry="7"/>
            <rect x="74" y="25" width="4" height="65" />

            {/* Beam */}
            <path d="M 26 25 L 76 25 L 76 32 L 26 32 Z" />
        </svg>
    </div>
);
