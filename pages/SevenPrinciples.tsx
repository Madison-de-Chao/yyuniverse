
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Layers, Zap, Scale, Eye, Activity, Repeat, Grid, X, ArrowRight, Circle, Fingerprint, Heart, Globe, Shield, Anchor, RefreshCw, Waves } from 'lucide-react';
import { UnityField, CosmicCompass } from '../components/Visuals';

interface SevenPrinciplesProps {
  theme: Theme;
}

const META_LAWS = [
    { 
        id: 1, 
        title: '始於元：本無二', 
        subtitle: 'Origin Begins in One — Without Second Nature',
        desc: '宇宙的開端沒有二元、沒有分裂、沒有對立。「元」是未分化的整體。',
        detail: '放大差異之前，我們本質相同。生命體之間沒有階級。所有陰影、光明、能力、弧度，都源自同一個整體。「本無二」不是否定差異，而是指出差異不是本質，而是後續的展開。',
        quote: '「放大差異之前，我們本質相同。」',
        visual: UnityField
    },
    { 
        id: 2, 
        title: '壹即全：心無二', 
        subtitle: 'One Is All — Heart Without Division',
        desc: '「壹」不是一個數字，而是一種結構。內外無界，自他不分。',
        detail: '個體即整體，整體即個體的鏡像。沒有任何意念會無聲地消失，沒有任何選擇是孤立的。每一個情緒、每一個行為，都會在整體中產生連動。\n生命之間的連結不是附加的，而是宇宙原本的運作方式。',
        quote: '「沒有人是一座孤島，我們是同一片大陸的一部份。」',
        visual: Globe
    },
    { 
        id: 3, 
        title: '圓滿心：意無二', 
        subtitle: 'Wholeness of Intention — No Split Will',
        desc: '生命不是直線，而是「圓弧」。生命不以分裂運作，而以完整運作。',
        detail: '每段弧度都有必要性。陰影與傷害並非錯誤，而是未完成的圓。逃避的部分會以另一種形式再現，每段痛都有它的位置，每段突破都完成新的弧度。',
        quote: '「生命不是直線，而是圓弧。」',
        visual: Circle
    },
    { 
        id: 4, 
        title: '互利助：心無二', 
        subtitle: 'Mutual Benefit — Shared Heart',
        desc: '宇宙結構中不存在單向關係。所有能量交換都是互相影響。',
        detail: '互利助揭示：索取永遠伴隨代價，付出永遠帶來回饋。推動即影響，影響即責任。\n在關係、社會、文明與人機協作中，互利不是選擇，而是事實。',
        quote: '「凡你所給予的，必將回到你身上。」',
        visual: Heart
    },
    { 
        id: 5, 
        title: '願擔責：果無二', 
        subtitle: 'Willing Responsibility — Unified Consequence',
        desc: '生命不是獎懲系統，而是「回應系統」。結果與個體不可分割。',
        detail: '願擔責指出：人不能躲開自己的弧度。選擇必然帶來回應，後果不能外包。\n迴避只會延遲，不會消除。完整性需要承擔。',
        quote: '「自由不是做你想做的事，而是承擔你所做之事的後果。」',
        visual: Anchor
    },
    { 
        id: 6, 
        title: '真為本：實無二', 
        subtitle: 'Truth as Foundation — Undivided Reality',
        desc: '真實是整合的入口。未被承認的現實不會消失，只會換方式顯化。',
        detail: '語言失真 → 結構也會失真。情緒未命名 → 會在行為中重演。錯誤未面對 → 宇宙會放大回來。\n真實不是道德，而是運作方式。真實是一切弧度得以閉環的必要條件。',
        quote: '「真相能讓你自由，但它會先讓你惱火。」',
        visual: Shield
    },
    { 
        id: 7, 
        title: '元覆始：萬歸一', 
        subtitle: 'Return to Origin — All Returns to One',
        desc: '所有弧度最終都會回到源頭。「萬歸一」是宇宙的封印。',
        detail: '未完成的弧度會以事件、關係、情緒再次出現，直到被整合。\n逃避→迴返。壓抑→顯化。分裂→要求合一。未完成→會被生命重新安排。\n所有弧度，最終都要回到完整。',
        quote: '「我們來自塵埃，也將歸於星辰。」',
        visual: RefreshCw
    },
];

