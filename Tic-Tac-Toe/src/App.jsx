import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

const PLAYERS = {
  "X": "Player 1",
  "O": "Player 2"
}

function getActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function getWinnerStatus(gameTurn) {
  if (gameTurn.length < 5) {
    return null;
  }
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  for (const turn of gameTurn) {
    gameBoard[turn.cell.row][turn.cell.col] = turn.player;
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] !== null &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][0] === gameBoard[i][2]
    ) {
      return gameBoard[i][0];
    }
    if (
      gameBoard[0][i] !== null &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[0][i] === gameBoard[2][i]
    ) {
      return gameBoard[0][i];
    }
  }
  if (
    gameBoard[0][0] !== null &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[0][0] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }
  if (
    gameBoard[0][2] !== null &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[0][2] === gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }
  if (gameTurn.length === 9) {
    return "tic-tac-toe-tie";
  }
  return null;
}

function titleCase(s) {
  return s.toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurn, setGameTurn] = useState([]);

  let activePlayer = getActivePlayer(gameTurn);
  let winner = getWinnerStatus(gameTurn);

  function handleSwitchPlayer(rowIdx, colIdx) {
    setGameTurn((prevTurn) => {
      let currentPlayer = getActivePlayer(prevTurn);
      return [
        { cell: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurn,
      ];
    });
  }

  function handleRestart() {
    setGameTurn([]);
  }

  function handlePlayerNameChange(player, name) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [player]: titleCase(name)
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName={PLAYERS.X}
            playerSymbol={"X"}
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            playerName={PLAYERS.O}
            playerSymbol={"O"}
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {winner && <GameOver players={players} winner={winner} onRestart={handleRestart} />}
        <GameBoard onSwitchPlayer={handleSwitchPlayer} turns={gameTurn} />
      </div>
      <Log names={players} turns={gameTurn} />
      {console.log(gameTurn)}
    </main>
  );
}

export default App;
