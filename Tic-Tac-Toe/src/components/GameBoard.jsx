const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ turns, onSwitchPlayer }) {
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of turns) {
    gameBoard[turn.cell.row][turn.cell.col] = turn.player;
  }

  function handleBoardClick(rowIdx, colIdx) {
    if (gameBoard[rowIdx][colIdx] !== null) {
      return;
    }
    onSwitchPlayer(rowIdx, colIdx);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleBoardClick(rowIndex, cellIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
