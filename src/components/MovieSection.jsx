import React from 'react';
import { Play } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const MovieSection = ({ characters = [] }) => {
    return (
        <section id="movie" className="relative w-full py-24 md:py-32 bg-slate-900 text-white">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16 relative flex items-center justify-center gap-4 md:gap-12">
                        {characters[0] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0">
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[0].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[0].thumbnail} alt={characters[0].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">MOVIE</h2>
                            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
                            <p className="mt-4 text-slate-400 font-bold">プロモーション映像</p>
                        </div>
                        {characters[1] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0" style={{ animationDelay: '1s' }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[1].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[1].thumbnail} alt={characters[1].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
                <RevealOnScroll animation="zoom-in" delay={200}>
                    <div className="w-full aspect-video bg-slate-800 rounded-2xl shadow-2xl border-4 border-slate-700 relative flex items-center justify-center group cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-50 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform duration-300"><Play size={40} className="fill-white text-white ml-2" /></div>
                        </div>
                        <span className="absolute bottom-4 right-6 text-sm font-bold tracking-widest opacity-70">OFFICIAL TRAILER VOL.1</span>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
