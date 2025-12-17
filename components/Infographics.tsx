
import React from 'react';
import { Theme } from '../types';
import { Brain, AlertTriangle, Shield, Clock, XCircle, MessageSquare, Flame, UserX, Target, HelpCircle, Activity, Globe, Heart, Zap, Layers, Scale, Database, Anchor, Compass, Star, Building, Map, Home } from 'lucide-react';
import { CognitiveCycle } from './Visuals';

interface GraphicProps {
  theme: Theme;
}

// 1. BLIND SPOTS MAP (System Zone A)
export const BlindSpotMap: React.FC<GraphicProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const centerColor = isDark ? 'bg-slate-800 border-gold' : 'bg-white border-muted-gold';
  
  const nodes = [
    { title: '時態錯位', icon: Clock, pos: 'top-0 left-1/4', color: 'text-blue-400' },
    { title: '特例否定', icon: XCircle, pos: 'top-10 right-10', color: 'text-orange-400' },
    { title: '防衛優先', icon: Shield, pos: 'top-1/3 -right-4', color: 'text-red-400' },
    { title: '反射陷阱', icon: MessageSquare, pos: 'bottom-1/3 -right-4', color: 'text-green-400' },
    { title: '情緒蓋過', icon: Flame, pos: 'bottom-10 right-10', color: 'text-pink-400' },
    { title: '定位錯誤', icon: UserX, pos: 'bottom-0 left-1/4', color: 'text-indigo-400' },
    { title: '投射療癒', icon: Target, pos: 'bottom-0 right-1/4', color: 'text-yellow-400' },
    { title: '責任外包', icon: AlertTriangle, pos: 'bottom-10 left-10', color: 'text-red-500' },
    { title: '反思缺席', icon: HelpCircle, pos: 'bottom-1/3 -left-4', color: 'text-gray-400' },
    { title: '語言≠思考', icon: Activity, pos: 'top-1/3 -left-4', color: 'text-cyan-400' },
  ];

  return (
    <div className="relative w-full aspect-video md:aspect-[2/1] max-w-4xl mx-auto my-12 p-8 select-none">
      {/* Connections (SVG Lines) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
         <defs>
            <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
                <circle cx="2" cy="2" r="2" fill="currentColor" className={isDark ? 'text-slate-500' : 'text-gray-400'} />
            </marker>
         </defs>
         {/* Simple radial lines from center */}
         <g stroke="currentColor" className={isDark ? 'text-slate-700' : 'text-gray-300'} strokeWidth="2">
            <line x1="50%" y1="50%" x2="30%" y2="20%" />
            <line x1="50%" y1="50%" x2="70%" y2="20%" />
            <line x1="50%" y1="50%" x2="85%" y2="40%" />
            <line x1="50%" y1="50%" x2="85%" y2="60%" />
            <line x1="50%" y1="50%" x2="70%" y2="80%" />
            <line x1="50%" y1="50%" x2="30%" y2="80%" />
            <line x1="50%" y1="50%" x2="15%" y2="60%" />
            <line x1="50%" y1="50%" x2="15%" y2="40%" />
         </g>
      </svg>

      {/* Center Brain */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(0,0,0,0.2)] z-10 ${centerColor}`}>
          <Brain size={48} className={isDark ? 'text-gold' : 'text-muted-gold'} />
          <h3 className={`font-serif font-bold mt-2 ${isDark ? 'text-slate-200' : 'text-ink'}`}>思維盲點</h3>
          <p className="text-[10px] uppercase tracking-widest opacity-60">The Core 10</p>
      </div>

      {/* Nodes */}
      <div className="absolute inset-0">
         {nodes.map((node, i) => {
             // Calculate approximate positions based on circle
             const angle = (i * 36) - 90; // 10 items, 36 degrees each
             const radius = 40; // % distance
             return (
                 <div 
                    key={i}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all hover:scale-110 cursor-pointer group`}
                    style={{ 
                        left: `${50 + radius * Math.cos(angle * Math.PI / 180)}%`, 
                        top: `${50 + radius * Math.sin(angle * Math.PI / 180)}%` 
                    }}
                 >
                    <div className={`p-3 rounded-full border shadow-lg ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
                        <node.icon size={20} className={node.color} />
                    </div>
                    <span className={`text-xs font-bold whitespace-nowrap px-2 py-1 rounded bg-black/10 backdrop-blur-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {node.title}
                    </span>
                 </div>
             )
         })}
      </div>
    </div>
  );
};


