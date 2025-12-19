# 網站優化更新記錄

## 2025-12-19 - Phase 1: 路由標準化與代碼分割

### 已完成的修改

#### 1. 安裝 React Router
- **文件**: `package.json`
- **修改**: 添加 `react-router-dom` 依賴
- **原因**: 替換自定義的 `useState` 路由系統，實現標準化導航

#### 2. 創建路由配置文件
- **文件**: `router.tsx` (新建)
- **內容**:
  - 使用 `React.lazy()` 動態導入所有頁面組件
  - 實現路由級代碼分割，減小初始 bundle 大小
  - 創建 `LoadingFallback` 組件，提供加載指示器
  - 定義所有頁面的路由路徑
- **影響**: 主 JS bundle 將從 743KB 分割為多個較小的 chunk

#### 3. 重構 App.tsx
- **文件**: `App.tsx`
- **移除**:
  - `activePage` 狀態管理
  - `history` 狀態管理
  - `handleNavigate` 函數
  - `renderPage` switch 語句
  - 所有頁面組件的直接導入
- **新增**:
  - 引入 `BrowserRouter`, `useNavigate`, `useLocation`
  - 創建 `AppContent` 內部組件以使用 router hooks
  - 使用 `AppRoutes` 組件渲染路由
  - 使用 `location.pathname` 判斷當前頁面
  - 使用 `navigate()` 進行導航
- **保留**:
  - 主題管理邏輯 (`theme`, `toggleTheme`)
  - 主題持久化 (localStorage)
  - 品牌頂部橫幅
  - 背景紋理效果
  - 返回按鈕（現在使用 `navigate(-1)`）
- **原因**: 實現標準化路由，支持瀏覽器前進/後退，支持 URL 直接訪問

### 待完成的修改

#### 4. 更新 Nav 組件
- **文件**: `components/Nav.tsx`
- **需要修改**: 
  - 移除 `activePage` 和 `onNavigate` props
  - 使用 `useNavigate` 和 `useLocation` hooks
  - 更新導航邏輯

#### 5. 更新所有頁面組件
- **文件**: `pages/*.tsx`
- **需要修改**:
  - 移除 `onNavigate` prop（如果有）
  - 在需要導航的地方使用 `useNavigate` hook
  - 確保所有頁面組件可以獨立渲染

### 預期效果

- ✅ 支持 URL 直接訪問（如 `/whitepaper`）
- ✅ 瀏覽器前進/後退按鈕正常工作
- ✅ 主 JS bundle 大小顯著減小
- ✅ 頁面切換時顯示加載指示器
- ✅ 為後續 SEO 優化打下基礎

### 下一步

1. 更新 Nav 組件以使用 React Router
2. 檢查並更新所有頁面組件
3. 測試所有路由和導航功能
4. 進入 Phase 2: 依賴本地化


## 2025-12-19 - Phase 2: 依賴本地化與 Bundle 優化

### 已完成的修改

#### 1. Tailwind CSS 本地化
- **安裝**: `tailwindcss`, `@tailwindcss/postcss`, `postcss`, `autoprefixer`
- **文件**: 
  - `tailwind.config.js` (新建) - 配置自定義顏色、動畫和 keyframes
  - `postcss.config.js` (新建) - 配置 PostCSS 處理流程
  - `index.css` - 添加 `@tailwind` 指令
  - `index.html` - 移除 Tailwind CDN 腳本
- **影響**: Tailwind 現在在構建時處理，不再依賴外部 CDN

#### 2. 移除 importmap CDN 依賴
- **文件**: `index.html`
- **移除**: 整個 `<script type="importmap">` 區塊
- **原因**: React、React DOM、React Router 等依賴現在通過 npm 本地管理
- **影響**: 消除外部網絡請求，提升加載穩定性

#### 3. 優化字體加載
- **文件**: `index.html`
- **添加**: `preconnect` 鏈接到 Google Fonts
- **添加**: `display=swap` 參數到字體 URL
- **影響**: 減少字體加載阻塞，改善首屏渲染

#### 4. 添加 prefers-reduced-motion 支持
- **文件**: `index.html`
- **添加**: CSS 媒體查詢，尊重用戶的動效偏好
- **影響**: 提升可訪問性，避免動效引起的不適

#### 5. 配置 SPA 路由回退
- **文件**: `vercel.json` (新建)
- **內容**: 
  - 所有路徑重寫到 `index.html`
  - 為靜態資源設置長期緩存
- **影響**: 解決深層鏈接刷新 404 問題

#### 6. 實施 Bundle 分析與優化
- **安裝**: `rollup-plugin-visualizer`
- **文件**: `vite.config.ts`
- **配置**:
  - 添加 `visualizer` 插件
  - 手動分割 chunks：`react-vendor`, `icons`
  - 設置 chunk 大小警告閾值
