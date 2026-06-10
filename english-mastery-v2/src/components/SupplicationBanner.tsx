'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supplications } from '@/data/supplications';
import { useQuizStore } from '@/store/useQuizStore';

export default function SupplicationBanner() {
  const { currentSubject, quizMode, isFinished } = useQuizStore();
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pick a random index on mount
    setIndex(Math.floor(Math.random() * supplications.length));
    setMounted(true);

    // Change every 15 seconds
    const interval = setInterval(() => {
      setIndex(prev => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * supplications.length);
        } while (newIndex === prev);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Hide the banner if the quiz has started and is not finished
  if (!mounted || (currentSubject && quizMode && !isFinished)) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-6 z-50 relative">
      <div className="glass-panel px-6 py-4 rounded-2xl border border-primary/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-background/40 backdrop-blur-md overflow-hidden relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-[30px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/20 rounded-full blur-[30px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center font-heading text-base md:text-lg text-primary font-bold drop-shadow-sm leading-relaxed"
            dir="rtl"
          >
            {supplications[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
