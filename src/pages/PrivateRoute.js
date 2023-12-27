import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later

const isAuthenticated = (myUser) => {
  if (myUser) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = ({ element }) => {
  const { user } = useAuth0();
  return isAuthenticated(user) ? element : <Navigate to="/" replace={true} />;
};
export default PrivateRoute;
