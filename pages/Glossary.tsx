import React, { useState } from 'react';
import { BookText, AlertCircle, HelpCircle, XCircle } from 'lucide-react';

interface Term {
  id: string;
  term: string;
  definition: string;
  commonMisuse: string;
  boundaryTests: string[];
  counterExample: string;
  category: 'core' | 'zone' | 'method' | 'law';
}

const Glossary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const terms: Term[] = [
    {
      id: 'completeness',
      term: '完整性（Completeness）',
      definition: '一個系統或論述中，所有必要元素都存在且無矛盾，推導鏈無跳躍，可被追溯與檢核。',
      commonMisuse: '常被偷換成「完美」或「無錯誤」，但完整性指的是「結構完整」，不是「內容完美」。',
      boundaryTests: [
        '這個論述是否有明確的前提與結論？',
        '從前提到結論的每一步推導是否可追溯？',
        '是否有隱藏的假設未被標示？',
      ],
      counterExample: '「這是真理」（無前提、無推導、無可反駁條件）→ 不完整',
      category: 'core',
    },
    {
      id: 'zone-a',
      term: 'Zone A（可核對區）',
      definition: '可透過實驗、觀察、重複驗證的陳述。包含資料、測量結果、可重複現象。',
      commonMisuse: '常被用來包裝詮釋或推測，例如「科學已證實靈魂存在」（實際上無法重複驗證）。',
      boundaryTests: [
        '這個陳述是否可以被其他人重複驗證？',
        '是否有明確的測量方法與標準？',
        '是否提供了原始資料或可核對的來源？',
      ],
      counterExample: '「量子糾纏證明萬物一體」→ 前半是 Zone A，後半是 Zone B 詮釋',
      category: 'zone',
    },
    {
      id: 'zone-b',
      term: 'Zone B（詮釋區）',
      definition: '形上敘事、世界觀、價值判斷、不可重複驗證的詮釋。允許存在，但必須明確標示。',
      commonMisuse: '常被偽裝成 Zone A 定論，例如「宇宙有意識」（詮釋）被說成「科學定論」（事實）。',
      boundaryTests: [
        '這個陳述是否涉及主觀詮釋或價值判斷？',
        '是否可以有其他同樣合理的詮釋？',
        '是否已明確標示為「詮釋」而非「事實」？',
      ],
      counterExample: '「我相信宇宙有意識」（✓ 標示為信念）vs「宇宙有意識是事實」（✗ 偽裝成定論）',
      category: 'zone',
    },
    {
      id: 'causality-vs-echo',
      term: '因果 vs 回聲（方向性）',
      definition: '因果：A 導致 B（有方向性、可驗證）。回聲：A 與 B 同時出現（相關性、無方向）。',
      commonMisuse: '常把「相關性」偷換成「因果性」，例如「冰淇淋銷量高時溺水人數多，所以冰淇淋導致溺水」。',
      boundaryTests: [
        '是否有實驗證據顯示 A 在時間上先於 B？',
        '改變 A 是否會改變 B？',
        '是否排除了其他可能的共同原因（如季節）？',
      ],
      counterExample: '「公雞叫→太陽升起」（相關性）vs「地球自轉→太陽升起」（因果性）',
      category: 'method',
    },
    {
      id: 'responsibility-outsourcing',
      term: '責任外包',
      definition: '將自己行為的後果歸因於外部因素（命運、業力、他人、系統），而非承認自己的選擇與責任。',
      commonMisuse: '常被包裝成「高維智慧」或「宇宙安排」，實際上是逃避承擔。',
      boundaryTests: [
        '這個解釋是否讓當事人免除了行動責任？',
        '是否可以用同樣的邏輯為任何行為辯護？',
        '是否有具體的行動改變方案，還是只有「接受」？',
      ],
      counterExample: '「我傷害你是因為前世業力」（責任外包）vs「我傷害你是我的選擇，我承擔後果」（責任承擔）',
      category: 'law',
    },
    {
      id: 'cip',
      term: 'CIP（Completeness Integrity Protocol）',
      definition: '完整性協定：一套知識衛生規格，要求推測標示、引用可核對、Zone A/B 分層、可反駁條件。',
      commonMisuse: '常被誤解為「學術八股」，實際上是防止偷換概念與詮釋偽裝的最低規格。',
      boundaryTests: [
        '這個論述是否區分了事實、推論、詮釋？',
        '是否提供了可核對的引用來源？',
        '是否明確標示了推測與不確定性？',
      ],
      counterExample: '「研究顯示...」（無來源）vs「Smith et al. (2023) 在第 3 章第 2 節指出...」（可核對）',
      category: 'method',
    },
  ];

  const categories = [
    { id: 'all', label: '全部', color: 'gray' },
    { id: 'core', label: '核心概念', color: 'purple' },
    { id: 'zone', label: 'Zone A/B', color: 'blue' },
    { id: 'method', label: '方法論', color: 'green' },
    { id: 'law', label: '法則相關', color: 'orange' },
  ];

  const filteredTerms = selectedCategory === 'all'
    ? terms
    : terms.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookText className="w-12 h-12 text-green-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              名詞邊界表｜Glossary
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            每個名詞固定模板：定義 ＋ 常見偷換 ＋ 邊界測試 ＋ 反例
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            這不是字典，而是「防偷換工具」。每個名詞都有明確的邊界與反例，避免無限換名詞但不固定定義。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? `bg-${cat.color}-600 text-white`
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms List */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {filteredTerms.map((term) => (
              <div
                key={term.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-white/30 transition-all"
              >
                {/* Term Header */}
                <button
                  onClick={() => setExpandedTerm(expandedTerm === term.id ? null : term.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <h3 className="text-xl font-semibold text-left">{term.term}</h3>
                  <span className="text-gray-500">
                    {expandedTerm === term.id ? '−' : '+'}
                  </span>
                </button>

                {/* Expanded Content */}
                {expandedTerm === term.id && (
                  <div className="px-6 pb-6 space-y-6">
                    {/* Definition */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BookText className="w-5 h-5 text-blue-400" />
                        <h4 className="font-semibold text-blue-400">定義（1 句）</h4>
                      </div>
                      <p className="text-gray-300 pl-7">{term.definition}</p>
                    </div>

                    {/* Common Misuse */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-yellow-400" />
                        <h4 className="font-semibold text-yellow-400">常見偷換（1 條）</h4>
                      </div>
                      <p className="text-gray-300 pl-7">{term.commonMisuse}</p>
                    </div>

                    {/* Boundary Tests */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <HelpCircle className="w-5 h-5 text-green-400" />
                        <h4 className="font-semibold text-green-400">邊界測試（3 問）</h4>
                      </div>
                      <ul className="space-y-2 pl-7">
                        {term.boundaryTests.map((test, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-green-400 font-semibold">{idx + 1}.</span>
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Counter Example */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-5 h-5 text-red-400" />
                        <h4 className="font-semibold text-red-400">反例（1 個）</h4>
                      </div>
                      <p className="text-gray-300 pl-7 font-mono text-sm bg-red-900/20 p-3 rounded border border-red-500/30">
                        {term.counterExample}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">發現名詞偷換？</h2>
          <p className="text-gray-400 mb-8">
            如果你發現有名詞被濫用或偷換，請使用 Challenge Kit 提出
          </p>
          <a
            href="/challenge-kit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
          >
            前往 Challenge Kit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Glossary;
