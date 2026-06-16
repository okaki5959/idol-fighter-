import React, { useState } from 'react';

const Book = () => {
    // ページ状態: 0=表1のみ, 1=表2&P1, 2=P2&P3, ..., 12=P24&表3, 13=表4のみ
    const [pageState, setPageState] = useState(0);

    // 総ページ数（表紙含む）: 表1, 見開き12セット, 表4 = 14状態
    const totalStates = 14;

    const goNext = () => {
        if (pageState < totalStates - 1) {
            setPageState(pageState + 1);
        }
    };

    const goPrev = () => {
        if (pageState > 0) {
            setPageState(pageState - 1);
        }
    };

    // ページ番号の計算
    const getPageNumbers = () => {
        if (pageState === 0) return { left: null, right: '表1' };
        if (pageState === totalStates - 1) return { left: '表4', right: null };

        // 見開きページ
        const leftPage = pageState === 1 ? '表2' : (pageState - 1) * 2;
        const rightPage = pageState === 1 ? 'P1' : `P${(pageState - 1) * 2 + 1}`;

        // 最後の見開き（P24と表3）
        if (pageState === 12) {
            return { left: 'P24', right: '表3' };
        }

        return { left: leftPage, right: rightPage };
    };

    const pages = getPageNumbers();

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
            <div className="relative">
                {/* 本のコンテナ */}
                <div className="relative flex">
                    {/* 左ページ */}
                    {pageState > 0 && (
                        <div className="w-[300px] h-[400px] bg-gradient-to-br from-amber-50 to-amber-100 shadow-2xl border-r-2 border-amber-800 flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-700">{pages.left}</span>
                        </div>
                    )}

                    {/* 右ページ */}
                    {pageState < totalStates - 1 && (
                        <div className="w-[300px] h-[400px] bg-gradient-to-br from-amber-50 to-amber-100 shadow-2xl flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-700">{pages.right}</span>
                            {/* 内側に茶色の装丁 */}
                            <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-amber-900 to-transparent opacity-30"></div>
                        </div>
                    )}

                    {/* 表4のみの表示 */}
                    {pageState === totalStates - 1 && (
                        <div className="w-[300px] h-[400px] bg-gradient-to-br from-amber-700 to-amber-900 shadow-2xl flex items-center justify-center">
                            <span className="text-4xl font-bold text-amber-50">{pages.left}</span>
                        </div>
                    )}
                </div>

                {/* ナビゲーション矢印 */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
                    {pageState > 0 && (
                        <button
                            onClick={goPrev}
                            className="pointer-events-auto -ml-16 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
                        >
                            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {pageState < totalStates - 1 && (
                        <button
                            onClick={goNext}
                            className="pointer-events-auto -mr-16 ml-auto bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
                        >
                            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* ページインジケーター */}
                <div className="mt-8 text-center text-white">
                    <span className="text-sm">
                        {pageState === 0 && '表紙'}
                        {pageState > 0 && pageState < totalStates - 1 && `見開き ${pageState}`}
                        {pageState === totalStates - 1 && '裏表紙'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Book;