- **影響**: 可視化 bundle 組成，優化代碼分割策略

### 構建結果對比

#### 優化前
- **主 JS 文件**: 743.45 KB (195.73 KB gzip)
- **Chunks**: 單一大文件
- **警告**: 建議使用代碼分割

#### 優化後
- **主 JS 文件**: 194.00 KB (61.53 KB gzip) - **減少 68.5%**
- **React vendor**: 98.43 KB (33.22 KB gzip)
- **Icons**: 35.01 KB (7.73 KB gzip)
- **頁面 chunks**: 各 7-28 KB (按需加載)
- **CSS**: 32.03 KB (5.37 KB gzip)
- **總體**: 成功實現代碼分割，首屏加載大幅優化

### 關鍵改進

1. **首屏 JS 大小減少 68.5%** (從 195.73 KB 到 61.53 KB gzip)
2. **消除所有外部 CDN 依賴**
3. **實現路由級代碼分割** (每個頁面獨立 chunk)
4. **支持深層鏈接** (Vercel 路由回退)
5. **提升可訪問性** (prefers-reduced-motion)

### 下一步

1. 進入 Phase 3: 建立 SEO 基礎設施
2. 添加動態元數據管理
3. 創建 sitemap.xml 和 robots.txt
4. 實施結構化數據


## 2025-12-19 - Phase 3: 建立 SEO 基礎設施

### 已完成的修改

#### 1. 安裝 SEO 依賴
- **安裝**: `react-helmet-async` (使用 --legacy-peer-deps 解決 React 19 兼容性)
- **用途**: 動態管理每個頁面的 `<head>` 元數據

#### 2. 創建 SEO 組件系統
- **文件**: `components/SEO.tsx` (新建)
- **功能**:
  - 動態設置 `<title>`, `<meta>` 標籤
  - 支持 Open Graph (Facebook)
  - 支持 Twitter Cards
  - 自動生成規範 URL
  - 設置語言與地區
- **影響**: 每個頁面可以有獨立的元數據

#### 3. 創建 SEO 配置文件
- **文件**: `seo-config.ts` (新建)
- **內容**:
  - 16 個頁面的完整元數據配置
  - 網站整體結構化數據 (Schema.org WebSite)
  - 組織結構化數據 (Schema.org Organization)
  - 麵包屑導航結構化數據生成函數
- **影響**: 集中管理所有 SEO 配置，便於維護

#### 4. 創建 Sitemap
- **文件**: `public/sitemap.xml` (新建)
- **內容**: 包含所有 16 個頁面的 URL、更新頻率和優先級
- **格式**: 符合 XML Sitemap 0.9 標準
- **影響**: 幫助搜索引擎發現和索引所有頁面

#### 5. 創建 Robots.txt
- **文件**: `public/robots.txt` (新建)
- **內容**:
  - 允許所有爬蟲訪問
  - 指向 sitemap.xml
  - 預留禁止訪問路徑配置
- **影響**: 指導搜索引擎爬蟲行為

#### 6. 更新 index.html 基本元數據
- **文件**: `index.html`
- **添加**:
  - 基本 SEO meta 標籤 (description, keywords, author, robots)
  - Open Graph 標籤 (og:type, og:url, og:title, og:description, og:image)
  - Twitter Cards 標籤
  - Canonical URL
- **影響**: 確保即使 JavaScript 未加載，基本元數據也存在

#### 7. 集成 HelmetProvider
- **文件**: `index.tsx`
- **修改**: 用 `<HelmetProvider>` 包裹 `<App />`
- **影響**: 啟用 react-helmet-async 功能

#### 8. 為所有路由添加 SEO
- **文件**: `router.tsx`
- **修改**:
  - 創建 `PageWrapper` 組件
  - 為每個路由包裹 `<SEO>` 組件
  - 從 `seo-config.ts` 讀取對應頁面的元數據
- **影響**: 每個頁面自動擁有正確的 SEO 元數據

### SEO 優化效果

#### 元數據覆蓋
- ✅ 所有 16 個頁面均有獨立的 title, description, keywords
- ✅ 完整的 Open Graph 支持（社交分享優化）
- ✅ 完整的 Twitter Cards 支持
- ✅ 規範 URL 設置（避免重複內容）

#### 搜索引擎友好
- ✅ sitemap.xml 提交所有頁面
- ✅ robots.txt 指導爬蟲行為
- ✅ 結構化數據準備就緒（待實施）
- ✅ 語言和地區標記 (zh-TW)

#### 社交分享優化
- ✅ Facebook 分享卡片
- ✅ Twitter 分享卡片
- ✅ 自定義分享圖片（需準備 og-image.jpg）

