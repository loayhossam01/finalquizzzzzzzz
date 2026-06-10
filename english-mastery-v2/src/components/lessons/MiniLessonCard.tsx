'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight, Lightbulb } from 'lucide-react';
import { Lesson } from '@/data/physics-data';

interface MiniLessonCardProps {
  lesson: Lesson;
  onProceed: () => void;
}

export default function MiniLessonCard({ lesson, onProceed }: MiniLessonCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel p-8 md:p-12 rounded-3xl max-w-3xl w-full mx-auto relative overflow-hidden flex flex-col"
    >
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex items-center justify-between mb-8 border-b border-primary/20 pb-4">
        <h2 className="text-3xl font-heading font-bold text-foreground">{lesson.title}</h2>
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
          <Clock size={16} />
          {lesson.readTime}
        </div>
      </div>
      
      <div className="text-lg leading-relaxed text-foreground/80 mb-10">
        {lesson.content}
      </div>

      <div className="bg-foreground/5 p-6 rounded-2xl mb-10 border border-foreground/10">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-primary">
          <Lightbulb size={24} /> Key Formulas & Tips
        </h3>
        <ul className="space-y-3">
          {lesson.tips.map((tip, idx) => (
            <li key={idx} className="flex items-center gap-3 font-medium">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onProceed}
        className="mt-auto flex items-center justify-center gap-3 w-full px-6 py-5 bg-gradient-to-r from-primary to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
      >
        I'm Ready, Start Quiz <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
}
