import React from "react";
import ProfileIcon from "../../shared/profile_icon/ProfileIcon";
import { HorizontalLine } from "../../shared/UIHelper";

const StudentDocument = ({ stdData }) => {
  if (!stdData) return null;

  const { name, dept, intake, id, password, image } = stdData;

  const dpStyle = {
    border: "10px solid white",
    position: "absolute",
    top: "-100%",
    left: "50%",
    transform: "translate(-50%)",
  };
  return (
    <section className="bg-white rounded-xl w-[450px] mx-auto">
      <div className="bg-white rounded-xl">
        <div className="bg-[#4D44B5] h-[150px]  rounded-t-xl rounded-b-[50%]"></div>
        <div className="h-[75px] relative">
          <ProfileIcon img={image} size={"150px"} style={dpStyle} />
        </div>
      </div>
      <div className="w-fit mx-auto py-5">
        <h1 className="text-2xl font-semibold mb-5 text-center">{name}</h1>
        {/* <p className="text-center text-gray-500 mb-5">Dept of CSE</p> */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Department of {dept}</p>
          <p className="font-semibold">ID : {id}</p>
          <p className="font-semibold">Intake : {intake}</p>
        </div>
      </div>
      <HorizontalLine className={"bg-[#4D44B5] h-[5px] mb-1"} />
      <div className="bg-[#4D44B5] text-center text-white py-2">
        <p className="font-semibold mb-1">Password : {password} </p>
        <p className="text-xs"> (You must change your password)</p>
      </div>
    </section>
  );
};

export default StudentDocument;
