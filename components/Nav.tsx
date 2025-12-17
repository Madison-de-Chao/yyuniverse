
import React, { useState, useEffect, useRef } from 'react';
import { Compass, Brain, MessageSquare, Home, Map as MapIcon, Star, BookOpen, X, User, Layers, FileText, Ghost } from 'lucide-react';
import { PageId } from '../types';

interface NavProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  theme: 'light' | 'dark';
}

export const Nav: React.FC<NavProps> = ({ activePage, onNavigate, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Focus management for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      if (openButtonRef.current && !isOpen && isAnimating) {
          openButtonRef.current.focus();
      }
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const menuItems = [
    { id: 'home', icon: Home, label: '首頁大廳', desc: 'Entrance' },
    { id: 'about', icon: User, label: '關於默默超', desc: 'Who is MOMO?' },
    { id: 'system', icon: Layers, label: '系統詳解', desc: 'System Blueprint' },
    { id: 'system-05', icon: Ghost, label: '0.5章：伊', desc: 'The Another' },
    { id: 'whitepaper', icon: FileText, label: '完整白皮書', desc: 'Full Documentation v2.2' },
    { id: 'guide', icon: BookOpen, label: '跟著默默超一起想', desc: 'Linear Guide' },
    { id: 'logic', icon: Brain, label: '八階思維系統', desc: 'Cognitive Tool' },
    { id: 'sanctuary', icon: Star, label: '虹靈御所', desc: 'Sanctuary' },
    { id: 'chat', icon: MessageSquare, label: '誠實 AI', desc: 'Integrity Companion' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id as PageId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        ref={openButtonRef}
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation Menu"
        aria-expanded={isOpen}
        aria-controls="fullscreen-nav"
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-90 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gold to-yellow-600 text-void shadow-gold/20' 
            : 'bg-gradient-to-br from-ink to-gray-700 text-paper shadow-xl'
        }`}
      >
        <Compass size={28} className={isOpen ? 'animate-spin-slow' : ''} />
      </button>

      {/* Full Screen Map Overlay */}
      <div 
        id="fullscreen-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Full Screen Navigation"
        className={`fixed inset-0 z-40 transition-all duration-700 flex flex-col items-center justify-center ${
          isOpen 
            ? 'opacity-100 pointer-events-auto backdrop-blur-xl' 
            : 'opacity-0 pointer-events-none backdrop-blur-0 delay-300'
        } ${theme === 'dark' ? 'bg-void/95' : 'bg-paper/98'}`}
      >
        {/* Close Button */}
        <button 
          ref={closeButtonRef}
          onClick={() => setIsOpen(false)}
          aria-label="Close Navigation Menu"
          className={`absolute top-8 right-8 p-3 rounded-full transition-transform duration-300 hover:rotate-90 ${
            theme === 'dark' ? 'text-gold hover:bg-white/10' : 'text-ink hover:bg-black/5'
          }`}
        >
          <X size={32} />
        </button>

        <h2 className={`font-serif text-4xl mb-16 font-bold tracking-widest transition-all duration-700 delay-100 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        } ${
          theme === 'dark' ? 'text-gold' : 'text-ink'
        }`}>
          全域導航 MAP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full px-6 max-h-[70vh] overflow-y-auto custom-scrollbar p-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative p-6 rounded-xl border text-left transition-all duration-500 transform ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                } ${
                  theme === 'dark'
                    ? `hover:border-gold/50 hover:bg-white/5 ${isActive ? 'border-gold bg-gold/10 shadow-[0_0_20px_rgba(255,215,0,0.1)]' : 'border-slate-800 bg-slate-900/40'}`
                    : `hover:border-muted-gold hover:bg-white/80 ${isActive ? 'border-muted-gold bg-white shadow-lg' : 'border-stone-200 bg-stone-100/50'}`
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                     theme === 'dark' 
                       ? (isActive ? 'bg-gold text-void' : 'bg-slate-800 text-slate-400 group-hover:bg-gold group-hover:text-void') 
                       : (isActive ? 'bg-muted-gold text-white' : 'bg-stone-200 text-stone-500 group-hover:bg-muted-gold group-hover:text-white')
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className={`font-serif text-lg font-bold tracking-wide ${
                    theme === 'dark' ? 'text-slate-200' : 'text-ink'
                  }`}>
                    {item.label}
                  </span>
                </div>
                <p className={`font-mono text-xs tracking-wider pl-[3.25rem] uppercase ${
                  theme === 'dark' ? 'text-slate-500 group-hover:text-slate-300' : 'text-stone-400 group-hover:text-stone-600'
                }`}>
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
