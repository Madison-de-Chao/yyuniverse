
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Play, Clapperboard, User, Drama, Sparkles, Download, RefreshCw, Feather, BookOpen, Lightbulb, HelpCircle, Link2 } from 'lucide-react';
import { ShadowSynthesis, CognitiveCycle } from '../components/Visuals';
import { SCRIPT_ENHANCEMENTS } from '../data/scriptEnhancements';

interface UniverseScriptProps {
  theme: Theme;
}

// Simulated "AI" Script Generation Logic
const SCRIPT_TEMPLATES = {
    career: {
        role: "開拓者 (The Pioneer)",
        shadow: "對安穩的依戀 (Attachment to Safety)",
        arc: "勇氣之弧 (The Arc of Courage)",
        line1: "你站在懸崖邊，身後是溫暖但窒息的舊世界。",
        line2: "眼前的迷霧裡，藏著可能會摔死的風險，但也藏著唯一的自由。",
        choiceA: "留在原地：你保住了安全，但畫下了一個「遺憾」的缺口。",
        choiceB: "跳下去：你可能會受傷，但你終於開始畫那條名為「真實」的線。",
        directorNote: "這一場戲不是關於成功，而是關於你敢不敢讓靈魂長出骨架。"
    },
    relationship: {
        role: "修復者 (The Healer)",
        shadow: "被遺棄的恐懼 (Fear of Abandonment)",
        arc: "界線之弧 (The Arc of Boundaries)",
        line1: "你手裡拿著對方的情緒，以為那是你的責任。",
        line2: "舞台上的聚光燈打在你身上，但你卻一直在演配角。",
        choiceA: "繼續承擔：你維持了和平，但你的圓逐漸變形成對方的形狀。",
        choiceB: "交還責任：你會遭遇衝突，但那是你找回自己輪廓的必經震盪。",
        directorNote: "愛不是犧牲，愛是兩個完整圓的交集。你得先是圓，才能去愛。"
    },
    identity: {
        role: "覺醒者 (The Awakened)",
        shadow: "舊身分的慣性 (Inertia of Old Self)",
        arc: "重塑之弧 (The Arc of Rebirth)",
        line1: "鏡子裡的臉孔很熟悉，但眼神卻很陌生。",
        line2: "舊的劇本已經演不下去了，但新的台詞還沒寫好。",
        choiceA: "照舊演出：觀眾會滿意，但你會在掌聲中感到無比孤獨。",
        choiceB: "即興發揮：你會結巴、會冷場，但那一刻你是活著的。",
        directorNote: "不要害怕冷場。空白，是神性進入的地方。"
    },
    creator: {
        role: "創造者 (The Creator)",
        shadow: "完美主義的癱瘓 (Paralysis of Perfectionism)",
        arc: "表達之弧 (The Arc of Expression)",
        line1: "你的腦海裡有一幅完美的畫面，但手卻遲遲不敢動筆。",
        line2: "每一次想要開始，內心就響起批判的聲音：『這還不夠好。』",
        choiceA: "繼續等待：你保持了完美的幻想，但那幅畫永遠只存在於想像中。",
        choiceB: "動手創作：你會畫出不完美的線條，但那是你靈魂第一次被看見。",
        directorNote: "完美是創造的敵人。真正的藝術，始於你允許自己不完美。"
    },
    guardian: {
        role: "守護者 (The Guardian)",
        shadow: "過度犧牲的慣性 (Inertia of Over-Sacrifice)",
        arc: "平衡之弧 (The Arc of Balance)",
        line1: "你把所有人的需求都扛在肩上，卻忘了自己也需要被照顧。",
        line2: "當你終於停下來，才發現自己的油箱早已見底。",
        choiceA: "繼續付出：你維持了所有人的幸福，但你的圓逐漸被掏空成殼。",
        choiceB: "設定界限：你會聽到抱怨，但那是你重新填滿自己的開始。",
        directorNote: "照顧他人之前，先戴上自己的氧氣罩。你不是拯救者，你是引導者。"
    },
    explorer: {
        role: "探索者 (The Explorer)",
        shadow: "逃避的偽裝 (Disguise of Escapism)",
        arc: "歸返之弧 (The Arc of Return)",
        line1: "你一直在路上，追尋著遠方的答案。",
        line2: "但每到一個新地方，那個空洞感依然跟著你。",
        choiceA: "繼續逃離：你會看到更多風景，但永遠找不到家。",
        choiceB: "面對內在：你會停下腳步，但那是你真正開始旅程的時刻。",
        directorNote: "真正的探索不是逃離自己，而是帶著完整的自己去看世界。"
    },
    sage: {
        role: "智者 (The Sage)",
        shadow: "知識的傲慢 (Arrogance of Knowledge)",
        arc: "謙卑之弧 (The Arc of Humility)",
        line1: "你讀了很多書，懂了很多道理，但生活依然一團糟。",
        line2: "你用知識築起高牆，卻把真實的情感鎖在外面。",
        choiceA: "堅守理性：你保持了智識的優越感，但你的圓變得冰冷而孤立。",
        choiceB: "承認無知：你會感到脆弱，但那是智慧真正開始的地方。",
        directorNote: "知道不等於理解，理解不等於活出來。真正的智者，是能說出『我不知道』的人。"
    },
    warrior: {
        role: "戰士 (The Warrior)",
        shadow: "勝負的執著 (Obsession with Winning)",
        arc: "和解之弧 (The Arc of Reconciliation)",
        line1: "你把每一場對話都當成戰場，每一個異見都是敵人。",
        line2: "你贏了很多次，但每次勝利後，卻感到更加孤獨。",
        choiceA: "繼續戰鬥：你會累積更多勝利，但你的圓會被戰火燒成碎片。",
        choiceB: "放下武器：你會失去一些戰役，但那是你找回和平的唯一方式。",
        directorNote: "最強大的戰士，是那些知道何時停止戰鬥的人。真正的勝利，是與自己和解。"
    },
    lover: {
        role: "愛人 (The Lover)",
        shadow: "融合的恐懼 (Fear of Merging)",
        arc: "獨立之弧 (The Arc of Independence)",
        line1: "你渴望親密，但每當靠近時，就害怕失去自己。",
        line2: "你在靠近與逃離之間反覆，像海浪拍打著岸邊。",
        choiceA: "保持距離：你保護了自己的完整，但永遠無法體驗真正的連結。",
        choiceB: "允許靠近：你會感到脆弱，但那是愛真正開始的地方。",
        directorNote: "真正的愛，不是失去自己，而是在連結中找到更完整的自己。"
    }
};

