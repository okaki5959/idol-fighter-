import React from 'react';
import { Calendar } from 'lucide-react';
import { NEWS_DATA } from '../data';
import { RevealOnScroll } from './RevealOnScroll';

export const NewsSection = ({ characters = [] }) => {
    return (
        <section id="news" className="relative w-full py-24 md:py-32 bg-slate-50">
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
                            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 tracking-tighter">NEWS</h2>
                            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
                            <p className="mt-4 text-slate-500 font-bold">最新情報</p>
                        </div>
                        {characters[1] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0" style={{ animationDelay: '1s' }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[1].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[1].thumbnail} alt={characters[1].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
            <div className="space-y-4">
                {NEWS_DATA.map((news, i) => (
                    <RevealOnScroll key={i} delay={i * 100} animation="fade-up">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-4 border border-slate-100 group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Calendar size={12} /> {news.date}</div>
                                <div className={`text-xs font-bold px-3 py-1 rounded-full border ${news.cat === 'EVENT' ? 'border-pink-200 text-pink-500 bg-pink-50' : news.cat === 'UPDATE' ? 'border-blue-200 text-blue-500 bg-blue-50' : news.cat === 'MEDIA' ? 'border-purple-200 text-purple-500 bg-purple-50' : 'border-slate-200 text-slate-500 bg-slate-50'}`}>{news.cat}</div>
                            </div>
                            <div className="flex-1 font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{news.title}</div>
                            <div className="hidden md:block text-slate-300 group-hover:translate-x-1 transition-transform">→</div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
            <RevealOnScroll delay={500}>
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">VIEW ALL</button>
                </div>
            </RevealOnScroll>
        </div>
    </section>
    );
};
