import React from "react";

const FeesInput = ({ id, placeholder, type, icon, button, inputRef, stateUpdater }) => {
  return (
    <>
      <div className="flex-grow flex gap-3 border border-gray-300 rounded-lg overflow-hidden">
        <div className="py-2 pl-5 flex-grow center--y gap-3">
          <label htmlFor={id}>{icon}</label>
          <span className="w-[2px] bg-gray-300">&nbsp;</span>
          <input
            ref={inputRef}
            id={id}
            className="outline-none w-full"
            type={type}
            placeholder={placeholder}
          />
        </div>
        {button && (
          <button
            onClick={() => stateUpdater(inputRef.current.value)}
            className="bg-gray-400 block px-2 text-white"
          >
            <IoIosArrowForward size={25} />
          </button>
        )}
      </div>
    </>
  );
};
export default FeesInput;
