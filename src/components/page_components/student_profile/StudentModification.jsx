import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ModificationMenu from "./ModificationMenu";

const StudentModification = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(true);
  };

  const hideMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="relative">
      {openMenu ? (
        // close menu
        <button onClick={hideMenu}>
          <BiDotsHorizontalRounded size={35} />
        </button>
      ) : (
        <button
          // open menu
          onClick={showMenu}
        >
          <BiDotsHorizontalRounded size={35} />
        </button>
      )}

      <ModificationMenu open={openMenu} setOpen={setOpenMenu} />
    </div>
  );
};

export default StudentModification;
