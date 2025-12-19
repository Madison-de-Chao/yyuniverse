
import React, { useState } from 'react';
import { Theme } from '../types';
import { Brain, Layers, Activity, AlertTriangle, Search, CheckCircle2, User, Shield, Heart, MessageCircle, Zap, Anchor, Compass, Scale, Lock, Mic, RefreshCw, Target, Globe, ArrowRight, Box } from 'lucide-react';
import { CognitiveCycle } from '../components/Visuals';
import { StructureToolsMap } from '../components/Infographics';

interface SystemZoneBProps {
  theme: Theme;
}

// --- DATA: 8 Cognitive Routines (Steps) ---
const COGNITIVE_ROUTINES = [
  { 
    id: '01', title: '保持懷疑', sub: 'Doubt', icon: AlertTriangle,
    question: '我現在的感覺/想法，有沒有可能只是慣性？',
    defense: '對抗「自動駕駛」模式',
    desc: '質疑當下的想法或感覺，是否僅是情性或舊有創傷的反應。',
    element: '水 Water'
  },
  { 
    id: '02', title: '預估耗損', sub: 'Cost', icon: Activity,
    question: '如果照現在的方式一直做下去，一年後的我會變成什麼樣？',
    defense: '對抗「短視近利」',
    desc: '評估若照此模式持續一年，自己將付出什麼長期代價。',
    element: '土 Earth'
  },
  { 
    id: '03', title: '超額準備', sub: 'Preparation', icon: Layers,
    question: '我知道的夠多嗎？有沒有必要再確認一下？',
    defense: '對抗「盲目自信」',
    desc: '確認是否掌握足夠資訊，並思考備用方案以應對變化。',
    element: '金 Metal'
  },
  { 
    id: '04', title: '本質拆解', sub: 'Deconstruct', icon: Box, // Changed Icon to Box/Cube metaphor
    question: '我現在缺什麼資訊？這件事的結構到底是什麼？',
    defense: '對抗「混亂」',
    desc: '將複雜問題拆解為數個獨立的小事件，逐一檢視。',
    element: '金 Metal'
  },
  { 
    id: '05', title: '綜合結論', sub: 'Conclude', icon: Shield, // Reordered to match image if needed, but standard logic often puts conclude last. Image shows Conclude at step 5 position visually? No, let's stick to standard flow but update descriptions.
    question: '這件事教了我什麼？如果再來一次，我會怎麼做？',
    defense: '對抗「經驗流失」',
    desc: '歸納出簡單原則，納入個人思維資料庫。',
    element: '金 Gold'
  },
  { 
    id: '06', title: '自我反省', sub: 'Reflect', icon: User,
    question: '這件事裡，有多少比例是跟我的習慣、恐懼、執著有關？',
    defense: '對抗「責任外包」',
    desc: '釐清事件中有多少比例，源於自己的習慣、恐懼或執著。',
    element: '水 Water'
  },
  { 
    id: '07', title: '思維重構', sub: 'Reconstruct', icon: Brain,
    question: '如果我允許自己不是完美的，那我現在可以怎麼調整？',
    defense: '對抗「完美主義」',
    desc: '承認原有想法的不足並調整方向，而非固執己見。',
    element: '木 Wood'
  },
  { 
    id: '08', title: '自我驗證', sub: 'Verify', icon: CheckCircle2,
    question: '有沒有可以拿這個想法去丟給人的地方？他們會怎麼看？',
    defense: '對抗「自我中心」',
    desc: '尋求外部客觀觀點，用以修正自己看不到的盲點。',
    element: '火 Fire'
  },
];

// --- DATA: 3 Major Frameworks (New Grouping) ---
const ANALYSIS_FRAMEWORKS = [
  {
    id: 'layer-calibration',
    title: '三層邏輯校準',
    sub: '3-Layer Logic Calibration',
    icon: Layers,
    desc: '將混亂的衝突依序拆解為「情緒層」、「語言層」、「結構層」來釐清。',
    action: '分離情緒與事實',
  },
  {
    id: 'systems-thinking',
    title: '系統思考',
    sub: 'Systems Thinking',
    icon: Globe,
    desc: '分析系統中各角色的行為如何互相影響，看見模式而非歸咎單一壞人。',
    action: '看見互動循環',
  },
  {
    id: 'foundation-reconstruction',
    title: '地基重建模型',
    sub: 'Foundation Reconstruction',
    icon: RefreshCw,
    desc: '處理反覆發生的問題時，回頭檢視並重建造成問題的底層核心信念。',
    action: '挖掘深層信念',
  },
];

