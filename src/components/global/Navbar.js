import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from './Dropdown'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <h1><Link className="navbar-brand" to="/">Paisa</Link></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <Dropdown />
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/Crypto">CryptoCurrency</NavLink>
                        </li> */}
                    </ul>
                    {
                        props.isAuth
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                                </li>
                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>

                            </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
