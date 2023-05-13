import React from 'react';
import BarChart from './BarChart';
import GraphSummary from './GraphSummary';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const GradeGraph = () => {
  return (
    <div className="bg-white flex items-center py-6 px-8 rounded-lg text-gray-500">
      <div className="w-full">
        {/* Top title section */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-bold text-xl text-blue-900 ">Semester's Grade</h3>

          {/* Icon section */}
          <div className="flex items-start gap-2 me-10 text-xl child:border child:p-1 child:rounded-lg child:cursor-pointer child-hover:text-purple-800 child-hover:border-purple-800 child:transition">
            <div>
              <IoIosArrowBack />
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* Bar chart section */}
        <BarChart />
      </div>

      {/* Right side summary section */}
      <GraphSummary />
    </div>
  );
};

export default GradeGraph;