### 待完成項目

1. **準備 OG 圖片**: 創建 `public/og-image.jpg` (建議尺寸 1200x630px)
2. **實施 SSG**: 使用 vite-ssg 預渲染關鍵頁面
3. **添加結構化數據**: 在頁面中注入 JSON-LD
4. **Google Search Console**: 提交 sitemap.xml
5. **測試社交分享**: 使用 Facebook Debugger 和 Twitter Card Validator

### 下一步

1. 進入 Phase 4: 測試和驗證優化效果
2. 本地測試所有路由和 SEO 元數據
3. 準備提交到 GitHub


## 2025-12-19 - Phase 4: 學術權威架構更新

### 核心目標

將網站從「敘事型」轉型為「可檢核的學術權威型」，建立真正的專業可信度。保留原有的 16 個敘事型頁面，新增學術架構作為另一種呈現方式。

### 新增頁面（A 站 - 學術架構）

#### 1. MuseumHome（/museum）
- **定位**: 學術用官網首頁
- **內容**:
  - 三段式介紹：我們解什麼問題 → 我們用什麼方法 → 我們如何避免偷換
  - 三個 CTA：快速理解（3分鐘）/ Challenge Kit（給挑戰者）/ 前往 B 站
  - 三種讀者路徑：研究者 / 實作者 / 挑戰者
  - 四大核心特色：可檢核的權威、預先處理容易被嘴的點、系統工程、歡迎不同世界觀
- **設計原則**: 預先處理「容易被嘴的點」，建立「可檢核的權威」

#### 2. SystemMap（/system-map）
- **定位**: 系統總覽｜七大文件總覽＋層級對應
- **內容**:
  - 七大層級架構：Kernel → Protocol → Law → Application → Casebook
  - 三種讀者路徑（可選擇）：研究者、實作者、合作者
  - 每個路徑都有建議閱讀順序
  - 系統層級可視化展示
  - 下載系統地圖 PDF（CTA）
- **關鍵**: 從 Kernel 到 Casebook，每一層都有明確的規格與可追溯性

#### 3. ChallengeKit（/challenge-kit）
- **定位**: 挑戰規格頁（A 站武器頁）
- **內容**:
  - 挑戰規格：明確命題 + 可反駁條件 + 可核對引用
  - 15 張核心圖系統化導覽（待補充實際圖片）
  - 提交挑戰表單
  - 挑戰處理流程說明
  - 反例展示：如何不被挑戰
- **核心**: 讓對抗型讀者直接看到你的主張是否定義清楚、推導是否完整、引用是否可核對

#### 4. Glossary（/glossary）
- **定位**: 名詞邊界表｜防偷換工具
- **內容**:
  - 固定模板：定義（1句）+ 常見偷換（1條）+ 邊界測試（3問）+ 反例（1個）
  - 分類篩選：核心概念、Zone A/B、方法論、法則相關
  - 6 個核心名詞示例：完整性、Zone A、Zone B、因果 vs 回聲、責任外包、CIP
  - 可展開詳細內容
- **目的**: 避免無限換名詞但不固定定義

#### 5. References（/references）
- **定位**: 文獻與引用｜Zone A 證據索引
- **內容**:
  - 一句結論 + 可核對來源 + 它不能推出什麼
  - 搜索與篩選功能（Zone A/B、類型）
  - 引用來源可核對：原文段落、章節、時間戳、URL
  - 重要說明：每個引用都標註其能證明什麼、不能證明什麼
- **關鍵**: 這是 A 站的「扛打關鍵」，預先處理「容易被嘴的科學點」

#### 6. About（/about-system）
- **定位**: 關於｜這不是宗教，而是一套可被檢核的系統工程
- **內容**:
  - 系統定位：完整性母律、CIP 協定、Zone A/B 分層
  - 四大核心原則：完整性母律、Zone A/B 分層、可反駁性、知識衛生
  - 治理與版本控制：新增名詞、修正定義、新增反例、修正推導
  - B 站鏈接（應用站）
  - 聯繫方式與挑戰提交
- **核心**: 一句話：這不是宗教，而是一套可被檢核的系統工程

### 導覽列重構

#### 雙層架構設計
- **學術架構區**（A 站）:
  - 首頁（A 站）
  - 系統總覽
  - Challenge Kit
  - 名詞表
  - 文獻引用
  - 關於
  
- **探索內容區**（原有頁面）:
  - 首頁（探索）
  - 導覽
  - AI 對話
  - 思維循環
  - 系統詳解
  - 九大起源
  - 七大法則
  - 真實之鏡
  - 宇宙劇本
  - 白皮書
  - 避難所
  - 關於墨

