
import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { LogicLoop } from './pages/LogicLoop';
import { AIChat } from './pages/AIChat';
import { LinearGuide } from './pages/LinearGuide';
import { Sanctuary } from './pages/Sanctuary';
import { AboutMomo } from './pages/AboutMomo';
import { SystemDetail } from './pages/SystemDetail';
import { SystemZoneA } from './pages/SystemZoneA';
import { SystemZoneB } from './pages/SystemZoneB';
import { SystemZoneC } from './pages/SystemZoneC';
import { SystemZone05 } from './pages/SystemZone05';
import { Whitepaper } from './pages/Whitepaper';
import { NineOrigins } from './pages/NineOrigins';
import { SevenPrinciples } from './pages/SevenPrinciples';
import { UniverseScript } from './pages/UniverseScript';
import { PageId, Theme } from './types';
import { Activity, ChevronLeft, Map, Sparkles } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [theme, setTheme] = useState<Theme>('dark');
  // History stack for navigation
  const [history, setHistory] = useState<PageId[]>([]);

  // Initialize theme from local storage if available, or default to dark
  useEffect(() => {
    // Optional: Logic to read system preference or localStorage
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavigate = (page: PageId) => {
    if (page === activePage) return;
    // Push current page to history before navigating
    setHistory(prev => [...prev, activePage]);
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    const newHistory = [...history];
    const prevPage = newHistory.pop(); // Get the last page
    setHistory(newHistory);
    setActivePage(prevPage || 'home'); // Fallback to home if history empty
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />;
      case 'logic':
        return <LogicLoop theme={theme} />;
      case 'chat':
        return <AIChat theme={theme} />;
      case 'guide':
        return <LinearGuide theme={theme} onNavigate={handleNavigate} />;
      case 'sanctuary':
        return <Sanctuary theme={theme} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutMomo theme={theme} />;
      case 'system':
        return <SystemDetail theme={theme} onNavigate={handleNavigate} />;
      case 'system-a':
        return <SystemZoneA theme={theme} />;
      case 'system-b':
        return <SystemZoneB theme={theme} />;
      case 'system-c':
        return <SystemZoneC theme={theme} onNavigate={handleNavigate} />;
      case 'system-05':
        return <SystemZone05 theme={theme} />;
      case 'whitepaper':
        return <Whitepaper theme={theme} />;
      case 'origins':
        return <NineOrigins theme={theme} />;
      case 'principles':
        return <SevenPrinciples theme={theme} />;
      case 'script':
        return <UniverseScript theme={theme} />;
      default:
        return <Home onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${
      theme === 'dark' ? 'bg-void text-cyber-text' : 'bg-paper text-ink'
    } selection:bg-gold/30 selection:text-gold`}>
      
      {/* Ambient Background Noise/Gradient - Alive & Breathing */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[900px] h-[900px] bg-indigo-950/20 rounded-full blur-[150px] animate-float"></div>
            <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            {/* Subtle Grain Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-stone-200/40 rounded-full blur-[100px] animate-float"></div>
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-40 bg-paper-texture"></div>
          </>
        )}
      </div>

      {/* Brand ribbon to reinforce museum-grade positioning */}
      <div className="fixed top-4 inset-x-0 flex justify-center px-4 z-40 pointer-events-none">
        <div
          className={`decorative-border pointer-events-auto flex flex-col md:flex-row gap-4 items-start md:items-center w-full max-w-5xl px-6 py-4 border shadow-lg transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-slate-900/70 border-slate-800 text-slate-100'
              : 'bg-white/80 border-stone-200 text-ink'
          } backdrop-blur-xl`}
          style={{
            '--border-radius': '24px',
            '--border-gradient': 'linear-gradient(120deg, rgba(255, 215, 0, 0.8), rgba(168, 85, 247, 0.6), rgba(59, 130, 246, 0.7))',
            borderRadius: '24px',
          } as React.CSSProperties}
          data-border-style="mask"
          role="status"
          aria-label="品牌導覽狀態條"
        >
          <div className="flex items-center gap-3">
            <span className={`p-3 rounded-full ${theme === 'dark' ? 'bg-slate-800 text-gold' : 'bg-stone-100 text-muted-gold'}`}>
              <Sparkles size={18} />
            </span>
            <div className="leading-tight">
              <p className="font-serif font-bold tracking-wide text-sm md:text-base">科博館等級官方導覽 · 專業可信任</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">Immersive teaching · Guided cognition</p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:ml-auto">
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide ${
                theme === 'dark' ? 'bg-slate-800/70 text-emerald-300 border border-emerald-900' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}
              role="status"
            >
              <Activity size={14} /> LIVE 導覽模式
            </div>
            <div
              className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide ${
                theme === 'dark' ? 'bg-slate-800/70 text-blue-200 border border-slate-700' : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
              role="status"
            >
              <Map size={14} /> 全域地圖可隨時開啟
            </div>
            <button
              onClick={() => handleNavigate('guide')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-300 shadow-md flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-void hover:from-amber-300 hover:to-amber-200'
                  : 'bg-gradient-to-r from-ink to-slate-800 text-paper hover:from-slate-800 hover:to-slate-700'
              }`}
              aria-label="Start guided experience"
            >
              立即體驗
            </button>
          </div>
        </div>
      </div>

      {/* Global Back Button (Visible on non-home pages) */}
      {activePage !== 'home' && (
        <button
          onClick={handleBack}
          aria-label="Go back to previous page"
          className={`fixed top-6 left-6 z-50 px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 group shadow-lg ${
            theme === 'dark'
              ? 'bg-void/80 text-slate-400 border border-slate-800 hover:text-gold hover:border-gold/50 hover:bg-slate-900'
              : 'bg-paper/80 text-stone-500 border border-stone-200 hover:text-ink hover:border-muted-gold hover:bg-white'
          } backdrop-blur-md`}
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif text-sm tracking-widest">BACK</span>
        </button>
      )}

      <div className="relative z-10 museum-grid">
        {renderPage()}
      </div>
      
      {/* New Open Map Navigation */}
      <Nav activePage={activePage} onNavigate={handleNavigate} theme={theme} />
    </div>
  );
}

export default App;
