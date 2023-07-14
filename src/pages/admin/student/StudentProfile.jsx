import { useParams } from "react-router-dom";
import AdminLayout from "../../../layout/AdminLayout";
import ProfileBox from "../../../components/page_components/student_profile/ProfileBox";
import useGetStudent from "../../../hooks/students/useGetStudent";
import { useContext, useEffect } from "react";
import { studentIdContext } from "../../../context_api/StudentIdProvider";

const StudentProfile = () => {
  const { id } = useParams();
  const { updateStudentId } = useContext(studentIdContext);
  updateStudentId(id);
  const { studentInfo, refetch } = useGetStudent(id);

  // jsx
  return (
    <AdminLayout pageName={"Student Detail"}>
      {studentInfo && Object.keys(studentInfo).length !== 0 ? (
        <ProfileBox studentInfo={studentInfo} />
      ) : (
        <h1 className="font-semibold">No Data Found</h1>
      )}
    </AdminLayout>
  );
};

export default StudentProfile;
