import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { serverAddress } from "../../../data/serverAddress";

const AdminFeesForm = ({ setStudentInfo }) => {
  const inputDivClass = `flex-grow flex gap-3 border border-gray-300 rounded-lg overflow-hidden`;

  const studentIdRef = useRef(null);
  const amountRef = useRef(null);

  const getStudentInfo = () => {
    const studentId = studentIdRef.current.value;

    if (studentId.length === null || studentId.trim() === "") return;

    const url = `${serverAddress}/get-fees/${studentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setStudentInfo(res.data));
  };

  return (
    <div className="bg-white col-span-2 p-8 rounded-xl">
      <h1 className="text-lg font-semibold mb-3">Make Payment</h1>
      {/* id */}
      <div className={`${inputDivClass}`}>
        <div className="py-2 pl-5 flex-grow center--y gap-3">
          {/* label */}
          <label htmlFor={"student-id"}>
            <FaUserGraduate size={25} />
          </label>
          {/* divider */}
          <span className="w-[2px] bg-gray-300">&nbsp;</span>
          {/* input */}
          <input
            ref={studentIdRef}
            id={"student-id"}
            className="outline-none w-full"
            type={"text"}
            placeholder={"Input Student Id"}
          />
        </div>
        <div>
          <button onClick={getStudentInfo} className="bg-gray-400 block px-2 text-white h-full">
            <IoIosArrowForward size={25} />
          </button>
        </div>
      </div>

      {/* amount */}
      <div className="mt-4 center--y gap-5">
        <div className={`${inputDivClass} py-2 pl-5 center--y`}>
          {/* label */}
          <label htmlFor={"How much? "}>
            <BsFillCreditCard2BackFill size={25} />
          </label>
          {/* divider */}
          <span className="w-[2px] bg-gray-300">&nbsp;</span>
          {/* input */}
          <input
            ref={amountRef}
            id={"student-id"}
            className="outline-none w-full"
            type={"text"}
            placeholder={"Input Student Id"}
          />
        </div>
        {/* submit button */}
        <button className="px-5 py-2 bg-primary-500 rounded-lg text-white animation hover:bg-primary-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminFeesForm;
