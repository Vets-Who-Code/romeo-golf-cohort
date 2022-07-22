
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
            <Nav />
            <LandingPage />
        <a href="./App.js" target="_blank">
          <button className="btn btn-next" id="btn-next">Next</button>
        </a>
    
    </div>
  );
}

export default App;
