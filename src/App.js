
import "./App.css";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <LandingPage />
        <a href="./App.js" target="_blank">
          <button className="btn btn-next">Next</button>
        </a>
      </div>
    </div>
  );
}

export default App;
