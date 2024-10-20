import { AnswerStatus } from '../constants';

export function Answer({
  answer,
  status,
  isAnswerSelected,
  isDisabled,
  onSelect,
}) {
  const isSelectedStatus = status === AnswerStatus.SELECTED;
  const isAnsweredStatus =
    status === AnswerStatus.CORRECT || status === AnswerStatus.WRONG;

  let className = '';
  if (isAnswerSelected && isSelectedStatus) className = 'selected';
  if (isAnswerSelected && isAnsweredStatus) className = status;

  return (
    <li key={answer} className="answer">
      <button className={className} disabled={isDisabled} onClick={onSelect}>
        {answer}
      </button>
    </li>
  );
}
