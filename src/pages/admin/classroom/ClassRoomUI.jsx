import React from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { useParams } from "react-router-dom";
import ClassroomFeeds from "../../../components/page_components/classroom/ClassroomFeeds";

const ClassRoomUI = () => {
  const classCode = useParams();

  console.log(classCode);

  return (
    <AdminLayout pageName={classCode.id}>
      <ClassroomFeeds classCodeID={classCode.id} />
    </AdminLayout>
  );
};

export default ClassRoomUI;
