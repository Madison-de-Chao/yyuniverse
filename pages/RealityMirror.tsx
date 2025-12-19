import React, { useState } from 'react';
import { Theme } from '../types';
import { ChevronDown, Check, AlertCircle, Sparkles, Scale } from 'lucide-react';

interface RealityMirrorProps {
  theme: Theme;
}

interface ContrastItem {
  category: string;
  yuanyi: string;
  existing: string;
}

interface MirrorData {
  id: number;
  title: string;
  subtitle: string;
  contrast: ContrastItem[];
}

// 7 大對照模塊資料
const REALITY_MIRRORS: MirrorData[] = [
  {
    id: 1,
    title: '元壹宇宙 vs 榮格心理學',
    subtitle: 'Jungian Shadow vs. ANOTHER (伊)',
    contrast: [
      {
        category: '本體性質',
        yuanyi: '伊是弧度位移後的壹，不是人格碎片',
        existing: '陰影是人格結構的一部分'
      },
      {
        category: '作用機制',
        yuanyi: '伊因拒絕承擔而生成，不能被整合，只能被迎回',
        existing: '陰影可被整合並成為人格的一部分'
      },
      {
        category: '層級',
        yuanyi: '宇宙結構層（Arc Displacement）',
        existing: '心理現象層（心理詮釋）'
      },
      {
        category: '根本差異',
        yuanyi: '是你推開的那個「一」，唯一的受害者',
        existing: '是你不想看到的自己，視為黑暗面'
      }
    ]
  },
  {
    id: 2,
    title: '元壹宇宙 vs 佛學',
    subtitle: 'Integrity vs. Karma & Causality',
    contrast: [
      {
        category: '循環本質',
        yuanyi: '弧度循環＝完整性封印（結構必然）',
        existing: '因果循環＝業力果報（道德因素）'
      },
      {
        category: '目標',
        yuanyi: '回到壹（完成）',
        existing: '離開循環（解脫）'
      },
      {
        category: '苦的根源',
        yuanyi: '苦＝弧度不在原位（結構張力）',
        existing: '苦＝執著與無常'
      },
      {
        category: '解脫觀',
        yuanyi: '不是超越，而是回返',
        existing: '不是回返，而是超越'
      }
    ]
  },
  {
    id: 3,
    title: '元壹宇宙 vs 道家',
    subtitle: 'Integrity vs. Wu Wei (無為)',
    contrast: [
      {
        category: '陰陽定義',
        yuanyi: '壹與伊＝本體與反相（因果關係）',
        existing: '陰陽＝兩個必要向度（平衡關係）'
      },
      {
        category: '運動原理',
        yuanyi: '回返＝結構必然（不是選擇）',
        existing: '無為＝順勢（不介入）'
      },
      {
        category: '根本律法',
        yuanyi: '完整性法則（Zero-Law）',
        existing: '自然之道（道法自然）'
      },
      {
        category: '終極目標',
        yuanyi: '弧度完整閉環',
        existing: '道的和諧流動'
      }
    ]
  },
  {
    id: 4,
    title: '元壹宇宙 vs 西方哲學',
    subtitle: 'Structural Ontology vs. Epistemology',
    contrast: [
      {
        category: '核心問題',
        yuanyi: '存在如何回到完整？（本體論）',
        existing: '我們如何知道？（認識論）'
      },
      {
        category: '真理觀',
        yuanyi: '真理＝結構完整性',
        existing: '真理＝命題與事實的對應'
      },
      {
        category: '主體性',
        yuanyi: '主體是弧度的承載者',
        existing: '主體是認知的來源'
      },
      {
        category: '方法論',
        yuanyi: '結構還原與弧度閉環',
        existing: '邏輯推理與經驗驗證'
      }
    ]
  },
  {
    id: 5,
    title: '元壹宇宙 vs 量子物理學',
    subtitle: 'Arc Structure vs. Quantum Mechanics',
    contrast: [
      {
        category: '觀察者角色',
        yuanyi: '觀察者是弧度的一部分，觀察即承擔',
        existing: '觀察者影響量子態坍縮'
      },
      {
        category: '不確定性',
        yuanyi: '不確定性是弧度未完成的表現',
        existing: '不確定性是物質的本質屬性'
      },
      {
        category: '糾纏現象',
        yuanyi: '糾纏＝弧度的跨時空連結',
        existing: '糾纏＝非局域性關聯'
      },
      {
        category: '層級定位',
        yuanyi: '物理現象是弧度結構的投影',
        existing: '物理現象是基本實在'
      }
    ]
  },
  {
    id: 6,
    title: '元壹宇宙 vs 基督教神學',
    subtitle: 'Integrity vs. Salvation Theology',
    contrast: [
      {
        category: '罪的定義',
        yuanyi: '罪＝弧度位移（結構概念）',
        existing: '罪＝違背神的旨意（道德概念）'
      },
      {
        category: '救贖機制',
        yuanyi: '救贖＝自我迎回伊，完成弧度',
        existing: '救贖＝接受基督的恩典'
      },
      {
        category: '神的角色',
        yuanyi: '壹是結構本身，不是外在審判者',
        existing: '神是創造者與審判者'
      },
      {
        category: '終極歸宿',
        yuanyi: '回到壹（完整）',
        existing: '進入天國（獎賞）'
      }
    ]
  },
  {
    id: 7,
    title: '元壹宇宙 vs 現代心理治療',
    subtitle: 'Arc Healing vs. Psychotherapy',
    contrast: [
      {
        category: '療癒目標',
        yuanyi: '弧度閉環與完整性恢復',
        existing: '症狀緩解與功能改善'
      },
      {
        category: '治療機制',
        yuanyi: '迎回伊、承擔弧度責任',
        existing: '認知重構、行為改變'
      },
      {
        category: '治療者角色',
        yuanyi: '陪伴者，協助當事人看見弧度',
        existing: '專家，提供技術與方案'
      },
      {
        category: '痊癒標準',
        yuanyi: '弧度完整閉環',
        existing: '症狀消除或可控'
      }
    ]
  }
];

