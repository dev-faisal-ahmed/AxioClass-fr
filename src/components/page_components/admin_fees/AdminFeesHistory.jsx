import React from "react";
import AdminFeesHistoryList from "./AdminFeesHistoryList";
import { feeslistData } from "../../../fake_data/feeslistData";

const AdminFeesHistory = () => {
  return (
    <div className="mt-12 w-full h-fit rounded-xl bg-white flex flex-col px-4">
      <table>
        <thead>
          <tr className="text-[#40317E]">
            <th className="text-start py-3">Student</th>
            <th className="text-start">ID</th>
            <th className="text-start">Intake</th>
            <th className="text-start">Dept</th>
            <th className="text-start">Amount (TK)</th>
            <th className="text-start">Transition ID</th>
            <th className="text-start">Date</th>
          </tr>
        </thead>
        <tbody>
          {
            feeslistData.map((item,index)=>
            <AdminFeesHistoryList key={index} item={item} />
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default AdminFeesHistory;
