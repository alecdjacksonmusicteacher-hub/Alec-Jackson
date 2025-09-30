
import React from 'react';
import { RHYTHM_GUIDE } from '../constants';

interface HelpModalProps {
    onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-y-auto border border-gray-600"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-gray-800/80 backdrop-blur-sm p-4 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Rhythm Guide</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
                </div>
                <div className="p-6">
                    <ul className="space-y-3">
                        {RHYTHM_GUIDE.map((item, index) => (
                            <li key={index} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                                <span className="font-mono text-cyan-300">{item.lyric}</span>
                                <span className="text-slate-300 text-right">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
