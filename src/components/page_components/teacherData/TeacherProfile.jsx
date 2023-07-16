import React, { useContext } from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import { useParams } from 'react-router-dom';
import { TeacherIdContext } from '../../../context_api/TeacherIdProvider';
import useGetTeacher from '../../../hooks/teacher/useGetStudent';
import TeacherProfileBox from './TeacherProfileBox';

const TeacherProfile = () => {
  const { id } = useParams();
  const { updateTeacherId } = useContext(TeacherIdContext);
  updateTeacherId(id);
  const { teacherInfo, refetch } = useGetTeacher(id);

  return (
    <AdminLayout pageName={"teacher Detail"}>
      {teacherInfo && Object.keys(teacherInfo).length !== 0 ? (
        // <div>
        //   meaw
        // </div>
        <TeacherProfileBox teacherInfo={teacherInfo} />
      ) : (
        <h1 className="font-semibold">No Data Found</h1>
      )}
    </AdminLayout>
  );
};

export default TeacherProfile;