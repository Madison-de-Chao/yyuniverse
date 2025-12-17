
import React, { useState } from 'react';
import { Theme } from '../types';

interface VisualProps {
  theme: Theme;
  className?: string;
  currentStep?: number;
  showLabels?: boolean;
}

// ==========================================
// ZONE C: PHILOSOPHY TOOLS - DIAGRAMS (Wireframes)
// ==========================================

export const CareTruthDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  const accent = isDark ? '#FFD700' : '#A67C52';
  
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       <rect x="60" y="35" width="80" height="80" rx="4" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 2" />
       <circle cx="100" cy="75" r="25" fill="none" stroke={accent} strokeWidth="2" />
       <path d="M 100 20 L 100 35" stroke={stroke} strokeWidth="1" />
       <path d="M 100 115 L 100 130" stroke={stroke} strokeWidth="1" />
       <path d="M 45 75 L 60 75" stroke={stroke} strokeWidth="1" />
       <path d="M 140 75 L 155 75" stroke={stroke} strokeWidth="1" />
       <text x="100" y="145" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">STRUCTURE vs CORE</text>
    </svg>
  );
};

export const KnowledgeTowerDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       <line x1="20" y1="130" x2="180" y2="130" stroke={stroke} strokeWidth="1" />
       {/* Level 1 */}
       <rect x="50" y="100" width="100" height="30" fill="none" stroke={stroke} strokeWidth="1.5" />
       {/* Level 2 */}
       <rect x="70" y="70" width="60" height="30" fill="none" stroke={stroke} strokeWidth="1.5" />
       {/* Level 3 */}
       <rect x="85" y="40" width="30" height="30" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" />
       {/* Labels */}
       <text x="100" y="120" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">EXP</text>
       <text x="100" y="90" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">CON</text>
       <text x="100" y="60" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">SYS</text>
    </svg>
  );
};

export const WorldWonderDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  const accent = isDark ? '#FFD700' : '#A67C52';

  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       {/* Tower */}
       <path d="M 90 130 L 95 30 L 105 30 L 110 130 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
       {/* Light Rays */}
       <line x1="100" y1="30" x2="60" y2="10" stroke={accent} strokeWidth="1" strokeDasharray="2 2" />
       <line x1="100" y1="30" x2="140" y2="10" stroke={accent} strokeWidth="1" strokeDasharray="2 2" />
       <line x1="100" y1="30" x2="100" y2="5" stroke={accent} strokeWidth="1" strokeDasharray="2 2" />
       {/* Ground */}
       <path d="M 50 130 Q 100 110 150 130" fill="none" stroke={stroke} strokeWidth="1" />
       <text x="100" y="145" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">INFLUENCE MODEL</text>
    </svg>
  );
};

export const ThoughtPrismDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  const accent = isDark ? '#FFD700' : '#A67C52';

  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       {/* Prism */}
       <path d="M 100 40 L 140 110 L 60 110 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
       {/* Input */}
       <line x1="20" y1="80" x2="80" y2="80" stroke={stroke} strokeWidth="1" strokeDasharray="4 2" />
       {/* Output */}
       <line x1="120" y1="80" x2="180" y2="60" stroke={accent} strokeWidth="1" />
       <line x1="120" y1="80" x2="180" y2="80" stroke={accent} strokeWidth="1" />
       <line x1="120" y1="80" x2="180" y2="100" stroke={accent} strokeWidth="1" />
       <text x="100" y="130" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">REFRACTION</text>
    </svg>
  );
};

export const MentalHedgeDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  const accent = isDark ? '#FFD700' : '#A67C52';

  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       {/* Volatility Line */}
       <polyline points="20,80 40,40 60,110 80,30 100,90" fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" />
       {/* Hedge Line */}
       <line x1="20" y1="120" x2="180" y2="120" stroke={accent} strokeWidth="2" />
       <rect x="100" y="20" width="80" height="100" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
       <text x="140" y="110" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">ASSET PROTECTION</text>
    </svg>
  );
};

