import { useState } from "react";
import { ImCheckmark } from "react-icons/im";

const CourseTableRow = ({ code, title, credit, type, index, setSelectedCourses }) => {
  // state
  const [isSelected, setIsSelected] = useState(false);

  // function
  const handleAddCourse = () => {
    setSelectedCourses((prev) => {
      prev[code] = { code, title, credit, type };
      return prev;
    });

    setIsSelected(true);
  };

  const handleRemoveCourse = () => {
    setSelectedCourses((prev) => {
      delete prev[code];
      return prev;
    });

    setIsSelected(false);
  };

  return (
    <tr className="border-b" key={index}>
      <td className="py-2 pl-5 font-semibold">{code}</td>
      <td className="py-2 text-gray-500">{title}</td>
      <td className="py-2 text-center text-gray-500">{credit}</td>
      <td className="py-2 text-center text-gray-500">{type}</td>

      <td className="py-2">
        {isSelected ? (
          <p
            onClick={handleRemoveCourse}
            className="center--xy mx-auto w-6 h-6 rounded border border-transparent bg-blue-600 text-white"
          >
            <ImCheckmark />
          </p>
        ) : (
          <p
            onClick={handleAddCourse}
            className="center--xy mx-auto w-6 h-6 rounded border border-gray-500"
          ></p>
        )}
      </td>
    </tr>
  );
};

export default CourseTableRow;
