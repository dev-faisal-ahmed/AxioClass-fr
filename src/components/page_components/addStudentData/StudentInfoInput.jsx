import React from "react";

const StudentInfoInput = ({ placeholder, type, name, id, step }) => {
  if (step && type === "number")
    return (
      <input
        required
        className="border border-[#7A68EC] rounded-md p-2"
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        step={step}
      />
    );
  // if there is no step
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

export default StudentInfoInput;
