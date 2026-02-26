import { useEffect, useState } from "react";
import connection from "../services/signalr";
import QuestionCard from "../components/QuestionCard";
import Leaderboard from "../components/Leaderboard";
import Timer from "../components/Timer";

function QuizRoom() {
  const [question, setQuestion] = useState(null);
  const [time, setTime] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    connection.on("ReceiveQuestion", (q) => {
      setQuestion(q);
      setTime(q.timeLimit);
    });

    connection.on("UpdateLeaderboard", (data) => {
      setLeaderboard(data);
    });

    connection.on("ReceiveBroadcast", (msg) => {
      alert(msg);
    });
  }, []);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const submitAnswer = (answer) => {
    connection.invoke("SendAnswer", "ROOM123", "User", answer);
  };

  return (
    <div>
      {question && (
        <>
          <Timer time={time} />
          <QuestionCard question={question} onAnswer={submitAnswer} />
        </>
      )}

      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default QuizRoom;