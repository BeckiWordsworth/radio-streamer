import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="app">
      <header className="headerBox">
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <h1> Sverige Radio Stations</h1>
      </header>
    </div>
  );
}

export default App;
