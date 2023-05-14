import { useState } from "react";
import { feesDataSemWise } from "../../../fake_data/feesData";
import { IoWalletSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { AiTwotoneMoneyCollect } from "react-icons/ai";

const FeesSummarySemesterWise = () => {
  const [activeSemester, setActiveSemester] = useState("All");

  // * functions * //

  const summaryBox = ({ title, amount, icon, first }) => {
    return (
      <div
        className={`${
          first ? "bg-gradient-to-br from-[#3D5EC1] to-[#1E41A8] text-white" : "bg-white"
        } p-5 rounded-lg`}
      >
        <div
          className={`${
            first ? "bg-[#5C77C6]" : "bg-blue-50"
          } h-10 w-10 rounded-full  center--xy mb-5`}
        >
          {icon}
        </div>
        <p className={`${first ? "text-white" : "text-gray-500"} font-semibold mb-2`}>{title}</p>
        <h2 className="text-3xl font-semibold">{amount}</h2>
      </div>
    );
  };

  const toggleSemester = (e) => {
    setActiveSemester(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold">Financial Record</h1>
        <select
          onChange={toggleSemester}
          className="bg-white rounded-lg outline-none px-5 py-1"
          name=""
        >
          {Object.keys(feesDataSemWise).map((key, index) => (
            <option key={index} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      {/* fees summary */}
      <div className="grid grid-cols-4 gap-5">
        {summaryBox({
          first: true,
          icon: <IoWalletSharp size={25} />,
          title: "Total Demand",
          amount: feesDataSemWise[activeSemester].demand,
        })}
        {summaryBox({
          icon: <GiReceiveMoney size={25} />,
          title: "Total Waiver",
          amount: feesDataSemWise[activeSemester].waiver,
        })}
        {summaryBox({
          icon: <GiPayMoney size={25} />,
          title: "Total Paid",
          amount: feesDataSemWise[activeSemester].paid,
        })}
        {summaryBox({
          icon: <AiTwotoneMoneyCollect size={25} />,
          title: "Total Due",
          amount: feesDataSemWise[activeSemester].due,
        })}
      </div>
    </>
  );
};

export default FeesSummarySemesterWise;
