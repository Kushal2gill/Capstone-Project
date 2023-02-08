import React from "react";
import deleteIcon from "../../images/delete.png";
import "./Note.css";
let timer = 500,
  timeout;
export default function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthName = [
      "Jan",
      "Feb",
      "March",
      "April",
      "may",
      "june",
      "July",
      "August",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthName[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month} `;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}
