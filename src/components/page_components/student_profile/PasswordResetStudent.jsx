import React, { useContext, useEffect, useState } from "react";
import { studentIdContext } from "../../../context_api/StudentIdProvider";
import { serverAddress } from "../../../data/serverAddress";
import { putReq } from "../../../utils/putReq";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";
import PasswordResetPdf from "./PasswordResetPdf";

const PasswordResetStudent = ({ setPassModalTitle, setModalState }) => {
  const [confirmed, setConfirmed] = useState();
  const { studentId } = useContext(studentIdContext);
  const [pdfData, setPdfData] = useState({});

  useEffect(() => {
    setPassModalTitle("Please confirm to reset password");
  }, []);

  const passReset = () => {
    setConfirmed(true);
    setPassModalTitle("Your Password");
    const url = `${serverAddress}/modification/password`;
    fetch(url, putReq({ id: studentId, role: "student" }))
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setPdfData(res.data);
          console.log(res.data);
        } else {
          toast.error(res.msg, toastConfig);
        }
      });
  };
  return (
    <>
      {confirmed ? (
        <PasswordResetPdf
          image={pdfData.image}
          name={pdfData.name}
          id={pdfData.id}
          password={pdfData.password}
        />
      ) : (
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => setModalState(false)}
            className="px-5 py-1 animation rounded-md hover:bg-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={passReset}
            className={`bg-primary-600 text-white px-5 py-1 rounded-md border-2 border-primary-600 hover:bg-transparent hover:text-primary-600 animation`}
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
};

export default PasswordResetStudent;
