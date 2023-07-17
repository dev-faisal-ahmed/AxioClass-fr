import React from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
// import StudentModification from "./StudentModification";
import { Margin } from "../../shared/UIHelper";

const TeacherProfileBox = ({ teacherInfo }) => {
  const dpStyle = { border: "10px solid white", position: "absolute", top: "-100%", left: "32px" };
  // ui functions
  const {
    name,
    image,
    dept,
    id,
    address,
    phone,
    email,
    education,
    registered,
  } = teacherInfo;

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
        <ProfileIcon img={image} size={"200px"} style={dpStyle} />
      </div>

      <div className="flex justify-between px-8 pb-8 pt-4">
        <div>
          <h1 className="text-2xl font-bold text-primary-900">{name}</h1>
          <p className="mt-2 text-gray-500">
            Dept of {dept} &nbsp; || &nbsp;
            ID : {id} &nbsp;
          </p>
        </div>

      </div>
    </div>

    <div className="p-8 bg-white mt-8 rounded-xl">

      {/* academic information */}
      <h1 className="text-xl font-semibold mt-8 mb-3">Academic Information.</h1>
      <p className="">
        {spanBox({
          title: "Degree in",
          value: education?.degree ? education?.subject : 0,
        })}
        &nbsp; || &nbsp;
        {spanBox({
          title: "Passing Year",
          value: education?.passingYear || "N/A",
        })}
      </p>

      {/* personal information */}
      <h1 className="text-xl font-semibold mt-8 mb-3">Personal Information.</h1>
      <div className="flex items-center gap-8">
        {iconBox({ icon: <MdLocationOn size={25} />, data: address })}
        {iconBox({ icon: <FaPhone size={20} />, data: phone })}
        {iconBox({ icon: <HiMail size={25} />, data: email })}
      </div>
    </div>
  </>
  );
};

export default TeacherProfileBox;
