import React from "react";
import ClassesSec from "../../components/page_components/classesSec/ClassesSec";
import GlobalLayout from "../../layout/GlobalLayout";
import StudentClassroomList from "../../components/page_components/StudentclassRoomlist";

const Classes = () => {
  return (
    <GlobalLayout pageName={"All Classes"} body={<StudentClassroomList />} />
  );
};

export default Classes;
