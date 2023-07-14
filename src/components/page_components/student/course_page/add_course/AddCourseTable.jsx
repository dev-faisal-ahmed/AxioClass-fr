import React from "react";
import CourseTableRow from "./CourseTableRow";
import { serverAddress } from "../../../../../data/serverAddress";
import { getLocalUser } from "../../../../../utils/localStorage";
import { useGetCurrentCourses } from "../../../../../hooks/courses/useGetCurrentCourses";
import { postReq } from "../../../../../utils/postReq";
import { toast } from "react-hot-toast";
import { toastConfig } from "../../../../../utils/toastConfig";

const AddCourseTable = ({ allCourses, selectedCourses, setSelectedCourses, setAddCourse }) => {
  // variables
  const { id } = getLocalUser();
  const { refetch } = useGetCurrentCourses(id);
  // functions
  const handleAddCourse = () => {
    const url = `${serverAddress}/courses/registration`;
    // console.log(selectedCourses);
    fetch(url, postReq({ selectedCourses, id }))
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) refetch();
        setAddCourse(false);
        toast.success("Course Added", toastConfig);
      });
  };
  // ui helper functions
  return (
    <div className="mt-5 bg-white p-5 rounded-lg">
      <h1 className="mb-5 px-5 text-xl font-bold text-primary-900">Select Courses</h1>
      <table className="w-full">
        <thead className="border-b text-left">
          <tr>
            <th className="pb-3 pl-5">Course Code</th>
            <th>Course Title</th>
            <th className="pb-3 text-center">Credit</th>
            <th className="pb-3 text-center">Type</th>
            <th className="pb-3 text-center">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {allCourses?.map((course, index) => (
            <CourseTableRow
              key={index}
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
