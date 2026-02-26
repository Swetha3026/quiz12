import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import JoinQuiz from "./pages/JoinQuiz";
import QuizRoom from "./pages/QuizRoom";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<JoinQuiz />} />
        <Route path="/quiz" element={<QuizRoom />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;