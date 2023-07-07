import React, { useState } from 'react';

// Import icons
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdOutlineDateRange, MdDelete } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { LuCalendarOff } from 'react-icons/lu';
import { TbBuildingBank, TbEdit, TbBellPlus } from 'react-icons/tb';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import Modal from '../../shared/modal/Modal';
import NoticeBoard from './NoticeBoard';

const NoticeCard = ({ title, category, date, description }) => {
  const [seeDetails, setSeeDetails] = useState(false);
  const icon =
    category === 'financial' ? (
      <GiTakeMyMoney />
    ) : category === 'holiday' ? (
      <LuCalendarOff />
    ) : category === 'administrative' ? (
      <TbBuildingBank />
    ) : (
      <HiOutlineAcademicCap />
    );
  const color =
    category === 'financial'
      ? 'bg-orange-100 text-orange-600'
      : category === 'holiday'
      ? 'bg-green-100 text-green-600'
      : category === 'administrative'
      ? 'bg-red-100 text-red-600'
      : 'bg-primary-100 text-primary-600';
  const bgModal =
    category === 'financial'
      ? 'bg-orange-50'
      : category === 'holiday'
      ? 'bg-green-50'
      : category === 'administrative'
      ? 'bg-red-50'
      : 'bg-primary-50';
  const textModal = 'text-primary-900';
  return (
    <div className="w-full p-4 grid grid-cols-[min-content_1fr_min-content] gap-10 items-center justify-between rounded-lg border border-primary-25 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-100 cursor-pointer transition font-semibold">
      {/* Modal */}
      <Modal
        modalState={seeDetails}
        setModalState={setSeeDetails}
        title={title}
        headerStyle={color}
        bodyStyle={bgModal}
      >
        <div className="child:mb-2 text-gray-600">
          <p>
            <span className={" font-bold " + textModal}>Title: </span>
            {title}
          </p>
          <p className="capitalize">
            <span className={" font-bold " + textModal}>Category: </span>
            {category}
          </p>
          <p>
            <span className={" font-bold " + textModal}>Published date: </span>
            {date}
          </p>
          <div>
            <h2 className={" font-bold " + textModal}>Description: </h2>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </Modal>
      {/* Left side content */}
      <div className="flex items-center gap-4">
        <div className={'p-3 rounded-lg text-2xl ' + color}>{icon}</div>
        <div>
          <h2 className="text-primary-900 mb-1 whitespace-nowrap">{title}</h2>
          <div className="flex items-center gap-4 text-xs">
            <p className={'px-2 py-0.5 rounded ' + color}>#{category}</p>
            <p className="flex items-center gap-1 text-gray-400  whitespace-nowrap">
              <MdOutlineDateRange />
              {date}
            </p>
          </div>
        </div>
      </div>

      {/* middle description */}
      <div className="text-sm text-gray-500 font-normal whitespace-nowrap overflow-hidden truncate w-full">
        {description}
      </div>

      {/* Right side buttons */}
      <div className="flex gap-4 items-center">
        <div
          title="Delete this notice"
          className="text-3xl text-primary-900 hover:text-red-600"
        >
          <MdDelete />
        </div>
        <div
          onClick={() => setSeeDetails(!seeDetails)}
          title="See details"
          className="text-3xl text-primary-900 hover:text-primary-600"
        >
          <BiSolidMessageSquareDetail />
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