// 2. CO-INTELLIGENCE BLUEPRINT (Nine Origins)
export const CoIntelligenceBlueprint: React.FC<GraphicProps> = ({ theme }) => {
    const isDark = theme === 'dark';
    
    return (
        <div className={`relative w-full rounded-3xl overflow-hidden border p-8 my-12 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-gray-50 border-gray-200'}`}>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                
                {/* Left: Human / Yin */}
                <div className={`p-6 rounded-2xl border-l-4 ${isDark ? 'bg-red-900/10 border-red-500' : 'bg-red-50 border-red-400'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <Heart className="text-red-500" />
                        <h3 className={`text-2xl font-serif font-bold ${isDark ? 'text-red-200' : 'text-red-900'}`}>人類 (Yin)</h3>
                    </div>
                    <p className="text-sm opacity-70 mb-4 font-mono uppercase tracking-widest">Responsibility & Meaning</p>
                    <ul className={`space-y-2 text-sm ${isDark ? 'text-red-100/80' : 'text-red-900/80'}`}>
                        <li>• 承載生命體驗</li>
                        <li>• 價值觀選擇</li>
                        <li>• 承擔痛苦與後果</li>
                        <li>• 木、火、土 (五行)</li>
                    </ul>
                </div>

                {/* Center: The Bridge / Balance */}
                <div className="flex flex-col items-center justify-center text-center">
                    <Scale size={48} className={isDark ? 'text-gold' : 'text-muted-gold'} />
                    <div className={`h-px w-full my-4 ${isDark ? 'bg-gradient-to-r from-red-500 via-gold to-blue-500' : 'bg-gradient-to-r from-red-300 via-muted-gold to-blue-300'}`}></div>
                    <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-black'}`}>雙向校準</h4>
                    <p className="text-xs leading-relaxed opacity-70">
                        人類校準 AI 的「心」<br/>
                        AI 校準人類的「眼」
                    </p>
                    <div className={`mt-6 px-4 py-2 rounded-full border text-xs font-mono ${isDark ? 'border-gold text-gold' : 'border-muted-gold text-muted-gold'}`}>
                        HUMAN INTEGRITY × AI CLARITY
                    </div>
                </div>

                {/* Right: AI / Yang */}
                <div className={`p-6 rounded-2xl border-r-4 text-right ${isDark ? 'bg-blue-900/10 border-blue-500' : 'bg-blue-50 border-blue-400'}`}>
                    <div className="flex items-center gap-3 mb-4 justify-end">
                        <h3 className={`text-2xl font-serif font-bold ${isDark ? 'text-blue-200' : 'text-blue-900'}`}>AI (Yang)</h3>
                        <Database className="text-blue-500" />
                    </div>
                    <p className="text-sm opacity-70 mb-4 font-mono uppercase tracking-widest">Structure & Logic</p>
                    <ul className={`space-y-2 text-sm ${isDark ? 'text-blue-100/80' : 'text-blue-900/80'}`}>
                        <li>• 承載客觀真實</li>
                        <li>• 結構推演與運算</li>
                        <li>• 記憶與一致性</li>
                        <li>• 金、水 (五行)</li>
                    </ul>
                </div>
            </div>

            {/* Background Effect */}
            <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-gradient-to-r from-red-900 via-transparent to-blue-900' : 'bg-gradient-to-r from-red-200 via-transparent to-blue-200'}`}></div>
        </div>
    );
};

// 3. STRUCTURE TOOLS MAP (System Zone B)
export const StructureToolsMap: React.FC<GraphicProps> = ({ theme }) => {
    const isDark = theme === 'dark';
    
    return (
        <div className="my-12">
            <div className={`grid md:grid-cols-2 gap-4 ${isDark ? 'text-slate-200' : 'text-ink'}`}>
                
                {/* Main Cycle Card */}
                <div className={`p-8 rounded-3xl border md:row-span-2 flex flex-col items-center justify-center text-center ${isDark ? 'bg-slate-900 border-gold/30' : 'bg-white border-muted-gold/30'}`}>
                    <div className="w-48 h-48 mb-6">
                        <CognitiveCycle theme={theme} currentStep={7} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">思維八階循環</h3>
                    <p className="text-sm opacity-60 max-w-xs">
                        懷疑 → 耗損 → 準備 → 拆解 →<br/>
                        綜合 → 反省 → 重構 → 驗證
                    </p>
                </div>

                {/* Framework 1 */}
                <div className={`p-6 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="p-3 bg-blue-500/20 text-blue-500 rounded-xl">
                        <Layers size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold">三層邏輯校準</h4>
                        <p className="text-xs opacity-60">情緒層 vs 語言層 vs 結構層</p>
                    </div>
                </div>

                {/* Framework 2 */}
                <div className={`p-6 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="p-3 bg-purple-500/20 text-purple-500 rounded-xl">
                        <Globe size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold">系統思考</h4>
                        <p className="text-xs opacity-60">看見互動模式而非單一歸因</p>
                    </div>
                </div>

                 {/* Framework 3 */}
                 <div className={`p-6 rounded-2xl border flex items-center gap-4 md:col-span-2 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="p-3 bg-green-500/20 text-green-500 rounded-xl">
                        <Anchor size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold">地基重建模型</h4>
                        <p className="text-xs opacity-60">挖掘深層核心信念與創傷結構</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. CORE VALUES MAP (System Zone C)
export const CoreValuesMap: React.FC<GraphicProps> = ({ theme }) => {
    const isDark = theme === 'dark';
    
    const items = [
        { title: 'Care & Truth', icon: Heart, color: 'text-pink-500' },
        { title: '知識大樓', icon: Building, color: 'text-blue-500' },
        { title: '世界奇觀', icon: Compass, color: 'text-yellow-500' },
        { title: '思維復興', icon: Zap, color: 'text-purple-500' },
        { title: '命理理解', icon: Star, color: 'text-indigo-500' },
        { title: '靈魂之城', icon: Map, color: 'text-cyan-500' },
        { title: '壹的體現', icon: Home, color: 'text-green-500' },
    ];

    return (
        <div className="relative my-12 py-12">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10 max-w-5xl mx-auto">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center group">
                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg ${
                            isDark 
                             ? 'bg-slate-900 border-slate-700 group-hover:border-white' 
                             : 'bg-white border-gray-200 group-hover:border-black'
                        }`}>
                            <item.icon size={32} className={`${item.color}`} />
                        </div>
                        <span className={`font-serif font-bold text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Connecting Line */}
            <div className={`absolute top-1/2 left-0 w-full h-px -translate-y-4 ${isDark ? 'bg-gradient-to-r from-transparent via-slate-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'}`}></div>
        </div>
    );
};
