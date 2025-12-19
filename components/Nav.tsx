import React, { useState, useEffect } from 'react';
import { PageId, Theme } from '../types';
import { Menu, X, Sun, Moon, Home, Map, MessageSquare, BookOpen, Shield, User, Layers, Compass, FileText, Star, Sparkles, Scale } from 'lucide-react';

interface NavProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: PageId; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: '首頁', icon: Home },
  { id: 'guide', label: '導覽', icon: Map },
  { id: 'chat', label: 'AI 對話', icon: MessageSquare },
  { id: 'logic', label: '思維循環', icon: Layers },
  { id: 'system', label: '系統總覽', icon: Compass },
  { id: 'origins', label: '九大起源', icon: Star },
  { id: 'principles', label: '七大法則', icon: Sparkles },
  { id: 'mirror', label: '真實之鏡', icon: Scale },
  { id: 'script', label: '宇宙劇本', icon: FileText },
  { id: 'whitepaper', label: '白皮書', icon: BookOpen },
  { id: 'sanctuary', label: '避難所', icon: Shield },
  { id: 'about', label: '關於墨', icon: User },
];

export const Nav: React.FC<NavProps> = ({ activePage, onNavigate, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    setIsOpen(false);
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isDark 
            ? 'bg-gold text-black hover:bg-amber-300' 
            : 'bg-muted-gold text-white hover:bg-amber-600'
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            role="presentation"
          />
          
          {/* Panel */}
          <nav 
            aria-label="Main navigation"
            className={`fixed bottom-24 right-6 z-50 w-72 max-h-[70vh] overflow-y-auto rounded-2xl border shadow-2xl animate-fade-in-up ${
              isDark 
                ? 'bg-slate-900 border-slate-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            {/* Header */}
            <div className={`p-4 border-b ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
              <div className="flex items-center justify-between">
                <h3 className={`font-serif font-bold ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                  導覽地圖
                </h3>
                <button
                  onClick={onToggleTheme}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  className={`p-2 rounded-full transition-colors ${
                    isDark 
                      ? 'hover:bg-slate-800 text-gold' 
                      : 'hover:bg-gray-100 text-muted-gold'
                  }`}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>

            {/* Nav Items */}
            <div className="p-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      isActive 
                        ? (isDark 
                            ? 'bg-gold/10 text-gold' 
                            : 'bg-amber-50 text-muted-gold')
                        : (isDark 
                            ? 'text-slate-300 hover:bg-slate-800 hover:text-white' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </>
  );
};
