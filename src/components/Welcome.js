import React from 'react';
import { Redirect } from 'react-router-dom';

const Welcome = (props) => {
  if (props.user) return <Redirect to="/dashboard" />
  
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

export default Welcome;