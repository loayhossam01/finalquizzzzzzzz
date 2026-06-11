'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, Bookmark, BookmarkCheck, Home, Loader2, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useQuizStore } from '@/store/useQuizStore';
import Image from 'next/image';
import { submitAnswer, revealAnswer } from '@/app/actions/quiz';

export interface QuizQuestion {
  originalIndex: number;
  type?: 'multiple-choice' | 'text' | 'number';
  question: string;
  imageUrl?: string;
  options: string[];
  unit?: string;
  answer?: string;
  explanation?: string;
}

interface ActiveQuizProps {
  safeQuestions: QuizQuestion[];
}

export default function ActiveQuiz({ safeQuestions }: ActiveQuizProps) {
  const { 
    activeQuestionIndices, 
    currentStep, 
    savedQuestions,
    toggleSavedQuestion,
    quitQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    currentSubject,
    isLearningMode
  } = useQuizStore();

  const realIndex = activeQuestionIndices[currentStep];
  // Find the safe question based on its original index
  const question = safeQuestions.find(q => q.originalIndex === realIndex);
  
  const progress = (currentStep / activeQuestionIndices.length) * 100;
  const isSaved = savedQuestions.includes(realIndex);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [textInput, setTextInput] = useState('');
  
  // Reset image view when question changes
  useEffect(() => {
    setShowImage(false);
    setIsImageZoomed(false);
    setSelectedOption(null);
    setTextInput('');
    setServerExplanation(null);
    setServerCorrectAnswer(null);
  }, [realIndex]);
  
  // Auto-reveal for learning mode
  useEffect(() => {
    if (isLearningMode && currentSubject && question) {
      if (question.imageUrl && currentSubject === 'earth-science') {
        setShowImage(true);
      }
      
      const fetchReveal = async () => {
        try {
          const result = await revealAnswer(currentSubject, realIndex);
          setServerCorrectAnswer(result.correctAnswer);
          setServerExplanation(result.explanation);
          setSelectedOption("LEARNING_MODE_REVEALED");
        } catch (error) {
          console.error("Error auto-revealing:", error);
        }
      };
      
      fetchReveal();
    }
  }, [realIndex, isLearningMode, currentSubject, question]);
  
  // State from response
  const [serverExplanation, setServerExplanation] = useState<string | null>(null);
  const [serverCorrectAnswer, setServerCorrectAnswer] = useState<string | null>(null);

  if (!question) return null; // Defensive check

  const handleSelect = async (option: string) => {
    if (selectedOption || isLoading) return;
    
    setSelectedOption(option);
    setIsLoading(true);

    try {
      if (!currentSubject) return;
      const result = await submitAnswer(currentSubject, realIndex, option);

      setServerCorrectAnswer(result.correctAnswer);
      setServerExplanation(result.explanation);
      
      // Update global store
      answerQuestion(realIndex, result.isCorrect);
    } catch (error) {
      console.error("Error submitting answer:", error);
      setSelectedOption(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowAnswer = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      if (!currentSubject) return;
      const result = await revealAnswer(currentSubject, realIndex);
      
      setServerExplanation(result.explanation);
      setServerCorrectAnswer(result.correctAnswer);
      answerQuestion(realIndex, true);
      setSelectedOption("TEXT_ANSWER_REVEALED");
    } catch (error) {
      console.error("Error revealing answer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setServerExplanation(null);
    setServerCorrectAnswer(null);
    nextQuestion();
  };

  const showStatus = selectedOption !== null && !isLoading;

  const renderFormattedExplanation = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      // Split by **text** or chunks containing English characters
      const parts = line.split(/(\*\*.*?\*\*|[a-zA-Z][a-zA-Z0-9\s-]*[a-zA-Z0-9]|[a-zA-Z])/g);
      
      return (
        <div key={i} className={`mb-3 flex flex-wrap items-center gap-1 leading-loose ${i === 0 ? 'text-xl font-bold text-foreground' : 'text-lg text-foreground/80'}`}>
          {parts.map((part, j) => {
            if (!part) return null;
            if (part.startsWith('**') && part.endsWith('**')) {
              return <span key={j} className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 shadow-sm">{part.slice(2, -2)}</span>;
            } else if (/[A-Za-z]/.test(part)) {
              return <span key={j} className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md inline-block border border-primary/20 shadow-sm" dir="ltr">{part}</span>;
            }
            return <span key={j} className="leading-loose">{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left Column: Question */}
      <motion.div 
        key={realIndex}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-panel p-6 md:p-10 rounded-3xl flex-1 flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-foreground/10">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: `${Math.max(0, ((currentStep - 1) / activeQuestionIndices.length) * 100)}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="flex justify-between items-center mb-8 mt-2">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">
            {isLearningMode ? `وضع التعلم: ${currentStep + 1} / ${activeQuestionIndices.length}` : `Question ${currentStep + 1} of ${activeQuestionIndices.length}`}
          </span>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => toggleSavedQuestion(realIndex)}
              className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
              title={isSaved ? "Remove from saved" : "Save question"}
            >
              {isSaved ? <BookmarkCheck className="text-success fill-success/20" size={24} /> : <Bookmark className="text-foreground/50 hover:text-foreground" size={24} />}
            </button>
            <button 
              onClick={quitQuiz}
              className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground/50 hover:text-foreground"
              title="Quit to menu"
            >
              <Home size={24} />
            </button>
          </div>
        </div>

        <div className="flex items-start justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold leading-relaxed text-foreground">
            {question.question}
          </h2>
          {question.imageUrl && (
            <button
              onClick={() => setShowImage(!showImage)}
              className="ml-4 p-2 shrink-0 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              title="View image"
            >
              <ImageIcon size={24} />
            </button>
          )}
        </div>

          <AnimatePresence>
            {showImage && question.imageUrl && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 rounded-2xl overflow-hidden shadow-lg border border-primary/20 bg-black/40"
              >
                <div 
                  className="relative w-full aspect-video cursor-zoom-in group"
                  onClick={() => setIsImageZoomed(true)}
                >
                  <Image 
                    src={question.imageUrl} 
                    alt="صورة توضيحية للسؤال" 
                    fill
                    quality={100}
                    unoptimized={true}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-opacity duration-300 shadow-xl">
                      اضغط للتكبير
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        <div className="flex flex-col gap-3 md:gap-4 mt-auto relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-50 bg-background/50 backdrop-blur-sm rounded-2xl">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {question.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === serverCorrectAnswer;
            
            let btnClass = "glass-button relative overflow-hidden text-left px-6 py-4 rounded-2xl text-lg font-medium flex justify-between items-center group";
            
            if (showStatus) {
              if (isCorrect) {
                btnClass += " bg-success/20 border-success/50 text-success drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10";
              } else if (isSelected && !isCorrect) {
                btnClass += " bg-error/20 border-error/50 text-error";
              } else {
                btnClass += " opacity-50";
              }
            }

            return (
              <motion.button
                key={idx}
                disabled={selectedOption !== null || isLearningMode}
                whileHover={!showStatus && !isLearningMode ? { scale: 1.02, x: 5 } : {}}
                whileTap={!showStatus && !isLearningMode ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(option)}
                className={btnClass}
              >
                <span className="relative z-20">{option}</span>
                {showStatus && isCorrect && <CheckCircle2 className="text-success relative z-20" />}
                {showStatus && isSelected && !isCorrect && <XCircle className="text-error relative z-20" />}
                
                {!showStatus && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                )}
              </motion.button>
            );
          })}

          {question.options.length === 0 && (
            <div className="flex flex-col gap-3 mt-4">
              <input 
                type="text" 
                placeholder="اكتب الإجابة / المصطلح هنا..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                disabled={showStatus}
                className="w-full text-base md:text-lg bg-background/50 border border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl px-6 py-4 text-foreground outline-none transition-all"
                dir="auto"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && textInput.trim() && !showStatus && !isLoading) {
                    handleSelect(textInput.trim());
                  }
                }}
              />

              {showStatus && serverCorrectAnswer && (
                <div className="mt-2 p-4 bg-success/20 border border-success/50 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-sm text-success/80 block mb-1">الإجابة الصحيحة:</span>
                    <span className="text-lg font-bold text-success">{serverCorrectAnswer}</span>
                  </div>
                  <CheckCircle2 className="text-success" size={28} />
                </div>
              )}
              
              <motion.button
                disabled={showStatus || !textInput.trim() || isLearningMode}
                whileHover={(!showStatus && textInput.trim() && !isLearningMode) ? { scale: 1.02 } : {}}
                whileTap={(!showStatus && textInput.trim() && !isLearningMode) ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(textInput.trim())}
                className="glass-button relative overflow-hidden text-center px-6 py-4 rounded-2xl text-lg font-bold bg-primary text-primary-foreground disabled:opacity-50 shadow-[0_4px_15px_rgba(6,182,212,0.3)] disabled:shadow-none transition-all"
              >
                {showStatus ? "تم تأكيد الإجابة (اضغط على السهم أدناه للمتابعة)" : "تحقق من الإجابة"}
              </motion.button>
              
              {!showStatus && !isLearningMode && (
                <button 
                  onClick={handleShowAnswer}
                  className="text-foreground/60 hover:text-primary text-sm underline mt-2 self-center transition-colors"
                >
                  لا أعرف، اعرض الإجابة والتوضيح
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Right Column: Explanation or Next Button */}
      <AnimatePresence>
        {(serverExplanation || showStatus) && (
          <motion.div
            initial={{ opacity: 0, x: 20, height: 0 }}
            animate={{ opacity: 1, x: 0, height: 'auto' }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="lg:w-[400px] shrink-0"
          >
            <div className="glass-panel p-6 md:p-10 rounded-3xl h-full flex flex-col border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              
              {serverExplanation ? (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                      <span className="text-2xl">💡</span> الشرح والتوضيح
                    </h3>
                  </div>
                  
                  <div dir="rtl" className="w-full">
                    {renderFormattedExplanation(serverExplanation)}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                      <span className="text-2xl">✅</span> الإجابة الصحيحة
                    </h3>
                  </div>
                  
                  <div dir="rtl" className="text-lg leading-relaxed text-foreground/90 font-medium mb-8">
                    {serverCorrectAnswer}
                  </div>
                </>
              )}
              
              <div className="mt-auto flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-[0_4px_20px_rgba(6,182,212,0.4)]"
                >
                  السؤال التالي (Next) <ArrowRight size={20} />
                </motion.button>
                
                {isLearningMode && currentStep > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={previousQuestion}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-2xl font-bold text-base transition-colors"
                  >
                    السؤال السابق
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Image Zoom Lightbox Modal */}
      <AnimatePresence>
        {isImageZoomed && question.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out backdrop-blur-md"
          >
            <div className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image 
                src={question.imageUrl} 
                alt="صورة مكبرة" 
                fill
                quality={100}
                unoptimized={true}
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-4 py-2 rounded-full text-sm">
              اضغط في أي مكان للإغلاق
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
