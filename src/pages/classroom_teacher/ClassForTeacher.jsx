import { useParams } from "react-router-dom";
import ClassroomFeeds from "../../components/page_components/classroom/ClassroomFeeds";
import TeacherLayout from "../../layout/TeacherLayout";

const ClassForTeacher = () => {
  const params = useParams();
  const classCode = params.id;
  console.log(classCode);
  return (
    <TeacherLayout pageName={classCode}>
      <ClassroomFeeds classCodeID={classCode} />;
    </TeacherLayout>
  );
};

export default ClassForTeacher;
