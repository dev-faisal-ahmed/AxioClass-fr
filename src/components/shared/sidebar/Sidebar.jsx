import React from "react";
import SidebarLink from "./SidebarLink";
import { useLocation } from "react-router-dom";
import { navLinks } from "../../../data/navLinks";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-white py-5">
      <h1 className="sidebar--logo text-xl mb-12 text-center">Axio Class</h1>
      <div className="flex flex-col gap-2">
        {navLinks.map((data, index) => (
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
