export default function GameOver({ players, winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner === "tic-tac-toe-tie" ? (
        <p id="winner">Draw!</p>
      ) : (
        <p id="winner"><b>{players[winner]}</b> wins!</p>
      )}
      <p>
        <button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
}
