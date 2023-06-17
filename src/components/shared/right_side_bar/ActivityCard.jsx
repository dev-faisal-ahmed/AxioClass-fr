import React from 'react';

// Importing icons
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdOutlineAddChart, MdOutlineNotificationAdd } from 'react-icons/md';

import { HiOutlineViewGridAdd } from 'react-icons/hi';

const ActivityCard = ({ serial, activity, data, time }) => {
  const icon =
    activity === 'Added a teacher' ? (
      <AiOutlineUserAdd />
    ) : activity === 'Added a student' ? (
      <AiOutlineUsergroupAdd />
    ) : activity === 'Created a classroom' ? (
      <HiOutlineViewGridAdd />
    ) : activity === 'Posted a notification' ? (
      <MdOutlineNotificationAdd />
    ) : (
      <MdOutlineAddChart />
    );
  return (
    <div className="flex gap-4 justify-between items-start ml-2 mb-5">
      <div className='flex gap-4 items-center'>
        <h2 className="text-primary-900 font-semibold">{serial}.</h2>
        <div className="border border-primary-100 p-2 rounded-lg text-primary-600 text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary-900">{activity}</h3>
          <p className="text-xs text-gray-500">{data}</p>
        </div>
      </div>
      <h2 className='text-sm text-gray-500'>{time}</h2>
    </div>
  );
};

export default ActivityCard;