// Accordion Card Component
const MirrorCard: React.FC<{ mirror: MirrorData; theme: Theme; isExpanded: boolean; onToggle: () => void }> = ({ 
  mirror, 
  theme, 
  isExpanded, 
  onToggle 
}) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-slate-900/50 border-slate-700 hover:border-gold/30' 
        : 'bg-white border-gray-200 hover:border-muted-gold/30'
    } ${isExpanded ? (isDark ? 'border-gold/50 shadow-lg shadow-gold/5' : 'border-muted-gold shadow-lg') : ''}`}>
      
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full p-6 flex items-center justify-between text-left transition-all duration-300 group`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
            isDark ? 'bg-gold/10 text-gold' : 'bg-amber-50 text-muted-gold'
          }`}>
            {String(mirror.id).padStart(2, '0')}
          </div>
          <div>
            <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
              {mirror.title}
            </h3>
            <p className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
              {mirror.subtitle}
            </p>
          </div>
        </div>
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          } ${isDark ? 'text-gold' : 'text-muted-gold'}`} 
        />
      </button>

      {/* Content */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-6 pb-6 border-t ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
          
          {/* Table Header */}
          <div className={`grid grid-cols-3 gap-4 py-4 text-xs font-mono uppercase tracking-wider ${
            isDark ? 'text-slate-500' : 'text-gray-500'
          }`}>
            <div>維度</div>
            <div className="flex items-center gap-2">
              <Sparkles size={12} className={isDark ? 'text-gold' : 'text-muted-gold'} />
              元壹宇宙
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle size={12} />
              既有框架
            </div>
          </div>

          {/* Contrast Rows */}
          <div className="space-y-3">
            {mirror.contrast.map((item, idx) => (
              <div 
                key={item.category}
                className={`grid grid-cols-3 gap-4 p-4 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50 hover:bg-slate-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`text-sm font-bold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                  {item.category}
                </div>
                <div className={`text-sm leading-relaxed ${isDark ? 'text-gold/90' : 'text-amber-700'}`}>
                  {item.yuanyi}
                </div>
                <div className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                  {item.existing}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export const RealityMirror: React.FC<RealityMirrorProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-5xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* Header */}
      <header className="text-center mb-16 animate-fade-in">
        <div className="flex justify-center mb-6">
          <Scale size={48} className={isDark ? 'text-gold' : 'text-muted-gold'} />
        </div>
        <h1 className={`font-serif text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
          真實之鏡
        </h1>
        <p className="font-mono text-sm tracking-[0.2em] opacity-60 uppercase mb-8">Reality Mirror — 7 Contrasts</p>
        <p className={`max-w-2xl mx-auto text-lg italic font-serif leading-relaxed ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
          「元壹宇宙不是要取代任何系統，而是提供一個更底層的視角。<br/>
          這裡呈現與七大既有框架的對照，看見結構層的不同。」
        </p>
      </header>

      {/* Mirror Cards */}
      <div className="space-y-4 animate-fade-in-up">
        {REALITY_MIRRORS.map((mirror) => (
          <MirrorCard
            key={mirror.id}
            mirror={mirror}
            theme={theme}
            isExpanded={expandedId === mirror.id}
            onToggle={() => handleToggle(mirror.id)}
          />
        ))}
      </div>

      {/* Footer Note */}
      <div className={`mt-16 p-8 rounded-2xl border text-center ${
        isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-gray-50 border-gray-200'
      }`}>
        <Check size={24} className={`mx-auto mb-4 ${isDark ? 'text-green-500' : 'text-green-600'}`} />
        <p className={`text-sm leading-relaxed max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
          每個對照都不是「對錯」之分，而是「層級」之別。<br/>
          元壹宇宙試圖觸及更底層的結構，讓這些智慧傳統得以在新框架中被重新理解。
        </p>
      </div>

    </div>
  );
};
   