export const CityAbstractDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       <polyline points="20,130 40,80 60,100 80,60 100,110 120,50 140,90 160,130" fill="none" stroke={stroke} strokeWidth="1.5" />
       <rect x="75" y="65" width="10" height="10" stroke={stroke} strokeWidth="0.5" fill="none" />
       <rect x="115" y="55" width="10" height="10" stroke={stroke} strokeWidth="0.5" fill="none" />
       <text x="100" y="145" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace">INTERNAL TOPOGRAPHY</text>
    </svg>
  );
};

export const ConstellationMapDiagram: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const stroke = isDark ? '#94A3B8' : '#475569';
  const accent = isDark ? '#FFD700' : '#A67C52';

  return (
    <svg viewBox="0 0 200 150" className="w-full h-full">
       <circle cx="50" cy="100" r="2" fill={stroke} />
       <circle cx="80" cy="40" r="2" fill={stroke} />
       <circle cx="150" cy="60" r="2" fill={stroke} />
       <circle cx="120" cy="120" r="2" fill={stroke} />
       
       <line x1="50" y1="100" x2="80" y2="40" stroke={stroke} strokeWidth="0.5" strokeDasharray="2 2" />
       <line x1="80" y1="40" x2="150" y2="60" stroke={stroke} strokeWidth="0.5" strokeDasharray="2 2" />
       <line x1="150" y1="60" x2="120" y2="120" stroke={stroke} strokeWidth="0.5" strokeDasharray="2 2" />
       <line x1="120" y1="120" x2="50" y2="100" stroke={stroke} strokeWidth="0.5" strokeDasharray="2 2" />
       
       <text x="100" y="140" textAnchor="middle" fill={accent} fontSize="8" fontFamily="monospace">MEANING STRUCTURE</text>
    </svg>
  );
};


// ==========================================
// ZONE C: PHILOSOPHY TOOLS - ILLUSTRATIONS (Full Color)
// ==========================================

export const CareTruthIllustration: React.FC<VisualProps> = ({ theme }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900">
       <defs>
         <radialGradient id="care-warmth" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F472B6" stopOpacity="0.9" /> {/* Pink */}
            <stop offset="60%" stopColor="#BE185D" stopOpacity="0.6" /> {/* Dark Pink */}
            <stop offset="100%" stopColor="#831843" stopOpacity="0" />
         </radialGradient>
         <linearGradient id="truth-frame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" /> {/* Blue */}
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
         </linearGradient>
         <filter id="glow-soft">
           <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
           <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
         </filter>
       </defs>
       
       <rect width="400" height="300" fill="#0f172a" />
       <circle cx="200" cy="150" r="120" fill="url(#care-warmth)" opacity="0.15" />

       {/* Truth: The Crystalline Structure */}
       <g transform="translate(200, 150)">
          <path d="M -80 -80 L 80 -80 L 80 80 L -80 80 Z" fill="none" stroke="url(#truth-frame)" strokeWidth="1" opacity="0.3" />
          <rect x="-60" y="-60" width="120" height="120" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" filter="url(#glow-soft)" opacity="0.8" />
          <line x1="-60" y1="0" x2="60" y2="0" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />
          <line x1="0" y1="-60" x2="0" y2="60" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />
          <text x="0" y="-70" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="monospace" letterSpacing="2">TRUTH FRAME</text>
       </g>

       {/* Care: The Organic Core */}
       <g transform="translate(200, 150)" className="animate-pulse-slow">
          <circle r="35" fill="url(#care-warmth)" filter="url(#glow-soft)" />
          <circle r="20" fill="#FBCFE8" opacity="0.3" />
          <path d="M -10 -5 Q 0 10 10 -5" fill="none" stroke="#831843" strokeWidth="2" opacity="0.2" />
          <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" opacity="0.9">CARE</text>
       </g>
    </svg>
  );
};

