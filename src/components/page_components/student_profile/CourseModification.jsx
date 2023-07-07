import React, { useContext } from "react";
import { studentIdContext } from "../../../context_api/StudentIdProvider";
import { serverAddress } from "../../../data/serverAddress";
import { putReq } from "../../../utils/putReq";
import useGetStudent from "../../../hooks/students/useGetStudent";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";

const CourseModification = ({ setModalState }) => {
  const { studentId } = useContext(studentIdContext);
  const { refetch, studentInfo } = useGetStudent(studentId);

  // modifying courses
  const modifyCourse = () => {
    if (!studentInfo.registered) {
      toast.error("You are not registered yet", toastConfig);
      setModalState(false);
      return;
    }

    const url = `${serverAddress}/modification/course`;
    fetch(url, putReq({ id: studentId }))
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          toast.success(res.msg, toastConfig);
          refetch();
        } else {
          toast.error(res.msg, toastConfig);
        }
      });
    setModalState(false);
  };

  return (
    <div className="flex gap-2 justify-end">
      <button
        onClick={() => setModalState(false)}
        className="px-5 py-1 animation rounded-md hover:bg-gray-400 hover:text-white"
      >
        Cancel
      </button>
      <button
        onClick={modifyCourse}
        className={`bg-primary-600 text-white px-5 py-1 rounded-md border-2 border-primary-600 hover:bg-transparent hover:text-primary-600 animation`}
      >
        Confirm
      </button>
    </div>
  );
};

export default CourseModification;
