import React from "react";
import { UseQuizContest } from "../context/Context";
import Answer from "./Answer";
const Question = () => {
  const [quizstate, dispatch] = UseQuizContest();
  const currQuestion =
    quizstate.question[quizstate.currentQuestionIndex].question;
  return (
    <div>
      <div className="question">{currQuestion}</div>
      <div className="answers">
        {quizstate.answers.map((answer, i) => {
          return (
            <Answer
              answerText={answer}
              key={i}
              index={i}
              handleClick={() => {
                console.log(answer);

                dispatch({ type: "AnswerSelected", payload: answer });
              }}
              currentAnswer={quizstate.currentAnswer}
              correctAnswer={
                quizstate.question[quizstate.currentQuestionIndex].correctAnswer
              }
            ></Answer>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
