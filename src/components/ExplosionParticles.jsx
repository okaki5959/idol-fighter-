import React, { useMemo } from 'react';
import { Heart, Star, Music, Zap, Sparkles, Flower, Smile } from 'lucide-react';

export const ExplosionParticles = ({ activeId }) => {
    const particles = useMemo(() => {
        const icons = [Heart, Star, Music, Zap, Sparkles, Flower, Smile];
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i, Icon: icons[Math.floor(Math.random() * icons.length)],
            style: { '--tx': `${Math.cos(Math.random()*360*(Math.PI/180))*(100+Math.random()*400)}px`, '--ty': `${Math.sin(Math.random()*360*(Math.PI/180))*(100+Math.random()*400)}px`, left: '50%', top: '50%', color: Math.random() > 0.5 ? 'white' : 'rgba(255,255,255,0.6)' },
            size: 16 + Math.random() * 32, delay: Math.random() * 0.2
        }));
    }, [activeId]);
    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {particles.map((p) => (
                <div key={p.id} className="absolute animate-explode opacity-0" style={{ ...p.style, animationDelay: `${p.delay}s` }}>
                    <p.Icon size={p.size} fill="currentColor" />
                </div>
            ))}
        </div>
    );
};
