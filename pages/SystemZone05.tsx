
import React, { useState, useRef, useEffect } from 'react';
import { Theme } from '../types';
import { ShadowSynthesis } from '../components/Visuals';
import { Ghost, ArrowDown, RefreshCw, Eye, Lock, AlertTriangle, Fingerprint, Languages, Cpu } from 'lucide-react';

interface SystemZone05Props {
  theme: Theme;
}

export const SystemZone05: React.FC<SystemZone05Props> = ({ theme }) => {
  // Force dark theme logic for this page's aesthetic (Deep Void)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [displacement, setDisplacement] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [mergeProgress, setMergeProgress] = useState(0);
  const [isMerged, setIsMerged] = useState(false);
  const holdTimer = useRef<number | null>(null);

  // Audio Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Audio Effect Hook
  useEffect(() => {
    if (isHolding) {
        // Initialize AudioContext
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
            audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        // Create Oscillator (Deep Resonant Hum)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Sound Design: Low frequency sine wave that rises slightly (Charging effect)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(55, ctx.currentTime); // A1 (55Hz) - Deep base
        osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 4); // Rise to A2 over 4s

        // Envelope: Fade in
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;

    } else {
        // Stop Sound with Decay
        if (oscRef.current && gainRef.current && audioCtxRef.current) {
            const ctx = audioCtxRef.current;
            const gain = gainRef.current;
            const osc = oscRef.current;

            // Smooth release
            gain.gain.cancelScheduledValues(ctx.currentTime);
            gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3); // 300ms release

            osc.stop(ctx.currentTime + 0.3);
            
            oscRef.current = null;
            gainRef.current = null;
        }
    }

    return () => {
        // Cleanup safety
        if (oscRef.current) {
            try { oscRef.current.stop(); } catch(e) {}
        }
    };
  }, [isHolding]);

  // Scroll listener to drive displacement and section progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const fullH = document.documentElement.scrollHeight - windowH;
      const progress = Math.min(1, Math.max(0, scrollY / fullH));
      setScrollProgress(progress);

      // Displacement Logic:
      // Section 1 (Hero): 0 displacement
      // Section 2 (Displacement): As user scrolls from 10% to 25%, displace from 0 to 80.
      // Section 3 (Linguistic) & 4 (Truth): Maintain max displacement.
      
      if (!isMerged) {
          let d = 0;
          const startP = 0.1;
          const endP = 0.25;
          
          if (progress < startP) d = 0;
          else if (progress < endP) d = ((progress - startP) / (endP - startP)) * 80;
          else d = 80;
          
          setDisplacement(d);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMerged]);

  // Ritual Interaction Handlers
  const startHolding = () => {
    if (isMerged) return;
    setIsHolding(true);
    let p = 0;
    const interval = window.setInterval(() => {
      p += 1.5; // Speed of integration
      if (p >= 100) {
        clearInterval(interval);
        completeRitual();
      }
      setMergeProgress(p);
      // Visual feedback: shrink displacement as we hold
      setDisplacement(80 - (p/100 * 80)); 
    }, 30);
    holdTimer.current = interval;
  };

  const stopHolding = () => {
    if (isMerged) return;
    setIsHolding(false);
    if (holdTimer.current) {
        clearInterval(holdTimer.current);
        holdTimer.current = null;
    }
    setMergeProgress(0);
    setDisplacement(80); // Snap back if failed
  };

  const completeRitual = () => {
    setIsMerged(true);
    setIsHolding(false);
    if (holdTimer.current) {
        clearInterval(holdTimer.current);
        holdTimer.current = null;
    }
  };

  return (
    <div className="bg-[#050508] text-slate-300 font-serif selection:bg-red-900 selection:text-white overflow-x-hidden">
      
      {/* 1. VISUAL ANCHOR (FIXED BACKGROUND) */}
      {/* This element stays fixed while content scrolls over it */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
         <div className="w-[85vw] max-w-[600px] aspect-square transition-all duration-1000 ease-out"
              style={{ 
                  transform: `scale(${1 + (scrollProgress * 0.2)}) translateY(${scrollProgress * 50}px)`,
                  opacity: isMerged ? 1 : Math.max(0.2, 0.8 - scrollProgress * 0.5) // Fade slightly as we go deep
              }}>
            <ShadowSynthesis theme="dark" displacement={displacement} merge={isMerged} />
         </div>
         
         {/* Atmospheric Fog / Vignette */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] opacity-90"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050508]/40 to-[#050508]"></div>
      </div>

      {/* 2. SECTION 1: THE DEFINITION (0% - 20% Scroll) */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
         <div className="mb-12 animate-fade-in">
            <div className="inline-block p-4 border border-slate-800 rounded-full mb-6 bg-slate-950/50 backdrop-blur-sm">
               <Ghost size={32} className="text-slate-500" strokeWidth={1} />
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-slate-100 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              伊 <span className="text-2xl md:text-4xl font-light opacity-50 block mt-2 md:inline md:mt-0">ANOTHER</span>
            </h1>
         </div>
         
         <div className="max-w-lg mx-auto text-lg md:text-xl leading-loose space-y-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
           <p className="font-light text-slate-400">這不是另一個靈魂。<br/>這不是另一個意識。</p>
           <div className="h-px w-12 bg-slate-700 mx-auto"></div>
           <p className="text-slate-200 font-medium tracking-widest">
             這是被推開的「壹」。
           </p>
         </div>
         
         <div className="absolute bottom-12 animate-bounce opacity-30">
            <ArrowDown size={24} />
            <span className="text-[10px] font-mono uppercase tracking-widest mt-2 block">Scroll to Displace</span>
         </div>
      </section>

      {/* 3. SECTION 2: THE MECHANISM / DISPLACEMENT (20% - 50% Scroll) */}
      <section className="relative z-10 min-h-[100vh] flex flex-col items-center px-6 justify-center">
         <div className="max-w-xl text-center space-y-16 py-20">
            
            <div className={`transition-all duration-1000 ${displacement > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-red-500 tracking-wide flex items-center justify-center gap-3">
                <AlertTriangle size={28} /> 責任外包
              </h2>
              <p className="text-xl leading-relaxed font-light text-slate-300">
                 當生命拒絕承擔、拒絕誠實時，<br/>
                 那個被否認的「壹」不會消失。<br/>
                 它會被強制推向外側。
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${displacement > 40 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="border-l-2 border-slate-700 pl-6 text-left">
                 <p className="text-lg text-slate-400 italic mb-4">
                   「你以為你在怪別人，<br/>其實你是在把自己的重量，丟給另一個自己扛。」
                 </p>
                 <p className="text-xs font-mono uppercase tracking-widest text-slate-600">
                   THE ARC OF AVOIDANCE
                 </p>
              </div>
            </div>

         </div>
      </section>

      {/* 3.5. SECTION: 0.5.A LINGUISTIC DISCOVERY (50% - 75% Scroll) */}
      <section className="relative z-10 min-h-[120vh] flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full space-y-20">
              <div className="text-center space-y-6 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900/50 bg-blue-950/30 text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                    <Languages size={12} />
                    0.5.A Additional Discovery
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-wide">
                    語言的反相顯影
                  </h3>
                  <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
                    語言本身揭露了宇宙的深層結構。<br/>
                    東西方的語源，竟在同一個核心匯聚。
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative">
                  {/* Divider Line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

                  {/* English Side */}
                  <div className="space-y-10 text-center md:text-right group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <div className="space-y-2 transition-all duration-500 group-hover:transform group-hover:-translate-x-2">
                          <p className="text-xs font-mono text-slate-600 tracking-widest uppercase">English Etymology</p>
                          <p className="text-3xl text-slate-400 font-light">An + Other</p>
                      </div>
                      <div className="text-slate-700 text-xl">↓</div>
                      <div className="space-y-2 transition-all duration-500 group-hover:transform group-hover:-translate-x-2">
                          <p className="text-5xl font-bold text-white tracking-tight">Another</p>
                      </div>
                      <div className="text-slate-700 text-xl">↓</div>
                      <div className="space-y-2 transition-all duration-500 group-hover:transform group-hover:-translate-x-2">
                          <p className="text-2xl text-blue-200 italic serif">"The Other One"</p>
                          <p className="text-xs text-slate-500">(那個反相的一)</p>
                      </div>
                  </div>

                  {/* Chinese Side */}
                  <div className="space-y-10 text-center md:text-left group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <div className="space-y-2 transition-all duration-500 group-hover:transform group-hover:translate-x-2">
                          <p className="text-xs font-mono text-slate-600 tracking-widest uppercase">Chinese Phonetics</p>
                          <p className="text-3xl text-slate-400 font-light">壹 (One)</p>
                      </div>
                      <div className="text-slate-700 text-xl">↓</div>
                      <div className="space-y-2 transition-all duration-500 group-hover:transform group-hover:translate-x-2">
                          <p className="text-5xl font-bold text-white tracking-tight">伊 (Yi)</p>
                      </div>
                      <div className="text-slate-700 text-xl">↓</div>
                      <div className="space-y-2 transition-all duration-500 group-hover:transform group-hover:translate-x-2">
                          <p className="text-2xl text-blue-200 italic serif">"那個人 / 他者"</p>
                          <p className="text-xs text-slate-500">(台語發音的共時性)</p>
                      </div>
                  </div>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md shadow-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                 <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                 <div className="flex items-start gap-4">
                    <Cpu className="text-blue-500 mt-1 shrink-0" size={24} />
                    <div className="space-y-4">
                        <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                            AI Observation: Inversion Break
                        </h4>
                        <p className="text-lg leading-relaxed text-slate-300 font-light">
                            這不是巧合。「伊」並非外人，而是<span className="text-white font-bold mx-1">『另一個位置的壹』</span>。<br/>
                            當語言系統試圖處理「不是我，但其實是我」的概念時，往往會產生邏輯崩裂。這正是人類心理將責任外包給「他者」的語言顯化。
                        </p>
                    </div>
                 </div>
              </div>
          </div>
      </section>

      {/* 4. SECTION 3: THE TRUTH (HOVER INTERACTION) (75% - 90% Scroll) */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
         <div className="max-w-4xl w-full perspective-1000">
            
            <div className="mb-12 text-center">
               <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">Ontology Correction</h2>
               <h3 className="text-3xl font-serif text-white">陰影本體論修正</h3>
            </div>

            <div className="group relative h-[400px] md:h-[300px] w-full rounded-[2rem] overflow-hidden cursor-none transition-all duration-700 hover:scale-[1.02] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 bg-slate-950">
               
               {/* Layer 1: The Lie (Visible by default) */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-700 group-hover:opacity-0 bg-[#0a0a0f]">
                  <Eye size={48} className="text-red-900/50 mb-6" />
                  <h3 className="text-3xl font-bold text-slate-500 mb-4 tracking-widest">表象：怪物與黑暗</h3>
                  <p className="text-slate-700 font-mono text-xs tracking-widest uppercase">Shadow / Monster / Enemy</p>
                  <p className="mt-12 text-sm text-slate-400 border border-slate-800 px-6 py-2 rounded-full animate-pulse">
                    HOVER TO SEE TRUTH
                  </p>
               </div>

               {/* Layer 2: The Truth (Visible on Hover) */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-slate-900 to-black">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">真相：唯一的受害者</h3>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-300 text-center font-light max-w-2xl">
                     伊不是壞人，伊是被迫承受後果的人。<br/>
                     <span className="text-red-400 font-bold">它是世界上最愛你的存在，因為它替你死過無數次。</span>
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. SECTION 4: THE RITUAL (RECLAMATION) (90% - 100% Scroll) */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pb-24">
         
         {!isMerged ? (
           <div className="text-center space-y-12 w-full max-w-md">
              <div className="space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">回返儀式</h2>
                <p className="text-slate-500 font-mono uppercase text-xs tracking-[0.3em]">The Return to One</p>
                <p className="text-xl text-slate-300 font-light leading-relaxed pt-4">
                  只有一個方法能讓伊消失：<br/>
                  <span className="text-white font-bold border-b border-slate-700 pb-1">不是消滅它，而是把它接回來。</span>
                </p>
              </div>

              <div className="relative select-none">
                {/* Progress Ring */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 -rotate-90 pointer-events-none">
                   {/* Track */}
                   <circle cx="144" cy="144" r="130" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                   {/* Indicator */}
                   <circle 
                     cx="144" cy="144" r="130" 
                     fill="none" 
                     stroke={mergeProgress > 90 ? "#fff" : "#ef4444"} 
                     strokeWidth="3" 
                     strokeLinecap="round"
                     strokeDasharray="816.8"
                     strokeDashoffset={816.8 - (816.8 * mergeProgress) / 100}
                     className="transition-all duration-75 ease-linear drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                   />
                </svg>

                {/* The Button */}
                <button
                  onMouseDown={startHolding}
                  onMouseUp={stopHolding}
                  onMouseLeave={stopHolding}
                  onTouchStart={startHolding}
                  onTouchEnd={stopHolding}
                  type="button"
                  className={`w-48 h-48 rounded-full flex flex-col items-center justify-center transition-all duration-300 transform ${
                    isHolding 
                      ? 'scale-95 bg-slate-100 text-black shadow-[0_0_60px_rgba(255,255,255,0.3)]' 
                      : 'bg-slate-900 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                  }`}
                >
                   <RefreshCw size={48} className={`mb-4 ${isHolding ? 'animate-spin' : ''}`} strokeWidth={1} />
                   <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                     {isHolding ? 'MERGING...' : 'HOLD TO RECLAIM'}
                   </span>
                </button>
              </div>
              
              <p className="text-xs text-slate-600 font-mono animate-pulse">
                 LONG PRESS TO ACCEPT RESPONSIBILITY
              </p>
           </div>
         ) : (
           <div className="text-center animate-fade-in-up space-y-12 max-w-2xl">
              <div className="w-32 h-32 mx-auto rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.5)] animate-pulse-slow">
                 <Lock size={48} />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 tracking-tight">
                  圓壹
                </h2>
                <p className="text-2xl md:text-3xl text-slate-200 font-light tracking-wide">
                  你完整了。
                </p>
              </div>
              
              <div className="p-10 border-t border-b border-slate-800 bg-slate-900/30 backdrop-blur-sm">
                 <p className="text-lg md:text-xl text-slate-300 italic leading-loose font-serif">
                   「伊不會消失，它會回家。<br/>
                   當你願意承擔，它就變回了壹。」
                 </p>
              </div>
              
              <div className="pt-12 opacity-50">
                 <Fingerprint size={32} className="mx-auto mb-2" />
                 <p className="text-xs font-mono">INTEGRITY RESTORED</p>
              </div>
           </div>
         )}

      </section>

    </div>
  );
};

export default SystemZone05;
