import { useState } from "react";

export default function Player({ playerName, playerSymbol, isActive, onNameChange}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleChangeEvent(event) {
    setName(event.target.value);
  }

  function handleEditAndSave() {
    setIsEditing((state) => !state);
    if(isEditing) {
      onNameChange(playerSymbol, name);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-symbol">{playerSymbol}</span>
        {isEditing ? (
          <input
            name={playerName}
            type="text"
            required
            value={name}
            onChange={handleChangeEvent}
          ></input>
        ) : (
          <span className="player-name">{name}</span>
        )}
      </span>
      <button onClick={handleEditAndSave}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
