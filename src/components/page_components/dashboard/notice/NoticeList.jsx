import React from 'react';
import NoticeCard from './NoticeCard';

const NoticeList = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-primary-900 mb-4 mt-7">
        Latest notice
      </h1>
      <div className=''>
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </div>
    </div>
  );
};

export default NoticeList;
