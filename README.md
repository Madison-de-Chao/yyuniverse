<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 元壹宇宙 (yyuniverse.com)

探索默默超思維系統，一個融合哲學、邏輯與宇宙觀的深度思維框架。透過九大起源、七大法則與真實之鏡，重新認識自我與世界的本質。

View your app in AI Studio: https://ai.studio/apps/drive/1ZDMbwaf75YpjyqIh_l1rqQDsds1jiRb-

## 專案概述

**元壹宇宙**是默默超思維系統的官方網站，提供沉浸式的哲學探索體驗。網站採用科博館等級的視覺設計，支持宇宙模式（暗色主題）與靜心模式（亮色主題）雙主題切換。

### 核心特色

本網站提供完整的思維系統導覽，包含九大起源、七大法則、真實之鏡等核心理念的深入闡述。透過 AI 對話功能，訪客可以與系統進行互動式的哲學探討。網站採用響應式設計，支持桌面與移動設備，並提供豐富的動畫效果與視覺化呈現。

## 技術架構

### 前端框架
- **React 19.2** - 最新的 React 版本
- **TypeScript** - 類型安全的開發體驗
- **Vite 6.4** - 極速的構建工具

### 路由與導航
- **React Router** - 標準化的前端路由
- **代碼分割** - 路由級動態導入，優化加載速度
- **SPA 回退** - Vercel 配置支持深層鏈接

### 樣式系統
- **Tailwind CSS** - 本地化構建，無 CDN 依賴
- **自定義動畫** - 豐富的 keyframes 與過渡效果
- **雙主題支持** - 宇宙模式與靜心模式

### SEO 優化
- **react-helmet-async** - 動態元數據管理
- **sitemap.xml** - 完整的頁面索引
- **robots.txt** - 搜索引擎爬蟲指導
- **Open Graph & Twitter Cards** - 社交分享優化

### 性能優化
- **Bundle 分割** - 主 JS 從 743 KB 降至 215 KB
- **Gzip 壓縮** - 實際傳輸僅 69 KB
- **字體預加載** - 減少渲染阻塞
- **長期緩存** - 靜態資源優化

## Run Locally

**Prerequisites:** Node.js 22.x or higher

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key

3. Run the app:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
```

構建產物將輸出到 `dist/` 目錄。查看 `dist/stats.html` 以分析 bundle 組成。

## Deploy

For a static deployment with minimal ops overhead, deploy to **Vercel**:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** configure `GEMINI_API_KEY` in the platform dashboard
- **SPA routing:** automatically configured via `vercel.json`

本專案已配置 `vercel.json`，支持 SPA 路由回退和靜態資源緩存。推送到 `main` 分支即可自動部署。

## 專案結構

```
yyuniverse/
├── components/          # React 組件
│   ├── Nav.tsx         # 導航選單
│   ├── SEO.tsx         # SEO 元數據組件
│   └── ...
├── pages/              # 頁面組件（16 個頁面）
├── public/             # 靜態資源
│   ├── sitemap.xml     # 網站地圖
│   └── robots.txt      # 爬蟲規則
├── App.tsx             # 主應用組件
├── router.tsx          # 路由配置（代碼分割）
├── seo-config.ts       # SEO 配置
├── vite.config.ts      # Vite 配置（Bundle 分析）
├── tailwind.config.js  # Tailwind 配置
└── vercel.json         # Vercel 部署配置
```

## 優化成果

### Bundle 大小
- **優化前**: 主 JS 743 KB (196 KB gzip)
- **優化後**: 主 JS 215 KB (69 KB gzip)
- **改善**: **減少 64.8%**

### 代碼分割
- **24 個獨立 chunks** - 按需加載
- **React vendor**: 98 KB - 獨立緩存
- **Icons**: 35 KB - 圖標庫分離

### SEO 覆蓋
- **16 個頁面** - 完整元數據
- **sitemap.xml** - 搜索引擎索引
- **Open Graph** - 社交分享優化

## 開發記錄

詳細的開發記錄和修改歷史請參閱 [CHANGELOG.md](CHANGELOG.md)。

---

**Made with ❤️ by [Manus](https://manus.im)**
