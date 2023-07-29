import React from "react";
import { UseQuizContest } from "../context/Context";
import Question from "./Question";
const Quiz = () => {
  const [quizstate, dispatch] = UseQuizContest();
  return (
    <div className="quiz">
      {quizstate.result && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div> You have completed the quiz.</div>
            <div>
              {" "}
              You have got {quizstate.correctAnswerCount} of{" "}
              {quizstate.question.length} right
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: "Restart" })}
            >
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizstate.result && (
        <div>
          <div className="score">
            Question: {quizstate.currentQuestionIndex + 1}/
            {quizstate.question.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "Next_Question" })}
          >
            Next Question!
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