export const ThoughtPrismIllustration: React.FC<VisualProps> = ({ theme }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900">
       <defs>
         <linearGradient id="prism-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
         </linearGradient>
         <linearGradient id="input-beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.8" />
         </linearGradient>
       </defs>
       
       <rect width="400" height="300" fill="#1e1e24" />
       
       <path d="M -20 150 L 150 150" stroke="url(#input-beam)" strokeWidth="4" />
       <text x="60" y="140" fill="#94a3b8" fontSize="10" fontFamily="monospace">NOISE INPUT</text>

       <path d="M 150 150 L 220 50 L 290 150 Z" fill="url(#prism-glass)" stroke="white" strokeWidth="1" opacity="0.9" />
       <text x="220" y="130" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" letterSpacing="1">SELF</text>

       <path d="M 260 110 L 420 80" stroke="#F87171" strokeWidth="3" opacity="0.8" />
       <text x="350" y="90" fill="#F87171" fontSize="10">Value</text>
       <path d="M 275 130 L 420 150" stroke="#4ADE80" strokeWidth="3" opacity="0.8" />
       <text x="350" y="145" fill="#4ADE80" fontSize="10">Logic</text>
       <path d="M 260 150 L 420 220" stroke="#60A5FA" strokeWidth="3" opacity="0.8" />
       <text x="350" y="200" fill="#60A5FA" fontSize="10">Structure</text>
       
       <circle cx="190" cy="130" r="15" fill="white" opacity="0.2" filter="blur(5px)" />
    </svg>
  );
};

export const ConstellationMapIllustration: React.FC<VisualProps> = ({ theme }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900">
       <defs>
         <radialGradient id="space-grad" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#000000" />
         </radialGradient>
         <filter id="star-glow">
           <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
           <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
         </filter>
       </defs>
       
       <rect width="400" height="300" fill="url(#space-grad)" />
       
       <g fill="white" opacity="0.3">
          {[...Array(20)].map((_, i) => (
             <circle key={i} cx={Math.random() * 400} cy={Math.random() * 300} r={Math.random() * 1.5} />
          ))}
       </g>

       <g stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.4">
          <line x1="100" y1="200" x2="150" y2="100" />
          <line x1="150" y1="100" x2="250" y2="80" />
          <line x1="250" y1="80" x2="300" y2="150" />
          <line x1="300" y1="150" x2="220" y2="220" />
          <line x1="220" y1="220" x2="100" y2="200" />
          <line x1="150" y1="100" x2="220" y2="220" strokeDasharray="4 4" />
       </g>

       <g filter="url(#star-glow)">
          <circle cx="100" cy="200" r="4" fill="#DDD6FE" />
          <circle cx="150" cy="100" r="5" fill="#DDD6FE" />
          <circle cx="250" cy="80" r="6" fill="#DDD6FE" />
          <circle cx="300" cy="150" r="4" fill="#DDD6FE" />
          <circle cx="220" cy="220" r="5" fill="#DDD6FE" />
       </g>

       <text x="250" y="60" fill="#A78BFA" fontSize="12" fontWeight="bold">Event A</text>
       <text x="80" y="220" fill="#A78BFA" fontSize="12" fontWeight="bold">Event B</text>
       
       <text x="200" y="270" textAnchor="middle" fill="#E2E8F0" fontSize="14" fontStyle="italic" opacity="0.8">
         "Meaning is the line we draw."
       </text>
    </svg>
  );
};

export const MentalHedgeIllustration: React.FC<VisualProps> = ({ theme }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900">
       <defs>
          <linearGradient id="storm-sky" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" stopColor="#334155" />
             <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="hedge-wall" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#059669" stopOpacity="0.2" />
             <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
             <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
          </linearGradient>
       </defs>
       
       <rect width="400" height="200" fill="url(#storm-sky)" />
       
       <path d="M 0 200 Q 50 180 100 220 T 200 200 T 300 240 T 400 200 L 400 300 L 0 300 Z" fill="#1e293b" />
       <path d="M 0 220 Q 50 200 100 240 T 200 220 T 300 260 T 400 220 L 400 300 L 0 300 Z" fill="#0f172a" opacity="0.7" />
       
       <path d="M 50 180 L 350 180 L 350 280 L 50 280 Z" fill="url(#hedge-wall)" stroke="#10B981" strokeWidth="2" />
       <polyline points="50,230 100,225 150,220 200,210 250,205 300,200 350,190" fill="none" stroke="#34D399" strokeWidth="3" />
       
       <text x="200" y="100" textAnchor="middle" fill="#94a3b8" fontSize="30" fontWeight="bold" opacity="0.1">CHAOS</text>
       <text x="200" y="250" textAnchor="middle" fill="#D1FAE5" fontSize="14" fontWeight="bold" letterSpacing="1">INTERNAL CAPITAL</text>
    </svg>
  );
};

