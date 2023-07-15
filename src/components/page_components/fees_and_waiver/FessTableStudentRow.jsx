import React, { useState } from "react";
import Modal from "../../shared/modal/Modal";
import PaymentSlip from "../../shared/PaymentSlip";

function FessTableStudentRow({ transaction }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <tr className="border-y">
      <td className="py-2">{transaction?.date}</td>
      <td className="py-2">{transaction?.trxId}</td>
      <td className="py-2">{transaction?.amount}</td>
      <td className="py-2">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-green-50 px-3 py-2 rounded-md text-green-500 font-semibold hover:text-green-600 hover:bg-green-100 animation"
        >
          View
        </button>
      </td>
      <Modal title={"Payment Slip"} modalState={openModal} setModalState={setOpenModal}>
        <PaymentSlip
          amount={transaction?.amount}
          date={transaction?.date}
          dept={transaction?.dept}
          id={transaction?.id}
          intake={transaction?.intake}
          name={transaction?.name}
          trxId={transaction?.trxId}
        />
      </Modal>
    </tr>
  );
}

export default FessTableStudentRow;
