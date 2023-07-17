import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const ClassroomFeedCard = ({item,teacher}) => {
  return (
    <div className='rounded-lg p-4 flex flex-col items-center bg-white shadow-sm'>
      '<div className='w-full flex items-center gap-4'>
        <div className='w-12 h-12 flex items-center justify-center border border-primary-500 bg-cover bg-center rounded-full'>
          <FaChalkboardTeacher size={30}/>
        </div>
        <div>
          <div className='font-semibold'>{teacher}</div>
          <div className='text-gray-500 text-sm'>{item.date}</div>
        </div>
      </div>
      <div>
        <img className='max-h-[400px] max-w-[400px]' src={item.img} alt="" />
      </div>
      <div>
        {item.text}
      </div>
    </div>
  );
};

export default ClassroomFeedCard;