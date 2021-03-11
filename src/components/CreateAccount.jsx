import React, { useState } from "react";
import axios from "axios";
import CurrencySelector from "./CurrencySelector";
const { REACT_APP_SERVER_URL } = process.env;

const CreateAccount = () => {
  const [institutionName, setInstitutionName] = useState("");
  const [nickname, setNickname] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [currency, setCurrency] = useState("604952e93d4a9573dbf9f408");

  const handleInstitutionName = (event) => {
    setInstitutionName(event.target.value);
  }

  const handleNickname = (event) => {
    setNickname(event.target.value);
  }

  const handleAccountType = (event) => {
    setAccountType(event.target.value);
  }

  const handleAccountNumber = (event) => {
    setAccountNumber(event.target.value);
  }

  const handleCurrency = (test) => {
    setCurrency(test);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionValues = { currency, institutionName, nickname, accountType, accountNumber };
      
    try {
      const newTransactionAccount = await axios.post(`${REACT_APP_SERVER_URL}/transaction-accounts/create`, transactionValues);
      console.log(newTransactionAccount.data);
    } catch (error) {
      const errorsArray = error.response.data
      for (const e of errorsArray) {
        console.error(`${e.name}: ${e.message}`)
      }
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="institutionName">Institution Name</label>
      <input type="text" name="institutionName" value={institutionName} onChange={handleInstitutionName} className="form-control"/>
    </div>
    <div className="form-group">
    <label htmlFor="nickname">Nickname</label>
    <input type="text" name="nickname" value={nickname} onChange={handleNickname} className="form-control"/>
  </div>
    <div className="form-group">
      <label htmlFor="accountType">Account Type</label>
      <input type="text" name="accountType" value={accountType} onChange={handleAccountType} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="accountNumber">Account Number</label>
      <input type="text" name="accountNumber" value={accountNumber} onChange={handleAccountNumber} className="form-control"/>
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