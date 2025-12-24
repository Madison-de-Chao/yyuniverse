import React, { useState, useEffect } from 'react';
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
  rotation?: number;
}

interface OrbitalParticle {
  id: number;
  radius: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
  direction: 'cw' | 'ccw';
}

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  
  const [currentWing, setCurrentWing] = useState<WingType>('entrance');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [orbitalParticles, setOrbitalParticles] = useState<OrbitalParticle[]>([]);
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

  // 檢查是否為七大法則頁面（跨頁 09-15）
  const isSevenPrinciplesPage = currentWing === 'intro' && currentIndex >= 8 && currentIndex <= 14;

  // 初始化軌道粒子（七大法則專用）
  useEffect(() => {
    if (isSevenPrinciplesPage) {
      const particles: OrbitalParticle[] = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        radius: 300 + Math.random() * 200,  // 300-500px
        duration: 3 + Math.random() * 5,    // 3-8s
        delay: Math.random() * 8,           // 0-8s
        size: 2 + Math.random() * 4,        // 2-6px
        opacity: 0.5 + Math.random() * 0.5, // 0.5-1.0
        direction: Math.random() > 0.5 ? 'cw' : 'ccw'
      }));
      setOrbitalParticles(particles);
    } else {
      setOrbitalParticles([]);
    }
  }, [currentIndex, currentWing]);

  // 創建普通粒子爆發
  const createParticleBurst = (color: string) => {
    const newParticles: Particle[] = [];
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const speed = Math.random() * 3 + 2;
      newParticles.push({
        id: Date.now() + i,
        x: 50,
        y: 50,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        opacity: 1,
        color,
      });
    }
    
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  };

  // 粒子動畫
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
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  // 換頁邏輯
  const navigatePage = (dir: 'forward' | 'backward') => {
    if (isTransitioning) return;
    
    const newIndex = dir === 'forward' 
      ? (currentIndex + 1) % totalItems 
      : (currentIndex - 1 + totalItems) % totalItems;
    
    setDirection(dir);
    setIsTransitioning(true);
    
    // 觸發粒子效果（非七大法則頁面）
    if (!isSevenPrinciplesPage) {
      const color = currentWing === 'intro' ? 'rgba(212, 175, 55, 1)' 
                  : currentWing === 'deep' ? 'rgba(34, 211, 238, 1)' 
                  : 'rgba(255, 255, 255, 1)';
      createParticleBurst(color);
    }
    
    // 觸發光暈脈衝
    setShowGlowPulse(true);
    setTimeout(() => setShowGlowPulse(false), 500);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  // 鍵盤控制
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentWing === 'entrance') {
        if (e.key === '1') enterWing('intro');
        if (e.key === '2') enterWing('deep');
        if (e.key === '3') enterWing('style');
        return;
      }
      
      if (e.key === 'ArrowLeft') navigatePage('backward');
      if (e.key === 'ArrowRight' || e.key === ' ') navigatePage('forward');
      if (e.key === 'Escape') setCurrentWing('entrance');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentWing, currentIndex, isTransitioning]);

  // 滑鼠滾輪控制
  useEffect(() => {
    if (currentWing === 'entrance') return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) navigatePage('forward');
      if (e.deltaY < 0) navigatePage('backward');
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentWing, currentIndex, isTransitioning]);

  // 觸控手勢
  useEffect(() => {
    if (currentWing === 'entrance') return;

    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) navigatePage('forward');
        else navigatePage('backward');
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentWing, currentIndex, isTransitioning]);

  const enterWing = (wing: WingType) => {
    setCurrentWing(wing);
    setCurrentIndex(0);
  };

  const getWingTheme = () => {
    switch (currentWing) {
      case 'intro': return { primary: 'from-yellow-600 to-amber-500', border: 'border-yellow-500/50', glow: 'shadow-yellow-500/50' };
      case 'deep': return { primary: 'from-cyan-600 to-blue-500', border: 'border-cyan-500/50', glow: 'shadow-cyan-500/50' };
      case 'style': return { primary: 'from-gray-300 to-white', border: 'border-white/50', glow: 'shadow-white/50' };
      default: return { primary: 'from-yellow-600 to-amber-500', border: 'border-yellow-500/50', glow: 'shadow-yellow-500/50' };
    }
  };

  const theme = getWingTheme();

  // 入口大廳
  if (currentWing === 'entrance') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* 星空背景 */}
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* 主內容 */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            元壹宇宙展示大廳
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-16">
            YUANYI UNIVERSE GALLERY
          </p>

          {/* 展廳入口 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* 入門版展廳 */}
            <button
              onClick={() => enterWing('intro')}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
            >
              <div className="text-6xl mb-4">🌟</div>
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">入門版展廳</h2>
              <p className="text-gray-400 mb-4">22 跨頁</p>
              <p className="text-sm text-gray-500">
                封面、導覽員、雙模式、四大語彙、七大法則、四大廳、回家地圖、尾聲
              </p>
            </button>

            {/* 下鑽版展廳 */}
            <button
              onClick={() => enterWing('deep')}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <div className="text-6xl mb-4">🔮</div>
              <h2 className="text-2xl font-bold mb-2 text-cyan-400">下鑽版展廳</h2>
              <p className="text-gray-400 mb-4">24 跨頁</p>
              <p className="text-sm text-gray-500">
                世界觀總覽、守門者原則、壹與伊的誤解、弧度模型、七大法則案例與練習
              </p>
            </button>

            {/* 風格定錨展廳 */}
            <button
              onClick={() => enterWing('style')}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/30 to-slate-900/30 border-2 border-white/30 hover:border-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/50"
            >
              <div className="text-6xl mb-4">⭐</div>
              <h2 className="text-2xl font-bold mb-2 text-white">風格定錨展廳</h2>
              <p className="text-gray-400 mb-4">3 張</p>
              <p className="text-sm text-gray-500">
                入口星門、伊出場、閉環完成
              </p>
            </button>
          </div>

          {/* 返回按鈕 */}
          <button
            onClick={() => navigate('/')}
            className="mt-16 flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>返回上一頁</span>
          </button>
        </div>
      </div>
    );
  }

  // 展廳走廊
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 星空背景 */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* 頂部導航 */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
        <button
          onClick={() => setCurrentWing('entrance')}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <Home size={20} />
          <span>返回入口</span>
        </button>
        <div className="text-lg font-semibold">
          {currentIndex + 1} / {totalItems}
        </div>
      </div>

      {/* 展品展示區 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        {/* 軌道粒子系統（七大法則專用） */}
        {isSevenPrinciplesPage && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {orbitalParticles.map(particle => (
              <div
                key={particle.id}
                className="absolute"
                style={{
                  animation: `orbit-${particle.direction} ${particle.duration}s linear ${particle.delay}s infinite`,
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    backgroundColor: `rgba(168, 85, 247, ${particle.opacity})`,
                    boxShadow: `0 0 ${particle.size * 3}px rgba(168, 85, 247, 0.8)`,
                    transform: `translateX(${particle.radius}px)`,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* 爆發粒子系統（非七大法則頁面） */}
        {!isSevenPrinciplesPage && particles.length > 0 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map(p => (
              <div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  opacity: p.opacity,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                }}
              />
            ))}
          </div>
        )}

        {/* 展品框架 */}
        <div className="relative max-w-5xl w-full">
          {/* 標題 */}
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}>
            {currentItem?.title || ''}
          </h2>

          {/* 圖片容器 */}
          <div className={`relative border-4 ${theme.border} rounded-3xl overflow-hidden ${showGlowPulse && isSevenPrinciplesPage ? 'animate-purple-swirl-pulse' : showGlowPulse ? 'animate-glow-pulse' : ''}`}>
            <img
              src={currentItem?.image}
              alt={currentItem?.title}
              className={`w-full h-auto ${
                isSevenPrinciplesPage
                  ? isTransitioning
                    ? direction === 'forward'
                      ? 'transition-spacetime-out duration-300'
                      : 'transition-spacetime-in duration-300'
                    : ''
                  : isTransitioning
                    ? direction === 'forward'
                      ? 'transition-depth-out duration-300'
                      : 'transition-depth-in duration-300'
                    : ''
              }`}
            />
          </div>

          {/* 旁白和任務 */}
          <div className="mt-8 space-y-4 text-center">
            {currentItem?.narration && (
              <p className="text-lg text-gray-300 italic">
                「{currentItem.narration}」
              </p>
            )}
            {currentItem?.task && (
              <p className="text-base text-gray-400">
                {currentItem.task}
              </p>
            )}
          </div>
        </div>

        {/* 左右導航按鈕 */}
        <button
          onClick={() => navigatePage('backward')}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={() => navigatePage('forward')}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* 底部操作提示 */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-gray-500">
        使用 ← → 鍵或滑鼠滾輪導航 · 按 Esc 返回入口
      </div>

      {/* CSS 動畫定義 */}
      <style>{`
        /* 軌道動畫 - 順時針 */
        @keyframes orbit-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* 軌道動畫 - 逆時針 */
        @keyframes orbit-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        /* 景深模糊過渡 - 離開 */
        .transition-depth-out {
          opacity: 0;
          transform: scale(0.8) translateY(-50px);
          filter: blur(15px);
        }

        /* 景深模糊過渡 - 進入 */
        .transition-depth-in {
          opacity: 0;
          transform: scale(1.2) translateY(50px);
          filter: blur(15px);
        }

        /* 時空扭曲過渡 - 離開 */
        .transition-spacetime-out {
          opacity: 0;
          transform: scale(0.3) translateY(-50px) rotate(15deg);
          filter: blur(15px);
        }

        /* 時空扭曲過渡 - 進入 */
        .transition-spacetime-in {
          opacity: 0;
          transform: scale(0.3) translateY(50px) rotate(-15deg);
          filter: blur(15px);
        }

        /* 光暈脈衝 */
        @keyframes glow-pulse {
          0% {
            box-shadow: 0 0 20px var(--glow-color);
          }
          50% {
            box-shadow: 0 0 80px var(--glow-color);
          }
          100% {
            box-shadow: 0 0 20px var(--glow-color);
          }
        }

        .animate-glow-pulse {
          animation: glow-pulse 500ms ease-in-out;
        }

        /* 紫色漩渦光暈 */
        @keyframes purple-swirl-pulse {
          0% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8),
                        0 0 40px rgba(168, 85, 247, 0.6),
                        0 0 60px rgba(168, 85, 247, 0.4);
            transform: rotate(0deg);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 1),
                        0 0 80px rgba(168, 85, 247, 0.8),
                        0 0 120px rgba(168, 85, 247, 0.6);
            transform: rotate(180deg);
          }
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8),
                        0 0 40px rgba(168, 85, 247, 0.6),
                        0 0 60px rgba(168, 85, 247, 0.4);
            transform: rotate(360deg);
          }
        }

        .animate-purple-swirl-pulse {
          animation: purple-swirl-pulse 500ms ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
