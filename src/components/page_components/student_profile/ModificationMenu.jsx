import React, { useEffect, useRef } from "react";

const ModificationMenu = ({ open, setOpen }) => {
  // to track outside click from a component
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const buttonClass = `font-semibold text-left py-1 px-3 hover:bg-white w-full rounded-md`;
  return (
    <>
      {open && (
        <div
          ref={menuRef}
          className="absolute p-5 bg-gray-200 rounded-lg right-0 top-12 flex flex-col gap-2"
        >
          <button className={buttonClass}>Payment</button>
          <button className={buttonClass}>Update Waiver</button>
          <button className={buttonClass}>Password Recovery</button>
          <button className={buttonClass}>Course Modification</button>
        </div>
      )}
    </>
  );
};

export default ModificationMenu;