export const CityAbstractIllustration: React.FC<VisualProps> = ({ theme }) => {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const zones = {
    work: { label: "Ambition District", desc: "事業與成就的高樓區。燈火通明，但容易過熱。" },
    memory: { label: "Old Town", desc: "記憶與童年的老街區。結構脆弱，但藏著核心價值。" },
    shadow: { label: "The Underbelly", desc: "被壓抑的陰影地下道。這是城市的排水系統。" },
    growth: { label: "Reconstruction Site", desc: "正在重建的自我區域。混亂，但充滿生機。" }
  };

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900 select-none">
       <defs>
          <linearGradient id="city-sky" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" stopColor="#1e1b4b" />
             <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
          <filter id="glow-zone">
             <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
             <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
       </defs>
       
       <rect width="400" height="300" fill="url(#city-sky)" />
       <circle cx="320" cy="60" r="30" fill="#FEF3C7" opacity="0.8" filter="blur(2px)" />

       {/* ZONE 1: WORK DISTRICT (Left Skyscrapers) */}
       <g 
         onMouseEnter={() => setHoveredZone('work')} 
         onMouseLeave={() => setHoveredZone(null)}
         className="cursor-pointer transition-opacity duration-300"
         opacity={hoveredZone && hoveredZone !== 'work' ? 0.3 : 1}
       >
          <path d="M 20 300 L 20 100 L 60 80 L 100 100 L 100 300 Z" fill="#312e81" stroke="#60A5FA" strokeWidth={hoveredZone === 'work' ? 2 : 0} />
          <rect x="30" y="110" width="10" height="180" fill={hoveredZone === 'work' ? '#FCD34D' : '#94a3b8'} opacity="0.5" />
          <rect x="50" y="130" width="10" height="160" fill={hoveredZone === 'work' ? '#FCD34D' : '#94a3b8'} opacity="0.3" />
          <rect x="70" y="110" width="10" height="180" fill={hoveredZone === 'work' ? '#FCD34D' : '#94a3b8'} opacity="0.5" />
       </g>

       {/* ZONE 2: OLD TOWN (Right Low-rises) */}
       <g 
         onMouseEnter={() => setHoveredZone('memory')} 
         onMouseLeave={() => setHoveredZone(null)}
         className="cursor-pointer transition-opacity duration-300"
         opacity={hoveredZone && hoveredZone !== 'memory' ? 0.3 : 1}
       >
          <path d="M 280 300 L 280 200 L 320 180 L 360 200 L 360 300 Z" fill="#4338ca" stroke="#A78BFA" strokeWidth={hoveredZone === 'memory' ? 2 : 0} />
          <path d="M 360 300 L 360 220 L 400 240 L 400 300 Z" fill="#3730a3" stroke="#A78BFA" strokeWidth={hoveredZone === 'memory' ? 2 : 0} />
          <rect x="290" y="220" width="20" height="20" fill={hoveredZone === 'memory' ? '#F472B6' : '#64748b'} opacity="0.6" />
          <rect x="330" y="220" width="10" height="40" fill={hoveredZone === 'memory' ? '#F472B6' : '#64748b'} opacity="0.4" />
       </g>

       {/* ZONE 3: CONSTRUCTION (Center) */}
       <g 
         onMouseEnter={() => setHoveredZone('growth')} 
         onMouseLeave={() => setHoveredZone(null)}
         className="cursor-pointer transition-opacity duration-300"
         opacity={hoveredZone && hoveredZone !== 'growth' ? 0.3 : 1}
       >
          <path d="M 230 50 L 180 300 L 280 300 Z" fill="#F59E0B" opacity={hoveredZone === 'growth' ? 0.3 : 0.1} /> 
          <rect x="200" y="200" width="60" height="100" fill="#1e293b" stroke="#F59E0B" strokeWidth={hoveredZone === 'growth' ? 2 : 0} />
          <line x1="200" y1="200" x2="260" y2="300" stroke="#F59E0B" strokeWidth="1" />
          <line x1="260" y1="200" x2="200" y2="300" stroke="#F59E0B" strokeWidth="1" />
       </g>

       {/* ZONE 4: SHADOW (Bottom) */}
       <g 
         onMouseEnter={() => setHoveredZone('shadow')} 
         onMouseLeave={() => setHoveredZone(null)}
         className="cursor-pointer transition-opacity duration-300"
         opacity={hoveredZone && hoveredZone !== 'shadow' ? 0.3 : 1}
       >
          <rect x="0" y="280" width="400" height="20" fill="#000" opacity="0.8" />
          <path d="M 0 300 L 400 300" stroke={hoveredZone === 'shadow' ? '#EF4444' : 'transparent'} strokeWidth="4" />
       </g>

       {/* INFO OVERLAY */}
       {hoveredZone && (
         <g className="animate-fade-in pointer-events-none">
            <rect x="50" y="20" width="300" height="60" rx="8" fill="rgba(0,0,0,0.8)" stroke="white" strokeWidth="1" />
            <text x="200" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
               {zones[hoveredZone as keyof typeof zones].label}
            </text>
            <text x="200" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="10">
               {zones[hoveredZone as keyof typeof zones].desc}
            </text>
         </g>
       )}
       
       {!hoveredZone && (
          <text x="200" y="290" textAnchor="middle" fill="white" fontSize="10" opacity="0.5" letterSpacing="2">HOVER TO INSPECT CITY ZONES</text>
       )}
    </svg>
  );
};

