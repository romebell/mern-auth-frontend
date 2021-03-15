import React, { Component } from "react";
import { Link } from "react-router-dom";

class AccountCard extends Component {
  constructor (props) {
    super(props);
    this.handleAccount_number = this.handleAccount_number.bind(this);
    this.handleBalance = this.handleBalance.bind(this);
  }
  handleAccount_number() {
    const { account_number } = this.props.account; // Get Account Number
    if (account_number) {
      // Get last four digits of Account Number
      const lastFour = account_number.substring(account_number.length-4, account_number.length);
      // Return Paragraph Element with last four digits.
      return <p className="account-number" aria-label="Account Ending in">{lastFour}</p>;
    } else {
      return undefined;
    }
  }
  handleBalance() {
    if (this.props.account) {
      const { balance, currency } = this.props.account; // Get Currency, Balance
    
      // Round balance to nearest whole number
      const roundedBalance = Math.round(balance);
      
      // Format balance in regional locale (ex. U.S. ##,###.##)
      const formattedBalance = new Intl.NumberFormat().format(roundedBalance);
      
      // Return the formatted balance with currency symbol
      return `${currency.symbol}${formattedBalance}`
    }
  }
  render() {
    if (this.props.account) {
    const { account, cardFlip } = this.props;
    const { _id, name } = account;
    return (     
      <div className={ cardFlip ? "card-flip" : undefined }>
        <article className="account-card" aria-label={`Account Card for ${name}`}>
          <div className="card-front">
            <section>
            <div>
              <h3 aria-label="Account Name">{name}</h3>
              <p className="balance" aria-label="Current Account Balance">{this.handleBalance()}</p>
            </div>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Wells_Fargo_Logo_%282020%29.png" alt="Wells Fargo Logo" />
            </section>
            <footer>
              {this.handleAccount_number()}
            </footer>
          </div>
          { cardFlip ? (
            <div className="card-back">
              <div className="d-grid gap-2 d-md-block">
              <Link className="btn btn-light" to="" aria-label="Account Settings" ><i className="bi bi-gear-fill"></i></Link>
              <Link className="btn btn-light" to={`/account/${_id}/add-transaction`} aria-label="New Transaction" ><i className="bi bi-plus-circle-fill"></i></Link>
              </div>
              <Link className="btn btn-light" to={`/account/${_id}`} ><i className="bi bi-card-checklist"></i>Transactions</Link>
            </div>
          ) : undefined }
        </article>
      </div>
    );
    } else {
      return (
        <article className="account-card" aria-label="Account Card">
          <div className="card-front card-loading">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading Content…</span>
            </div>
          </div>
        </article>
      )
    }
  }
}

export default AccountCard;