import React from 'react';

export const PoppingText = ({ text, className, delay = 0 }) => {
    if (!text) return null;
    const items = text.split('');
    return (
        <div className={`inline-block ${className}`}>
            {items.map((char, i) => (
                <span key={i} className="inline-block animate-pop-bounce origin-bottom" style={{ animationDelay: `${delay + i * 50}ms` }}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};
