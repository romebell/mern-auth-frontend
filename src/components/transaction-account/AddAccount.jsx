import React, { useState } from "react";
import axios from "axios";
import CurrencySelector from "../CurrencySelector";
import AccountTypeSelector from "./AccountTypeSelector";
import { Link } from "react-router-dom";
import Modal from "../Modal"
const { REACT_APP_SERVER_URL } = process.env;

const AddAccount = (props) => {
  const { handleLogout, user } = props;
  const { exp } = user;
  const expirationTime = new Date(exp * 1000);
  const currentTime = Date.now();
  
   // make a condition that compares expiration and current time
  if (currentTime >= expirationTime) {
      handleLogout();
      alert('Session has ended. Please login to continue.');
   }

  const [institution_name, setInstitution_name] = useState("");
  const [name, setName] = useState("");
  const [account_type, setAccount_type] = useState("");
  const [account_number, setAccount_number] = useState("");
  const [balance, setBalance] = useState("");
  const [currency, setCurrency] = useState("");

  const handleInstitution_name = (event) => {
    setInstitution_name(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleAccount_number = (event) => {
    setAccount_number(event.target.value);
  }
  
  const handleBalance = (event) => {
    setBalance(event.target.value);
  }

  // Accepts DOM event from Account Type Selector Component as callback.
  const handleAccount_type = (accountTypeValue) => {
    // HTML Select element:
    // Assign current user selection to account_type variable
    setAccount_type(accountTypeValue.toLowerCase());
  }

  // Accepts DOM event from Currency Selector Component as callback.
  const handleCurrency = (currencyValue) => {
    // HTML Select element:
    // Assign current user selection to currency variable
    setCurrency(currencyValue);
  }
  
  // Handle form submission and creation of Transaction Account
  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionValues = { balance, currency, institution_name, name, account_type, account_number };
      
    try {
      const newTransactionAccount = await axios.post(`${REACT_APP_SERVER_URL}/transaction-accounts`, transactionValues);
      console.log(`${name} ${account_type} Account created for user ${user.name}`)
      console.log(newTransactionAccount.data);
      props.history.push("/dashboard");
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
  
  const accountTypes = ["Checking", "Savings", "Cash"];
  
  const header = (
    <h2 className="py-2">New Account</h2>
  );
  
  const footer = (
    <button form="form-add-account" type="submit" className="btn btn-primary float-right"><i className="bi bi-plus-circle-fill"></i>Add Account</button>
  );
  
  const body = () => {
    if (user) {
      return (
        <form id="form-add-account" className="row g-3"  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleName}className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="institution_name">Institution Name</label>
          <input type="text" name="institution_name" value={institution_name}onChange={handleInstitution_name} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="account_type">Account Type</label>
          <AccountTypeSelector action={handleAccount_type} onChange={handleAccount_type} options={accountTypes}/>
        </div>
        <div className="form-group">
          <label htmlFor="account_number">Account Number</label>
          <input type="text" name="account_number" value={account_number} onChange={handleAccount_number} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="balance">Starting Balance</label>
          <input type="number" step="any" placeholder="0.00" name="balance"value={balance} onChange={handleBalance} className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <CurrencySelector name="currency" action={handleCurrency}onChange={handleCurrency}/>
        </div>
      </form>
      );
    } else {
      return (
        <h2>Loading…</h2>
      )
    }
  }
    
  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>Please <Link to="/login">login</Link> to view this page</h3>
      </div>
    );
  };
  
  return (
    <Modal header={header} footer={footer}>
      {user ? body() : errorDiv()}
    </Modal>
  );
}

export default AddAccount;