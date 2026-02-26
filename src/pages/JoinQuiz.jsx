import { useState } from "react";
import connection from "../services/signalr";
import { useNavigate } from "react-router-dom";

function JoinQuiz() {
  const [roomCode, setRoomCode] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const joinRoom = async () => {
    await connection.start();
    await connection.invoke("JoinRoom", roomCode, name);
    navigate("/quiz");
  };

  return (
    <div>
      <h2>Join Quiz</h2>

      <input
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Room Code"
        onChange={(e) => setRoomCode(e.target.value)}
      />

      <button onClick={joinRoom}>Join</button>
    </div>
  );
}

export default JoinQuiz;