export const KnowledgeTowerIllustration: React.FC<VisualProps> = ({ theme }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900">
       <defs>
          <linearGradient id="tower-grad" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#334155" />
             <stop offset="50%" stopColor="#64748b" />
             <stop offset="100%" stopColor="#334155" />
          </linearGradient>
       </defs>
       
       <rect width="400" height="300" fill="#e2e8f0" /> 
       <circle cx="350" cy="50" r="40" fill="#FDBA74" opacity="0.5" filter="blur(10px)" /> 

       <rect y="250" width="400" height="50" fill="#57534E" />

       <rect x="100" y="200" width="200" height="50" fill="#475569" stroke="#1e293b" strokeWidth="2" />
       <text x="200" y="230" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="bold">EXPERIENCE</text>

       <rect x="130" y="150" width="140" height="50" fill="#94a3b8" stroke="#1e293b" strokeWidth="2" />
       <text x="200" y="180" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">CONCEPTS</text>

       <rect x="160" y="100" width="80" height="50" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" opacity="0.9" />
       <text x="200" y="130" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="bold">SYSTEM</text>
       
       <line x1="80" y1="250" x2="100" y2="200" stroke="#000" strokeWidth="2" />
       <line x1="320" y1="250" x2="300" y2="200" stroke="#000" strokeWidth="2" />
    </svg>
  );
};

export const WorldWonderIllustration: React.FC<VisualProps> = ({ theme }) => {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-slate-900">
       <defs>
          <radialGradient id="beacon-light" cx="50%" cy="0%" r="80%">
             <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
             <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </radialGradient>
       </defs>
       
       <rect width="400" height="300" fill="#27272a" />
       
       <path d="M 200 100 L 50 300 L 350 300 Z" fill="url(#beacon-light)" opacity="0.3" />
       <circle cx="200" cy="100" r="15" fill="#FCD34D" filter="blur(5px)" className="animate-pulse" />

       <path d="M 180 300 L 190 100 L 210 100 L 220 300 Z" fill="#171717" stroke="#A16207" strokeWidth="1" />
       
       <path d="M 0 300 L 100 250 L 180 300 Z" fill="#1c1917" />
       <path d="M 400 300 L 300 260 L 220 300 Z" fill="#1c1917" />
       
       <circle cx="100" cy="280" r="3" fill="#9ca3af" />
       <circle cx="110" cy="285" r="3" fill="#9ca3af" />
       <circle cx="300" cy="280" r="3" fill="#9ca3af" />

       <text x="200" y="50" textAnchor="middle" fill="#FCD34D" fontSize="14" letterSpacing="2" fontWeight="bold">INFLUENCE</text>
    </svg>
  );
};

