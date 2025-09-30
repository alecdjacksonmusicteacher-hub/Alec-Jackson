import React, { useState, useCallback, useMemo } from 'react';
import { RhythmicNote, NoteType } from './types';
import { generateNotation } from './services/geminiService';
import { HelpModal } from './components/HelpModal';
import { Crotchet } from './components/notation/Crotchet';
import { DottedCrotchetQuaver } from './components/notation/DottedCrotchetQuaver';
import { DottedMinim } from './components/notation/DottedMinim';
import { DottedQuaverSemiquaver } from './components/notation/DottedQuaverSemiquaver';
import { FourSemiquavers } from './components/notation/FourSemiquavers';
import { Minim } from './components/notation/Minim';
import { QuaverTwoSemiquavers } from './components/notation/QuaverTwoSemiquavers';
import { Semibreve } from './components/notation/Semibreve';
import { SemiquaverDottedQuaver } from './components/notation/SemiquaverDottedQuaver';
import { TripletQuavers } from './components/notation/TripletQuavers';
import { TwoQuavers } from './components/notation/TwoQuavers';
import { TwoSemiquaversQuaver } from './components/notation/TwoSemiquaversQuaver';
import { Unknown } from './components/notation/Unknown';
import { InfoIcon } from './components/icons/InfoIcon';
import { MusicNoteIcon } from './components/icons/MusicNoteIcon';
import { RHYTHM_GUIDE } from './constants';
import { CrotchetRest } from './components/notation/CrotchetRest';
import { DottedCrotchetQuaverRest } from './components/notation/DottedCrotchetQuaverRest';
import { DottedMinimRest } from './components/notation/DottedMinimRest';
import { DottedQuaverSemiquaverRest } from './components/notation/DottedQuaverSemiquaverRest';
import { FourSemiquaversRest } from './components/notation/FourSemiquaversRest';
import { MinimRest } from './components/notation/MinimRest';
import { QuaverTwoSemiquaversRest } from './components/notation/QuaverTwoSemiquaversRest';
import { SemibreveRest } from './components/notation/SemibreveRest';
import { SemiquaverDottedQuaverRest } from './components/notation/SemiquaverDottedQuaverRest';
import { TripletQuaversRest } from './components/notation/TripletQuaversRest';
import { TwoQuaversRest } from './components/notation/TwoQuaversRest';
import { TwoSemiquaversQuaverRest } from './components/notation/TwoSemiquaversQuaverRest';

type View = 'input' | 'notation';

// Custom hook for managing state with undo/redo capabilities
const useHistoryState = (initialState: string) => {
    const [history, setHistory] = useState<string[]>([initialState]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const state = useMemo(() => history[currentIndex], [history, currentIndex]);

    const setState = useCallback((value: string) => {
        if (value === state) return; // Prevent adding duplicates to history
        const newHistory = history.slice(0, currentIndex + 1);
        newHistory.push(value);
        setHistory(newHistory);
        setCurrentIndex(newHistory.length - 1);
    }, [history, currentIndex, state]);
    
    const undo = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }, [currentIndex]);

    const redo = useCallback(() => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }, [currentIndex, history.length]);

    const canUndo = currentIndex > 0;
    const canRedo = currentIndex < history.length - 1;

    return { state, setState, undo, redo, canUndo, canRedo };
};


const NoteDisplay: React.FC<{ note: RhythmicNote }> = ({ note }) => {
    const commonClassName = "h-32 text-slate-100";
    switch (note.note) {
        case NoteType.SEMIBREVE: return <Semibreve className={commonClassName} />;
        case NoteType.DOTTED_MINIM: return <DottedMinim className={commonClassName} />;
        case NoteType.MINIM: return <Minim className={commonClassName} />;
        case NoteType.CROTCHET: return <Crotchet className={commonClassName} />;
        case NoteType.DOTTED_CROTCHET_QUAVER: return <DottedCrotchetQuaver className={commonClassName} />;
        case NoteType.TWO_QUAVERS: return <TwoQuavers className={commonClassName} />;
        case NoteType.FOUR_SEMIQUAVERS: return <FourSemiquavers className={commonClassName} />;
        case NoteType.QUAVER_TWO_SEMIQUAVERS: return <QuaverTwoSemiquavers className={commonClassName} />;
        case NoteType.TWO_SEMIQUAVERS_QUAVER: return <TwoSemiquaversQuaver className={commonClassName} />;
        case NoteType.DOTTED_QUAVER_SEMIQUAVER: return <DottedQuaverSemiquaver className={commonClassName} />;
        case NoteType.SEMIQUAVER_DOTTED_QUAVER: return <SemiquaverDottedQuaver className={commonClassName} />;
        case NoteType.TRIPLET_QUAVERS: return <TripletQuavers className={commonClassName} />;
        case NoteType.UNKNOWN: return <Unknown lyric={note.lyric} className="h-32" />;
        
        // Rests
        case NoteType.SEMIBREVE_REST: return <SemibreveRest className={commonClassName} />;
        case NoteType.DOTTED_MINIM_REST: return <DottedMinimRest className={commonClassName} />;
        case NoteType.MINIM_REST: return <MinimRest className={commonClassName} />;
        case NoteType.CROTCHET_REST: return <CrotchetRest className={commonClassName} />;
        case NoteType.DOTTED_CROTCHET_QUAVER_REST: return <DottedCrotchetQuaverRest className={commonClassName} />;
        case NoteType.TWO_QUAVERS_REST: return <TwoQuaversRest className={commonClassName} />;
        case NoteType.FOUR_SEMIQUAVERS_REST: return <FourSemiquaversRest className={commonClassName} />;
        case NoteType.QUAVER_TWO_SEMIQUAVERS_REST: return <QuaverTwoSemiquaversRest className={commonClassName} />;
        case NoteType.TWO_SEMIQUAVERS_QUAVER_REST: return <TwoSemiquaversQuaverRest className={commonClassName} />;
        case NoteType.DOTTED_QUAVER_SEMIQUAVER_REST: return <DottedQuaverSemiquaverRest className={commonClassName} />;
        case NoteType.SEMIQUAVER_DOTTED_QUAVER_REST: return <SemiquaverDottedQuaverRest className={commonClassName} />;
        case NoteType.TRIPLET_QUAVERS_REST: return <TripletQuaversRest className={commonClassName} />;

        default: return null;
    }
};

