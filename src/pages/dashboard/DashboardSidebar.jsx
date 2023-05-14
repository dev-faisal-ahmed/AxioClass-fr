import React from 'react';
import Calender from '../../components/shared/calender/Calender';
import Upcoming from '../../components/shared/upcoming/Upcoming';

const DashboardSidebar = () => {
  return (
    <div className='mt-2 grid gap-5'>
      <Calender />
      <Upcoming/>
    </div>
  );
};

export default DashboardSidebar;
