import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
    };
    
    this.handleClick = this.handleClick.bind(this)
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }
  
  handleClick(event) {
    // showMenu(event) {
        event.preventDefault();
            this.setState(state => ({
                 showMenu: !state.showMenu
            // document.addEventListener('click', this.closeMenu);
            })
        )
 }

  
  closeMenu() {
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    
  }

  render() {
    return (
      <div>
        <Link to="/" onClick={this.handleClick}>
        {this.state.isToggleOn ? "Menu" : "Menu"} 
        </Link>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <NavLink className="nav-link" exact to="/">Dashboard</NavLink>
                <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
                <NavLink className="nav-link" exact to="/account">Accounts</NavLink>
                <NavLink className="nav-link" exact to="/Crypto">CryptoCurrency Tracker</NavLink>
                <NavLink className="nav-link" exact to="/logout">Logout</NavLink>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown;