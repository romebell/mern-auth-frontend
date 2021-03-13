import React, { Component } from "react";

class AccountCard extends Component {
  constructor (props) {
    super(props);
    this.handleAccountNumber = this.handleAccountNumber.bind(this);
  }
  handleAccountNumber() {
    if (this.props.accountNumber) {
      return <p><sup>••••</sup>{this.props.accountNumber}</p>;
    } else {
      return undefined;
    }
  }
  render() {
    return (
      <article className="account-card">
        <section>
          <div>
            <h3>{this.props.name}</h3>
            <p className="balance">{this.props.balance}</p>
          </div>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Wells_Fargo_Logo_%282020%29.png" alt="Wells Fargo Logo" />
        </section>
        <footer>
          {this.handleAccountNumber()}
        </footer>
      </article>
    );
  }
}

export default AccountCard;