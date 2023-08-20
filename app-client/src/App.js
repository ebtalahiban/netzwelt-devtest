import './App.css';
import React, {useState} from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  
  return (
    <div className="App">
      {
        isLoggedIn ? <Home /> :
        <Login onLogin={handleLogin} />
      }
    </div>
  );
}

export default App;
