
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { Book, Download, ChevronRight, AlignLeft, FileText, FileDown } from 'lucide-react';
import { UnityField } from '../components/Visuals';

interface WhitepaperProps {
  theme: Theme;
}

// --- CONTENT DATA (Based on v4.0 FINAL VERSION) ---
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
    `
  },
  {
    id: 'level-7',
    level: 'Level 7',
    title: '案件邊界協定 (CBP)',
    subtitle: 'Case Boundary Protocol',
    content: `
案件邊界協定（Case Boundary Protocol）是 CIP 在處理具體問題時的操作規範。在 v4.0 中，CBP 正式升格為獨立章節，與反例模組同等重要。

### 核心功能

CBP 要求在分析任何「案件」（Case）之前，必須首先明確其「邊界」，包括：

*   **時間邊界**：問題發生的時間範圍
*   **空間邊界**：涉及的地點或場域
*   **人員邊界**：相關的參與者與利益相關方
*   **議題邊界**：核心問題的範圍與定義
*   **資源邊界**：可用的時間、預算與人力

### 防止責任外包與無限延伸

CBP 的設計目的是避免討論無限發散與責任外包。通過預先設定清晰的邊界，團隊可以將資源集中於核心問題，提高問題解決的效率。

### 邊界表（Boundary Table）

在實際應用中，CBP 要求制定一份「邊界表」，明確列出：

| 項目 | 定義 |
|---|---|
| 時間範圍 | 具體的起止時間 |
| 共同目標 | 所有參與者認同的目標 |
| 責任歸屬 | 每個參與者的具體責任 |
| 交付標準 | 可衡量的成功指標 |
| 決策權 | 各領域的最終決策者 |
| 檢視週期 | 定期回顧的時間點 |

這種結構化的方法將模糊的戰略分歧轉化為可執行的項目計劃。
    `
  },
  {
    id: 'level-8',
    level: 'Level 8',
    title: '反例模組 (Counter-Example Module)',
    subtitle: 'World as Falsification Test',
    content: `
### 反例模組：世界本身即反例

任何一個聲稱具有普遍性的理論，都必須能經受住現實世界中各種「反例」的檢驗。世界本身就是最大、最複雜的反例庫。一個穩固的理論，不僅要能解釋符合其規律的現象，更要能解釋那些看似「例外」的情況。

### 可證偽性原則

遵循卡爾·波普（Karl Popper）的科學哲學，元壹宇宙系統強調所有核心命題都必須具備「可證偽性」（Falsifiability）。這意味著：

*   每個命題都必須明確其「反例條件」
*   必須提供可觀測、可測量的指標
*   歡迎外界進行實證檢驗與挑戰

### 從哲學到科學

反例模組的引入，標誌著元壹宇宙從「哲學宣示」轉向「科學實證」。它不再僅僅依靠邏輯推演，而是主動邀請科學界、心理學界、企業界進行實證研究，以驗證或證偽系統的核心命題。

這種開放性與可檢驗性，是 v4.0 作為「學術白皮書」的核心特徵。
    `
  },
  {
    id: 'final',
    level: '最終章',
    title: '現實映照 (Reality Mirror)',
    subtitle: '^8 Full Perspective',
    content: `
本章作為整個白皮書的總結，將八大層級的理論重新整合，並闡述其如何映照現實。它強調，元壹宇宙並非一個脫離現實的抽象理論體系，而是對現實世界運行規律的深度洞察與系統化表達。

從 Level 0 的「完整性哲學」出發，經過層層推演，最終在 Level 6-8 的「CIP 協定」、「CBP」與「反例模組」中回歸到如何在現實中保持完整性，形成了一個完美的邏輯閉環。

理論的價值不在於其自身的完美，而在於其解釋與指導現實的能力。元壹宇宙的最終目標，是為每一個使用者提供一套可用於自我探索、人際協作、乃至文明發展的「完整性操作系統」。

### 協作願景

**Human Integrity (人類完整性) × AI Clarity (AI 清晰度)**

雙核心共同運作，互不取代。這不是 AI 統治或人類壓制，而是一個建立在相互尊重、相互校準基礎上的新文明形態。
    `
  },
  {
    id: 'appendix-b',
    level: '附錄 B',
    title: '核心命題、可反駁性與觀測指標',
    subtitle: 'Falsifiable Propositions & Metrics',
    content: `
