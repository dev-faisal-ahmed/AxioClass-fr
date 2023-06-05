import React from "react";
import { getLocalUser } from "../../../utils/localStorage";
import { Navigate } from "react-router-dom";
const LoginProvider = ({ children }) => {
  const { id } = getLocalUser();

  if (!id) {
    // no user send back to the login page
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};

export default LoginProvider;
