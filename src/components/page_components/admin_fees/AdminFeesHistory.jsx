import React from "react";
import AdminFeesHistoryList from "./AdminFeesHistoryList";
import { useGetTransactionAdmin } from "../../../hooks/payment/useGetTransactionAdmin";

const AdminFeesHistory = () => {
  const { transactionHistory } = useGetTransactionAdmin();

  return (
    <div className="mt-12 w-full h-fit rounded-xl bg-white flex flex-col p-5">
      <h1 className="font-semibold text-xl mb-5 text-primary-800">All Transactions</h1>
      <table className="">
        <thead className="">
          <tr className="text-[#40317E]">
            <th className="text-start py-3">Student</th>
            <th className="text-start">ID</th>
            <th className="text-start">Intake</th>
            <th className="text-start">Dept</th>
            <th className="text-start">Amount (TK)</th>
            <th className="text-start">Transition ID</th>
            <th className="text-start">Date</th>
            <th className="text-start">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory?.map((item, index) => (
            <AdminFeesHistoryList key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFeesHistory;
