import React, { Component } from "react";
import axios from "axios";
import AccountCard from "./AccountCard";
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
    const userAccounts = await axios.get(`${REACT_APP_SERVER_URL}/users/transaction-accounts`);
    
    // Map an array of account cards.
    const accountCards = userAccounts.data.map((account, index) => {
      return <AccountCard key={index} name={account.name} accountNumber={account.account_number} balance="$768" />
    });
    
    // Set initial display of account cards after promise resolved
    this.setState({
      data: accountCards
    });
  }
  
  render() {
    return (
      <section className="account-list">{this.state.data}</section>
    );
  }
}

export default AccountList;