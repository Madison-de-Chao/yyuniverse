/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // 確保這些關鍵類始終被編譯
    'bg-void',
    'bg-paper',
    'bg-black',
    'bg-gray-900',
    'text-void',
    'text-paper',
    'text-gold',
    'border-gold',
    'from-void',
    'to-void',
    'from-paper',
    'to-paper',
    {
      pattern: /bg-(void|paper|gold|muted-gold|ink|black|gray|purple|blue|indigo|green|emerald|amber|slate)(-\d+)?/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /text-(void|paper|gold|muted-gold|ink|white|gray|purple|blue|indigo|green|emerald)(-\d+)?/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /border-(void|paper|gold|muted-gold|ink|purple|blue|indigo)(-\d+)?/,
      variants: ['hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        // 自定義顏色
        'void': '#050508',
        'paper': '#fafafa',
        'gold': '#f59e0b',
        'muted-gold': '#d97706',
        'ink': '#1e293b',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'breathing': 'breathing 5s ease-in-out infinite',
        'reveal-blur': 'revealBlur 1s ease-out forwards',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'pop-in': 'popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathing: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        revealBlur: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        popIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
