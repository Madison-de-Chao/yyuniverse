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
import { RealityMirror } from './pages/RealityMirror';
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
        return <Home theme={theme} onNavigate={handleNavigate} />;
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
        return <SystemZoneC theme={theme} />;
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
      case 'reality-mirror':
        return <RealityMirror theme={theme} />;
      default:
        return <Home theme={theme} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div
      className={`${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}
      style={{
        backgroundColor: theme === 'dark' ? '#050508' : '#f5f5f5',
        color: theme === 'dark' ? '#fafafa' : '#050508'
      }}
    >
      {/* Ambient Background Noise/Gradient - Alive & Breathing */}
      {theme === 'dark' ? (
        <>
          {/* Subtle Grain Texture */}
          <div className="fixed inset-0 pointer-events-none opacity-5 mix-blend-multiply" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 result=%27noise%27/%3E%3C/filter%3E%3Crect width=%27400%27 height=%27400%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E")'
          }}></div>
        </>
      ) : (
        <>
          {/* Paper Texture */}
          <div className="fixed inset-0 pointer-events-none opacity-3" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 result=%27noise%27/%3E%3C/filter%3E%3Crect width=%27400%27 height=%27400%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E")'
          }}></div>
        </>
      )}

      {/* Brand ribbon to reinforce museum-grade positioning */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-void/90 border-b border-gold/30 text-paper' 
          : 'bg-paper/90 border-b border-ink/20 text-void'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs opacity-60 tracking-wider">
              科博館等級官方導覽 · 專業可信任
            </span>
            <span className="text-xs opacity-40">
              Immersive teaching · Guided cognition
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs opacity-60">LIVE 導覽模式</span>
            <span className="text-xs opacity-40">全域地圖可隨時開啟</span>
            <button
              onClick={() => handleNavigate('guide')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-300 shadow-md flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-void hover:from-amber-300 hover:to-amber-200'
                  : 'bg-gradient-to-r from-ink to-slate-800 text-paper hover:from-slate-800 hover:to-slate-700'
              }`}
            >
              <Map className="w-4 h-4" />
              立即體驗
            </button>
          </div>
        </div>
      </div>

      {/* Content with top padding for fixed header */}
      <div className="relative z-0 pt-20">
        {/* Global Back Button (Visible on non-home pages) */}
        {activePage !== 'home' && (
          <button
            onClick={handleBack}
            className={`fixed top-24 left-6 z-40 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 ${
              theme === 'dark'
                ? 'hover:bg-gold/10 text-paper/70 hover:text-paper'
                : 'hover:bg-ink/10 text-void/70 hover:text-void'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-semibold">BACK</span>
          </button>
        )}

        {renderPage()}

        {/* New Open Map Navigation */}
        <Nav 
          activePage={activePage} 
          onNavigate={handleNavigate} 
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;
