import React, { useState, useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { CollapsibleNav } from './components/CollapsibleNav';
import { Footer } from './components/Footer';
import { AppRoutes } from './router';
import { Theme } from './types';
import { ChevronLeft } from 'lucide-react';

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

      {/* Collapsible Navigation */}
      <CollapsibleNav theme={theme} onToggleTheme={toggleTheme} />

      {/* Content with top padding for navigation */}
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

        {/* Footer */}
        <Footer theme={theme} />
      </div>
      <Analytics />
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
