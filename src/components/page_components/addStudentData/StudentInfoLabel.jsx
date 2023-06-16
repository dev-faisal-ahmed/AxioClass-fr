import React from 'react';

const StudentInfoLabel = ({label,htmlFor}) => {
  return (
    <label className="font-semibold pb-2 capitalize" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default StudentInfoLabel;