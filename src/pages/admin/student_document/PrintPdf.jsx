import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import StudentDocument from "../../../components/page_components/student_document_page/StudentDocument";
import { useParams } from "react-router-dom";
import { serverAddress } from "../../../data/serverAddress";

const PrintPdf = () => {
  const { id } = useParams();
  const [stdInfo, setStdInfo] = useState({});

  // fetching data
  useEffect(() => {
    const url = `${serverAddress}/get-student/document/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setStdInfo(res.data);
      });
  }, [id]);

  return (
    <AdminLayout pageName={"Student's Document"}>
      <StudentDocument stdData={stdInfo} />
    </AdminLayout>
  );
};

export default PrintPdf;
