import React from 'react';

export const StatBar = ({ label, value, colorClass, icon: Icon, delay }) => (
    <div className="flex items-center gap-3 mb-2 animate-slide-in" style={{ animationDelay: `${delay}ms` }}>
        <div className={`p-2 rounded-full bg-white shadow-sm ${colorClass}`}><Icon size={16} /></div>
        <div className="flex-1">
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-1"><span>{label}</span><span>{value}</span></div>
            <div className="h-3 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
                <div className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${colorClass}`} style={{ width: `${value}%` }} />
            </div>
        </div>
    </div>
);
