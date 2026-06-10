'use client';

import { useState, useEffect } from 'react';
import { useQuizStore } from '@/store/useQuizStore';
import StartScreen from './StartScreen';
import ResultScreen from './ResultScreen';
import ActiveQuiz, { SafeQuestion } from './ActiveQuiz';
import SubjectSelection from '../SubjectSelection';
import MiniLessonCard from '../lessons/MiniLessonCard';
import QuizInstructions from './QuizInstructions';
import { physicsLessons } from '@/data/physics-data';

interface QuizCardProps {
  safeEnglishQuestions: SafeQuestion[];
  safePhysicsQuestions: SafeQuestion[];
  safeEarthScienceQuestions: SafeQuestion[];
}

export default function QuizCard({ safeEnglishQuestions, safePhysicsQuestions, safeEarthScienceQuestions }: QuizCardProps) {
  const { quizMode, isFinished, currentSubject } = useQuizStore();
  const [hasReadLesson, setHasReadLesson] = useState(false);
  const [hasAcceptedInstructions, setHasAcceptedInstructions] = useState(false);

  useEffect(() => {
    setHasReadLesson(false);
    setHasAcceptedInstructions(false);
  }, [quizMode]);

  if (currentSubject === null) {
    return <SubjectSelection />;
  }

  let activeData = safeEnglishQuestions;
  if (currentSubject === 'physics') activeData = safePhysicsQuestions;
  if (currentSubject === 'earth-science') activeData = safeEarthScienceQuestions;

  if (quizMode === null) {
    return <StartScreen totalQuestions={activeData.length} safeQuestions={activeData} />;
  }

  if (currentSubject === 'physics' && typeof quizMode === 'string') {
    const activeLesson = physicsLessons.find(l => l.unit === quizMode);
    if (activeLesson && !hasReadLesson) {
      return <MiniLessonCard lesson={activeLesson} onProceed={() => setHasReadLesson(true)} />;
    }
  }

  if (isFinished) {
    return <ResultScreen totalQuestions={activeData.length} />;
  }

  if ((currentSubject === 'earth-science' || currentSubject === 'english') && !hasAcceptedInstructions) {
    return <QuizInstructions onAccept={() => setHasAcceptedInstructions(true)} subject={currentSubject} />;
  }

  return <ActiveQuiz safeQuestions={activeData} />;
}
