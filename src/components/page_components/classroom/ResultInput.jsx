import React from "react";
import Modal from "../../shared/modal/Modal";
import ResultForm from "./ResultForm";

const ResultInput = ({
  setInputResult,
  showInputResult,
  student,
  classCode,
}) => {
  return (
    <Modal
      setModalState={setInputResult}
      modalState={showInputResult}
      title={"Set result"}
    >
      <div className="grid grid-cols-[auto_1fr_auto] gap-6">
        {student?.map((item, index) => (
          <ResultForm key={index} item={item} classCode={classCode} />
        ))}
      </div>
    </Modal>
  );
};

export default ResultInput;
