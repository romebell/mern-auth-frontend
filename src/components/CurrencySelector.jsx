import React, { useState } from "react";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

  const getCurrencies = async () => {
{/*   const [currency, setCurrency] = useState("");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  } */}
  
 {/* try {
      await axios.get(`${REACT_APP_SERVER_URL}/currency`, newTransactionAccount);
      console.log(`Account Created: ${nickname || institutionName}`);
    } catch (error) {
      const errorsArray = error.response.data
      for (const e of errorsArray) {
        console.error(`${e.name}: ${e.message}`)
      }
    } */}
  
  return (
    <div className="form-group">
      {/* <label htmlFor="institutionName">Institution Name</label>
      <input type="text" name="institutionName" value={institutionName} onChange={handleInstitutionName} className="form-control"/> */}
    </div>
  );
}

export default getCurrencies;