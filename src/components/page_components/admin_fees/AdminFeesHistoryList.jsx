import React, { useState } from "react";
import PaymentSlip from "../../shared/PaymentSlip";
import Modal from "../../shared/modal/Modal";

const AdminFeesHistoryList = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <tr className="text-gray-600 border-y">
        <td className="py-5 capitalize">{item?.name}</td>
        <td>{item?.id}</td>
        <td>{item?.intake}</td>
        <td>{item?.dept}</td>
        <td>{item?.amount}/=</td>
        <td>{item?.trxId}</td>
        <td>{item?.date}</td>
        <td>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white font-semibold py-2 px-5 rounded-md hover:bg-green-600 animation"
          >
            Show
          </button>
        </td>
      </tr>
      <Modal title={"Payment Info"} modalState={showModal} setModalState={setShowModal}>
        <PaymentSlip
          name={item.name}
          amount={item.amount}
          date={item.date}
          dept={item.dept}
          id={item.id}
          intake={item.intake}
          trxId={item.trxId}
        />
      </Modal>
    </>
  );
};

export default AdminFeesHistoryList;
