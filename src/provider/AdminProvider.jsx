import React from "react";
import { user } from "../fake_data/user";
import Error404 from "../components/shared/Error404";

const AdminProvider = ({ children }) => {
  if (user.role === "admin") return <>{children}</>;
  else return <Error404 />;
};

export default AdminProvider;
