import React from 'react';
import { Theme } from '../types';
import { LOGIC_STEPS } from '../constants';
import { Fingerprint, Download } from 'lucide-react';

interface ResultCardProps {
  theme: Theme;
  inputs: string[];
  topic: { title: string; subtitle: string };
  date: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ theme, inputs, topic, date }) => {
  const isDark = theme === 'dark';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-2xl mx-auto perspective-1000">
      {/* Card Container */}
      <div 
        id="printable-card"
        className={`relative overflow-hidden rounded-xl border-2 transition-all duration-500 ${
          isDark 
            ? 'bg-slate-900 border-gold/50 shadow-[0_0_30px_rgba(251,191,36,0.15)]' 
            : 'bg-[#fdfbf7] border-ink shadow-2xl'
        }`}
      >
        {/* Decorative Header Background */}
        <div className={`absolute top-0 left-0 w-full h-32 opacity-20 ${
          isDark 
            ? 'bg-gradient-to-b from-gold via-transparent to-transparent' 
            : 'bg-gradient-to-b from-ink via-transparent to-transparent'
        }`} />

        {/* Card Content */}
        <div className="relative p-8 flex flex-col h-full">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8 border-b pb-4 border-current border-dashed">
            <div>
              <h2 className={`font-serif text-2xl font-bold tracking-wider ${
                isDark ? 'text-gold' : 'text-ink'
              }`}>
                全路徑思維憑證
              </h2>
              <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                isDark ? 'text-slate-400' : 'text-gray-500'
              }`}>
                Full Cognitive Trace Log
              </p>
            </div>
            <div className={`text-right font-mono text-xs ${
              isDark ? 'text-slate-500' : 'text-gray-400'
            }`}>
              <div className="font-bold text-sm mb-1">{topic.title}</div>
              <div>{date}</div>
            </div>
          </div>

          {/* The 8 Steps Trace */}
          <div className="space-y-4 mb-10">
            {LOGIC_STEPS.map((step, index) => {
              const input = inputs[index] || '（未記錄）';
              const isConclusion = step.id === 'conclude';
              
              // Style based on element type for subtle variety
              const accentColor = isDark 
                ? (isConclusion ? 'text-gold' : 'text-slate-400') 
                : (isConclusion ? 'text-muted-gold' : 'text-gray-500');
                
              const borderColor = isDark 
                ? (isConclusion ? 'border-gold/50' : 'border-slate-800') 
                : (isConclusion ? 'border-muted-gold/50' : 'border-gray-200');
                
              const bgClass = isDark 
                ? (isConclusion ? 'bg-gold/10' : 'bg-white/5') 
                : (isConclusion ? 'bg-amber-50' : 'bg-gray-50');

              return (
                <div key={step.id} className={`p-4 rounded border ${borderColor} ${bgClass} flex gap-4`}>
                  <div className={`font-mono text-xs w-6 shrink-0 pt-1 opacity-50 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${accentColor}`}>
                      {step.title.split(' (')[0]}
                    </h4>
                    <p className={`text-sm font-serif leading-relaxed whitespace-pre-wrap ${
                      isDark ? 'text-slate-300' : 'text-ink'
                    } ${isConclusion ? 'font-bold text-base' : ''}`}>
                      {input}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer / Signature */}
          <div className="mt-auto flex items-end justify-between opacity-70 pt-6 border-t border-dashed border-current">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase">System Architecture</span>
              <span className="font-serif text-xs font-bold">MOMO Logic OS</span>
            </div>
            <div className={`text-4xl ${isDark ? 'text-white/10' : 'text-black/10'}`}>
              <Fingerprint />
            </div>
          </div>

        </div>
      </div>

      {/* Actions (Not Printed) */}
      <div className="flex justify-center gap-4 mt-8 print:hidden">
        <button 
          onClick={handlePrint}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
            isDark 
              ? 'bg-gold text-void hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]' 
              : 'bg-ink text-paper hover:bg-gray-800 hover:shadow-xl'
          }`}
        >
          <Download size={18} />
          匯出/列印 (Export)
        </button>
      </div>
      <p className="text-center text-xs mt-4 opacity-50 font-mono print:hidden">
        Tip: 在列印選項中勾選「背景圖形」以獲得最佳效果
      </p>
    </div>
  );
};