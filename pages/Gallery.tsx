import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { INTRO_PAGES, DEEP_PAGES, STYLE_ANCHORS, GalleryItem } from '../galleryData';

type WingType = 'entrance' | 'intro' | 'deep' | 'style';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  
  const [currentWing, setCurrentWing] = useState<WingType>('entrance');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showGlowPulse, setShowGlowPulse] = useState(false);

  // 獲取當前展廳的數據
  const getCurrentWingData = (): GalleryItem[] => {
    switch (currentWing) {
      case 'intro': return INTRO_PAGES;
      case 'deep': return DEEP_PAGES;
      case 'style': return STYLE_ANCHORS;
      default: return [];
    }
  };

  const currentData = getCurrentWingData();
  const currentItem = currentData[currentIndex];
  const totalItems = currentData.length;

  // 創建粒子爆發
  const createParticleBurst = (color: string) => {
    const newParticles: Particle[] = [];
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const speed = Math.random() * 3 + 2;
      newParticles.push({
        id: Date.now() + i,
        x: 50, // 中心點（百分比）
        y: 50,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        opacity: 1,
        color,
      });
    }
    
    setParticles(newParticles);
    
    // 800ms 後清除粒子
    setTimeout(() => setParticles([]), 800);
  };

  // 進入展廳
  const enterWing = (wing: WingType) => {
    setIsTransitioning(true);
    setDirection('forward');
    setTimeout(() => {
      setCurrentWing(wing);
      setCurrentIndex(0);
      setIsTransitioning(false);
    }, 500);
  };

  // 返回入口
  const returnToEntrance = () => {
    setIsTransitioning(true);
    setDirection('backward');
    setTimeout(() => {
      setCurrentWing('entrance');
      setCurrentIndex(0);
      setIsTransitioning(false);
    }, 500);
  };

  // 前進到下一個展品
  const goForward = useCallback(() => {
    if (isTransitioning || currentWing === 'entrance') return;
    if (currentIndex < totalItems - 1) {
      // 觸發特效
      const color = currentWing === 'intro' ? 'rgba(212,175,55,1)' : 
                    currentWing === 'deep' ? 'rgba(0,206,209,1)' : 
                    'rgba(255,255,255,1)';
      createParticleBurst(color);
      setShowGlowPulse(true);
      setTimeout(() => setShowGlowPulse(false), 500);
      
      setIsTransitioning(true);
      setDirection('forward');
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentIndex, totalItems, isTransitioning, currentWing]);

  // 後退到上一個展品
  const goBackward = useCallback(() => {
    if (isTransitioning || currentWing === 'entrance') return;
    if (currentIndex > 0) {
      // 觸發特效
      const color = currentWing === 'intro' ? 'rgba(212,175,55,1)' : 
                    currentWing === 'deep' ? 'rgba(0,206,209,1)' : 
                    'rgba(255,255,255,1)';
      createParticleBurst(color);
      setShowGlowPulse(true);
      setTimeout(() => setShowGlowPulse(false), 500);
      
      setIsTransitioning(true);
      setDirection('backward');
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentIndex, isTransitioning, currentWing]);

  // 粒子動畫更新
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          opacity: p.opacity - 0.02,
        })).filter(p => p.opacity > 0)
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [particles.length]);

  // 鍵盤控制
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goForward();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBackward();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        returnToEntrance();
      } else if (e.key === '1') {
        enterWing('intro');
      } else if (e.key === '2') {
        enterWing('deep');
      } else if (e.key === '3') {
        enterWing('style');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goForward, goBackward]);

  // 滑鼠滾輪控制
  useEffect(() => {
    if (currentWing === 'entrance') return;

    let wheelTimeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          goForward();
        } else if (e.deltaY < 0) {
          goBackward();
        }
      }, 100);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      clearTimeout(wheelTimeout);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [goForward, goBackward, currentWing]);

  // 觸控手勢控制
  useEffect(() => {
    if (currentWing === 'entrance') return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeDistance = touchStartX - touchEndX;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          goForward();
        } else {
          goBackward();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goForward, goBackward, currentWing]);

  // 星空背景組件
  const StarfieldBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: Math.random() * 3 + 's',
            animationDuration: (Math.random() * 2 + 2) + 's',
          }}
        />
      ))}
    </div>
  );

  // 粒子系統組件
  const ParticleSystem = () => (
    <div className="fixed inset-0 pointer-events-none z-30">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            transition: 'all 0.016s linear',
          }}
        />
      ))}
    </div>
  );

  // 入口大廳
  const EntranceHall = () => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <StarfieldBackground />
      
      {/* 標題區 */}
      <div className="text-center mb-16 z-10 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-shimmer">
          元壹宇宙展示大廳
        </h1>
        <p className="text-xl md:text-2xl text-gold/80 mb-4 tracking-wider">
          YUANYI UNIVERSE GALLERY
        </p>
        <p className="text-lg text-gray-400">
          完整版（48 跨頁／96 頁）
        </p>
        <p className="text-md text-gray-500 mt-2">
          選擇一個入口，開始你的星際導覽之旅...
        </p>
      </div>

      {/* 三個展廳入口 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {/* 入門版展廳 */}
        <button
          onClick={() => enterWing('intro')}
          className="group relative bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/30 rounded-2xl p-8 hover:border-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:animate-pulse">
              <span className="text-4xl">🌟</span>
            </div>
            <h3 className="text-2xl font-bold text-gold mb-3">入門版展廳</h3>
            <p className="text-gray-400 mb-4">22 跨頁</p>
            <p className="text-sm text-gray-500">
              從封面到尾聲，完整導覽元壹宇宙的核心架構
            </p>
            <div className="mt-6 text-gold/60 text-sm">
              按 1 快速進入
            </div>
          </div>
        </button>

        {/* 下鑽版展廳 */}
        <button
          onClick={() => enterWing('deep')}
          className="group relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(0,206,209,0.4)] transition-all duration-500 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:animate-pulse">
              <span className="text-4xl">🔮</span>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">下鑽版展廳</h3>
            <p className="text-gray-400 mb-4">24 跨頁</p>
            <p className="text-sm text-gray-500">
              深入每個概念的案例、練習、反例與層級對照
            </p>
            <div className="mt-6 text-cyan-500/60 text-sm">
              按 2 快速進入
            </div>
          </div>
        </button>

        {/* 風格定錨展廳 */}
        <button
          onClick={() => enterWing('style')}
          className="group relative bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/30 rounded-2xl p-8 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center group-hover:animate-pulse">
              <span className="text-4xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">風格定錨展廳</h3>
            <p className="text-gray-400 mb-4">3 張</p>
            <p className="text-sm text-gray-500">
              入口星門、伊出場、閉環完成的視覺定錨
            </p>
            <div className="mt-6 text-white/60 text-sm">
              按 3 快速進入
            </div>
          </div>
        </button>
      </div>

      {/* 返回按鈕 */}
      <button
        onClick={() => navigate(-1)}
        className="mt-16 flex items-center gap-2 text-gray-400 hover:text-gold transition-colors z-10"
      >
        <ArrowLeft size={20} />
        <span>返回上一頁</span>
      </button>
    </div>
  );

  // 展廳走廊
  const GalleryCorridor = () => {
    const wingConfig = {
      intro: { 
        name: '入門版展廳',
        color: 'text-gold', 
        borderColor: 'border-gold/30',
        hoverBorder: 'hover:border-gold',
        shadowColor: '0 0 60px rgba(212,175,55,0.4)',
        glowColor: 'rgba(212,175,55,0.8)',
      },
      deep: { 
        name: '下鑽版展廳',
        color: 'text-cyan-400', 
        borderColor: 'border-cyan-500/30',
        hoverBorder: 'hover:border-cyan-500',
        shadowColor: '0 0 60px rgba(0,206,209,0.4)',
        glowColor: 'rgba(0,206,209,0.8)',
      },
      style: { 
        name: '風格定錨展廳',
        color: 'text-white', 
        borderColor: 'border-white/30',
        hoverBorder: 'hover:border-white',
        shadowColor: '0 0 60px rgba(255,255,255,0.4)',
        glowColor: 'rgba(255,255,255,0.8)',
      },
    };

    const config = wingConfig[currentWing as 'intro' | 'deep' | 'style'];

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <StarfieldBackground />
        <ParticleSystem />

        {/* 頂部導航欄 */}
        <div className="fixed top-24 left-0 right-0 z-20 flex items-center justify-between px-8 py-4 bg-void/80 backdrop-blur-md border-b border-gold/20">
          <button
            onClick={returnToEntrance}
            className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
          >
            <Home size={20} />
            <span className="hidden sm:inline">返回入口</span>
          </button>
          
          <div className={`${config.color} font-semibold text-lg`}>
            {config.name}
          </div>

          <div className="text-gray-400 text-sm">
            {currentIndex + 1} / {totalItems}
          </div>
        </div>

        {/* 展示框 */}
        <div 
          className={`relative z-10 max-w-5xl w-full transition-all duration-500 ${
            isTransitioning 
              ? direction === 'forward' 
                ? 'opacity-0 scale-95 translate-y-10 blur-sm' 
                : 'opacity-0 scale-105 -translate-y-10 blur-sm'
              : 'opacity-100 scale-100 translate-y-0 blur-0'
          }`}
        >
          {/* 展品標題 */}
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold ${config.color} mb-4`}>
              {currentItem?.title}
            </h2>
          </div>

          {/* 圖片展示框 */}
          <div 
            className={`relative rounded-2xl overflow-hidden border-4 ${config.borderColor} ${
              showGlowPulse ? 'animate-glowPulse' : ''
            }`}
            style={{
              boxShadow: config.shadowColor,
              willChange: 'box-shadow, transform',
            }}
          >
            <img
              src={currentItem?.image}
              alt={currentItem?.title}
              className="w-full h-auto"
            />
          </div>

          {/* 資訊面板 */}
          <div className="mt-8 text-center space-y-4">
            {currentItem?.narration && (
              <p className="text-lg md:text-xl text-gray-300 italic">
                「{currentItem.narration}」
              </p>
            )}
            {currentItem?.task && (
              <p className="text-md text-gray-400">
                任務：{currentItem.task}
              </p>
            )}
            {currentItem?.description && (
              <p className="text-md text-gray-400">
                {currentItem.description}
              </p>
            )}
          </div>
        </div>

        {/* 左右導航按鈕 */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={goBackward}
            disabled={currentIndex === 0}
            className={`p-4 rounded-full bg-void/80 border-2 ${config.borderColor} ${config.hoverBorder} transition-all disabled:opacity-30 disabled:cursor-not-allowed ${config.color}`}
            style={{
              boxShadow: currentIndex > 0 ? config.shadowColor : 'none',
            }}
          >
            <ChevronLeft size={32} />
          </button>
        </div>

        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={goForward}
            disabled={currentIndex === totalItems - 1}
            className={`p-4 rounded-full bg-void/80 border-2 ${config.borderColor} ${config.hoverBorder} transition-all disabled:opacity-30 disabled:cursor-not-allowed ${config.color}`}
            style={{
              boxShadow: currentIndex < totalItems - 1 ? config.shadowColor : 'none',
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* 底部提示 */}
        <div className="fixed bottom-8 left-0 right-0 z-20 text-center text-gray-500 text-sm">
          <p>使用 ← → 鍵或點擊左右按鈕導航 · 按 Esc 返回入口</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-void transition-colors duration-300">
      {currentWing === 'entrance' ? <EntranceHall /> : <GalleryCorridor />}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 80px currentColor; }
          100% { box-shadow: 0 0 20px currentColor; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-glowPulse {
          animation: glowPulse 500ms ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
