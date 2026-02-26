function QuestionCard({ question, onAnswer }) {
  return (
    <div>
      <h3>{question.text}</h3>

      <button onClick={() => onAnswer("A")}>{question.optionA}</button>
      <button onClick={() => onAnswer("B")}>{question.optionB}</button>
      <button onClick={() => onAnswer("C")}>{question.optionC}</button>
      <button onClick={() => onAnswer("D")}>{question.optionD}</button>
    </div>
  );
}

export default QuestionCard;