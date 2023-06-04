import React from "react";

const FeesInput = ({ id, placeholder, type, icon, onBlur }) => {
  return (
    <>
      <div className="flex-grow flex center--y gap-3 border border-gray-300 py-2 px-5 rounded-lg">
        <label htmlFor={id}>{icon}</label>
        <span className="w-[2px] bg-gray-300">&nbsp;</span>
        <input
          onBlur={onBlur}
          id={id}
          className="outline-none w-full"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
export default FeesInput;
