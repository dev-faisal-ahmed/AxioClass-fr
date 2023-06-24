import React, { useState } from "react";
import { BiDotsVerticalRounded, BiDotsHorizontalRounded } from "react-icons/bi";
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
    <div className="relative ">
      {openMenu ? (
        <button className="ml-auto block" onClick={hideMenu}>
          <BiDotsVerticalRounded size={35} />
        </button>
      ) : (
        <button className="ml-auto block" onClick={showMenu}>
          <BiDotsHorizontalRounded size={35} />
        </button>
      )}

      <ModificationMenu open={openMenu} setOpen={setOpenMenu} />
    </div>
  );
};

export default StudentModification;
