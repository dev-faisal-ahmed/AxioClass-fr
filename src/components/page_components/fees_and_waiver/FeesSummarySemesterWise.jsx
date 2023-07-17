import { IoWalletSharp } from "react-icons/io5";
import { GiReceiveMoney, GiPayMoney, GiWallet } from "react-icons/gi";

const FeesSummarySemesterWise = ({ stat }) => {
  console.log(stat);

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

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold">Financial Record</h1>
      </div>
      {/* fees summary */}
      <div className="grid grid-cols-4 gap-5">
        {summaryBox({
          first: true,
          icon: <IoWalletSharp size={25} />,
          title: "Total Demand",
          amount: stat?.demand,
        })}
        {summaryBox({
          icon: <GiReceiveMoney size={25} />,
          title: "Total Waiver",
          amount: stat?.waiver || 0,
        })}
        {summaryBox({
          icon: <GiPayMoney size={25} />,
          title: "Total Paid",
          amount: stat?.paid || 0,
        })}
        {summaryBox({
          icon: <GiWallet size={25} />,
          title: "Total Due",
          amount: (stat?.demand || 0) - (stat?.paid || 0) - (stat?.waiver || 0),
        })}
      </div>
    </>
  );
};

export default FeesSummarySemesterWise;
