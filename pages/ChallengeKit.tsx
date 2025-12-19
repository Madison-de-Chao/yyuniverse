import React from 'react';
import { ExternalLink, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const ChallengeKit: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Challenge Kit｜公開檢核規格
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            你可以反駁我，但請用可核對的方式
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto">
            這裡不討論立場輸贏。我只討論：你的主張是否定義清楚、推導完整、引用可核對、命題可反駁。
          </p>
          
          {/* Three Promises */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <p className="text-sm text-gray-300">
                我允許不同世界觀，但拒絕<span className="text-red-400 font-semibold">「偷換概念」</span>
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <p className="text-sm text-gray-300">
                我允許形上詮釋，但拒絕<span className="text-red-400 font-semibold">「詮釋偽裝成定論」</span>
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/30">
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <p className="text-sm text-gray-300">
                我允許情緒存在，但拒絕<span className="text-red-400 font-semibold">「情緒取代論證」</span>
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#challenge-format"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              直接按規格挑戰
            </a>
            <a
              href="#system-guide"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              先看 15 張系統圖導覽（3 分鐘）
            </a>
          </div>
        </div>
      </section>

      {/* What to Challenge */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">你要挑戰的是什麼？</h2>
          <p className="text-gray-400 mb-8 text-center">
            你可以挑戰三類內容（請選一類或多類）：
          </p>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Zone A（可核對）
              </h3>
              <p className="text-gray-300">
                實驗結論、資料主張、可重複陳述
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                推導鏈
              </h3>
              <p className="text-gray-300">
                我從資料到結論的假設、步驟、是否有跳躍
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Zone B（詮釋）
              </h3>
              <p className="text-gray-300">
                形上敘事與宇宙觀（允許，但必須清楚標示為詮釋）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Format */}
      <section id="challenge-format" className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">回覆格式</h2>
          <p className="text-gray-400 mb-8 text-center">
            你若要反駁我，請照這個回（越短越好、但要完整）：
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">
                  1. 命題（1 句）
                </h3>
                <p className="text-gray-300 text-sm">
                  你要反駁的句子是什麼？（請原句引用）
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  2. 定義（1–3 句）
                </h3>
                <p className="text-gray-300 text-sm">
                  你用的關鍵名詞怎麼定義？（避免偷換）
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-indigo-400">
                  3. 推導（3–7 步）
                </h3>
                <p className="text-gray-300 text-sm">
                  你怎麼從前提走到結論？
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">
                  4. 可反駁條件（至少 1 條）
                </h3>
                <p className="text-gray-300 text-sm">
                  什麼情況下你願意承認你錯？
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  5. 可核對引用
                </h3>
                <ul className="text-gray-300 text-sm space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>論文：標題＋年份＋章節/段落</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>影片：連結＋時間戳＋逐字句</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>不接受：只列人名、只列名詞、只說「已證實/共識」</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forbidden Tactics */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-900/10 to-red-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            禁用招式
          </h2>
          <p className="text-gray-400 mb-8 text-center">
            我會直接判定為無效回覆的情況（避免無限換戰場）：
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-900/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-300">
                用「你落後/初學者/你認知有問題」取代推導
              </p>
            </div>

            <div className="bg-red-900/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-300">
                用「這是共識」但不提供原文段落
              </p>
            </div>

            <div className="bg-red-900/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-300">
                把 Zone B 詮釋包裝成 Zone A 定論
              </p>
            </div>

            <div className="bg-red-900/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-300">
                無限換名詞、但不固定定義
              </p>
            </div>

            <div className="bg-red-900/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 flex items-start gap-3 md:col-span-2">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-300">
                只丟名詞串列（Bell、AdS/CFT、process matrix…）不給命題與推導
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Image Guide */}
      <section id="system-guide" className="py-16 px-6 bg-gradient-to-b from-red-900/10 to-purple-900/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">15 張圖導覽</h2>
          <p className="text-gray-400 mb-12 text-center">
            照這個排，讀者會一路被「帶著走」，而不是看不懂
          </p>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: '本次系統更新：從「伊」到「壹」的完整性之旅',
                guide: '這套系統的核心不是口號，是「如何把錯誤收束回完整」。',
              },
              {
                num: 2,
                title: '完整，是一切的起點與終點',
                guide: '我不爭立場，我只檢核「真假、發生/未發生、是否偷換」。',
              },
              {
                num: 3,
                title: '解方：第 0 章｜完整性哲學（Zero-Law）',
                guide: '所有討論先過「完整性母律」：你在說事實、推論、還是詮釋？',
              },
              {
                num: 4,
                title: '宇宙的運作原理：結構不滅、深度可變、錯誤歸圓',
                guide: '你可以簡化模型，但不能刪掉推導鏈。',
              },
              {
                num: 5,
                title: '核心工具（一）：完整性如何在思維中顯化（八階循環）',
                guide: '任何論述都要過：懷疑→驗證→拆解→比較→整合→自省。',
              },
              {
                num: 6,
                title: '核心工具（二）：在混亂中維持清晰的防護網',
                guide: '情緒可以有，但不能拿情緒冒充證據。',
              },
              {
                num: 7,
                title: '把宇宙觀變成方法論：思維的三大層次架構',
                guide: 'Zone A（資料）/推導/Zone B（詮釋）分層，是防偷換的最低規格。',
              },
              {
                num: 8,
                title: '宇宙的律法：七大無二法則（形上層）',
                guide: '形上可以談，但必須標示為詮釋，不得偽裝成實驗定論。',
              },
              {
                num: 9,
                title: '弧度的回返：七種在現實世界運作的宇宙規律（現象層）',
                guide: '人在框內仍受規則約束：後果、回應、責任不可外包。',
              },
              {
                num: 10,
                title: '更新的核心：為何我們創造了「另一個我」？',
                guide: '很多世界觀其實是「責任外包」的高級包裝。',
              },
              {
                num: 11,
                title: '伊不是禍源，伊是唯一承受後果的受害者',
                guide: '當知識被用來免責、壓人、變現，就在製造文明的「伊」。',
              },
              {
                num: 12,
                title: '最初的壹：家之律',
                guide: '再高維的敘事，也不能取消生活層面的規則與承擔。',
              },
              {
                num: 13,
                title: '求知律 II：從世界的 Why，走向自己的 Why',
                guide: '真正的知不是贏別人，而是對自己的動機負責。',
              },
              {
                num: 14,
                title: '最終洞察：語言本身的反相｜AN OTHER ONE',
                guide: '語言最常見的錯誤：把詮釋說成定論，把不知道說成不存在。',
              },
              {
                num: 15,
                title: '整合：從伊到壹的完整迴路',
                guide: '我的要求只有一個：把知識的態度做回完整性。',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-lg">
                      {item.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 italic">
                      導覽：{item.guide}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            你可以不同意我，但請用同一套規格討論
          </h2>
          <p className="text-gray-400 mb-8">
            用規格回覆我：命題＋推導＋引用
          </p>
          <a
            href="mailto:challenge@yyuniverse.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            提交挑戰
          </a>
        </div>
      </section>
    </div>
  );
};

export default ChallengeKit;
