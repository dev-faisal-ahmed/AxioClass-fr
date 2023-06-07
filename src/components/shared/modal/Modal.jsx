import React from "react";
import { createPortal } from "react-dom";
import { VscChromeClose } from "react-icons/vsc";

const Modal = ({ modalState, setModalState, title, children }) => {
  return createPortal(
    <>
      {modalState && (
        <section className="modal" onClick={() => setModalState(false)}>
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-lg overflow-hidden max-w-[700px] w-2/3"
          >
            <header className="bg-primary-600 py-4 px-5 flex items-center justify-between text-white">
              <h1 className="font-semibold text-white">{title}</h1>
              <VscChromeClose onClick={() => setModalState(false)} size={20} />
            </header>
            {/* body */}
            <div className="p-5 max-h-[600px] overflow-y-auto">{children}</div>
          </div>
        </section>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
