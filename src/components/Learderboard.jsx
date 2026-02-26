function Leaderboard({ leaderboard }) {
  return (
    <div>
      <h3>Leaderboard</h3>
      {leaderboard.map((p, index) => (
        <div key={index}>
          {p.name} - {p.score}
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;