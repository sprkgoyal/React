const positionNames = [
  ["top left", "top midlle", "top right"],
  ["middle left", "center", "middle right"],
  ["bottom left", "bottom middle", "bottom right"],
];

export default function Log({ names, turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.cell.row}</b>${turn.cell.col}`}>
          <b>{names[turn.player]}</b> played at{" "}
          <b>
            {positionNames[turn.cell.row][turn.cell.col]}
          </b>
        </li>
      ))}
    </ol>
  );
}
