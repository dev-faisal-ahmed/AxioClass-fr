import React from "react";
import Modal from "../../shared/modal/Modal";

const ShowAllStudents = ({ showStudent, setShowStudent, student }) => {
  console.log(student);
  return (
    <Modal
      modalState={showStudent}
      setModalState={setShowStudent}
      title={"All students"}
    >
      <div className="w-full flex flex-wrap gap-6 justify-center">
        {student?.map((item, index) => (
          <div className="flex flex-col items-center">
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="w-10 h-10 bg-white rounded-full bg-cover bg-center"
            ></div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ShowAllStudents;
