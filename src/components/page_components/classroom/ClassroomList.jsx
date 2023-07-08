import React from 'react';
import ClassCard from '../../shared/class_card/ClassCard';

const ClassroomList = ({ classrooms }) => {

  const classes = [
    {
      className: 'Discrete Mathematics',
      instructor: 'Md Shahidul Islam',
      teacherId: 'MSI',
      img: 'https://th.bing.com/th/id/R.d5e571abb4b3385e35b6fd2567a2ce72?rik=wf7RaVbYYkquJQ&pid=ImgRaw&r=0',
      classNumber: 8,
      credits: 3,
      students: 26,
      hours: 3,
      classCode: 'sdnsdhw3nd',
      department: 'cse',
      intake: 44,
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
    <div className="">
      {/* <h1 className="mt-10 text-2xl font-semibold text-primary-900">
        Available Classrooms
      </h1> */}

      {/* Class cards */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        {classes.length ? classes.map(
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
              key={index}
              className={className}
              instructor={instructor}
              img={img}
              classNumber={classNumber}
              credits={credits}
              students={students}
              hours={hours}
            />
          )
        ) : <p className='py-5 col-span-3 text-center text-lg text-red-600'>Sorry! No class found!</p>}
      </div>
    </div>
  );
};

export default ClassroomList;
