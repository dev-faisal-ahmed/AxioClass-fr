import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { serverAddress } from "../../../data/serverAddress";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";
import { postReq } from "../../../utils/postReq";

const AdminFeesForm = ({ setStudentInfo, setPaymentInfo }) => {
  const inputDivClass = `flex-grow flex gap-3 border border-gray-300 rounded-lg overflow-hidden`;

  const studentIdRef = useRef(null);
  const amountRef = useRef(null);

  const getStudentInfo = () => {
    const studentId = studentIdRef.current.value;

    if (studentId.length === null || studentId.trim() === "") return;

    const url = `${serverAddress}/payment/student/${studentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) setStudentInfo(res.data);
        else toast.error(res.msg, toastConfig);
      });
  };

  const payment = async () => {
    const studentId = studentIdRef.current.value;
    let amount = +amountRef.current.value; // converting the the amount into number
    if (amount < 0) amount *= -1;

    if (studentId === null || studentId.trim() === "") return;

    // api calling to pay
    const url = `${serverAddress}/payment`;
    fetch(url, postReq({ id: studentId, amount }))
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setPaymentInfo(res.data);
          setStudentInfo({});
        } else {
          toast.error(res.msg, toastConfig);
        }
      });
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
            onBlur={getStudentInfo}
            ref={studentIdRef}
            id={"student-id"}
            className="outline-none w-full"
            type={"text"}
            placeholder={"Input Student Id"}
          />
        </div>
      </div>

      {/* amount */}
      <div className="mt-4 center--y gap-5">
        <div className={`${inputDivClass} py-2 pl-5 center--y`}>
          {/* label */}
          <label htmlFor={"amount"}>
            <BsFillCreditCard2BackFill size={25} />
          </label>
          {/* divider */}
          <span className="w-[2px] bg-gray-300">&nbsp;</span>
          {/* input */}
          <input
            ref={amountRef}
            id={"amount"}
            className="outline-none w-full"
            type={"number"}
            placeholder={"How much?"}
          />
        </div>
        {/* submit button */}
        <button
          onClick={payment}
          className="px-5 py-2 bg-primary-500 rounded-lg text-white animation hover:bg-primary-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminFeesForm;
