import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ onLoaded }) => {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsFinished(true), 500);
                    setTimeout(() => onLoaded(), 1000);
                    return 100;
                }
                const inc = prev < 80 ? Math.random() * 5 + 1 : Math.random() * 2;
                return Math.min(prev + inc, 100);
            });
        }, 50);
        return () => clearInterval(timer);
    }, [onLoaded]);
    const calculateDashOffset = (p) => {
        const drawProgress = Math.min(p / 90, 1);
        return 300 * (1 - drawProgress);
    };
    if (isFinished) return null;
    return (
        <div className={`fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative w-32 h-32 mb-8">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    <path d="M50 30 C 20 0, 0 30, 50 90 C 100 30, 80 0, 50 30" fill="none" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" strokeDasharray={300} strokeDashoffset={calculateDashOffset(progress)} style={{ transition: 'stroke-dashoffset 0.1s linear' }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{Math.floor(progress)}%</div>
            </div>
            <div className="text-pink-400 font-bold tracking-widest animate-pulse">LOADING...</div>
        </div>
    );
};
