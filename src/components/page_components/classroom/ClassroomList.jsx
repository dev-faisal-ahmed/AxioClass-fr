import React from 'react';
import ClassCard from '../../shared/class_card/ClassCard';

const ClassroomList = ({ classrooms }) => {

  return (
    <div className="">
      {/* <h1 className="mt-10 text-2xl font-semibold text-primary-900">
        Available Classrooms
      </h1> */}

      {/* Class cards */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        {classrooms?.length ? classrooms.map(
          (
            {
              className,
              instructor,
              img,
              classNumber,
              credit,
              studentList,
              hours,
              courseCode
            },
            index
          ) => (
            <ClassCard
              key={index}
              className={className}
              instructor={instructor}
              img={img}
              courseCode={courseCode}
              classNumber={classNumber}
              credits={credit}
              students={studentList.length}
              hours={hours}
            />
          )
        ) : <p className='py-5 col-span-3 text-center text-lg text-red-600'>Sorry! No class found!</p>}
      </div>
    </div>
  );
};

export default ClassroomList;
