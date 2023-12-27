import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";

const isAuthenticated = (myUser) => {
  if (myUser) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = ({ element }) => {
  const { myUser } = useUserContext();
  return isAuthenticated(myUser) ? element : <Navigate to="/" replace={true} />;
};
export default PrivateRoute;
