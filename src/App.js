import "./App.css";
import Typeahead from "./components/Typeahead";
import { Cities } from "./components/Cities";

function App() {
  return (
    <div className="container">
      <h1 className="center "> TypeAhead Select Input </h1>
      <Typeahead cities={Cities} />
    </div>
  );
}

export default App;