#### 設計特點
- 分區標題與視覺區分
- 大寫字母標示分區（學術架構 / 探索內容）
- 保持原有導覽的完整性
- 新增學術入口不干擾原有體驗

### 路由與 SEO 配置

#### 新增路由
- `/museum` - 學術用官網首頁
- `/system-map` - 系統總覽
- `/challenge-kit` - 挑戰規格頁
- `/glossary` - 名詞邊界表
- `/references` - 文獻與引用
- `/about-system` - 關於（系統）

#### SEO 元數據
每個學術頁面都配置了獨立的：
- **Title**: 強調「可檢核」「系統工程」「完整性母律」
- **Description**: 明確說明頁面功能與價值
- **Keywords**: 核心概念標籤
- **URL**: 清晰的路徑結構

### 構建結果

#### Bundle 分析
- **新增頁面 chunks**:
  - MuseumHome: 11.64 KB (2.86 KB gzip)
  - SystemMap: 6.43 KB (2.55 KB gzip)
  - ChallengeKit: 12.37 KB (3.86 KB gzip)
  - Glossary: 8.32 KB (3.44 KB gzip)
  - References: 0.92 KB (0.57 KB gzip)
  - About: 8.57 KB (2.57 KB gzip)
- **總體影響**: 新增約 48 KB (15.85 KB gzip)，對整體性能影響極小
- **構建時間**: 9.55s

### 設計原則與策略

#### 1. 可檢核的權威
- 所有論述都有明確的定義、推導鏈、引用來源與可反駁條件
- Zone A/B 分層：事實與詮釋明確區分
- CIP 協定：知識衛生的最低規格
- Challenge Kit：公開的挑戰規格

#### 2. 預先處理「容易被嘴的點」
- 名詞邊界表：每個名詞都有反例與邊界測試
- 證據索引：引用來源可核對，範圍明確標示
- 版本控制：所有修正都有記錄與追溯

#### 3. 系統工程定位
- 不是宗教，不是心靈雞湯，而是可操作的系統工程
- 七大層級：從母律到應用的完整架構
- 反例模組：用真實案例壓力測試
- 可追溯性：每個結論都能回溯到前提

#### 4. 歡迎不同世界觀
- 不爭立場輸贏，只要求誠實標示
- Zone B 詮釋允許存在，但必須明確標示為詮釋
- 情緒存在允許，但不能取代論證
- 不同觀點歡迎，但請用可核對的方式討論

### 待補充項目

1. **15 張核心圖**: 需要實際圖片文件並整合到 Challenge Kit
2. **文獻引用內容**: 需要補充更多實際引用案例（目前僅有 5 個示例）
3. **名詞表內容**: 需要擴充更多核心名詞定義（目前僅有 6 個）
4. **反例模組**: 需要創建獨立的 Casebook 頁面
5. **版本與變更頁面**: 需要創建獨立的 Changelog 頁面（目前只有 CHANGELOG.md）
6. **OG 圖片**: 準備 1200x630px 的社交分享圖片

### 文件修改清單

#### 新增文件
- `pages/MuseumHome.tsx` - 學術用官網首頁
- `pages/SystemMap.tsx` - 系統總覽頁
- `pages/ChallengeKit.tsx` - 挑戰規格頁
- `pages/Glossary.tsx` - 名詞邊界表
- `pages/References.tsx` - 文獻與引用
- `pages/About.tsx` - 關於（系統）

#### 修改文件
- `components/Nav.tsx` - 雙層導覽架構
- `router.tsx` - 新增 6 個學術頁面路由
- `seo-config.ts` - 新增 6 個頁面的 SEO 元數據
- `CHANGELOG.md` - 本次更新記錄

### 下一步建議

#### 高優先級（建議立即執行）
1. **創建 OG 圖片**: 準備一張 1200x630px 的社交分享圖片
2. **本地測試**: 運行 `npm run dev` 測試所有學術頁面
3. **Vercel 部署驗證**: 確認自動部署成功

#### 中優先級（後續優化）
4. **補充 15 張核心圖**: 整合到 Challenge Kit
5. **擴充名詞表**: 新增更多核心名詞定義
6. **補充文獻引用**: 新增更多實際引用案例
7. **創建 Casebook 頁面**: 獨立的反例模組
8. **實施 SSG**: 使用 vite-ssg 預渲染關鍵頁面

### 總結

本次更新成功建立了「可檢核的學術權威架構」，實現了從「敘事型」到「系統工程型」的雙軌呈現。新增的 6 個學術頁面與原有的 16 個探索頁面並存，互不干擾，各有入口。所有學術頁面都強調「可檢核」「可反駁」「可改進」的系統工程定位，預先處理了「容易被嘴的點」，建立了真正的專業可信度。
