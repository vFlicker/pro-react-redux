import { useCallback, useState } from 'react';

import { Question } from './Question';
import { Summary } from './Summary';

export function Quiz({ questions }) {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const maxQuestions = questions.length;
  const quizIsComplete = activeQuestionIndex === maxQuestions;
  const question = questions[activeQuestionIndex];

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (!quizIsComplete) {
    return (
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          question={question}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    );
  }

  return <Summary questions={questions} userAnswers={userAnswers} />;
}
