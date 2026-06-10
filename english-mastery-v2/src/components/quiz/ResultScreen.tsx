'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Home } from 'lucide-react';
import { useQuizStore, QuizMode } from '@/store/useQuizStore';

interface ResultScreenProps {
  totalQuestions: number;
}

export default function ResultScreen({ totalQuestions }: ResultScreenProps) {
  const { score, activeQuestionIndices, quizMode, savedQuestions, wrongQuestions, startQuiz, quitQuiz } = useQuizStore();
  const accuracy = Math.round((score / activeQuestionIndices.length) * 100) || 0;

  const handleRetry = () => {
    let indices: number[] = [];
    if (quizMode === 'all') indices = Array.from({ length: totalQuestions }, (_, i) => i);
    else if (quizMode === 'saved') indices = [...savedQuestions];
    else if (quizMode === 'wrong') indices = [...wrongQuestions];

    startQuiz(quizMode, indices);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel p-6 md:p-12 rounded-3xl max-w-2xl w-full mx-auto flex flex-col items-center text-center gap-6 md:gap-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">Quiz Complete!</h2>
      
      <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-foreground/10" />
          <motion.circle 
            cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" 
            className="text-primary drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            strokeDasharray={`${2 * Math.PI * 45}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - accuracy / 100) }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-bold font-heading">{accuracy}%</span>
          <span className="text-sm text-foreground/70 uppercase tracking-widest mt-1">Accuracy</span>
        </div>
      </div>
      
      <p className="text-xl mb-8 text-foreground/80">You got <strong className="text-primary">{score}</strong> out of <strong className="text-primary">{activeQuestionIndices.length}</strong> questions right.</p>
      
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRetry}
          className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-shadow"
        >
          <RotateCcw size={20} />
          Try Again
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={quitQuiz}
          className="flex items-center gap-2 px-8 py-4 glass-button rounded-full font-bold text-lg"
        >
          <Home size={20} />
          Home
        </motion.button>
      </div>
    </motion.div>
  );
}
