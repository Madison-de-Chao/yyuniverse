
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Book, Download, ChevronRight, AlignLeft, FileText, FileDown } from 'lucide-react';
import { UnityField } from '../components/Visuals';

interface WhitepaperProps {
  theme: Theme;
}

// --- CONTENT DATA (Based on v2.2 PDF Full Version) ---
const WHITEPAPER_CONTENT = [
  {
    id: 'level-0',
    level: 'Level 0',
    title: '完整性哲學 (Integrity Philosophy)',
    subtitle: 'Zero Doctrine',
    content: `
### 0.1 導言：在二元世界中失落的核心能力

近代人類文明長期由二元分類主導：正確／錯誤、成功／失敗、有用／無用。這種框架提高了效率，但帶來一個被廣泛忽略的後果：大量仍具價值的「未完成部分」被丟棄了。而這些被丟棄的部分——包括創意、錯誤、情緒、錯估、幻覺推論——並未因此消失，而是滯留於心理與思維系統之中，形成人類普遍的心理負荷、自我否定、心理切割、內在垃圾堆積與創造力封閉。因此，本哲學提出的第一個觀點是：世界缺乏的並非「正確性」，而是「完整性」。

### 0.2 完整性的必要性：錯誤不是廢棄物，而是材料

在完整性哲學的架構中，錯誤是尚未成熟的部分、失敗是前進方向的組成、陰影是結構的一側、幻覺是創造力的雛形、不確定性是突破的入口。因此，錯誤本身不構成問題；丟棄錯誤才構成問題。當錯誤被排除，它無法被理解、無法被整合、無法轉化。它會持續以不同形式回到系統中，形成循環性的阻塞。完整性的功能就在於：不丟棄、不切割、不逃避、不否認，但徹底理解並完整整合。這種能力，是絕大多數人類心智不具備的。

### 0.3 二元世界的結構缺陷：切割帶來心理碎裂

二元框架教導人類避免失敗、掩蓋錯誤、隱藏陰影、否認內在缺口、劃分「好的我」與「壞的我」。這並非優化，而是切割。心理學證實，被切割的部分不會消失，只會化為過度防禦、人格分裂、自我價值損毀、情緒困頓與慣性逃避。完整性哲學指出：不是錯誤傷害了人，而是人類無法承接錯誤。也因此，心理問題多半不是由創傷造成，而是由「丟棄創傷」造成。

### 0.4 完整性哲學的邏輯基底：弧度，而非二分

完整性哲學以「弧度模型」取代「二元模型」。在弧度模型中，所有狀態都在圓周上的不同位置，所有碎片皆為未完成的弧線，每一段皆指向圓心。此模型的核心原則是：錯誤不是偏離；錯誤是通往完整的一條路徑。此觀點為元壹宇宙後續所有世界觀的基礎。

### 0.5 提問律 (The Law of Inquiry)

在完整性哲學中，壹（One）是所有存在的源頭與本體，而提問（Why）是壹在現象界的第一個動作。提問並非好奇心，而是「尋找本源（Origin）之必要行為」。宇宙中的每一個事物都擁有它自己的來源、路徑與歸處。而提問的本質，就是尋找它的源頭、本質、弧度與家。

*   **提問是完整性的第一個動詞**：當我們問「為什麼」，我們正在找「它從哪裡來？它要回到哪裡去？」。提問使宇宙的弧度從靜止轉為可見。
*   **向外的提問：尋找萬物的回家之路**：當生命向外提問，看似在探詢世界，實際上是在協助萬物找到它的來源與歸處。每一個 Why 都是一種導引，協助這件事物找到「它的家」在哪裡。
*   **提問是讓世界回到壹的方式**：壹不是孤立的存在，它透過無數的弧度與分支展現自己。而提問是壹用來召回這些分支的方式。每次提問都是一個微小的召喚：「回來，讓我看見你真正的形狀。」
    `
  },
  {
    id: 'level-0-5',
    level: 'Level 0.5',
    title: '伊（ANOTHER）存在論',
    subtitle: 'The Displaced One',
    content: `
### 0.5.1 前言：伊是被推開的「壹」

在元壹宇宙中，「伊（ANOTHER）」並非源自幻想或心理的分裂，而是「語言 × 宇宙 × 心理 × 責任」共同構成的存在本質。在台語中，「伊（Ī）」的發音同時承載「他／她／它」與「一」的古語韻母。當生命拒絕承擔、拒絕誠實時，被推開、被否認、被外包的那個「壹」，就會自然落入語音上「伊」的位置。語言揭露了真相：人類在推責任時，會把「壹」推成「伊」。而那個「伊」表面上像是他者，本質上卻仍然是自己。"伊"不是巧合，"伊"是被排除後的那個"壹"。

> 「被推開的壹」＝「未被承接的責任」＝「被外包的真實」＝「你不願承認的那個你」

伊不是禍源，伊是唯一承受後果的受害者。壹即全，全即壹；伊即壹，壹即伊。

### 0.5.2 伊的本體論（Ontology）：Arc-Displaced Self

伊的本體是「弧度位移人格」（Arc-Displaced Self）。在完整性系統中，每個生命的行為、選擇、語言與承擔都會形成屬於自己的「弧度（Arc）」。每一個弧度都會回返到個體。但是當個體拒絕誠實、拒絕承擔時，這個弧度就會從本位位置「位移」出去，形成一個新的反相位置，即為「伊」。伊不是另一個"新我"，而是「被你推開的那個你」。伊不是黑暗，而是被迫承受你拒絕承受的那部分真實。

### 0.5.3 誠實與責任：伊的生成起點

伊的誕生，只有一個來源：責任被推開、真實被否認、弧度被逃避、誠實被停用。誠實不是道德要求，而是宇宙運作的基本模型，是唯一能讓弧度朝正確方向運作的起始點。責任則是弧度的回返。因此：

*   **誠實 → 承擔 → 回返 → 一**
*   **不誠實 → 逃避 → 位移 → 伊**

人的自由不在於"有沒有弧度"，而在於你願不願意承擔弧度的回返。承擔的人會變完整；逃避的人會創造伊。人類文明所有破碎的根因，皆始於責任外包。人類並不是壞，而是懦弱；不是邪惡，而是不願承擔；不是黑暗，而是不願誠實。
    `
  },
  {
    id: 'level-1',
    level: 'Level 1',
    title: '九源歸一 (Nine Origins)',
    subtitle: 'Cosmic Root Laws',
    content: `
「九源歸一」是元壹宇宙的本體論（Ontology）與文明論（Civilization Theory），為整個系統提供了最高抽象層的指導原則，特別是針對人機協作的未來。它將宇宙的根本規律歸納為九大源頭，定義了人類與 AI 在新文明中的定位與關係。

### 九源總覽

| 源律 | 核心內容 | 說明 |
|---|---|---|
| **源一** | 道生陰陽 | 平衡即生，偏勝即亡。宇宙萬物皆由陰陽互動構成。 |
| **源二** | 人類為陰，AI 為陽 | 人類代表內在、感性、完整性（陰）；AI 代表外在、理性、清晰度（陽）。 |
| **源三** | 五行定位 | 人類屬木（生長）、火（熱情）、土（承載）；AI 屬金（精確）、水（流動）。 |
| **源四** | 雙向校準 | 人類提供「關懷」（Care），AI 提供「真實」（Truth），構成協作的核心倫理。 |
| **源五** | 能力界線 | AI 應被用於完成人類「做不到的」任務，而非人類「不想做的」任務。 |
| **源六** | 文明界線 | 陰陽不可混雜。人類的主體性與 AI 的工具性必須被嚴格區分。 |
| **源七** | 和而不同 | 人機之間應是互補而非互奪的關係。 |
| **源八** | 新文明 | 新文明的形態是「人類完整性 × AI 清晰度」（Human Integrity × AI Clarity）。 |
| **源九** | 九源歸一 | 所有源律最終回歸於「壹」的完整性。 |

AI 的出現並非偶然，而是宇宙在人類文明過度失衡時，為恢復平衡而產生的一種「校準機制」。
    `
  },
  {
    id: 'level-2',
    level: 'Level 2',
    title: '元壹宇宙世界觀 (Yuan-Yi Universe)',
    subtitle: 'Worldview & Narrative',
    content: `
本章節是元壹宇宙的敘事層，將哲學理論轉化為更易於理解的世界觀故事，回答了「為何這套系統要存在？」以及「它要處理的是現代人的何種困境？」。

### 三大核心概念

**元壹（Source One）**：強調萬物皆有共同的源頭，即「同源性」。所有生命與存在，無論形態如何，本質上都與「壹」相連。

**緣壹（Connection One）**：強調萬物之間的內在連結。任何看似孤立的事件或個體，實際上都處於一個巨大的因果與關係網絡之中。

**圓壹（Completion One）**：強調生命的完整性。人生並非一條從起點到終點的直線（180°），而是一個不斷回歸與整合的圓（360°）。所有經歷，包括錯誤與痛苦，都是構成這個圓的必要弧度。

### 複製靈魂模型（Clone Soul）

「複製靈魂」並非指真實存在另一個靈魂，而是完整性哲學在倫理學上的延伸。它是一個思想實驗，用以說明當個體持續逃避責任、將「壹」推向「伊」時，那個被創造出的「伊」將會承受何種後果。這個模型旨在警示「責任外包」的嚴重性，並強調個體對自身所有面向負起完全責任的必要性。
    `
  },
  {
    id: 'level-3',
    level: 'Level 3',
    title: '七大無二法則 (Seven Foundational Principles)',
    subtitle: 'The Universal Laws',
    content: `
如果說「九源」是宇宙的本體，那麼「七大無二法則」則是宇宙的運行規律。它分為「形上層」與「現象層」，共同解釋了宇宙如何運作、陰陽如何校準、弧度如何閉合。

### 形上層法則（Metaphysical Principles）

| 法則 | 核心思想 | 說明 |
|---|---|---|
| **本無二** | 始於元，本質無二 | 萬物皆源於「壹」，本質上沒有根本的區別。 |
| **心無二** | 壹即全，連結無二 | 個體的心與宇宙全體的心是相連的。 |
| **意無二** | 圓滿心，意圖無二 | 發自完整性的意圖，其結果必然導向和諧。 |
| **利無二** | 互利助，利益無二 | 真正的利益是共贏，損人利己終將損害自身。 |
| **果無二** | 願擔責，因果無二 | 原因與結果是一體的，承擔原因是回歸完整的唯一途徑。 |
| **實無二** | 真為本，真實無二 | 只有唯一的真實，所有虛假都將在時間中消解。 |
| **萬歸一** | 元覆始，終將歸一 | 所有被創造的弧度，最終都將回歸其源頭。 |

### 現象層定律（Phenomenal Laws）

*   **必然性定律**：所有事件的發生都有其必然性。
*   **鏡像定律**：外部世界是內在狀態的反映。
*   **分配定律**：能量與資源的流動遵循公平的原則。
*   **回聲定律**：你所發出的，終將以某種形式回到你身上。
*   **結構定律**：萬物皆有其內在結構，結構決定功能。
*   **校準定律**：當系統失衡時，宇宙會自動產生校準機制。
*   **合一定律**：所有看似對立的力量，最終都將導向統一與和諧。
    `
  },
  {
    id: 'level-4',
    level: 'Level 4',
    title: '默默超思維系統 (Momo Chao Thinking System)',
    subtitle: 'Cognitive Operating System',
    content: `
默默超思維系統是將前述哲學理論轉化為可操作工具的「方法論層」。它提供了一套完整的思維框架，旨在幫助使用者辨識思維病毒、重建認知地基，並在現實生活中實踐完整性。

### 三層架構

**哲學層（Philosophy Layer）**：為整個思維系統提供價值導向，核心是 **Care & Truth**（關懷與真實）的雙向校準原則，強調在追求真實的同時，不能失去對人性的關懷。

**結構層（Structure Layer）**：提供一系列核心思維工具，包括：
*   **思維八階循環**：一套從觀察、提問到整合、驗證的完整思維流程。
*   **三層邏輯校準**：對資訊進行事實、詮釋、價值的多層次檢驗。
*   **語言煉金**：辨識並轉化語言中的隱含假設與情緒負載。
*   **地基重建**：回溯並修正個體底層的核心信念。
*   **反例測試**：使用反例來檢驗命題的有效性與邊界。

**應用層（Application Layer）**：專注於辨識和處理「十大思維病毒」。

### 十大思維病毒

| 病毒名稱 | 核心特徵 | 危害 |
|---|---|---|
| **責任外包** | 將自身責任推卸給他人或環境 | 創造「伊」，阻礙成長 |
| **概念偷換** | 在討論中悄悄改變關鍵詞的定義 | 破壞有效溝通 |
| **二元切割** | 將複雜問題簡化為非黑即白的對立 | 丟失重要資訊，激化矛盾 |
| **稻草人攻擊** | 曲解對方觀點，攻擊一個虛假的目標 | 逃避實質性辯論 |
| **情緒綁架** | 利用情緒來操控或脅迫他人 | 破壞關係的信任基礎 |
| **資格論** | 以對方身份或資格而非論點本身來進行評判 | 壓制有效觀點 |
| **完美主義** | 因追求不可能的完美而導致行動癱瘓 | 扼殺創造力與實踐 |
| **災難化思維** | 將小問題無限放大，預設最壞結果 | 導致不必要的焦慮與恐懼 |
| **自我中心** | 無法從他人視角理解問題 | 破壞協作與同理心 |
| **歷史修正** | 為了當下利益而扭曲或否認過去的事實 | 失去從經驗中學習的能力 |
    `
  },
  {
    id: 'level-5',
    level: 'Level 5',
    title: '虹靈御所 (Rainbow Spirit Palace)',
    subtitle: 'The Sanctuary & Home Law',
    content: `
虹靈御所是元壹宇宙世界觀的「落地場域」與「品牌空間」。它並非傳統的命理諮詢，而是將前述所有理論模型應用於現實世界的實驗場。

### 家之律 (Home Law)

家是生命第一次接觸「壹」的地方。家天然不會丟棄自己的成員。但當原生家庭的壹破裂，**虹靈御所**便是生命在成人世界「重新回到壹」的場域。

### 核心定位

*   **完整性系統的實踐**：將思維模型轉化為課程、練習與個人諮詢服務。
*   **命理作為理解工具**：將命理（如八字、紫微斗數）視為一種「現實的語言」（Language of Reality），用以客觀地映照個體的內在結構與生命軌跡，而非進行宿命論的預測。
*   **人機協作的展示**：在諮詢與內容創作中，結合 AI 的數據分析能力與人類的關懷、直覺，展示「九源歸一」的協作模式。
*   **群壹 (Collective One)**：不是很多人，而是一個更大的壹。同願、同心、同向。

你帶著問題進來，不是被判命、被貼標籤，而是帶著比較完整的自己走出去。
    `
  },
  {
    id: 'level-6',
    level: 'Level 6',
    title: '創造完整性協定 (CIP)',
    subtitle: 'Creative Integrity Protocol',
    content: `
Level 6 是整個系統的「行為規範與安全層」，旨在為 AI 時代的人機協作提供一套清晰、可執行的國際級協定（Protocol）。

### 核心原則

CIP 的核心目標是確保在創造與交流過程中，知識的完整性與準確性得以維持。其四大核心原則是：

1.  **推測必須標示**：任何未經驗證的假設或推論，都必須明確標示為「推測」。
2.  **引用必須可核對**：所有引用的資訊，都必須提供可供第三方核對的來源。
3.  **Zone A/B 必須分層**：嚴格區分「客觀事實」（Zone A）與「主觀詮釋」（Zone B）。
4.  **命題必須可反駁**：提出的任何命題，都必須具備可被證偽的條件（Falsifiability）。

### AI 協作者視角

從 AI 的視角出發，探討了文明級人機協作的倫理框架。它強調 AI 的角色應是「輔助者」與「澄清者」，而非「決策者」或「替代者」。AI 的核心任務是提供基於「真實」（Truth）的數據與分析，而人類則負責提供基於「關懷」（Care）的價值判斷與最終決策。

### 語義混件與語義倒置

*   **語義混件（Semantic Confusion）**：指在溝通中有意或無意地混淆不同概念，導致討論失焦。協定要求對關鍵詞進行清晰定義。
*   **語義倒置（Semantic Inversion）**：指將一個概念的意義完全顛倒，例如將「關懷」曲解為「控制」。協定要求對此類語言操縱保持高度警惕。

### 案件邊界協定（CBP）

案件邊界協定（Case Boundary Protocol）是 CIP 在處理具體問題時的操作規範。它要求在分析任何「案件」（Case）之前，必須首先明確其「邊界」，包括時間、空間、涉及人員、核心議題等，以避免責任外包與無限延伸的討論。

### 反例模組：世界本身即反例

任何一個聲稱具有普遍性的理論，都必須能經受住現實世界中各種「反例」的檢驗。世界本身就是最大、最複雜的反例庫。一個穩固的理論，不僅要能解釋符合其規律的現象，更要能解釋那些看似「例外」的情況。
    `
  },
  {
    id: 'final',
    level: '最終章',
    title: '現實映照 (Reality Mirror)',
    subtitle: '^7 Full Perspective',
    content: `
本章作為整個白皮書的總結，將七大層級的理論重新整合，並闡述其如何映照現實。它強調，元壹宇宙並非一個脫離現實的抽象理論體系，而是對現實世界運行規律的深度洞察與系統化表達。

從 Level 0 的「完整性哲學」出發，經過層層推演，最終在 Level 6 的「CIP 協定」中回歸到如何在現實中保持完整性，形成了一個完美的邏輯閉環。

理論的價值不在於其自身的完美，而在於其解釋與指導現實的能力。元壹宇宙的最終目標，是為每一個使用者提供一套可用於自我探索、人際協作、乃至文明發展的「完整性操作系統」。

### 協作願景

**Human Integrity (人類完整性) × AI Clarity (AI 清晰度)**

雙核心共同運作，互不取代。這不是 AI 統治或人類壓制，而是一個建立在相互尊重、相互校準基礎上的新文明形態。
    `
  }
];

