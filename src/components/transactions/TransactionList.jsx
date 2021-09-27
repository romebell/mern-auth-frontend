import React, { Component } from 'react';
import Transaction from "./Transaction";

class TransactionList extends Component {
  render() {
    const { transactions } = this.props;
    
    // Confirm Component has received transactions argument
    if (transactions) {
      
      // Map an array of Transaction Components from transactions
      const transactionsList = transactions.map(( transaction, index ) => {
        return <Transaction key={index} transaction={transaction} />
      });
      
      return (
        <div aria-labelledby="h2-transactions" className="transaction-list">
        <header className="d-flex align-items-center">
          <h2 id="h2-transactions">Transactions</h2>
        </header>
        <section>{transactionsList}</section>
        </div>
      );
    } else {
      return (
        <div aria-labelledby="h2-transactions" className="transaction-list">
        <header className="d-flex align-items-center">
          <h2 id="h2-transactions">Transactions</h2>
          <div className="spinner-border spinner-border-sm ms-auto" role="status">
            <span className="visually-hidden">Loading Content…</span>
          </div>
        </header>
        <section>
        </section>
        </div>
      )
    }
  }
}

export default TransactionList;