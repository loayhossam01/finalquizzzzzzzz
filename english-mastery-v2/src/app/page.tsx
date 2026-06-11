import ThemeToggle from '@/components/ThemeToggle';
import QuizCard from '@/components/quiz/QuizCard';
import { quizData as englishData } from '@/data/questions';
import { physicsQuestions } from '@/data/physics-data';
import { earthScienceQuestions } from '@/data/earth-science-data';
import SupplicationBanner from '@/components/SupplicationBanner';

export default function Home() {
  // Strip answers and explanations on the server before sending to client
  // This prevents cheaters from looking at the JavaScript payload
  const safeEnglishQuestions = englishData.map((q, idx) => ({
    ...q,
    originalIndex: idx,
    options: q.options || [],
  }));

  const safePhysicsQuestions = physicsQuestions.map((q, idx) => ({
    ...q,
    originalIndex: idx,
    options: q.options || [],
  }));

  const safeEarthScienceQuestions = earthScienceQuestions.map((q, idx) => ({
    ...q,
    originalIndex: idx,
    options: q.options || [],
  }));

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 pt-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Credits / Prayers text */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs md:text-sm font-medium text-foreground/80 drop-shadow-sm font-heading select-none bg-background/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5">
          لا تنسوا القائمين على هذا العمل من صالح دعائكم 🤍
        </span>
      </div>

      <ThemeToggle />
      
      <SupplicationBanner />
      
      <div className="w-full z-10 flex flex-col items-center">
        {/* Header removed based on user request */}

        <QuizCard 
          safeEnglishQuestions={safeEnglishQuestions} 
          safePhysicsQuestions={safePhysicsQuestions}
          safeEarthScienceQuestions={safeEarthScienceQuestions} 
        />
      </div>
    </main>
  );
}
