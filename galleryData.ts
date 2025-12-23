/**
 * 元壹宇宙展示大廳資料模型
 */

export interface GalleryItem {
  id: string | number;
  file: string;
  image: string;  // 用於顯示的圖片路徑
  title: string;
  narration?: string;
  task?: string;
  description?: string;
}

/**
 * 入門版（22 跨頁）- 缺少 02 和 23
 */
export const INTRO_PAGES: GalleryItem[] = [
  {
    id: 1,
    file: '/gallery/page_01.png',
    image: '/gallery/page_01.png',
    title: '封面｜壹核徽章',
    narration: '你走進來之前，世界已經開始回聲。',
    task: '把手放在胸口，感覺一次「回聲」。'
  },
  {
    id: 3,
    file: '/gallery/page_03.png',
    image: '/gallery/page_03.png',
    title: '導覽員出場｜鏡片點亮',
    narration: '我不替你判斷，我只替你照見。',
    task: '今天先不解釋，只觀察。'
  },
  {
    id: 4,
    file: '/gallery/page_04.png',
    image: '/gallery/page_04.png',
    title: '雙模式｜宇宙／靜心',
    narration: '兩條路不是對立，是同一座館的兩種光。',
    task: '選你今天的步伐：快或慢。'
  },
  {
    id: 5,
    file: '/gallery/page_05.png',
    image: '/gallery/page_05.png',
    title: '語彙1｜壹（本體）',
    narration: '壹不是「一個」，是「源頭一致」。',
    task: '指出你人生的一個「源」。'
  },
  {
    id: 6,
    file: '/gallery/page_06.png',
    image: '/gallery/page_06.png',
    title: '語彙2｜伊（反相／承擔者）',
    narration: '伊不是敵人，是你丟出去的那一段。',
    task: '想起一次「我不想面對」的瞬間。'
  },
  {
    id: 7,
    file: '/gallery/page_07.png',
    image: '/gallery/page_07.png',
    title: '語彙3｜弧度（缺口）',
    narration: '缺口不是錯，是未完成的弧段。',
    task: '為缺口取一個名字（不批判）。'
  },
  {
    id: 8,
    file: '/gallery/page_08.png',
    image: '/gallery/page_08.png',
    title: '語彙4｜回返（必然）',
    narration: '回返不是選擇，是結構必然。',
    task: '找一個「一直回來找你」的模式。'
  },
  {
    id: 9,
    file: '/gallery/page_09.png',
    image: '/gallery/page_09.png',
    title: '展廳1｜本無二',
    narration: '看似兩端，其實同源。',
    task: '把你最討厭的特質，追溯回源頭。'
  },
  {
    id: 10,
    file: '/gallery/page_10.png',
    image: '/gallery/page_10.png',
    title: '展廳2｜心無二',
    narration: '你不是孤點，你是網絡節點。',
    task: '想一個你影響過的人（不論好壞）。'
  },
  {
    id: 11,
    file: '/gallery/page_11.png',
    image: '/gallery/page_11.png',
    title: '展廳3｜意無二',
    narration: '意志不是用來扭轉，而是用來補全。',
    task: '今天只做一件「補弧」的小事。'
  },
  {
    id: 12,
    file: '/gallery/page_12.png',
    image: '/gallery/page_12.png',
    title: '展廳4｜互利助',
    narration: '互利不是交易，是結構的穩態。',
    task: '給出一個不求回報的微幫助。'
  },
  {
    id: 13,
    file: '/gallery/page_13.png',
    image: '/gallery/page_13.png',
    title: '展廳5｜果無二',
    narration: '結果不是報應，是回聲的回路。',
    task: '把一個後果倒推回那個選擇。'
  },
  {
    id: 14,
    file: '/gallery/page_14.png',
    image: '/gallery/page_14.png',
    title: '展廳6｜實無二',
    narration: '真實不是坦白，是不再分裂。',
    task: '說出一句你一直沒說的真話（先寫下）。'
  },
  {
    id: 15,
    file: '/gallery/page_15.png',
    image: '/gallery/page_15.png',
    title: '展廳7｜萬歸一',
    narration: '分散不是終點，回收才是。',
    task: '選一段弧，承諾把它帶回來。'
  },
  {
    id: 16,
    file: '/gallery/page_16.png',
    image: '/gallery/page_16.png',
    title: '反例廳｜世界本身即反例',
    narration: '世界會不斷證明你逃不掉回返。',
    task: '列出你重複三次以上的困局。'
  },
  {
    id: 17,
    file: '/gallery/page_17.png',
    image: '/gallery/page_17.png',
    title: '層級廳｜不是對錯，是層級',
    narration: '你看到的不是衝突，是深度。',
    task: '挑一個傳統（佛/道/心理）當你的「上層語言」。'
  },
  {
    id: 18,
    file: '/gallery/page_18.png',
    image: '/gallery/page_18.png',
    title: '鏡室｜你把弧段丟給伊',
    narration: '你以為你丟掉了，其實你只是轉移。',
    task: '承認一次「我把它推給別人」。'
  },
  {
    id: 19,
    file: '/gallery/page_19.png',
    image: '/gallery/page_19.png',
    title: '交還｜伊遞回缺口',
    narration: '伊一直在等你回來拿。',
    task: '寫下：我願意承擔這一段。'
  },
  {
    id: 20,
    file: '/gallery/page_20.png',
    image: '/gallery/page_20.png',
    title: '閉環｜圓完成，回聲停止',
    narration: '完整不是完美，是閉環。',
    task: '做一個「收尾動作」：道歉／整理／完成。'
  },
  {
    id: 21,
    file: '/gallery/page_21.png',
    image: '/gallery/page_21.png',
    title: '回家地圖｜弧度導航圖',
    narration: '你不需要被拯救，你需要復位。',
    task: '把你的「缺口」畫成一段弧。'
  },
  {
    id: 22,
    file: '/gallery/page_22.png',
    image: '/gallery/page_22.png',
    title: '尾聲｜守門者收鏡',
    narration: '我不給答案，我給你回家的方向。',
    task: '選一天，回到這裡重走一次。'
  },
  {
    id: 24,
    file: '/gallery/page_24.png',
    image: '/gallery/page_24.png',
    title: '封底｜壹核微光',
    narration: '當你開始回收，宇宙就開始安靜。',
    task: '合上書前，深呼吸一次。'
  }
];

