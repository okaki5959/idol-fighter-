import React from 'react';
import { Heart, Music, Star } from 'lucide-react';

export const IdleBackgroundElements = ({ name }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 flex items-center justify-center z-0">
            <h1 key={name} className="text-[25vw] md:text-[20vw] font-black text-white italic tracking-tighter opacity-20 animate-text-bounce whitespace-nowrap select-none leading-none transform -rotate-6 origin-center" style={{ textShadow: '0 0 50px rgba(255,255,255,0.3)', filter: 'blur(1px)' }}>{name?.toUpperCase()}</h1>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] border-2 border-dashed border-white/20 rounded-full animate-spin-slow z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmax] h-[60vmax] border border-white/10 rounded-full animate-spin-reverse-slow z-10"></div>
        <div className="absolute top-[10%] left-[10%] text-white/10 animate-float-slow z-10"><Heart size={120} /></div>
        <div className="absolute bottom-[20%] right-[10%] text-white/10 animate-float-slow delay-1000 z-10"><Music size={140} /></div>
        <div className="absolute top-[20%] right-[20%] text-white/10 animate-float-slow delay-2000 z-10"><Star size={80} /></div>
        <div className="absolute top-[40%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[-10deg] animate-drift-line z-10"></div>
        <div className="absolute top-[70%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-[-5deg] animate-drift-line delay-1000 z-10"></div>
    </div>
);
