import React, { Component } from "react";
import AccountCard from "./AccountCard";
import TransactionList from "../transactions/TransactionList";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

class AccountIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      transactions: undefined,
      account: undefined
    }
    
  }
  async componentDidMount() {
    // Get the ID of the account from URL parameters
    const { id } = this.props.match.params;
    
    // Get the transactions and account
    const transactionAccount = await axios.get(`${REACT_APP_SERVER_URL}/transaction-accounts/${id}/transactions`);

    // Set initial display of account cards after promise resolved
    await this.setState({
      ...transactionAccount.data
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h2>Account</h2>
        </header>
        <aside>
          <AccountCard account={this.state.account} />
        </aside>
        <section>
          <TransactionList transactions={this.state.transactions} />
        </section>
      </div>
    );
  }
}

export default AccountIndex;