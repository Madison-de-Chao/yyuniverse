
import React from 'react';
import { Theme, PageId } from '../types';
import { Layers, ArrowRight, Heart, Brain, Zap, BookOpen, Shield, Circle } from 'lucide-react';
import { SystemMap } from '../components/SystemMap';

interface SystemDetailProps {
  theme: Theme;
  onNavigate: (page: PageId) => void;
}

export const SystemDetail: React.FC<SystemDetailProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm';

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-7xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* 1. SYSTEM HEADER & MAP */}
      <header className="text-center mb-16 animate-fade-in">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-xs font-mono uppercase tracking-widest ${
          isDark ? 'border-gold/30 text-gold bg-gold/5' : 'border-muted-gold/30 text-muted-gold bg-amber-50'
        }`}>
          <Layers size={14} />
          System Architecture v2.2
        </div>
        <h1 className={`font-serif text-4xl md:text-6xl font-bold mb-4 ${textColor}`}>
          元壹思維全覽
        </h1>
        <p className={`text-lg font-serif italic ${mutedText} max-w-3xl mx-auto mb-12`}>
          思想總覽地圖 (Thought Overview Map) <br/>
          以「完整性」為恆星，指引結構、應用與哲學的運行軌道。
        </p>
        
        {/* THE INTERACTIVE MAP */}
        <div className={`w-full rounded-3xl border overflow-hidden mb-20 ${isDark ? 'bg-void border-slate-800' : 'bg-[#fbf9f4] border-gray-200'}`}>
           <SystemMap theme={theme} onNavigate={onNavigate} />
        </div>
      </header>

      {/* 2. DETAILED CARDS */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* ZONE C: PHILOSOPHY */}
        <div 
          className={`group relative p-8 rounded-3xl border text-left transition-all duration-500 hover:-translate-y-1 ${cardBg} flex flex-col h-full cursor-pointer`}
          onClick={() => onNavigate('system-c')}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${
            isDark ? 'bg-purple-500' : 'bg-purple-300'
          }`} />
          
          <div className="mb-6 flex items-center justify-between">
             <span className={`text-xs font-mono font-bold px-2 py-1 rounded border ${
               isDark ? 'text-purple-400 border-purple-900 bg-purple-900/20' : 'text-purple-700 border-purple-200 bg-purple-50'
             }`}>ZONE C</span>
             <Heart size={24} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
          </div>
          
          <h2 className={`font-serif text-2xl font-bold mb-2 ${textColor}`}>哲學層</h2>
          <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 ${mutedText}`}>Philosophy</h3>
          
          <ul className={`space-y-3 text-sm mb-8 flex-grow ${mutedText}`}>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
              <span><strong>Care & Truth：</strong>不說好聽話，但永遠在乎。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
              <span><strong>元壹宇宙：</strong>看見生命的完整弧度。</span>
            </li>
          </ul>

          <div className={`mt-auto pt-4 border-t w-full flex justify-between items-center ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
             <span className="text-xs font-bold uppercase tracking-wider opacity-60">Explore</span>
             <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </div>
        </div>

        {/* ZONE B: STRUCTURE */}
        <div 
          className={`group relative p-8 rounded-3xl border text-left transition-all duration-500 hover:-translate-y-1 ${cardBg} flex flex-col h-full cursor-pointer`}
          onClick={() => onNavigate('system-b')}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${
            isDark ? 'bg-gold' : 'bg-amber-300'
          }`} />
          
          <div className="mb-6 flex items-center justify-between">
             <span className={`text-xs font-mono font-bold px-2 py-1 rounded border ${
               isDark ? 'text-gold border-yellow-900 bg-yellow-900/20' : 'text-muted-gold border-amber-200 bg-amber-50'
             }`}>ZONE B</span>
             <Brain size={24} className={isDark ? 'text-gold' : 'text-muted-gold'} />
          </div>
          
          <h2 className={`font-serif text-2xl font-bold mb-2 ${textColor}`}>結構層</h2>
          <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 ${mutedText}`}>Structure</h3>
          
          <ul className={`space-y-3 text-sm mb-8 flex-grow ${mutedText}`}>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
              <span><strong>八階循環：</strong>將混亂拆解為可操作步驟。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
              <span><strong>三層校準：</strong>分離情緒、語言與結構。</span>
            </li>
          </ul>

          <div className={`mt-auto pt-4 border-t w-full flex justify-between items-center ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
             <span className="text-xs font-bold uppercase tracking-wider opacity-60">Explore</span>
             <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </div>
        </div>

        {/* ZONE A: APPLICATION */}
        <div 
          className={`group relative p-8 rounded-3xl border text-left transition-all duration-500 hover:-translate-y-1 ${cardBg} flex flex-col h-full cursor-pointer`}
          onClick={() => onNavigate('system-a')}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${
            isDark ? 'bg-blue-500' : 'bg-blue-300'
          }`} />
          
          <div className="mb-6 flex items-center justify-between">
             <span className={`text-xs font-mono font-bold px-2 py-1 rounded border ${
               isDark ? 'text-blue-400 border-blue-900 bg-blue-900/20' : 'text-blue-700 border-blue-200 bg-blue-50'
             }`}>ZONE A</span>
             <Zap size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
          </div>
          
          <h2 className={`font-serif text-2xl font-bold mb-2 ${textColor}`}>應用層</h2>
          <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 ${mutedText}`}>Application</h3>
          
          <ul className={`space-y-3 text-sm mb-8 flex-grow ${mutedText}`}>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
              <span><strong>思維病毒：</strong>識別 10 種常見的認知誤區。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
              <span><strong>模擬器：</strong>透過對話演練，看見慣性。</span>
            </li>
          </ul>

          <div className={`mt-auto pt-4 border-t w-full flex justify-between items-center ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
             <span className="text-xs font-bold uppercase tracking-wider opacity-60">Explore</span>
             <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </div>
        </div>

      </div>

      {/* 3. SATELLITE SYSTEMS */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div 
            onClick={() => onNavigate('sanctuary')}
            className={`p-6 rounded-2xl border flex items-center gap-6 cursor-pointer transition-all hover:scale-[1.01] ${cardBg}`}
        >
            <div className={`p-4 rounded-full ${isDark ? 'bg-slate-800 text-gold' : 'bg-gray-100 text-muted-gold'}`}>
                <Shield size={24} />
            </div>
            <div>
                <h3 className={`font-bold mb-1 ${textColor}`}>虹靈御所 (Sanctuary)</h3>
                <p className={`text-sm ${mutedText}`}>完整性系統的落地場域與實驗站。</p>
            </div>
        </div>

        <div 
            onClick={() => onNavigate('whitepaper')}
            className={`p-6 rounded-2xl border flex items-center gap-6 cursor-pointer transition-all hover:scale-[1.01] ${cardBg}`}
        >
            <div className={`p-4 rounded-full ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-gray-100 text-blue-600'}`}>
                <BookOpen size={24} />
            </div>
            <div>
                <h3 className={`font-bold mb-1 ${textColor}`}>完整白皮書 (Whitepaper)</h3>
                <p className={`text-sm ${mutedText}`}>收錄 Level 0-6 的所有核心文獻。</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default SystemDetail;
