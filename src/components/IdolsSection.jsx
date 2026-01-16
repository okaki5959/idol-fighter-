import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mic, Music, Heart, Crown, Star, Sparkles } from 'lucide-react';
import { IDOLS } from '../data';
import { RevealOnScroll } from './RevealOnScroll';
import { IdleBackgroundElements } from './IdleBackgroundElements';
import { ExplosionParticles } from './ExplosionParticles';
import { PoppingText } from './PoppingText';
import { StatBar } from './StatBar';

export const IdolsSection = ({ currentIndex, setCurrentIndex }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const currentIdol = IDOLS[currentIndex];
    const changeIndex = (newIndex) => {
        if (isAnimating || newIndex === currentIndex) return;
        setCurrentIndex(newIndex);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
    };
    return (
        <section id="idols" className={`relative w-full h-screen overflow-hidden font-sans transition-colors duration-500 bg-gradient-to-br ${currentIdol.color}`}>
            <RevealOnScroll className="absolute inset-0" animation="zoom-in">
                <div key={`bg-${currentIndex}`} className={`circle-reveal bg-gradient-to-br ${currentIdol.color}`}>
                    <IdleBackgroundElements name={currentIdol.name} />
                    <ExplosionParticles activeId={currentIdol.id} />
                </div>
            </RevealOnScroll>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay z-[2]"></div>
            <div className="absolute top-20 left-0 w-full text-center z-10 pointer-events-none">
                <RevealOnScroll delay={200}>
                    <h2 className="text-white/90 text-sm md:text-lg font-bold tracking-[0.3em] drop-shadow-md">CHOOSE YOUR IDOL</h2>
                    <div className="text-3xl md:text-5xl font-black text-white italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] shine-effect inline-block px-4 relative">IDOL SELECTION</div>
                </RevealOnScroll>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-4 pb-24 md:pb-0 pt-20 relative z-10">
                <button onClick={() => changeIndex((currentIndex - 1 + IDOLS.length) % IDOLS.length)} className="absolute left-2 top-1/2 -translate-y-1/2 md:static md:translate-y-0 z-30 group p-2 md:mr-8 hover:scale-110 transition-transform"><div className="bg-white/40 backdrop-blur-md rounded-full p-3 md:p-4 border-4 border-white shadow-xl group-hover:bg-white/60 group-active:scale-95 transition-all"><ChevronLeft size={32} className="text-white drop-shadow-md" /></div></button>
                <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto h-[70vh] md:h-[80vh]">
                    <div className="relative flex-1 h-full flex items-center justify-center order-1 md:order-2 z-20 w-full">
                        <RevealOnScroll animation="zoom-in" delay={300} className="w-full h-full flex items-center justify-center">
                            <div key={`aura-${currentIdol.id}`} className={`absolute w-[280px] h-[420px] md:w-[500px] md:h-[750px] rounded-[50%] opacity-40 blur-3xl transition-all duration-500 animate-pulse bg-white/40`}></div>
                            <div className="absolute bottom-[10%] w-[200px] h-[40px] md:w-[400px] md:h-[60px] bg-black/20 blur-xl rounded-[50%] transform scale-x-150"></div>
                            <div key={`char-${currentIdol.id}`} className={`relative transition-transform duration-300 w-full h-full flex items-end justify-center pb-8 md:pb-12 ${isAnimating ? 'char-enter-right' : 'char-enter-right'}`}>
                                <img src={currentIdol.image} alt={currentIdol.name} className="h-[50vh] md:h-[75vh] max-h-screen drop-shadow-2xl object-contain object-bottom transform transition-transform hover:scale-105 duration-500" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.6))' }} />
                                <div className="absolute top-1/4 right-10 md:right-20 animate-bounce delay-700"><Sparkles className="text-white w-8 h-8 drop-shadow-lg" /></div>
                                <div className="absolute bottom-1/3 left-10 md:left-20 animate-bounce delay-300"><Star className="text-yellow-300 w-10 h-10 drop-shadow-lg fill-yellow-300" /></div>
                            </div>
                        </RevealOnScroll>
                    </div>
                    <div className="w-full md:w-1/3 order-2 md:order-1 flex flex-col justify-center items-start z-30 mt-4 md:mt-0 px-4 md:px-0 pointer-events-none">
                        <div key={`info-${currentIdol.id}`} className={isAnimating ? 'opacity-0' : 'opacity-100'}>
                            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border-4 border-white/50 transform -rotate-2 md:-rotate-3 hover:rotate-0 transition-transform duration-300 mb-6 w-full animate-pop-up origin-bottom-left pointer-events-auto">
                                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${currentIdol.textAccent}`}>No.0{currentIdol.id} • {currentIdol.type} Type</div>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight tracking-tighter mb-1"><PoppingText text={currentIdol.name} /></h2>
                                <div className="text-lg md:text-xl font-bold text-slate-500 mb-2"><PoppingText text={currentIdol.jpName} delay={300} /></div>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${currentIdol.color} shadow-md`}><PoppingText text={`"${currentIdol.catchphrase}"`} delay={500} /></div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 w-full shadow-lg border-2 border-white/60 pointer-events-auto">
                                <StatBar label="VOCAL" value={currentIdol.stats.vocal} colorClass={currentIdol.color} icon={Mic} delay={600} />
                                <StatBar label="DANCE" value={currentIdol.stats.dance} colorClass={currentIdol.color} icon={Music} delay={700} />
                                <StatBar label="VISUAL" value={currentIdol.stats.visual} colorClass={currentIdol.color} icon={Heart} delay={800} />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block w-1/6 order-3"></div>
                </div>
                <button onClick={() => changeIndex((currentIndex + 1) % IDOLS.length)} className="absolute right-2 top-1/2 -translate-y-1/2 md:static md:translate-y-0 z-30 group p-2 md:ml-8 hover:scale-110 transition-transform"><div className="bg-white/40 backdrop-blur-md rounded-full p-3 md:p-4 border-4 border-white shadow-xl group-hover:bg-white/60 group-active:scale-95 transition-all"><ChevronRight size={32} className="text-white drop-shadow-md" /></div></button>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-xl border-t border-white/40 p-2 md:p-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <div className="flex justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full max-w-7xl mx-auto px-4">
                    {IDOLS.map((idol, idx) => (
                        <button key={idol.id} onClick={() => changeIndex(idx)} className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${currentIndex === idx ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.9)] -translate-y-2 ring-2 ring-pink-300 ring-offset-2 ring-offset-transparent' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105 hover:-translate-y-1 bg-white/40'}`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${idol.color} opacity-90`}></div>
                            <img src={idol.thumbnail} alt={idol.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] object-contain object-center pb-1" />
                            {currentIndex === idx && (<div className="absolute top-1 right-1"><Crown size={14} className="text-white fill-yellow-300 drop-shadow-md animate-bounce" /></div>)}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
