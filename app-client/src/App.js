import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/account/login" element={isLoggedIn ? <Navigate to="/home/index" /> : <Login onLogin={handleLogin} />} />
          <Route path="/home/index" element={isLoggedIn ? <Home /> : <Navigate to="/account/login" />} />
          <Route path="/" element={isLoggedIn ? 
          <Navigate to="/home/index" /> : <Navigate to="/account/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
