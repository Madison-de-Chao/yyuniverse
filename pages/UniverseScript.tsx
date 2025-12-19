
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Play, Clapperboard, User, Drama, Sparkles, Download, RefreshCw, Feather } from 'lucide-react';
import { ShadowSynthesis, CognitiveCycle } from '../components/Visuals';

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
    }
};

export const UniverseScript: React.FC<UniverseScriptProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  
  const [step, setStep] = useState<'intro' | 'input' | 'analyzing' | 'result'>('intro');
  const [userInput, setUserInput] = useState('');
  const [scriptType, setScriptType] = useState<'career' | 'relationship' | 'identity'>('identity');
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
        // Simple keyword detection to choose template
        if (userInput.includes('工作') || userInput.includes('職') || userInput.includes('錢') || userInput.includes('業')) {
            setScriptType('career');
        } else if (userInput.includes('愛') || userInput.includes('情') || userInput.includes('他') || userInput.includes('她')) {
            setScriptType('relationship');
        } else {
            setScriptType('identity');
        }
        setStep('result');
    }, 2500);
  };

  const currentScript = SCRIPT_TEMPLATES[scriptType];

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
                            {scriptType === 'career' ? '開拓者的劇本' : scriptType === 'relationship' ? '修復者的劇本' : '覺醒者的劇本'}
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