// ... (Rest of existing visual components like IntegrityMotherModel, ShadowSynthesis, CosmicRingSVG, ZenEnsoSVG etc. remain unchanged) ...

export const IntegrityMotherModel: React.FC<VisualProps> = ({ theme, className = "", showLabels = true }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2/1] flex items-center justify-center my-12 group ${className}`}>
      
      {/* Labels Layer - Shrinked & Animated */}
      {showLabels && (
        <div className="absolute inset-0 pointer-events-none z-20">
           {/* Top Label */}
           <div className="absolute top-4 left-0 right-0 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className={`font-serif text-sm md:text-base font-bold tracking-widest transition-colors duration-500 ${isDark ? 'text-slate-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]' : 'text-stone-500'}`}>
                 {isDark ? 'THE ZERO LAW' : 'THE ROOT LAW'}
              </h3>
           </div>
           
           {/* Left Label */}
           <div className="absolute left-4 md:left-[20%] top-1/2 -translate-y-1/2 w-[20%] text-left md:text-right pr-4 hidden md:block animate-fade-in" style={{animationDelay: '0.4s'}}>
              <p className={`font-serif text-xs md:text-sm font-bold mb-1 transition-colors duration-500 ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                 {isDark ? 'ALL IS ONE' : 'NON-SEGMENTATION'}
              </p>
              <p className="text-[10px] opacity-60">Structure Fixed</p>
           </div>
           
           {/* Right Label */}
           <div className="absolute right-4 md:right-[20%] top-1/2 -translate-y-1/2 w-[20%] text-right md:text-left pl-4 hidden md:block animate-fade-in" style={{animationDelay: '0.6s'}}>
              <p className={`font-serif text-xs md:text-sm font-bold mb-1 transition-colors duration-500 ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                 DEPTH VARIABLE
              </p>
              <p className={`text-[10px] opacity-60 italic`}>
                 Multi-Layer
              </p>
           </div>
           
           {/* Bottom Label */}
           <div className="absolute bottom-4 left-0 right-0 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <p className={`font-serif text-xs md:text-sm font-bold mb-1 transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                 ERROR = UNFINISHED ARC
              </p>
              <p className={`text-[10px] opacity-50`}>
                 Whole = Incomplete + Incomplete
              </p>
           </div>
        </div>
      )}

      {/* Central Graphic */}
      <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] z-10 transition-all duration-1000 hover:scale-105 cursor-pointer">
         {isDark ? <CosmicRingSVG /> : <ZenEnsoSVG />}
      </div>
    </div>
  );
};

export const ZenEnsoSVG = () => (
  <svg className="w-full h-full overflow-visible animate-draw" viewBox="0 0 200 200">
    <defs>
      <filter id="ink-roughness" x="-50%" y="-50%" width="200%" height="200%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
      </filter>
    </defs>
    <g filter="url(#ink-roughness)" transform="rotate(-45 100 100)">
      <path 
        d="M 100 25 C 165 25 195 65 195 100 C 195 165 155 195 100 195 C 45 195 5 155 5 100 C 5 60 35 30 75 35" 
        fill="none" 
        stroke="#2C2420" 
        strokeWidth="28" 
        strokeLinecap="round"
        opacity="0.9"
      />
    </g>
    <circle cx="100" cy="100" r="40" fill="#F0EBE0" filter="url(#ink-roughness)" opacity="0.2" />
    
    {/* CENTER LOGO TEXT - VERTICAL STACK */}
    <g className="animate-fade-in" style={{ animationDelay: '1s' }}>
      <text x="100" y="85" textAnchor="middle" dominantBaseline="central" fontFamily="'Shippori Mincho', serif" fontWeight="800" fontSize="42" fill="#2C2420" letterSpacing="0.05em">
        元
      </text>
      <text x="100" y="125" textAnchor="middle" dominantBaseline="central" fontFamily="'Shippori Mincho', serif" fontWeight="800" fontSize="42" fill="#2C2420" letterSpacing="0.05em">
        壹
      </text>
    </g>
  </svg>
);

