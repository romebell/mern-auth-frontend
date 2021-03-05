// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';

function App() {
  // Set state values
 
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>MERN Authentication</h1>
    <Login />
    </div>
  );
}

export default App;
