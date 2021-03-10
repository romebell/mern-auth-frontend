import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    console.log(this)
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <NavLink className="nav-link" exact to="/">myDash</NavLink>
                <NavLink className="nav-link" exact to="/profile">myProfile</NavLink>
                <NavLink className="nav-link" exact to="/accounts">myAccounts</NavLink>
                <NavLink className="nav-link" exact to="/budget">myBudget</NavLink>
                <NavLink className="nav-link" exact to="/stocks">myStocks</NavLink>
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