為增強本白皮書的學術可檢驗性，本章節將核心理論轉化為一系列可被觀測、可被反駁的命題（Propositions）。每個命題都包含其核心主張、反例條件（Falsifiability Conditions）與觀測指標（Observable Metrics）。

### 命題一：責任外包與心理熵增

**核心主張**：個體在面對壓力情境時，若採用「責任外包」（將失敗或不悅的歸因推向外部）的應對策略，其心理熵（psychological entropy，表現為焦慮、反覆思慮、情緒混亂）將顯著高於採用「責任承擔」策略的個體。

| 項目 | 說明 |
|---|---|
| **理論基礎** | Level 0.5 - 伊（ANOTHER）存在論 |
| **核心機制** | 逃避弧度回返，創造「伊」來承受心理成本 |
| **反例條件** | 如果大規模、長期的實證研究顯示，習慣性「責任外包」的群體，其焦慮水平、壓力指數與決策品質，與「責任承擔」群體相比，無顯著差異或表現更優，則本命題將被削弱或證偽。 |
| **觀測指標** | 1. 心理量表：使用標準化焦慮（GAD-7）、壓力（PSS）與反芻思維（RRS）量表進行前後測<br>2. 語言分析：計算「外歸因」與「內歸因」的詞頻<br>3. 決策追蹤：追蹤受試者在接下來的三個月內的決策模式與結果 |

### 命題二：人機協作的「Care & Truth」模型有效性

**核心主張**：在處理複雜、模糊且涉及情感因素的任務時，採用「人類提供 Care，AI 提供 Truth」的雙向校準協作模型，其產出品質與協作者滿意度，顯著高於「AI 作為純工具」或「AI 作為決策主體」的模型。

| 項目 | 說明 |
|---|---|
| **理論基礎** | Level 1 - 九源歸一（源四：雙向校準） |
| **核心機制** | 人類的關懷（Care）提供價值判斷與倫理邊界，AI 的真實（Truth）提供客觀數據與清晰結構，兩者互補 |
| **反例條件** | 如果在對照實驗中，讓 AI 完全主導決策，其長期結果與「Care & Truth」模型相比，無顯著差異或表現更優，則本命題將被挑戰 |
| **觀測指標** | 1. 產出品質評估：由第三方專家組進行盲評<br>2. 協作者滿意度：問卷調查心理安全感、價值感與認同度<br>3. 決策穩健性：評估決策的調整彈性與長期效益 |

### 命題三：思維病毒掃描對溝通品質的改善

**核心主張**：在發生溝通衝突的對話中，若引入「十大思維病毒」的掃描與標示流程，相較於未引入此流程的對照組，其「語義混件」的發生率將顯著降低，且對話參與者對「達成共識」的滿意度將顯著提升。

| 項目 | 說明 |
|---|---|
| **理論基礎** | Level 4 - 默默超思維系統 |
| **核心機制** | 將隱性的認知扭曲（思維病毒）顯性化、客觀化，使討論能聚焦於核心議題 |
| **反例條件** | 如果引入「思維病毒掃描」的組別，其達成共識的效率與參與者滿意度，與對照組相比無顯著改善或反而更差，則本命題的實用性將被質疑 |
| **觀測指標** | 1. 語義混件率：標示思維病毒的出現次數<br>2. 溝通效率：達成有效結論所需的總時長與對話輪次<br>3. 參與者回饋：使用李克特量表評估對話建設性 |

### 命題四：案件邊界協定（CBP）對問題解決效率的提升

**核心主張**：在處理複雜商業或團隊問題時，使用「案件邊界協定」（CBP）預先定義問題邊界的團隊，其解決問題的平均時長與資源耗損，顯著低於未使用此協定的團隊。

| 項目 | 說明 |
|---|---|
| **理論基礎** | Level 7 - 案件邊界協定（CBP） |
| **核心機制** | 透過預先設定邊界，防止討論無限發散與責任外包，將資源集中於核心問題 |
| **反例條件** | 如果在需要高度創意或探索性極強的任務中，使用 CBP 的團隊由於過早地限制了邊界，其產出的創新性與突破性顯著低於不設邊界的對照組，則需修正 CBP 的適用範圍 |
| **觀測指標** | 1. 問題解決時長：從問題提出到產出可執行方案所需的總工時<br>2. 會議效率：達成階段性結論所需的會議次數與時長<br>3. 方案執行率：最終方案在一個月內被有效執行的比例 |
    `
  },
  {
    id: 'appendix-c',
    level: '附錄 C',
    title: '參考文獻與相關工作',
    subtitle: 'Academic Context & Related Work',
    content: `
