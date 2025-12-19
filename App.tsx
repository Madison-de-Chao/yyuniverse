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

  co
