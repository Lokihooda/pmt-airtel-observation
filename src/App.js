import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Q2OND_Attempted" element={<Attempted />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="card">
      <h1>PMT Observation Report Q2 OND'25</h1>
      <p>Welcome to the Airtel Bharti PMT Observation Report Form</p>
    </div>
  );
}

function Attempted() {
  return (
    <div className="card">
      <h1>Attempted Report</h1>
      <p>PMT Attempted Form</p>
    </div>
  );
}

export default App;
