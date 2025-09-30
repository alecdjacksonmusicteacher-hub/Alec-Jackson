import React from 'react';

export const DottedCrotchetQuaverRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '80px' }}>
        <svg viewBox="0 0 80 100" fill="currentColor" >
            {/* Dotted Crotchet Rest */}
            <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
                <path d="M15 25 l5 10 c5 10 -15 15 -5 30 l10 -10" />
            </g>
            <circle cx="42" cy="50" r="4" />
            {/* Quaver Rest */}
            <g transform="translate(45, 0)">
                <path d="M20,60 C20,70 10,70 10,80 Q20,90 30,80 L30,35 L20,35 Z" />
            </g>
        </svg>
    </div>
);
