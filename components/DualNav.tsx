import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Theme } from '../types';
import { Sun, Moon, Home, Map, Target, BookText, FileSearch, Info, Star, Sparkles, Scale, FileText, BookOpen, Shield, User, Layers, Compass, MessageSquare } from 'lucide-react';

interface DualNavProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const DualNav: React.FC<DualNavProps> = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = theme === 'dark';

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // 學術導航（主導航）
  const academicNav = [
    { path: '/museum', label: '首頁', icon: Home },
    { path: '/system-map', label: '系統總覽', icon: Map },
    { path: '/challenge-kit', label: 'Challenge Kit', icon: Target },
    { path: '/glossary', label: '名詞表', icon: BookText },
    { path: '/references', label: '文獻引用', icon: FileSearch },
    { path: '/about-system', label: '關於', icon: Info },
  ];

  // 探索導航（次導航）
  const explorationNav = [
    { path: '/nine-origins', label: '九大起源', icon: Star },
    { path: '/seven-principles', label: '七大法則', icon: Sparkles },
    { path: '/logic-loop', label: '八階思維', icon: Layers },
    { path: '/reality-mirror', label: '真實之鏡', icon: Scale },
    { path: '/universe-script', label: '宇宙劇本', icon: FileText },
    { path: '/system', label: '系統詳解', icon: Compass },
    { path: '/whitepaper', label: '白皮書', icon: BookOpen },
    { path: '/sanctuary', label: '避難所', icon: Shield },
    { path: '/ai-chat', label: 'AI 對話', icon: MessageSquare },
    { path: '/about', label: '關於墨', icon: User },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 主導航：學術架構 */}
      <nav 
        className={`transition-colors duration-300 ${
          isDark 
            ? 'bg-void/95 border-b border-gold/20' 
            : 'bg-paper/95 border-b border-ink/10'
        } backdrop-blur-md shadow-sm`}
        aria-label="Academic navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo 區域 - 增加寬度避免重疊 */}
            <div 
              onClick={() => navigate('/')}
              className="flex items-center cursor-pointer flex-shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="元壹宇宙 YUANYI UNIVERSE" 
                className="h-16 sm:h-18 w-auto object-contain"
              />
            </div>

            {/* 學術導航項目 - 桌面版 */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {academicNav.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      isActive 
                        ? (isDark 
                            ? 'bg-gold/15 text-gold' 
                            : 'bg-amber-100 text-muted-gold')
                        : (isDark 
                            ? 'text-paper/80 hover:text-paper hover:bg-gold/5' 
                            : 'text-void/80 hover:text-void hover:bg-ink/5')
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 學術導航項目 - 移動版（簡化） */}
            <div className="flex lg:hidden items-center gap-1 flex-1 justify-end overflow-x-auto scrollbar-hide">
              {academicNav.slice(0, 3).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`flex items-center gap-1 px-2 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive 
                        ? (isDark 
                            ? 'bg-gold/15 text-gold' 
                            : 'bg-amber-100 text-muted-gold')
                        : (isDark 
                            ? 'text-paper/80 hover:text-paper hover:bg-gold/5' 
                            : 'text-void/80 hover:text-void hover:bg-ink/5')
                    }`}
                  >
                    <Icon size={14} />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 主題切換按鈕 */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-lg transition-colors flex-shrink-0 ml-2 ${
                isDark 
                  ? 'hover:bg-gold/10 text-gold' 
                  : 'hover:bg-ink/10 text-muted-gold'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 次導航：探索內容 - 視覺上更輕量 */}
      <nav 
        className={`transition-colors duration-300 ${
          isDark 
            ? 'bg-void/80 border-b border-gold/5' 
            : 'bg-paper/80 border-b border-ink/5'
        } backdrop-blur-sm`}
        aria-label="Exploration navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            <span className={`text-[10px] uppercase tracking-wider mr-2 flex-shrink-0 ${
              isDark ? 'text-paper/40' : 'text-void/40'
            }`}>
              探索
            </span>
            {explorationNav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-normal whitespace-nowrap transition-all duration-200 ${
                    isActive 
                      ? (isDark 
                          ? 'bg-gold/10 text-gold' 
                          : 'bg-amber-50 text-muted-gold')
                      : (isDark 
                          ? 'text-paper/50 hover:text-paper/80 hover:bg-gold/5' 
                          : 'text-void/50 hover:text-void/80 hover:bg-ink/5')
                  }`}
                >
                  <Icon size={12} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};