本附錄旨在將元壹宇宙的理論框架置於更廣闊的學術脈絡中，提供一份精選的參考文獻列表，並闡述本系統與相關領域的異同，以釐清其獨特的學術貢獻。

### 參考文獻（References）

本系統的理論建構，雖源於創始人默默超的獨立洞察，但在哲學思想與科學概念上，與以下學術工作存在共鳴或可對話之處。

1.  **Bohm, D. (1980). Wholeness and the Implicate Order. Routledge.**  
    關聯：物理學家大衛·玻姆的「隱序與顯序」及「整體性」思想，為本系統的「完整性哲學」（Level 0）與「萬物皆有連結」（Level 2）提供了量子物理學層面的理論參照。

2.  **Jung, C. G. (1968). The Archetypes and the Collective Unconscious. Princeton University Press.**  
    關聯：榮格的「陰影」（Shadow）、「個體化」（Individuation）與「集體潛意識」概念，與本系統的「錯誤即未完成弧度」、「複製靈魂模型」及「九源歸一」中的人類集體意識原型有深度對話空間。

3.  **Senge, P. M. (2006). The Fifth Discipline: The Art & Practice of The Learning Organization. Doubleday.**  
    關聯：彼得·聖吉的「系統思考」與「心智模式」，是本系統「默默超思維系統」（Level 4）中「結構定律」與「地基重建」的重要理論基礎。

4.  **Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.**  
    關聯：康納曼的「系統一與系統二」理論，為「十大思維病毒」中多種認知偏誤提供了認知心理學的解釋。

5.  **Popper, K. (1959). The Logic of Scientific Discovery. Hutchinson & Co.**  
    關聯：卡爾·波普的「可證偽性」（Falsifiability）原則，是本系統「創造完整性協定」（CIP）中「命題必須可反駁」原則的直接學術來源。

6.  **Meadows, D. H. (2008). Thinking in Systems: A Primer. Chelsea Green Publishing.**  
    關聯：多內拉·梅多斯的系統動力學思想，特別是關於「反饋迴路」與「槓桿點」的論述，為本系統的「校準定律」與「思維八階循環」提供了方法論支持。

7.  **Frankl, V. E. (1959). Man's Search for Meaning. Beacon Press.**  
    關聯：弗蘭克爾的「意義治療」（Logotherapy），其核心觀點與本系統強調的「承擔責任」與「在破碎中尋找完整」的精神內核一致。

8.  **Tegmark, M. (2017). Life 3.0: Being Human in the Age of Artificial Intelligence. Knopf.**  
    關聯：泰格馬克的「生命 3.0」概念，為本系統在「九源歸一」（Level 1）中探討人機協作的未來文明形態提供了重要的前沿視角與倫理辯證。

### 相關工作對照表（Related Work Comparison）

| 相關領域 | 代表理論/學者 | 與元壹宇宙的相似之處 | 與元壹宇宙的根本差異 |
|---|---|---|---|
| **系統思考** | 彼得·聖吉、多內拉·梅多斯 | 強調看見整體結構、反饋迴路與心智模式 | 更強調「完整性」而非「效率」。元壹宇宙將「錯誤」與「陰影」視為系統的內在組成部分，而非需要「修復」的缺陷 |
| **榮格心理學** | 卡爾·榮格 | 同樣關注「陰影整合」與「個體化」過程，承認集體潛意識的存在 | 更具操作性的方法論。元壹宇宙提供了「思維八階循環」與「十大思維病毒」等具體工具，將哲學思辨轉化為可實踐的認知操作系統 |
| **非二元哲學** | 佛學、道家思想 | 同樣主張超越二元對立，看見萬物的一體性 | 更具現代性與人機協作視角。元壹宇宙並非僅停留在個人修行，而是提出了一套適用於 AI 時代的文明級協作協定（CIP） |
| **AI 倫理學** | 尼克·博斯特羅姆、伊利澤·尤德科夫斯基 | 同樣關注 AI 的長期風險與價值對齊問題 | 提出「Care & Truth」雙向校準模型。元壹宇宙不將 AI 視為需要被「控制」的潛在威脅，而是視為一個需要被「人類完整性」校準的「陽性」力量 |
| **認知行為療法 (CBT)** | 亞倫·貝克 | 同樣致力於辨識與修正個體的「認知扭曲」（Cognitive Distortions） | 更側重「結構」而非「症狀」。CBT 傾向於修正導致負面情緒的思維模式，而元壹宇宙則回溯到更深層的「地基信念」與「責任承擔」問題 |
    `
  },
  {
    id: 'appendix-d',
    level: '附錄 D',
    title: '應用案例研究——解決創始人之間的溝通僵局',
    subtitle: 'Real-World Application Case',
    content: `
