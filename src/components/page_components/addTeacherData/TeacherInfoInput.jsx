import React from "react";

const TeacherInfoInput = ({ placeholder, type, name, id }) => {
  return (
    <input
      required
      className="border border-[#7A68EC] rounded-md p-2"
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
    />
  );
};

export default TeacherInfoInput;
