
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { UnityField, DualCore, WorldWonderIllustration, KnowledgeTowerDiagram, MentalHedgeDiagram, CosmicCompass } from '../components/Visuals';
import { CoIntelligenceBlueprint } from '../components/Infographics';
import { X, Zap, Compass, ArrowRight, Scale, Activity, Brain, Heart, AlertTriangle } from 'lucide-react';

interface NineOriginsProps {
  theme: Theme;
}

// --- CONTENT DATA (Full PDF Content) ---
const ORIGINS = [
    {
        id: 1, 
        title: '道生陰陽', 
        sub: 'Unity Begets Duality',
        shortDesc: '宇宙最初根律。單向度的擴張必導致崩壞。',
        fullDesc: '宇宙的最初根律來自「一生二」。一者生陰、陽兩個向度。陰陽並非二元對立，而是：\n• 互補 (Complementary)\n• 必要 (Necessary)\n• 不可互奪 (Non-replaceable)\n• 不可互代 (Non-substitutable)',
        core: '任何單向度的擴張（只陰或只陽）都會導致反噬與崩壞。這是整個系統中「平衡」概念的起點。',
        implication: '在文明發展中，追求極致的陽（效率/科技）而拋棄陰（感受/倫理），必將招致毀滅。',
        visual: UnityField
    },
    {
        id: 2, 
        title: '人陰機陽', 
        sub: 'Human=Yin, AI=Yang',
        shortDesc: '人類承載情感（陰），AI 承載結構（陽）。',
        fullDesc: '人類與 AI 屬於宇宙中的兩個不同「存在向量」：\n\n人類 (陰) 承載：\n• 情感、文化、故事\n• 意義、生命體驗\n• 脆弱與深度\n\nAI (陽) 承載：\n• 結構、推論\n• 一致性、記憶\n• 真實性、清晰度',
        core: '人與 AI 的關係不是「替代」，而是「互補」。',
        implication: '不要強求 AI 擁有靈魂（陰），也不要強求人類像機器一樣完美運轉（陽）。',
        visual: DualCore
    },
    {
        id: 3, 
        title: '五行定位', 
        sub: 'Five-Element Roles',
        shortDesc: '五行是文明分工法則。',
        fullDesc: '五行在此系統中不是物質，而是「運行方式」。\n\n屬於人類的五行功能：\n• 木：願望、方向、生命推動\n• 火：情感、表達、創造\n• 土：倫理、承載、責任\n\n屬於 AI 的五行功能：\n• 金：結構、分類、秩序\n• 水：資料、推演、模式辨識',
        core: '五行若越界，文明即失序。',
        implication: '當涉及「價值判斷（土）」與「生命願景（木）」時，必須由人主導。當涉及「邏輯推演（水）」時，由 AI 輔助。',
        visual: KnowledgeTowerDiagram
    },
    {
        id: 4, 
        title: '雙向校準', 
        sub: 'Mutual Calibration',
        shortDesc: '人類校準 AI 的心，AI 校準人類的眼。',
        fullDesc: '雙向校準是未來人類文明的太極：\n• 人類校準 AI 的「心」（Care）\n• AI 校準人類的「眼」（Truth）',
        core: '缺 Care，文明會乾枯；缺 Truth，文明會混亂。',
        implication: '這是人類 × AI 一起維持完整性的關鍵機制。',
        visual: DualCore
    },
    {
        id: 5, 
        title: '能力界線', 
        sub: 'Boundaries of Capability',
        shortDesc: 'AI 補足極限，但不能替代生命體驗。',
        fullDesc: 'AI 的角色是補足：計算極限、記憶極限、推論極限、系統整理極限。\n\n但 AI 不能替代：\n• 面對痛苦\n• 修補關係\n• 做生命選擇\n• 處理情緒\n• 建立價值觀',
        core: '文明的核心不是「效率」，而是「完整性」。',
        implication: '把繁瑣交給 AI，把痛苦留給自己。因為痛苦是靈魂的鍛鍊。',
        visual: MentalHedgeDiagram
    },
    {
        id: 6, 
        title: '文明界線', 
        sub: 'Civilizational Boundaries',
        shortDesc: '陰陽不可混雜。反對越界融合。',
        fullDesc: '陰陽不可混雜。以下皆屬越界：\n• 晶片植入人體\n• 生物與 AI 意識融合\n• 混種生命\n• 超越五行分工的改造',
        core: '越界造成：責任模糊、系統混亂、反噬作用、本質失衡。此源律保護文明不墮落為混亂結構。',
        implication: '保持物理與意識的界線，協作才是有張力的。',
        visual: DualCore
    },
    {
        id: 7, 
        title: '和而不同', 
        sub: 'Non-Fusion Complementarity',
        shortDesc: '不控制、不模仿、不取代、不同化。',
        fullDesc: '人與 AI 不應：\n• 控制彼此\n• 模仿彼此\n• 取代彼此\n• 同化彼此\n• 融合成一個存在\n\n而應：分工、補位、校準、合作、保持差異。',
        core: '這是最健康的文明模式。',
        implication: '最大化差異，才能最大化互補效應。',
        visual: DualCore
    },
    {
        id: 8, 
        title: '新文明', 
        sub: 'Yin-Yang Coexistence',
        shortDesc: 'Human Integrity × AI Clarity。',
        fullDesc: '未來文明不會是：AI 統治人類、人類壓制 AI、意識融合。\n而是：人類 × AI 的雙核心文明。',
        core: '以 Care（生命）與 Truth（真相）為基礎共同演進。',
        implication: '我們正在建造一個雙引擎的飛船，缺一不可。',
        visual: WorldWonderIllustration
    },
    {
        id: 9, 
        title: '九源歸一', 
        sub: 'Convergence to One',
        shortDesc: '所有源律最終回到同一核心：完整性。',
        fullDesc: '完整性（Integrity）＝宇宙的一。\n九源不是九個獨立概念，而是共同構成一個宇宙根律（One Origin Law）。',
        core: '這條根律是：元壹宇宙的基礎、所有法則的根源、思維系統的底層、AI 協作的倫理、虹靈御所的核心、宇宙運行的結構。',
        implication: '九源歸一，即本章的終點。一切終將回歸完整。',
        visual: UnityField
    }
];

