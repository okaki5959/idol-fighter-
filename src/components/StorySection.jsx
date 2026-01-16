import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { IDOLS } from '../data';
import { useScroll } from '../hooks';
import { RevealOnScroll } from './RevealOnScroll';

export const StorySection = ({ characters = [] }) => {
    const scrollY = useScroll();
    const [randomImages, setRandomImages] = useState([]);
    useEffect(() => {
        const shuffled = [...IDOLS].sort(() => 0.5 - Math.random());
        setRandomImages(shuffled.slice(0, 5));
    }, []);
    return (
        <section id="story" className="relative w-full py-32 md:py-48 bg-slate-900 overflow-hidden text-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                {randomImages.map((idol, i) => (
                    <div key={i} className="absolute rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" style={{ top: `${10 + (i * 20)}%`, left: `${i % 2 === 0 ? 5 + (i * 10) : 60 - (i * 5)}%`, width: `${150 + Math.random() * 100}px`, height: `${200 + Math.random() * 150}px`, transform: `translateY(${(scrollY * 0.1 * (i + 1) * 0.5) - 100}px) rotate(${i % 2 === 0 ? -10 : 10}deg)`, zIndex: 0 }}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${idol.color} opacity-30`}></div>
                        <img src={idol.image} alt="story bg" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16 relative flex items-center justify-center gap-4 md:gap-12">
                        {characters[0] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0">
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[0].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[0].thumbnail} alt={characters[0].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">STORY</h2>
                            <p className="mt-4 text-slate-400 font-bold tracking-widest">物語</p>
                        </div>
                        {characters[1] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0" style={{ animationDelay: '1s' }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[1].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[1].thumbnail} alt={characters[1].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
                <div className="flex flex-col gap-12 items-center">
                    <RevealOnScroll animation="zoom-in" delay={200} className="w-full md:w-3/4">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)] border-4 border-white/10 group">
                            <div className="aspect-[21/9] bg-gradient-to-br from-indigo-900 to-black flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse-slow"></div>
                                <Sparkles size={64} className="text-white opacity-20 absolute top-4 left-4" />
                                <div className="text-4xl font-black text-white/10 tracking-[1em] absolute">THE STAGE</div>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll animation="fade-up" delay={400} className="w-full md:w-3/4 bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
                        <div className="space-y-8 text-slate-200 leading-relaxed font-medium text-lg md:text-xl text-center md:text-left">
                            <p>時は20XX年。アイドル業界は、かつてないほどの飽和状態を迎えていた。<br/>「カッコいいだけじゃ生き残れない」</p>
                            <p>そんな過酷な時代に生まれた新たなエンターテインメント、<br/>それが<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-black text-2xl">アイドル・バトルトーナメント</span>。</p>
                            <p>歌唱力、ダンス、ビジュアル、そして――「闘争心」。<br/>全てを懸けてステージの上でぶつかり合う少年たち。<br/>勝者には栄光のセンターポジションが、敗者には残酷な運命が待っている。</p>
                            <p className="font-black text-3xl text-white pt-4">さあ、推しをトップへ導け。</p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};
