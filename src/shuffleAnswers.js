export default function shuffleAnswers(question) {
  const answers = [question.correctAnswer, ...question.incorrectAnswers];
  const shuffledAnswers = answers
    .map((answer) => {
      return {
        sort: Math.random(),
        value: answer,
      };
    })
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
  return shuffledAnswers;
}
