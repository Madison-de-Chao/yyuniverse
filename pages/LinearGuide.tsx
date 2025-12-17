
import React, { useRef } from 'react';
import { PageId, Theme } from '../types';
import { ArrowDown, Circle, Shield } from 'lucide-react';
import { UnityField, DualCore, CognitiveCycle } from '../components/Visuals';

interface LinearGuideProps {
  theme: Theme;
  onNavigate: (page: PageId) => void;
}

export const LinearGuide: React.FC<LinearGuideProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';
  
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm';

  return (
    <div className={`min-h-screen pt-20 pb-32 max-w-4xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* Header */}
      <div className="text-center mb-24 animate-fade-in">
        <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-6 ${
          isDark ? 'text-gold' : 'text-muted-gold'
        }`}>
          跟著默默超一起想
        </h1>
        <p className={`font-mono text-sm ${mutedText}`}>Thinking with MOMO: A Guided Tour</p>
        <div className="mt-12 mx-auto w-1 h-16 border-l border-dashed border-current opacity-30"></div>
        <button 
          onClick={() => scrollTo(sectionRef1)}
          className={`mt-4 p-3 rounded-full animate-bounce ${
            isDark ? 'bg-slate-800 text-gold' : 'bg-gray-100 text-muted-gold'
          }`}
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Section 1: Origin */}
      <div ref={sectionRef1} className="min-h-[80vh] flex flex-col justify-center mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-1 bg-gold`}></div>
          <h2 className="text-gold font-mono tracking-widest">PHASE 1: ORIGIN</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`font-serif text-4xl font-bold mb-6 ${textColor}`}>
              孤立的自我 <br/>vs 連結的整體
            </h3>
            <div className={`p-6 rounded-2xl border ${cardBg}`}>
              <p className="text-lg leading-relaxed mb-6">
                我們正活在一個「我」被放到最大，但「完整性」被放到最小的時代。
              </p>
              <p className={`leading-relaxed text-sm ${mutedText}`}>
                大家都在修自己、顧自己、為自己努力，卻很少有人問：「如果人生本來是一個圓，我只選我喜歡的那一半過，剩下那一半誰來走？」
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className={`p-8 rounded-full ${isDark ? 'bg-slate-900' : 'bg-gray-50'} shadow-2xl`}>
              <UnityField theme={theme} />
              <p className="text-center text-xs font-mono mt-4 opacity-50">THE NETWORK OF SOULS</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollTo(sectionRef2)}
          className={`self-center mt-16 flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
            isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          那怎麼辦？ <ArrowDown size={16} />
        </button>
      </div>

      {/* Section 2: System */}
      <div ref={sectionRef2} className="min-h-[80vh] flex flex-col justify-center mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-1 bg-blue-500`}></div>
          <h2 className="text-blue-500 font-mono tracking-widest">PHASE 2: SYSTEM</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
             <div className={`w-full p-8 rounded-2xl ${isDark ? 'bg-slate-900' : 'bg-gray-50'} shadow-2xl`}>
              <DualCore theme={theme} />
              <p className="text-center text-xs font-mono mt-4 opacity-50">HUMAN x AI CO-INTELLIGENCE</p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className={`font-serif text-4xl font-bold mb-6 ${textColor}`}>
              你需要思維的骨架
            </h3>
            <div className={`p-6 rounded-2xl border mb-6 ${cardBg}`}>
              <p className="text-lg leading-relaxed">
                當 AI 越來越強，人類要靠什麼站穩？<br/>
                <span className={isDark ? 'text-gold' : 'text-muted-gold'}>答案是：價值選擇與承擔。</span>
              </p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className={`mt-1 p-1 rounded ${isDark ? 'bg-cinnabar/20 text-cinnabar' : 'bg-red-100 text-red-600'}`}>
                  <Shield size={16} />
                </span>
                <div>
                  <strong className={isDark ? 'text-slate-200' : 'text-ink'}>人類 (Yin)</strong>
                  <p className={`text-sm ${mutedText}`}>負責價值選擇、承擔痛苦與意義。這是 AI 做不到的。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className={`mt-1 p-1 rounded ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Circle size={16} />
                </span>
                <div>
                  <strong className={isDark ? 'text-slate-200' : 'text-ink'}>AI (Yang)</strong>
                  <p className={`text-sm ${mutedText}`}>負責結構拆解、去偏差、邏輯鏡照。這是你的輔助。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <button 
          onClick={() => scrollTo(sectionRef3)}
          className={`self-center mt-16 flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
            isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          具體怎麼做？ <ArrowDown size={16} />
        </button>
      </div>

      {/* Section 3: Transformation */}
      <div ref={sectionRef3} className="min-h-[80vh] flex flex-col justify-center mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-1 bg-jade`}></div>
          <h2 className="text-jade font-mono tracking-widest">PHASE 3: ACTION</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`font-serif text-4xl font-bold mb-6 ${textColor}`}>
              思維八階循環
            </h3>
            <div className={`p-6 rounded-2xl border mb-6 ${cardBg}`}>
              <p className="text-lg leading-relaxed">
                不要只憑直覺做決定。這是一個強制你「完整思考」的工具。
                <br/>每一次循環，都是為你的思維避險基金存入一筆資產。
              </p>
            </div>
            <ul className="space-y-3 font-mono text-sm opacity-80">
              <li className="flex items-center gap-3">1. 懷疑 (Doubt)</li>
              <li className="flex items-center gap-3">2. 耗損 (Cost)</li>
              <li className="flex items-center gap-3">3. 準備 (Prep)</li>
              <li className="flex items-center gap-3">... 直到結論</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
             <div className={`w-64 h-64 rounded-full ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'} flex items-center justify-center`}>
                <CognitiveCycle theme={theme} currentStep={2} />
             </div>
          </div>
        </div>

        <button 
          onClick={() => scrollTo(sectionRef4)}
          className={`self-center mt-16 flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
            isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          我想試試看 <ArrowDown size={16} />
        </button>
      </div>

      {/* Section 4: Application */}
      <div ref={sectionRef4} className="min-h-[60vh] flex flex-col justify-center text-center">
        <h3 className={`font-serif text-3xl font-bold mb-12 ${textColor}`}>現在，選擇你的入口</h3>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto w-full">
          <button 
            onClick={() => onNavigate('logic')}
            className={`p-8 rounded-2xl border transition-all group text-left ${
              isDark 
                ? 'bg-slate-900 border-gold/30 hover:bg-gold/10' 
                : 'bg-white border-muted-gold/30 hover:bg-amber-50'
            }`}
          >
            <div className="mb-4 text-gold">
              <CognitiveCycle theme={theme} />
            </div>
            <span className={`block text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform ${
              isDark ? 'text-gold' : 'text-muted-gold'
            }`}>
              開始思維循環 &rarr;
            </span>
            <span className={`text-sm ${mutedText}`}>解決當下的困擾與決策</span>
          </button>

          <button 
            onClick={() => onNavigate('sanctuary')}
            className={`p-8 rounded-2xl border transition-all group text-left ${
              isDark 
                ? 'bg-slate-900 border-purple-500/30 hover:bg-purple-500/10' 
                : 'bg-white border-purple-300 hover:bg-purple-50'
            }`}
          >
            <div className="mb-4 text-purple-400">
               {/* Simple placeholder for Sanctuary icon */}
               <UnityField theme={theme} />
            </div>
            <span className={`block text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform ${
              isDark ? 'text-purple-400' : 'text-purple-700'
            }`}>
              進入虹靈御所 &rarr;
            </span>
            <span className={`text-sm ${mutedText}`}>探索命理結構與服務</span>
          </button>
        </div>
      </div>

    </div>
  );
};
