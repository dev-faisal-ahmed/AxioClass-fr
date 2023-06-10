import React, { useEffect, useState } from "react";
import { HorizontalLine } from "../../../shared/UIHelper";

const AddCourseTable = ({ allCourses, selectedCourses, setSelectedCourses }) => {
  // functions

  // ui helper functions
  return (
    <div className="mt-5 bg-white p-5 rounded-lg">
      <h1 className="mb-5 px-5 text-xl font-bold text-primary-900">Select Courses</h1>
      <table className="w-full">
        <thead className="border-b border-gray-400 text-left">
          <th className="pb-3 pl-5">Course Code</th>
          <th>Course Title</th>
          <th className="text-center">Credit</th>
          <th className="text-center">Type</th>
          <th className="text-center">Remarks</th>
        </thead>
        <tbody className="">
          {allCourses?.map((course, index) => (
            <TableRow
              code={course.code}
              title={course.title}
              credit={course.credit}
              type={course.type}
              index={index}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
            />
          ))}
        </tbody>
      </table>
      <HorizontalLine className={"bg-gray-400 h-[1px] mt-3"} />
      <button className="mt-5 block px-10 py-2 border-2 border-transparent rounded-lg font-semibold hover:border-primary-600 bg-primary-600 text-white hover:bg-transparent hover:text-primary-600 mx-auto animation">
        Submit
      </button>
    </div>
  );
};

const TableRow = ({ code, title, credit, type, index, selectedCourses, setSelectedCourses }) => {
  // state
  const [isSelected, setIsSelected] = useState(false);

  // function
  const handleAddCourse = () => {
    setSelectedCourses((prev) => {
      prev[code] = { code, title, credit, type };
      return prev;
    });
    console.log(selectedCourses);
    setIsSelected(true);
  };

  const handleRemoveCourse = () => {
    setSelectedCourses((prev) => {
      delete prev[code];
      return prev;
    });
    console.log(selectedCourses);
    setIsSelected(false);
  };

  return (
    <tr key={index}>
      <td className="pt-3 pl-5">{code}</td>
      <td className="pt-3">{title}</td>
      <td className="pt-3 text-center">{credit}</td>
      <td className="pt-3 text-center">{type}</td>
      <td className="pt-3">
        {isSelected ? (
          <button
            onClick={handleRemoveCourse}
            className="px-5 py-1 block mx-auto border-2 border-transparent bg-red-600 hover:bg-transparent hover:border-red-600 font-semibold rounded-md text-white hover:text-red-600 animation"
          >
            - &nbsp; Remove
          </button>
        ) : (
          <button
            onClick={handleAddCourse}
            className="px-5 py-1 block mx-auto border-2 border-transparent bg-green-600 hover:bg-transparent hover:border-green-600 font-semibold rounded-md text-white hover:text-green-600 animation"
          >
            + &nbsp; Add
          </button>
        )}
      </td>
    </tr>
  );
};

export default AddCourseTable;
