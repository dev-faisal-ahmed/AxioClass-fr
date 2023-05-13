import React from 'react';
import { Link } from 'react-router-dom';

const CircularGraph = () => {
  const style = {
    backgroundImage: 'conic-gradient(#6c4cdf 90deg, #eff0fe 0deg)',
  };
  return (
    <div className="bg-white p-7 rounded-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl text-blue-900 font-bold">This semester</h2>
        <Link to="/" className="text-sm">
          More
        </Link>
      </div>

      {/* Graph */}
      <div style={style} className="relative rounded-full h-52 w-52 mx-auto">
        <div className="w-32 h-32 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center text-2xl font-bold text-blue-900">
          25%
        </div>
      </div>

      {/* Indicators */}
      <div className='flex items-center gap-2 mt-5 pb-2 border-b border-gray-100'>
        <div className='h-4 w-4 bg-primary-600 rounded'></div>
        <p>Total paid: </p>
        <p className='ms-auto'>12500/=</p>
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <div className='h-4 w-4 bg-primary-100 rounded'></div>
        <p>Total due: </p>
        <p className='ms-auto'>35500/=</p>
      </div>
    </div>
  );
};

export default CircularGraph;
