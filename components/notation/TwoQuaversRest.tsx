import React from 'react';

const SingleRest: React.FC = () => (
    <path d="M20,60 C20,70 10,70 10,80 Q20,90 30,80 L30,35 L20,35 Z" />
);

export const TwoQuaversRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '60px' }}>
        <svg viewBox="0 0 60 100" fill="currentColor">
            <g transform="translate(-5, 0)">
                <SingleRest />
            </g>
            <g transform="translate(25, 0)">
                <SingleRest />
            </g>
        </svg>
    </div>
);