// --- DATA: Structural Arsenal (Remaining Tools) ---
const STRUCTURAL_TOOLS = [
  {
    title: '通則優先',
    sub: 'Principle First',
    icon: Scale,
    desc: '因站地用少數例外來歪曲一個亂勝存在的規律，挑跟自己必須面對問題。',
  },
  {
    title: '思維定位',
    sub: 'Cognitive Positioning',
    icon: Compass,
    desc: '看清自己現在是站在「受害者」、「拯救者」還是「責任者」的位置？',
  },
  {
    title: '語言煉金',
    sub: 'Linguistic Alchemy',
    icon: Mic,
    desc: '把「說不清楚、說出來會爆炸」的情緒原礦，提煉成結構溝通金屬。',
  },
  {
    title: '反例測試',
    sub: 'Counter-Example',
    icon: Target,
    desc: '在相信一個絕對結論前，主動尋找反例來測試它。',
  },
];

export const SystemZoneB: React.FC<SystemZoneBProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm';

  const [activeRoutineId, setActiveRoutineId] = useState<string>('01');
  const activeRoutine = COGNITIVE_ROUTINES.find(r => r.id === activeRoutineId) || COGNITIVE_ROUTINES[0];
  const [activeLayer, setActiveLayer] = useState<'emotion' | 'language' | 'structure' | null>(null);

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-6xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* HEADER */}
      <header className="mb-20 animate-fade-in text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-xs font-mono uppercase tracking-widest ${
          isDark ? 'border-gold/30 text-gold bg-gold/5' : 'border-muted-gold/30 text-muted-gold bg-amber-50'
        }`}>
          <Brain size={14} />
          Zone B: Structure Layer
        </div>
        <h1 className={`font-serif text-4xl md:text-6xl font-bold mb-6 ${textColor}`}>
          結構層核心工具
        </h1>
        <p className={`text-lg font-serif italic ${mutedText} max-w-3xl mx-auto`}>
          介紹《默默超思維系統》中用於拆解問題、重建理解的核心操作工具與思考框架。
        </p>

        <StructureToolsMap theme={theme} />
      </header>

      {/* TOOL 01: 8-STEP CYCLE */}
      <section className="mb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className={`font-serif text-3xl font-bold ${textColor}`}>核心流程：思維八階循環</h2>
          <div className={`h-px flex-1 ml-6 ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Nav & Visual */}
          <div className={`lg:col-span-1 rounded-3xl border p-8 flex flex-col items-center ${cardBg}`}>
             <div className="w-full max-w-[240px] mb-8 transform transition-transform hover:scale-105 duration-500">
               <CognitiveCycle theme={theme} currentStep={parseInt(activeRoutineId) - 1} />
             </div>
             
             <div className="w-full space-y-1 overflow-y-auto max-h-[400px] custom-scrollbar pr-2">
               {COGNITIVE_ROUTINES.map((step) => (
                 <button
                   key={step.id}
                   onClick={() => setActiveRoutineId(step.id)}
                   className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-all ${
                     activeRoutineId === step.id
                       ? (isDark ? 'bg-slate-800 text-gold border border-gold/30' : 'bg-gray-100 text-muted-gold border border-muted-gold/30')
                       : (isDark ? 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700')
                   }`}
                 >
                   <div className="flex items-center gap-3">
                     <span className="font-mono text-xs opacity-50 w-4">{step.id}</span>
                     <span className="font-bold text-sm">{step.title}</span>
                   </div>
                   {activeRoutineId === step.id && <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-gold' : 'bg-muted-gold'}`}></div>}
                 </button>
               ))}
             </div>
          </div>

          {/* Detail Card (Interactive) */}
          <div className={`lg:col-span-2 rounded-3xl border p-8 md:p-12 flex flex-col relative overflow-hidden transition-all duration-500 ${
            isDark ? 'bg-slate-900 border-gold/30 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'bg-white border-muted-gold/30 shadow-xl'
          }`}>
            {/* Background Icon */}
            <div className={`absolute -bottom-12 -right-12 opacity-5 transition-transform duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
              <activeRoutine.icon size={400} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl shadow-lg ${isDark ? 'bg-gold/10 text-gold border border-gold/20' : 'bg-amber-50 text-muted-gold border border-muted-gold/20'}`}>
                  <activeRoutine.icon size={40} />
                </div>
                <div>
                  <h3 className={`text-4xl font-serif font-bold ${textColor}`}>{activeRoutine.title}</h3>
                  <p className={`font-mono text-sm uppercase tracking-widest mt-1 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                    {activeRoutine.sub}
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                    <Search size={16} /> 核心提問 (Core Question)
                  </h4>
                  <p className={`text-2xl md:text-3xl font-serif leading-relaxed ${textColor}`}>
                    「{activeRoutine.question}」
                  </p>
                </div>

                <div className={`p-8 rounded-2xl border backdrop-blur-md ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50/80 border-gray-200'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg mt-1 ${isDark ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'}`}>
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                        防禦目標
                      </h4>
                      <p className={`text-lg font-medium mb-3 ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
                        {activeRoutine.defense}
                      </p>
                      <p className={`text-base leading-relaxed ${mutedText}`}>
                        {activeRoutine.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOL 02: THE 3 MAJOR FRAMEWORKS (Reorganized) */}
      <section className="mb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className={`font-serif text-3xl font-bold ${textColor}`}>三大分析框架</h2>
          <div className={`h-px flex-1 ml-6 ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {ANALYSIS_FRAMEWORKS.map((fw, idx) => (
                <div key={fw.id} className={`p-8 rounded-3xl border flex flex-col items-center text-center transition-all hover:-translate-y-2 ${cardBg}`}>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg ${
                        isDark ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 border border-blue-100'
                    }`}>
                        <fw.icon size={40} />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{fw.title}</h3>
                    <p className="text-xs font-mono uppercase tracking-wider opacity-50 mb-6">{fw.sub}</p>
                    <p className={`text-sm leading-relaxed mb-6 ${mutedText}`}>
                        {fw.desc}
                    </p>
                    <div className={`mt-auto text-xs font-bold uppercase tracking-widest px-3 py-1 rounded border ${
                        isDark ? 'border-blue-500/50 text-blue-400' : 'border-blue-200 text-blue-700'
                    }`}>
                        Action: {fw.action}
                    </div>
                </div>
            ))}
        </div>

        {/* 3-Layer Interactive Demo */}
        <div className={`mt-12 rounded-3xl border p-8 md:p-12 flex flex-col items-center ${cardBg}`}>
          <h3 className={`font-serif text-2xl font-bold mb-8 ${textColor}`}>三層邏輯校準：互動演示</h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 w-full max-w-3xl">
            <button
              onClick={() => setActiveLayer('emotion')}
              className={`flex-1 min-w-[140px] py-4 px-6 rounded-xl border-2 font-bold transition-all duration-300 flex flex-col items-center gap-2 group ${
                activeLayer === 'emotion'
                  ? 'border-red-500 bg-red-500 text-white shadow-xl scale-105'
                  : `border-red-500/30 text-red-500 hover:bg-red-500/10 ${isDark ? 'hover:border-red-500' : ''}`
              }`}
            >
              <Heart size={24} />
              <span>情緒層</span>
            </button>
            <button
              onClick={() => setActiveLayer('language')}
              className={`flex-1 min-w-[140px] py-4 px-6 rounded-xl border-2 font-bold transition-all duration-300 flex flex-col items-center gap-2 group ${
                activeLayer === 'language'
                  ? 'border-yellow-500 bg-yellow-500 text-black shadow-xl scale-105'
                  : `border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 ${isDark ? 'hover:border-yellow-500' : ''}`
              }`}
            >
              <MessageCircle size={24} />
              <span>語言層</span>
            </button>
            <button
              onClick={() => setActiveLayer('structure')}
              className={`flex-1 min-w-[140px] py-4 px-6 rounded-xl border-2 font-bold transition-all duration-300 flex flex-col items-center gap-2 group ${
                activeLayer === 'structure'
                  ? 'border-blue-500 bg-blue-500 text-white shadow-xl scale-105'
                  : `border-blue-500/30 text-blue-500 hover:bg-blue-500/10 ${isDark ? 'hover:border-blue-500' : ''}`
              }`}
            >
              <Zap size={24} />
              <span>結構層</span>
            </button>
          </div>

          <div className="w-full max-w-2xl text-center min-h-[120px]">
            {activeLayer === 'emotion' && (
              <p className={`text-lg font-serif animate-fade-in ${isDark ? 'text-red-200' : 'text-red-800'}`}>
                「我很受傷。我覺得我的需求被你忽略了。」(感受)
              </p>
            )}
            {activeLayer === 'language' && (
              <p className={`text-lg font-serif animate-fade-in ${isDark ? 'text-yellow-200' : 'text-yellow-800'}`}>
                「你這個人真的很自私！」(標籤化語言)
              </p>
            )}
            {activeLayer === 'structure' && (
              <p className={`text-lg font-serif animate-fade-in ${isDark ? 'text-blue-200' : 'text-blue-800'}`}>
                「追-逃」模式：A 索取關注失敗 → A 攻擊 → B 冷處理 → A 更憤怒。
              </p>
            )}
            {!activeLayer && <p className="opacity-50">點擊上方按鈕，練習分離邏輯層次。</p>}
          </div>
        </div>
      </section>

      {/* TOOL 03: ADDITIONAL ARSENAL */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className={`font-serif text-3xl font-bold ${textColor}`}>更多結構工具</h2>
          <div className={`h-px flex-1 ml-6 ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRUCTURAL_TOOLS.map((tool, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800 hover:border-gold/30' 
                : 'bg-white border-gray-200 hover:border-muted-gold/50'
            }`}>
              <div className={`mb-4 p-3 rounded-xl w-fit ${
                isDark ? 'bg-slate-800 text-gold' : 'bg-gray-100 text-muted-gold'
              }`}>
                <tool.icon size={24} />
              </div>
              
              <h3 className={`font-serif text-lg font-bold mb-1 ${textColor}`}>
                {tool.title}
              </h3>
              <p className={`font-mono text-[10px] uppercase tracking-wider mb-3 opacity-50`}>
                {tool.sub}
              </p>
              
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SystemZoneB;
