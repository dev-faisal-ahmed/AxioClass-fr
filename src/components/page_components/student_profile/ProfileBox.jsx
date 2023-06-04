import React from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { user } from "../../../fake_data/user";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import StudentModification from "./StudentModification";
import { Margin } from "../../shared/UIHelper";

const ProfileBox = () => {
  const dpStyle = { border: "10px solid white", position: "absolute", top: "-100%", left: "32px" };
  // ui functions

  const showResult = ({ board, year, result, examName }) => {
    return (
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-5">
        <span className="block w-2 h-2 rounded-full bg-black"></span>
        <p className="font-semibold center--y gap-5">
          {examName},{board} Board ({year})
        </p>
        <p className="col-start-2 text-gray-500">Result: {result}</p>
      </div>
    );
  };

  const iconBox = ({ icon, data }) => {
    return (
      <div className="flex gap-2">
        {icon} <span className="text-gray-500">{data}</span>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="bg-[#4D44B5] h-[200px] rounded-t-xl"></div>
        <div className="h-[100px] relative">
          <ProfileIcon img={user.img} size={"200px"} style={dpStyle} />
        </div>

        <div className="flex justify-between px-8 pb-8 pt-4">
          <div>
            <h1 className="text-2xl font-bold text-primary-900">{user.userName}</h1>
            <p className="mt-2 text-gray-500">
              Dept of {user.dept} &nbsp; || &nbsp; Intake: {user.intake} &nbsp;|| &nbsp; ID :{" "}
              {user.id}
            </p>
          </div>
          {/* student modification */}
          <div className="flex-grow">
            <StudentModification />
          </div>
        </div>
      </div>

      <div className="p-8 bg-white mt-8 rounded-xl">
        {/* financial information */}
        <h1 className="text-xl font-semibold mb-3">Financial Information.</h1>
        <p className="">
          <span className="font-semibold">Demand : </span>
          <span className="text-gray-500">{user.demand}&#x9F3;</span> &nbsp; || &nbsp;
          <span className="font-semibold">Paid : </span>
          <span className="text-gray-500">{user.paid}&#x9F3;</span> &nbsp; || &nbsp;
          <span className="font-semibold">Waiver : </span>
          <span className="text-gray-500">{user.waiver}&#x9F3;</span> &nbsp; || &nbsp;
          <span className="font-semibold">Due : </span>
          <span className="text-gray-500">{user.due}&#x9F3;</span>
        </p>
        {/* academic information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Academic Information.</h1>
        <p className="">
          <span className="font-semibold">Completed Semester : </span>
          <span className="text-gray-500">{user.completedSemester}</span> &nbsp; || &nbsp;
          <span className="font-semibold">CGPA : </span>
          <span className="text-gray-500">{user.cgpa}</span>
        </p>
        {/* personal information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Personal Information.</h1>
        <div className="flex items-center gap-8">
          {iconBox({ icon: <MdLocationOn size={25} />, data: user.address })}
          {iconBox({ icon: <FaPhone size={20} />, data: user.phone })}
          {iconBox({ icon: <HiMail size={25} />, data: user.email })}
        </div>

        {/* Guardian information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Guardian Information.</h1>
        <div className="flex items-center gap-8">
          {iconBox({ icon: <FiUser size={25} />, data: user.guardian.name })}
          {iconBox({ icon: <BsTelephone size={20} />, data: user.guardian.phone })}
        </div>
        {/* Education Information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Education.</h1>
        {/* ssc */}
        {showResult({
          examName: "SSC",
          board: user.education.ssc.board,
          result: user.education.ssc.result,
          year: user.education.ssc.year,
        })}
        <Margin className={"my-2"} />
        {showResult({
          examName: "HSC",
          board: user.education.hsc.board,
          result: user.education.hsc.result,
          year: user.education.hsc.year,
        })}
      </div>
    </>
  );
};

export default ProfileBox;
