import React from "react";
import FessTableStudentRow from "./fessTableStudentRow";

const FeesTable = ({ transactions }) => {
  return (
    <section className="bg-white mt-8 rounded-lg p-5">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="text-left pb-3">Date</th>
            <th className="text-left pb-3">Trx Id</th>
            <th className="text-left pb-3">Amount</th>
            <th className="text-left pb-3">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction, index) => (
            <FessTableStudentRow key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FeesTable;