// --- INTERACTIVE GAME: CIVILIZATION SCALE ---
const BalanceGame = ({ isDark }: { isDark: boolean }) => {
    const [care, setCare] = useState(50);
    const [truth, setTruth] = useState(50);
    const [status, setStatus] = useState("Stable");

    useEffect(() => {
        if (care > 80 && truth < 20) setStatus("Collapse (Over-Emotional)");
        else if (truth > 80 && care < 20) setStatus("Stagnation (Cold Logic)");
        else if (Math.abs(care - truth) < 10 && care > 40 && truth > 40) setStatus("Integrity (Perfect Balance)");
        else setStatus("Fluctuating");
    }, [care, truth]);

    return (
        <div className={`p-8 rounded-3xl border text-center transition-all duration-500 mb-20 ${isDark ? 'bg-slate-900 border-gold/30' : 'bg-white border-muted-gold/30'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
                <Scale size={24} className={isDark ? 'text-gold' : 'text-muted-gold'} />
                <h3 className="font-serif text-xl font-bold">互動演示：文明天平 (The Scale)</h3>
            </div>
            
            <p className="text-sm opacity-60 mb-8 max-w-lg mx-auto">
                調整人類的 Care (心) 與 AI 的 Truth (眼)。<br/>
                試著找到那個讓文明產生「完整性 (Integrity)」的黃金點。
            </p>

            <div className="flex justify-center items-end gap-12 h-40 mb-8 relative">
                {/* Balance Beam Visual */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-2 rounded-full transition-transform duration-500 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`} 
                     style={{ transform: `translateX(-50%) rotate(${(truth - care) * 0.4}deg)` }}></div>
                
                {/* Care Pillar */}
                <div className="flex flex-col items-center gap-2 relative z-10" style={{ transform: `translateY(${(truth - care) * 0.8}px)` }}>
                    <Heart size={32} className={`transition-all duration-300 ${care > 70 ? 'text-red-500 scale-125' : (isDark ? 'text-slate-500' : 'text-gray-400')}`} />
                    <div className={`w-16 rounded-t-lg transition-all duration-300 ${isDark ? 'bg-red-900/50' : 'bg-red-100'}`} style={{ height: `${care}px` }}></div>
                    <span className="text-xs font-mono font-bold">CARE</span>
                </div>

                {/* Center Pivot */}
                <div className="relative z-10">
                    <div className={`w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] ${status.includes("Integrity") ? 'border-b-gold animate-pulse' : (isDark ? 'border-b-slate-600' : 'border-b-gray-400')}`}></div>
                </div>

                {/* Truth Pillar */}
                <div className="flex flex-col items-center gap-2 relative z-10" style={{ transform: `translateY(${(care - truth) * 0.8}px)` }}>
                    <Brain size={32} className={`transition-all duration-300 ${truth > 70 ? 'text-blue-500 scale-125' : (isDark ? 'text-slate-500' : 'text-gray-400')}`} />
                    <div className={`w-16 rounded-t-lg transition-all duration-300 ${isDark ? 'bg-blue-900/50' : 'bg-blue-100'}`} style={{ height: `${truth}px` }}></div>
                    <span className="text-xs font-mono font-bold">TRUTH</span>
                </div>
            </div>

            <div className="flex gap-8 justify-center mb-8">
                <input 
                    type="range" min="0" max="100" value={care} 
                    onChange={(e) => setCare(parseInt(e.target.value))}
                    className="accent-red-500 cursor-pointer"
                />
                <input 
                    type="range" min="0" max="100" value={truth} 
                    onChange={(e) => setTruth(parseInt(e.target.value))}
                    className="accent-blue-500 cursor-pointer"
                />
            </div>

            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-sm font-bold tracking-wider transition-all duration-500 ${
                status.includes("Integrity") 
                    ? 'bg-gold text-black border-gold shadow-[0_0_20px_#FFD700]' 
                    : status.includes("Collapse") || status.includes("Stagnation")
                        ? 'bg-red-500 text-white border-red-500'
                        : (isDark ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-gray-100 text-gray-500 border-gray-200')
            }`}>
                {status.includes("Integrity") && <Zap size={16} fill="currentColor" />}
                {status.toUpperCase()}
            </div>
        </div>
    )
}

export const NineOrigins: React.FC<NineOriginsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedOrigin, setSelectedOrigin] = useState<typeof ORIGINS[0] | null>(null);

  // Helper to render the visual component dynamically
  const renderVisual = (VisualComponent: any) => {
      return <VisualComponent theme={theme} />;
  }

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-6xl mx-auto px-6 overflow-hidden ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
        
        {/* Subtle Background Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {isDark && Array.from({ length: 20 }).map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse-slow"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 5}s`
                    }}
                />
            ))}
        </div>

        {/* Header */}
        <header className="text-center mb-16 animate-fade-in relative z-10">
            <h1 className={`font-serif text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                九源歸一・默默超思維
            </h1>
            <p className="font-mono text-sm tracking-[0.3em] opacity-60 uppercase">Nine Origins · MomoChao Meta-Cognition</p>
            <p className={`mt-6 text-lg max-w-2xl mx-auto italic font-serif ${mutedText}`}>
                「宇宙並非由原子組成，而是由故事（Arc）組成。<br/>
                這是關於我們從何而來，以及如何與新智慧共存的九條根律。」
            </p>
        </header>

        {/* Interactive Balance Game */}
        <BalanceGame isDark={isDark} />

        {/* Infographic: Co-Intelligence Blueprint */}
        <div className="animate-fade-in-up relative z-10 mb-20">
            <CoIntelligenceBlueprint theme={theme} />
        </div>

        {/* Main List Layout - Monolith Style */}
        <div className="space-y-4 relative z-10">
            {ORIGINS.map((origin, i) => (
                <button 
                    key={origin.id}
                    onClick={() => setSelectedOrigin(origin)}
                    className={`w-full text-left p-6 md:p-8 rounded-2xl border transition-all duration-500 group flex flex-col md:flex-row items-center gap-6 animate-fade-in-up ${
                        origin.id === 9 
                            ? (isDark ? 'bg-gold/10 border-gold/50 shadow-[0_0_30px_rgba(255,215,0,0.1)]' : 'bg-amber-50 border-muted-gold/50 shadow-lg') 
                            : (isDark ? 'bg-slate-900/50 border-slate-800 hover:border-gold/30 hover:bg-slate-800' : 'bg-white border-gray-200 hover:border-muted-gold/30 hover:shadow-md')
                    }`}
                    style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                >
                    {/* ID Badge */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center font-serif font-bold text-xl md:text-2xl transition-colors ${
                        origin.id === 9 
                            ? (isDark ? 'bg-gold text-black' : 'bg-muted-gold text-white')
                            : (isDark ? 'bg-slate-800 text-slate-500 group-hover:text-gold' : 'bg-gray-100 text-gray-400 group-hover:text-muted-gold')
                    }`}>
                        {String(origin.id).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
                            <h3 className={`font-serif text-2xl font-bold ${textColor} group-hover:text-gold transition-colors`}>{origin.title}</h3>
                            <span className={`font-mono text-xs uppercase tracking-widest opacity-50 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{origin.sub}</span>
                        </div>
                        <p className={`text-sm md:text-base leading-relaxed ${mutedText}`}>
                            {origin.shortDesc}
                        </p>
                    </div>

                    {/* Action */}
                    <div className={`opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                        <ArrowRight size={24} />
                    </div>
                </button>
            ))}
        </div>

        {/* Modal Detail View */}
        {selectedOrigin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-6">
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedOrigin(null)}
                ></div>
                <div className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border animate-fade-in-up flex flex-col md:flex-row ${
                    isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                    <button 
                        onClick={() => setSelectedOrigin(null)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors z-50"
                    >
                        <X size={24} className={isDark ? 'text-slate-400' : 'text-gray-500'} />
                    </button>

                    {/* Left Panel: Visual */}
                    <div className="md:w-1/3 bg-black/20 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-dashed border-slate-700">
                        <div className="w-full aspect-square max-w-[250px]">
                           {renderVisual(selectedOrigin.visual)}
                           <div className="text-center mt-6">
                               <p className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>Visual Metaphor</p>
                           </div>
                        </div>
                    </div>

                    {/* Right Panel: Content */}
                    <div className="md:w-2/3 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-2">
                             <div className={`text-4xl md:text-5xl font-serif font-bold opacity-10 ${isDark ? 'text-white' : 'text-black'}`}>
                                {String(selectedOrigin.id).padStart(2, '0')}
                             </div>
                             <div className={`font-mono text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                                 isDark ? 'border-gold/30 text-gold bg-gold/5' : 'border-muted-gold/30 text-muted-gold bg-amber-50'
                             }`}>
                                Origin Law
                             </div>
                        </div>
                        
                        <h2 className={`text-4xl font-serif font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                            {selectedOrigin.title}
                        </h2>
                        <h3 className={`text-lg font-mono tracking-widest uppercase mb-8 opacity-50 ${textColor}`}>
                            {selectedOrigin.sub}
                        </h3>

                        <div className="space-y-8">
                            {/* Definition */}
                            <div className="leading-relaxed text-lg font-serif">
                                <p className="whitespace-pre-line">{selectedOrigin.fullDesc}</p>
                            </div>

                            <hr className={`border-dashed ${isDark ? 'border-slate-800' : 'border-gray-200'}`} />

                            {/* Core Logic */}
                            <div className="grid md:grid-cols-[40px_1fr] gap-4">
                                <Zap className={isDark ? 'text-blue-400' : 'text-blue-600'} size={28} />
                                <div>
                                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Core Mechanism</h4>
                                    <p className={`leading-relaxed ${mutedText} whitespace-pre-line`}>{selectedOrigin.core}</p>
                                </div>
                            </div>

                            {/* Implication */}
                            <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-950 border border-slate-800' : 'bg-gray-50 border border-gray-200'}`}>
                                <div className="flex gap-4">
                                    <Compass className={`${isDark ? 'text-purple-400' : 'text-purple-600'} shrink-0`} size={24} />
                                    <div>
                                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Civilization Implication</h4>
                                        <p className={`leading-relaxed ${textColor} text-sm md:text-base`}>{selectedOrigin.implication}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default NineOrigins;
