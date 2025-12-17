
import React, { useEffect, useRef } from 'react';
import { LogicStep, Theme } from '../types';
import { ArrowDown, Check } from 'lucide-react';

interface StepCardProps {
  step: LogicStep;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  userInput: string;
  onChange: (value: string) => void;
  onNext: () => void;
  isLast: boolean;
  theme: Theme;
}

export const StepCard: React.FC<StepCardProps> = ({ 
  step, 
  index,
  isActive, 
  isCompleted, 
  userInput, 
  onChange, 
  onNext,
  isLast,
  theme
}) => {
  if (!isActive && !isCompleted) return null;

  const isDark = theme === 'dark';
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus on active step
  useEffect(() => {
    if (isActive && textareaRef.current) {
        // Delay slightly to allow animation to settle
        const timer = setTimeout(() => {
            textareaRef.current?.focus();
        }, 400);
        return () => clearTimeout(timer);
    }
  }, [isActive]);

  // Cyber-Daoist Element colors (Dark Mode)
  const darkColors: Record<string, string> = {
    metal: 'border-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.2)]',
    wood: 'border-jade shadow-[0_0_20px_rgba(39,103,73,0.3)]',
    water: 'border-blue-800 shadow-[0_0_20px_rgba(30,64,175,0.3)]',
    fire: 'border-cinnabar shadow-[0_0_20px_rgba(192,57,43,0.3)]',
    earth: 'border-earth shadow-[0_0_20px_rgba(141,129,114,0.3)]',
    gold: 'border-gold shadow-[0_0_20px_rgba(255,215,0,0.3)]',
  };

  // Zen Paper Element colors (Light Mode)
  const lightColors: Record<string, string> = {
    metal: 'border-stone-400 shadow-stone-200',
    wood: 'border-stone-400 shadow-stone-200',
    water: 'border-stone-400 shadow-stone-200',
    fire: 'border-stone-400 shadow-stone-200',
    earth: 'border-stone-400 shadow-stone-200',
    gold: 'border-muted-gold shadow-amber-100',
  };

  const elementClass = isDark ? darkColors[step.element] : lightColors[step.element];

  const containerStyle = isActive 
    ? `${elementClass} border-l-4 ${isDark ? 'bg-slate-900/80' : 'bg-white'} scale-100 opacity-100 shadow-xl z-10 animate-fade-in-up` 
    : `border-l-4 border-transparent ${isDark ? 'bg-slate-950/30 border-slate-800' : 'bg-[#e6e2d6] border-stone-300'} scale-[0.98] opacity-60 grayscale cursor-not-allowed`;

  return (
    <div 
        id={`step-card-${index}`}
        className={`relative transition-all duration-700 ease-out rounded-xl p-6 border border-t-0 border-r-0 border-b-0 backdrop-blur-sm ${containerStyle}`}
    >
      {/* Step Indicator Number */}
      <div className={`absolute -left-3 top-6 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border shadow-sm z-20 transition-all duration-500 ${
          isActive 
            ? (isDark ? 'bg-gold text-black border-gold scale-110' : 'bg-muted-gold text-white border-muted-gold scale-110')
            : (isCompleted 
                ? (isDark ? 'bg-slate-800 text-green-500 border-green-900' : 'bg-green-100 text-green-700 border-green-200')
                : (isDark ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-stone-300 text-stone-500 border-stone-300'))
      }`}>
          {isCompleted && !isActive ? <Check size={12} /> : index + 1}
      </div>

      <div className="flex justify-between items-start mb-4 pl-4">
        <h3 className={`font-serif text-xl font-bold transition-colors duration-500 ${
          isActive 
            ? (isDark ? 'text-gold' : 'text-ink') 
            : (isDark ? 'text-slate-400' : 'text-stone-500')
        }`}>
          {step.title}
        </h3>
        <span className={`text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded transition-colors duration-500 ${
          isDark ? 'text-slate-500 border-slate-700' : 'text-stone-500 border-stone-300'
        }`}>
          {step.element}
        </span>
      </div>

      <div className="mb-6 pl-4">
        <p className={`text-sm font-mono mb-3 leading-relaxed transition-colors duration-500 ${
          isActive ? (isDark ? 'text-slate-200' : 'text-ink') : (isDark ? 'text-slate-500' : 'text-stone-500')
        }`}>
          <span className={isDark ? 'text-gold mr-2' : 'text-muted-gold mr-2'}>Q:</span>{step.question}
        </p>
        <p className={`text-xs italic leading-relaxed border-l-2 pl-3 py-1 transition-colors duration-500 ${
          isDark ? 'text-slate-500 border-slate-800' : 'text-stone-500 border-stone-300'
        }`}>
          {step.description}
        </p>
      </div>

      <div className="pl-4">
        <textarea
            ref={textareaRef}
            disabled={!isActive}
            value={userInput}
            onChange={(e) => onChange(e.target.value)}
            placeholder={isActive ? "在此輸入你的思考..." : "等待解鎖..."}
            className={`w-full border rounded-lg p-4 text-sm transition-all duration-300 min-h-[140px] resize-none font-sans shadow-inner outline-none ${
            isDark 
                ? `bg-black/40 text-slate-200 ${isActive ? 'border-slate-600 focus:border-gold focus:ring-1 focus:ring-gold/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]' : 'border-slate-800'}` 
                : `bg-[#fbf9f4] text-ink ${isActive ? 'border-stone-300 focus:border-muted-gold focus:ring-1 focus:ring-muted-gold/50 shadow-inner' : 'border-stone-200 bg-[#f2efe5]'}`
            }`}
        />

        {isActive && (
            <div className="mt-4 flex justify-end animate-fade-in">
            <button
                onClick={onNext}
                disabled={userInput.trim().length === 0}
                className={`group flex items-center gap-2 border px-6 py-2.5 rounded-full text-sm font-mono transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none ${
                isDark 
                    ? 'bg-gold/10 hover:bg-gold/20 border-gold/50 text-gold shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]' 
                    : 'bg-white hover:bg-amber-50 border-muted-gold text-muted-gold hover:shadow-md'
                }`}
            >
                {isLast ? '完成循環 (COMPLETE)' : '下一步 (NEXT)'}
                {!isLast && <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />}
            </button>
            </div>
        )}
      </div>
    </div>
  );
};