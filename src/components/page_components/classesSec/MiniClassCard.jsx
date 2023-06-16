import React from 'react';

const MiniClassCard = ({item}) => {
  return (
    <div className='max-w-[350px] w-1/2 bg-white rounded-lg hover:shadow-lg animation cursor-pointer'>
      <div style={{backgroundImage:`url(${item.cover})`}} className='relative w-full h-24 bg-cover rounded-t-lg'>
      <div style={{backgroundImage:`url(${item.profile})`}} className='absolute right-6 bottom-[-25%] w-20 h-20 bg-cover rounded-full '></div>
      </div>
      <div className='flex items-end justify-between p-6 pt-3'>
        <div>
        <h3 className='text-xl font-semibold'>{item.name}</h3>
        <h3 className='text-sm font-light text-gray-600'>By: {item.teacherName}</h3>
        </div>
        <div>
        <p>Student: {item.studentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniClassCard;