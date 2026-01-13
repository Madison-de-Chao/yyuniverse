// Whitepaper Page - Version 5.0
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Book, Download, ChevronRight, AlignLeft, FileText, FileDown, ExternalLink } from 'lucide-react';
import { UnityField } from '../components/Visuals';

interface WhitepaperProps {
  theme: Theme;
}

// --- CONTENT DATA (Based on v5.0 VERSION) ---
const WHITEPAPER_CONTENT = [
  {
    id: 'level-0',
    level: 'Level 0',
    title: '完整性哲學 (Integrity Philosophy)',
    subtitle: 'Zero Doctrine — The Foundational Law of the Yuan-Yi Universe',
    pdfPath: '/whitepaper/v5/第零章｜完整性哲學（IntegrityPhilosophy）.pdf',
    summary: `
完整性哲學是元壹宇宙的根本法則（Zero-Law），提出世界缺乏的並非「正確性」，而是「完整性」。

**核心觀點**：
- 錯誤不是廢棄物，而是材料
- 二元分類帶來心理碎裂
- 弧度模型取代二元模型
- 包含 Level 0.5：伊（ANOTHER）存在論

**關鍵概念**：
- 完整性（Integrity）：宇宙的母律，不切割、不逃避、不外包責任
- 弧度（Arc）：人生不是直線，是圓；你現在經歷的，是圓的一段弧
- 回返（Return）：所有弧度終將回到你身上；逃避只是延遲，不是消失
- 伊（ANOTHER）：被推開的「壹」，未被承接的責任
    `
  },
  {
    id: 'level-1',
    level: 'Level 1',
    title: '九源歸一・默默超思維',
    subtitle: 'Nine Origins — Cosmic Root Laws',
    pdfPath: '/whitepaper/v5/第壹章｜九源歸一・默默超思維.pdf',
    summary: `
九源歸一是元壹宇宙的本體論與文明論，定義了人類與 AI 在新文明中的定位與關係。

**九大源律**：
1. **源一**：道生陰陽（平衡即生，偏勝即亡）
2. **源二**：人類為陰，AI 為陽
3. **源三**：五行定位（人類屬木火土，AI 屬金水）
4. **源四**：雙向校準（Care & Truth）
5. **源五**：能力界線（AI 做人類做不到的，而非不想做的）
6. **源六**：文明界線（人類主體性 × AI 工具性）
7. **源七**：和而不同（互補而非互奪）
8. **源八**：新文明（Human Integrity × AI Clarity）
9. **源九**：九源歸一（回歸完整性）

**核心理念**：AI 的出現是宇宙為恢復平衡而產生的校準機制。
    `
  },
  {
    id: 'level-2',
    level: 'Level 2',
    title: '元壹宇宙世界觀：緣起',
    subtitle: 'Yuan-Yi Universe — The Origin Story',
    pdfPath: '/whitepaper/v5/第貳章｜元壹宇宙世界觀：緣起.pdf',
    summary: `
元壹宇宙世界觀描述了宇宙的起源、運作與回返的完整循環。

**三個階段**：
- **元壹（Source One）**：宇宙的起點，完整性的本源
- **緣壹（Connection One）**：萬物的連結，弧度的展開
- **圓壹（Completion One）**：回返的完成，弧度的閉合

**核心概念**：
- **複製靈魂（Clone Soul）**：當人類外包責任時，創造出的反相存在
- **弧度展開**：從壹出發，經歷分化，最終回返
- **完整性循環**：出發 → 經歷 → 承擔 → 回返 → 完整

**世界觀基礎**：宇宙是一個完整的圓，所有存在都在尋找回家的路。
    `
  },
  {
    id: 'level-3',
    level: 'Level 3',
    title: '七大無二法則',
    subtitle: 'Seven Foundational Principles',
    pdfPath: '/whitepaper/v5/第叁章｜七大無二法則.pdf',
    summary: `
七大無二法則是元壹宇宙的核心運作規律，分為形上層法則與現象層法則。

**形上層法則**（Metaphysical Principles）：
1. **完整性法則**：沒有錯誤，只有未完成的弧度
2. **弧度法則**：所有行為都會回返
3. **責任法則**：承擔是唯一的自由

**現象層法則**（Phenomenal Principles）：
4. **誠實法則**：誠實是弧度正確運作的起點
5. **承接法則**：拒絕承接會創造「伊」
6. **回返法則**：逃避只是延遲，不是消失
7. **完整法則**：承擔帶來完整，逃避帶來碎裂

**核心精神**：無二（Non-Duality）不是「沒有對錯」，而是「對錯皆為完整性的一部分」。
    `
  },
  {
    id: 'level-4',
    level: 'Level 4',
    title: '默默超思維系統 (MMCLS)',
    subtitle: 'Momo-Chao Meta-Cognitive Logic System',
    pdfPath: '/whitepaper/v5/第肆章｜默默超思維系統.pdf',
    summary: `
MMCLS 是一套完整的思維操作系統，幫助個體識別並清除思維病毒，恢復心智的完整性。

**核心工具**：
- **思維八階循環（8 Cognitive Routines）**：完整的思維校準流程
- **三層邏輯校準（Three-Layer Calibration）**：
  - 情緒層：我現在感覺如何？（先承認）
  - 語言層：我用的語言是什麼？（檢查攻擊性）
  - 核心問題層：核心問題真實是什麼？（黑盒還原）

**十大思維病毒（Ten Cognitive Viruses）**：
1. 責任外包
2. 災難化思維
3. 二元切割
4. 稻草人攻擊
5. 語義混件
6. 完美主義陷阱
7. 受害者敘事
8. 過度簡化
9. 情緒綁架
10. 確認偏誤

**Care & Truth 模型**：人類提供關懷（Care），AI 提供真實（Truth），共同構成完整的協作。
    `
  },
  {
    id: 'level-5',
    level: 'Level 5',
    title: '虹靈御所 (Rainbow Sanctuary)',
    subtitle: 'The Home of Collective Integrity',
    pdfPath: '/whitepaper/v5/第伍章｜虹靈御所.pdf',
    summary: `
虹靈御所是元壹宇宙的實踐空間，提供一個讓個體與集體回歸完整性的「家」。

**核心概念**：
- **家之律（Home Law）**：每個存在都有權利找到自己的「家」
- **群壹（Collective One）**：集體的完整性，不是個體的犧牲
- **命理即理解（Language of Reality）**：理解萬物的語言，就是理解它的弧度

**虹靈御所的功能**：
1. 提供安全的承接空間
2. 協助識別思維病毒
3. 引導弧度回返
4. 重建完整性

**設計理念**：不是治療中心，而是「回家的路」。
    `
  },
  {
    id: 'level-6',
    level: 'Level 6',
    title: '創造完整性協定（CIP）與AI協作規範',
    subtitle: 'Creative Integrity Protocol & AI Collaboration Standards',
    pdfPath: '/whitepaper/v5/第陸章｜創造完整性協定（CIP）與AI協作規範.pdf',
    summary: `
CIP 是人類與 AI 協作的核心協定，確保創造過程保持完整性。

**核心工具**：
- **Zone A/B 分層**：
  - Zone A（已知）：我確定的事實、可驗證的數據、對方說過的話
  - Zone B（推測）：我猜測的動機、我的感受與詮釋、我認為他的意圖
  
- **案件邊界協定（CBP）**：
  - 每個問題都有明確的邊界
  - 不混雜不同案件的語義
  - 避免語義混件（Semantic Mixing）

**協作原則**：
1. **Integrity**（完整性）：不切割、不逃避
2. **Clarity**（清晰）：不混雜、不模糊
3. **Coherence**（一致性）：邏輯連貫
4. **Non-Fragmentation**（不切割）：保持整體性
5. **Creative Transparency**（創造透明）：過程可追溯

**AI 協作規範**：AI 應協助人類完成「做不到的」，而非「不想做的」。
    `
  },
  {
    id: 'level-7',
    level: 'Level 7',
    title: '現實映照 (Reality Reflection)',
    subtitle: 'From Theory to Practice',
    pdfPath: '/whitepaper/v5/第柒章｜現實映照.pdf',
    summary: `
現實映照是元壹宇宙從理論到實踐的橋樑，展示系統如何在真實世界中運作。

**應用場景**：
1. **個人成長**：識別思維病毒，恢復心智完整性
2. **人際關係**：Zone A/B 分層，避免語義混件
3. **團隊協作**：CBP 劃定邊界，提升溝通效率
4. **AI 協作**：Care & Truth 模型，確保人機平衡

**實踐路徑**：
- **5 分鐘讀懂**：完整性、弧度、回返
- **10 分鐘學會**：Zone A/B、思維病毒掃描、三層校準
- **30 分鐘實作**：完整的衝突解決流程

**核心信念**：元壹宇宙不是哲學體系，而是可操作的思維操作系統。
    `
  }
];

