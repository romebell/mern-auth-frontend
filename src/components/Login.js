// Imports
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

const { REACT_APP_SERVER_URL } = process.env;

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };

    axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
    .then(response => {
      const { token } = response.data;
      // save token to localStorage
      localStorage.setItem('jwtToken', token);
      // set token to headers
      setAuthToken(token);
      // decode token to get the user data
      const decoded = jwt_decode(token);
      // set the current user
      props.nowCurrentUser(decoded); // funnction passed down as props.
    })
    .catch(error => {
      console.log('Login Error: ', error);
      alert("Incorrect Username or Password");
    });
  }

  if (props.user) return <Redirect to="/dashboard" /> // double check

  return (
    <div className="row mt-4">
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-white border-0 rounded-3">
          <h2 className="py-2">Welcome Back…</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="col-form-label col-form-label-lg" htmlFor="email">Email</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-at"></i></span>
                <input className="form-control form-control-lg" type="email" name="email" value={email} onChange={handleEmail}/>
              </div>
            </div>
            <div className="mb-3">
            <label className="col-form-label col-form-label-lg" htmlFor="password">Password</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
                <input className="form-control form-control-lg col-sm-3" type="password" name="password" value={password} onChange={handlePassword}/>
              </div>
            </div>
            <button type="submit" className="btn btn-dark"><i className="bi bi-box-arrow-in-right"></i>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
