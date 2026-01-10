import React from 'react';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`relative z-10 border-t transition-colors duration-300 ${
        isDark
          ? 'bg-void/95 border-gold/20 backdrop-blur-md'
          : 'bg-paper/95 border-ink/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Partner Logos Section */}
        <div className="mb-8">
          <h3
            className={`text-center text-sm font-bold uppercase tracking-wider mb-6 ${
              isDark ? 'text-gold/80' : 'text-muted-gold'
            }`}
          >
            合作夥伴 Partners
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {/* MAISON DE CHAO Logo */}
            <a
              href="https://main.momo-chao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
            >
              <img
                src="/maison-de-chao-logo.png"
                alt="MAISON DE CHAO 超恆創意"
                className="h-24 sm:h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            {/* Rainbow Sanctuary Logo */}
            <a
              href="https://main.momo-chao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-105"
            >
              <img
                src="/rainbow-sanctuary-logo.png"
                alt="Rainbow Sanctuary 虹靈御所"
                className="h-24 sm:h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px w-full mb-8 ${
            isDark ? 'bg-gold/20' : 'bg-ink/10'
          }`}
        ></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p
            className={`text-sm ${
              isDark ? 'text-paper/50' : 'text-void/50'
            }`}
          >
            © {new Date().getFullYear()} 元壹宇宙 YUANYI UNIVERSE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
