
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToMOMO } from '../services/gemini';
import { ChatMessage, Theme } from '../types';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface AIChatProps {
  theme: Theme;
}

export const AIChat: React.FC<AIChatProps> = ({ theme }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: '我是 MOMO AI (Integrity Mode)。\n\n我不是來討好你的，我是來協助你對焦真實的。\n\n請告訴我你現在遇到的困境，我會用「三層校準」幫你拆解。' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const isDark = theme === 'dark';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    // Add user message
    const newMessages = [...messages, { role: 'user' as const, text: userText }];
    setMessages(newMessages);

    // Get AI response
    const responseText = await sendMessageToMOMO(newMessages, userText);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`flex flex-col h-[calc(100vh-4rem)] md:h-screen pt-20 pb-24 md:pb-4 max-w-4xl mx-auto px-2 md:px-6 ${
      isDark ? 'text-cyber-text' : 'text-ink'
    }`}>
      <div className={`flex items-center gap-3 mb-4 px-4 border-b pb-4 ${
        isDark ? 'border-slate-800' : 'border-gray-200'
      }`}>
        <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
        <h2 className={`font-serif font-bold ${isDark ? 'text-slate-200' : 'text-ink'}`}>
          誠實人格協作中
        </h2>
        <span className={`text-xs font-mono ml-auto border px-2 py-1 rounded ${
          isDark ? 'text-slate-500 border-slate-800' : 'text-gray-400 border-gray-200'
        }`}>
          Protocol: TRUTH > CARE
        </span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-6 px-2 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === 'model' 
                ? (isDark ? 'bg-blue-900/50 text-blue-400 border border-blue-800' : 'bg-blue-100 text-blue-700 border border-blue-200')
                : (isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600')
            }`}>
              {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
            </div>
            
            <div className={`max-w-[85%] rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap shadow-md ${
              msg.role === 'user' 
                ? (isDark ? 'bg-slate-800 text-slate-200' : 'bg-gray-800 text-white')
                : (isDark ? 'bg-slate-900/80 border border-slate-800 text-cyber-text' : 'bg-white border border-gray-200 text-ink')
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-4">
             <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                isDark ? 'bg-blue-900/50 text-blue-400 border-blue-800' : 'bg-blue-100 text-blue-700 border-blue-200'
             }`}>
              <Bot size={18} />
            </div>
            <div className={`border p-4 rounded-lg flex items-center gap-2 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-gray-200 shadow-md'
            }`}>
              <Loader2 size={16} className={`animate-spin ${isDark ? 'text-gold' : 'text-muted-gold'}`} />
              <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                正在進行結構拆解...
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="mt-4 relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="輸入你的情境（例如：我覺得老闆都在針對我...）"
          className={`w-full border rounded-xl pl-4 pr-14 py-4 text-sm focus:outline-none focus:ring-1 resize-none shadow-xl ${
            isDark 
              ? 'bg-slate-900 border-slate-700 text-slate-200 focus:border-gold/50 focus:ring-gold/20' 
              : 'bg-white border-gray-200 text-ink focus:border-muted-gold focus:ring-muted-gold/30'
          }`}
          rows={3}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className={`absolute right-3 bottom-3 p-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all ${
            isDark 
              ? 'bg-gold/10 text-gold hover:bg-gold/20' 
              : 'bg-muted-gold/10 text-muted-gold hover:bg-muted-gold/20'
          }`}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
