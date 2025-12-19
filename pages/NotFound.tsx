
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import { Theme } from '../types';

interface NotFoundProps {
  theme: Theme;
}

export const NotFound: React.FC<NotFoundProps> = ({ theme }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className={`mb-8 ${theme === 'dark' ? 'text-gold' : 'text-muted-gold'}`}>
          <Compass size={120} className="mx-auto mb-4 animate-spin-slow" />
        </div>
        
        <h1 className={`font-serif text-6xl mb-6 font-bold ${
          theme === 'dark' ? 'text-gold' : 'text-ink'
        }`}>
          404
        </h1>
        
        <h2 className={`font-serif text-3xl mb-4 ${
          theme === 'dark' ? 'text-slate-200' : 'text-ink'
        }`}>
          迷路了嗎？
        </h2>
        
        <p className={`mb-8 text-lg ${
          theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
        }`}>
          這個頁面不存在於元壹宇宙中。
        </p>
        
        <Link
          to="/"
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 font-serif text-lg ${
            theme === 'dark'
              ? 'bg-gold text-void hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]'
              : 'bg-muted-gold text-white hover:bg-amber-700 hover:shadow-lg'
          }`}
        >
          <Home size={20} />
          <span>返回首頁</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
