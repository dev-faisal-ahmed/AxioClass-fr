import React from "react";
import SidebarLink from "./SidebarLink";
import { useLocation } from "react-router-dom";
import { adminNavLinks, navLinks } from "../../../data/navLinks";
import { user } from "../../../fake_data/user";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-white py-5">
      <h1 className="sidebar--logo text-xl mb-12 text-center">Axio Class</h1>
      <div className="flex flex-col gap-2">
        {/* for admin */}
        {user.role === "admin" &&
          adminNavLinks.map((data, index) => (
            <SidebarLink
              key={index}
              title={data.title}
              url={data.url}
              icon={data.icon}
              currentRoute={location.pathname}
            />
          ))}
        {/* for student */}
        {user.role === "student" &&
          navLinks.map((data, index) => (
            <SidebarLink
              key={index}
              title={data.title}
              url={data.url}
              icon={data.icon}
              currentRoute={location.pathname}
            />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
