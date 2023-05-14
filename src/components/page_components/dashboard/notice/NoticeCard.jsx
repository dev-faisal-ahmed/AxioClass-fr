import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';

const NoticeCard = () => {
  return (
    <div className="grid grid-cols-[40px_auto_1fr_1fr_30px] place-items-center gap-5 p-3 text-gray-500 cursor-pointer border-b hover:bg-white rounded-lg transition">
      <img
        className="rounded-lg h-[40px] w-[40px]"
        src="https://previews.123rf.com/images/svetolk/svetolk2108/svetolk210800013/172726739-3d-render-icon-of-yellow-notification-bell-isolated-on-pastel-violet-background-social-media-notice.jpg"
        alt="Notice"
      />
      <h1 className="font-bold text-primary-900">
        Off day to celebrate Shahid's Birthday
      </h1>
      <p className="flex items-center gap-2">
        {' '}
        <HiAcademicCap className="text-xl " /> Academic
      </p>
      <p className="flex items-center gap-2">
        {' '}
        <HiCalendar className="text-xl " /> May 15, 2023
      </p>
      <BsThreeDotsVertical className="text-lg" />
    </div>
  );
};

export default NoticeCard;
