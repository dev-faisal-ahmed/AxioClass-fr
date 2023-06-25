import React, { useEffect, useRef, useState } from "react";
import Modal from "../../shared/modal/Modal";
import PaymentStudent from "./PaymentStudent";
import PasswordResetStudent from "./PasswordResetStudent";

const ModificationMenu = ({ open, setOpen }) => {
  const [paymentModal, setPaymentModal] = useState(false);
  const [passModal, setPassModal] = useState(false);
  const [courseModal, setCourseModal] = useState(false);
  // to track outside click from a component
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  // modal functionalities
  const openPaymentModal = () => {
    setOpen(false);
    setPaymentModal(true);
  };

  const openPasswordModal = () => {
    setOpen(false);
    setPassModal(true);
  };

  const buttonClass = `font-semibold text-left py-1 px-3 hover:bg-white w-full rounded-md`;
  return (
    <>
      {open && (
        <div
          ref={menuRef}
          className="absolute p-5 bg-gray-200 rounded-lg right-0 top-12 flex flex-col gap-2"
        >
          <button onClick={openPaymentModal} className={buttonClass}>
            Payment
          </button>
          <button onClick={openPasswordModal} className={buttonClass}>
            Password Recovery
          </button>
          <button className={buttonClass}>Course Modification</button>
        </div>
      )}
      {/* *********** Payment Modal *********** */}
      <Modal
        title={"Payment"}
        modalState={paymentModal}
        setModalState={setPaymentModal}
        width={"fit-content"}
      >
        <PaymentStudent />
      </Modal>

      <Modal title={"Password Reset"} modalState={passModal} setModalState={setPassModal}>
        <PasswordResetStudent />
      </Modal>
    </>
  );
};

export default ModificationMenu;
