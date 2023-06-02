import React from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { user } from "../../../fake_data/user";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";

const ProfileBox = () => {
  const dpStyle = { border: "10px solid white", position: "absolute", top: "-100%", left: "32px" };
  return (
    <section>
      <div className="bg-white rounded-xl ">
        <div className="bg-[#4D44B5] h-[250px] rounded-t-xl"></div>
        <div className="h-[100px] relative">
          <ProfileIcon img={user.img} size={"200px"} style={dpStyle} />
        </div>
        <div className="px-8 pb-8 pt-4">
          <h1 className="text-2xl font-bold text-primary-900">{user.userName}</h1>
          <p className="mt-2 text-gray-400">
            Dept of {user.dept} &nbsp; || &nbsp; Intake: {user.intake}
          </p>
          <div className="mt-8 flex items-center gap-8">
            {/* address */}
            <div className="flex gap-2">
              <MdLocationOn size={25} /> <span className="text-gray-400">{user.address}</span>
            </div>
            {/* phone */}
            <div className="flex gap-2">
              <FaPhone size={20} /> <span className="text-gray-400">{user.phone}</span>
            </div>
            <div className="flex gap-2">
              <HiMail size={25} /> <span className="text-gray-400">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBox;