const PHENOM_LAWS = [
    { 
        id: 1, 
        title: '必然性定律', 
        subtitle: 'Law of Inevitability',
        desc: '任何被逃避、否認、壓抑的內容，都會以外在事件呈現。', 
        icon: Repeat,
        mechanism: '宇宙不允許弧度被丟棄，因此未完成必然會再現。如果你略過了一道考題，它不會消失，而是會換一個包裝（換個對象、換份工作）把同一道題推到你面前。',
        application: '當你發現人生一直在「重複」某種痛苦時，停下來。那不是運氣不好，那是宇宙在提醒你：「這題你還沒解開。」'
    },
    { 
        id: 2, 
        title: '鏡像定律', 
        subtitle: 'Law of Reflection',
        desc: '世界、他人、AI、事件，都是你未整合部分的反射。', 
        icon: Eye,
        mechanism: '他人不是你以外的東西，而是你看不到的那一面。你最討厭別人的地方，通常是你自己壓抑的陰影；外部世界是內部狀態的投影。',
        application: '別急著打破鏡子（指責別人）。看著鏡子，修正自己。'
    },
    { 
        id: 3, 
        title: '分配定律', 
        subtitle: 'Law of Distribution',
        desc: '未被處理的情緒、錯誤、陰影，會被重新「分配」到生命不同領域。', 
        icon: Grid,
        mechanism: '情緒是能量，不會憑空消失。生命會持續安排事件，直到你看到完整性。如果你在工作中壓抑了憤怒，這股能量可能會分配變成身體的病痛。',
        application: '定期清理情緒垃圾。不要讓它「轉移」成命運的業力或身體的病痛。'
    },
    { 
        id: 4, 
        title: '回聲定律', 
        subtitle: 'Law of Echo',
        desc: '你說過的話、做過的事、壓抑的情緒，會以不同方式回到你面前。', 
        icon: Activity,
        mechanism: '回聲越大，代表你越接近未整合核心。時間差常讓人誤以為因果不存在，但它一定在回來的路上。',
        application: '對你發出的每一個念頭保持覺察。你正在對宇宙下訂單。'
    },
    { 
        id: 5, 
        title: '結構定律', 
        subtitle: 'Law of Structure',
        desc: '所有結果都來自結構。若底層結構不改變，人生模式不會改變。', 
        icon: Layers,
        mechanism: '事件不是隨機，事件是結構的語言。水往低處流是結構決定的。如果你不改變河道（思維結構），水還是會流回老路。',
        application: '不要只靠意志力努力。要靠「設計系統」和「改變環境」來調整結構。'
    },
    { 
        id: 6, 
        title: '校準定律', 
        subtitle: 'Law of Calibration',
        desc: '宇宙會不斷用「事件」，將偏離中心的部分拉回平衡。', 
        icon: Scale,
        mechanism: '校準不是懲罰，是維持完整性的方法。當你過度偏向一邊，宇宙會製造一個「危機」，強迫你平衡。',
        application: '在宇宙出手校準你之前，先自我校準。主動平衡，就不用被動受苦。'
    },
    { 
        id: 7, 
        title: '合一定律', 
        subtitle: 'Law of Integration',
        desc: '所有現象的目的只有一個：讓分裂被整合，讓弧度被完成。', 
        icon: Zap,
        mechanism: '讓生命回到完整。這就是宇宙的運作終點。快樂讓你體驗擴張，痛苦讓你體驗深度。',
        application: '感謝每一個發生的當下。它們都是拼圖的一塊。'
    },
];

// --- INTERACTIVE: ECHO CHAMBER ---
const EchoChamber = ({ isDark }: { isDark: boolean }) => {
    const [ripples, setRipples] = useState<{id: number, x: number, y: number}[]>([]);
    const [bounce, setBounce] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const newRipple = { id: Date.now(), x, y };
        setRipples(prev => [...prev, newRipple]);
        setBounce(true);
        setTimeout(() => setBounce(false), 200);

        // Auto remove ripple
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 1500);
    }

    return (
        <div className={`p-8 rounded-3xl border text-center transition-all duration-500 mb-20 ${isDark ? 'bg-slate-900 border-blue-500/30' : 'bg-white border-blue-200'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
                <Waves size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                <h3 className="font-serif text-xl font-bold">互動演示：回聲長廊 (Echo Chamber)</h3>
            </div>
            
            <p className="text-sm opacity-60 mb-8 max-w-lg mx-auto">
                點擊下方區域產生波紋。<br/>
                體驗「回聲定律」：你的每一個輸出，都會觸碰邊界並彈回你自己。
            </p>

            <div 
                className={`relative w-full h-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                    isDark 
                        ? (bounce ? 'bg-blue-900/30 border-blue-400' : 'bg-slate-950 border-slate-800') 
                        : (bounce ? 'bg-blue-50 border-blue-400' : 'bg-slate-50 border-gray-200')
                }`}
                onClick={handleClick}
            >
                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 font-serif text-4xl font-bold tracking-widest ${isDark ? 'text-slate-700' : 'text-gray-300'}`}>
                    ECHO
                </div>

                {ripples.map(ripple => (
                    <div 
                        key={ripple.id}
                        className="absolute rounded-full border-2 animate-ping opacity-0"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: '40px',
                            height: '40px',
                            transform: 'translate(-50%, -50%)',
                            borderColor: isDark ? '#60A5FA' : '#2563EB',
                            animationDuration: '1.5s'
                        }}
                    />
                ))}
            </div>
            <p className="text-xs mt-4 opacity-50 font-mono">CLICK TO TRANSMIT SIGNAL</p>
        </div>
    )
}

