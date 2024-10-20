import quizCompleteImg from '../assets/quiz-complete.png';

const getResults = (questions, userAnswers) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => {
    const correctAnswer = questions[index].answers[0];
    return answer === correctAnswer;
  });

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100,
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100,
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return {
    skippedAnswers: skippedAnswersShare,
    correctAnswers: correctAnswersShare,
    wrongAnswers: wrongAnswersShare,
  };
};

export function Summary({ questions, userAnswers }) {
  const { skippedAnswers, correctAnswers, wrongAnswers } = getResults(
    questions,
    userAnswers,
  );

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswers}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswers}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswers}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          const { text, answers } = questions[index];
          const correctAnswer = answers[0];

          let cssClass = 'user-answer';
          if (answer === null) cssClass += ' skipped';
          else if (answer === correctAnswer) cssClass += ' correct';
          else cssClass += ' wrong';

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
