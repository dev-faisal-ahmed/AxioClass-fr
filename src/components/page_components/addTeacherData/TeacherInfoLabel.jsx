import React from "react";

const TeacherInfoLabel = ({label,htmlFor}) => {
  return (
    <label className="font-semibold pb-2 capitalize" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default TeacherInfoLabel;
