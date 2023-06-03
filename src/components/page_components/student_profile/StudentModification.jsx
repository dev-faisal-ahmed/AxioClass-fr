import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded, BiDotsHorizontalRounded } from "react-icons/bi";
import ModificationMenu from "./ModificationMenu";

const StudentModification = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);

  const showMenu = () => {
    setOpenMenu(true);
    console.log("opened");
  };

  const hideMenu = () => {
    setOpenMenu(false);
    console.log("closed");
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
