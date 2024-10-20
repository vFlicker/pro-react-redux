import { useState } from 'react';

import {
  ANSWER_PENDING_DURATION,
  ANSWER_RESULT_DURATION,
  ANSWER_TIMEOUT_DURATION,
  AnswerStatus,
} from '../constants';
import { wait } from '../util/wait';
import { Answers } from './Answers';
import { QuestionTimer } from './QuestionTimer';

const getTimerValue = ({ selectedAnswer, isCorrect }) => {
  if (isCorrect !== null) return ANSWER_RESULT_DURATION;
  if (selectedAnswer !== '') return ANSWER_PENDING_DURATION;
  return ANSWER_TIMEOUT_DURATION;
};

const getAnswerStatus = ({ selectedAnswer, isCorrect }) => {
  if (selectedAnswer === '') return AnswerStatus.UNSELECTED;
  if (isCorrect === null) return AnswerStatus.SELECTED;
  return isCorrect ? AnswerStatus.CORRECT : AnswerStatus.WRONG;
};

export function Question({ question, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  const { text, answers } = question;
  const { selectedAnswer } = answer;
  const timer = getTimerValue(answer);
  const answerStatus = getAnswerStatus(answer);

  const handleSelectAnswer = async (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    await wait(ANSWER_PENDING_DURATION);
    const correctAnswer = answers[0];
    const isCorrect = correctAnswer === answer;
    setAnswer({ selectedAnswer: answer, isCorrect });

    await wait(ANSWER_RESULT_DURATION);
    onSelectAnswer(answer);
  };

  const handleTimeout = selectedAnswer === '' ? onSkipAnswer : null;

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={handleTimeout}
        mode={answerStatus}
      />
      <h2>{text}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerStatus={answerStatus}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
