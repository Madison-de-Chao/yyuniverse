

import React, { useState } from 'react';
import { Theme } from '../types';
import { Zap, ToggleLeft, ToggleRight, Brain, AlertOctagon, RefreshCw, Bug, Star } from 'lucide-react';
import { BlindSpotMap } from '../components/Infographics';

interface SystemZoneAProps {
  theme: Theme;
}

const SCENARIOS = [
  {
    id: 0,
    bugId: '01',
    isCore: true,
    title: '時態錯位',
    subtitle: 'Time Dislocation',
    desc: '用現在的理智去覆蓋、替換過去的自己，使當時的真實感受被忽略。',
    partnerMsg: '這件事你好像一直放不下，每次提到你都很激動。',
    userMsg: '哪有！我早就沒事了！我現在過得很好啊！那種小事根本傷不到我，我才不是那種脆弱的人！',
    bugs: [
      { tag: '時態錯位', color: 'red', desc: '用現在的自己抹掉過去的錯與痛' },
      { tag: '防衛反應', color: 'yellow', desc: '否認受傷' }
    ],
    fix: '「其實提到這件事我還是會激動，因為那個痛在當時真的很真實。雖然我現在過得很好，但不代表那個傷口不存在。我願意承認它還在那裡。」'
  },
  {
    id: 1,
    bugId: '02',
    isCore: true,
    title: '特例否定通則',
    subtitle: 'Exception Override',
    desc: '因站地用少數例外來歪曲一個亂勝存在的規律，挑跟自己必須面對問題。',
    partnerMsg: '我們是不是該談談遲到的問題？最近十次約會你遲到了八次。',
    userMsg: '哪有！上個月去看電影那次我不是提早十分鐘到嗎？你怎麼都只看我不好的時候，不看我好的時候？',
    bugs: [
      { tag: '特例否定通則', color: 'red', desc: '用 1 次例外否定 9 次規律' },
      { tag: '防衛反應', color: 'purple', desc: '感到被攻擊而反擊' }
    ],
    fix: '「你是對的。雖然我有提早過，但數據顯示我大部份時間確實都遲到。我們來談談怎麼改善這個長期模式。」'
  },
  {
    id: 2,
    bugId: '03',
    isCore: true,
    title: '防衛反應優先',
    subtitle: 'Defensive Priority',
    desc: '感覺可能被否定時，盲目啟動變為自我保護，導致無法處理訊息內容。',
    partnerMsg: '我覺得這個方案的風險評估部分，可能需要再多一點數據支持。',
    userMsg: '所以我做的功課都不算數？我熬夜三天做這個，你現在一句話就要否定全部？你自己來做啊！',
    bugs: [
      { tag: '防衛反應優先', color: 'red', desc: '還沒聽完就先覺得被攻擊' },
      { tag: '情緒蓋過思考', color: 'yellow', desc: '憤怒情緒爆發' }
    ],
    fix: '（深呼吸）「我聽到建議時本能覺得受傷，好像努力被否定了。但冷靜下來想，你是在幫我補強風險漏洞。具體是哪部分的數據不夠？」'
  },
  {
    id: 3,
    bugId: '04',
    isCore: true,
    title: '語言反射陷阱',
    subtitle: 'Linguistic Reflex',
    desc: '使用未經思考的「接華查句」（如：沒有啊、你想太多）快速結束不舒服的對話。',
    partnerMsg: '你看起來好像不太開心，是不是我剛剛說錯什麼？',
    userMsg: '沒有啊。沒事。你想太多了。我本來就這樣。',
    bugs: [
      { tag: '語言反射陷阱', color: 'red', desc: '自動化否認' },
      { tag: '拒絕連結', color: 'purple', desc: '切斷溝通' }
    ],
    fix: '「其實我現在確實有點悶，但我還沒理清楚原因。這不是你的問題，但我需要一點時間整理一下情緒，晚點跟你說。」'
  },
  {
    id: 4,
    bugId: '05',
    isCore: true,
    title: '情緒蓋過思考',
    subtitle: 'Emotion Override',
    desc: '強烈情緒佔滿所有心理資源，使原本的理性判斷原則瞬間失效。',
    partnerMsg: '發生這種意外我也很遺憾，但我們先來看看保險怎麼處理好嗎？',
    userMsg: '處理什麼處理！全完了！你不懂那對我多重要！講那些冷冰冰的流程有什麼用？世界毀滅了你知不知道！',
    bugs: [
      { tag: '情緒蓋過思考', color: 'red', desc: '情緒滿載，拒絕理性介入' },
      { tag: '語言≠思考', color: 'yellow', desc: '極端用語「世界毀滅」' }
    ],
    fix: '「我現在情緒非常激動，完全聽不進去解決方案。請給我半小時崩潰一下，等我冷靜下來，我們再談保險。」'
  },
  {
    id: 5,
    bugId: '06',
    isCore: true,
    title: '自我定位錯誤',
    subtitle: 'Self-Placement Error',
    desc: '在心理上將自己置於不合適的位置，如定型的受害者或全能的負責人。',
    partnerMsg: '如果不喜歡這份工作，要不要試著投履歷看看別的？',
    userMsg: '沒用的。像我這種學歷，去哪裡都會被歧視。大環境就這樣，老闆就是慣老闆，我注定就是社畜命。',
    bugs: [
      { tag: '自我定位錯誤', color: 'red', desc: '把自己鎖死在受害者位置' },
      { tag: '責任外包', color: 'yellow', desc: '全怪大環境與學歷' }
    ],
    fix: '「我確實對現狀感到無力，但我不是完全沒有選擇。我可以先試著改履歷，這是我能控制的 10%。」'
  },
  {
    id: 6,
    bugId: '07',
    isCore: true,
    title: '投射型療癒',
    subtitle: 'Projective Healing',
    desc: '表面上在幫助他人，實際是在處理自己的恐懼，將自己的劇本強加給對方。',
    partnerMsg: '我決定要去國外打工度假一年！',
    userMsg: '千萬不要！你會後悔！回來就跟不上職場了！我當年就是因為這樣錯過升遷，你絕對不能步我後塵！',
    bugs: [
      { tag: '投射型療癒', color: 'red', desc: '處理自己的遺憾而非對方的人生' },
      { tag: '界線模糊', color: 'purple', desc: '把對方當成自己的延伸' }
    ],
    fix: '「聽到你要去，我第一反應是反對，是因為我當年有遺憾。這是我的恐懼，不代表你的結果。我祝福你的選擇。」'
  },
  {
    id: 7,
    bugId: '08',
    isCore: true,
    title: '責任外包',
    subtitle: 'Responsibility Outsourcing',
    desc: '習慣在情緒不舒服時，立刻尋找可歸咎的對象，將自己從事件中抽離。',
    partnerMsg: '這次考試結果好像不太理想？',
    userMsg: '那是因為老師出題太偏！而且那天冷氣太冷，旁邊的人一直抖腳害我分心。如果環境正常我早就考滿分了。',
    bugs: [
      { tag: '責任外包', color: 'red', desc: '全是外部因素的錯' },
      { tag: '反思缺席', color: 'yellow', desc: '看不見自己的準備不足' }
    ],
    fix: '「環境確實有影響，但我自己準備也不夠充分。如果有 30% 是我可以掌握的，那就是下次我要更專注在基本題上。」'
  },
  {
    id: 8,
    bugId: '09',
    isCore: true,
    title: '反思缺席',
    subtitle: 'Reflection Blindspot',
    desc: '事件結束後，只反覆抱怨或指責，從未從中學習看見自己的模式。',
    partnerMsg: '這已經是你第三次因為這種原因分手了，要不要聊聊？',
    userMsg: '我就爛桃花啊！世界上渣男怎麼這麼多？老天爺為什麼要這樣對我？我到底做錯什麼要遇到這些爛人？',
    bugs: [
      { tag: '反思缺席', color: 'red', desc: '只看結果，不看模式' },
      { tag: '自我定位錯誤', color: 'purple', desc: '受害者視角' }
    ],
    fix: '「這是我第三次遇到這種人。這顯示我可能有一種『容易被這類人吸引』的慣性。我需要檢查我的篩選機制。」'
  },
  {
    id: 9,
    bugId: '10',
    isCore: true,
    title: '語言不等於思考',
    subtitle: 'Language ≠ Cognition',
    desc: '誠時他人習慣性、情緒性的直接表達，當作經過完整思考後的精準結論。',
    partnerMsg: '你可以幫忙洗個碗嗎？',
    userMsg: '你「永遠」都只會叫我做家事！這個家「全部」都是我在扛！你「從來」都不在乎我累不累！',
    bugs: [
      { tag: '語言≠思考', color: 'red', desc: '永遠、全部、從來（極端詞）' },
      { tag: '情緒蓋過思考', color: 'yellow', desc: '誇飾情緒而非描述事實' }
    ],
    fix: '「我剛剛說『永遠』是因為我現在覺得累，情緒上覺得負擔很重。實際上你昨天有倒垃圾。我只是希望今天能休息一下。」'
  },
  {
    id: 10,
    bugId: '11',
    isCore: false,
    title: '讀心術謬誤',
    subtitle: 'Mind Reading',
    desc: '不去核實事實，直接認定自己知道對方的動機（通常是負面的）。',
    partnerMsg: '抱歉昨天沒回你訊息，我太忙了。',
    userMsg: '少來。你只是不想理我吧？你覺得我很煩對不對？想分手就直說啊！',
    bugs: [
      { tag: '讀心術', color: 'red', desc: '未經查證即認定對方動機' },
      { tag: '投射', color: 'purple', desc: '將內在不安投射給對方' }
    ],
    fix: '「我感到焦慮，因為我怕自己被討厭。但我應該先相信你說的『忙碌』，而不是直接認定你在說謊。」'
  },
  {
    id: 11,
    bugId: '12',
    isCore: false,
    title: '二元對立',
    subtitle: 'Binary Thinking',
    desc: '認為世界只有「完美」跟「垃圾」兩種狀態，沒有中間地帶。',
    partnerMsg: '這份報告整體不錯，但這張圖表的數據可能要更新一下。',
    userMsg: '好啦！反正都是垃圾！重做總行了吧？我就是爛，連一張圖都做不好！',
    bugs: [
      { tag: '全有全無', color: 'red', desc: '非黑即白的極端分類' },
      { tag: '玻璃心', color: 'yellow', desc: '將修正視為全面否定' }
    ],
    fix: '「對方說的是『這張圖要改』，不是『我這個人很爛』。我可以接受 90% 完美加上 10% 的修正。」'
  },
  {
    id: 12,
    bugId: '13',
    isCore: false,
    title: '災難化推演',
    subtitle: 'Catastrophizing',
    desc: '將一個微小的負面事件，無限放大成毀滅性的結局。',
    partnerMsg: '老闆說下午想找你聊聊。',
    userMsg: '完了。我要被資遣了。我房貸繳不出來了。我人生毀了。我到底做錯什麼？',
    bugs: [
      { tag: '災難化', color: 'red', desc: '滑坡謬誤至最糟結局' },
      { tag: '恐懼放大', color: 'yellow', desc: '情緒過載' }
    ],
    fix: '「『聊聊』不等於『資遣』。這只是我的恐懼在編故事。在事實發生前，我先深呼吸，準備好聽他說什麼就好。」'
  },
  {
    id: 13,
    bugId: '14',
    isCore: false,
    title: '過度承擔',
    subtitle: 'Over-Responsibility',
    desc: '認為周遭所有的負面情緒或問題都是自己的錯，界線不清。',
    partnerMsg: '這家餐廳怎麼今天沒開...（嘆氣）',
    userMsg: '對不起！都是我不好，我不該選這家，我應該先打電話確認的，我真的很雷...',
    bugs: [
      { tag: '過度承擔', color: 'red', desc: '將他人情緒攬在自己身上' },
      { tag: '界線模糊', color: 'purple', desc: '分不清這是運氣還是責任' }
    ],
    fix: '「餐廳沒開是運氣問題，不是我的人格問題。他的嘆氣是針對『沒開』這件事，不是針對我。」'
  }
];

