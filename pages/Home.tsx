
import React from 'react';
import { Shield, ArrowRight, Search, HelpCircle, Sun, Moon, FileText, PanelsTopLeft, Globe2, LayoutDashboard, PlayCircle, Pointer, Users } from 'lucide-react';
import { PageId, Theme, DecorativeBorderStyles } from '../types';
import { IntegrityMotherModel } from '../components/Visuals';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  theme: Theme;
  toggleTheme: () => void;
}

interface JourneyStep {
  title: string;
  subtitle: string;
  description: string;
  cta: () => void;
  label: string;
  ariaLabel: string;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  const pillarCards = [
    {
      title: '策展架構',
      description: '以研究級脈絡梳理宇宙觀，所有內容都有據可查、可回溯。',
      icon: PanelsTopLeft,
      badge: '專業館藏',
    },
    {
      title: '互動導覽',
      description: '以情境引導與視覺化路徑解說，讓觀眾可以循序理解並立即操作。',
      icon: Globe2,
      badge: '動態教學',
    },
    {
      title: '決策支援',
      description: '八階思維系統做為決策護欄，提供可重複練習的安全沙盒。',
      icon: LayoutDashboard,
      badge: '策略骨架',
    },
  ];

  const journeySteps: JourneyStep[] = [
    {
      title: '沉浸起點',
      subtitle: '理解宇宙故事與關鍵人物',
      description: '先從宇宙設定與默默超的角色出發，確定同一個詞彙與價值觀。',
      cta: () => onNavigate('about'),
      label: 'Start',
      ariaLabel: 'Navigate to About page to learn about universe story and key characters',
    },
    {
      title: '系統骨架',
      subtitle: '看懂整體系統與邏輯循環',
      description: '透過系統詳解、八階思維與線性引導，建立穩定的決策框架。',
      cta: () => onNavigate('system'),
      label: 'Structure',
      ariaLabel: 'Navigate to System page to understand overall system and logic loop',
    },
    {
      title: '實際演練',
      subtitle: '應用在命理、對話與白皮書',
      description: '把架構帶進虹靈御所、誠實 AI 與白皮書，完成一次完整體驗。',
      cta: () => onNavigate('whitepaper'),
      label: 'Practice',
      ariaLabel: 'Navigate to Whitepaper page to apply learning in practice',
    },
  ];

  // Shimmer Effect: Linear gradient moving across the text
  // Dark: Gold -> Pale Gold/White -> Gold
  // Light: Ink -> Grey -> Ink
  const shimmerClass = isDark
    ? "bg-[linear-gradient(110deg,#FFD700_45%,#FFF8DC_50%,#FFD700_55%)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer"
    : "bg-[linear-gradient(110deg,#2C2420_45%,#78716c_50%,#2C2420_55%)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer";

