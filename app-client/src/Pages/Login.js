import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
  
      try {
        const response = await axios.post('http://localhost:5000/login', {
          username,
          password,
        });
  
        if (response.status === 200) {
          setIsLoggedIn(true); 
          console.log('Logged in successfully');
        }
      } catch (error) {
        console.error('Login failed', error);
      }
    };
  
    if (isLoggedIn) {
      return <p>You are logged in!</p>;
    }
  
    return (
      <div className="form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your username"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  };

export default Login
