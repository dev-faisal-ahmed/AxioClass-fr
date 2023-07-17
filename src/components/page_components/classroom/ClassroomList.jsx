import React from "react";
import ClassCard from "../../shared/class_card/ClassCard";

const ClassroomList = ({ classrooms }) => {
  return (
    <div className="">
      {/* Class cards */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        {classrooms?.length !== 0 ? (
          classrooms?.map(
            (
              {
                className,
                instructor,
                img,
                classNumber,
                credit,
                studentList,
                hours,
                courseCode,
                classCode,
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
                classCode={classCode}
              />
            )
          )
        ) : (
          <p className="py-5 col-span-3 text-center text-lg text-red-600">Sorry! No class found!</p>
        )}
      </div>
    </div>
  );
};

export default ClassroomList;
