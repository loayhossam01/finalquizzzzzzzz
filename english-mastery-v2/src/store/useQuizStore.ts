import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { z } from 'zod';

export type QuizMode = 'all' | 'saved' | 'wrong' | string | null;

// Zod schema for validating stored state against tampering
const StorageSchema = z.object({
  savedQuestions: z.array(z.number()),
  wrongQuestions: z.array(z.number()),
});

interface QuizState {
  savedQuestions: number[];
  wrongQuestions: number[];
  
  isLearningMode: boolean;
  quizMode: QuizMode;
  currentSubject: string | null;
  activeQuestionIndices: number[];
  currentStep: number;
  score: number;
  isFinished: boolean;

  setSubject: (subjectId: string | null) => void;
  startQuiz: (mode: QuizMode, indices: number[]) => void;
  answerQuestion: (realIndex: number, isCorrect: boolean) => void;
  nextQuestion: () => void;
  toggleSavedQuestion: (index: number) => void;
  quitQuiz: () => void;
  setLearningMode: (enabled: boolean) => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      savedQuestions: [],
      wrongQuestions: [],
      
      isLearningMode: false,
      quizMode: null,
      currentSubject: null,
      activeQuestionIndices: [],
      currentStep: 0,
      score: 0,
      isFinished: false,

      setSubject: (subjectId) => {
        set({ currentSubject: subjectId });
      },

      startQuiz: (mode, indices) => {
        set({
          quizMode: mode,
          activeQuestionIndices: indices,
          currentStep: 0,
          score: 0,
          isFinished: indices.length === 0,
        });
      },

      answerQuestion: (realIndex: number, isCorrect: boolean) => {
        const state = get();
        if (state.isFinished || state.quizMode === null) return;

        set((state) => {
          let newWrong = [...state.wrongQuestions];
          if (!isCorrect && !newWrong.includes(realIndex)) {
            newWrong.push(realIndex);
          }

          return {
            score: isCorrect ? state.score + 1 : state.score,
            wrongQuestions: newWrong,
          };
        });
      },

      nextQuestion: () => {
        set((state) => {
          const newStep = state.currentStep + 1;
          return {
            currentStep: newStep,
            isFinished: newStep >= state.activeQuestionIndices.length,
          };
        });
      },

      toggleSavedQuestion: (index: number) => {
        set((state) => {
          const saved = state.savedQuestions.includes(index)
            ? state.savedQuestions.filter(i => i !== index)
            : [...state.savedQuestions, index];
          return { savedQuestions: saved };
        });
      },

      quitQuiz: () => {
        set({
          quizMode: null,
          currentSubject: null,
          activeQuestionIndices: [],
          currentStep: 0,
          score: 0,
          isFinished: false,
          isLearningMode: false,
        });
      },

      setLearningMode: (enabled: boolean) => {
        set({ isLearningMode: enabled });
      }
    }),
    {
      name: 'quiz-storage',
      partialize: (state) => ({ 
        savedQuestions: state.savedQuestions, 
        wrongQuestions: state.wrongQuestions 
      }),
      merge: (persistedState: any, currentState) => {
        // Zod Validation for anti-tampering!
        try {
          const validState = StorageSchema.parse(persistedState);
          return { ...currentState, ...validState };
        } catch (e) {
          console.error("Tampered state detected, resetting persistent pools.", e);
          return currentState;
        }
      }
    }
  )
);
