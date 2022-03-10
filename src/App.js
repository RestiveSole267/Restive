import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
