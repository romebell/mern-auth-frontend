import React, { Component } from 'react';
import axios from "axios";
import AccountCard from "./AccountCard";
const { REACT_APP_SERVER_URL } = process.env;

class AccountIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      account: "",
      transactions: ""
    }
  }
  async componentDidMount() {
    const { id } = this.props.match.params; // Get Transaction Account ID
    
    // Get Transactions and Account information
    const transactionAccount = await axios.get(`${REACT_APP_SERVER_URL}/transaction-accounts/${id}/transactions`);
    
    // Set state of state.account and state.transactions
    await this.setState({
      ...transactionAccount.data
    });
  }
  render() {
    return (
      <div className="">
        <div className="account-list">
          <header>
            <h2>Account</h2>
          </header>
          <section>
            <AccountCard account={this.state.account} />
          </section>
        </div>
        <div className="transaction-list">
        
        </div>
      </div>
    );
  }
}

export default AccountIndex;