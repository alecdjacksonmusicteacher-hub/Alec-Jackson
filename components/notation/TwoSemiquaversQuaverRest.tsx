import React from 'react';

const QuaverRest: React.FC = () => <path d="M20,60 C20,70 10,70 10,80 Q20,90 30,80 L30,35 L20,35 Z" />;
const SemiquaverRest: React.FC = () => (
    <>
        <path d="M20,50 C20,60 10,60 10,70 Q20,80 30,70 L30,25 L20,25 Z" />
        <path d="M20,40 C20,50 10,50 10,60 Q20,70 30,60" stroke="currentColor" strokeWidth="4" fill="none" transform="translate(-15, 0)" />
    </>
);

export const TwoSemiquaversQuaverRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '90px' }}>
        <svg viewBox="0 0 90 100" fill="currentColor">
            <g transform="translate(-5, 0)">
                <SemiquaverRest />
            </g>
            <g transform="translate(20, 0)">
                <SemiquaverRest />
            </g>
            <g transform="translate(50, 0)">
                <QuaverRest />
            </g>
        </svg>
    </div>
);
