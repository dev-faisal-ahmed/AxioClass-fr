import React from "react";
import { FaWallet } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";

const AdminStudentFeesInfo = ({ img, name, dept, intake, id, demand, paid }) => {
  const dpStyle = {
    border: "10px solid white",
    position: "absolute",
    top: "-100%",
    left: "50%",
    transform: "translate(-50%)",
  };

  const feesBoxStd = ({ icon, title, amount }) => {
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
  };
  return (
    <section className="bg-white mt-10 rounded-lg">
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
        <div className="mt-16 grid grid-cols-3 gap-5 mx-auto w-fit">
          {feesBoxStd({
            icon: <FaWallet size={25} />,
            title: "Total Demand",
            amount: demand,
            bgColor: "bg-primary-500",
            textColor: "text-white",
          })}
          {feesBoxStd({
            icon: <GiWallet size={25} />,
            title: "Total Paid",
            amount: paid,
            bgColor: "bg-gray-200",
          })}
          {feesBoxStd({
            icon: <IoMdWallet size={25} />,
            title: "Total Due",
            amount: demand - paid,
            bgColor: "bg-gray-200",
          })}
        </div>
      </div>
    </section>
  );
};

export default AdminStudentFeesInfo;