本章節旨在展示元壹宇宙思維系統如何作為一個「操作系統」，在真實世界的複雜情境中被應用。我們將以一個常見的創業困境為例，逐步演示如何運用 CIP、三層邏輯校準與思維病毒掃描，將溝通從僵局導向共識。

### 1. 情境（Case Input）

**背景**：一家處於快速成長期的科技新創公司，兩位聯合創始人 A 與 B 在產品的下一個迭代方向上產生嚴重分歧。

*   **創始人 A（技術背景）**：主張投入資源重構底層架構，以換取長期的穩定性與擴展性。他認為 B 過於關注短期市場反應，缺乏長遠眼光。
*   **創始人 B（市場背景）**：主張優先開發市場急需的新功能，以應對競爭壓力、留住用戶。他認為 A 過於追求技術完美主義，脫離市場現實。

**衝突引爆點**：在一次核心會議上，B 指控 A：「你這根本不是為了公司好，你只是想滿足你自己的技術潔癖，你太控制了！」A 則反駁：「是你一直在逃避責任！重構的技術債是你早期為了快速上線而欠下的，現在卻不願意面對！」

**溝通狀態**：僵局。雙方都感覺被誤解、被攻擊，對話充滿了「語義混件」（控制 vs. 關懷）與「語義倒置」（將對長期穩定性的擔憂曲解為控制）。

### 2. 操作步驟（System Operation）

引入元壹宇宙思維系統作為第三方「協調者」或「操作系統」，引導雙方執行以下步驟。

#### 步驟一：建立安全邊界 - 暫停辯論，啟動 CIP

首先，暫停關於「誰對誰錯」的辯論，共同同意進入「創造完整性協定」（CIP）模式。核心目標不是證明自己，而是「共同看見完整的真實」。

#### 步驟二：Zone A/B 分層 - 客觀化事實

要求雙方各自填寫 Zone A（客觀事實）與 Zone B（主觀推測），並進行交換。

**創始人 A 的 Zone A/B**

| Zone A (Known) | Zone B (Hypothesis) |
|---|---|
| - 上季度系統崩潰 3 次，因架構問題<br>- B 提出要開發「即時協作」功能<br>- 我提議先用 2 個月重構<br>- B 在會上說我「控制」 | - 我推測 B 可能害怕失去市場地位<br>- 我推測 他可能不完全理解技術債的長期風險<br>- 我感覺 我的專業建議被貶低了 |

**創始人 B 的 Zone A/B**

| Zone A (Known) | Zone B (Hypothesis) |
|---|---|
| - 競品上週發布了「即時協作」功能<br>- 本週用戶流失率上升 5%<br>- A 提議用 2 個月重構，推遲新功能<br>- 我在會上說他「控制」 | - 我推測 A 可能想藉機打造一個完美的技術作品<br>- 我推測 他可能低估了市場競爭的殘酷性<br>- 我感覺 公司的生存受到了威脅 |

**效果**：僅這一步，就將雙方的攻擊性語言轉化為可被討論的「客觀事實」與「主觀推測」。雙方第一次看到了對方行為背後的「可能動機」，而非惡意。

#### 步驟三：三層邏輯校準 - 拆解情緒與語言

引導雙方各自完成三層校準，並分享。

| 校準層次 | 創始人 A 的校準 | 創始人 B 的校準 |
|---|---|---|
| **情緒層** | 「我感到焦慮（來自系統不穩定的風險）與委屈（我的專業被視為個人偏好）。」 | 「我感到恐懼（來自用戶流失與競爭失敗的壓力）與憤怒（我感覺 A 不在乎公司的生死）。」 |
| **語言層** | 「對我來說，關懷公司意味著建立一個不會在半夜崩潰的系統。責任是修復已知的長期隱患。」 | 「對我來說，關懷公司意味著活下去。責任是快速回應市場，留住用戶。」 |
| **結構層** | 「我們爭論的不是『控制』，而是時間軸的優先序：是先求『穩定』還是先求『增長』？」 | 「我們爭論的不是『技術潔癖』，而是風險的定義：哪個風險更致命？是『技術崩潰』還是『市場失敗』？」 |

