
import React from 'react';
import { Theme, PageId } from '../types';
import { Star, Activity, Map, Flame, Zap, Filter, Power } from 'lucide-react';
import { CityAbstract } from '../components/Visuals';

interface SanctuaryProps {
  theme: Theme;
  onNavigate?: (page: PageId) => void;
}

// --- ACTION TRIAD (Awaken, Filter, Empower) ---
const ACTION_TRIAD = [
  {
    title: '喚醒 (Awaken)',
    desc: '記得你原本會的事。喚醒不是灌輸，而是把光重新打開。每個靈魂本來就有完整的地圖，只是迷失在別人的路線上。',
    sub: 'Remembering',
    icon: Zap
  },
  {
    title: '篩選 (Filter)',
    desc: '在洪流中留住自己。資訊的世界像海，真正的智慧不是知道一切，而是知道什麼值得留下。拒絕不屬於你的節奏。',
    sub: 'Discernment',
    icon: Filter
  },
  {
    title: '賦能 (Empower)',
    desc: '讓主控權回到你手上。賦能的本質是「歸還」。不是我給你力量，而是幫你拿回你原本就有的權力。',
    sub: 'Restoration',
    icon: Power
  }
];

export const Sanctuary: React.FC<SanctuaryProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen pt-24 pb-32 px-4 max-w-6xl mx-auto ${textColor}`}>
      
      {/* HEADER */}
      <header className="text-center mb-16 animate-fade-in">
        <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-4 ${
          isDark ? 'text-purple-400' : 'text-purple-800'
        }`}>
          虹靈御所
        </h1>
        <p className={`font-mono tracking-widest mb-8 ${isDark ? 'text-purple-300/60' : 'text-purple-900/60'}`}>
          THE RAINBOW SANCTUARY
        </p>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className={`text-xl font-bold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
            「這一整套思維與宇宙觀的人類實驗站。」
          </h2>
          <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            這是一個「讓這套宇宙觀與思維系統可以在現實裡被用起來」的場域。<br/>
            虹靈御所不是一個「來這裡就會被拯救」的地方。<br/>
            比較像是：你帶著自己的故事進來，我們一起用工具和宇宙觀，把它看清楚，然後你帶著比較完整的自己走出去。
          </p>
        </div>
      </header>

      {/* CORE VALUE PROP */}
      <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
        <div className={`p-6 rounded-2xl border text-center ${cardBg}`}>
           <h3 className={`font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>看見自己的結構</h3>
           <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
             你帶著問題進來，不是被判命、被貼標籤，而是照出結構。
           </p>
        </div>
        <div className={`p-6 rounded-2xl border text-center ${cardBg}`}>
           <h3 className={`font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>看見自己的選擇</h3>
           <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
             用思維系統陪你拆開、重組。然後由你自己決定，你想怎麼走。
           </p>
        </div>
        <div className={`p-6 rounded-2xl border text-center ${cardBg}`}>
           <h3 className={`font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>看見自己的位置</h3>
           <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
             看見自己與宇宙、與他人、與 AI 的位置。
           </p>
        </div>
      </div>

      {/* ACTION TRIAD */}
      <section className="mb-32">
         <div className="text-center mb-12">
            <h2 className={`font-serif text-2xl font-bold ${textColor}`}>行動法則：喚醒 × 篩選 × 賦能</h2>
            <p className={`text-sm mt-2 font-mono ${mutedText}`}>The Operational Logic of Sanctuary</p>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {ACTION_TRIAD.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <div key={idx} className={`p-8 rounded-3xl border text-center flex flex-col items-center ${cardBg} hover:-translate-y-1 transition-transform`}>
                      <div className={`p-3 rounded-full mb-6 ${isDark ? 'bg-purple-900/20 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                        <Icon size={24} />
                      </div>
                      <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                          {action.sub}
                      </p>
                      <h3 className={`font-serif text-xl font-bold mb-4 ${textColor}`}>{action.title}</h3>
                      <p className={`text-sm leading-relaxed ${mutedText}`}>{action.desc}</p>
                  </div>
                );
            })}
         </div>
      </section>

      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-8 mb-32">
        {/* Service 1 */}
        <div className={`p-8 rounded-2xl border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 ${cardBg}`}>
          <div className={`mb-6 p-4 rounded-full ${isDark ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-50 text-purple-700'}`}>
            <Star size={32} />
          </div>
          <h3 className="font-serif text-xl font-bold mb-3">以命理為入口</h3>
          <p className={`text-sm mb-6 flex-grow ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            以命理、占星、塔羅為入口的閱讀與諮詢。
            當成照出結構的鏡子。
          </p>
          <button className={`w-full py-2 rounded-lg border transition-colors font-mono text-sm cursor-not-allowed opacity-50 ${
            isDark ? 'border-purple-500/50 text-purple-400' : 'border-purple-300 text-purple-800'
          }`}>
            預約 (Coming Soon)
          </button>
        </div>

        {/* Service 2 */}
        <div className={`p-8 rounded-2xl border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 ${cardBg} relative overflow-hidden`}>
          <div className="w-full mb-4 -mt-2">
            <CityAbstract theme={theme} />
          </div>
          <h3 className="font-serif text-xl font-bold mb-3 relative z-10">元壹宇宙劇本</h3>
          <p className={`text-sm mb-6 flex-grow relative z-10 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            把元壹宇宙做成故事、角色、預演劇本。
            提醒你每一個選擇是在畫人生的圓。
          </p>
          <button 
            onClick={() => onNavigate && onNavigate('script')}
            className={`w-full py-2 rounded-lg border transition-colors font-mono text-sm relative z-10 ${
            isDark ? 'border-blue-500/50 text-blue-400 hover:bg-blue-500/10' : 'border-blue-300 text-blue-800 hover:bg-blue-50'
          }`}>
            進入劇場 (Start Script)
          </button>
        </div>

        {/* Service 3 */}
        <div className={`p-8 rounded-2xl border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 ${cardBg}`}>
          <div className={`mb-6 p-4 rounded-full ${isDark ? 'bg-gold/20 text-gold' : 'bg-amber-50 text-muted-gold'}`}>
            <Activity size={32} />
          </div>
          <h3 className="font-serif text-xl font-bold mb-3">思維系統落地</h3>
          <p className={`text-sm mb-6 flex-grow ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            把默默超思維系統拆成可學的工具、課程、練習。
            把 AI 納入協作流程，讓它成為夥伴。
          </p>
          <button 
            onClick={() => onNavigate && onNavigate('system')}
            className={`w-full py-2 rounded-lg border transition-colors font-mono text-sm ${
            isDark ? 'border-gold/50 text-gold hover:bg-gold/10' : 'border-muted-gold text-muted-gold hover:bg-amber-50'
          }`}>
            進入訓練
          </button>
        </div>
      </div>

      {/* CANDLELIGHT COVENANT */}
      <div className="mt-32 max-w-2xl mx-auto text-center space-y-8 animate-pulse-slow relative">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none ${isDark ? 'bg-gold' : 'bg-orange-400'}`}></div>
          <Flame size={32} className={`mx-auto relative z-10 ${isDark ? 'text-gold' : 'text-orange-500'}`} />
          <h3 className="text-2xl font-serif font-bold relative z-10">燭光之約</h3>
          <p className={`text-lg leading-loose font-serif italic relative z-10 ${mutedText}`}>
            「燃燒並不是消失，而是一種翻譯——它把存在翻譯成光。<br/>
            那光會穿越時間，穿過灰燼、穿過忘記，依然在每一個願意誠實活著的靈魂裡閃爍。」
          </p>
          <div className="pt-8 border-t border-dashed border-current opacity-30 relative z-10"></div>
          <p className="text-xs font-mono uppercase tracking-widest opacity-60 relative z-10">
            Thank you for choosing to light your light.
          </p>
      </div>
    </div>
  );
};
