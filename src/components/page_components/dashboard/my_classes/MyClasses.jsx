import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ClassCard from '../../../shared/class_card/ClassCard';

const MyClasses = () => {
  const classes = [
    {
      className: 'Discrete Mathematics',
      instructor: 'Md Shahidul Islam',
      img: 'https://th.bing.com/th/id/R.d5e571abb4b3385e35b6fd2567a2ce72?rik=wf7RaVbYYkquJQ&pid=ImgRaw&r=0',
      classNumber: 8,
      credits: 3,
      students: 26,
      hours: 3,
    },
    {
      className: 'Discrete Mathematics',
      instructor: 'Md Shahidul Islam',
      img: 'https://th.bing.com/th/id/R.d5e571abb4b3385e35b6fd2567a2ce72?rik=wf7RaVbYYkquJQ&pid=ImgRaw&r=0',
      classNumber: 8,
      credits: 3,
      students: 26,
      hours: 3,
    },
    {
      className: 'Discrete Mathematics',
      instructor: 'Md Shahidul Islam',
      img: 'https://th.bing.com/th/id/R.d5e571abb4b3385e35b6fd2567a2ce72?rik=wf7RaVbYYkquJQ&pid=ImgRaw&r=0',
      classNumber: 8,
      credits: 3,
      students: 26,
      hours: 3,
    },
  ];
  return (
    <div className="my-5 mt-10">
      {/* Top title bar */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-primary-900">My Classes</h1>
        <Link className="flex items-center gap-2 font-semibold text-primary-600">
          See All
          <IoIosArrowForward />
        </Link>
      </div>

      {/* Class cards */}
      <div className="grid grid-cols-3 gap-5">
        {classes.map(
          (
            {
              className,
              instructor,
              img,
              classNumber,
              credits,
              students,
              hours,
            },
            index
          ) => (
            <ClassCard
              className={className}
              instructor={instructor}
              img={img}
              classNumber={classNumber}
              credits={credits}
              students={students}
              hours={hours}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MyClasses;
