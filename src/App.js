import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/home";
import Heroes from "./pages/heroes";
import Hero from "./pages/hero";
import "./pages/home.css";
import "./pages/heroes.css"
import "./pages/hero.css"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element= {<Heroes />}/>
          <Route path="/hero" element={<Hero />}/>
        </Routes>
      </Router>
  );
}

export default App;
