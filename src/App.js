import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Components/Header/index";

function App() {
  return (
    <div className="app">
      <Header />
      <header className="headerBox">
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <h1> Sverige Radio Stations</h1>
      </header>
      <h2 className="subHeading"> Pick a station</h2>
      <p className="bodyText">This is a music streaming player. Click on a channel in the menu to start listening</p>
      <button className="buttonStyle">Listen</button>
    </div>
  );
}

export default App;
