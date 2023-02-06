import React from "react";
import "./Note.css";

export default function Note(props) {
  return (
    <div>
      <div className="note" style={{ backgroundColor: props.note.color }}>
        <textarea className="note_text" defaultValue={props.note.text} />
        <p> {props.note.time}</p>
      </div>
    </div>
  );
}
