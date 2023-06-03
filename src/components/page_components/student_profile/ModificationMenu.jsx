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

  return (
    <>
      {open && (
        <div ref={menuRef} className="absolute p-8 bg-gray-100 rounded-lg right-0">
          ModificationMenu
        </div>
      )}
    </>
  );
};

export default ModificationMenu;