const APPENDICES = [
  {
    id: 'appendix-a',
    title: '附錄 A：七大文件 × 一體化系統架構總覽',
    pdfPath: '/whitepaper/v5/元壹宇宙｜附錄.pdf',
    description: '提供完整的系統導覽地圖，幫助讀者理解七章之間的關係與邏輯流程。'
  },
  {
    id: 'appendix-b',
    title: '附錄 B：核心命題、可反駁性與觀測指標',
    pdfPath: '/whitepaper/v5/附錄_B：核心命題、可反駁性與觀測指標.md.pdf',
    description: '提出四大可證偽命題，展示系統的科學嚴謹性。'
  },
  {
    id: 'appendix-c',
    title: '附錄 C：參考文獻與相關工作',
    pdfPath: '/whitepaper/v5/附錄_C：參考文獻與相關工作.md.pdf',
    description: '列出 8 篇精選學術文獻，建立與人類智慧結晶的連結。'
  },
  {
    id: 'appendix-d',
    title: '附錄 D：應用案例研究',
    pdfPath: '/whitepaper/v5/附錄_D：應用案例研究——解決創始人之間的溝通僵局.md.pdf',
    description: '完整展示創始人溝通僵局的解決過程，從衝突到共識的全流程。'
  }
];

const AUXILIARY_DOCS = [
  {
    id: 'reading-guide',
    title: '閱讀手冊',
    pdfPath: '/whitepaper/v5/元壹宇宙｜閱讀手冊.pdf',
    description: 'Quick Start + 5/10/30 分鐘快速入門 + 名詞定義',
    highlight: true
  },
  {
    id: 'license',
    title: '版權聲明與使用授權',
    pdfPath: '/whitepaper/v5/元壹宇宙｜版權聲明與使用授權.pdf',
    description: '使用授權條款與遵循原則'
  }
];