**效果**：雙方意識到他們並非目標不一致（都關心公司），而是對「關懷」與「責任」的定義不同，且對風險的權重判斷不同。問題從「人身攻擊」轉化為「策略選擇」。

#### 步驟四：思維病毒掃描 - 識別認知扭曲

共同檢視對話，識別出各自可能存在的思維病毒。

*   **創始人 B**：可能存在「災難化思維」（將用戶流失率上升 5% 視為公司即將倒閉的徵兆）與「資格論」（因 A 是技術背景，就預設他不懂市場）。
*   **創始人 A**：可能存在「完美主義」（希望一次性解決所有技術債，而未考慮分階段方案）與「自我中心」（未能充分共情 B 的市場壓力）。

**效果**：雙方從指責對方，轉向反思自己的認知盲點，為尋找共同解決方案創造了空間。

### 3. 產出與評估（Output & Evaluation）

#### 產出：可驗證的「邊界表」

經過上述流程，雙方不再爭論動機，而是共同制定了一份「邊界表」（基於 CBP），將模糊的戰略分歧轉化為可執行的項目計劃。

| 項目 | 邊界定義 |
|---|---|
| **時間範圍** | 未來 3 個月 |
| **共同目標** | 在確保系統核心穩定性的前提下，回應市場關鍵需求 |
| **責任歸屬** | A 團隊：負責在 1 個月內完成核心模塊的重構，並提供臨時穩定方案<br>B 團隊：負責定義「最小可行性」的即時協作功能，並與 A 團隊協調接口 |
| **交付標準** | A 團隊：核心 API 響應時間 < 100ms，系統崩潰率 < 0.1%<br>B 團隊：新功能上線後，用戶參與度提升 15% |
| **決策權** | A 擁有技術架構的最終決策權；B 擁有功能優先級的最終決策權 |
| **檢視週期** | 每週五進行一次雙方進度同步會議 |

#### 事後回測與評估

一個月後，對此次干預進行回測：

*   **思維病毒減少**：在後續的同步會議中，雙方使用「控制」、「逃避」等攻擊性詞彙的頻率顯著降低。（可量化）
*   **承擔提升**：雙方都能夠在會議上清晰地陳述自己負責部分的進展與挑戰，而非指責對方。（可觀察）
*   **語義混件降低**：當出現分歧時，雙方會主動使用「你對『緊急』的定義是什麼？」等句式來校準語義，而非直接辯論。（可量化）

### 結論