export const CosmicRingSVG = () => (
  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 300">
    <defs>
      <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
      <radialGradient id="core-glow">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>

    <g transform="translate(150, 150)">
      <circle r="140" fill="url(#core-glow)" className="animate-pulse-slow" />
      <g filter="url(#glow-strong)">
        <circle r="115" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" opacity="0.6" />
        <circle r="100" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
      </g>
      
      {/* CENTER LOGO TEXT - VERTICAL STACK */}
      <g className="animate-fade-in" style={{ animationDelay: '1s' }} filter="url(#glow-strong)">
        <text x="0" y="-25" textAnchor="middle" dominantBaseline="central" fontFamily="'Shippori Mincho', serif" fontWeight="800" fontSize="64" fill="#FFD700" letterSpacing="0.05em">
          元
        </text>
        <text x="0" y="35" textAnchor="middle" dominantBaseline="central" fontFamily="'Shippori Mincho', serif" fontWeight="800" fontSize="64" fill="#FFD700" letterSpacing="0.05em">
          壹
        </text>
      </g>
    </g>
  </svg>
);

export const CosmicCompass: React.FC<VisualProps> = ({ theme, className = "" }) => {
  const strokeColor = theme === 'dark' ? 'stroke-gold' : 'stroke-muted-gold';
  return (
    <div className={`relative w-64 h-64 ${className}`}>
      <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" strokeWidth="0.5" className={strokeColor} />
        <path d="M50 2 L50 98 M2 50 L98 50" strokeWidth="0.5" className={strokeColor} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-32 h-32 border-2 rounded-full flex items-center justify-center backdrop-blur-sm ${theme === 'dark' ? 'border-gold/50 bg-gold/5' : 'border-muted-gold/50 bg-white/5'}`}>
          <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-gold' : 'bg-muted-gold'}`} />
        </div>
      </div>
    </div>
  );
};

export const CognitiveCycle: React.FC<VisualProps> = ({ theme, currentStep = 0 }) => {
  const isDark = theme === 'dark';
  const activeColor = isDark ? '#FFD700' : '#A67C52';
  const inactiveColor = isDark ? '#334155' : '#E2E8F0';

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="none" stroke={inactiveColor} strokeWidth="2" opacity="0.3" />
      <path
        d={`M 50 5 A 45 45 0 ${currentStep > 3 ? 1 : 0} 1 ${50 + 45 * Math.sin((currentStep + 1) * (Math.PI / 4))} ${50 - 45 * Math.cos((currentStep + 1) * (Math.PI / 4))}`}
        fill="none"
        stroke={activeColor}
        strokeWidth="3"
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
};

export const UnityField: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const color = isDark ? '#FFD700' : '#A67C52';
  
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
      <defs>
        <radialGradient id="unityGrad">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#unityGrad)" />
      <circle cx="100" cy="100" r="40" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
};

export const DualCore: React.FC<VisualProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const c1 = isDark ? '#EF4444' : '#DC2626'; 
  const c2 = isDark ? '#3B82F6' : '#2563EB'; 
  
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      <circle cx="70" cy="50" r="30" fill={c1} opacity="0.6" />
      <circle cx="130" cy="50" r="30" fill={c2} opacity="0.6" />
    </svg>
  );
};

interface ShadowSynthesisProps extends VisualProps {
  displacement?: number; // 0 to 100
  merge?: boolean;       // true triggers reintegration
}

