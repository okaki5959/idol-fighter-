import React, { useState, useEffect, useMemo } from 'react';
import { ArrowDown } from 'lucide-react';
import { IDOLS } from '../data';

export const TopSection = ({ onSelectIdol }) => {
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setRotation(prev => prev - (360 / IDOLS.length)), 5000);
        return () => clearInterval(interval);
    }, []);
    // レスポンシブ対応: モバイルでは半径とカードサイズを縮小
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const radius = isMobile ? 300 : 650;
    const cardWidth = isMobile ? 200 : 400;
    const cardHeight = isMobile ? 325 : 650;
    const anglePerItem = 360 / IDOLS.length;
    const beams = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
        id: i, angle: Math.random() * 360, delay: Math.random() * 2, duration: Math.random() * 0.4 + 0.3, width: Math.random() * 3 + 2, length: Math.random() * 50 + 50,
        color: Math.random() > 0.6 ? '#ffffff' : Math.random() > 0.4 ? '#ff00ff' : Math.random() > 0.2 ? '#00ffff' : '#ffff00'
    })), []);

    return (
        <section id="top" className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-white perspective-[1000px]">
            <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#000_0deg,#000_10deg,#ff00ff_10.5deg,#00ffff_11deg,#000_11.5deg,#000_20deg)] animate-spin-slow"></div>
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#000_0deg,#000_15deg,rgba(255,255,0,0.8)_15.5deg,rgba(255,255,255,0.8)_16deg,#000_16.5deg,#000_30deg)] animate-spin-reverse-slow mix-blend-plus-lighter"></div>
            </div>
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {beams.map((beam) => (
                    <div key={beam.id} className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transform: `rotate(${beam.angle}deg)` }}>
                        <div className="absolute top-[-1px] left-0 h-[2px] origin-left animate-laser-shot" style={{ height: `${beam.width}px`, width: `${beam.length}vmax`, background: `linear-gradient(90deg, transparent, ${beam.color}, transparent)`, boxShadow: `0 0 10px ${beam.color}`, animationDelay: `${beam.delay}s`, animationDuration: `${beam.duration}s` }} />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,0,255,0.2) 40%, transparent 70%) blur-3xl animate-strobe pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-0 bg-white/10 animate-flash-hard pointer-events-none z-0"></div>
            <div className="relative w-full h-full flex items-center justify-center z-10" style={{ transformStyle: 'preserve-3d', transform: `rotateZ(-15deg) rotateY(0deg)` }}>
                <div className="absolute w-0 h-0" style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)`, transition: 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                    {IDOLS.map((idol, i) => (
                        <div key={idol.id} className="absolute top-1/2 left-1/2 cursor-pointer" onClick={() => onSelectIdol(i)} style={{ width: `${cardWidth}px`, height: `${cardHeight}px`, transform: `rotateY(${i * anglePerItem}deg) translateZ(${radius}px) translate(-50%, -50%)`, transformStyle: 'preserve-3d' }}>
                            <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] group hover:scale-110 hover:shadow-[0_0_80px_rgba(255,255,255,0.9)] hover:border-white transition-all duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${idol.color} opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                                <img src={idol.image} alt={idol.name} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white text-black px-6 py-2 rounded-full font-black tracking-widest border-4 border-black/20 shadow-xl transform scale-0 group-hover:scale-100 transition-transform">SELECT</div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                                    <div className="text-xl font-black italic text-white drop-shadow-md">{idol.name}</div>
                                    <div className="text-xs text-white/80">{idol.catchphrase}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute z-20 text-center px-4 pointer-events-none max-w-full">
                <h1 className="text-4xl sm:text-6xl md:text-9xl font-black italic tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse break-words">IDOL<span className="text-yellow-400">FIGHTER</span></h1>
                <p className="text-xs sm:text-sm md:text-lg font-bold bg-black/60 backdrop-blur-md py-2 px-4 sm:px-8 rounded-full inline-block border border-white/50 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)]">輝きを競え。ステージという名の戦場で。</p>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                <span className="text-xs font-bold tracking-widest animate-pulse text-white shadow-black drop-shadow-md">SCROLL</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 bg-black/20 backdrop-blur-sm"><div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot"></div></div>
            </div>
        </section>
    );
};
