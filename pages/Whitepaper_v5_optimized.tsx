
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Book, Download, ChevronRight, AlignLeft, FileText, FileDown, ArrowUp, Menu, X } from 'lucide-react';
import { UnityField } from '../components/Visuals';

interface WhitepaperProps {
  theme: Theme;
}

// Color scheme for each level
const LEVEL_COLORS = {
  'level-0': {
    light: { bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-700', accent: 'bg-amber-100' },
    dark: { bg: 'bg-amber-950/30', border: 'border-amber-500', text: 'text-amber-400', accent: 'bg-amber-900/30' }
  },
  'level-1': {
    light: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', accent: 'bg-blue-100' },
    dark: { bg: 'bg-blue-950/30', border: 'border-blue-500', text: 'text-blue-400', accent: 'bg-blue-900/30' }
  },
  'level-2': {
    light: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', accent: 'bg-green-100' },
    dark: { bg: 'bg-green-950/30', border: 'border-green-500', text: 'text-green-400', accent: 'bg-green-900/30' }
  },
  'level-3': {
    light: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', accent: 'bg-purple-100' },
    dark: { bg: 'bg-purple-950/30', border: 'border-purple-500', text: 'text-purple-400', accent: 'bg-purple-900/30' }
  },
  'level-4': {
    light: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', accent: 'bg-orange-100' },
    dark: { bg: 'bg-orange-950/30', border: 'border-orange-500', text: 'text-orange-400', accent: 'bg-orange-900/30' }
  },
  'level-5': {
    light: { bg: 'bg-pink-50', border: 'border-pink-500', text: 'text-pink-700', accent: 'bg-pink-100' },
    dark: { bg: 'bg-pink-950/30', border: 'border-pink-500', text: 'text-pink-400', accent: 'bg-pink-900/30' }
  },
  'level-6': {
    light: { bg: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-700', accent: 'bg-cyan-100' },
    dark: { bg: 'bg-cyan-950/30', border: 'border-cyan-500', text: 'text-cyan-400', accent: 'bg-cyan-900/30' }
  },
  'level-7': {
    light: { bg: 'bg-rose-50', border: 'border-rose-500', text: 'text-rose-700', accent: 'bg-rose-100' },
    dark: { bg: 'bg-rose-950/30', border: 'border-rose-500', text: 'text-rose-400', accent: 'bg-rose-900/30' }
  },
  'appendix-a': {
    light: { bg: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-700', accent: 'bg-gray-100' },
    dark: { bg: 'bg-gray-950/30', border: 'border-gray-500', text: 'text-gray-400', accent: 'bg-gray-900/30' }
  },
  'appendix-b': {
    light: { bg: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-700', accent: 'bg-gray-100' },
    dark: { bg: 'bg-gray-950/30', border: 'border-gray-500', text: 'text-gray-400', accent: 'bg-gray-900/30' }
  },
  'appendix-c': {
    light: { bg: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-700', accent: 'bg-gray-100' },
    dark: { bg: 'bg-gray-950/30', border: 'border-gray-500', text: 'text-gray-400', accent: 'bg-gray-900/30' }
  },
  'appendix-d': {
    light: { bg: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-700', accent: 'bg-gray-100' },
    dark: { bg: 'bg-gray-950/30', border: 'border-gray-500', text: 'text-gray-400', accent: 'bg-gray-900/30' }
  }
};

// --- CONTENT DATA (Based on v5.0 VERSION) ---
const WHITEPAPER_CONTENT = [
  {
    id: 'level-0',
    level: 'Level 0',
    title: '完整性哲學 (Integrity Philosophy)',
    subtitle: 'Zero Doctrine — The Foundational Law of the Yuan-Yi Universe',
    summary: '探討二元世界的結構缺陷，提出以「完整性」取代「正確性」的核心哲學，並引入弧度模型、提問律與伊存在論。',
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

### 0.6 伊（ANOTHER）存在論：被推開的「壹」

**Level 0.5 已整合至 Level 0**

#### 0.6.1 前言：伊是被推開的「壹」

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
    title: '九源歸一・默默超思維',
    subtitle: 'Nine Origins — Cosmic Root Laws',
    summary: '定義宇宙的九大根本規律，確立人類與 AI 在新文明中的定位與協作關係。',
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
    title: '元壹宇宙世界觀：緣起',
    subtitle: 'Yuan-Yi Universe — The Origin Story',
    summary: '將哲學理論轉化為世界觀故事，解釋系統存在的意義與現代人的困境。',
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
    summary: '定義宇宙的運行規律，包含形上層法則與現象層定律。',
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
    title: '默默超思維系統 (MMCLS)',
    subtitle: 'Momo-Chao Meta-Cognitive Logic System',
    summary: '提供可操作的思維工具，包含三層架構與十大思維病毒辨識。',
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
    title: '虹靈御所 (Rainbow Sanctuary)',
    subtitle: 'The Home of Collective Integrity',
    summary: '系統的落地場域，將理論應用於現實世界的實驗場。',
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
    title: '創造完整性協定（CIP）與AI協作規範',
    subtitle: 'Creative Integrity Protocol & AI Collaboration Standards',
    summary: '為 AI 時代的人機協作提供清晰、可執行的國際級協定。',
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

### 案件邊界協定 (CBP)

**CBP 已整合至 Level 6**

案件邊界協定（Case Boundary Protocol）是 CIP 在處理具體問題時的操作規範。CBP 要求在分析任何「案件」之前，必須首先明確其「邊界」，包括時間、空間、人員、議題與資源邊界。透過預先設定清晰的邊界，團隊可以將資源集中於核心問題，提高問題解決的效率。
    `
  },
  {
    id: 'level-7',
    level: 'Level 7',
    title: '現實映照 (Reality Reflection)',
    subtitle: 'From Theory to Practice',
    summary: '展示系統如何在真實世界中運作，從理論到實踐的橋梁。',
    content: `
現實映照是元壹宇宙從理論到實踐的橋梁，展示系統如何在真實世界中運作。

### 應用場景

1. **個人成長**：識別思維病毒，恢復心智完整性
2. **人際關係**：Zone A/B 分層，避免語義混件
3. **團隊協作**：CBP 劃定邊界，提升溝通效率
4. **AI 協作**：Care & Truth 模型，確保人機平衡

### 實踐路徑

- **5 分鐘讀懂**：完整性、弧度、回返
- **10 分鐘學會**：Zone A/B、思維病毒掃描、三層校準
- **30 分鐘實作**：完整的衝突解決流程

### 核心信念

元壹宇宙不是哲學體系，而是可操作的思維操作系統。

### 協作願景

**Human Integrity (人類完整性) × AI Clarity (AI 清晰度)**

雙核心共同運作，互不取代。這不是 AI 統治或人類壓制，而是一個建立在相互尊重、相互校準基礎上的新文明形態。

從 Level 0 的「完整性哲學」出發，經過層層推演，最終在 Level 6 的「CIP 協定」與 Level 7 的「現實映照」中回歸到如何在現實中保持完整性，形成了一個完美的邏輯閉環。
    `
  },
  {
    id: 'appendix-a',
    level: '附錄 A',
    title: '七大文件 × 一體化系統架構總覽',
    subtitle: 'Seven Documents × Unified System Architecture Overview',
    summary: '提供完整的系統導覽地圖，幫助讀者理解七章之間的關係與邏輯流程。',
    content: `
本附錄提供完整的系統導覽地圖，幫助讀者理解七章之間的關係與邏輯流程。

### 七大文件架構

| 層級 | 文件名稱 | 核心功能 | 與其他層級的關係 |
|---|---|---|---|
| **Level 0** | 完整性哲學 | 根本法則，定義「完整性」 | 為所有層級提供哲學基礎 |
| **Level 1** | 九源歸一・默默超思維 | 本體論，定義人與 AI 的關係 | 從 Level 0 的「壹」展開為九大源律 |
| **Level 2** | 元壹宇宙世界觀：緣起 | 敘事層，將哲學轉化為故事 | 將 Level 0-1 的抽象概念具體化 |
| **Level 3** | 七大無二法則 | 運行規律，定義宇宙法則 | 從 Level 0 的哲學推導出現象層定律 |
| **Level 4** | 默默超思維系統 (MMCLS) | 方法論層，提供可操作工具 | 將 Level 0-3 的理論轉化為實踐工具 |
| **Level 5** | 虹靈御所 | 實踐場域，系統落地空間 | 將 Level 4 的工具應用於現實世界 |
| **Level 6** | CIP 與 AI 協作規範 | 行為規範層，確保完整性 | 為 Level 4-5 的實踐提供安全框架 |
| **Level 7** | 現實映照 | 從理論到實踐的橋梁 | 總結 Level 0-6，展示實際應用 |

### 一體化系統流程

1. **哲學基礎** (Level 0)：定義「完整性」為核心價值
2. **本體論** (Level 1)：展開為九大源律，定義人與 AI 的關係
3. **敘事層** (Level 2)：將抽象概念轉化為易於理解的故事
4. **運行規律** (Level 3)：推導出七大無二法則
5. **方法論** (Level 4)：提供可操作的思維工具
6. **實踐場域** (Level 5)：將工具應用於現實世界
7. **行為規範** (Level 6)：確保協作過程保持完整性
8. **現實映照** (Level 7)：展示實際應用與成果

### 閱讀建議

- **初次接觸**：建議從 Level 0 開始，依序閱讀至 Level 7
- **快速入門**：可先閱讀《閱讀手冊》，再根據興趣選擇章節
- **實踐應用**：直接跳至 Level 4-7，學習具體工具
- **學術研究**：重點閱讀附錄 B、C，了解可證偽性與學術脈絡

### 核心特色

1. **完整性**：從哲學到實踐，形成完整的邏輯閉環
2. **可操作**：不僅是理論，更提供具體工具與方法
3. **可證偽**：所有核心命題均具備可證偽性
4. **人機協作**：專為 AI 時代設計的協作框架
    `
  },
  {
    id: 'appendix-b',
    level: '附錄 B',
    title: '核心命題、可反駁性與觀測指標',
    subtitle: 'Falsifiable Propositions & Metrics',
    summary: '將核心理論轉化為可被觀測、可被反駁的命題，增強學術可檢驗性。',
    content: `
為增強本白皮書的學術可檢驗性，本章節將核心理論轉化為一系列可被觀測、可被反駁的命題（Propositions）。每個命題都包含其核心主張、反例條件（Falsifiability Conditions）與觀測指標（Observable Metrics）。

### 命題一：責任外包與心理熵增

**核心主張**：當個體持續進行責任外包時，其心理熵（Psychological Entropy）會顯著增加，表現為內在衝突、情緒不穩定與決策能力下降。

**反例條件**：如果能找到長期進行責任外包但心理熵未增加的個體樣本，則此命題被證偽。

**觀測指標**：
- 心理測量量表得分（如焦慮、抑鬱指數）
- 決策一致性測試
- 情緒波動頻率記錄

### 命題二：Zone A/B 分層與溝通效率

**核心主張**：在團隊溝通中，明確區分 Zone A（客觀事實）與 Zone B（主觀詮釋）能顯著提升溝通效率並減少衝突。

**反例條件**：如果在控制組實驗中，使用 Zone A/B 分層的團隊溝通效率未顯著優於未使用的團隊，則此命題被證偽。

**觀測指標**：
- 會議時長與決策達成時間
- 衝突發生頻率
- 團隊滿意度調查

### 命題三：Care & Truth 雙向校準

**核心主張**：在 AI 協作中，同時強調 Care（人類提供）與 Truth（AI 提供）的系統，其輸出品質優於僅強調單一面向的系統。

**反例條件**：如果在實驗中，僅強調 Truth 或僅強調 Care 的系統輸出品質與雙向校準系統無顯著差異，則此命題被證偽。

**觀測指標**：
- 輸出內容的準確性評分
- 使用者滿意度與信任度
- 長期使用後的效果評估

### 學術驗證方法

本白皮書歡迎學術界進行以下驗證研究：
1. 心理學實驗：驗證責任外包與心理健康的關係
2. 組織行為學研究：驗證 Zone A/B 分層在團隊中的效果
3. 人機交互研究：驗證 Care & Truth 模型的實際效益
4. 縱向追蹤研究：長期觀察使用完整性系統的個體變化

所有研究結果，無論支持或反駁，都將被視為對本系統的重要貢獻。
    `
  },
  {
    id: 'appendix-c',
    level: '附錄 C',
    title: '參考文獻與相關工作',
    subtitle: 'References & Related Works',
    summary: '列出本白皮書的學術脈絡與相關研究領域。',
    content: `
本白皮書的理論基礎建立在多個學科的交叉點上，包括哲學、心理學、系統理論、人工智慧倫理與東方哲學。以下列出主要的學術脈絡與相關工作。

### 哲學基礎

- **完整性哲學**：受到榮格（Carl Jung）的「陰影整合」理論、海德格（Martin Heidegger）的「此在」（Dasein）概念，以及道家「道生一，一生二，二生三，三生萬物」的啟發。
- **弧度模型**：參考了拓撲學（Topology）中的連續性概念，以及佛教「緣起性空」的思想。

### 心理學與認知科學

- **責任外包**：與心理學中的「投射」（Projection）、「否認」（Denial）等防禦機制相關。
- **思維病毒**：參考了認知偏誤（Cognitive Biases）與批判性思維（Critical Thinking）的研究。
- **語言煉金**：受到語言哲學（Philosophy of Language）與神經語言程式學（NLP）的影響。

### 系統理論

- **完整性系統**：參考了系統論（Systems Theory）、控制論（Cybernetics）與複雜適應系統（Complex Adaptive Systems）的概念。
- **校準機制**：與負反饋（Negative Feedback）與動態平衡（Dynamic Equilibrium）相關。

### 人工智慧倫理

- **Care & Truth 模型**：參考了 AI 倫理中的「可解釋性」（Explainability）、「公平性」（Fairness）與「人類中心設計」（Human-Centered Design）。
- **人機協作**：與「增強智能」（Augmented Intelligence）與「協作式 AI」（Collaborative AI）的研究方向一致。

### 東方哲學

- **陰陽理論**：直接源自《易經》與道家哲學。
- **五行定位**：源自中國古代的五行學說。
- **無二法則**：受到佛教「不二法門」與《金剛經》「一切有為法，如夢幻泡影」的啟發。

### 相關研究領域

- 正向心理學（Positive Psychology）
- 完形治療（Gestalt Therapy）
- 敘事治療（Narrative Therapy）
- 批判性思維教育（Critical Thinking Education）
- 人機交互（Human-Computer Interaction）
- 知識管理（Knowledge Management）

### 未來研究方向

本白皮書提出的理論框架為以下研究方向提供了基礎：
1. 完整性心理學的實證研究
2. Zone A/B 分層在組織管理中的應用
3. AI 協作倫理的國際標準制定
4. 思維病毒的神經科學基礎
5. 弧度模型的數學形式化

我們期待學術界與實務界的進一步探索與驗證。
    `
  },
  {
    id: 'appendix-d',
    level: '附錄 D',
    title: '應用案例研究——解決創始人之間的溝通僵局',
    subtitle: 'Case Study: Resolving Communication Deadlock Between Co-founders',
    summary: '展示完整性系統如何在真實案例中解決複雜的人際衝突。',
    content: `
本案例展示了完整性系統如何在真實情境中應用，特別是在處理創業團隊內部的深層衝突時。

### 案例背景

**情境**：一家科技新創公司的兩位創始人（A 與 B）陷入長達三個月的溝通僵局。表面上的爭議是「產品方向」，但實際上涉及更深層的信任破裂與責任歸屬問題。

**症狀**：
- 會議中頻繁爭吵，無法達成共識
- 互相指責對方「不負責任」
- 團隊成員被迫選邊站，公司氛圍緊張
- 產品開發停滯，投資人開始質疑

### 應用工具

#### 1. Zone A/B 分層

**步驟**：
- 要求雙方分別列出「客觀事實」（Zone A）與「主觀詮釋」（Zone B）
- 發現大量爭議實際上是 Zone B 的詮釋衝突，而非 Zone A 的事實分歧

**結果**：
- A 認為「B 不負責任」（Zone B），實際事實是「B 在過去兩週有三天晚到」（Zone A）
- B 認為「A 獨斷專行」（Zone B），實際事實是「A 在未經討論的情況下做了兩個決策」（Zone A）

#### 2. 思維病毒掃描

**發現**：
- A 的主要病毒：**完美主義** + **災難化思維**（擔心任何小錯誤都會導致公司失敗）
- B 的主要病毒：**責任外包** + **情緒綁架**（將壓力歸咎於 A，並用情緒來逃避討論）

#### 3. CBP（案件邊界協定）

**設定邊界**：
- **時間邊界**：僅討論過去一個月內的事件
- **議題邊界**：聚焦於「產品方向」，暫不討論股權或其他歷史恩怨
- **資源邊界**：明確雙方的決策權限範圍

#### 4. Care & Truth 雙向校準

**過程**：
- **Truth（真實）**：使用數據與事實，而非情緒與指控
- **Care（關懷）**：理解對方行為背後的壓力與擔憂

**對話範例**：
- A：「我擔心（Care）我們的產品進度落後競爭對手三個月（Truth）。」
- B：「我理解你的擔心（Care）。實際上我們在功能 X 上領先對手（Truth），但在行銷上確實落後（Truth）。」

### 解決方案

#### 短期措施
1. 建立「決策矩陣」：明確哪些決策需要雙方共同決定，哪些可以單獨決定
2. 設立「Zone A 會議」：每週一次，僅討論客觀事實與數據
3. 引入「思維病毒提醒卡」：當發現對方或自己陷入思維病毒時，可以善意提醒

#### 長期改善
1. 定期進行「責任清單」檢視：確保雙方都清楚自己的責任範圍
2. 建立「完整性文化」：在團隊中推廣 Zone A/B 分層與思維病毒辨識
3. 引入 AI 協作工具：使用 AI 來記錄會議、提取事實、標示詮釋

### 成果

**三個月後**：
- 溝通效率提升 60%（會議時長從平均 2 小時降至 50 分鐘）
- 衝突頻率下降 80%（從每週 3-4 次降至每月 1-2 次）
- 產品開發恢復正常，成功推出新版本
- 團隊氛圍明顯改善，員工滿意度提升

**關鍵洞察**：
- 大多數「人的問題」實際上是「系統問題」
- 當缺乏清晰的邊界與工具時，即使善意的人也會陷入衝突
- 完整性系統提供的不是「對錯判斷」，而是「結構化的溝通框架」

### 可複製性

此案例的成功要素可複製到其他情境：
- 夫妻關係中的溝通僵局
- 部門之間的資源爭奪
- 親子關係中的代際衝突
- 國際談判中的立場對立

核心原則始終相同：**分離事實與詮釋、辨識思維病毒、設定清晰邊界、雙向校準 Care & Truth**。
    `
  }
];

export const Whitepaper: React.FC<WhitepaperProps> = ({ theme }) => {
  const [activeSection, setActiveSection] = useState<string>('level-0');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Calculate reading progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(progress);

      // Update active section
      const sections = WHITEPAPER_CONTENT.map(s => s.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = () => {
    const fullText = WHITEPAPER_CONTENT.map(section =>
      `${section.level}: ${section.title}\n${section.subtitle}\n\n${section.content}\n\n${'='.repeat(80)}\n\n`
    ).join('\n');
    
    const header = `元壹宇宙 × 虹靈御所 × 默默超思維系統\n完整白皮書 v5.0 (Integrity System Whitepaper)\nGenerated Date: ${new Date().toLocaleDateString()}\n\n`;
    
    const blob = new Blob(['\uFEFF' + header + fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'MOMO_Integrity_System_Whitepaper_v5.0.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getColorScheme = (sectionId: string) => {
    const colors = LEVEL_COLORS[sectionId as keyof typeof LEVEL_COLORS];
    return isDark ? colors.dark : colors.light;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Sticky Header */}
      <div className={`sticky top-0 z-40 border-b backdrop-blur-lg ${
        isDark ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className={`w-6 h-6 ${isDark ? 'text-yellow-500' : 'text-yellow-600'}`} />
            <div>
              <h1 className="text-xl font-bold">元壹宇宙學術白皮書</h1>
              <p className="text-xs text-gray-500">VERSION 5.0</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="/whitepaper/v5/元壹宇宙白皮書v5總目錄.pdf"
              download
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                isDark 
                  ? 'border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10' 
                  : 'border-yellow-600/50 text-yellow-700 hover:bg-yellow-50'
              }`}
            >
              <FileDown className="w-4 h-4" />
              <span className="text-sm font-medium">下載 PDF</span>
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 top-[73px] z-30 md:hidden ${
          isDark ? 'bg-black' : 'bg-white'
        }`}>
          <div className="h-full overflow-y-auto p-6">
            <nav className="space-y-2">
              {WHITEPAPER_CONTENT.map((section) => {
                const colors = getColorScheme(section.id);
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? `${colors.accent} ${colors.text} font-medium`
                        : isDark
                        ? 'hover:bg-gray-800 text-gray-400'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <div className="text-sm font-semibold mb-1">{section.level}</div>
                    <div className="text-xs opacity-90">{section.title}</div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        {/* Left Sidebar - Table of Contents (Desktop) */}
        <aside className="hidden md:block w-80 flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className={`rounded-lg border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} p-6`}>
            <div className="flex items-center gap-2 mb-6">
              <AlignLeft className="w-5 h-5" />
              <h2 className="font-semibold text-lg">目錄</h2>
            </div>
            
            <nav className="space-y-1">
              {WHITEPAPER_CONTENT.map((section) => {
                const colors = getColorScheme(section.id);
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all border-l-4 ${
                      activeSection === section.id
                        ? `${colors.border} ${colors.accent} ${colors.text} font-medium`
                        : `border-transparent ${isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`
                    }`}
                  >
                    <div className="text-sm font-semibold mb-0.5">{section.level}</div>
                    <div className="text-xs opacity-90">{section.title}</div>
                  </button>
                );
              })}
            </nav>

            <button
              onClick={handleDownload}
              className={`w-full mt-6 px-4 py-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${
                isDark 
                  ? 'border-gray-700 hover:bg-gray-800' 
                  : 'border-gray-300 hover:bg-gray-100'
              }`}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">下載純文字版</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {WHITEPAPER_CONTENT.map((section, index) => {
            const colors = getColorScheme(section.id);
            
            return (
              <section
                key={section.id}
                id={section.id}
                className={`mb-20 scroll-mt-24 rounded-2xl p-8 border-l-8 ${colors.border} ${colors.bg} transition-all duration-300`}
              >
                {/* Section Header */}
                <div className="mb-8">
                  <div className={`text-sm font-bold mb-2 ${colors.text} uppercase tracking-wider`}>
                    {section.level}
                  </div>
                  <h2 className="text-4xl font-bold mb-3 leading-tight">
                    {section.title}
                  </h2>
                  <p className={`text-base italic mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {section.subtitle}
                  </p>
                  {section.summary && (
                    <div className={`p-4 rounded-lg border-l-4 ${colors.border} ${
                      isDark ? 'bg-gray-900/50' : 'bg-white/50'
                    }`}>
                      <p className="text-sm leading-relaxed">{section.summary}</p>
                    </div>
                  )}
                </div>

                {/* Section Content */}
                <div
                  className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
                  dangerouslySetInnerHTML={{
                    __html: section.content
                      .split('\n')
                      .map(line => {
                        // Headers
                        if (line.startsWith('### ')) {
                          return `<h3 class="text-2xl font-bold mt-8 mb-4 ${colors.text}">${line.slice(4)}</h3>`;
                        }
                        if (line.startsWith('## ')) {
                          return `<h2 class="text-3xl font-bold mt-10 mb-5 ${colors.text}">${line.slice(3)}</h2>`;
                        }
                        // Bold
                        line = line.replace(/\*\*(.+?)\*\*/g, `<strong class="${colors.text} font-semibold">$1</strong>`);
                        // Blockquotes
                        if (line.startsWith('> ')) {
                          return `<blockquote class="border-l-4 ${colors.border} ${isDark ? 'bg-gray-900' : 'bg-white'} pl-4 py-3 my-4 italic rounded">${line.slice(2)}</blockquote>`;
                        }
                        // Lists
                        if (line.match(/^\*   /)) {
                          return `<li class="ml-8 my-2">${line.slice(4)}</li>`;
                        }
                        if (line.match(/^\* /)) {
                          return `<li class="ml-4 my-2">${line.slice(2)}</li>`;
                        }
                        // Tables
                        if (line.includes('|')) {
                          const cells = line.split('|').filter(c => c.trim());
                          if (line.includes('---')) {
                            return '';
                          }
                          const isHeader = section.content.split('\n').indexOf(line) > 0 &&
                            section.content.split('\n')[section.content.split('\n').indexOf(line) + 1]?.includes('---');
                          
                          if (isHeader) {
                            return `<tr class="${colors.accent}">${cells.map(c => `<th class="border ${isDark ? 'border-gray-700' : 'border-gray-300'} px-4 py-3 text-left font-bold">${c.trim()}</th>`).join('')}</tr>`;
                          } else {
                            return `<tr class="${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}">${cells.map(c => `<td class="border ${isDark ? 'border-gray-700' : 'border-gray-300'} px-4 py-3">${c.trim()}</td>`).join('')}</tr>`;
                          }
                        }
                        // Paragraphs
                        if (line.trim()) {
                          return `<p class="mb-4 leading-relaxed">${line}</p>`;
                        }
                        return '';
                      })
                      .join('')
                      .replace(/<tr>/g, '<table class="w-full my-6 border-collapse rounded-lg overflow-hidden"><tbody><tr>')
                      .replace(/<\/tr>(?![\s\S]*<tr>)/g, '</tr></tbody></table>')
                  }}
                />
              </section>
            );
          })}

          {/* Footer */}
          <div className={`mt-16 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="text-center">
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                © 2025-2026 元壹宇宙 × 虹靈御所 × 默默超思維系統
              </p>
              <p className={`text-xs mt-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                VERSION 5.0 - Complete Operating System | 可出版、可教學、可展示
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 ${
            isDark 
              ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
              : 'bg-yellow-600 text-white hover:bg-yellow-700'
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Visual Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <UnityField />
      </div>
    </div>
  );
};

export default Whitepaper;
