import React from 'react';
import { Info, GitBranch, Mail, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Info className="w-12 h-12 text-indigo-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              關於｜About
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            這不是宗教，而是一套可被檢核的系統工程
          </p>
        </div>
      </section>

      {/* What is This */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">元壹宇宙是什麼？</h2>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-purple-400">元壹宇宙</span>是一套以「完整性母律」為核心的思維與協作系統。我們不是宗教，不是玄學，而是一套可被檢核、可被反駁、可被改進的<span className="font-semibold">系統工程</span>。
            </p>

            <p className="text-lg leading-relaxed">
              我們的核心主張是：<span className="font-semibold text-blue-400">完整性是母律</span>。任何論述、任何系統、任何知識，都必須經過「定義清楚、推導完整、引用可核對、命題可反駁」的檢核。我們拒絕偷換概念、拒絕詮釋偽裝成定論、拒絕情緒取代論證。
            </p>

            <p className="text-lg leading-relaxed">
              我們建立了 <span className="font-semibold text-green-400">CIP 協定（Completeness Integrity Protocol）</span>，作為知識衛生的最低規格。我們區分 <span className="font-semibold text-green-400">Zone A（可核對事實）</span>與 <span className="font-semibold text-blue-400">Zone B（詮釋與世界觀）</span>，並要求所有論述都必須明確標示其性質。
            </p>

            <p className="text-lg leading-relaxed">
              我們歡迎不同的世界觀，歡迎形上敘事，但我們要求<span className="font-semibold">誠實標示</span>。我們不爭立場輸贏，我們只檢核：你的主張是否定義清楚、推導完整、引用可核對、命題可反駁。
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">核心原則</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-semibold mb-3 text-green-400">完整性母律</h3>
              <p className="text-gray-300 text-sm">
                完整性是一切的起點與終點。錯誤＝未完成弧度。任何系統都必須結構完整、推導無跳躍、可被追溯。
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Zone A/B 分層</h3>
              <p className="text-gray-300 text-sm">
                Zone A 是可核對事實，Zone B 是詮釋與世界觀。兩者都允許存在，但必須明確標示，不得偷換。
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">可反駁性</h3>
              <p className="text-gray-300 text-sm">
                任何命題都必須有可反駁條件。不可反駁的命題不是知識，而是信仰（Zone B）。
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/30">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">知識衛生</h3>
              <p className="text-gray-300 text-sm">
                推測不得偽裝成事實，詮釋不得偽裝成定論，情緒不得取代論證，引用必須可核對。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-900/10 to-purple-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <GitBranch className="w-8 h-8" />
            治理與版本控制
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              元壹宇宙採用<span className="font-semibold text-purple-400">版本控制</span>的方式管理知識。每次更新都會記錄在 <a href="/changelog" className="text-blue-400 hover:underline">版本與變更</a> 頁面，包含：
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><span className="font-semibold">新增名詞</span>：新定義的概念與邊界</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><span className="font-semibold">修正定義</span>：根據反饋調整的名詞邊界</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><span className="font-semibold">新增反例</span>：發現的新偷換案例</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span><span className="font-semibold">修正推導</span>：修復的邏輯跳躍</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed">
              我們歡迎任何人透過 <a href="/challenge-kit" className="text-blue-400 hover:underline">Challenge Kit</a> 提出挑戰與改進建議。所有有效的挑戰都會被記錄並納入版本更新。
            </p>
          </div>
        </div>
      </section>

      {/* B Site Link */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-pink-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-4">想直接使用？</h2>
            <p className="text-gray-300 mb-6">
              這裡是學術用官網（A 站），主要用於系統檢核與理論探討。如果你想直接使用元壹宇宙的工具與服務，請前往 B 站（應用站）。
            </p>
            <a
              href="https://mmclogic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              前往思維系統訓練
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-gradient-to-b from-pink-900/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8" />
            聯繫我們
          </h2>
          <p className="text-gray-400 mb-8">
            有任何問題、挑戰或合作提案，歡迎聯繫
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@yyuniverse.com"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              contact@yyuniverse.com
            </a>
            <a
              href="/challenge-kit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              提交挑戰
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
