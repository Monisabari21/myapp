import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import './Style.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/home" />} />
        <Route path="/Home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;