
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/Nav/Nav";
import {Routes, Route } from "react-router-dom";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/PersonalInfo" element={<PersonalInfo/>}/>
       <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
