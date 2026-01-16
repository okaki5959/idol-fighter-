import React from 'react';
import { Music, Heart, Zap } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const SystemSection = ({ characters = [] }) => {
    const systems = [
        { title: "RHYTHM BATTLE", Icon: Music, desc: "リズムに合わせてコンボを決めろ!楽曲のビートとバトルの衝撃がシンクロする新感覚アクション。", color: "bg-blue-100 text-blue-500" },
        { title: "DRESS UP", Icon: Heart, desc: "衣装チェンジでステータス変化!「カッコいい」は「強い」。戦略的なコーディネートでライバルに差をつけよう。", color: "bg-pink-100 text-pink-500" },
        { title: "LIVE STAGE", Icon: Zap, desc: "クライマックスは3Dライブ演出!必殺技ゲージが溜まれば、ド派手なスペシャルパフォーマンスが発動。", color: "bg-yellow-100 text-yellow-500" },
    ];
    return (
        <section id="system" className="relative w-full py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-16 relative flex items-center justify-center gap-4 md:gap-12">
                        {characters[0] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0">
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[0].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[0].thumbnail} alt={characters[0].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 tracking-tighter">SYSTEM</h2>
                            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
                            <p className="mt-4 text-slate-500 font-bold">ゲームシステム</p>
                        </div>
                        {characters[1] && (
                            <div className="w-32 h-32 md:w-64 md:h-64 relative animate-float-slow flex-shrink-0" style={{ animationDelay: '1s' }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${characters[1].color} opacity-20 rounded-full blur-3xl`}></div>
                                <img src={characters[1].thumbnail} alt={characters[1].name} className="w-full h-full object-contain drop-shadow-2xl" />
                            </div>
                        )}
                    </div>
                </RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {systems.map((sys, i) => (
                        <RevealOnScroll key={i} delay={i * 200} animation="slide-right">
                            <div className="bg-slate-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-slate-100 group h-full">
                                <div className={`w-16 h-16 rounded-2xl ${sys.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}><sys.Icon size={32} /></div>
                                <h3 className="text-2xl font-black text-slate-800 mb-4">{sys.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{sys.desc}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};
