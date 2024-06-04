import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import NavBar from "./components/navbar";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="content">
          <NavBar></NavBar>
          <Intro></Intro>
          <About></About>
          <Projects></Projects>
          <Credits></Credits>
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
