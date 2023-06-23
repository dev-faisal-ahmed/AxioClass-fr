import React from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import StudentModification from "./StudentModification";
import { Margin } from "../../shared/UIHelper";

const ProfileBox = ({ studentInfo }) => {
  const dpStyle = { border: "10px solid white", position: "absolute", top: "-100%", left: "32px" };
  // ui functions
  const { basicInfo, financialInfo, academicInfo, personalInfo, guardianInfo, education } =
    studentInfo;

  const showResult = ({ board, year, result, examName }) => {
    return (
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-5">
        <span className="block w-2 h-2 rounded-full bg-black"></span>
        <p className="font-semibold center--y gap-5">
          {examName},&nbsp;{board} Board ({year})
        </p>
        <p className="col-start-2 text-gray-500">Result: {result}</p>
      </div>
    );
  };

  const iconBox = ({ icon, data }) => {
    return (
      <div className="center--y gap-2">
        {icon} <span className="text-gray-500">{data}</span>
      </div>
    );
  };

  const spanBox = ({ title, value, taka }) => {
    return (
      <>
        <span className="font-semibold">{title} : </span>
        {!taka && <span className="text-gray-500">{value} </span>}
        {taka && <span className="text-gray-500">{value} &#x9F3; </span>}
      </>
    );
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="bg-[#4D44B5] h-[200px] rounded-t-xl"></div>
        <div className="h-[100px] relative">
          <ProfileIcon img={basicInfo?.image} size={"200px"} style={dpStyle} />
        </div>

        <div className="flex justify-between px-8 pb-8 pt-4">
          <div>
            <h1 className="text-2xl font-bold text-primary-900">{basicInfo?.name}</h1>
            <p className="mt-2 text-gray-500">
              Dept of {basicInfo?.dept} &nbsp; || &nbsp; Intake: {basicInfo?.intake} &nbsp;|| &nbsp;
              ID : {basicInfo?.id}
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
          {spanBox({ title: "Demand", value: financialInfo?.demand, taka: true })}
          &nbsp; || &nbsp;
          {spanBox({ title: "Paid", value: financialInfo?.paid, taka: true })}
          {/* &nbsp; || &nbsp;
          {spanBox({ title: "Waiver", value: financialInfo?.waiver, taka: true })} */}
          &nbsp; || &nbsp;
          {spanBox({
            title: "Due",
            value: financialInfo.demand - financialInfo.paid,
            taka: true,
          })}
        </p>

        {/* academic information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Academic Information.</h1>
        <p className="">
          {spanBox({
            title: "Completed Semester",
            value: academicInfo?.completedSemester ? academicInfo?.completedSemester : 0,
          })}
          &nbsp; || &nbsp;
          {spanBox({
            title: "Cgpa",
            value: academicInfo?.cgpa ? academicInfo?.cgpa : "N/A",
          })}
        </p>

        {/* personal information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Personal Information.</h1>
        <div className="flex items-center gap-8">
          {iconBox({ icon: <MdLocationOn size={25} />, data: personalInfo?.address })}
          {iconBox({ icon: <FaPhone size={20} />, data: personalInfo?.phone })}
          {iconBox({ icon: <HiMail size={25} />, data: personalInfo?.email })}
        </div>

        {/* Guardian information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Guardian Information.</h1>
        <div className="flex items-center gap-8">
          {iconBox({ icon: <FiUser size={25} />, data: guardianInfo?.name })}
          {iconBox({ icon: <BsTelephone size={20} />, data: guardianInfo?.phone })}
        </div>
        {/* Education Information */}
        <h1 className="text-xl font-semibold mt-8 mb-3">Education.</h1>
        {/* ssc */}
        {showResult({
          examName: "SSC",
          board: education.ssc.board,
          result: education.ssc.result,
          year: education.ssc.year,
        })}
        <Margin className={"my-2"} />
        {showResult({
          examName: "HSC",
          board: education.hsc.board,
          result: education.hsc.result,
          year: education.hsc.year,
        })}
      </div>
    </>
  );
};

export default ProfileBox;
