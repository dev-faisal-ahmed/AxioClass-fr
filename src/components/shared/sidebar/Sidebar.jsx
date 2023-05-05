import React from "react";
import "./sidebar.css";
import { Sidelink } from "./sidelink/Sidelink";

// Importing icons
import { MdClass, MdDashboard } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { RiNumbersFill, RiSettings3Fill } from "react-icons/ri";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="sidebar__root">
      <h1 className="sidebar__logo">
        Axio<span>Class</span>{" "}
      </h1>
      <div className="sidebar__links">
        <Sidelink name={"dashboard"} url={"/"} icon={<MdDashboard />} />
        <Sidelink
          name={"Fees And Waiver"}
          url={"/fees-and-waiver"}
          icon={<BsFillCreditCard2FrontFill />}
        />
        <Sidelink name={"classes"} url={"/classes"} icon={<MdClass />} />
        <Sidelink name={"schedule"} url={"/schedule"} icon={<IoCalendar />} />
        <Sidelink name={"grades"} url={"/grades"} icon={<RiNumbersFill />} />
        <Sidelink name={"settings"} url={"/settings"} icon={<RiSettings3Fill />} />
      </div>
    </div>
  );
};
