import "./App.css";
import NoteContainer from "./Component/NoteContainer/NoteContainer";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}

export default App;
