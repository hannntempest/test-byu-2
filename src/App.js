import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Banner from "./components/Banner";
import Stepper from "./components/Stepper";
import TeamForm from "./components/TeamForm";
import PlayerForm from "./components/PlayerForm";
import Success from "./components/Success";
import TeamHeader from "./components/TeamHeader";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white-100">
        {/* Top Navbar */}
        <TopNavbar />
        {/* Page Content */}
        <div className="p-4">
          <Routes>
            {/* Halaman Team Form */}
            <Route
              path="/"
              element={
                <div>
                  <Banner />
                  <Stepper currentStep={1} totalSteps={13} />
                  <TeamHeader />
                  <TeamForm />
                </div>
              }
            />

            {/* Halaman Player Form */}
            {Array.from({ length: 12 }).map((_, index) => (
              <Route
                key={index + 1}
                path={`/playerform/${index + 1}`}
                element={
                  <div>
                    <Banner />
                    <Stepper currentStep={index + 2} totalSteps={13} />
                    <TeamHeader />
                    <PlayerForm />
                  </div>
                }
              />
            ))}

            {/* Halaman Success */}
            <Route
              path="/success"
              element={
                <div>
                  <Banner />
                  <Stepper currentStep={13} totalSteps={13} />
                  <Success />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
