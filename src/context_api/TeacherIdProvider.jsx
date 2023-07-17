import React, { createContext, useState } from "react";

export const TeacherIdContext = createContext();

const TeacherIdProvider = ({ children }) => {
  const [teacherId, setTeacherId] = useState();
  const updateTeacherId = (id) => {
    setTeacherId(id);
  };

  return (
    <TeacherIdContext.Provider value={{ teacherId, updateTeacherId }}>
      {children}
    </TeacherIdContext.Provider>
  );
};

export default TeacherIdProvider;
