import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { INTRO_PAGES, DEEP_PAGES, STYLE_ANCHORS, GalleryItem } from '../galleryData';

type TabType = 'intro' | 'deep' | 'style';

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('intro');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState<GalleryItem[]>(INTRO_PAGES);

  // 根據 activeTab 更新 currentData
  useEffect(() => {
    switch (activeTab) {
      case 'intro':
        setCurrentData(INTRO_PAGES);
        break;
      case 'deep':
        setCurrentData(DEEP_PAGES);
        break;
      case 'style':
        setCurrentData(STYLE_ANCHORS);
        break;
    }
    setCurrentIndex(0); // 切換 tab 時重置索引
  }, [activeTab]);

  // 開啟燈箱
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // 關閉燈箱
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // 上一張
  const prevImage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : currentData.length - 1));
  };

  // 下一張
  const nextImage = () => {
    setCurrentIndex((prev) => (prev < currentData.length - 1 ? prev + 1 : 0));
  };

  // 鍵盤操作
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex, currentData]);

  // 配色
  const bgColor = isDark ? 'bg-slate-950' : 'bg-gray-50';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const mutedText = isDark ? 'text-gray-400' : 'text-gray-600';
  const accentColor = isDark ? 'text-gold' : 'text-muted-gold';
  const borderColor = isDark ? 'border-slate-800' : 'border-gray-200';
  const cardBg = isDark ? 'bg-slate-900/50' : 'bg-white';
  const tabActive = isDark ? 'bg-gold text-slate-950' : 'bg-muted-gold text-white';
  const tabInactive = isDark ? 'text-gray-400 hover:text-gold' : 'text-gray-600 hover:text-muted-gold';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b" style={{
        background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(249, 250, 251, 0.8)',
        borderColor: isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(229, 231, 235, 0.5)'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 ${mutedText} hover:${accentColor} transition-colors`}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-mono uppercase tracking-wider">返回</span>
          </button>
          
          <div className="text-center">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold ${accentColor}`}>
              元壹宇宙展示大廳
            </h1>
            <p className={`text-xs md:text-sm font-mono tracking-widest ${mutedText} mt-1`}>
              YUANYI UNIVERSE GALLERY
            </p>
          </div>

          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <section className="text-center mb-12">
          <p className={`max-w-3xl mx-auto text-base md:text-lg leading-relaxed ${mutedText} mb-6`}>
            完整版（48 跨頁／96 頁）<br/>
            把元壹宇宙變成「可被學習、可被引用、可被長期使用」的導覽書。
          </p>
        </section>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`p-1 rounded-full border inline-flex ${borderColor} ${cardBg}`}>
            <button 
              onClick={() => setActiveTab('intro')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'intro' ? tabActive : tabInactive
              }`}
            >
              入門版（22 跨頁）
            </button>
            <button 
              onClick={() => setActiveTab('deep')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'deep' ? tabActive : tabInactive
              }`}
            >
              下鑽版（24 跨頁）
            </button>
            <button 
              onClick={() => setActiveTab('style')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'style' ? tabActive : tabInactive
              }`}
            >
              風格定錨（3 張）
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {currentData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-video rounded-xl overflow-hidden border ${borderColor} ${cardBg} hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20`}
            >
              <img 
                src={item.file} 
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4`}>
                <p className="text-white text-sm font-bold">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 text-white hover:text-gold transition-colors z-50"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 text-white hover:text-gold transition-colors z-50"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-[90vw] max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentData[currentIndex].file} 
              alt={currentData[currentIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Info Section */}
            <div className="mt-6 text-center max-w-2xl">
              <h2 className="text-2xl font-bold text-gold mb-3">
                {currentData[currentIndex].title}
              </h2>
              
              {currentData[currentIndex].narration && (
                <p className="text-gray-300 text-lg italic mb-2">
                  「{currentData[currentIndex].narration}」
                </p>
              )}
              
              {currentData[currentIndex].task && (
                <p className="text-gray-400 text-sm">
                  任務：{currentData[currentIndex].task}
                </p>
              )}
              
              {currentData[currentIndex].description && (
                <p className="text-gray-400 text-sm">
                  {currentData[currentIndex].description}
                </p>
              )}

              <p className="text-gray-500 text-xs mt-4 font-mono">
                {currentIndex + 1} / {currentData.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
