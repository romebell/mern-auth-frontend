import React, { Component } from "react";
import { Link } from "react-router-dom";
import CurrencySelector from "../CurrencySelector";
import AccountSelector from "../AccountSelector";
import Modal from "../Modal";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

class AddTransaction extends Component {
  constructor (props) {
    super(props);
    this.state = {
      payee: undefined,
      category: undefined,
      account: undefined,
      amount: undefined,
      exchange_rate: undefined,
      type: undefined,
      disableExchange: true
    }
    this.errorDiv = this.errorDiv.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handlePayee = this.handlePayee.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleExchange_rate = this.handleExchange_rate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSession = () => {
    const { user } = this.props;
    const { exp } = user;
    
    const currentTime = Date.now();
    const expirationTime = new Date(exp * 1000);
    // make a condition that compares expiration and current time
    if (currentTime >= expirationTime) {
        this.props.handleLogout();
        alert("You have been signed out due to inactivity\nPlease sign in to continue…");
     }
  }
  handlePayee = (event) => {
    this.setState({
      payee: event.target.value
    });
  }
  handleCategory = (event) => {
    this.setState({
      category: event.target.value
    });
  }
  handleAmount = (event) => {
    this.setState({
      amount: event.target.value
    });
  }
  handleExchange_rate = (event) => {
    this.setState({
      exchange_rate: event.target.value
    });
  }
  handleType = (event) => {
    const type = event.target.value
    this.setState({
      type: type.toLowerCase()
    });
  }
  handleAccount = (account) => {
    this.setState({
      account
    });
  }
  handleCurrency = (currency) => {
    this.setState({
      currency
    });
  }
  // Handle form submission and creation of Transaction
  async handleSubmit (event) {
    event.preventDefault();
    const { payee, currency, exchange_rate, amount, type, account, category } = this.state;
    const transactionValues = { payee, currency, exchange_rate, amount, type, account, category };
      
    try {
      const newTransactionAccount = await axios.post(`${REACT_APP_SERVER_URL}/transactions`, transactionValues);
      console.log(`${category || currency} ${type} Transaction created in account ${account}`)
      console.log(newTransactionAccount.data);
      this.props.history.push(`/account/${account}`);
    } catch (error) {
      if (typeof error.response.data !== "string") {
        const errorsArray = error.response.data
        for (const e of errorsArray) {
          console.error(`${e.name}: ${e.message}`)
        }
      } else {
        console.error(`${error.name}: ${error.message}`)
      }
    }
  }
  
  errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>Please <Link to="/login">login</Link> to view this page</h3>
      </div>
    );
  };
  
  async componentDidMount() {
    // Get the ID of the account from URL parameters
    const { id } = this.props.match.params;
    
    // Get the transactions and account
    const transactionAccount = await axios.get(`${REACT_APP_SERVER_URL}/transaction-accounts/${id}`);

    // Set initial display of account cards after promise resolved
    await this.setState({
      ...transactionAccount.data
    });
  }
  
  render() {
    this.handleSession()
    
    const header = (
      <h2>New Transaction</h2>
    )
    
    const footer = (
      <>
      <button type="button" className="btn btn-secondary">Cancel</button>
      <button type="submit" form="form-add-transaction" className="btn btn-primary"><i className="bi bi-plus-circle-fill"></i>Add Transaction</button>
      </>
    )
    
    const body = (
      <form id="form-add-transaction" onSubmit={this.handleSubmit} className="row g-3">
      <div className="col-12">
        <label htmlFor="inputPayee" className="form-label">Payee</label>
        <input type="text" className="form-control" id="inputPayee" name="payee" onChange={this.handlePayee} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCategory" className="form-label">Category</label>
        <input type="text" className="form-control" id="inputCategory" name="category" onChange={this.handleCategory} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputAccount" className="form-label">Account</label>
        <AccountSelector id="inputAccount" action={this.handleAccount} onChange={this.handleAccount} name="account" params={this.props.match.params}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCurrency" className="form-label">Currency</label>
        <CurrencySelector action={this.handleCurrency} onChange={this.handleCurrency} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputExchangeRate" className="form-label">Exchange Rate</label>
        <input type="number" step="any" disabled={this.state.disableExchange} className="form-control" id="inputExchangeRate" name="exchange_rate" onChange={this.handleExchange_rate} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputAmount" className="form-label">Amount</label>
        <input type="number" step="any" className="form-control" id="inputAmount" name="amount" onChange={this.handleAmount} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputType" className="form-label">Type</label>
        <select className="form-select" id="inputType" name="type" onChange={this.handleType} >
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>      
    </form>
    )
    
    const data = this.props.user
    ? <Modal header={ header } footer={ footer } >{ body }</Modal>
    : <h2>Loading…</h2>
    
    return (
      <div>
        { this.props.user ? data : this.errorDiv() }
      </div>
    );
  }
}

export default AddTransaction;