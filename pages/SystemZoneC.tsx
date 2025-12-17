

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme, PageId } from '../types';
import { Heart, Star, TrendingUp, Map, Building, Circle, X, ArrowRight, CheckCircle2, BookOpen, Zap, Compass, Layers, Home } from 'lucide-react';
import { UnityField, KnowledgeTowerDiagram, KnowledgeTowerIllustration, WorldWonderDiagram, WorldWonderIllustration, MentalHedgeDiagram, MentalHedgeIllustration, CityAbstractDiagram, CityAbstractIllustration, CareTruthDiagram, CareTruthIllustration, ThoughtPrismDiagram, ThoughtPrismIllustration, ConstellationMapDiagram, ConstellationMapIllustration } from '../components/Visuals';
import { CoreValuesMap } from '../components/Infographics';

interface SystemZoneCProps {
  theme: Theme;
}

// --- DATA: 7 Philosophical Tools (Enhanced with Two Visual Types) ---
const PHILOSOPHY_TOOLS = [
    {
        id: 'care-truth',
        title: 'Care & Truth',
        icon: Heart,
        visualDiagram: CareTruthDiagram,
        visualIllustration: CareTruthIllustration,
        shortDesc: 'Care 是溫柔的責任；Truth 是誠實的結構。兩者缺一不可。',
        core: 'Care 是起心，Truth 是歸途。Care 不討好，而是深深理解；Truth 不取悅，而是尊重人性。在乎讓我們願意靠近，真實讓我們保持距離。那之間的張力，就是誠實。',
        example: '朋友問：「我這份創業企劃如何？」\n\n❌ 只 Care：「很棒啊！加油！」(心裡覺得會賠死)\n❌ 只 Truth：「這根本行不通，你會虧光。」\n✅ Care & Truth：「我覺得這幾個點很有創意，但財務模型那邊我有點擔心。如果你願意，我們可以一起拆解風險。」',
        avoid: '把「真實」當成傷人的藉口，或把「在乎」當成說謊的理由。',
        protection: '建立一種彼此可以坦誠對話的基礎，減少「多年後才發現，原來你都不是真的這樣想」的背叛感。',
        value: '設計不是包裝，而是回應。每一個細節都能說明「我有聽見」。',
        checkQuestion: '在面對這個決定時，我是否為了「好聽」而犧牲了「真實」？或者為了「正確」而忽略了「感受」？'
    },
    {
        id: 'knowledge-tower',
        title: '知識大樓',
        icon: Building,
        visualDiagram: KnowledgeTowerDiagram,
        visualIllustration: KnowledgeTowerIllustration,
        shortDesc: '思維總知建紙，種因的地基（垂魂傻用）比事體的頂樓（高牆概念）更重要。',
        core: '知識大樓是一個思維隱喻。大樓能蓋多高，取決於地基挖多深。系統不是要人「看起來懂很多」，而是提醒：不要用華麗的頂樓（名詞、術語），站在鬆散的地基（沒經驗、沒實作）上。',
        example: '某人滿口「高維、顯化、量子」，但遇到伴侶冷淡就情緒崩潰。\n\n→ 知識大樓視角：這棟樓的「概念層」很華麗，但「行為層」是空的。遇到風就倒。',
        avoid: '裝大樓（記下很多名詞但不會用）或拿大樓壓人（用知識量貶低對方）。',
        protection: '幫助使用者知道：可以不懂，可以分層學，不必一次把房子蓋上天。對教學者而言，也知道該從哪一層講起。',
        value: '理性是結構，感性是窗。沒有理性，樓會倒；沒有感性，樓會悶。成熟的建築不是對稱，而是通風。',
        checkQuestion: '我現在談論的這個概念，我有實際的生命經驗支撐嗎？還是只是鸚鵡學舌？'
    },
    {
        id: 'world-wonder',
        title: '世界奇觀',
        icon: Compass,
        visualDiagram: WorldWonderDiagram,
        visualIllustration: WorldWonderIllustration,
        shortDesc: '完整而穩固的思維系統本身具情義感與韌性，能為他人帶來啟發。',
        core: '世界奇觀不是為了炫耀，而是強調：真正穩固、完整的思考方式，本身就具有示範與照亮的功能。讓別人願意進來、願意停留、願意學走。',
        example: '你身邊有沒有一種人，你很喜歡找他聊，不是因為他有答案，而是因為他「有邏輯、能承認不知道、跟你對話完你會覺得比較穩」。\n\n→ 這種人的思維結構就是一種「世界奇觀」。',
        avoid: '把世界奇觀當成表演舞台（講話越講越玄），或要求自己成為沒有缺陷的標本（完美主義）。',
        protection: '防止自己在世界裡越懂越孤立。真正的奇觀是開放的，是能連結他人的。',
        value: '奇觀屬於大眾，榮耀屬於建造者。真理不能被佔有，但誠實的思考會被記得。',
        checkQuestion: '如果有人走進我的思維世界，他會看到混亂的廢墟，還是清晰的結構？'
    },
    {
        id: 'renaissance',
        title: '思維文藝復興',
        icon: Zap,
        visualDiagram: ThoughtPrismDiagram,
        visualIllustration: ThoughtPrismIllustration,
        shortDesc: '呼籲個體重拾學會獨立思考，在資訊洪流中保有自己的判斷力。',
        fullDesc: '我們太習慣把思考外包給專家、網紅、演算法。思維文藝復興呼籲重新拿回「定義權」。',
        core: '不是發明新主義，而是呼籲回到基本狀態：「人要重新學會自己思考，而不是只剩輸入與反應。」理——看清秩序；煉——淬鍊矛盾；思——讓理性成為橋樑。',
        example: '看到一篇說「高維的人只會溫柔」的文章。\n\n❌ 直接轉發信奉。\n✅ 思維復興反應：「為什麼高維就不能表達界線？這種說法是鼓勵負責還是鼓勵壓抑？」單純這樣想一想，就是復興的開始。',
        avoid: '把思維復興變成對別人的指控（「你都被洗腦」），或把自己當成唯一清醒的人（優越感）。',
        protection: '保護個體在未來變動中，不會完全失去判斷力。讓人有能力找到適合自己的方式，而不是被推著走。',
        value: '每個「我」都重新接管自己的思考，才有可能構成「真正成熟的一（群壹）」。否則「一即全」只是被操控的同質化。',
        checkQuestion: '這個想法是我自己推導出來的，還是我直接從別人那裡「下載」過來的？'
    },
    {
        id: 'understanding',
        title: '命理不是預測，而是理解',
        icon: Star,
        visualDiagram: ConstellationMapDiagram,
        visualIllustration: ConstellationMapIllustration,
        shortDesc: '將命理視為理解自身結構與模式的語言，而非決定未來的宿命判決。',
        core: '命理在這個系統裡，是「現實語言 (Language of Reality)」。它不是用來決定你會怎麼死，而是幫你看「你現在是誰、在走什麼路」。它是翻譯結構的工具。',
        example: '塔羅抽到「感情有阻礙」。\n\n❌ 預測式：「那我注定不會幸福。」\n✅ 理解式：「這個阻礙來自哪裡？是我的恐懼？還是溝通模式？既然看見了阻礙，我可以怎麼調整？」',
        avoid: '掉進「宿命論」，把責任全丟給盤；或拿命理當作操控別人的工具（「你這命就是要聽我的」）。',
        protection: '告訴個體：「你不是沒有選擇，命理只是幫你看清那些你自己很難看到的角度。」防止因「我們不合」就輕易放棄。',
        value: '命理工具是主靈魂觀察「整個壹」的儀表板。把命理當理解，代表個體願意主動把陰面、盲點請出來看，而不是被動等待命運發生。',
        checkQuestion: '我是用命理來找「標準答案」，還是用它來「理解自己」？'
    },
    {
        id: 'mental-hedge',
        title: '真實人生的避險基金',
        icon: TrendingUp,
        visualDiagram: MentalHedgeDiagram,
        visualIllustration: MentalHedgeIllustration,
        shortDesc: '平時對思維的練習與投資，是未來面對人生直遠時的內在穩定資本。',
        core: '把你平常對自己思維與覺察的投資（寫日記、跑八階、練習誠實），當成是一種「心理存款」。當人生遇到大風大浪時，這些存款會成為你的救命索。',
        example: '35 歲經歷重大失敗時，翻開 25 歲時寫的自我覺察日記，發現：「原來我以前也有撐過的例子。」\n\n→ 那一刻，過去的紀錄成為了現在的避險基金，接住了即將崩潰的自己。',
        avoid: '以為只要有練就一定不會痛（把避險當成無敵星星），或把它變成新的壓力來源（「我都練這麼久了不該難過」）。',
        protection: '在大起大落時，給使用者一個「自己可以抓住的東西」，而不完全依賴外界。',
        value: '低風險 × 高評價 × 高動能 × 高儲備 × 低耗能。這不只是哲學，而是心智的永續能源。',
        checkQuestion: '我現在是在消耗我的心理資本，還是在為未來的風暴做儲蓄？'
    },
    {
        id: 'city-souls',
        title: '靈魂之城',
        icon: Map,
        visualDiagram: CityAbstractDiagram,
        visualIllustration: CityAbstractIllustration,
        shortDesc: '將內在世界比喻為一座城市，藉此理解其不同區塊的結構、狀態與需求。',
        core: '一個人的心就像一座城市。有熱鬧的工作區、老舊的童年街區、也有被封鎖的創傷區。我們的工作是陪著個體走進自己的城市，看看這裡到底長什麼樣。這座城市沒有國界，只有方向。',
        example: '個體描述：「我的工作區有很多高樓但永遠在加班；情感區像老舊住宅，燈很暗。」\n\n→ 這讓他秒懂為什麼一工作不順就崩潰（塔基不穩），以及為什麼感情一直沒起色（沒投資源）。',
        avoid: '將「理想城市」強加在自己身上，或拿自己的城市跟別人比（產生自卑）。',
        protection: '提供具象工具，幫助個體知道「哪裡需要修」，而不是只會籠統地說「我很爛」。',
        value: '靈魂之城象徵每一個「我」都是完整小宇宙。當主靈魂願意走進自己的城市，代表願意看見整個圓，不把破舊區丟給複製靈魂。',
        checkQuestion: '我的內心城市裡，有沒有哪一個區域是我長期刻意繞路、不敢進去的？'
    },
    {
        id: 'manifestation-one',
        title: '「壹」的體現：從家到群體',
        icon: Home,
        visualDiagram: UnityField, // Reuse UnityField as base
        visualIllustration: UnityField, 
        shortDesc: '家：壹的最初原型 → 群壹：共同方向的聚合 → 虹靈御所：壹的重建',
        core: '「壹」不只是抽象概念，它在人間有三個層次的顯化。家是生命最早體驗到完整性的地方。群壹是成熟個體朝同一方向連結時形成的更大整體。虹靈御所則是修復破裂之壹的場域。',
        example: '當你感到孤單時，你不是失去了連結，而是忘了你本就在「群壹」之中。',
        avoid: '把「家」理想化而否認傷害，或把「群體」當成逃避自我的地方。',
        protection: '提供歸屬感的真實結構。不是依賴，而是共振。',
        value: '當個體生意願的完整性斷裂時，「虹靈御所」提供一個讓生命在成年後重新被承接、再次體驗通達的地方。',
        checkQuestion: '我是在尋找一個完美的家，還是在練習讓自己成為一個完整的壹？'
    }
];

