
import React, { useState } from 'react';
import { Theme, PageId } from '../types';
import { useNavigate } from 'react-router-dom'; // Assuming React Router, but sticking to props based on current architecture

interface SystemMapProps {
  theme: Theme;
  onNavigate: (page: PageId) => void;
}

export const SystemMap: React.FC<SystemMapProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Node Configuration
  const nodes = [
    { id: 'core', label: '完整性', sub: 'Integrity', x: 400, y: 300, r: 60, page: 'whitepaper', icon: '◎' },
    { id: 'zone-c', label: '哲學層', sub: 'Philosophy', x: 400, y: 120, r: 45, page: 'system-c', icon: '心' },
    { id: 'zone-b', label: '結構層', sub: 'Structure', x: 650, y: 450, r: 45, page: 'system-b', icon: '腦' },
    { id: 'zone-a', label: '應用層', sub: 'Application', x: 150, y: 450, r: 45, page: 'system-a', icon: '行' },
    { id: 'sanctuary', label: '御所', sub: 'Sanctuary', x: 150, y: 150, r: 35, page: 'sanctuary', icon: '家' },
    { id: 'cip', label: '協定', sub: 'CIP', x: 650, y: 150, r: 35, page: 'whitepaper', icon: '約' },
  ];

  // Connection Lines
  const links = [
    { from: 'core', to: 'zone-c' },
    { from: 'core', to: 'zone-b' },
    { from: 'core', to: 'zone-a' },
    { from: 'zone-c', to: 'sanctuary' }, // Philosophy grounds Sanctuary
    { from: 'zone-c', to: 'cip' },       // Philosophy guides Protocol
    { from: 'zone-a', to: 'zone-b' },    // Loop between Application and Structure
    { from: 'zone-b', to: 'zone-c' },    // Structure supports Philosophy
  ];

  const mainColor = isDark ? '#FFD700' : '#A67C52'; // Gold / Muted Gold
  const secondaryColor = isDark ? '#94a3b8' : '#a8a29e'; // Slate / Stone
  const textColor = isDark ? '#E2E8F0' : '#2C2420';
  const glowColor = isDark ? 'rgba(255, 215, 0, 0.3)' : 'rgba(166, 124, 82, 0.2)';

  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/9] relative select-none overflow-hidden">
      <svg 
        viewBox="0 0 800 600" 
        className="w-full h-full"
        style={{ filter: isDark ? 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' : 'none' }}
      >
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="20" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10" fill={secondaryColor} opacity="0.5" />
          </marker>
          {/* Glow Filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Orbit Circles */}
        <circle cx="400" cy="300" r="180" fill="none" stroke={secondaryColor} strokeWidth="0.5" strokeDasharray="5 5" opacity="0.2" className="animate-spin-slow" style={{transformOrigin: '400px 300px'}} />
        <circle cx="400" cy="300" r="280" fill="none" stroke={secondaryColor} strokeWidth="0.5" strokeDasharray="10 10" opacity="0.1" className="animate-spin-reverse-slow" style={{transformOrigin: '400px 300px'}} />

        {/* Links */}
        {links.map((link, i) => {
          const start = nodes.find(n => n.id === link.from)!;
          const end = nodes.find(n => n.id === link.to)!;
          return (
            <g key={i}>
              <line 
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                stroke={secondaryColor} 
                strokeWidth="1" 
                opacity="0.3"
              />
              {/* Animated Pulse on Line */}
              <circle r="2" fill={mainColor}>
                <animateMotion 
                  dur={`${3 + i}s`} 
                  repeatCount="indefinite"
                  path={`M${start.x},${start.y} L${end.x},${end.y}`}
                />
              </circle>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isCore = node.id === 'core';
          
          return (
            <g 
              key={node.id} 
              onClick={() => onNavigate(node.page as PageId)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer transition-all duration-300"
              style={{ transformOrigin: `${node.x}px ${node.y}px`, transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            >
              {/* Outer Ring Pulse */}
              <circle 
                cx={node.x} cy={node.y} r={node.r + 5} 
                fill={glowColor} 
                opacity={isHovered ? 1 : 0}
                className="transition-opacity duration-300"
                filter="url(#glow)"
              />

              {/* Main Circle */}
              <circle 
                cx={node.x} cy={node.y} r={node.r} 
                fill={isDark ? '#0f172a' : '#fdfbf7'} 
                stroke={isHovered || isCore ? mainColor : secondaryColor} 
                strokeWidth={isCore ? 3 : 1.5}
                className="transition-colors duration-300"
              />

              {/* Icon/Text */}
              <text 
                x={node.x} y={node.y - 5} 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill={isHovered || isCore ? mainColor : textColor}
                fontSize={isCore ? "24" : "18"}
                fontWeight="bold"
                className="font-serif pointer-events-none"
              >
                {node.icon}
              </text>

              {/* Label */}
              <text 
                x={node.x} y={node.y + 15} 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill={textColor}
                fontSize="14"
                fontWeight="bold"
                className="font-sans pointer-events-none"
              >
                {node.label}
              </text>

               {/* Sub Label (Visible on Hover or Core) */}
               <text 
                x={node.x} y={node.y + 30} 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill={secondaryColor}
                fontSize="10"
                className={`font-mono pointer-events-none uppercase tracking-wider transition-opacity duration-300 ${isHovered || isCore ? 'opacity-100' : 'opacity-0'}`}
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Instructions Overlay */}
      <div className={`absolute bottom-4 left-0 right-0 text-center text-xs font-mono opacity-50 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
        CLICK NODES TO EXPLORE
      </div>
    </div>
  );
};
