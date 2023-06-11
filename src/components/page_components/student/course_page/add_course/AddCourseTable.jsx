import React from "react";
import CourseTableRow from "./CourseTableRow";
import { serverAddress } from "../../../../../data/serverAddress";
import { getLocalUser } from "../../../../../utils/localStorage";

const AddCourseTable = ({ allCourses, selectedCourses, setSelectedCourses }) => {
  // variables
  const { id } = getLocalUser();
  // functions
  const handleAddCourse = () => {
    const url = `${serverAddress}/courses/registration`;
    console.log("Clicked");
    // console.log(selectedCourses);
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedCourses, id }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  // ui helper functions
  return (
    <div className="mt-5 bg-white p-5 rounded-lg">
      <h1 className="mb-5 px-5 text-xl font-bold text-primary-900">Select Courses</h1>
      <table className="w-full">
        <thead className="border-b text-left">
          <th className="pb-3 pl-5">Course Code</th>
          <th>Course Title</th>
          <th className="pb-3 text-center">Credit</th>
          <th className="pb-3 text-center">Type</th>
          <th className="pb-3 text-center">Remarks</th>
        </thead>
        <tbody className="">
          {allCourses?.map((course, index) => (
            <CourseTableRow
              code={course.code}
              title={course.title}
              credit={course.credit}
              type={course.type}
              index={index}
              setSelectedCourses={setSelectedCourses}
            />
          ))}
        </tbody>
      </table>
      <button
        onClick={handleAddCourse}
        className="mt-5 block px-10 py-2 border-2 border-transparent rounded-lg font-semibold hover:border-primary-600 bg-primary-600 text-white hover:bg-transparent hover:text-primary-600 mx-auto animation"
      >
        Submit
      </button>
    </div>
  );
};

export default AddCourseTable;