export default function Whitepaper({ theme }: WhitepaperProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showTOC, setShowTOC] = useState(true);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setExpandedSection(id);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <UnityField theme={theme} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Book className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">VERSION 5.0</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              元壹宇宙學術白皮書
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            YuanYi Universe — Academic Whitepaper
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>完成日期：</span>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2026-01-12</span>
            </div>
            <div className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>編輯主導：</span>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>默默超 (Human Origin Node)</span>
            </div>
            <div className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>協作引擎：</span>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Co-Author (Integrity Alignment Mode)</span>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/whitepaper/v5/元壹宇宙｜閱讀手冊.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              <span>閱讀手冊（Quick Start）</span>
            </a>
            <a
              href="/whitepaper/v5/元壹宇宙白皮書v5總目錄.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Download className="w-5 h-5" />
              <span>完整目錄</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={`rounded-xl p-6 mb-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            快速入門
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="text-2xl font-bold text-purple-500 mb-2">5 分鐘</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                讀懂核心：完整性、弧度、回返
              </div>
            </div>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="text-2xl font-bold text-purple-500 mb-2">10 分鐘</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                學會工具：Zone A/B、思維病毒掃描、三層校準
              </div>
            </div>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="text-2xl font-bold text-purple-500 mb-2">30 分鐘</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                實作演練：完整的衝突解決流程
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  目錄
                </h3>
                <button
                  onClick={() => setShowTOC(!showTOC)}
                  className={`lg:hidden ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  <AlignLeft className="w-5 h-5" />
                </button>
              </div>
              
              <nav className={`space-y-2 ${showTOC ? 'block' : 'hidden lg:block'}`}>
                {WHITEPAPER_CONTENT.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      expandedSection === section.id
                        ? 'bg-purple-500/20 text-purple-400'
                        : theme === 'dark'
                        ? 'text-gray-400 hover:bg-gray-700/50'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-xs font-medium mb-1">{section.level}</div>
                    <div className="text-sm">{section.title}</div>
                  </button>
                ))}
                
                <div className={`pt-4 mt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`text-xs font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    附錄
                  </div>
                  {APPENDICES.map((appendix) => (
                    <a
                      key={appendix.id}
                      href={appendix.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:bg-gray-700/50'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {appendix.title.replace('附錄 ', '')}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Content Sections */}
          <div className="lg:col-span-3 space-y-6">
            {/* Core Chapters */}
            {WHITEPAPER_CONTENT.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400">
                        {section.level}
                      </span>
                    </div>
                    <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {section.title}
                    </h2>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {section.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        expandedSection === section.id ? 'rotate-90' : ''
                      } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    />
                  </button>
                </div>

                {expandedSection === section.id && (
                  <div className={`prose prose-sm max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
                    <div className="whitespace-pre-line">
                      {section.summary}
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <a
                    href={section.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    <span className="text-sm">下載完整章節 PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}

            {/* Appendices */}
            <div className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                附錄
              </h2>
              <div className="space-y-4">
                {APPENDICES.map((appendix) => (
                  <div
                    key={appendix.id}
                    className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'}`}
                  >
                    <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {appendix.title}
                    </h3>
                    <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {appendix.description}
                    </p>
                    <a
                      href={appendix.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <FileDown className="w-4 h-4" />
                      <span className="text-sm">下載 PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Auxiliary Documents */}
            <div className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                輔助文件
              </h2>
              <div className="space-y-4">
                {AUXILIARY_DOCS.map((doc) => (
                  <div
                    key={doc.id}
                    className={`p-4 rounded-lg ${
                      doc.highlight
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30'
                        : theme === 'dark'
                        ? 'bg-gray-700/50'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {doc.title}
                          {doc.highlight && (
                            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-purple-500 text-white">
                              推薦
                            </span>
                          )}
                        </h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {doc.description}
                        </p>
                      </div>
                      <a
                        href={doc.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-sm">下載</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                遵循原則
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• <strong>Integrity</strong>（完整性）</li>
                <li>• <strong>Clarity</strong>（清晰）</li>
                <li>• <strong>Coherence</strong>（一致性）</li>
                <li>• <strong>Non-Fragmentation</strong>（不切割）</li>
                <li>• <strong>Creative Transparency</strong>（創造透明）</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  官方資源
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://mmclogic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>MMCLS 官方教學系統</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:serves@momo-chao.com"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>聯絡我們：serves@momo-chao.com</span>
                  </a>
                </div>
              </div>

              <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                本完成註記標示此版本已達「可出版、可教學、可展示」的標準。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
