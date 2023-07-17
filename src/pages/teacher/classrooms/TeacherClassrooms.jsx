import React from "react";
import TeacherLayout from "../../../layout/TeacherLayout";
import TeacherClassroomList from "../../../components/page_components/teacher_classrooms/TeacherClassroomList";

const TeacherClassrooms = () => {
  return (
    <TeacherLayout pageName={"Classroom list"}>
      <TeacherClassroomList />
    </TeacherLayout>
  );
};

export default TeacherClassrooms;
