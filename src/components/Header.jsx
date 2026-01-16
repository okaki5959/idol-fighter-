import React, { useState } from 'react';
import { Crown, Menu, X } from 'lucide-react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center pointer-events-none">
                <div onClick={() => scrollToSection('top')} className="flex items-center gap-2 pointer-events-auto cursor-pointer transition-transform hover:scale-105">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white shadow-lg"><Crown size={20} className="text-white fill-white" /></div>
                    <div className="text-white font-black italic tracking-wider drop-shadow-md text-xl md:text-2xl">IDOL<span className="text-yellow-300">FIGHTER</span></div>
                </div>
                <button onClick={() => setIsOpen(true)} className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full border border-white/50 transition-all active:scale-95 shadow-lg group"><Menu size={28} className="text-white group-hover:rotate-180 transition-transform duration-500" /></button>
            </header>
            <div className={`fixed inset-0 z-[60] bg-slate-900/90 backdrop-blur-xl transition-all duration-500 flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto clip-circle-full' : 'opacity-0 pointer-events-none clip-circle-zero'}`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"><X size={32} /></button>
                <nav className="text-center">
                    <ul className="space-y-6">
                        {[{ label: 'TOP', id: 'top' }, { label: 'IDOLS', id: 'idols' }, { label: 'STORY', id: 'story' }, { label: 'SYSTEM', id: 'system' }, { label: 'MOVIE', id: 'movie' }, { label: 'NEWS', id: 'news' }].map((item, i) => (
                            <li key={item.id} className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                <button onClick={() => scrollToSection(item.id)} className="block text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 hover:to-pink-400 transition-all hover:scale-110 tracking-widest mx-auto">{item.label}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};
