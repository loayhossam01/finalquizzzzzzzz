import { Question } from './questions';

export interface Lesson {
  id: string;
  unit: string;
  title: string;
  readTime: string;
  content: string;
  tips: string[];
}

export const physicsLessons: Lesson[] = [];

export const physicsQuestions: Question[] = [];
