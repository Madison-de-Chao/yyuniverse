import React, { useState } from 'react';
import { Map, Users, Microscope, Wrench, BookOpen, Download } from 'lucide-react';

const SystemMap: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const readerPaths = [
    {
      id: 'researcher',
      title: '研究者',
      icon: Microscope,
      description: '我想深入理解系統的理論基礎與方法論',
      path: [
        '系統總覽 → 核心母律（Zero-Law）',
        'CIP 協定（知識衛生規格）',
        'Zone A 證據索引',
        '名詞邊界表',
        'Challenge Kit（檢核自己的理解）',
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'practitioner',
      title: '實作者',
      icon: Wrench,
      description: '我想直接應用這套系統解決實際問題',
      path: [
        '快速理解（3 分鐘）',
        '七大法則（現象層）',
        '反例模組（Casebook）',
        '前往 B 站（應用工具）',
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'collaborator',
      title: '合作者',
      icon: Users,
      description: '我想參與系統的發展與貢獻',
      path: [
        '系統總覽 → 版本與變更',
        'CIP 協定（貢獻規格）',
        'Challenge Kit（提出改進）',
        '關於（治理與聯繫）',
      ],
      color: 'from-green-600 to-emerald-600',
    },
  ];

  const systemLayers = [
    {
      level: 'Kernel',
      title: '核心母律（Zero-Law）',
      description: '完整性是母律；錯誤＝未完成弧度',
      docs: ['完整性哲學', '不變規格', '分層原則'],
      color: 'border-red-500/50 bg-red-900/20',
    },
    {
      level: 'Protocol',
      title: 'CIP 協定',
      description: 'Zone A/B 規則、知識衛生、引用規格',
      docs: ['Zone A/B 定義', '推測標示規則', '引用格式'],
      color: 'border-orange-500/50 bg-orange-900/20',
    },
    {
      level: 'Law',
      title: '七大無二法則',
      description: '形上層的宇宙律法（標示為詮釋）',
      docs: ['完整律', '回聲律', '責任律', '家之律', '求知律', '語言律', '整合律'],
      color: 'border-yellow-500/50 bg-yellow-900/20',
    },
    {
      level: 'Application',
      title: '七種宇宙規律',
      description: '現象層的實際運作規則',
      docs: ['後果不可外包', '回應即責任', '框內規則', '生活層承擔'],
      color: 'border-green-500/50 bg-green-900/20',
    },
    {
      level: 'Casebook',
      title: '反例模組',
      description: '世界如何展示「不走完整性」的後果',
      docs: ['責任外包案例', '偷換概念案例', '詮釋偽裝案例'],
      color: 'border-blue-500/50 bg-blue-900/20',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Map className="w-12 h-12 text-blue-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              系統總覽｜The Map
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            七大文件總覽＋層級對應
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            這是一套「完整性母律」驅動的思維與協作系統。從 Kernel 到 Casebook，每一層都有明確的規格與可反駁條件。
          </p>
        </div>
      </section>

      {/* Reader Paths */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">選擇你的路徑</h2>
          <p className="text-gray-400 mb-12 text-center">
            根據你的目的，選擇最適合的閱讀路徑
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {readerPaths.map((path) => {
              const Icon = path.icon;
              return (
                <div
                  key={path.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all cursor-pointer ${
                    selectedPath === path.id ? 'ring-2 ring-white/50' : ''
                  }`}
                  onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{path.description}</p>
                  
                  {selectedPath === path.id && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">建議路徑：</p>
                      <ol className="text-sm text-gray-300 space-y-2">
                        {path.path.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple-400 font-semibold">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Layers */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">系統層級架構</h2>
          <p className="text-gray-400 mb-12 text-center">
            從 Kernel 到 Casebook，每一層都有明確的規格與可追溯性
          </p>

          <div className="space-y-4">
            {systemLayers.map((layer, idx) => (
              <div
                key={layer.level}
                className={`rounded-lg p-6 border-2 ${layer.color} backdrop-blur-sm transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-gray-500">
                        Level {idx + 1}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                        {layer.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{layer.title}</h3>
                    <p className="text-gray-300">{layer.description}</p>
                  </div>
                  <BookOpen className="w-6 h-6 text-gray-500 flex-shrink-0" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {layer.docs.map((doc) => (
                    <span
                      key={doc}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">下載完整系統地圖</h2>
          <p className="text-gray-400 mb-8">
            包含總目錄、路徑指南、名詞索引與版本記錄
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            <Download className="w-5 h-5" />
            下載系統地圖 PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default SystemMap;
