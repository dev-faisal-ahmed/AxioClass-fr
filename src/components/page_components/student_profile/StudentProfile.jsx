import React from "react";
import AdminLayout from "../../../layout/AdminLayout";
import Cover from "./cover";

const StudentProfile = () => {
  return (
    <AdminLayout
      pageName={"Student Detail"}
      body={
        <>
          <div className="bg-white rounded-xl overflow-hidden">
            <Cover />
          </div>
        </>
      }
    />
  );
};

export default StudentProfile;
