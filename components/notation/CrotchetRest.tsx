import React from 'react';

export const CrotchetRest: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '40px' }}>
        <svg viewBox="0 0 40 100" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
            <path d="M15 25 l5 10 c5 10 -15 15 -5 30 l10 -10" />
        </svg>
    </div>
);
