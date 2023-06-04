import React from "react";
import { sumOfStudent } from "../../../fake_data/sumOfStudentData";

const SumOfStudent = () => {
  return (
    <div className="flex w-full justify-between items-center">
      {sumOfStudent.map((item,index) =>
        <div className="border border-transparent hover:border-black max-w-[200px] w-[200px] h-[150px] rounded-md p-4 flex flex-col gap-4 items-center justify-center text-center transition-all hover:shadow-lg bg-white ">
          <h4>{item.title}</h4>
          <p className="text-4xl text-[#4B5563]">{item.num}</p>
        </div>
      )}
    </div>
  );
};

export default SumOfStudent;
