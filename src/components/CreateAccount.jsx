import React from 'react';

const handleSubmit = async (event) => {
  event.preventDefault();
  
  const newTransactionAccount = { institutionName, nickname, accountType, accountNumber, belongsTo };
    
  try {
    const apiCall = axios.post(`${REACT_APP_SERVER_URL}/transaction-accounts/create`, newTransactionAccount)
    console.log(`New User Created: ${email}`);
    console.log(apiCall);
    setRedirect(true);
  } catch (error) {
    console.log(`Error: User Creation Failed`, error)
  }
}

const About = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input type="text" name="name" value={name} onChange={handleName} className="form-control"/>
    </div>
    <div className="form-group">
    <label htmlFor="displayName">Display Name</label>
    <input type="text" name="displayName" value={displayName} onChange={handleDisplayName} className="form-control"/>
  </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary float-right">Submit</button>
    </form>
  )
}

export default About;