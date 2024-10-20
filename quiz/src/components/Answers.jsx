import { useRef } from 'react';

import { Answer } from './Answer';

export function Answers({ answers, selectedAnswer, status, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => (
        <Answer
          key={answer}
          answer={answer}
          status={status}
          isAnswerSelected={selectedAnswer === answer}
          isDisabled={selectedAnswer !== ''}
          onSelect={() => onSelect(answer)}
        />
      ))}
    </ul>
  );
}
