'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, Clock } from 'lucide-react';

const changelog = [
  {
    version: '1.1.0',
    date: '2026-06-11',
    changes: [
      'إضافة "وضع التعلم" في جميع المواد لعرض الإجابات فوراً بدون احتساب درجات.',
      'تغيير اسم المنصة إلى "منصة مسار التعليمية" لدعم الشمولية.',
      'إضافة سجل التحديثات (Changelog).'
    ]
  },
  {
    version: '1.0.0',
    date: '2026-06-10',
    changes: [
      'الإطلاق الأولي لمنصة الاختبارات.',
      'إضافة دعم مادتي الفيزياء وعلوم الأرض مع أسئلة وإجابات تفصيلية.'
    ]
  }
];

export default function VersionIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const currentVersion = changelog[0].version;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-background/80 backdrop-blur-md border border-primary/20 text-foreground/70 hover:text-primary px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 transition-colors shadow-sm"
      >
        <Info size={14} />
        الإصدار {currentVersion}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
            dir="rtl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel w-full max-w-lg rounded-2xl p-6 relative max-h-[80vh] flex flex-col"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 left-4 text-foreground/50 hover:text-foreground bg-background/50 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Clock size={24} />
                سجل التحديثات
              </h2>
              
              <div className="overflow-y-auto pl-2 space-y-6">
                {changelog.map((entry, idx) => (
                  <div key={idx} className="relative pr-4 border-r-2 border-primary/30">
                    <div className="absolute -right-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground">الإصدار {entry.version}</h3>
                      <span className="text-sm text-foreground/50">{entry.date}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {entry.changes.map((change, cIdx) => (
                        <li key={cIdx} className="text-sm leading-relaxed">{change}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
