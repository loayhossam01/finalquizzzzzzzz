'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Bookmark, AlertCircle, BookOpen, ArrowLeft } from 'lucide-react';
import { useQuizStore, QuizMode } from '@/store/useQuizStore';
import { SafeQuestion } from './ActiveQuiz';

interface StartScreenProps {
  totalQuestions: number;
  safeQuestions: SafeQuestion[];
}

export default function StartScreen({ totalQuestions, safeQuestions }: StartScreenProps) {
  const { savedQuestions, wrongQuestions, startQuiz, setSubject, isLearningMode, setLearningMode } = useQuizStore();

  const handleStart = (mode: string, indices?: number[]) => {
    let finalIndices: number[] = indices || [];
    if (mode === 'all') finalIndices = Array.from({ length: totalQuestions }, (_, i) => i);
    else if (mode === 'saved') finalIndices = [...savedQuestions];
    else if (mode === 'wrong') finalIndices = [...wrongQuestions];

    startQuiz(mode as QuizMode, finalIndices);
  };

  const units = Array.from(new Set(safeQuestions.map(q => q.unit)));

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel p-6 md:p-12 rounded-3xl max-w-2xl w-full mx-auto flex flex-col gap-6 md:gap-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
      
      <div className="text-center relative">
        <button 
          onClick={() => setSubject(null)}
          className="absolute left-0 top-0 p-2 text-foreground/50 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
          title="عودة للمواد"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-foreground">Select Mode</h2>
        <p className="text-sm md:text-base text-foreground/60">Choose a quiz mode or practice specific units.</p>
      </div>
      
      {/* Learning Mode Toggle */}
      <div className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl border border-primary/10">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-foreground text-sm md:text-base">وضع التعلم</span>
          <span className="text-[10px] md:text-xs text-foreground/60">يعرض الإجابات والشرح مباشرة دون احتساب درجات</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isLearningMode}
            onChange={(e) => setLearningMode(e.target.checked)}
          />
          <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
        </label>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {/* Core Modes */}
        <div>
          <h3 className="font-bold text-base md:text-lg text-primary mb-3 border-b border-primary/20 pb-2">Core Modes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => handleStart('all')}
              className="glass-button w-full px-4 py-3 rounded-2xl font-bold shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] flex flex-col items-center justify-center gap-2 group"
            >
              <PlayCircle className="text-primary" size={28} />
              <span className="text-sm md:text-base text-center">Full Quiz</span>
              <span className="text-[10px] md:text-xs font-normal text-foreground/50">{totalQuestions} Qs</span>
            </button>

            <button
              onClick={() => handleStart('saved')}
              disabled={savedQuestions.length === 0}
              className={`glass-button w-full px-4 py-3 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 ${savedQuestions.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]'}`}
            >
              <Bookmark className="text-success" size={28} />
              <span className="text-sm md:text-base text-center">Saved</span>
              <span className="text-[10px] md:text-xs font-normal text-foreground/50">{savedQuestions.length} Qs</span>
            </button>

            <button
              onClick={() => handleStart('wrong')}
              disabled={wrongQuestions.length === 0}
              className={`glass-button w-full px-4 py-3 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 ${wrongQuestions.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]'}`}
            >
              <AlertCircle className="text-error" size={28} />
              <span className="text-sm md:text-base text-center">Mistakes</span>
              <span className="text-[10px] md:text-xs font-normal text-foreground/50">{wrongQuestions.length} Qs</span>
            </button>
          </div>
        </div>

        {/* Units Mode */}
        <div>
          <h3 className="font-bold text-base md:text-lg text-primary mb-3 border-b border-primary/20 pb-2">Practice by Unit</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {units.map(unit => {
              const unitIndices = safeQuestions.filter(q => q.unit === unit).map(q => q.originalIndex);
              return (
                <button
                  key={unit}
                  onClick={() => handleStart(unit, unitIndices)}
                  className="glass-button w-full px-4 py-3 rounded-xl text-left flex items-center justify-between hover:bg-primary/5 transition-colors group"
                >
                  <span className="flex items-center gap-2 truncate pr-2 text-xs md:text-sm font-medium">
                    <BookOpen size={16} className="text-primary shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" /> 
                    <span className="truncate" title={unit}>{unit}</span>
                  </span>
                  <span className="text-[10px] md:text-xs font-normal text-foreground/50 shrink-0 bg-foreground/5 px-2 py-1 rounded-full">
                    {unitIndices.length} Qs
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
