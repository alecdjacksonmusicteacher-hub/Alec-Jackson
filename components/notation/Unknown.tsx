
import React from 'react';

interface UnknownProps {
    lyric: string;
    className?: string;
}

export const Unknown: React.FC<UnknownProps> = ({ lyric, className }) => (
    <div className={`flex flex-col items-center justify-center p-2 bg-red-900/50 border-2 border-dashed border-red-500 rounded-lg text-red-300 ${className}`}>
        <span className="font-bold text-lg">?</span>
        <span className="font-mono text-xs max-w-[80px] text-center break-words">{lyric}</span>
        <span className="text-xs mt-1">(Unknown)</span>
    </div>
);
