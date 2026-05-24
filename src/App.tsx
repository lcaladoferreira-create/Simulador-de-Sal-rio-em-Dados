/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { questions, outcomes } from './data';

type AppState = 'welcome' | 'quiz' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleNextQuestion = (selectedOptionId: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    let newScore = score;
    
    if (selectedOptionId === currentQuestion.correctAnswerId) {
      newScore += 1;
    }
    
    setScore(newScore);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setAppState('result');
    }
  };

  const getOutcome = () => {
    return outcomes.find(
      (outcome) => score >= outcome.minScore && score <= outcome.maxScore
    ) || outcomes[0];
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center justify-center">
      {appState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {appState === 'quiz' && (
        <QuizScreen
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onNext={handleNextQuestion}
        />
      )}
      {appState === 'result' && (
        <ResultScreen
          score={score}
          total={questions.length}
          outcome={getOutcome()}
        />
      )}
    </div>
  );
}
