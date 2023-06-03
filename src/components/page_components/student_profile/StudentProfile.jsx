import React from "react";
import AdminLayout from "../../../layout/AdminLayout";
import ProfileBox from "./ProfileBox";

const StudentProfile = () => {
  return (
    <AdminLayout
      pageName={"Student Detail"}
      body={
        <>
          <ProfileBox />
        </>
      }
    />
  );
};

export default StudentProfile;