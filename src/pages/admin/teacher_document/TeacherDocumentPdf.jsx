import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { useParams } from "react-router-dom";
import { serverAddress } from "../../../data/serverAddress";
import ProfileIcon from "../../../components/shared/profile_icon/ProfileIcon";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";
import { dpStyle } from "../../../utils/helper";
import { HorizontalLine } from "../../../components/shared/UIHelper";
import { useReactToPrint } from "react-to-print";

const TeacherDocumentPdf = () => {
  const { id } = useParams();
  const [teacherInfo, setTeacherInfo] = useState({});
  // ref
  const docRef = useRef(null);
  // side effect
  useEffect(() => {
    const url = `${serverAddress}/get-teacher/document/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setTeacherInfo(res.data);
        } else {
          toast.error(res.msg, toastConfig);
        }
      });
  }, [id]);

  // functions

  const downloadPdf = useReactToPrint({
    content: () => docRef.current,
    documentTitle: "Teacher Info " + teacherInfo.id,
  });

  if (Object.keys(teacherInfo).length === 0) return null;

  return (
    <AdminLayout pageName={"Teacher's Document"}>
      <section className="mt-8">
        <div
          ref={docRef}
          className="bg-white rounded-xl w-[400px] mx-auto mt-10 border-2 border-[#4D44B5] overflow-hidden"
        >
          <div className="bg-white">
            <div className="bg-[#4D44B5] h-[150px] rounded-t-xl rounded-b-[50%]"></div>
            <div className="h-[75px] relative">
              <ProfileIcon img={teacherInfo.image} size={"150px"} style={dpStyle} />
            </div>
          </div>
          <div className="w-fit mx-auto py-5">
            <h1 className="text-2xl font-semibold mb-5 text-center">{teacherInfo.name}</h1>
            {/* <p className="text-center text-gray-500 mb-5">Dept of CSE</p> */}
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Department of {teacherInfo.dept}</p>
              <p className="font-semibold">ID : {teacherInfo.id}</p>
              <p className="font-semibold">Phone : {teacherInfo.phone}</p>
              <p className="font-semibold">Email : {teacherInfo.email}</p>
            </div>
          </div>
          <HorizontalLine className={"bg-[#4D44B5] h-[5px] mb-1"} />
          <div className="bg-[#4D44B5] text-center text-white py-2">
            <p className="font-semibold mb-1">Password : {teacherInfo.password} </p>
            <p className="text-xs"> (You must change your password)</p>
          </div>
        </div>
        <button onClick={downloadPdf} className="button-primary mt-5 mx-auto block">
          Download
        </button>
      </section>
    </AdminLayout>
  );
};

export default TeacherDocumentPdf;
