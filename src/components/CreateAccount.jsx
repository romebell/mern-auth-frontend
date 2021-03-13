import React, { useState } from "react";
import axios from "axios";
import CurrencySelector from "./CurrencySelector";
const { REACT_APP_SERVER_URL } = process.env;

const CreateAccount = () => {
  const [institution_name, setInstitution_name] = useState("");
  const [name, setName] = useState("");
  const [account_type, setAccount_type] = useState("");
  const [account_number, setAccount_number] = useState("");
  const [currency, setCurrency] = useState(undefined);

  const handleInstitution_name = (event) => {
    setInstitution_name(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleAccount_type = (event) => {
    setAccount_type(event.target.value);
  }

  const handleAccount_number = (event) => {
    setAccount_number(event.target.value);
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
    const transactionValues = { currency, institution_name, name, account_type, account_number };
      
    try {
      const newTransactionAccount = await axios.post(`${REACT_APP_SERVER_URL}/transaction-accounts`, transactionValues);
      console.log(newTransactionAccount.data);
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
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" value={name} onChange={handleName} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="institution_name">Institution Name</label>
      <input type="text" name="institution_name" value={institution_name} onChange={handleInstitution_name} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="account_type">Account Type</label>
      <input type="text" name="account_type" value={account_type} onChange={handleAccount_type} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="account_number">Account Number</label>
      <input type="text" name="account_number" value={account_number} onChange={handleAccount_number} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="currency">Currency</label>
      <CurrencySelector name="currency" action={handleCurrency} onChange={handleCurrency} className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary float-right">Submit</button>
    </form>
  );
}

export default CreateAccount;