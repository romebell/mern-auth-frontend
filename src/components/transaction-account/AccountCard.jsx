import React, { Component } from "react";
import { Link } from "react-router-dom";

class AccountCard extends Component {
  constructor (props) {
    super(props);
    this.handleAccountNumber = this.handleAccountNumber.bind(this);
  }
  handleAccountNumber() {
    const { accountNumber } = this.props
    if (accountNumber) {
      const lastFour = accountNumber.substring(accountNumber.length-4, accountNumber.length);
      return <p className="account-number" aria-label="Account Ending In">{lastFour}</p>;
    } else {
      return undefined;
    }
  }
  render() {
    return (
      <div className="card-flip">
        <article className="account-card" aria-label={`Account Card for ${this.props.name}`}>
          <div className="card-front">
            <section>
            <div>
              <h3 aria-label="Account Name">{this.props.name}</h3>
              <p className="balance" aria-label="Current Account Balance">{this.props.balance}</p>
            </div>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Wells_Fargo_Logo_%282020%29.png" alt="Wells Fargo Logo" />
            </section>
            <footer>
              {this.handleAccountNumber()}
            </footer>
          </div>
          <div className="card-back">
            <Link className="btn btn-light" to="" ><i className="bi bi-gear-fill"></i>Account Settings</Link>
            <Link className="btn btn-dark" to="" ><i className="bi bi-plus-circle-fill"></i>New Transaction</Link>
          </div>
        </article>
      </div>
    );
  }
}

export default AccountCard;