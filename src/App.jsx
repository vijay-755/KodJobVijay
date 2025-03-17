import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import Auth2 from './components/Auth2';
// import LoginPage2 from "./components/LoginPage2";
import "./styles/Navbar.css";
import "./App.css";
import JobListings from './components/JobListings';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<Auth2 />} />
        <Route path="/jobs" element={<JobListings />} />
      </Routes>
    </div>
  );
}

export default App;
