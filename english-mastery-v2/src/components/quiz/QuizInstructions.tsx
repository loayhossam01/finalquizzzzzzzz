'use client';

import { motion } from 'framer-motion';

interface Props {
  onAccept: () => void;
  subject: string;
}

export default function QuizInstructions({ onAccept, subject }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel p-6 md:p-12 rounded-3xl max-w-2xl w-full mx-auto flex flex-col gap-6 text-center border border-primary/20 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner border border-primary/30">
        <span className="text-4xl">💡</span>
      </div>
      
      <h2 className="text-3xl font-heading font-black text-foreground drop-shadow-sm">تعليمات هامة قبل البدء</h2>
      
      {subject === 'earth-science' && (
        <div className="text-foreground/80 text-lg md:text-xl leading-relaxed space-y-5 bg-black/20 p-6 rounded-2xl border border-white/5 text-right" dir="rtl">
          <p>
            أنت الآن في <span className="text-primary font-bold">مرحلة التعلم الأولي</span>؛ لذا نرجو منك الانتباه لما يلي:
          </p>
          <ul className="list-disc list-inside space-y-3 marker:text-primary">
            <li>تأمل <span className="text-primary font-bold">الصور المرفقة</span> جيداً؛ فهي مفتاح أساسي لفهم الكثير من المسائل.</li>
            <li>ركز بدقة في <span className="text-primary font-bold">صياغة السؤال</span>، فقد يأتي سؤال (علل) على هيئة خيارات متعددة، أو العكس.</li>
            <li>خذ وقتك في القراءة واربط بين المفاهيم لتحقيق أقصى استفادة وتثبيت المعلومة.</li>
          </ul>
        </div>
      )}

      {subject === 'english' && (
        <div className="text-foreground/80 text-lg md:text-xl leading-relaxed space-y-5 bg-black/20 p-6 rounded-2xl border border-white/5 text-right" dir="rtl">
          <p>
            أنت الآن في <span className="text-primary font-bold">مرحلة المراجعة والتطبيق</span>. يُنصح بشدة باتباع التسلسل التالي لضمان الفهم:
          </p>
          <ul className="list-decimal list-inside space-y-3 marker:text-primary">
            <li>قم بدراسة <strong>الكتاب المدرسي</strong> أولاً.</li>
            <li>ثم راجع <a href="/documents/Scanned_Documents.pdf" target="_blank" className="text-blue-400 font-bold underline hover:text-blue-300">هذا الملف المرفق (Scanned Documents.pdf)</a> والذي يحتوي على أسئلة الاختبار.</li>
            <li>أخيراً، قم بحل المسائل هنا في المنصة كمرجع وتدريب نهائي للمادة.</li>
          </ul>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onAccept}
        className="glass-button mt-4 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-xl shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_25px_rgba(6,182,212,0.6)] transition-all"
      >
        فهمت ذلك، ابدأ الاختبار
      </motion.button>
    </motion.div>
  );
}
