import { useState } from "react";
import { feesDataSemWise } from "../../../fake_data/feesData";

const FeesSummarySemesterWise = () => {
  const [activeSemester, setActiveSemester] = useState("All");

  // * functions * //

  const summaryBox = ({ title, amount, bgClass }) => {
    return (
      <div className={`${bgClass} p-5 rounded-lg`}>
        <p className="text-gray-500 font-semibold mb-3">{title}</p>
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
          title: "Total Demand",
          amount: feesDataSemWise[activeSemester].demand,
          bgClass: "bg-green-100",
        })}
        {summaryBox({
          title: "Total Waiver",
          amount: feesDataSemWise[activeSemester].waiver,
          bgClass: "bg-orange-100",
        })}
        {summaryBox({
          title: "Total Paid",
          amount: feesDataSemWise[activeSemester].paid,
          bgClass: "bg-blue-100",
        })}
        {summaryBox({
          title: "Total Due",
          amount: feesDataSemWise[activeSemester].due,
          bgClass: "bg-red-100",
        })}
      </div>
    </>
  );
};

export default FeesSummarySemesterWise;