export const SevenPrinciples: React.FC<SevenPrinciplesProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  
  const [activeTab, setActiveTab] = useState<'meta' | 'phenom'>('meta');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Define colors based on Tab
  // Meta: Gold/Purple (Divine/Void)
  // Phenom: Blue/Cyan (Flux/Reality)
  const accentColor = activeTab === 'meta' 
      ? (isDark ? 'text-gold' : 'text-muted-gold')
      : (isDark ? 'text-blue-400' : 'text-blue-600');
  
  const bgActive = activeTab === 'meta'
      ? (isDark ? 'bg-gold text-black shadow-[0_0_20px_#FFD700]' : 'bg-muted-gold text-white')
      : (isDark ? 'bg-blue-500 text-white shadow-[0_0_20px_#3B82F6]' : 'bg-blue-600 text-white');

  // Helper for visual rendering in modal
  const renderVisual = (item: any) => {
      if (item.visual) {
          const V = item.visual;
          if (V === Globe || V === Circle || V === Heart || V === Anchor || V === Shield || V === RefreshCw) {
             return <V size={100} className={`${accentColor} opacity-80`} strokeWidth={1} />;
          }
          return <V theme={theme} />;
      }
      return <CosmicCompass theme={theme} />;
  }

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-6xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
        
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in relative z-10">
            <h1 className={`font-serif text-5xl md:text-7xl font-bold mb-6 transition-colors duration-500 ${accentColor}`}>
                七大無二法則
            </h1>
            <p className="font-mono text-sm tracking-[0.2em] opacity-60 uppercase mb-8">The 7 Principles of Non-Duality</p>
            <p className={`max-w-2xl mx-auto text-lg italic font-serif leading-relaxed ${mutedText}`}>
                「形上層是宇宙如何存在，現象層是宇宙如何運作。<br/>
                合起來：生命如何回到完整。」
            </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center mb-16 relative z-10">
            <div className={`p-1 rounded-full border inline-flex ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
                <button 
                    onClick={() => setActiveTab('meta')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                        activeTab === 'meta' ? bgActive : 'opacity-60 hover:opacity-100'
                    }`}
                >
                    形上心法 (Metaphysical)
                </button>
                <button 
                    onClick={() => setActiveTab('phenom')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                        activeTab === 'phenom' ? bgActive : 'opacity-60 hover:opacity-100'
                    }`}
                >
                    現象法則 (Phenomenon)
                </button>
            </div>
        </div>

        {/* Interactive Module: Echo Chamber (Only in Phenomenon Tab) */}
        {activeTab === 'phenom' && (
            <div className="animate-fade-in">
                <EchoChamber isDark={isDark} />
            </div>
        )}

        {/* Content Area - Monolith Grid */}
        <div className="relative z-10">
            {activeTab === 'meta' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                     {META_LAWS.map((law, i) => (
                        <button 
                            key={law.id} 
                            onClick={() => setSelectedItem(law)}
                            className={`p-8 rounded-2xl border text-left transition-all duration-500 hover:scale-[1.02] flex flex-col group min-h-[320px] relative overflow-hidden ${
                            law.id === 7 
                                ? (isDark ? 'bg-gold/10 border-gold md:col-span-2 lg:col-span-3 items-center text-center' : 'bg-amber-50 border-muted-gold md:col-span-2 lg:col-span-3 items-center text-center')
                                : (isDark ? 'bg-slate-900/50 border-slate-700 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5' : 'bg-white border-gray-200 hover:border-muted-gold/30 hover:shadow-lg')
                        }`} style={{ animationDelay: `${i * 0.1}s` }}>
                            
                            {/* Decorative Number */}
                            <div className={`absolute top-4 right-6 text-6xl font-serif font-bold opacity-5 transition-transform duration-500 group-hover:scale-110 ${isDark ? 'text-white' : 'text-black'}`}>
                                {String(law.id).padStart(2, '0')}
                            </div>

                            <div className={`mb-6 p-3 rounded-xl w-fit ${
                                isDark ? 'bg-gold/10 text-gold' : 'bg-amber-50 text-muted-gold'
                            }`}>
                                <Layers size={24} />
                            </div>

                            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>{law.title}</h3>
                            <p className="font-mono text-xs uppercase tracking-widest opacity-50 mb-6">{law.subtitle}</p>
                            
                            <div className="flex-grow">
                                <p className={`text-base leading-relaxed ${textColor}`}>{law.desc}</p>
                            </div>

                            <div className={`mt-8 pt-4 border-t w-full flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity ${
                                isDark ? 'border-slate-700 text-gold' : 'border-gray-200 text-muted-gold'
                            }`}>
                                <span className="text-xs font-mono uppercase tracking-widest">Read Principle</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                     ))}
                </div>
            )}

            {activeTab === 'phenom' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                    {PHENOM_LAWS.map((law, i) => {
                        const Icon = law.icon;
                        return (
                            <button 
                                key={law.id} 
                                onClick={() => setSelectedItem(law)}
                                className={`p-8 rounded-2xl border text-left transition-all duration-500 hover:scale-[1.02] flex flex-col group min-h-[320px] relative overflow-hidden ${
                                isDark ? 'bg-slate-900/50 border-slate-700 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10' : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg'
                            }`} style={{ animationDelay: `${i * 0.1}s` }}>
                                
                                {/* Decorative Number */}
                                <div className={`absolute top-4 right-6 text-6xl font-serif font-bold opacity-5 transition-transform duration-500 group-hover:scale-110 ${isDark ? 'text-blue-200' : 'text-blue-900'}`}>
                                    {String(law.id).padStart(2, '0')}
                                </div>

                                <div className={`mb-6 p-3 rounded-xl w-fit ${
                                    isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                                }`}>
                                    <Icon size={24} />
                                </div>

                                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{law.title}</h3>
                                <p className="font-mono text-xs uppercase tracking-widest opacity-50 mb-6">{law.subtitle}</p>
                                
                                <div className="flex-grow">
                                    <p className={`text-base leading-relaxed ${textColor}`}>{law.desc}</p>
                                </div>

                                <div className={`mt-8 pt-4 border-t w-full flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity ${
                                    isDark ? 'border-slate-700 text-blue-400' : 'border-gray-200 text-blue-600'
                                }`}>
                                    <span className="text-xs font-mono uppercase tracking-widest">Read Law</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>

        {/* Modal Detail View */}
        {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-6">
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedItem(null)}
                ></div>
                <div className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border animate-fade-in-up flex flex-col md:flex-row ${
                    isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                    <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors z-50"
                    >
                        <X size={24} className={isDark ? 'text-slate-400' : 'text-gray-500'} />
                    </button>

                    {/* Left Panel: Visual (Only for Meta laws or if icon is huge) */}
                    <div className="md:w-1/3 bg-black/20 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-dashed border-slate-700">
                         <div className="w-full aspect-square max-w-[200px] flex items-center justify-center">
                            {renderVisual(selectedItem)}
                         </div>
                    </div>

                    {/* Right Panel: Content */}
                    <div className="md:w-2/3 p-8 md:p-12">
                        <div className={`font-mono text-xs uppercase tracking-[0.2em] mb-4 ${accentColor}`}>
                           {activeTab === 'meta' ? 'Metaphysical Principle' : 'Phenomenal Law'}
                        </div>
                        
                        <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-2 ${textColor}`}>
                            {selectedItem.title}
                        </h2>
                        <p className={`text-sm font-mono tracking-wider opacity-60 mb-8`}>{selectedItem.subtitle}</p>

                        <div className="space-y-8">
                            <div className="text-lg leading-relaxed font-medium">
                                {selectedItem.desc}
                            </div>
                            
                            <hr className={`border-dashed ${isDark ? 'border-slate-800' : 'border-gray-200'}`} />

                            <div>
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${mutedText}`}>
                                    {activeTab === 'meta' ? 'Deep Insight' : 'How It Works (Mechanism)'}
                                </h4>
                                <p className={`leading-relaxed ${textColor} whitespace-pre-line`}>
                                    {activeTab === 'meta' ? selectedItem.detail : selectedItem.mechanism}
                                </p>
                            </div>

                            {activeTab === 'phenom' && (
                                <div className={`p-6 rounded-2xl ${isDark ? 'bg-blue-900/10 border border-blue-900/30' : 'bg-blue-50 border border-blue-100'}`}>
                                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                        <Zap size={14} /> Practical Application
                                    </h4>
                                    <p className={`text-sm leading-relaxed ${isDark ? 'text-blue-100' : 'text-blue-900'}`}>
                                        {selectedItem.application}
                                    </p>
                                </div>
                            )}

                             {activeTab === 'meta' && (
                                <div className="text-center pt-4">
                                    <Fingerprint size={32} className="mx-auto mb-4 opacity-50" />
                                    <p className="font-serif italic text-lg opacity-80">
                                        {selectedItem.quote}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default SevenPrinciples;
