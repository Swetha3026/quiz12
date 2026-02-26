import connection from "../services/signalr";

function AdminDashboard() {
  const startQuiz = () => {
    connection.invoke("Broadcast", "Quiz Started!");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default AdminDashboard;