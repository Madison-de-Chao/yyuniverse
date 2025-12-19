import React, { useState } from 'react';
import { FileText, ExternalLink, Search } from 'lucide-react';

const References: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterZone, setFilterZone] = useState<'all' | 'A' | 'B'>('all');

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-6 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              文獻與引用｜Evidence Index
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Zone A 證據索引：一句結論 ＋ 可核對來源 ＋ 它不能推出什麼
          </p>
        </div>
      </section>
    </div>
  );
};

export default References;
