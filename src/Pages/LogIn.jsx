import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
// console.log(location);
  const handleLogin = async () => {
    const result = await dispatch(login(email, password));
    if (result.success) {
      const redirectPath = location?.state?.from || '/';
      navigate(redirectPath);
    } else {
      alert('Login failed!');
    }
  };

  return (
    <div className='loginForm'>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LogIn;
