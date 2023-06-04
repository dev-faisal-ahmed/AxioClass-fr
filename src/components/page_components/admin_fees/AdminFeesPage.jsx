import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { GiWallet } from "react-icons/gi";
import { FaUserGraduate, FaWallet } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiFillMoneyCollect } from "react-icons/ai";
import { HiWallet } from "react-icons/hi2";
import { IoMdWallet } from "react-icons/io";
import FeesInput from "./FeesInput";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { user } from "../../../fake_data/user";

const AdminFeesPage = () => {
  const [stdId, setStdId] = useState("");

  // ui function
  // show basic stat at top of the page
  const feesBox = ({ icon, title, amount, bgColor, textColor, iconBg }) => {
    return (
      <div className={`${bgColor ? bgColor : "bg-white"} p-8 rounded-xl`}>
        <span className={`w-16 h-16 rounded-full center--xy ${iconBg ? iconBg : "bg-gray-200"}`}>
          {icon}
        </span>
        <p className={`mt-5 text-gray-500 ${textColor}`}>{title}</p>
        <h1 className={`text-2xl font-semibold mt-2 ${textColor}`}>{amount} &#x9F3;</h1>
      </div>
    );
  };

  // show financial stat for student
  const feesBoxStd = ({ icon, title, amount, textColor }) => {
    return (
      <div
        className={`center--y gap-4 p-5 rounded-lg w-full min-w-[150px] bg-white-300 border border-gray-200`}
      >
        <div className="text-primary-500 p-3 bg-primary-100 rounded-lg">{icon}</div>
        <div>
          <p className={`"text-gray-700`}>{title}</p>
          <h1 className={`text-xl font-semibold mt-2`}>{amount} &#x9F3;</h1>
        </div>
      </div>
    );
    // return (
    //   <div className="text-center w-full">
    //     <p className="text-sm mb-2 text-gray-400">{title}</p>
    //     <p className={`${bgColor} ${textColor} rounded-md py-2 w-full`}>{amount} &#x9F3;</p>
    //   </div>
    // );
  };

  // show selected student info
  const studentInfo = ({ img, name, dept, intake, id }) => {
    const dpStyle = {
      border: "10px solid white",
      position: "absolute",
      top: "-100%",
      left: "50%",
      transform: "translate(-50%)",
    };

    return (
      <>
        <div className="bg-gray-200 h-[200px] rounded-t-xl"></div>
        <div className="h-[100px] relative">
          <ProfileIcon img={img} size={"200px"} style={dpStyle} />
        </div>
        {/* student basic info */}
        <div className="px-8 pb-8 pt-4">
          <div className="w-fit mx-auto">
            <h1 className="text-2xl font-bold text-primary-900 text-center">{name}</h1>
            <p className="mt-2 text-gray-500">
              Dept of {dept} &nbsp; || &nbsp; Intake: {intake} &nbsp;|| &nbsp; ID : {id}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-4 gap-5 mx-auto w-fit">
            {feesBoxStd({
              icon: <FaWallet size={25} />,
              title: "Total Demand",
              amount: 23000,
              bgColor: "bg-primary-500",
              textColor: "text-white",
            })}
            {feesBoxStd({
              icon: <GiWallet size={25} />,
              title: "Total Paid",
              amount: 12000,
              bgColor: "bg-gray-200",
            })}
            {feesBoxStd({
              icon: <HiWallet size={25} />,
              title: "Total Waiver",
              amount: 5000,
              bgColor: "bg-gray-200",
            })}
            {feesBoxStd({
              icon: <IoMdWallet size={25} />,
              title: "Total Due",
              amount: 6000,
              bgColor: "bg-gray-200",
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <AdminLayout pageName={"Fees"}>
      <>
        <section className="grid grid-cols-4 gap-8">
          {feesBox({
            icon: <GiWallet className="text-white" size={35} />,
            bgColor: "bg-primary-600",
            iconBg: "bg-primary-400",
            textColor: "text-white",
            title: "Total Paid",
            amount: (85000).toLocaleString("en-us"),
          })}
          {feesBox({
            icon: <AiFillMoneyCollect size={35} />,
            title: "Total Due",
            amount: (51000).toLocaleString("en-us"),
          })}
          {/* fees payment */}
          <div className="bg-white col-span-2 p-8 rounded-xl">
            <h1 className="text-lg font-semibold mb-3">Make Payment</h1>
            <FeesInput
              id={"std-id"}
              placeholder={"Input Student Id"}
              type={"number"}
              icon={<FaUserGraduate size={25} />}
            />
            <div className="mt-4 center--y gap-5">
              <FeesInput
                id={"amount"}
                placeholder={"How how much?"}
                type={"number"}
                icon={<BsFillCreditCard2BackFill size={25} />}
              />
              <button className="px-5 py-2 bg-primary-500 rounded-lg text-white animation hover:bg-primary-700">
                Submit
              </button>
            </div>
          </div>
        </section>
        {/* student info */}
        <section className="bg-white mt-10 rounded-lg">
          {studentInfo({
            img: user.img,
            id: user.id,
            dept: user.dept,
            intake: user.intake,
            name: user.userName,
          })}
        </section>
      </>
    </AdminLayout>
  );
};
export default AdminFeesPage;
