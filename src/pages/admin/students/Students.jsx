import React from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import StudentData from '../../../components/page_components/studentData/StudentData';

const Students = () => {
  return (
    <AdminLayout pageName={"Students"}>
      {/* <SumOfStudent/> */}
      <StudentData/>
    </AdminLayout>
  );
};

export default Students;