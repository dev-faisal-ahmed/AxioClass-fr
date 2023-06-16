import React from "react";
import { dept } from "../../../fake_data/dept";

const CourseTable = () => {
  return (
    <div className="bg-white mt-8 p-8 rounded-lg">
      <h1 className="text-xl font-semibold mb-5">Departments</h1>
      <table className="w-full">
        <thead>
          <tr className="font-bold">
            <td>Dept Name</td>
            <td>HOD</td>
            <td>Started Year</td>
            <td>No. of Students</td>
          </tr>
        </thead>

        <tbody className="">
          {dept.map((data, index) => (
            <tr key={index} className="text-gray-400 w-full border-t-[10px] border-transparent">
              <td className="">{data.deptName}</td>
              <td>{data.hod}</td>
              <td>{data.started}</td>
              <td>{data.totalStudents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