export const UniverseScript: React.FC<UniverseScriptProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  
  const [step, setStep] = useState<'intro' | 'input' | 'analyzing' | 'result'>('intro');
  const [userInput, setUserInput] = useState('');
  const [scriptType, setScriptType] = useState<'career' | 'relationship' | 'identity' | 'creator' | 'guardian' | 'explorer' | 'sage' | 'warrior' | 'lover'>('identity');
  const [hoveredChoice, setHoveredChoice] = useState<'A' | 'B' | null>(null);
  const [analyzeStep, setAnalyzeStep] = useState(0);

  // Analysis Animation Loop
  useEffect(() => {
    let interval: any;
    if (step === 'analyzing') {
        interval = setInterval(() => {
            setAnalyzeStep(prev => (prev + 1) % 8);
        }, 150);
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleStart = () => {
    setStep('input');
  };

  const handleGenerate = () => {
    if (!userInput.trim()) return;
    setStep('analyzing');
    // Simulate thinking time
    setTimeout(() => {
        // Enhanced keyword detection to choose template
        const input = userInput.toLowerCase();
        
        // 創造者：創作、表達、藝術
        if (input.includes('創作') || input.includes('藝術') || input.includes('寫') || input.includes('畫') || input.includes('設計') || input.includes('作品') || input.includes('完美') || input.includes('表達')) {
            setScriptType('creator');
        }
        // 守護者：家庭、責任、照顧
        else if (input.includes('家人') || input.includes('父母') || input.includes('孩子') || input.includes('照顧') || input.includes('犧牲') || input.includes('累') || input.includes('付出')) {
            setScriptType('guardian');
        }
        // 探索者：旅行、逃離、尋找
        else if (input.includes('旅行') || input.includes('離開') || input.includes('逃') || input.includes('尋找') || input.includes('探索') || input.includes('運動') || input.includes('空虛')) {
            setScriptType('explorer');
        }
        // 智者：知識、學習、理性
        else if (input.includes('知識') || input.includes('學習') || input.includes('研究') || input.includes('理性') || input.includes('思考') || input.includes('書') || input.includes('道理')) {
            setScriptType('sage');
        }
        // 戰士：衝突、競爭、勝負
        else if (input.includes('爭執') || input.includes('衝突') || input.includes('戰鬥') || input.includes('勝') || input.includes('輸') || input.includes('比較') || input.includes('競爭')) {
            setScriptType('warrior');
        }
        // 愛人：親密、連結、愛
        else if (input.includes('伴侣') || input.includes('男友') || input.includes('女友') || input.includes('另一半') || input.includes('黏') || input.includes('失去') || input.includes('分離') || input.includes('親密') || input.includes('連結') || input.includes('依戀') || input.includes('融合') || input.includes('獨立') || input.includes('愛情') || input.includes('戀愛')) {
            setScriptType('lover');
        }
        // 開拓者：工作、事業、職涯
        else if (input.includes('工作') || input.includes('職') || input.includes('錢') || input.includes('業') || input.includes('創業') || input.includes('轉職')) {
            setScriptType('career');
        }
        // 修復者：關係、界限
        else if (input.includes('關係') || input.includes('朋友') || input.includes('界限') || input.includes('責任')) {
            setScriptType('relationship');
        }
        // 預設：覺醒者
        else {
            setScriptType('identity');
        }
        setStep('result');
    }, 2500);
  };

  const currentScript = SCRIPT_TEMPLATES[scriptType];
  const currentEnhancement = SCRIPT_ENHANCEMENTS[scriptType];

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-5xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
        
        {/* STAGE LIGHT EFFECT */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[60vh] bg-gradient-to-b from-white/10 to-transparent pointer-events-none blur-3xl opacity-20"></div>

        {/* STEP 1: INTRO (THE CURTAIN) */}
        {step === 'intro' && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in space-y-12">
                <div className="relative">
                    <div className={`absolute inset-0 blur-2xl opacity-30 ${isDark ? 'bg-gold' : 'bg-muted-gold'}`}></div>
                    <Clapperboard size={64} className={`relative z-10 ${isDark ? 'text-gold' : 'text-muted-gold'}`} />
                </div>
                
                <div className="space-y-6 max-w-2xl">
                    <h1 className={`text-4xl md:text-6xl font-serif font-bold ${textColor}`}>
                        元壹宇宙劇本
                    </h1>
                    <p className={`font-mono uppercase tracking-[0.3em] opacity-60`}>The Script of Your Arc</p>
                    <div className={`w-16 h-px mx-auto ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`}></div>
                    <p className={`text-lg md:text-xl font-serif italic leading-loose ${mutedText}`}>
                        「如果人生是一場預演，你現在正在哪一幕？<br/>
                        每一個選擇，都是在畫你靈魂的圓。」
                    </p>
                </div>

                <button 
                    onClick={handleStart}
                    aria-label="Start script generation"
                    className={`group relative px-8 py-4 rounded-full border transition-all duration-500 overflow-hidden ${
                        isDark 
                            ? 'border-gold text-gold hover:bg-gold hover:text-black' 
                            : 'border-ink text-ink hover:bg-ink hover:text-white'
                    }`}
                >
                    <span className="relative z-10 font-bold tracking-widest flex items-center gap-3">
                        <Play size={16} fill="currentColor" />
                        ACTION
                    </span>
                </button>
            </div>
        )}

        {/* STEP 2: INPUT (THE SCENE) */}
        {step === 'input' && (
            <div className="max-w-2xl mx-auto animate-fade-in-up">
                <div className="mb-8 flex items-center gap-4 text-xs font-mono uppercase tracking-widest opacity-50">
                    <span className="border px-2 py-1 rounded">Scene 1</span>
                    <span>Set The Scene</span>
                </div>

                <h2 className={`text-3xl font-serif font-bold mb-6 ${textColor}`}>
                    你現在卡在哪一場戲裡？
                </h2>
                <p className={`text-sm mb-8 leading-relaxed ${mutedText}`}>
                    描述你當下的困境、抉擇，或是那個讓你反覆感到「卡住」的情節。<br/>
                    不用寫得漂亮，誠實就好。
                </p>

                <div className={`relative p-1 rounded-2xl transition-all duration-300 ${
                    isDark ? 'bg-gradient-to-b from-slate-700 to-slate-900 focus-within:from-gold focus-within:to-slate-800' : 'bg-gradient-to-b from-gray-200 to-white focus-within:from-muted-gold focus-within:to-white'
                }`}>
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="例如：我想離職去創業，但又怕失敗..."
                        aria-label="Enter your current situation or dilemma"
                        className={`w-full h-48 p-6 rounded-xl resize-none outline-none font-serif text-lg leading-relaxed ${
                            isDark ? 'bg-slate-900 text-slate-200' : 'bg-white text-ink'
                        }`}
                        autoFocus
                    />
                </div>

                <div className="mt-8 flex justify-end">
                    <button 
                        onClick={handleGenerate}
                        disabled={!userInput.trim()}
                        aria-label="Generate Script"
                        className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold transition-all ${
                            isDark 
                                ? 'bg-gold text-black hover:bg-yellow-400 disabled:opacity-30 disabled:cursor-not-allowed' 
                                : 'bg-ink text-white hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed'
                        }`}
                    >
                        <Sparkles size={18} />
                        生成劇本 (Generate Script)
                    </button>
                </div>
            </div>
        )}

        {/* STEP 3: ANALYZING (THE LOADING) */}
        {step === 'analyzing' && (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8 animate-fade-in">
                <div className="w-48 h-48">
                    <CognitiveCycle theme={theme} currentStep={analyzeStep} />
                </div>
                <div>
                    <h3 className={`text-xl font-serif font-bold mb-2 ${textColor}`}>導演正在讀本...</h3>
                    <p className={`font-mono text-xs uppercase tracking-widest opacity-60`}>Running Cognitive Simulation</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{animationDelay: '0s'}}></div>
                   <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{animationDelay: '0.2s'}}></div>
                   <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
            </div>
        )}

        {/* STEP 4: RESULT (THE SCRIPT) */}
        {step === 'result' && (
            <div className="animate-fade-in-up pb-20">
                {/* Header */}
                <div className="flex justify-between items-end mb-12 border-b border-dashed border-opacity-30 pb-4 border-current">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Feather size={16} className={isDark ? 'text-gold' : 'text-muted-gold'} />
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">The Script</span>
                        </div>
                        <h2 className={`text-2xl md:text-3xl font-serif font-bold ${textColor}`}>
                            {scriptType === 'creator' ? '創造者的劇本' : 
                             scriptType === 'guardian' ? '守護者的劇本' :
                             scriptType === 'explorer' ? '探索者的劇本' :
                             scriptType === 'sage' ? '智者的劇本' :
                             scriptType === 'warrior' ? '戰士的劇本' :
                             scriptType === 'lover' ? '愛人的劇本' :
                             scriptType === 'career' ? '開拓者的劇本' : 
                             scriptType === 'relationship' ? '修復者的劇本' : '覺醒者的劇本'}
                        </h2>
                    </div>
                    <button 
                        onClick={() => setStep('input')}
                        aria-label="Rewrite Script"
                        className={`p-2 rounded-full hover:bg-current hover:bg-opacity-10 transition-colors`}
                        title="Rewrite"
                    >
                        <RefreshCw size={20} />
                    </button>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* Script Body */}
                    <div className="lg:col-span-8 space-y-12">
                        
                        {/* Character Sheet */}
                        <div className={`p-8 rounded-3xl border flex flex-col md:flex-row gap-8 ${
                            isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-50 mb-1">
                                    <User size={14} /> Protagonist
                                </div>
                                <h3 className={`text-xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    {currentScript.role}
                                </h3>
                            </div>
                            <div className={`w-px ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`}></div>
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-50 mb-1">
                                    <Drama size={14} /> Antagonist (Shadow)
                                </div>
                                <h3 className={`text-xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                                    {currentScript.shadow}
                                </h3>
                            </div>
                        </div>

                        {/* Dialogue / Plot */}
                        <div className={`font-serif text-lg md:text-xl leading-loose space-y-6 pl-4 md:pl-8 border-l-2 ${
                            isDark ? 'border-gold text-slate-300' : 'border-muted-gold text-gray-700'
                        }`}>
                            <p>
                                <span className="font-bold text-xs font-mono block opacity-50 mb-1">SCENE SETUP</span>
                                {currentScript.line1}
                            </p>
                            <p>
                                {currentScript.line2}
                            </p>
                            <p className="pt-4">
                                <span className="font-bold text-xs font-mono block opacity-50 mb-1">THE CONFLICT</span>
                                現在，聚光燈打在你身上。劇本在這裡分岔了...
                            </p>
                        </div>

                        {/* Choices */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <button
                                onMouseEnter={() => setHoveredChoice('A')}
                                onMouseLeave={() => setHoveredChoice(null)}
                                onFocus={() => setHoveredChoice('A')}
                                onBlur={() => setHoveredChoice(null)}
                                className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer outline-none focus-visible:ring-2 ${
                                    isDark ? 'bg-slate-800 border-slate-700 hover:border-red-500/50' : 'bg-gray-50 border-gray-200 hover:border-red-300'
                                }`}
                                aria-label="Choose Option A: Path of Comfort"
                            >
                                <h4 className="font-bold mb-3 opacity-60">劇本 A (Path of Comfort)</h4>
                                <p className="text-sm leading-relaxed">{currentScript.choiceA}</p>
                            </button>
                            <button
                                onMouseEnter={() => setHoveredChoice('B')}
                                onMouseLeave={() => setHoveredChoice(null)}
                                onFocus={() => setHoveredChoice('B')}
                                onBlur={() => setHoveredChoice(null)}
                                className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer outline-none focus-visible:ring-2 ${
                                    isDark ? 'bg-gold/10 border-gold/50 hover:border-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]' : 'bg-amber-50 border-muted-gold/50 hover:border-muted-gold hover:shadow-lg'
                                }`}
                                aria-label="Choose Option B: Path of Integrity"
                            >
                                <h4 className={`font-bold mb-3 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>劇本 B (Path of Integrity)</h4>
                                <p className="text-sm leading-relaxed font-medium">{currentScript.choiceB}</p>
                            </button>
                        </div>

                    </div>

                    {/* Sidebar: The Arc (Interactive) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className={`p-8 rounded-3xl text-center transition-colors duration-500 ${
                            isDark ? 'bg-slate-950 border border-slate-800' : 'bg-white border border-gray-200 shadow-lg'
                        }`}>
                            {/* VISUAL REPLACEMENT: ShadowSynthesis */}
                            <div className="w-full aspect-square max-w-[200px] mx-auto mb-6 relative">
                                <ShadowSynthesis 
                                    theme={theme} 
                                    displacement={hoveredChoice === 'A' ? 80 : 20} 
                                    merge={hoveredChoice === 'B'} 
                                />
                            </div>
                            
                            <h4 className={`font-serif font-bold text-lg mb-2 transition-colors ${
                                hoveredChoice === 'B' ? (isDark ? 'text-gold' : 'text-muted-gold') : (hoveredChoice === 'A' ? 'text-red-500' : textColor)
                            }`}>
                                {hoveredChoice === 'A' ? "分裂 (Separation)" : hoveredChoice === 'B' ? "圓壹 (Integrity)" : currentScript.arc}
                            </h4>
                            <p className="text-xs opacity-60 leading-relaxed min-h-[40px]">
                                {hoveredChoice === 'A' 
                                    ? "選擇迴避將導致陰影被推向外側，形成未完成的弧度。"
                                    : hoveredChoice === 'B'
                                        ? "選擇承擔將使分離的「伊」回歸，完成靈魂的圓。"
                                        : "將游標移至劇本選項，預覽你的靈魂形狀變化。"}
                            </p>
                        </div>

                        <div className={`p-6 rounded-2xl border-l-4 ${
                            isDark ? 'bg-blue-900/10 border-blue-500' : 'bg-blue-50 border-blue-400'
                        }`}>
                            <div className="flex items-center gap-2 mb-3">
                                <Clapperboard size={16} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Director's Note</span>
                            </div>
                            <p className="text-sm leading-relaxed italic font-serif opacity-90">
                                "{currentScript.directorNote}"
                            </p>
                        </div>

                        {/* 深化內容區塊 */}
                        {currentEnhancement && (
                            <div className="space-y-8 mt-12">
                                {/* 案例研究 */}
                                <div className={`p-6 rounded-2xl border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg ${
                                    isDark ? 'bg-blue-900/20 border-blue-500' : 'bg-blue-50 border-blue-400'
                                }`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <BookOpen size={24} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                                        <h4 className={`font-bold text-xl ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>案例研究 (Case Study)</h4>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${mutedText}`}>
                                        {currentEnhancement.caseStudy}
                                    </p>
                                </div>

                                {/* 行動步驟 */}
                                <div className={`p-6 rounded-2xl border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg ${
                                    isDark ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-400'
                                }`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Lightbulb size={24} className={isDark ? 'text-green-400' : 'text-green-600'} />
                                        <h4 className={`font-bold text-xl ${isDark ? 'text-green-400' : 'text-green-600'}`}>行動步驟 (Action Steps)</h4>
                                    </div>
                                    <ol className="space-y-3">
                                        {currentEnhancement.actionSteps.map((step, idx) => (
                                            <li key={idx} className={`text-sm leading-relaxed flex gap-3 ${mutedText}`}>
                                                <span className={`font-bold ${isDark ? 'text-gold' : 'text-muted-gold'}`}>{idx + 1}.</span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* 反思問題 */}
                                <div className={`p-6 rounded-2xl border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg ${
                                    isDark ? 'bg-orange-900/20 border-orange-500' : 'bg-orange-50 border-orange-400'
                                }`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <HelpCircle size={24} className={isDark ? 'text-orange-400' : 'text-orange-600'} />
                                        <h4 className={`font-bold text-xl ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>反思問題 (Reflection Questions)</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {currentEnhancement.reflectionQuestions.map((q, idx) => (
                                            <li key={idx} className={`text-sm leading-relaxed italic ${mutedText}`}>
                                                「{q}」
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CIP 應用 */}
                                <div className={`p-6 rounded-2xl border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg ${
                                    isDark ? 'bg-purple-900/20 border-purple-500' : 'bg-purple-50 border-purple-400'
                                }`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Link2 size={24} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                                        <h4 className={`font-bold text-xl ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>CIP 應用 (CIP Application)</h4>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${mutedText}`}>
                                        {currentEnhancement.cipApplication}
                                    </p>
                                </div>

                                {/* 相關法則 */}
                                <div className={`p-4 rounded-xl border ${
                                    isDark ? 'bg-slate-900/30 border-slate-700' : 'bg-gray-50 border-gray-200'
                                }`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-mono uppercase tracking-widest opacity-60">相關法則</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {currentEnhancement.relatedPrinciples.map((principle, idx) => (
                                            <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                isDark ? 'bg-slate-800 text-slate-300' : 'bg-white text-gray-700 border border-gray-200'
                                            }`}>
                                                {principle}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <button 
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                isDark 
                                    ? 'bg-white text-black hover:bg-gray-200' 
                                    : 'bg-black text-white hover:bg-gray-800'
                            }`}
                            aria-label="Download Full Script as PDF"
                        >
                            <Download size={16} />
                            下載完整劇本 (PDF)
                        </button>
                    </div>

                </div>
            </div>
        )}
    </div>
  );
};

export default UniverseScript;
