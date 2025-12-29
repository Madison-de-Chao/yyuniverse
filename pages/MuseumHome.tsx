import React from 'react';
import { Shield, ArrowRight, BookOpen, Target, Microscope, Wrench } from 'lucide-react';

const MuseumHome: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="元壹宇宙 Logo" 
              className="w-96 h-96 md:w-[500px] md:h-[500px] object-contain mx-auto"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            元壹宇宙
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            一套「完整性母律」驅動的思維與協作系統
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            這不是宗教，不是玄學，而是一套可被檢核、可被反駁、可被改進的系統工程
          </p>

          {/* Three-Part Intro */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">我們解什麼問題？</h3>
              <p className="text-sm text-gray-300">
                偷換概念、詮釋偽裝成定論、情緒取代論證、責任外包的高級包裝
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">我們用什麼方法？</h3>
              <p className="text-sm text-gray-300">
                完整性母律 + CIP 協定 + Zone A/B 分層 + 可反駁條件 + 知識衛生規格
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/30">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">我們如何避免偷換？</h3>
              <p className="text-sm text-gray-300">
                推測必須標示、引用必須可核對、Zone A/B 必須分層、命題必須可反駁
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/system-map"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              快速理解（3 分鐘）
            </a>
            <a
              href="/challenge-kit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              <Target className="w-5 h-5" />
              Challenge Kit（給挑戰者）
            </a>
            <a
              href="https://b.yyuniverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              想直接使用 → 前往 B 站
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reader Paths */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">你是誰？</h2>
          <p className="text-gray-400 mb-12 text-center">
            根據你的目的，選擇最適合的路徑
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Researcher */}
            <a
              href="/system-map?path=researcher"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all group"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">研究者</h3>
              <p className="text-gray-400 mb-4">
                我想深入理解系統的理論基礎與方法論
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-semibold">
                查看路徑
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Practitioner */}
            <a
              href="/system-map?path=practitioner"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all group"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">實作者</h3>
              <p className="text-gray-400 mb-4">
                我想直接應用這套系統解決實際問題
              </p>
              <div className="flex items-center gap-2 text-purple-400 font-semibold">
                查看路徑
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Challenger */}
            <a
              href="/challenge-kit"
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-green-500/30 hover:border-green-500/60 transition-all group"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">挑戰者</h3>
              <p className="text-gray-400 mb-4">
                我想檢核、反駁或改進這套系統
              </p>
              <div className="flex items-center gap-2 text-green-400 font-semibold">
                查看規格
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">為什麼選擇元壹宇宙？</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">可檢核的權威</h3>
              <p className="text-gray-300 mb-4">
                我們不要求你相信我們，我們要求你<span className="font-semibold">檢核我們</span>。所有論述都有明確的定義、推導鏈、引用來源與可反駁條件。
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Zone A/B 分層：事實與詮釋明確區分</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>CIP 協定：知識衛生的最低規格</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Challenge Kit：公開的挑戰規格</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">預先處理「容易被嘴的點」</h3>
              <p className="text-gray-300 mb-4">
                我們知道哪些地方容易被挑戰，所以我們<span className="font-semibold">預先處理</span>。偷換概念、Zone A/B 混用、不可證偽，這些問題我們都有明確的防護機制。
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>名詞邊界表：每個名詞都有反例與邊界測試</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>證據索引：引用來源可核對，範圍明確標示</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>版本控制：所有修正都有記錄與追溯</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">系統工程，不是玄學口號</h3>
              <p className="text-gray-300 mb-4">
                我們不是宗教，不是心靈雞湯，而是一套<span className="font-semibold">可操作的系統工程</span>。從 Kernel 到 Casebook，每一層都有明確的規格。
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>七大層級：從母律到應用的完整架構</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>反例模組：用真實案例壓力測試</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>可追溯性：每個結論都能回溯到前提</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">歡迎不同世界觀</h3>
              <p className="text-gray-300 mb-4">
                我們不爭立場輸贏，我們只要求<span className="font-semibold">誠實標示</span>。Zone B 詮釋允許存在，但必須明確標示為詮釋，不得偽裝成 Zone A 定論。
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>形上敘事：允許，但必須標示為詮釋</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>情緒存在：允許，但不能取代論證</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>不同觀點：歡迎，但請用可核對的方式討論</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">準備好開始了嗎？</h2>
          <p className="text-xl text-gray-400 mb-12">
            選擇你的路徑，或直接挑戰我們
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/system-map"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              進入系統總覽
            </a>
            <a
              href="/challenge-kit"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              直接挑戰
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuseumHome;
