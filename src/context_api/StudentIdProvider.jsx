import React, { createContext, useState } from "react";

export const studentIdContext = createContext();

const StudentIdProvider = ({ children }) => {
  const [studentId, setStudentId] = useState();
  const updateStudentId = (id) => {
    setStudentId(id);
  };

  return (
    <studentIdContext.Provider value={{ studentId, updateStudentId }}>
      {children}
    </studentIdContext.Provider>
  );
};

export default StudentIdProvider;
