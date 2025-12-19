
import React, { useState, useRef, useEffect } from 'react';
import { StepCard } from '../components/StepCard';
import { LOGIC_STEPS, LOGIC_TOPICS } from '../constants';
import { RefreshCw, Briefcase, Heart, UserX, BatteryLow, Edit3, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Theme } from '../types';
import { CognitiveCycle } from '../components/Visuals';
import { ResultCard } from '../components/ResultCard';

interface LogicLoopProps {
  theme: Theme;
}

export const LogicLoop: React.FC<LogicLoopProps> = ({ theme }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [inputs, setInputs] = useState<string[]>(new Array(LOGIC_STEPS.length).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<{id: string, title: string, subtitle: string} | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const isDark = theme === 'dark';

  // Auto-scroll to the newest active card
  useEffect(() => {
    if (selectedTopic && !isComplete && !isLoading) {
        // Small timeout to allow DOM to update and animation to start
        setTimeout(() => {
            const activeCard = document.getElementById(`step-card-${currentStepIndex}`);
            if (activeCard) {
                activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 200);
    }
  }, [currentStepIndex, selectedTopic, isComplete, isLoading]);

  const handleTopicSelect = (topicId: string) => {
    const topic = LOGIC_TOPICS.find(t => t.id === topicId);
    if (topic) {
        setIsLoading(true);
        setLoadingText('INITIALIZING COGNITIVE SEQUENCE...');
        
        // Simulate async initialization
        setTimeout(() => {
            setSelectedTopic({
                id: topic.id,
                title: topic.title,
                subtitle: topic.subtitle
            });
            if (topic.question) {
                const newInputs = [...inputs];
                newInputs[0] = `(主題預設: ${topic.question})\n\n`;
                setInputs(newInputs);
            }
            setIsLoading(false);
        }, 800);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleNext = () => {
    if (currentStepIndex < LOGIC_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Simulate processing final result
      setIsLoading(true);
      setLoadingText('CLOSING THE LOOP & GENERATING PROOF...');
      setTimeout(() => {
          setIsComplete(true);
          setIsLoading(false);
      }, 1200);
    }
  };

  const handleReset = () => {
    if (window.confirm("確定要重置所有思考過程嗎？")) {
      setInputs(new Array(LOGIC_STEPS.length).fill(''));
      setCurrentStepIndex(0);
      setIsComplete(false);
      setSelectedTopic(null);
    }
  };

  const getIcon = (iconName: string) => {
      switch(iconName) {
          case 'Briefcase': return <Briefcase size={24} />;
          case 'Heart': return <Heart size={24} />;
          case 'UserX': return <UserX size={24} />;
          case 'BatteryLow': return <BatteryLow size={24} />;
          default: return <Edit3 size={24} />;
      }
  }

  // VIEW: Loading State
  if (isLoading) {
      return (
        <div className={`min-h-screen flex flex-col items-center justify-center pb-20 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
            <div className="relative">
                <div className={`absolute inset-0 blur-xl rounded-full opacity-20 ${isDark ? 'bg-gold' : 'bg-muted-gold'}`}></div>
                <Loader2 size={48} className={`animate-spin relative z-10 ${isDark ? 'text-gold' : 'text-muted-gold'}`} />
            </div>
            <p className={`mt-8 font-mono text-sm tracking-[0.2em] animate-pulse ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
                {loadingText}
            </p>
        </div>
      );
  }

  // VIEW 1: Topic Selection
  if (!selectedTopic) {
      return (
        <div className={`max-w-4xl mx-auto pt-24 pb-12 px-6 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
            <div className="text-center mb-12 animate-fade-in-up">
                <h1 className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                    選擇你的思考戰場
                </h1>
                <p className={`font-mono text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                    Select a Cognitive Domain to initialize the Logic Loop.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {LOGIC_TOPICS.map((topic) => (
                    <button
                        key={topic.id}
                        onClick={() => handleTopicSelect(topic.id)}
                        className={`group p-6 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                            isDark 
                                ? 'bg-slate-900/60 border-slate-700 hover:border-gold/50 hover:bg-slate-800' 
                                : 'bg-white border-gray-200 hover:border-muted-gold hover:shadow-lg'
                        }`}
                    >
                        <div className={`mb-4 ${isDark ? 'text-slate-400 group-hover:text-gold' : 'text-gray-400 group-hover:text-muted-gold'}`}>
                            {getIcon(topic.icon)}
                        </div>
                        <h3 className={`font-serif text-xl font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
                            {topic.title}
                        </h3>
                        <p className={`font-mono text-xs uppercase tracking-wider mb-4 ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                            {topic.subtitle}
                        </p>
                        <p className={`text-sm line-clamp-2 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                            {topic.question || "針對你當下的特定困境進行自由拆解。"}
                        </p>
                        <div className={`mt-6 flex items-center text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity ${
                            isDark ? 'text-gold' : 'text-muted-gold'
                        }`}>
                            Initialize <ArrowRight size={14} className="ml-2" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
      );
  }

  // VIEW 2: Result Card (Completion)
  if (isComplete) {
      return (
          <div className={`min-h-screen pt-24 pb-12 px-4 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
              <div className="text-center mb-12 print:hidden animate-fade-in-up">
                  <h2 className={`font-serif text-3xl font-bold mb-4 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                      循環完成 (Loop Closed)
                  </h2>
                  <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                      你已完成完整的思維建構。這份憑證是你對抗混亂的資產。
                  </p>
                  <button 
                    onClick={handleReset}
                    className={`mt-6 text-sm underline hover:text-cinnabar transition-colors opacity-60 hover:opacity-100`}
                  >
                    開始新的循環
                  </button>
              </div>
              
              <ResultCard 
                theme={theme} 
                inputs={inputs} 
                topic={selectedTopic}
                date={new Date().toLocaleDateString()}
              />
          </div>
      );
  }

  // VIEW 3: The Logic Loop (Active)
  const progress = Math.round(((currentStepIndex + 1) / LOGIC_STEPS.length) * 100);

  return (
    <div className={`max-w-5xl mx-auto pt-24 pb-32 px-4 flex gap-12 ${isDark ? 'text-cyber-text' : 'text-ink'}`}>
      
      {/* Sidebar Visualization (Desktop only) */}
      <div className="hidden lg:block w-80 sticky top-28 h-fit animate-fade-in-up">
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200 shadow-sm'}`}>
          <h3 className={`font-serif text-lg font-bold mb-4 text-center ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
            思維羅盤
          </h3>
          <CognitiveCycle theme={theme} currentStep={currentStepIndex} />
          
          <div className="mt-8 space-y-2">
              {LOGIC_STEPS.map((step, idx) => (
                  <div key={step.id} className={`flex items-center gap-3 text-xs font-mono transition-all duration-300 ${
                      idx === currentStepIndex 
                        ? (isDark ? 'text-gold font-bold scale-105' : 'text-muted-gold font-bold scale-105') 
                        : (idx < currentStepIndex 
                            ? (isDark ? 'text-slate-500 line-through opacity-50' : 'text-gray-400 line-through opacity-50')
                            : (isDark ? 'text-slate-700' : 'text-gray-300'))
                  }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                          idx === currentStepIndex ? (isDark ? 'bg-gold' : 'bg-muted-gold') : (isDark ? 'bg-slate-800' : 'bg-gray-200')
                      }`} />
                      <span>{step.id.toUpperCase()}</span>
                      {idx < currentStepIndex && <CheckCircle2 size={10} />}
                  </div>
              ))}
          </div>

          <div className={`mt-8 pt-6 border-t text-center ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
             <span className={`text-xs font-mono block mb-2 uppercase ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>Current Focus</span>
             <span className={`font-serif font-bold block truncate px-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{selectedTopic.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-2xl mx-auto">
        {/* Sticky Header for Main Content */}
        <div className={`sticky top-16 z-30 pt-4 pb-6 backdrop-blur-xl border-b mb-8 transition-colors ${
            isDark 
                ? 'bg-void/80 border-slate-800/50' 
                : 'bg-paper/80 border-stone-200/50'
        } animate-fade-in-up`}>
            <div className="flex justify-between items-center mb-3 px-1">
                <div>
                    <h1 className={`font-serif text-lg md:text-xl font-bold flex items-center gap-2 ${isDark ? 'text-gold' : 'text-muted-gold'}`}>
                        {selectedTopic.title}
                    </h1>
                    <p className={`font-mono text-[10px] uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                        Step {currentStepIndex + 1} of {LOGIC_STEPS.length}
                    </p>
                </div>
                <button 
                    onClick={handleReset}
                    className={`p-2 rounded-full hover:bg-opacity-10 transition-all ${isDark ? 'text-slate-500 hover:text-cinnabar hover:bg-slate-700' : 'text-gray-400 hover:text-cinnabar hover:bg-gray-200'}`}
                    title="重置"
                >
                    <RefreshCw size={16} />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="relative h-1.5 w-full rounded-full overflow-hidden bg-gray-200 dark:bg-slate-800">
                <div 
                    className={`absolute top-0 left-0 h-full transition-all duration-700 ease-out rounded-full ${
                        isDark ? 'bg-gold shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'bg-muted-gold'
                    }`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>

        <div className="space-y-8 pb-20 min-h-[500px]">
          {LOGIC_STEPS.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isActive={index === currentStepIndex}
              isCompleted={index < currentStepIndex || isComplete}
              userInput={inputs[index]}
              onChange={(val) => handleInputChange(index, val)}
              onNext={handleNext}
              isLast={index === LOGIC_STEPS.length - 1}
              theme={theme}
            />
          ))}
        </div>
        
        <div ref={bottomRef} className="h-12" />
      </div>
    </div>
  );
};

export default LogicLoop;
