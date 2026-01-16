import React from 'react';
import { useInView } from '../hooks';

export const RevealOnScroll = ({ children, className = "", delay = 0, animation = "fade-up" }) => {
    const [ref, isInView] = useInView({ triggerOnce: true });
    let animationClass = "";
    if (animation === "fade-up") animationClass = isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20";
    else if (animation === "zoom-in") animationClass = isInView ? "opacity-100 scale-100" : "opacity-0 scale-90";
    else if (animation === "slide-right") animationClass = isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20";

    return (
        <div ref={ref} className={`transition-all duration-1000 ease-out ${animationClass} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};
