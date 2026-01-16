import React, { useState, useCallback, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { IDOLS } from './data';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { TopSection } from './components/TopSection';
import { IdolsSection } from './components/IdolsSection';
import { StorySection } from './components/StorySection';
import { SystemSection } from './components/SystemSection';
import { MovieSection } from './components/MovieSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

const IdolWebsite = () => {
    const [loaded, setLoaded] = useState(false);
    const [currentIdolIndex, setCurrentIdolIndex] = useState(0);

    // 10体全てのキャラクターをシャッフルして各セクションに割り当て
    const characterAssignments = useMemo(() => {
        const shuffled = [...IDOLS].sort(() => 0.5 - Math.random());
        return {
            story: shuffled.slice(0, 2),      // 0-1
            system: shuffled.slice(2, 4),     // 2-3
            movie: shuffled.slice(4, 6),      // 4-5
            news: shuffled.slice(6, 8),       // 6-7
            footer: shuffled.slice(8, 10)     // 8-9
        };
    }, []);

    const handleLoaded = useCallback(() => {
        setLoaded(true);
        window.scrollTo(0, 0);
    }, []);
    const handleIdolSelect = (index) => {
        setCurrentIdolIndex(index);
        const element = document.getElementById('idols');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full font-sans bg-slate-50">
            {!loaded && <LoadingScreen onLoaded={handleLoaded} />}
            {loaded && (
                <>
                    <Header />
                    <main className="animate-fade-in">
                        <TopSection onSelectIdol={handleIdolSelect} />
                        <IdolsSection currentIndex={currentIdolIndex} setCurrentIndex={setCurrentIdolIndex} />
                        <StorySection characters={characterAssignments.story} />
                        <SystemSection characters={characterAssignments.system} />
                        <MovieSection characters={characterAssignments.movie} />
                        <NewsSection characters={characterAssignments.news} />
                    </main>
                    <Footer characters={characterAssignments.footer} />
                </>
            )}
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<IdolWebsite />);
