import React from "react";
import { FaUserGraduate, FaUserSecret } from "react-icons/fa";
import { RiBookReadFill, RiBookFill } from "react-icons/ri";
const StatAdmin = () => {
  // function
  const statBox = ({ icon, title, amount, color }) => {
    color = color || "bg-primary-500";
    return (
      <div className="flex items-center gap-5">
        <div className={`w-16 h-16 center--xy rounded-full text-white ${color}`}>{icon}</div>
        <div>
          <span className="text-gray-400">{title}</span>
          <h2 className="text-3xl font-semibold mt-2">{amount}</h2>
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-4 place-items-center bg-white p-8 rounded-lg ">
      {statBox({ icon: <FaUserGraduate size={30} />, title: "Students", amount: 5000 })}
      {statBox({
        icon: <FaUserSecret size={30} />,
        title: "Teachers",
        amount: 250,
        color: "bg-orange-500",
      })}
      {statBox({
        icon: <RiBookReadFill size={30} />,
        title: "Department",
        amount: 4,
        color: "bg-red-500",
      })}
      {statBox({
        icon: <RiBookFill size={30} />,
        title: "Courses",
        amount: 56,
        color: "bg-blue-500",
      })}
    </div>
  );
};

export default StatAdmin;
