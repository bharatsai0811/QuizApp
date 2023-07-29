import React from "react";

const Answer = ({
  answerText,
  index,
  handleClick,
  correctAnswer,
  currentAnswer,
}) => {
  const options = ["A", "B", "C", "D"];
  const iscorrect =
    currentAnswer && answerText === correctAnswer ? "correct-answer" : "";
  const iswrong =
    currentAnswer === answerText && currentAnswer !== correctAnswer
      ? "wrong-answer"
      : "";
  const isdisabled = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${iscorrect} ${iswrong} ${isdisabled}`}
      onClick={() => {
        return handleClick();
      }}
    >
      <div className="answer-letter">{options[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
