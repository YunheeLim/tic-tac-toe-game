import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{name}</span>;

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  if (isEditing) {
    playerName = <input type="text" required defaultValue={name}/>
  }


  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}