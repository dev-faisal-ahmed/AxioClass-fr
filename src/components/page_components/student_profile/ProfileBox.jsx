import React from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { user } from "../../../fake_data/user";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
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
    <section className="bg-white rounded-xl">
      <div className="bg-[#4D44B5] h-[200px] rounded-t-xl"></div>
      <div className="h-[100px] relative">
        <ProfileIcon img={user.img} size={"200px"} style={dpStyle} />
      </div>
      <div className="px-8 pb-8 pt-4">
        <h1 className="text-2xl font-bold text-primary-900">{user.userName}</h1>
        <p className="mt-2 text-gray-500">
          Dept of {user.dept} &nbsp; || &nbsp; Intake: {user.intake}
        </p>
        <div className="mt-8 flex items-center gap-8">
          {/* address */}
          {iconBox({ icon: <MdLocationOn size={25} />, data: user.address })}
          {/* phone */}
          {iconBox({ icon: <FaPhone size={20} />, data: user.phone })}
          {/* email */}
          {iconBox({ icon: <HiMail size={25} />, data: user.email })}
        </div>
        {/* line */}
        <hr className="block my-5" />
        {/* Guardian information */}
        <h1 className="text-xl font-semibold mt-8 mb-5">Guardian Information.</h1>
        <div className="flex items-center gap-8">
          {iconBox({ icon: <FiUser size={25} />, data: user.guardian.name })}
          {iconBox({ icon: <BsTelephone size={20} />, data: user.guardian.phone })}
        </div>
        {/* Education Information */}
        <h1 className="text-xl font-semibold mt-10 mb-3">Education.</h1>
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
    </section>
  );
};

export default ProfileBox;
