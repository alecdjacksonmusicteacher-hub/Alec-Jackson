import React from 'react';

const SingleRest: React.FC = () => (
    <>
        <path d="M20,50 C20,60 10,60 10,70 Q20,80 30,70 L30,25 L20,25 Z" />
        <path d="M20,40 C20,50 10,50 10,60 Q20,70 30,60" stroke="currentColor" strokeWidth="4" fill="none" transform="translate(-15, 0)" />
    </>
);

export const FourSemiquaversRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '110px' }}>
        <svg viewBox="0 0 110 100" fill="currentColor">
            <g transform="translate(-10, 0)">
                <SingleRest />
            </g>
            <g transform="translate(15, 0)">
                <SingleRest />
            </g>
            <g transform="translate(40, 0)">
                <SingleRest />
            </g>
            <g transform="translate(65, 0)">
                <SingleRest />
            </g>
        </svg>
    </div>
);