/**
 * 下鑽版（24 跨頁）
 */
export const DEEP_PAGES: GalleryItem[] = [
  {
    id: '1B',
    file: '/gallery/deep_1B.png',
    image: '/gallery/deep_1B.png',
    title: '1B｜世界觀總覽',
    description: '整座館的平面圖（展廳索引＋深度軸）'
  },
  {
    id: '2B',
    file: '/gallery/deep_2B.png',
    image: '/gallery/deep_2B.png',
    title: '2B｜入口儀式',
    description: '宇宙／靜心兩模式的「使用時機」示意'
  },
  {
    id: '3B',
    file: '/gallery/deep_3B.png',
    image: '/gallery/deep_3B.png',
    title: '3B｜守門者工作原則',
    description: '三不（不評判／不代替／不安慰式敷衍）'
  },
  {
    id: '4B',
    file: '/gallery/deep_4B.png',
    image: '/gallery/deep_4B.png',
    title: '4B｜兩模式誤用反例',
    description: '快慢切換的錯誤用法反例'
  },
  {
    id: '5B',
    file: '/gallery/deep_5B.png',
    image: '/gallery/deep_5B.png',
    title: '5B｜壹的誤解',
    description: '把「壹」當神祕力量 vs 當結構源頭（對照）'
  },
  {
    id: '6B',
    file: '/gallery/deep_6B.png',
    image: '/gallery/deep_6B.png',
    title: '6B｜伊的誤解',
    description: '把伊當怪物 vs 當被遺棄弧段（反例模組）'
  },
  {
    id: '7B',
    file: '/gallery/deep_7B.png',
    image: '/gallery/deep_7B.png',
    title: '7B｜弧度模型',
    description: '圓弧缺口＋推移路徑（結構圖）'
  },
  {
    id: '8B',
    file: '/gallery/deep_8B.png',
    image: '/gallery/deep_8B.png',
    title: '8B｜回返必然',
    description: '回聲回路三種常見型（拖延型／轉移型／補償型）'
  },
  {
    id: '9B',
    file: '/gallery/deep_9B.png',
    image: '/gallery/deep_9B.png',
    title: '9B｜本無二案例',
    description: '同一特質的正反面（生活案例）'
  },
  {
    id: '10B',
    file: '/gallery/deep_10B.png',
    image: '/gallery/deep_10B.png',
    title: '10B｜心無二案例',
    description: '一句話如何外溢成網絡效應（案例）'
  },
  {
    id: '11B',
    file: '/gallery/deep_11B.png',
    image: '/gallery/deep_11B.png',
    title: '11B｜意無二練習',
    description: '3 步補弧流程（辨識→承擔→收尾）'
  },
  {
    id: '12B',
    file: '/gallery/deep_12B.png',
    image: '/gallery/deep_12B.png',
    title: '12B｜互利助邊界',
    description: '互利 vs 討好（反例）'
  },
  {
    id: '13B',
    file: '/gallery/deep_13B.png',
    image: '/gallery/deep_13B.png',
    title: '13B｜果無二圖',
    description: '選擇→回聲→回到源點（流程圖）'
  },
  {
    id: '14B',
    file: '/gallery/deep_14B.png',
    image: '/gallery/deep_14B.png',
    title: '14B｜實無二練習',
    description: '面具／真核（寫作練習頁）'
  },
  {
    id: '15B',
    file: '/gallery/deep_15B.png',
    image: '/gallery/deep_15B.png',
    title: '15B｜萬歸一',
    description: '散點回流的「整合儀式」（可視化）'
  },
  {
    id: '16B',
    file: '/gallery/deep_16B.png',
    image: '/gallery/deep_16B.png',
    title: '16B｜反例廳擴寫',
    description: '世界如何用反例逼你回收（三場景）'
  },
  {
    id: '17B',
    file: '/gallery/deep_17B.png',
    image: '/gallery/deep_17B.png',
    title: '17B｜層級廳主展',
    description: '7 組對照做成「展板牆」完整放進來'
  },
  {
    id: '18B',
    file: '/gallery/deep_18B.png',
    image: '/gallery/deep_18B.png',
    title: '18B｜鏡室擴寫',
    description: '丟給伊的三種常見手法（合理化／拖延／投射）'
  },
  {
    id: '19B',
    file: '/gallery/deep_19B.png',
    image: '/gallery/deep_19B.png',
    title: '19B｜交還擴寫',
    description: '伊如何「不報復、只等待」（情緒張力插畫）'
  },
  {
    id: '20B',
    file: '/gallery/deep_20B.png',
    image: '/gallery/deep_20B.png',
    title: '20B｜閉環擴寫',
    description: '閉環完成後的三種穩態變化（身心行為）'
  },
  {
    id: '21B',
    file: '/gallery/deep_21B.png',
    image: '/gallery/deep_21B.png',
    title: '21B｜回家地圖擴寫',
    description: '讀者可填寫的「弧度地圖模板」'
  },
  {
    id: '22B',
    file: '/gallery/deep_22B.png',
    image: '/gallery/deep_22B.png',
    title: '22B｜尾聲擴寫',
    description: '導覽員的最後一段誓詞（可做品牌語）'
  },
  {
    id: '23B',
    file: '/gallery/deep_23B.png',
    image: '/gallery/deep_23B.png',
    title: '23B｜延伸閱讀廳',
    description: '白皮書／比較研究／工具箱（導覽索引）'
  },
  {
    id: '24B',
    file: '/gallery/deep_24B.png',
    image: '/gallery/deep_24B.png',
    title: '24B｜結語',
    description: '下一次回返會來得更溫柔（收束插畫）'
  }
];

/**
 * 風格定錨（3 張）
 */
export const STYLE_ANCHORS: GalleryItem[] = [
  {
    id: 1,
    file: '/gallery/style_01.png',
    image: '/gallery/style_01.png',
    title: '風格定錨01｜入口星門',
    description: '科博館風格的入口視覺，建立整體氛圍基調'
  },
  {
    id: 2,
    file: '/gallery/style_02.png',
    image: '/gallery/style_02.png',
    title: '風格定錨02｜伊出場',
    description: '承擔者的視覺呈現，定義角色形象'
  },
  {
    id: 3,
    file: '/gallery/style_03.png',
    image: '/gallery/style_03.png',
    title: '風格定錨03｜閉環完成',
    description: '回返完成的視覺象徵，傳達系統核心'
  }
];
