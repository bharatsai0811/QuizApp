import { createContext, useContext, useReducer } from "react";
import question from "../data";
import shuffleAnswers from "../shuffleAnswers";

const QuizContest = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "Next_Question": {
      const result = state.currentQuestionIndex === state.question.length - 1;

      const currentQuestionIndex = result
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = result
        ? []
        : shuffleAnswers(state.question[currentQuestionIndex]);
      console.log(answers);
      return {
        ...state,
        currentQuestionIndex,
        result,
        answers,
        currentAnswer: "",
      };
    }
    case "AnswerSelected": {
      const currentAnswer = action.payload;
      const correctAnswerCount =
        currentAnswer ===
        state.question[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer,
        correctAnswerCount,
      };
    }
    case "Restart": {
      return {
        ...state,
        currentQuestionIndex: 0,
        result: false,
        correctAnswerCount: 0,
        answers: shuffleAnswers(question[0]),
        currentAnswer: "",
      };
    }
    default:
      return {
        ...state,
      };
  }
}
function QuizProvider({ children }) {
  const [quizstate, dispatch] = useReducer(reducer, {
    question: question,
    currentQuestionIndex: 0,
    result: false,
    correctAnswerCount: 0,
    answers: shuffleAnswers(question[0]),
    currentAnswer: "",
  });
  //console.log(
  //quizstate.question[quizstate.currentQuestionIndex].correctAnswer,
  //quizstate
  //);
  return (
    <QuizContest.Provider value={[quizstate, dispatch]}>
      {children}
    </QuizContest.Provider>
  );
}
export { QuizProvider };
export const UseQuizContest = () => {
  return useContext(QuizContest);
};
