import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        visualizer({
          open: false, // 不自動打開瀏覽器
          gzipSize: true,
          brotliSize: true,
          filename: 'dist/stats.html',
        }),
      ],
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // 將 React 相關庫分離到單獨的 chunk
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              // 將 lucide-react 圖標庫分離
              'icons': ['lucide-react'],
            },
          },
        },
        // 提高 chunk 大小警告閾值（僅用於開發，生產環境應優化）
        chunkSizeWarningLimit: 600,
      },
    };
});
