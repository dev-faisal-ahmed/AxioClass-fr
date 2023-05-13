import React from 'react';

const BarLine = ({ data }) => {
  const style = { height: `${(data / 4) * 100}%` };
  console.log(style);
  return (
    <div className="group 2xl:w-7 xl:w-6 lg:w-5 md:w-4 w-3 relative rounded-full h-full bg-primary-100 flex justify-center items-end">
      {/* Tooltip on hover */}
      <div className="absolute -top-12 px-3 py-2 text-sm bg-primary-600 rounded-lg text-white hidden group-hover:block">
        {data.toFixed(2)}
        <div className="w-4 h-4 bg-primary-600 rounded absolute -bottom-1 -z-10 rotate-45 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Inner filled bar */}
      <div
        style={style}
        className={`bg-primary-600 w-full rounded-full `}
      ></div>
    </div>
  );
};

export default BarLine;
