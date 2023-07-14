import React from 'react';
import TeacherData from '../../../components/page_components/teacherData/TeacherData';
import AdminLayout from '../../../layout/AdminLayout';

const Teacher = () => {
  return (
    <AdminLayout pageName={"Teachers"}>
      <TeacherData/>
    </AdminLayout>
  );
};

export default Teacher;