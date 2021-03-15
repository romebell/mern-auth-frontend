import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "./Modal"

const Profile = (props) => {
  const { handleLogout, user } = props;
  const { id, name, displayName, email, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
     handleLogout();
     alert('Session has ended. Please login to continue.');
  }
  
  const modalBody = () => {
    if (user) {
      return (
      <dl>
        <dt>Full Name</dt>
          <dd>{name}</dd>
        <dt>Display Name</dt>
          <dd>{displayName}</dd>
        <dt>Email</dt>
          <dd>{email}</dd>
        <dt>User ID</dt>
          <dd>{id}</dd>
      </dl>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }

   const errorDiv = () => {
      return (
        <div>
           <h3>Please <Link to="/login">login</Link> to view this page</h3>
        </div>
      );
   };
   
   return (
    <Modal cancelButton header={<h1>Account</h1>}>
      { user ? modalBody() : errorDiv() }
    </Modal>
   );

}

export default Profile;