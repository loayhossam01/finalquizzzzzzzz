'use server';

import { quizData as englishData } from '@/data/questions';
import { physicsQuestions } from '@/data/physics-data';
import { earthScienceQuestions } from '@/data/earth-science-data';

export async function submitAnswer(subjectId: string, questionIndex: number, selectedOption: string | null = null) {
  let data;
  if (subjectId === 'physics') data = physicsQuestions;
  else if (subjectId === 'earth-science') data = earthScienceQuestions;
  else data = englishData;

  const question = data[questionIndex];
  if (!question) throw new Error("Invalid question index");
  
  const normalizeArabic = (text: string) => {
    return text.trim()
      .replace(/[أإآا]/g, 'ا')
      .replace(/[ةه]/g, 'ه')
      .replace(/\s+/g, ' ');
  };

  // If selectedOption is null, it means it's a text question where the user just wants to see the answer
  const isCorrect = selectedOption === null ? true : normalizeArabic(question.answer).includes(normalizeArabic(selectedOption)) && selectedOption.length > 2;
  
  // Artificial slight delay to simulate server processing (optional, good for UI feel)
  await new Promise(r => setTimeout(r, 300));

  return {
    isCorrect,
    explanation: question.explanation,
    correctAnswer: question.answer // Send back correct answer so UI can highlight it
  };
}
