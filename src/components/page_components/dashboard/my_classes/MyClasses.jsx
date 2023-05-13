import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ClassCard from './ClassCard';

const MyClasses = () => {
  return (
    <div className="my-5">
      {/* Top title bar */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-blue-900">My Classes</h1>
        <Link className="flex items-center gap-2 font-semibold text-primary-600">
          See All
          <IoIosArrowForward />
        </Link>
      </div>

      {/* Class cards */}
      <div className='grid grid-cols-3 gap-5'>
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </div>
  );
};

export default MyClasses;
