import React from 'react';
import { createPortal } from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';

const Modal = ({
  modalState,
  setModalState,
  title,
  children,
  width,
  headerStyle,
  bodyStyle,
}) => {
  return createPortal(
    <>
      {modalState && (
        <section className="modal" onClick={() => setModalState(false)}>
          <div
            style={{ maxWidth: '700px', width: width ? width : '66.67%', minWidth: "300px" }}
            onClick={(event) => event.stopPropagation()}
            className="bg-white rounded-lg overflow-hidden"
          >
            <header
              className={`py-4 px-5 flex items-center justify-between ${
                headerStyle ? headerStyle : 'bg-primary-600 text-white'
              }`}
            >
              <h1 className="font-semibold text-xl">{title}</h1>
              <VscChromeClose
                onClick={() => setModalState(false)}
                size={20}
                className="cursor-pointer"
              />
            </header>
            {/* body */}
            <div className={"p-5 max-h-[600px] overflow-y-auto " + bodyStyle}>{children}</div>
          </div>
        </section>
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
