import React from "react";

// Importing icons
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineAddChart, MdOutlineNotificationAdd } from "react-icons/md";

import { HiOutlineViewGridAdd } from "react-icons/hi";

const ActivityCard = ({ serial, activity, data, time, category }) => {
  const icon =
    activity === "teacher" ? (
      <AiOutlineUserAdd />
    ) : activity === "student" ? (
      <AiOutlineUsergroupAdd />
    ) : activity === "class" ? (
      <HiOutlineViewGridAdd />
    ) : activity === "notice" ? (
      <MdOutlineNotificationAdd />
    ) : (
      <MdOutlineAddChart />
    );
  return (
    <>
      <div className="grid grid-cols-[1fr_auto] items-center gap-2">
        <h2 className="text-primary-900 font-semibold">{serial}.</h2>
        <div className="border border-primary-100 p-2 rounded-lg text-primary-600 text-2xl">
          {icon}
        </div>
      </div>

      <div className="col-span-2">
        <h3 className="text-sm font-semibold text-primary-900 truncate">{activity}</h3>
        <p className="text-xs text-gray-500 truncate">{data}</p>
      </div>

      <h2 className="text-sm text-gray-500 whitespace-nowrap text-right">{time}</h2>
    </>
  );
};

export default ActivityCard;
