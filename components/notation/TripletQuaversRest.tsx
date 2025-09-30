import React from 'react';

const QuaverRest: React.FC = () => (
    <path d="M20,60 C20,70 10,70 10,80 Q20,90 30,80 L30,35 L20,35 Z" />
);

export const TripletQuaversRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '90px' }}>
        <svg viewBox="0 0 90 100" fill="currentColor">
            {/* Triplet bracket and number */}
            <path d="M 16 22 L 16 15 L 38 15" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 48 15 L 71 15 L 71 22" stroke="currentColor" strokeWidth="2" fill="none" />
            <text x="43" y="22" textAnchor="middle" fontSize="16" fontWeight="bold">3</text>
            
            <g transform="translate(-10, 0)">
                <QuaverRest />
            </g>
             <g transform="translate(15, 0)">
                <QuaverRest />
            </g>
             <g transform="translate(40, 0)">
                <QuaverRest />
            </g>
        </svg>
    </div>
);
