import React from "react";
import Modal from "../../shared/modal/Modal";
import ResultForm from "./ResultForm";

const ResultInput = ({ setInputResult, showInputResult, student, courseCode }) => {
  return (
    <Modal setModalState={setInputResult} modalState={showInputResult} title={"Set result"}>
      <div className="grid grid-cols-[auto_1fr_auto] gap-6">
        {student?.map((item, index) => (
          <ResultForm key={index} item={item} courseCode={courseCode} />
        ))}
      </div>
    </Modal>
  );
};

export default ResultInput;
