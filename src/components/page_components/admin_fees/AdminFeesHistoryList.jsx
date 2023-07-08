import React from "react";

const AdminFeesHistoryList = ({ item }) => {
  return (
    <tr className="text-gray-600 border-t">
      <td className="flex items-center gap-3 py-3 capitalize">{item.name}</td>
      <td>{item.id}</td>
      <td>{item.intake}</td>
      <td>{item.dept}</td>
      <td>{item.amount}</td>
      <td>{item.trxId}</td>
      <td>{item.date}</td>
    </tr>
  );
};

export default AdminFeesHistoryList;
