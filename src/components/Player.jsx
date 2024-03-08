import { useState } from "react";

export default function Player({ name, symbol }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ editText, setEditText ] = useState("Edit");

  function editBtnHandler() {
    if (isEditing) {
      setEditText("Edit");
      setIsEditing(false);
    }else{
      setEditText("Save");
      setIsEditing(true);
    }
  }

  return (
      <li>
        <span className="player">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editBtnHandler}>{editText}</button>
      </li>
  );
}