const App: React.FC = () => {
    const { 
        state: userInput, 
        setState: setUserInput, 
        undo, 
        redo, 
        canUndo, 
        canRedo 
    } = useHistoryState('Taa te-ti Taa-aa');
    
    const [notation, setNotation] = useState<RhythmicNote[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);
    const [view, setView] = useState<View>('input');
    const [isRestMode, setIsRestMode] = useState<boolean>(false);

    const handleGenerate = useCallback(async () => {
        if (!userInput.trim()) {
            setError("Please enter some rhythm lyrics.");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const result = await generateNotation(userInput);
            setNotation(result);
            setView('notation');
        } catch (e: any) {
            setError(e.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [userInput]);

    const handleEdit = () => {
        setView('input');
    };

    const handleRhythmButtonClick = useCallback((lyric: string) => {
        const newPart = isRestMode ? `Ssh-${lyric}` : lyric;
        setUserInput(userInput.trim() ? `${userInput.trim()} ${newPart}` : newPart);
        setIsRestMode(false);
    }, [isRestMode, userInput, setUserInput]);

    const handleClear = () => {
        setUserInput('');
        setError(null);
    };
    
    const Header = () => (
        <header className="w-full flex justify-between items-center p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
                <MusicNoteIcon className="w-8 h-8 text-cyan-400" />
                <h1 className="text-2xl font-bold text-white tracking-wider">Rhythm Scribe</h1>
            </div>
            <button onClick={() => setIsHelpVisible(true)} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                <InfoIcon className="w-6 h-6 text-slate-300" />
            </button>
        </header>
    );

    const renderInputView = () => (
        <div className="flex flex-col items-center justify-center p-8 gap-6 w-full max-w-2xl">
            <p className="text-slate-300 text-center">Enter your rhythm lyrics below, or use the palette to build your phrase.</p>
            <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., Taa te-ti Taa-aa"
                className="w-full h-32 p-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-lg"
                disabled={isLoading}
            />
             <div className="w-full pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    <button
                        onClick={() => setIsRestMode(prev => !prev)}
                        className={`p-2 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed font-semibold ${isRestMode ? 'bg-yellow-400 text-gray-900 ring-2 ring-yellow-300' : 'bg-slate-700 text-yellow-300 hover:bg-slate-600'}`}
                        disabled={isLoading}
                    >
                        Ssh (Rest)
                    </button>
                    {RHYTHM_GUIDE.map((rhythm) => (
                    <button
                        key={rhythm.lyric}
                        onClick={() => handleRhythmButtonClick(rhythm.lyric)}
                        className="p-2 bg-gray-700 text-cyan-300 font-mono rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {rhythm.lyric}
                    </button>
                    ))}
                </div>
            </div>
            {error && <p className="text-red-400 mt-2">{error}</p>}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <button
                    onClick={handleGenerate}
                    disabled={isLoading || !userInput.trim()}
                    className="w-full sm:w-auto px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Scribing...
                        </div>
                    ) : 'Scribe Rhythm'}
                </button>
                <div className="flex gap-2">
                    <button
                        onClick={undo}
                        disabled={!canUndo || isLoading}
                        className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                    >
                        Undo
                    </button>
                     <button
                        onClick={redo}
                        disabled={!canRedo || isLoading}
                        className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                    >
                        Redo
                    </button>
                </div>
                 <button
                    onClick={handleClear}
                    disabled={isLoading}
                    className="px-8 py-3 bg-rose-700 text-white font-semibold rounded-lg shadow-lg hover:bg-rose-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                >
                    Clear
                </button>
            </div>
        </div>
    );
    
    const renderNotationView = () => (
        <div className="flex flex-col items-center p-4 sm:p-8 gap-8 w-full">
            <div className="w-full max-w-5xl bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
                <h2 className="text-lg font-semibold text-slate-300 mb-4 text-center">Generated Notation</h2>
                <div className="flex flex-wrap justify-center items-end gap-x-2 sm:gap-x-4 gap-y-4 p-4 min-h-[10rem] overflow-x-auto">
                    {notation?.map((note, index) => <NoteDisplay key={index} note={note} />)}
                </div>
            </div>

             <div className="text-center">
                <p className="text-slate-400">You wrote: <span className="font-mono text-slate-200 bg-gray-700 px-2 py-1 rounded">{userInput}</span></p>
            </div>
            
            <button
                onClick={handleEdit}
                className="px-8 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-500 transition-transform transform hover:scale-105"
            >
                Edit Lyrics
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
            <Header />
            <main className="flex-grow w-full flex items-center justify-center">
                {view === 'input' ? renderInputView() : renderNotationView()}
            </main>
            {isHelpVisible && <HelpModal onClose={() => setIsHelpVisible(false)} />}
             <footer className="w-full text-center p-4 text-xs text-gray-500 border-t border-gray-800">
                <p>Rhythm Scribe - AI Powered Music Notation Tool</p>
            </footer>
        </div>
    );
};

export default App;