  return (
    <div className="min-h-screen flex flex-col items-center px-4 relative overflow-x-hidden">
      
      {/* Theme Toggle Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-500 shadow-lg ${
            isDark 
              ? 'bg-slate-800/80 text-gold hover:bg-slate-700 border border-slate-700 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
              : 'bg-white/80 text-ink hover:bg-white border border-stone-200 hover:shadow-lg'
          } backdrop-blur-md`}
          title={isDark ? "切換至靜心模式" : "切換至宇宙模式"}
          aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section with Visual */}
      <header className="text-center mt-12 mb-20 w-full max-w-6xl relative flex flex-col items-center">
        
        {/* Main Visual Diagram - Integrity Model with Labels */}
        <div className="mb-12 w-full transform hover:scale-[1.01] transition-transform duration-1000 ease-in-out">
          <IntegrityMotherModel theme={theme} showLabels={true} />
        </div>

        {/* Main Title - Chinese & English - Artistic Font with Staggered Reveal AND Shimmer */}
        <h1 
          className={`font-art font-bold mb-8 tracking-wide z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 leading-tight ${
            isDark 
              ? 'drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]' 
              : 'drop-shadow-sm'
          }`}
          aria-label="元壹宇宙 Yuan-Yi Universe × 虹靈御所 Rainbow Sanctuary × 默默超思維 MomoChao Cognition"
        >
          {/* Item 1: Yuan-Yi Universe */}
          <span className="flex flex-col items-center opacity-0 animate-reveal-blur" style={{ animationDelay: '0.2s' }}>
            <span className={`text-4xl md:text-5xl lg:text-6xl ${shimmerClass}`}>元壹宇宙</span>
            <span className={`text-[10px] md:text-xs font-serif tracking-[0.15em] uppercase mt-1 md:mt-3 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Yuan-Yi Universe</span>
          </span>

          <span className={`hidden md:block text-2xl font-light font-sans opacity-0 animate-reveal-blur ${isDark ? 'text-gold' : 'text-muted-gold'}`} style={{ animationDelay: '0.4s' }} aria-hidden="true">×</span>
          
          {/* Item 2: Rainbow Sanctuary */}
          <span className="flex flex-col items-center opacity-0 animate-reveal-blur" style={{ animationDelay: '0.6s' }}>
             <span className={`text-4xl md:text-5xl lg:text-6xl ${shimmerClass}`}>虹靈御所</span>
             <span className={`text-[10px] md:text-xs font-serif tracking-[0.15em] uppercase mt-1 md:mt-3 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Rainbow Sanctuary</span>
          </span>

          <span className={`hidden md:block text-2xl font-light font-sans opacity-0 animate-reveal-blur ${isDark ? 'text-gold' : 'text-muted-gold'}`} style={{ animationDelay: '0.8s' }} aria-hidden="true">×</span>
          
          {/* Item 3: MomoChao Cognition */}
          <span className="flex flex-col items-center opacity-0 animate-reveal-blur" style={{ animationDelay: '1.0s' }}>
             <span className={`text-4xl md:text-5xl lg:text-6xl ${shimmerClass}`}>默默超思維</span>
             <span className={`text-[10px] md:text-xs font-serif tracking-[0.15em] uppercase mt-1 md:mt-3 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>MomoChao Cognition</span>
          </span>
        </h1>
        
        <p className={`font-mono text-[10px] md:text-xs tracking-[0.2em] mb-3 uppercase z-10 transition-colors duration-500 opacity-0 animate-reveal-blur ${
          isDark ? 'text-blue-200' : 'text-stone-500'
        }`} style={{ animationDelay: '1.2s' }}>
          Integrity Thinking System · AI Collaborative Lab
        </p>

        <p className={`font-mono text-[9px] tracking-[0.3em] mb-10 uppercase z-10 transition-colors duration-500 opacity-0 animate-reveal-blur ${
          isDark ? 'text-gold' : 'text-muted-gold'
        }`} style={{ animationDelay: '1.3s' }}>
          Created by CHAO WEICHEN
        </p>
        
        <div className={`w-16 h-[2px] mx-auto mb-8 transition-colors duration-500 opacity-0 animate-reveal-blur ${isDark ? 'bg-gold shadow-[0_0_15px_#FFD700]' : 'bg-muted-gold'}`} style={{ animationDelay: '1.4s' }}></div>
        
        {/* Main Quote - Handwritten Font with Reveal */}
        <p className={`font-hand font-bold text-xl md:text-2xl whitespace-nowrap z-10 transition-colors duration-500 leading-relaxed opacity-0 animate-reveal-blur ${
          isDark ? 'text-slate-200' : 'text-stone-700'
        }`} style={{ animationDelay: '1.6s' }}>
          「在混亂的時代，建立有骨架的靈魂。」
        </p>
        
        <button 
          onClick={() => onNavigate('whitepaper')}
          className={`mt-10 flex items-center gap-3 px-8 py-3 rounded-full border text-xs font-mono tracking-[0.2em] transition-all z-10 duration-500 group opacity-0 animate-reveal-blur ${
            isDark 
              ? 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-gold hover:text-gold hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]' 
              : 'border-stone-300 bg-white/50 text-stone-600 hover:border-ink hover:text-ink hover:bg-white hover:shadow-xl'
          } backdrop-blur-sm`} 
          style={{ animationDelay: '1.8s' }}
          aria-label="Read Full Whitepaper"
        >
          <FileText size={14} className="group-hover:scale-110 transition-transform" /> 閱讀完整白皮書
        </button>
      </header>

      {/* The 3 Portals - Enhanced Visuals */}
      <div className="grid gap-8 w-full max-w-6xl md:grid-cols-3 mb-32 z-10 px-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}>
        
        {/* Portal 1: Sanctuary */}
        <button 
          onClick={() => onNavigate('sanctuary')}
          className={`group relative overflow-hidden p-10 rounded-[2rem] border text-left transition-all duration-500 hover:-translate-y-2 ${
            isDark 
              ? 'bg-slate-900/40 border-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]' 
              : 'bg-white/60 border-stone-200 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100'
          } backdrop-blur-md`}
          aria-label="Enter Sanctuary for Fate Reading"
        >
          <div className={`absolute top-[-30%] right-[-30%] w-64 h-64 rounded-full blur-[80px] transition-opacity duration-700 opacity-0 group-hover:opacity-30 ${
            isDark ? 'bg-purple-600' : 'bg-purple-400'
          }`} />
          
          <div className={`mb-8 p-4 rounded-2xl w-fit transition-all duration-500 ${
            isDark ? 'bg-purple-950/50 text-purple-400 group-hover:bg-purple-900 group-hover:scale-110' : 'bg-purple-50 text-purple-700 group-hover:bg-purple-100 group-hover:scale-110'
          }`}>
            <Search size={32} strokeWidth={1.5} />
          </div>
          <h3 className={`font-serif text-3xl font-bold mb-4 transition-colors ${
            isDark ? 'text-slate-100' : 'text-ink'
          }`}>
            解讀命理
          </h3>
          <p className={`font-hand font-bold text-xl mb-10 leading-loose transition-colors opacity-80 ${
            isDark ? 'text-slate-300' : 'text-stone-600'
          }`}>
            進入虹靈御所。透過命理看見結構，而不是被命運決定。
          </p>
          <span className={`flex items-center text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
            isDark ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-700 group-hover:text-purple-900'
          }`}>
            進入御所 <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>

        {/* Portal 2: Logic System */}
        <button 
          onClick={() => onNavigate('logic')}
          className={`group relative overflow-hidden p-10 rounded-[2rem] border text-left transition-all duration-500 hover:-translate-y-2 ${
            isDark 
              ? 'bg-slate-900/40 border-slate-800 hover:border-gold/50 hover:shadow-[0_0_60px_rgba(251,191,36,0.15)]' 
              : 'bg-white/60 border-stone-200 hover:border-muted-gold hover:shadow-2xl hover:shadow-amber-100'
          } backdrop-blur-md`}
          aria-label="Start Logic Loop for Decision Making"
        >
          <div className={`absolute top-[-30%] right-[-30%] w-64 h-64 rounded-full blur-[80px] transition-opacity duration-700 opacity-0 group-hover:opacity-30 ${
            isDark ? 'bg-gold' : 'bg-amber-400'
          }`} />

          <div className={`mb-8 p-4 rounded-2xl w-fit transition-all duration-500 ${
            isDark ? 'bg-yellow-950/50 text-gold group-hover:bg-yellow-900 group-hover:scale-110' : 'bg-amber-50 text-muted-gold group-hover:bg-amber-100 group-hover:scale-110'
          }`}>
            <Shield size={32} strokeWidth={1.5} />
          </div>
          <h3 className={`font-serif text-3xl font-bold mb-4 transition-colors ${
            isDark ? 'text-slate-100' : 'text-ink'
          }`}>
            避險思維
          </h3>
          <p className={`font-hand font-bold text-xl mb-10 leading-loose transition-colors opacity-80 ${
            isDark ? 'text-slate-300' : 'text-stone-600'
          }`}>
            啟動八階思維循環。在情緒與混亂中建立決策骨架。
          </p>
          <span className={`flex items-center text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
            isDark ? 'text-gold group-hover:text-yellow-300' : 'text-muted-gold group-hover:text-yellow-700'
          }`}>
            啟動思維循環 <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>

        {/* Portal 3: Linear Guide */}
        <button 
          onClick={() => onNavigate('guide')}
          className={`group relative overflow-hidden p-10 rounded-[2rem] border text-left transition-all duration-500 hover:-translate-y-2 ${
            isDark 
              ? 'bg-slate-900/40 border-slate-800 hover:border-jade/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]' 
              : 'bg-white/60 border-stone-200 hover:border-emerald-600 hover:shadow-2xl hover:shadow-emerald-100'
          } backdrop-blur-md`}
          aria-label="Start Linear Guide to learn the system"
        >
          <div className={`absolute top-[-30%] right-[-30%] w-64 h-64 rounded-full blur-[80px] transition-opacity duration-700 opacity-0 group-hover:opacity-30 ${
            isDark ? 'bg-jade' : 'bg-emerald-400'
          }`} />

          <div className={`mb-8 p-4 rounded-2xl w-fit transition-all duration-500 ${
            isDark ? 'bg-emerald-950/50 text-jade group-hover:bg-emerald-900 group-hover:scale-110' : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 group-hover:scale-110'
          }`}>
            <HelpCircle size={32} strokeWidth={1.5} />
          </div>
          <h3 className={`font-serif text-3xl font-bold mb-4 transition-colors ${
            isDark ? 'text-slate-100' : 'text-ink'
          }`}>
            新手引導
          </h3>
          <p className={`font-hand font-bold text-xl mb-10 leading-loose transition-colors opacity-80 ${
            isDark ? 'text-slate-300' : 'text-stone-600'
          }`}>
            跟著默默超一起想。從元壹宇宙觀到實際應用，了解這套系統。
          </p>
          <span className={`flex items-center text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
            isDark ? 'text-jade group-hover:text-emerald-400' : 'text-emerald-700 group-hover:text-emerald-900'
          }`}>
            開始引導 <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>

      </div>

      {/* Museum-grade highlights */}
      <section className="w-full max-w-6xl mb-16 z-10 px-4">
        <div
          className={`decorative-border p-[1px] ${
            isDark ? 'bg-slate-900/60' : 'bg-white/70'
          }`}
          style={{
            '--border-radius': '22px',
            '--border-gradient':
              isDark
                ? 'linear-gradient(135deg, rgba(250, 204, 21, 0.45), rgba(45, 212, 191, 0.4), rgba(59, 130, 246, 0.4))'
                : 'linear-gradient(135deg, rgba(245, 158, 11, 0.5), rgba(52, 211, 153, 0.45), rgba(59, 130, 246, 0.45))',
            '--border-opacity': isDark ? '0.9' : '0.85',
            '--inner-radius-offset': '4px',
            '--overlay-gradient':
              isDark
                ? 'radial-gradient(circle at top left, rgba(250, 250, 249, 0.12), transparent 55%)'
                : 'radial-gradient(circle at top left, rgba(250, 250, 249, 0.6), transparent 55%)',
          } as DecorativeBorderStyles}
        >
          <div className={`card-content rounded-[18px] ${isDark ? 'bg-slate-950/70' : 'bg-white/90'} p-8 md:p-10 flex flex-col gap-8 shadow-2xl`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className={`font-mono uppercase tracking-[0.28em] text-xs mb-2 ${isDark ? 'text-blue-200' : 'text-stone-500'}`}>Curated Experience</p>
                <h2 className={`font-serif text-3xl md:text-4xl font-bold ${isDark ? 'text-slate-100' : 'text-ink'}`}>館級標準 · 專業導覽核心</h2>
                <p className={`${isDark ? 'text-slate-300' : 'text-stone-600'} mt-3 max-w-3xl leading-relaxed`}>
                  以科博館的策展思維設計網站：每個節點都具有清楚的目的、證據與路徑，確保觀眾能在沉浸的視覺中保持方向感，快速進入互動教學流程。
                </p>
              </div>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${isDark ? 'bg-slate-800/70 text-gold border border-slate-700' : 'bg-amber-50 text-muted-gold border border-amber-200'}`}>
                <Users size={18} />
                <span className="font-mono text-xs tracking-[0.2em] uppercase">導覽團隊即時更新</span>
              </div>
            </div>

            <div className="grid gap-4 md:gap-6 md:grid-cols-3">
              {pillarCards.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`group p-6 rounded-2xl border relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 ${
                      isDark
                        ? 'bg-slate-900/70 border-slate-800 hover:border-gold/50'
                        : 'bg-white border-stone-200 hover:border-muted-gold'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isDark ? 'text-slate-200' : 'text-ink'}`}>
                      <span className={`p-3 rounded-xl ${isDark ? 'bg-slate-800 text-gold' : 'bg-stone-100 text-muted-gold'}`}>
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="font-serif text-xl font-semibold">{pillar.title}</p>
                        <span className={`text-[11px] uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                          {pillar.badge}
                        </span>
                      </div>
                    </div>
                    <p className={`${isDark ? 'text-slate-300' : 'text-stone-700'} leading-relaxed`}>{pillar.description}</p>
                    <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-gold/5 via-emerald-500/5 to-blue-500/5' : 'bg-gradient-to-br from-amber-100/50 via-emerald-100/50 to-blue-100/50'}`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Guided path callout */}
      <section className="w-full max-w-6xl mb-32 z-10 px-4">
        <div className={`p-8 md:p-10 rounded-3xl border shadow-xl relative overflow-hidden ${
          isDark ? 'bg-slate-900/70 border-slate-800 text-slate-100' : 'bg-white/90 border-stone-200 text-ink'
        }`}
        >
          <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,215,0,0.06), transparent 45%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.08), transparent 50%)' }} />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className={`font-mono uppercase tracking-[0.28em] text-xs mb-2 ${isDark ? 'text-emerald-200' : 'text-emerald-700'}`}>Interactive Learning Route</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">三步驟完成一次沉浸式教學</h3>
                <p className={`${isDark ? 'text-slate-300' : 'text-stone-600'} max-w-3xl mt-2`}>
                  依照策展路徑循序探索，避免迷航，同時保留彈性：任何時刻都能跳回全域地圖或切換深度導覽。
                </p>
              </div>
              <button
                onClick={() => onNavigate('logic')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isDark ? 'bg-slate-800/80 text-gold border border-slate-700 hover:border-gold' : 'bg-stone-100 text-ink border border-stone-300 hover:border-muted-gold'
                }`}
              >
                <PlayCircle size={16} /> 立即啟動八階思維
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {journeySteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative p-6 rounded-2xl border h-full flex flex-col gap-3 transition-all duration-500 ${
                    isDark ? 'bg-slate-950/50 border-slate-800 hover:border-gold/50' : 'bg-white border-stone-200 hover:border-muted-gold'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`text-xs font-mono tracking-[0.24em] uppercase ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>{step.label}</div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      isDark ? 'bg-slate-800 text-gold' : 'bg-stone-100 text-muted-gold'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-xl font-semibold mb-1">{step.title}</p>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>{step.subtitle}</p>
                  </div>
                  <p className={`${isDark ? 'text-slate-300' : 'text-stone-600'} leading-relaxed flex-1`}>{step.description}</p>
                  <button
                    onClick={step.cta}
                    className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                      isDark ? 'text-gold hover:text-yellow-200' : 'text-muted-gold hover:text-amber-800'
                    }`}
                  >
                    <Pointer size={14} /> 前往 {step.ariaLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
