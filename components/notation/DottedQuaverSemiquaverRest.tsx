import React from 'react';

export const DottedQuaverSemiquaverRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '70px' }}>
        <svg viewBox="0 0 70 100" fill="currentColor">
            {/* Dotted Quaver Rest */}
            <g>
                <path d="M15,60 C15,70 5,70 5,80 Q15,90 25,80 L25,35 L15,35 Z" />
                <circle cx="35" cy="65" r="3" />
            </g>
            {/* Semiquaver Rest */}
            <g transform="translate(30, 0)">
                <path d="M20,50 C20,60 10,60 10,70 Q20,80 30,70 L30,25 L20,25 Z" />
                <path d="M20,40 C20,50 10,50 10,60 Q20,70 30,60" stroke="currentColor" strokeWidth="4" fill="none" transform="translate(-15, 0)" />
            </g>
        </svg>
    </div>
);
