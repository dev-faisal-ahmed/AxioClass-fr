import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../layout/AdminLayout";
import ProfileBox from "../../../components/page_components/student_profile/ProfileBox";
import { serverAddress } from "../../../data/serverAddress";

const StudentProfile = () => {
  const { key } = useParams();
  const [studentInfo, setStudentInfo] = useState({});

  // fetching data
  useEffect(() => {
    const url = `${serverAddress}/get-student/${key}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setStudentInfo(res.data);
      });
  }, [key]);

  // jsx
  return (
    <AdminLayout pageName={"Student Detail"}>
      <ProfileBox studentInfo={studentInfo} />
    </AdminLayout>
  );
};

export default StudentProfile;
