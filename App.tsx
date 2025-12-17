
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { ScrollToTop } from './components/ScrollToTop';
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
import { NotFound } from './pages/NotFound';
import { Theme } from './types';
import { ChevronLeft } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize theme from local storage if available, or default to dark
  useEffect(() => {
    // Optional: Logic to read system preference or localStorage
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${
      theme === 'dark' ? 'bg-void text-cyber-text' : 'bg-paper text-ink'
    } selection:bg-gold/30 selection:text-gold`}>
      
      <ScrollToTop />

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

      {/* Global Back Button (Hidden on home page) */}
      {!isHomePage && (
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

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/about" element={<AboutMomo theme={theme} />} />
          <Route path="/system" element={<SystemDetail theme={theme} />} />
          <Route path="/system-a" element={<SystemZoneA theme={theme} />} />
          <Route path="/system-b" element={<SystemZoneB theme={theme} />} />
          <Route path="/system-c" element={<SystemZoneC theme={theme} />} />
          <Route path="/system-05" element={<SystemZone05 theme={theme} />} />
          <Route path="/whitepaper" element={<Whitepaper theme={theme} />} />
          <Route path="/guide" element={<LinearGuide theme={theme} />} />
          <Route path="/logic" element={<LogicLoop theme={theme} />} />
          <Route path="/sanctuary" element={<Sanctuary theme={theme} />} />
          <Route path="/chat" element={<AIChat theme={theme} />} />
          <Route path="/origins" element={<NineOrigins theme={theme} />} />
          <Route path="/principles" element={<SevenPrinciples theme={theme} />} />
          <Route path="/script" element={<UniverseScript theme={theme} />} />
          <Route path="*" element={<NotFound theme={theme} />} />
        </Routes>
      </div>
      
      {/* New Open Map Navigation */}
      <Nav theme={theme} />
    </div>
  );
}

export default App;
