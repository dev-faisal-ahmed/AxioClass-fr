import React from "react";
import { useParams } from "react-router-dom";
import GlobalLayout from "../../layout/GlobalLayout";
import ClassroomFeeds from "../../components/page_components/classroom/ClassroomFeeds";

const ClassroomForStudent = () => {
  const params = useParams();
  const classCode = params.id;
  return (
    <GlobalLayout pageName={classCode}>
      <ClassroomFeeds classCodeID={classCode} />
    </GlobalLayout>
  );
};

export default ClassroomForStudent;