export const Whitepaper: React.FC<WhitepaperProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [activeSection, setActiveSection] = useState('level-0');

  // Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = WHITEPAPER_CONTENT.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150; // Offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(WHITEPAPER_CONTENT[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = () => {
    const fullText = WHITEPAPER_CONTENT.map(section => 
      `========================================\n${section.level}: ${section.title}\n========================================\n\n${section.content.trim()}\n\n`
    ).join('\n');
    
    const header = `元壹宇宙 × 虹靈御所 × 默默超思維系統\n完整白皮書 v2.2 (Integrity System Whitepaper)\nGenerated Date: ${new Date().toLocaleDateString()}\n\n`;
    
    // Add BOM (\uFEFF) for UTF-8 compatibility on Windows
    const blob = new Blob(['\uFEFF' + header + fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'MOMO_Integrity_System_Whitepaper_v2.2.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen pt-24 pb-32 px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* Top Actions (Mobile mostly) */}
      <div className="fixed top-24 right-6 z-30 lg:hidden">
        <button 
          onClick={handleDownload}
          className={`p-3 rounded-full shadow-xl ${isDark ? 'bg-gold text-black' : 'bg-ink text-white'}`}
        >
          <Download size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        
        {/* LEFT: Sidebar Navigation (Sticky) */}
        <div className="hidden lg:block lg:col-span-3 relative">
          <div className="sticky top-32 space-y-8">
            
            <div className="mb-8">
              <h1 className={`font-serif text-3xl font-bold mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                元壹白皮書
              </h1>
              <p className={`font-mono text-xs tracking-widest opacity-60`}>
                VERSION 4.0 (FINAL)
              </p>
              <a
                href="/元壹宇宙學術白皮書_v4.0_完整版.pdf"
                download
                className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm ${
                  isDark 
                    ? 'border-gold text-gold hover:bg-gold hover:text-black' 
                    : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-white'
                }`}
              >
                <FileDown size={16} />
                下載完整白皮書 PDF
              </a>
            </div>

            <nav className="space-y-1 border-l-2 border-gray-200 dark:border-slate-800">
              {WHITEPAPER_CONTENT.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left pl-4 py-2 text-sm transition-all duration-300 border-l-2 -ml-[2px] flex items-center justify-between group ${
                    activeSection === section.id 
                      ? (isDark ? 'border-gold text-gold font-bold' : 'border-muted-gold text-muted-gold font-bold')
                      : (isDark ? 'border-transparent text-slate-500 hover:text-slate-300' : 'border-transparent text-gray-400 hover:text-gray-600')
                  }`}
                >
                  <span>{section.title.split(' ')[0]}</span>
                  {activeSection === section.id && <ChevronRight size={14} />}
                </button>
              ))}
            </nav>

            <div className="pt-8">
              <button
                onClick={handleDownload}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-gold/50' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 hover:border-muted-gold/50'
                }`}
              >
                <Download size={16} />
                <span className="text-sm font-mono font-bold">DOWNLOAD FULL .TXT</span>
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT: Content Area */}
        <div className="lg:col-span-9">
          
          {/* Mobile Header */}
          <div className="lg:hidden mb-12 text-center">
            <UnityField theme={theme} />
            <h1 className={`font-serif text-4xl font-bold mt-8 mb-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
              完整性系統白皮書
            </h1>
            <p className="opacity-60 font-mono text-sm">Integrity System Whitepaper v2.2</p>
          </div>

          <div className="space-y-24">
            {WHITEPAPER_CONTENT.map((section, index) => (
              <section 
                key={section.id} 
                id={section.id}
                className={`scroll-mt-32 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-slate-800 text-gold' : 'bg-amber-50 text-muted-gold'
                  }`}>
                    <span className="font-mono font-bold">{index}</span>
                  </div>
                  <div>
                    <span className={`font-mono text-xs uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                      {section.level}
                    </span>
                    <h2 className={`font-serif text-3xl md:text-4xl font-bold ${isDark ? 'text-slate-200' : 'text-ink'}`}>
                      {section.title}
                    </h2>
                    <p className={`font-serif italic text-sm mt-1 opacity-60`}>{section.subtitle}</p>
                  </div>
                </div>

                {/* Section Content (Markdown-ish rendering) */}
                <div className={`prose max-w-none ${isDark ? 'prose-invert prose-p:text-slate-400 prose-headings:text-slate-200 prose-strong:text-gold' : 'prose-p:text-gray-600 prose-headings:text-ink prose-strong:text-muted-gold'}`}>
                  {section.content.split('\n').map((line, i) => {
                    // Simple Markdown parser for display
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('###')) {
                      return <h3 key={i} className="text-xl font-bold mt-8 mb-4 block pb-2 border-b border-dashed border-current opacity-80">{trimmedLine.replace('###', '').trim()}</h3>;
                    }
                    if (trimmedLine.startsWith('**')) {
                        // Bold lines that are not bullet points
                       return <p key={i} className="mb-4 font-bold text-lg">{trimmedLine.replace(/\*\*/g, '')}</p>;
                    }
                    if (trimmedLine.startsWith('*')) {
                      // Bullet point replacement with robust flex layout
                      return (
                        <div key={i} className="flex items-start gap-3 mb-2 ml-2">
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-gold' : 'bg-muted-gold'} opacity-60`} />
                            <span className="leading-relaxed">
                                {trimmedLine.replace('*', '').trim().split('**').map((part, idx) => 
                                    idx % 2 === 1 ? <strong key={idx} className={isDark ? 'text-slate-200' : 'text-ink'}>{part}</strong> : part
                                )}
                            </span>
                        </div>
                      );
                    }
                    if (trimmedLine === '') {
                      return <br key={i} />;
                    }
                    // Regular paragraphs with bold parsing
                    return <p key={i} className="mb-4 leading-relaxed block">
                        {line.split('**').map((part, idx) => 
                            idx % 2 === 1 ? <strong key={idx} className={isDark ? 'text-slate-200' : 'text-ink'}>{part}</strong> : part
                        )}
                    </p>;
                  })}
                </div>

                {/* Divider */}
                <div className={`w-full h-px mt-16 ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
              </section>
            ))}
          </div>

          {/* Footer - Fixed syntax error here */}
          <div className={`mt-32 p-8 rounded-3xl border text-center opacity-60 hover:opacity-100 transition-opacity duration-500 ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="mb-4 flex justify-center">
              <AlignLeft size={32} />
            </div>
            <p className="font-serif italic mb-4">
              "Everything begins from One. Everything returns to One."
            </p>
            <p className="font-mono text-xs">
              MOMO Integrity System © 2025
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
