import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ title, url, icon, currentRoute }) => {
  return (
    <div
      className={`px-5 border-r-4 ${
        currentRoute === url ? "border-primary-500" : "border-transparent"
      }`}
    >
      <Link
        to={url}
        className={`flex items-center px-4 py-3 rounded-lg gap-3 hover:text-white hover:bg-gray-600 animation ${
          currentRoute === url ? "text-white bg-primary-500 " : "text-gray-600"
        } `}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </div>
  );
};
export default SidebarLink;
