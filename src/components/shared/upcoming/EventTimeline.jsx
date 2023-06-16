import React from 'react';
import { FiClock } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';

const EventTimeline = () => {
  return (
    <div className="h-[150px] flex gap-3 text-gray-500 relative overflow-hidden">
      {/* Time stamps */}
      <div className="h-full flex flex-col justify-between text-sm font-semibold">
        <span>8:00</span>
        <span>8:30</span>
        <span>9:00</span>
      </div>

      {/* X-axis lines */}
      <div className="w-full child:border-t flex flex-col justify-between py-2">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Event overlay */}
      <div className="absolute w-3/4 h-full left-16  py-2">
        <div className=" h-full bg-gradient-to-r from-primary-100 p-5 border-l-4 border-primary-600 flex flex-col justify-center">
          <h1 className="text-primary-600 font-bold mb-2">Machine learning</h1>
          <IconText icon={<FiClock />} title={'1 hour'} />
          <IconText icon={<BsFillPersonFill />} title={'Wade Warren'} />
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;

const IconText = ({ icon, title }) => {
  return (
    <div className="flex gap-2 items-center mb-1">
      {icon}
      <p className="text-sm capitalize whitespace-nowrap">{title}</p>
    </div>
  );
};