export const ShadowSynthesis: React.FC<ShadowSynthesisProps> = ({ theme, displacement = 0, merge = false }) => {
  const isDark = theme === 'dark';
  
  // Colors
  const solidColor = isDark ? '#F8FAFC' : '#2C2420'; // White / Ink
  const ghostColor = isDark ? '#94A3B8' : '#8D8172'; // Slate / Earth
  const accentColor = isDark ? '#FFD700' : '#C0392B'; // Gold / Red

  // Calculate positions
  const currentDisplacement = merge ? 0 : displacement;
  
  const ghostX = 150 + (currentDisplacement * 1.2); 
  const oneX = 150 - (currentDisplacement * 0.3); 
  
  const tetherWidth = Math.max(0.5, 4 - currentDisplacement / 20);
  
  // Glitch offset calculation
  const glitchX = merge ? 0 : (Math.random() - 0.5) * (currentDisplacement / 10);
  const glitchY = merge ? 0 : (Math.random() - 0.5) * (currentDisplacement / 10);

  return (
    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 300">
      <defs>
        <filter id="blur-ghost">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="glitch-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={currentDisplacement / 5} />
        </filter>
      </defs>

      {/* 1. The Tether */}
      {(currentDisplacement > 5 || merge) && (
        <g className="transition-all duration-1000">
           <path 
             d={`M ${oneX} 150 Q ${150} 150 ${ghostX} 150`}
             fill="none" 
             stroke={accentColor} 
             strokeWidth={tetherWidth}
             opacity={merge ? 1 : 0.6}
             strokeDasharray={merge ? "0" : "4 2"}
             className={merge ? "animate-pulse" : ""}
           />
        </g>
      )}

      {/* 2. The Ghost (Another / 伊) */}
      <g 
        className="transition-transform duration-700 ease-out"
        style={{ transform: `translateX(${ghostX - 150 + glitchX}px) translateY(${glitchY}px)`, transformOrigin: '150px 150px' }}
      >
         <circle 
           cx="150" cy="150" r="52" 
           fill="none" 
           stroke={ghostColor} 
           strokeWidth="1" 
           filter="url(#blur-ghost)" 
           opacity={0.4 + (currentDisplacement/200)}
           className="animate-pulse-slow"
         />
         <circle 
           cx="150" cy="150" r="48" 
           fill="none" 
           stroke={ghostColor} 
           strokeWidth={merge ? 4 : 2} 
           strokeDasharray={merge ? "0" : "12 4"}
           className={merge ? "transition-all duration-500" : "animate-spin-slower"}
         />
         <text x="150" y="155" textAnchor="middle" fill={ghostColor} fontSize="14" fontFamily="serif" opacity={merge ? 0 : 0.8}>伊</text>
      </g>

      {/* 3. The One (Solid Core) */}
      <g 
        className="transition-transform duration-700 ease-out"
        style={{ transform: `translateX(${oneX - 150}px)`, transformOrigin: '150px 150px' }}
      >
        <circle cx="150" cy="150" r="50" fill={isDark ? '#050508' : '#fff'} stroke={solidColor} strokeWidth="3" />
        <circle cx="150" cy="150" r={merge ? 48 : 15} fill={merge ? accentColor : solidColor} opacity={merge ? 0.2 : 0.1} className="transition-all duration-1000 ease-in-out" />
        {merge && <ReintegrationBurst x={150} y={150} color={accentColor} />}
        <text x="150" y="155" textAnchor="middle" fill={merge ? accentColor : (isDark ? '#fff' : '#000')} fontSize="16" fontFamily="serif" fontWeight="bold">壹</text>
      </g>
    </svg>
  );
};

const ReintegrationBurst = ({ x, y, color }: { x: number, y: number, color: string }) => (
  <g>
    <circle cx={x} cy={y} r="60" fill="none" stroke={color} strokeWidth="2" className="animate-ping" opacity="0.5" />
    <circle cx={x} cy={y} r="80" fill="none" stroke={color} strokeWidth="1" className="animate-ping" style={{animationDelay: '0.2s'}} opacity="0.3" />
  </g>
);

export const CityAbstract = CityAbstractDiagram;
