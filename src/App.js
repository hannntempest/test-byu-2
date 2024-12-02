import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Header from "../src/components/Header.jsx";
import TeamForm from "../src/components/TeamForm.jsx";
import Success from "../src/components/Success.jsx";
import PlayerForm from "../src/components/PlayerForm.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <main className="content">
          <Routes>
            <Route path="/" element={<TeamForm />} />
            <Route path="/success" element={<Success />} />
            <Route path="/playerform" element={<PlayerForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
