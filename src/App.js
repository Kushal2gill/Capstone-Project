import { useState } from "react";
import "./App.css";
import NoteContainer from "./Component/NoteContainer/NoteContainer";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([
    {
      text: "sdfgh",
      time: "3;12AM",
      color: "cyan",
    },
    {
      text: "sdfgh",
      time: "3;12AM",
      color: "yellow",
    },
    {
      text: "sdfgh",
      time: "3;12AM",
      color: "pink",
    },
    {
      text: "sdfgh",
      time: "3;12AM",
      color: "grey",
    },
  ]);

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