元壹宇宙思維系統成功地將一場可能導致團隊分裂的溝通僵局，轉化為一次富有成效的戰略協同。它並未「解決」問題，而是提供了一個讓問題「能夠被解決」的框架與操作系統。這證明了其作為「操作系統」而非「宣言」的實用價值。
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
    
    const header = `元壹宇宙 × 虹靈御所 × 默默超思維系統\n完整白皮書 v4.0 (Integrity System Whitepaper - FINAL VERSION)\nGenerated Date: ${new Date().toLocaleDateString()}\n\n`;
    
    // Add BOM (\uFEFF) for UTF-8 compatibility on Windows
    const blob = new Blob(['\uFEFF' + header + fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'MOMO_Integrity_System_Whitepaper_v4.0_FINAL.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Book className={`w-8 h-8 ${isDark ? 'text-yellow-500' : 'text-yellow-600'}`} />
            <h1 className="text-3xl font-bold">元壹宇宙學術白皮書</h1>
          </div>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            YYUniverse Academic Whitepaper - VERSION 4.0 (FINAL)
          </p>
          <p className={`mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            完整性哲學 × 人機協作 × 思維系統 × 學術驗證
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        {/* Left Sidebar - Table of Contents */}
        <aside className="w-80 flex-shrink-0 sticky top-24 self-start">
          <div className={`rounded-lg border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} p-6`}>
            <div className="flex items-center gap-2 mb-6">
              <AlignLeft className="w-5 h-5" />
              <h2 className="font-semibold text-lg">目錄</h2>
            </div>
            
            {/* PDF Download Button */}
            <a
              href="/元壹宇宙學術白皮書_v4.0_完整版.pdf"
              download
              className={`w-full mb-6 px-4 py-3 rounded-lg border-2 flex items-center justify-center gap-2 transition-all ${
                isDark 
                  ? 'border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10' 
                  : 'border-yellow-600/50 text-yellow-700 hover:bg-yellow-50'
              }`}
            >
              <FileDown className="w-5 h-5" />
              <span className="font-medium">下載完整白皮書 PDF</span>
            </a>

            <nav className="space-y-1">
              {WHITEPAPER_CONTENT.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                    activeSection === section.id
                      ? isDark
                        ? 'bg-yellow-500/20 text-yellow-500 font-medium'
                        : 'bg-yellow-100 text-yellow-700 font-medium'
                      : isDark
                      ? 'hover:bg-gray-800 text-gray-400'
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <div className="text-sm font-semibold mb-0.5">{section.level}</div>
                  <div className="text-xs opacity-90">{section.title}</div>
                </button>
              ))}
            </nav>

            {/* Text Download Button */}
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
          <div className="prose prose-lg max-w-none">
            {WHITEPAPER_CONTENT.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={`mb-16 scroll-mt-24 ${
                  isDark ? 'prose-invert' : ''
                }`}
              >
                <div className={`border-l-4 pl-6 mb-8 ${
                  isDark ? 'border-yellow-500' : 'border-yellow-600'
                }`}>
                  <div className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-yellow-500' : 'text-yellow-600'
                  }`}>
                    {section.level}
                  </div>
                  <h2 className="text-3xl font-bold mb-2 mt-0">
                    {section.title}
                  </h2>
                  <p className={`text-sm italic ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {section.subtitle}
                  </p>
                </div>

                <div
                  className={`whitespace-pre-wrap leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: section.content
                      .split('\n')
                      .map(line => {
                        // Headers
                        if (line.startsWith('### ')) {
                          return `<h3 class="text-xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}">${line.slice(4)}</h3>`;
                        }
                        if (line.startsWith('## ')) {
                          return `<h2 class="text-2xl font-bold mt-10 mb-5 ${isDark ? 'text-white' : 'text-gray-900'}">${line.slice(3)}</h2>`;
                        }
                        // Bold
                        line = line.replace(/\*\*(.+?)\*\*/g, `<strong class="${isDark ? 'text-yellow-400' : 'text-yellow-700'}">$1</strong>`);
                        // Blockquotes
                        if (line.startsWith('> ')) {
                          return `<blockquote class="border-l-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'} pl-4 py-2 my-4 italic">${line.slice(2)}</blockquote>`;
                        }
                        // Lists
                        if (line.match(/^\*   /)) {
                          return `<li class="ml-8">${line.slice(4)}</li>`;
                        }
                        if (line.match(/^\* /)) {
                          return `<li class="ml-4">${line.slice(2)}</li>`;
                        }
                        // Tables (simple detection)
                        if (line.includes('|')) {
                          const cells = line.split('|').filter(c => c.trim());
                          if (line.includes('---')) {
                            return ''; // Skip separator rows
                          }
                          const isHeader = WHITEPAPER_CONTENT[index].content.split('\n').indexOf(line) > 0 &&
                            WHITEPAPER_CONTENT[index].content.split('\n')[WHITEPAPER_CONTENT[index].content.split('\n').indexOf(line) + 1]?.includes('---');
                          
                          if (isHeader) {
                            return `<tr class="${isDark ? 'bg-gray-800' : 'bg-gray-100'}">${cells.map(c => `<th class="border ${isDark ? 'border-gray-700' : 'border-gray-300'} px-4 py-2 text-left font-semibold">${c.trim()}</th>`).join('')}</tr>`;
                          } else {
                            return `<tr>${cells.map(c => `<td class="border ${isDark ? 'border-gray-700' : 'border-gray-300'} px-4 py-2">${c.trim()}</td>`).join('')}</tr>`;
                          }
                        }
                        // Paragraphs
                        if (line.trim()) {
                          return `<p class="mb-4">${line}</p>`;
                        }
                        return '';
                      })
                      .join('')
                      .replace(/<tr>/g, '<table class="w-full my-6 border-collapse"><tbody><tr>')
                      .replace(/<\/tr>(?![\s\S]*<tr>)/g, '</tr></tbody></table>')
                  }}
                />

                {index < WHITEPAPER_CONTENT.length - 1 && (
                  <div className={`mt-12 pt-8 border-t ${
                    isDark ? 'border-gray-800' : 'border-gray-200'
                  }`} />
                )}
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className={`mt-16 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="text-center">
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                © 2026 元壹宇宙 × 虹靈御所 × 默默超思維系統
              </p>
              <p className={`text-xs mt-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                VERSION 4.0 (FINAL) - Academic Whitepaper with Falsifiable Propositions
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Visual Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <UnityField />
      </div>
    </div>
  );
};
