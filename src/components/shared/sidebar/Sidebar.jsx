import React from 'react';
import './sidebar.css';
import Sidelink from './sidelink/Sidelink';

// Importing icons
import { MdClass, MdDashboard } from 'react-icons/md';
import { IoCalendar } from 'react-icons/io5';
import { RiNumbersFill, RiSettings3Fill } from 'react-icons/ri';

export const Sidebar = () => {
  return (
    <div className="sidebar__root">
      <h1 className="sidebar__logo">
        Axio<span>Class</span>{' '}
      </h1>
      <div className="sidebar__links">
        <Sidelink active={true} name={'dashboard'} icon={<MdDashboard />} />
        <Sidelink name={'classes'} icon={<MdClass />} />
        <Sidelink name={'schedule'} icon={<IoCalendar />} />
        <Sidelink name={'grades'} icon={<RiNumbersFill />} />
        <Sidelink name={'settings'} icon={<RiSettings3Fill />} />
      </div>
    </div>
  );
};
