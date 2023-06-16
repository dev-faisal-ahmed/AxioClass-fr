import React from "react";
import { getLocalUser } from "../../../../../utils/localStorage";

import { useGetCurrentCourses } from "../../../../../hooks/courses/useGetCurrentCourses";

const CurrentCourses = () => {
  const { id } = getLocalUser();
  const { currentCourses } = useGetCurrentCourses(id);

  return (
    <section className="mt-5 bg-white p-5 rounded-lg">
      <h1 className="mb-5 px-5 text-xl font-bold text-primary-900">Current Courses</h1>
      {currentCourses?.length > 0 && (
        <table className="w-full">
          <thead className="border-b text-left">
            <tr>
              <th className="pb-3 pl-5">Course Code</th>
              <th>Course Title</th>
              <th className="pb-3 text-center">Credit</th>
              <th className="pb-3 text-center">Type</th>
              <th className="pb-3 text-center">Class Room</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 pl-5 font-semibold">{course.code}</td>
                <td className="py-2 text-gray-500">{course.title}</td>
                <td className="py-2 text-center text-gray-500">{course.credit}</td>
                <td className="py-2 text-center text-gray-500">{course.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CurrentCourses;
