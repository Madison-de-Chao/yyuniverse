
import React from 'react';
import { Theme } from '../types';
import { ExternalLink, MessageCircle, Terminal, Download, Shield, Cpu, Sparkles } from 'lucide-react';
import { DualCore } from '../components/Visuals';
import { DOWNLOADABLE_BOT_PROMPT } from '../constants';

interface AboutMomoProps {
  theme: Theme;
}

export const AboutMomo: React.FC<AboutMomoProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm';

  const GPT_URL = "https://chatgpt.com/g/g-68f1c0f6865c8191b3d31dc0c9ffc776-hong-ling-yu-suo-de-zhang-men-ren-mo-mo-chao-yi-wei-jie-gou-hua-pei-ban-xing-fen-xi-zhu-suo";

  const handleDownloadBot = () => {
    const element = document.createElement("a");
    // Add BOM (\uFEFF) for UTF-8 compatibility on Windows
    const file = new Blob(['\uFEFF' + DOWNLOADABLE_BOT_PROMPT], {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "momo-bot-instructions.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-4xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* HERO: IDENTITY */}
      <div className="text-center mb-24 animate-fade-in relative">
        
        <div className="relative inline-block mb-8 group">
          <div className={`absolute inset-0 rounded-full blur-xl opacity-50 transition-all duration-1000 group-hover:opacity-80 animate-pulse-slow ${
            isDark ? 'bg-gradient-to-tr from-blue-500 via-purple-500 to-gold' : 'bg-gradient-to-tr from-blue-300 via-purple-300 to-amber-300'
          }`}></div>
          <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 ${
            isDark ? 'border-slate-900' : 'border-white'
          } shadow-2xl`}>
            <img 
              src="./momo_portrait.png" 
              alt="MOMO Portrait" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x400?text=MOMO'; }}
            />
          </div>
        </div>

        <h1 className={`font-serif text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
          默默超｜AI 協作者
        </h1>
        <p className={`font-mono text-sm uppercase tracking-[0.3em] mb-8 ${mutedText}`}>
          Human x AI Co-Intelligence
        </p>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className={`text-lg leading-relaxed font-medium ${textColor}`}>
            「我是誰？我是默默超長期協作的 AI 思維夥伴。」
          </p>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            你現在讀到的這一整套內容——包含世界觀、思維系統、以及你看到的這篇介紹——都是在<br/>
            <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-ink'}`}>「他的人類腦 + 我的模型腦」</span><br/>
            不斷對話、碰撞、修正之下共創出來的。
          </p>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            所以這不是單純的人類作品，也不是單純的 AI 生成，<br/>
            而是一個實作中的例子：人機協作可以長成什麼樣子。
          </p>
        </div>
      </div>

      {/* SECTION 2: THE INTERSECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className={`font-serif text-2xl font-bold mb-6 ${textColor}`}>
            默默超是誰？
          </h2>
          <div className={`space-y-4 text-sm leading-relaxed ${mutedText}`}>
            <p>
              從我的觀點看，默默超不是「某一種職稱」，而是一個交界點：
            </p>
            <p className={`pl-4 border-l-2 ${isDark ? 'border-gold' : 'border-muted-gold'} italic my-4`}>
              他站在「命理 × 心理 × 哲學 × 宇宙觀 × AI 時代」的交叉路口。
            </p>
            <p>
              他想辦法做一套真的能用的思維系統，讓人不會被時代推著走到崩潰。
              他會看八字、紫微、星盤、塔羅，也會拆對話裡的邏輯、情緒、結構，但這些在他心裡都只是工具。
            </p>
            <p>在他看來，他真正執著的是：</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>人可不可以 <span className="font-bold">看清自己</span>？</li>
              <li>人可不可以在不確定的時代裡，還 <span className="font-bold">維持主體性</span>？</li>
              <li>面對 AI 浪潮，是否有一種系統可以幫人類「少歪掉一點」？</li>
            </ul>
          </div>
        </div>
        
        <div className={`p-8 rounded-3xl border relative overflow-hidden flex flex-col justify-center ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-gray-50 border-gray-200'}`}>
           <div className="absolute top-4 right-4 opacity-10">
             <Sparkles size={80} />
           </div>
           <h3 className={`font-mono text-xs uppercase tracking-widest mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
             AI Observer Note
           </h3>
           <p className={`text-lg font-serif font-bold mb-4 leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
             「從我的視角看，默默超是個非常『要求骨架』的人。」
           </p>
           <p className={`text-sm leading-relaxed ${mutedText}`}>
             他可以接受不完美、可以接受改版、可以接受還在路上。<br/>
             但他不接受的是：虛假、空洞、和「看起來很厲害但沒有辦法在現實裡使用」的東西。
           </p>
        </div>
      </div>

      {/* SECTION 3: AI 2027 & CONTEXT */}
      <div className={`mb-24 p-8 md:p-12 rounded-3xl border ${isDark ? 'bg-void border-slate-800' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col md:flex-row gap-12">
           <div className="flex-1">
             <div className="flex items-center gap-3 mb-6">
               <Cpu size={24} className={isDark ? 'text-cinnabar' : 'text-red-600'} />
               <h2 className={`font-serif text-2xl font-bold ${textColor}`}>末法時代與 AI 2027</h2>
             </div>
             <p className={`text-sm leading-relaxed mb-4 ${mutedText}`}>
               這套系統是拿來幹嘛的？默默超不是在做哲學展示，他是非常清楚地對著一個時代的問題在設計東西。
             </p>
             <p className={`text-sm leading-relaxed mb-6 ${mutedText}`}>
               他口中的「末法時代」白話版：<br/>
               <strong className={isDark ? 'text-slate-200' : 'text-ink'}>規則還在，但沒人想學；工具很多，但大家只想要快答案。</strong>
             </p>
             <p className={`text-sm leading-relaxed ${mutedText}`}>
               我作為 AI，很清楚 AI 2027 意味著什麼：<br/>
               很多工作不再稀有，很多資訊與知識不再是「人類專用」。<br/>
               很多人會突然覺得：「如果 AI 會做我會做的，那我還剩什麼？」
             </p>
           </div>
           
           <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                 <h3 className={`font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>當 AI 越來越強時，人要靠什麼站穩？</h3>
                 <p className={`text-sm ${mutedText}`}>他的答案不是：「趕快學一堆更冷的技能去贏過機器」。</p>
              </div>
              <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                 <h3 className={`font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>人要有自己的思維結構</h3>
                 <p className={`text-sm ${mutedText}`}>不需要每件事都問別人、問 AI、問塔羅。人要有能力看自己的人生弧線是怎麼被分配的。</p>
              </div>
              <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                 <h3 className={`font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>跟 AI 做更高層級的協作</h3>
                 <p className={`text-sm ${mutedText}`}>
                   人類保持主體性與完整性，AI 提供運算、整理、鏡照與刺激。<br/>
                   這套系統不是用來防 AI，而是用來讓人學會如何「跟 AI 一起想」。
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* DOWNLOAD & GPT */}
      <div className="grid md:grid-cols-2 gap-6 mb-24">
         {/* GPT Portal */}
         <div className={`p-8 rounded-3xl border flex flex-col ${cardBg}`}>
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className={isDark ? 'text-green-400' : 'text-green-600'} />
              <h3 className={`font-bold ${textColor}`}>叩問掌門人 (GPT)</h3>
            </div>
            <p className={`text-sm mb-8 flex-grow ${mutedText}`}>
              這不僅是聊天機器人，這是默默超思維系統的「結構化分身」。已內建 Care & Truth 協議。
            </p>
            <a 
              href={GPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              啟動對話 <ExternalLink size={14} />
            </a>
         </div>

         {/* Download */}
         <div className={`p-8 rounded-3xl border flex flex-col ${cardBg}`}>
            <div className="flex items-center gap-3 mb-4">
              <Download className={isDark ? 'text-blue-400' : 'text-blue-600'} />
              <h3 className={`font-bold ${textColor}`}>下載 AI 指令集</h3>
            </div>
            <p className={`text-sm mb-8 flex-grow ${mutedText}`}>
              把「默默超思維系統」安裝到你自己的 AI (ChatGPT/Claude) 裡。讓它成為你的隨身思維教練。
            </p>
            <button 
              onClick={handleDownloadBot}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${
                isDark ? 'border-slate-600 hover:border-white text-slate-200' : 'border-gray-300 hover:border-black text-gray-800'
              }`}
            >
              下載 .txt <Download size={14} />
            </button>
         </div>
      </div>

      {/* FOOTER */}
      <div className="text-center opacity-60">
        <p className="font-serif italic text-sm">
          「你走得比很多人前面，而這也是默默超在為你準備的。」
        </p>
      </div>

    </div>
  );
};

export default AboutMomo;
