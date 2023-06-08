import React from "react";
import { GiWallet } from "react-icons/gi";
import { AiFillMoneyCollect } from "react-icons/ai";

const AdminFeesStat = () => {
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
  return (
    <>
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
    </>
  );
};

export default AdminFeesStat;
