import React, { Component } from "react";
import axios from "axios";
import AccountCard from "./AccountCard";
import { Link } from "react-router-dom"
const { REACT_APP_SERVER_URL } = process.env;


class AccountList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: undefined
    }
  }
  async componentDidMount() {
    // Get the accounts for current user
    try {
      const userAccounts = await axios.get(`${REACT_APP_SERVER_URL}/users/transaction-accounts`);
      
      // Map an array of account cards.
      const accountCards = userAccounts.data.map((account, index) => {
        return <AccountCard key={index} account={account} cardFlip/>
      });
      
      // Set initial display of account cards after promise resolved
      this.setState({
        data: accountCards
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  render() {
    return (
      <section className="account-list">
        <div className="account-list-fade-left"></div>
        <header>
          <h2>Accounts</h2>
          <Link to="/add-account" aria-label="Add New Account"><i className="bi bi-plus-circle-fill"></i></Link>
        </header>
        <section>{this.state.data}</section>
        <div className="account-list-fade-right"></div>
      </section>
    );
  }
}

export default AccountList;