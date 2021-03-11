import React from 'react';
import { Link } from 'react-router-dom';

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

   const userData = user ?
   (<div>
       <h1>Profile</h1>
       <p>Full Name: {name}</p>
       <p>Display Name: {displayName}</p>
       <p>Email: {email}</p>
       <p>ID: {id}</p>
   </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;