'use server';

import { quizData as englishData } from '@/data/questions';
import { physicsQuestions } from '@/data/physics-data';
import { earthScienceQuestions } from '@/data/earth-science-data';

const normalizeArabic = (text: string) => {
  if (!text) return '';
  return text.trim()
    .replace(/[أإآا]/g, 'ا')
    .replace(/[ةه]/g, 'ه')
    .replace(/\s+/g, ' ');
};

function getQuestion(subject: string, index: number) {
  if (subject === 'english') return englishData[index];
  if (subject === 'physics') return physicsQuestions[index];
  if (subject === 'earth-science') return earthScienceQuestions[index];
  return null;
}

export async function submitAnswer(subject: string, index: number, option: string) {
  const question = getQuestion(subject, index);
  if (!question) {
    throw new Error('Question not found');
  }

  let isCorrect = false;

  if (question.type === 'text') {
    isCorrect = normalizeArabic(question.answer).includes(normalizeArabic(option)) && option.length > 2;
  } else {
    isCorrect = option === question.answer;
  }

  return {
    isCorrect,
    correctAnswer: question.answer,
    explanation: question.explanation,
  };
}

export async function revealAnswer(subject: string, index: number) {
  const question = getQuestion(subject, index);
  if (!question) {
    throw new Error('Question not found');
  }

  return {
    correctAnswer: question.answer,
    explanation: question.explanation,
  };
}
