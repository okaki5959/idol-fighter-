import React from 'react';
import { Crown } from 'lucide-react';

export const Footer = ({ characters = [] }) => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center relative">
                <div className="flex items-center justify-center gap-4 md:gap-12 mb-6">
                    {characters[0] && (
                        <div className="w-24 h-24 md:w-56 md:h-56 relative animate-float-slow flex-shrink-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${characters[0].color} opacity-20 rounded-full blur-3xl`}></div>
                            <img src={characters[0].thumbnail} alt={characters[0].name} className="w-full h-full object-contain drop-shadow-2xl" />
                        </div>
                    )}
                    <div className="flex flex-col items-center gap-2">
                        <Crown size={32} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xl md:text-3xl font-black italic">IDOLFIGHTER</span>
                    </div>
                    {characters[1] && (
                        <div className="w-24 h-24 md:w-56 md:h-56 relative animate-float-slow flex-shrink-0" style={{ animationDelay: '1s' }}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${characters[1].color} opacity-20 rounded-full blur-3xl`}></div>
                            <img src={characters[1].thumbnail} alt={characters[1].name} className="w-full h-full object-contain drop-shadow-2xl" />
                        </div>
                    )}
                </div>
                <div className="flex justify-center gap-6 mb-8 text-sm text-slate-400 font-bold">
                    <a href="#" className="hover:text-white transition-colors">利用規約</a>
                    <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
                    <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
                </div>
                <p className="text-xs text-slate-600">&copy; 2024 IDOL FIGHTER PROJECT All Rights Reserved.</p>
            </div>
        </footer>
    );
};
