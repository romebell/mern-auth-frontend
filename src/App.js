// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';


// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
// import Importfile from './components/Importfile';
import AddAccount from './components/AddAccount';
import Account from './components/Account';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';
import Crypto from './components/Crypto';

import Importfile from './components/Importfile';
const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('jwtToken');
  console.log('Private Route ----------');
  return <Route {...rest} render={(props) => {
  return token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  useEffect(() => {
  let token;

  if (!localStorage.getItem('jwtToken')) {
    setIsAuthenticated(false);
    console.log('====> Authenticated is now FALSE');
  } else {
    token = jwt_decode(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.getItem('jwtToken'));
    setCurrentUser(token);
  }
  }, []);

  const nowCurrentUser = (userData) => {
  console.log('===> nowCurrent is here.');
  setCurrentUser(userData);
  setIsAuthenticated(true);
  }

  const handleLogout = () => {
  if (localStorage.getItem('jwtToken')) {
    // remove token for localStorage
    localStorage.removeItem('jwtToken');
    setCurrentUser(null);
    setIsAuthenticated(false);
  }
  }

  return (
  <div>
    <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
    <main className="container mt-5">
    <Switch>
      <Route path='/signup' component={Signup} />
      <Route
      path="/login"
      render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
      />
      <Route
      exact path="/"
      render={(props) => <Welcome {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} 
      />
      <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
      <PrivateRoute path="/dashboard" component={Dashboard} user={currentUser} handleLogout={handleLogout} />
      <Route path="/add-account" component={AddAccount} />
      <Route path="/account" component={Account} />
      <Route path="/stock" component={Stock} />
      <Route path="/crypto" component={Crypto} />
    </Switch>
    {/* <Importfile /> */}
    </main>
    <Footer />
  </div>
  );
}

export default App;
