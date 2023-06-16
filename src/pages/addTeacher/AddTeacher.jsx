import React from "react";  
import AdminLayout from "../../layout/AdminLayout";
import AddTeacherData from "../../components/page_components/addTeacherData/AddTeacherData";


const AddTeacher = () => {
  return (
      <AdminLayout pageName={"Add Teacher"}>
        <AddTeacherData/>
      </AdminLayout>
  );
};

export default AddTeacher;
