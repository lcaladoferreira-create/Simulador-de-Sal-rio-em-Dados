import React, { useState } from 'react';
import { Question } from '../data';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onNext: (selectedOptionId: string) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onNext,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedOptionId) {
      onNext(selectedOptionId);
      setSelectedOptionId(null);
    }
  };

  const progress = ((currentIndex) / totalQuestions) * 100;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 w-full">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-3">
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            {question.block}
          </span>
          <span className="text-sm font-semibold text-slate-700">
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 leading-tight">
            {question.text}
          </h2>

          <div className="space-y-4 mb-10">
            {question.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOptionId(option.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 flex items-center ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4 flex-shrink-0 ${
                    isSelected ? 'border-blue-500 text-blue-600 bg-white' : 'border-slate-300 text-slate-500'
                  }`}>
                    <span className="text-sm font-bold">{option.id}</span>
                  </div>
                  <span className={`text-lg ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-700'}`}>
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!selectedOptionId}
              className={`inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-200 ${
                selectedOptionId 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Próxima Questão
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
