import React from 'react';

// Importing icons
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdOutlineAddChart, MdOutlineNotificationAdd } from 'react-icons/md';

import { HiOutlineViewGridAdd } from 'react-icons/hi';

const ActivityCard = ({ serial, activity, data, time, category }) => {
  const icon =
    activity === 'teacher' ? (
      <AiOutlineUserAdd />
    ) : activity === 'student' ? (
      <AiOutlineUsergroupAdd />
    ) : activity === 'class' ? (
      <HiOutlineViewGridAdd />
    ) : activity === 'notice' ? (
      <MdOutlineNotificationAdd />
    ) : (
      <MdOutlineAddChart />
    );
  return (
    <>
      <div className="flex gap-4 items-center">
        <h2 className="text-primary-900 font-semibold">{serial}.</h2>
        <div className="border border-primary-100 p-2 rounded-lg text-primary-600 text-2xl">
          {icon}
        </div>
        <div className='w-full'>
          <h3 className="text-sm font-semibold text-primary-900">{activity}</h3>
          <p className="text-xs text-gray-500 overflow-hidden truncate w-full">
            {data}
          </p>
        </div>
      </div>
      <h2 className="text-sm text-gray-500 whitespace-nowrap">{time}</h2>
    </>
  );
};

export default ActivityCard;