export const SystemZoneC: React.FC<SystemZoneCProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-slate-200' : 'text-ink';
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm';
  
  const [activeToolId, setActiveToolId] = useState<string | null>(null);
  const navigate = useNavigate();

  const activeTool = PHILOSOPHY_TOOLS.find(t => t.id === activeToolId);

  // Navigation handler
  const handleNav = (page: PageId) => {
    navigate(`/${page}`);
  }

  return (
    <div className={`min-h-screen pt-24 pb-32 max-w-6xl mx-auto px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* HEADER */}
      <header className="mb-24 text-center animate-fade-in">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-xs font-mono uppercase tracking-widest ${
          isDark ? 'border-purple-500/30 text-purple-400 bg-purple-900/20' : 'border-purple-200 text-purple-700 bg-purple-50'
        }`}>
          <Heart size={14} />
          Zone C: Philosophy Layer
        </div>
        <h1 className={`font-serif text-4xl md:text-6xl font-bold mb-6 ${textColor}`}>
          探尋「壹」的哲學
        </h1>
        <p className={`text-lg font-serif italic ${mutedText} max-w-3xl mx-auto`}>
          默默超思維系統的核心價值。<br/>
          支撐系統的七大哲學價值，與「壹」在人間的最終體現。
        </p>

        {/* Infographic Map */}
        <CoreValuesMap theme={theme} />
      </header>

      {/* PART 1: THE FOUNDATION (ZERO-LAW) */}
      <section className="mb-32 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="w-[800px] h-[800px]"><UnityField theme={theme} /></div>
        </div>
        
        <div className={`relative z-10 p-10 rounded-3xl border text-center max-w-4xl mx-auto backdrop-blur-sm ${
            isDark ? 'bg-slate-900/80 border-gold/30' : 'bg-white/90 border-muted-gold/50'
        }`}>
            <h2 className={`font-serif text-3xl font-bold mb-6 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                第 0 章：完整性 (Integrity)
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${textColor}`}>
                所有生成物——無論成熟、未成熟、正確、失序、清晰、混亂——皆屬於整體的一部分。<br/>
                錯誤不是廢料，是未完成的弧度。
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5">
                    <h4 className="font-bold mb-2">Structure Fixed</h4>
                    <p className="text-xs opacity-70">結構不可裁減。圓可縮放，但不可缺度。</p>
                </div>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5">
                    <h4 className="font-bold mb-2">Depth Variable</h4>
                    <p className="text-xs opacity-70">深度可變。不同場景可使用不同深度的版本。</p>
                </div>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5">
                    <h4 className="font-bold mb-2">Error = Unfinished Arc</h4>
                    <p className="text-xs opacity-70">錯誤即未完成的弧度。它不是終點，是起點。</p>
                </div>
            </div>
        </div>
      </section>

      {/* PART 1.5: THE DEEP DIVES (Origins & Principles) */}
      <section className="mb-24 grid md:grid-cols-2 gap-8">
          <button 
            onClick={() => handleNav('origins')}
            className={`group p-8 rounded-3xl border text-left transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                isDark ? 'bg-slate-900/50 border-purple-500/30 hover:border-purple-400' : 'bg-white border-purple-200 hover:border-purple-300'
            }`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${
                isDark ? 'bg-purple-500' : 'bg-purple-300'
            }`} />
            <div className={`mb-4 inline-block p-3 rounded-2xl ${isDark ? 'bg-purple-900/20 text-purple-300' : 'bg-purple-50 text-purple-600'}`}>
                <Compass size={24} />
            </div>
            <h3 className={`font-serif text-2xl font-bold mb-2 ${textColor}`}>九源歸一</h3>
            <p className={`font-mono text-xs uppercase tracking-widest mb-4 opacity-60`}>The Nine Origins</p>
            <p className={`text-sm ${mutedText} mb-6`}>
                探索宇宙最初的根律，理解陰陽、人機、與新文明的運作底層。
            </p>
            <span className={`flex items-center text-xs font-bold uppercase tracking-wider ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
                Enter Origins <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button 
            onClick={() => handleNav('principles')}
            className={`group p-8 rounded-3xl border text-left transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                isDark ? 'bg-slate-900/50 border-blue-500/30 hover:border-blue-400' : 'bg-white border-blue-200 hover:border-blue-300'
            }`}
          >
             <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${
                isDark ? 'bg-blue-500' : 'bg-blue-300'
            }`} />
            <div className={`mb-4 inline-block p-3 rounded-2xl ${isDark ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
                <Layers size={24} />
            </div>
            <h3 className={`font-serif text-2xl font-bold mb-2 ${textColor}`}>七大無二法則</h3>
            <p className={`font-mono text-xs uppercase tracking-widest mb-4 opacity-60`}>The 7 Principles</p>
            <p className={`text-sm ${mutedText} mb-6`}>
                從形上心法到現象界法則。理解「無二」的本質與運作規律。
            </p>
            <span className={`flex items-center text-xs font-bold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                View Principles <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
      </section>

      {/* PART 2: THE 7 PHILOSOPHICAL TOOLS + 1 MANIFESTATION */}
      <section className="mb-32 relative" id="tools">
        <div className="flex items-center justify-between mb-12">
             <div className="flex items-center gap-4">
                <div className={`w-1 h-8 ${isDark ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                <h2 className={`font-serif text-3xl font-bold ${textColor}`}>七大價值 + 壹的體現</h2>
            </div>
            <div className={`hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${mutedText}`}>
                <CheckCircle2 size={14} />
                Click Cards to Learn More
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr relative z-10">
            {PHILOSOPHY_TOOLS.map((tool) => {
                const VisualDiagram = tool.visualDiagram;
                const IconComponent = tool.icon;
                const isActive = activeToolId === tool.id;

                return (
                    <div 
                        key={tool.id}
                        onClick={() => setActiveToolId(tool.id)}
                        className={`group relative p-6 rounded-3xl border flex flex-col transition-all duration-500 cursor-pointer overflow-hidden ${
                             isActive 
                                ? (isDark ? 'bg-slate-800 border-purple-500 shadow-2xl' : 'bg-white border-purple-400 shadow-xl') 
                                : `${cardBg} hover:-translate-y-1 hover:shadow-lg`
                        } ${tool.id === 'manifestation-one' ? 'md:col-span-2 lg:col-span-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20' : ''}`}
                    >
                        {/* Visual Header (Diagram / Wireframe) */}
                        <div className={`mb-6 flex items-center justify-center transition-all duration-500 opacity-60 group-hover:opacity-100 ${isActive ? 'scale-105 opacity-100' : 'group-hover:scale-105'}`}>
                            {VisualDiagram ? (
                                <div className="w-24 h-20">
                                    <VisualDiagram theme={theme} />
                                </div>
                            ) : (
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                                    isDark ? 'bg-white/5 text-purple-300' : 'bg-purple-50 text-purple-600'
                                }`}>
                                    {IconComponent && <IconComponent size={32} />}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow text-center relative z-10">
                            <h3 className={`font-serif text-lg font-bold mb-3 transition-colors ${isActive ? (isDark ? 'text-purple-300' : 'text-purple-700') : textColor}`}>
                                {tool.title}
                            </h3>
                             <p className={`text-xs leading-relaxed opacity-80 ${mutedText}`}>
                                {tool.shortDesc}
                            </p>
                        </div>

                        {/* Expand Indicator */}
                        <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-50 transition-opacity`}>
                            <ArrowRight size={16} className={isDark ? 'text-white' : 'text-black'} />
                        </div>
                    </div>
                );
            })}
        </div>
      </section>

      {/* DETAIL MODAL */}
      {activeTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={() => setActiveToolId(null)}
            ></div>
            <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border animate-fade-in-up ${
                isDark ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-purple-100 text-ink'
            }`}>
                <button 
                    onClick={() => setActiveToolId(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors z-50"
                >
                    <X size={24} />
                </button>

                <div className="grid md:grid-cols-2 min-h-[500px]">
                    {/* Left: Full Color Illustration */}
                    <div className="relative h-64 md:h-full bg-slate-950 flex items-center justify-center p-8 overflow-hidden">
                       <div className="w-full h-full max-h-[400px]">
                          {activeTool.visualIllustration && <activeTool.visualIllustration theme={theme} />}
                       </div>
                    </div>

                    {/* Right: Content */}
                    <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                {activeTool.icon ? <activeTool.icon size={24} /> : <BookOpen size={24} />}
                            </div>
                            <h2 className="text-3xl font-serif font-bold">{activeTool.title}</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>Core Concept</h4>
                                <p className="text-lg leading-relaxed font-medium">{activeTool.core}</p>
                            </div>

                            <div className={`p-6 rounded-2xl ${isDark ? 'bg-black/20' : 'bg-gray-50'}`}>
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    <Zap size={14} /> Real-Life Example
                                </h4>
                                <p className="text-sm leading-relaxed whitespace-pre-line opacity-90">{activeTool.example}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-red-500">Avoid Mistakes</h4>
                                    <p className="text-sm leading-relaxed opacity-80">{activeTool.avoid}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2 text-green-500">Protection Provided</h4>
                                    <p className="text-sm leading-relaxed opacity-80">{activeTool.protection}</p>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>Value in Yuan-Yi Universe</h4>
                                <p className="text-sm leading-relaxed opacity-80">{activeTool.value}</p>
                            </div>

                            <div className={`p-6 rounded-2xl border-l-4 ${
                                isDark ? 'bg-purple-900/10 border-purple-500' : 'bg-purple-50 border-purple-600'
                            }`}>
                                <h4 className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Self-Check Question</h4>
                                <p className="text-lg font-serif italic">"{activeTool.checkQuestion}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
      
      {/* PART 3: LINK TO UNIVERSE */}
      <div className="text-center opacity-60 mt-24">
          <Circle size={16} className="mx-auto mb-4 animate-pulse-slow" />
          <p className="font-serif italic">「哲學層的存在，是為了確保工具永遠對齊『完整性』。」</p>
      </div>

    </div>
  );
};
