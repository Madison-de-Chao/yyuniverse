import React, { useState, useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { AppRoutes } from './router';
import { Theme } from './types';
import { ChevronLeft, Map } from 'lucide-react';

// 內部組件，用於訪問 router hooks
function AppContent() {
  const [theme, setTheme] = useState<Theme>('dark');
  const navigate = useNavigate();
  const location = useLocation();

  // 從 localStorage 讀取主題偏好
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // 檢測系統主題偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // 保存主題到 localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const handleNavigateToGuide = () => {
    navigate('/guide');
    window.scrollTo(0, 0);
  };

  const isHomePage = location.pathname === '/';

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
              onClick={handleNavigateToGuide}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-300 shadow-md flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-void hover:from-amber-300 hover:to-amber-200'
                  : 'bg-gradient-to-r from-ink to-slate-800 text-paper hover:from-slate-800 hover:to-slate-700'
              }`}
              aria-label="Start guided experience"
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
        {!isHomePage && (
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

        <AppRoutes theme={theme} toggleTheme={toggleTheme} />

        {/* New Open Map Navigation */}
        <Nav 
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
