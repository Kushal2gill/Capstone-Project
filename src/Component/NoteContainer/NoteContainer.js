import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

export default function NoteContainer(props) {
  return (
    <div className="Note-container">
      <h2>NOTES</h2>

      <div className="note-container_notes ">
        {props.notes.map((item, index) => (
          <Note key={index} note={item} />
        ))}
      </div>
    </div>
  );
}
