import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Theme } from '../types';
import { 
  Sun, Moon, Home, Map, Target, BookText, FileSearch, Info, 
  Star, Sparkles, Scale, FileText, BookOpen, Shield, User, 
  Layers, Compass, MessageSquare, Image, ChevronDown, BookMarked 
} from 'lucide-react';

interface CollapsibleNavProps {
  theme: Theme;
  onToggleTheme: () => void;
}

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export const CollapsibleNav: React.FC<CollapsibleNavProps> = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = theme === 'dark';

  // 下拉菜單狀態
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 主要網站導航結構
  const mainSiteGroups: NavGroup[] = [
    {
      title: '探索',
      items: [
        { path: '/gallery', label: '展示大廳', icon: Image },
        { path: '/nine-origins', label: '九大起源', icon: Star },
        { path: '/seven-principles', label: '七大法則', icon: Sparkles },
        { path: '/logic-loop', label: '八階思維', icon: Layers },
        { path: '/reality-mirror', label: '真實之鏡', icon: Scale },
        { path: '/universe-script', label: '宇宙劇本', icon: FileText },
        { path: '/system', label: '系統詳解', icon: Compass },
        { path: '/whitepaper', label: '白皮書', icon: BookOpen },
      ],
    },
    {
      title: '互動',
      items: [
        { path: '/ai-chat', label: 'AI 對話', icon: MessageSquare },
        { path: '/sanctuary', label: '避難所', icon: Shield },
      ],
    },
    {
      title: '關於',
      items: [
        { path: '/about', label: '關於', icon: Info },
        { path: '/glossary', label: '名詞邊界表', icon: BookMarked },
      ],
    },
  ];

  // 挑戰網頁導航結構已移除

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  };

  // 處理懸停展開（桌面端）
  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(dropdown);
      setIsHovering(true);
    }, 150);
  };

  // 處理懸停離開
  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
      setOpenDropdown(null);
    }, 300);
  };

  // 處理點擊展開（移動端）
  const handleClick = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // 點擊外部關閉
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ESC 鍵關閉
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // 檢查是否為活躍路徑
  const isActivePath = (path: string) => location.pathname === path;

  // 檢查分組中是否有活躍路徑
  const hasActiveItem = (items: NavItem[]) => {
    return items.some(item => isActivePath(item.path));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50" ref={dropdownRef}>
      <nav
        className={`transition-colors duration-300 ${
          isDark
            ? 'bg-void/95 border-b border-gold/20'
            : 'bg-paper/95 border-b border-ink/10'
        } backdrop-blur-md shadow-sm`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              onClick={() => handleNavigate('/')}
              className="flex items-center cursor-pointer flex-shrink-0"
            >
              <img
                src="/logo.png"
                alt="元壹宇宙 YUANYI UNIVERSE"
                className="h-12 sm:h-14 w-auto object-contain min-w-[240px] sm:min-w-[280px]"
              />
            </div>

            {/* 導航項目 */}
            <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
              {/* 首頁 */}
              <button
                onClick={() => handleNavigate('/museum')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isActivePath('/museum')
                    ? isDark
                      ? 'bg-gold/15 text-gold'
                      : 'bg-amber-100 text-muted-gold'
                    : isDark
                    ? 'text-paper/80 hover:text-paper hover:bg-gold/5'
                    : 'text-void/80 hover:text-void hover:bg-ink/5'
                }`}
              >
                <Home size={16} />
                <span className="text-sm">首頁</span>
              </button>

              {/* 主要網站下拉菜單 */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('main')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleClick('main')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    hasActiveItem(mainSiteGroups.flatMap(g => g.items))
                      ? isDark
                        ? 'bg-gold/15 text-gold'
                        : 'bg-amber-100 text-muted-gold'
                      : isDark
                      ? 'text-paper/80 hover:text-paper hover:bg-gold/5'
                      : 'text-void/80 hover:text-void hover:bg-ink/5'
                  }`}
                >
                  <span className="text-sm">探索</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === 'main' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* 下拉菜單 */}
                {openDropdown === 'main' && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl border animate-fade-in-up ${
                      isDark
                        ? 'bg-void/98 border-gold/30'
                        : 'bg-paper/98 border-ink/20'
                    } backdrop-blur-md`}
                  >
                    <div className="p-2">
                      {mainSiteGroups.map((group, groupIdx) => (
                        <div key={group.title} className={groupIdx > 0 ? 'mt-3' : ''}>
                          {/* 分組標題 */}
                          <div
                            className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider ${
                              isDark ? 'text-gold/60' : 'text-muted-gold/60'
                            }`}
                          >
                            {group.title}
                          </div>

                          {/* 分組項目 */}
                          {group.items.map((item) => {
                            const Icon = item.icon;
                            const isActive = isActivePath(item.path);
                            return (
                              <button
                                key={item.path}
                                onClick={() => handleNavigate(item.path)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                                  isActive
                                    ? isDark
                                      ? 'bg-gold/15 text-gold'
                                      : 'bg-amber-50 text-muted-gold'
                                    : isDark
                                    ? 'text-paper/70 hover:text-paper hover:bg-gold/10'
                                    : 'text-void/70 hover:text-void hover:bg-ink/5'
                                }`}
                              >
                                <Icon
                                  size={16}
                                  className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                                />
                                <span className="text-sm font-medium">{item.label}</span>
                              </button>
                            );
                          })}

                          {/* 分隔線 */}
                          {groupIdx < mainSiteGroups.length - 1 && (
                            <div
                              className={`my-2 border-t ${
                                isDark ? 'border-gold/10' : 'border-ink/5'
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Challenge Kit 已移除 */}
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
    </div>
  );
};
