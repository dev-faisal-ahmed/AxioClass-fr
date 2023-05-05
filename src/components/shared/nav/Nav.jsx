import React from "react";
import nav from "./nav.css";
import {MdNotificationsActive} from "react-icons/md"
import { Avatar } from "./avatar/Avatar";

export const Nav = () => {
  const fkID = {
    name: "aang",
    id: 20211105015,
    sec: 1,
    dept: "CSE",
  };
  return (
    <div className="nav center-y  justify-between">
      <div>
      <h1 className="capitalize">{fkID.name}</h1>
      <div className="id_container">
        <span>ID: {fkID.id}</span>
        <span>Section: {fkID.sec}</span>
        <span>Department of: {fkID.dept}</span>
      </div>
      </div>
      <div className="nav__profile center-y ">
        <MdNotificationsActive size={25}/>
        <Avatar/>
      </div>
    </div>
  );
};