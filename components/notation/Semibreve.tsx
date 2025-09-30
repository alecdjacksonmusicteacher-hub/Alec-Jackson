
import React from 'react';

export const Semibreve: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className} style={{ width: '50px' }}>
        <svg viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="4">
             <ellipse cx="25" cy="90" rx="15" ry="10"/>
        </svg>
    </div>
);
