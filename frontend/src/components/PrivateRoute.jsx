import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to if we want to improve this later.
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
