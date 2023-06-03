import React from "react";
import AdminProvider from "../../../provider/AdminProvider";
import AdminLayout from "../../../layout/AdminLayout";

export const AdminFees = () => {
  return (
    <AdminProvider>
      <AdminLayout body={"Fees Admin"} />
    </AdminProvider>
  );
};
