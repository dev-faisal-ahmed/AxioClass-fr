import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import { useLocation, useNavigate } from "react-router-dom";
import { adminNavLinks, navLinks, teacherNavLinks } from "../../../data/navLinks";
import { HorizontalLine } from "../UIHelper";
import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../utils/toastConfig";
import { getLocalUser } from "../../../utils/localStorage";
import { removeUser } from "../../../utils/logout";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const route = useNavigate();
  const { role } = getLocalUser();

  // logout function
  const handleLogout = () => {
    removeUser();
    toast.success("User Logged out!", toastConfig);
    route("/login");
  };

  return (
    <div className="bg-white py-5 h-full flex flex-col justify-between">
      <div>
        <h1 className="sidebar--logo text-xl mb-12 text-center">Axio Class</h1>
        <div className="flex flex-col gap-2">
          {/* for admin */}
          {role === "admin" &&
            adminNavLinks.map((data, index) => (
              <SidebarLink
                key={index}
                title={data.title}
                url={data.url}
                icon={data.icon}
                currentRoute={location.pathname}
              />
            ))}

          {/* for teacher */}
          {role === "teacher" &&
            teacherNavLinks.map((data, index) => (
              <SidebarLink
                key={index}
                title={data.title}
                url={data.url}
                icon={data.icon}
                currentRoute={location.pathname}
              />
            ))}

          {/* for student */}
          {role === "student" &&
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

      <div>
        <HorizontalLine className={"mb-5"} />
        <button
          className="px-8 py-3 bg-rose-500 border-2 hover:border-red-500 hover:text-red-500 hover:bg-white mx-auto rounded-lg text-white center--xy gap-2 font-semibold animation"
          onClick={handleLogout}
        >
          <MdLogout size={25} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
