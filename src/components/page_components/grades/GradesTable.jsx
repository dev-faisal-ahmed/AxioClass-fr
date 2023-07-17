import React from 'react';
import { getLocalUser } from '../../../utils/localStorage';
import { useGetCurrentCourses } from '../../../hooks/courses/useGetCurrentCourses';

const CurrentCourses = ({ grades }) => {
  const { id } = getLocalUser();
  const { currentCourses } = useGetCurrentCourses(id);
  console.log(currentCourses);

  return (
    <section className="mt-5 bg-white p-8 rounded-lg">
      <h1 className="mb-10 px-5 py-2 rounded-lg text-2xl font-bold text-primary-900 text-center bg-primary-50">
        Grades for registered courses
      </h1>
      {currentCourses?.length > 0 && (
        <table className="w-full">
          <thead className="border-b text-left">
            <tr className="child:text-primary-900">
              <th className="pb-2 pl-5">Course Code</th>
              <th className="pb-2">Course Title</th>
              <th className="pb-4 text-center">Credit</th>
              <th className="pb-4 text-center">Type</th>
              <th className="pb-4 text-center">Mid</th>
              <th className="pb-4 text-center">Final</th>
              <th className="pb-4 text-center">Thirty</th>
              <th className="pb-4 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 pl-5 font-semibold text-gray-600">
                  {course.code}
                </td>
                <td className="py-2 text-gray-500">{course.title}</td>
                <td className="py-2 text-center text-gray-500">
                  {course.credit}
                </td>
                <td className="py-2 text-center text-gray-500">
                  {course.type}
                </td>
                <td className="py-2 text-center text-gray-500">
                  {course.mid ? course.mid : '-'}
                </td>
                <td className="py-2 text-center text-gray-500">
                  {course.final ? course.final : '-'}
                </td>
                <td className="py-2 text-center text-gray-500">
                  {course.thirty ? course.thirty : '-'}
                </td>
                <td className="py-2 text-center text-gray-500">
                  {course.mid + course.thirty + course.final
                    ? course.mid + course.thirty + course.final
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!currentCourses && (
        <p className="text-center font-semibold">No Course Found</p>
      )}

      <p className="text-center mt-4 font-semibold text-gray-600">
        CGPA: 3.86 | SGPA: -
      </p>
    </section>
  );
};

export default CurrentCourses;
