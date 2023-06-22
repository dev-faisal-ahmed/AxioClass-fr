import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { useParams } from "react-router-dom";
import { serverAddress } from "../../../data/serverAddress";
import { dpStyle } from "../../../utils/helper";
import ProfileIcon from "../../../components/shared/profile_icon/ProfileIcon";
import { HorizontalLine } from "../../../components/shared/UIHelper";
import { useReactToPrint } from "react-to-print";

const StudentDocumentPdf = () => {
  const { id } = useParams();
  const [stdInfo, setStdInfo] = useState({});
  const documentRef = useRef(null);

  // fetching data
  useEffect(() => {
    const url = `${serverAddress}/get-student/document/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) setStdInfo(res?.data);
      });
  }, [id]);

  const downloadDocument = useReactToPrint({
    content: () => documentRef.current,
    documentTitle: "info " + stdInfo?.id,
  });

  if (!stdInfo) return null;
  if (Object.keys(stdInfo).length === 0) return null;

  return (
    <AdminLayout pageName={"Student's Document"}>
      <section
        ref={documentRef}
        className="bg-white rounded-xl mt-10 w-[450px] mx-auto overflow-hidden border-2 border-[#4D44B5]"
      >
        <div className="bg-white rounded-xl">
          <div className="bg-[#4D44B5] h-[150px] rounded-b-[50%]"></div>
          <div className="h-[75px] relative">
            <ProfileIcon img={stdInfo.image} size={"150px"} style={dpStyle} />
          </div>
        </div>
        <div className="w-fit mx-auto py-5">
          <h1 className="text-2xl font-semibold mb-5 text-center">{stdInfo.name}</h1>
          {/* <p className="text-center text-gray-500 mb-5">Dept of CSE</p> */}
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Department of {stdInfo.dept}</p>
            <p className="font-semibold">ID : {stdInfo.id}</p>
            <p className="font-semibold">Intake : {stdInfo.intake}</p>
            <p className="font-semibold">Phone : {stdInfo.phone}</p>
            <p className="font-semibold">Email : {stdInfo.email}</p>
          </div>
        </div>
        <HorizontalLine className={"bg-[#4D44B5] h-[5px] mb-1"} />
        <div className="bg-[#4D44B5] text-center text-white py-2">
          <p className="font-semibold mb-1">Password : {stdInfo.password} </p>
          <p className="text-xs"> (You must change your password)</p>
        </div>
      </section>
      <button onClick={downloadDocument} className="button-primary mt-8 block mx-auto">
        Download
      </button>
    </AdminLayout>
  );
};

export default StudentDocumentPdf;
