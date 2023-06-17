import React from 'react';
import ActionButton from './ActionButton';
// Importing icons
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdOutlineAddChart, MdOutlineNotificationAdd } from 'react-icons/md';

import {HiOutlineViewGridAdd} from 'react-icons/hi';


const ActionPanel = () => {
  return (
    <div className='mb-12'>
      <h1 className="text-2xl font-bold text-primary-900 mt-5 mb-8 capitalize text-center">
        Action center
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <ActionButton
          icon={<AiOutlineUsergroupAdd />}
          title="Add Student"
          link="/add-student"
        />
        <ActionButton
          icon={<AiOutlineUserAdd />}
          title="Add Teacher"
          link="/add-teacher"
        />
        <ActionButton
          icon={<MdOutlineNotificationAdd />}
          title="Post Notice"
          link="/add-student"
        />
        <ActionButton
          icon={<MdOutlineAddChart />}
          title="Add Payment"
          link="/add-student"
        />
        <ActionButton
          icon={<HiOutlineViewGridAdd />}
          title="Create Classroom"
          link="/add-student"
        />
      </div>
    </div>
  );
};

export default ActionPanel;