export const SystemZoneA: React.FC<SystemZoneAProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [activeScenarioId, setActiveScenarioId] = useState(0);
  const activeScenario = SCENARIOS[activeScenarioId];

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-7xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* HEADER */}
      <header className="mb-12 animate-fade-in-up">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-xs font-mono uppercase tracking-widest ${
          isDark ? 'border-blue-500/30 text-blue-400 bg-blue-900/20' : 'border-blue-200 text-blue-700 bg-blue-50'
        }`}>
          <Zap size={14} />
          Zone A: Application Layer
        </div>
        <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
          思維盲點：十種常見錯誤模式
        </h1>
        <p className={`text-lg ${mutedText} max-w-3xl mb-8`}>
          本圖表整理了「默默超思維系統」的應用層。<br/>
          專注於十種在日常互動中最常出現、也最容易造成困擾的行為與反應模式。
        </p>
        
        {/* Infographic Map */}
        <BlindSpotMap theme={theme} />
      </header>

      {/* CONTROLS */}
      <div className="flex flex-col xl:flex-row gap-8 items-start mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
         
         {/* Scenario Grid Selector */}
         <div className={`flex-1 w-full`}>
            
            {/* Core 10 Label */}
            <div className="flex items-center gap-2 mb-4">
                <Star size={14} className={isDark ? 'text-gold' : 'text-muted-gold'} fill="currentColor" />
                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>The Core 10 Blind Spots</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                {SCENARIOS.filter(s => s.isCore).map((s) => (
                <button
                    key={s.id}
                    onClick={() => { setActiveScenarioId(s.id); setIsDebugMode(false); }}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                    activeScenarioId === s.id
                        ? (isDark ? 'bg-blue-900/30 border-gold text-blue-200 shadow-lg shadow-gold/10' : 'bg-white border-muted-gold text-blue-800 shadow-md')
                        : (isDark ? 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-gold/30 hover:bg-slate-800' : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-white hover:border-muted-gold/50')
                    }`}
                >
                    <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[10px] opacity-50">BUG {s.bugId}</span>
                    {activeScenarioId === s.id && <Bug size={14} className="text-gold animate-pulse" />}
                    </div>
                    <div className="font-bold text-sm leading-tight">{s.title}</div>
                    {/* Core Indicator */}
                    <div className={`absolute top-0 right-0 w-2 h-2 rounded-bl-lg ${isDark ? 'bg-gold' : 'bg-muted-gold'}`} />
                </button>
                ))}
            </div>

            {/* Extended Label */}
            <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>Extended Patterns</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SCENARIOS.filter(s => !s.isCore).map((s) => (
                    <button
                        key={s.id}
                        onClick={() => { setActiveScenarioId(s.id); setIsDebugMode(false); }}
                        className={`p-3 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                        activeScenarioId === s.id
                            ? (isDark ? 'bg-blue-900/30 border-blue-500 text-blue-200 shadow-lg' : 'bg-white border-blue-500 text-blue-800 shadow-md')
                            : (isDark ? 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-600' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300')
                        }`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-mono text-[10px] opacity-50">BUG {s.bugId}</span>
                            {activeScenarioId === s.id && <Bug size={14} className="text-blue-500" />}
                        </div>
                        <div className="font-bold text-sm leading-tight">{s.title}</div>
                    </button>
                ))}
            </div>
         </div>

         {/* Debug Toggle */}
         <button 
          onClick={() => setIsDebugMode(!isDebugMode)}
          className={`w-full xl:w-auto shrink-0 flex items-center justify-center gap-4 px-8 py-6 rounded-2xl border-2 transition-all shadow-lg ${
            isDebugMode 
              ? (isDark ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-blue-500/20' : 'bg-blue-50 border-blue-600 text-blue-700 shadow-blue-100')
              : (isDark ? 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500' : 'bg-white border-gray-300 text-gray-500 hover:border-gray-400')
          }`}
        >
          <div className="text-left">
            <span className="block text-xs font-bold uppercase tracking-wider mb-1">Simulation Mode</span>
            <span className="block text-lg font-bold">{isDebugMode ? 'DEBUGGING' : 'NORMAL VIEW'}</span>
          </div>
          {isDebugMode ? <ToggleRight size={32} className="text-blue-500" /> : <ToggleLeft size={32} />}
        </button>
      </div>

      {/* SIMULATION AREA */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* LEFT: Context & Analysis */}
        <div className="lg:col-span-5 space-y-6">
          {/* The container itself stays stable (no key), only inner content animates */}
          <div 
            className={`p-8 rounded-3xl border transition-all duration-500 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-gray-200 shadow-sm'}`}
          >
             <div key={activeScenarioId} className="animate-fade-in">
               <div className="flex items-center gap-3 mb-4">
                 <span 
                   key={`tag-${activeScenario.bugId}`}
                   className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg border animate-pop-in ${
                     isDark ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-blue-50 text-blue-700 border-blue-200'
                   }`}
                 >
                   <Bug size={14} className="animate-pulse" />
                   VIRUS #{activeScenario.bugId}
                 </span>
                 {activeScenario.isCore && (
                     <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${isDark ? 'bg-gold/20 text-gold' : 'bg-amber-100 text-muted-gold'}`}>
                        <Star size={10} fill="currentColor" /> Core 10
                     </span>
                 )}
               </div>
               <h3 className={`text-3xl font-serif font-bold mb-2 ${textColor}`}>{activeScenario.title}</h3>
               <p className={`font-mono text-xs uppercase tracking-widest mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{activeScenario.subtitle}</p>
               <p className={`text-lg leading-relaxed ${mutedText}`}>{activeScenario.desc}</p>
             </div>
          </div>

          {/* Analysis Panel (Reveals in Debug Mode with smooth accordion effect) */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isDebugMode ? 'max-h-[800px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
            }`}
          >
             <div className="space-y-3 pt-2">
              {activeScenario.bugs.map((bug, idx) => (
                <div 
                  key={`${activeScenarioId}-${bug.tag}-${idx}`} 
                  className="animate-fade-in flex items-start gap-4 p-5 rounded-2xl border text-sm shadow-sm" 
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    borderColor: bug.color === 'red' ? (isDark ? 'rgba(239,68,68,0.3)' : '#fecaca') : bug.color === 'yellow' ? (isDark ? 'rgba(234,179,8,0.3)' : '#fde68a') : (isDark ? 'rgba(168,85,247,0.3)' : '#e9d5ff'),
                    backgroundColor: bug.color === 'red' ? (isDark ? 'rgba(127,29,29,0.1)' : '#fef2f2') : bug.color === 'yellow' ? (isDark ? 'rgba(113,63,18,0.1)' : '#fffbeb') : (isDark ? 'rgba(88,28,135,0.1)' : '#faf5ff'),
                    color: bug.color === 'red' ? (isDark ? '#fecaca' : '#7f1d1d') : bug.color === 'yellow' ? (isDark ? '#fef08a' : '#713f12') : (isDark ? '#e9d5ff' : '#581c87')
                  }}
                >
                  <AlertOctagon size={20} className={`mt-0.5 shrink-0 ${
                    bug.color === 'red' ? 'text-red-500' : bug.color === 'yellow' ? 'text-yellow-500' : 'text-purple-500'
                  }`} />
                  <div>
                    <strong className="block mb-1 text-base">[{bug.tag}]</strong> 
                    <span className="opacity-80">{bug.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder for Normal Mode */}
          {!isDebugMode && (
             <div className="p-6 rounded-2xl border border-dashed flex items-center justify-center text-center transition-all duration-500 animate-fade-in border-gray-300 dark:border-slate-700">
               <p className={`text-sm ${mutedText}`}>
                 點擊上方 <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Simulation Mode</strong> 按鈕<br/>
                 以顯示深層病理分析與修復建議
               </p>
             </div>
          )}
        </div>

        {/* RIGHT: Chat Interface */}
        <div className="lg:col-span-7">
          <div className={`rounded-3xl border overflow-hidden flex flex-col h-[650px] transition-all duration-700 ease-in-out relative ${
            isDark 
              ? (isDebugMode ? 'bg-slate-950 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : 'bg-slate-950 border-slate-800') 
              : (isDebugMode ? 'bg-slate-50 border-blue-300 shadow-xl' : 'bg-white border-gray-200 shadow-sm')
          }`}>
            {/* Chat Header */}
            <div className={`p-4 border-b text-xs font-mono flex justify-between items-center ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-gray-100 border-gray-200 text-gray-500'
            }`}>
              <span>LOG_ID_{activeScenario.bugId}_9X</span>
              <span className={`flex items-center gap-2 ${isDebugMode ? 'text-blue-500' : ''}`}>
                {isDebugMode && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>}
                {isDebugMode ? 'SYSTEM DEBUGGING ACTIVE' : 'STANDARD RECORDING'}
              </span>
            </div>
            
            {/* Key prop on content area triggers reset of children animations without unmounting the container */}
            <div key={activeScenarioId} className="p-6 md:p-8 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
              
              {/* Message 1: Partner */}
              <div className="flex gap-4 animate-fade-in-up">
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-lg ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-white text-gray-600 border border-gray-100'}`}>A</div>
                <div className="space-y-2 max-w-[90%]">
                  <div className={`p-5 rounded-2xl rounded-tl-none text-base leading-relaxed shadow-sm ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-white border border-gray-100 text-gray-800'}`}>
                    {activeScenario.partnerMsg}
                  </div>
                </div>
              </div>

              {/* Message 2: User (The Buggy Response) */}
              <div className="flex gap-4 flex-row-reverse animate-fade-in-up" style={{animationDelay: '0.15s'}}>
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-lg ${isDark ? 'bg-gold text-black' : 'bg-muted-gold text-white'}`}>B</div>
                <div className="space-y-2 max-w-[90%] text-right">
                  
                  {/* The Response Bubble */}
                  <div className={`p-5 rounded-2xl rounded-tr-none text-left text-base leading-relaxed transition-all duration-500 shadow-sm ${
                    isDebugMode 
                      ? (isDark ? 'bg-red-900/20 border border-red-500/50 text-red-200' : 'bg-red-50 border border-red-200 text-red-900')
                      : (isDark ? 'bg-gold/10 text-gold' : 'bg-amber-50 text-ink')
                  }`}>
                    {activeScenario.userMsg}
                  </div>

                  {/* Debug Annotations - Floating bubbles */}
                  {isDebugMode && (
                    <div className="flex flex-wrap justify-end gap-2 mt-2 animate-fade-in">
                      {activeScenario.bugs.map((bug, idx) => (
                         <span key={idx} className={`text-[10px] font-mono px-2 py-1 rounded-full text-white shadow-md transform transition-transform hover:scale-105 cursor-help ${
                           bug.color === 'red' ? 'bg-red-500' : bug.color === 'yellow' ? 'bg-yellow-500 text-black' : 'bg-purple-500'
                         }`}>
                          ⚠ {bug.tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message 3: AI Correction (Only in Debug) */}
              {isDebugMode && (
                <div className="flex gap-4 animate-fade-in-up mt-8 pb-8" style={{animationDelay: '0.3s'}}>
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-blue-500 text-white shadow-lg shadow-blue-500/30`}>
                    <Brain size={20} />
                  </div>
                  <div className={`p-6 rounded-2xl rounded-tl-none border w-full shadow-xl relative overflow-hidden ${
                    isDark ? 'bg-slate-900 border-blue-500/30 text-blue-100' : 'bg-white border-blue-200 text-blue-900'
                  }`}>
                    {/* Glow effect */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${isDark ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
                    
                    <div className="flex items-center gap-2 text-xs font-bold uppercase mb-3 opacity-70 text-blue-500">
                      <RefreshCw size={12} /> Integrity Patch Applied
                    </div>
                    <p className="text-lg font-serif leading-relaxed">
                      {activeScenario.fix}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SystemZoneA;
