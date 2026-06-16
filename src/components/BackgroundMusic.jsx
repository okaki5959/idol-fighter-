import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = 0.4;
        if (audio.paused) {
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <audio ref={audioRef} src="/bgm.mp3" loop preload="auto" />
            <div className="fixed bottom-6 right-6 z-[70] flex items-center gap-3">
                {/* ミュート中は音楽があることを知らせるヒント */}
                {!isPlaying && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-pink-200 text-pink-600 text-sm font-bold animate-bounce">
                        <Music size={16} />
                        <span>音楽を再生</span>
                    </div>
                )}
                <button
                    onClick={toggle}
                    aria-label={isPlaying ? 'BGMを停止' : 'BGMを再生'}
                    title={isPlaying ? 'BGMを停止' : 'BGMを再生'}
                    className={`relative p-3 rounded-full border-2 border-white/70 backdrop-blur-md text-white shadow-lg transition-all active:scale-95 hover:scale-110 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 ${isPlaying ? 'animate-pulse' : ''}`}
                >
                    {/* ミュート中は注目を集めるリング */}
                    {!isPlaying && (
                        <span className="absolute inset-0 rounded-full border-2 border-pink-400 animate-ping" />
                    )}
                    {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
                </button>
            </div>
        </>
    );
};
