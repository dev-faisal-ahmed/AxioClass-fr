import React from 'react';

const SummaryInfo = ({ icon, title, data, color }) => {
  return (
    <div className="flex items-center gap-4 mt-5 whitespace-nowrap ps-3 pe-5">
      {/* Left side Icon */}
      <div
        className={
          'text-lg rounded-lg p-2 ' +
          (color == 'red'
            ? 'text-red-500 bg-red-100'
            : color == 'yellow'
            ? 'text-yellow-500 bg-yellow-100'
            : 'text-blue-500 bg-blue-100')
        }
      >
        {icon}
      </div>
      {/* Right side Content */}
      <div>
        <h2 className="font-bold text-blue-900">{data}</h2>
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
};

export default SummaryInfo;
