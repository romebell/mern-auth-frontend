// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import AddAccount from './components/transaction-account/AddAccount';
import Account from './components/Account';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';
import Crypto from './components/Crypto';
import AccountIndex from './components/transaction-account/AccountIndex';
import AddTransaction from './components/transactions/AddTransaction';

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
    <div className="d-flex flex-column h-100">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <main className="container mb-5">
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
          <PrivateRoute path="/add-account" component={AddAccount} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/account/:id/add-transaction" component={AddTransaction} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/account/:id" component={AccountIndex} user={currentUser} handleLogout={handleLogout} />
          <Route path="/account" component={Account} />
          <Route path="/stock" component={Stock} />
          <Route path="/crypto" component={Crypto} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
