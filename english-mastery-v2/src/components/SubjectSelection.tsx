'use client';

import { motion } from 'framer-motion';
import { BookOpen, Atom } from 'lucide-react';
import { subjectsData } from '@/data/subjects';
import { useQuizStore } from '@/store/useQuizStore';

export default function SubjectSelection() {
  const { setSubject } = useQuizStore();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-12 h-12 mb-4" />;
      case 'Atom': return <Atom className="w-12 h-12 mb-4" />;
      default: return <BookOpen className="w-12 h-12 mb-4" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8"
    >
      {/* Title block removed based on user request */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {subjectsData.map((subject, idx) => (
          <motion.button
            key={subject.id}
            onClick={() => setSubject(subject.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-panel p-6 md:p-8 rounded-3xl flex flex-col items-start text-left border border-white/10 overflow-hidden relative group shadow-xl`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${subject.gradient} rounded-full blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity`} />
            
            <div className={`text-transparent bg-clip-text bg-gradient-to-br ${subject.gradient}`}>
              {getIcon(subject.icon)}
            </div>
            
            <h3 className="text-2xl font-bold font-heading mb-2">{subject.name}</h3>
            <p className="text-foreground/60 leading-relaxed">
              {subject.description}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
