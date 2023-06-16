import React from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import SumOfStudent from '../../../components/page_components/sumOfAddStudent/SumOfStudent';
import AddStudentData from '../../../components/page_components/addStudentData/AddStudentData';

const AddStudent = () => {
  return (
    <AdminLayout pageName={"Add Student"}>
      {/* <SumOfStudent/> */}
      <AddStudentData/>
    </AdminLayout>
  );
};

export default AddStudent;