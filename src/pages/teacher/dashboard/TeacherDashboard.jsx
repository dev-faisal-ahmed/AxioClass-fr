import React, { useContext } from "react";
import { getLocalUser } from "../../../utils/localStorage";
import TeacherLayout from "../../../layout/TeacherLayout";
import useGetTeacher from "../../../hooks/teacher/useGetStudent";
import TeacherProfileBox from "../../../components/page_components/teacherData/TeacherProfileBox";

const TeacherDashboard = () => {
  const { id } = getLocalUser();
  // const { updateTeacherId } = useContext(TeacherIdContext);
  // updateTeacherId(id);
  const { teacherInfo, refetch } = useGetTeacher(id);

  return (
    <>
      {teacherInfo && Object.keys(teacherInfo).length !== 0 ? (
        // <div>
        //   meaw
        // </div>
        <TeacherProfileBox teacherInfo={teacherInfo} />
      ) : (
        <h1 className="font-semibold">No Data Found</h1>
      )}
    </>
  );
};

export default TeacherDashboard;
