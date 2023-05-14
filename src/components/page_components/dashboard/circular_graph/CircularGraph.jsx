import React from 'react';
import { Link } from 'react-router-dom';

const CircularGraph = () => {
  const style = {
    backgroundImage:
      'conic-gradient(#6c4cdf 90deg, #DF4C76 90deg, #DF4C76 180deg, #eff0fe 0deg)',
  };
  return (
    <div className="bg-white p-7 w-fit rounded-xl text-sm text-gray-600">
      <div className="flex items-center justify-between gap-10 mb-5">
        <h2 className="text-xl text-primary-900 font-bold whitespace-nowrap">
          Semester Fee
        </h2>
        <Link to="/" className="text-sm">
          More
        </Link>
      </div>

      {/* Graph */}
      <div style={style} className="relative rounded-full h-36 w-36 mx-auto">
        <div className="w-20 h-20 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center ">
          <p className="text-xl font-bold text-primary-900">50%</p>
          <p className="font-bold text-primary-900">Due</p>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex items-center gap-2 mt-5 pb-2 border-b border-gray-100">
        <div className="h-4 w-4 bg-primary-600 rounded"></div>
        <p>Total paid: </p>
        <p className="ms-auto">12500/=</p>
      </div>
      <div className="flex items-center gap-2 mt-2 pb-2 border-b border-gray-100">
        <div className="h-4 w-4 bg-[#DF4C76] rounded"></div>
        <p>Total waiver: </p>
        <p className="ms-auto">8500/=</p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="h-4 w-4 bg-primary-100 rounded"></div>
        <p>Total due: </p>
        <p className="ms-auto">35500/=</p>
      </div>
    </div>
  );
};

export default CircularGraph;
