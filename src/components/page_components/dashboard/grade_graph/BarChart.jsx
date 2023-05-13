import React from 'react';
import BarLine from './BarLine';

const BarChart = () => {
  return (
    <div className="text-gray-500 mx-5">
      <div className="flex h-[200px] relative">
        {/* Y-axis data template */}
        <div className="w-fit flex flex-col justify-between text-sm font-semibold py-3">
          <div>4</div>
          <div>3</div>
          <div>2</div>
          <div>1</div>
          <div>0</div>
        </div>

        {/* Main barlines that are placed upon the graph template */}
        <div className="w-full h-full absolute z-10 flex justify-between items-end px-16 py-5">
          <BarLine data={3.2} />
          <BarLine data={3.67} />
          <BarLine data={3.0} />
          <BarLine data={4.0} />
          <BarLine data={3.8} />
          <BarLine data={2.2} />
        </div>

        {/* Graph template made up with x-axis lines */}
        <div className="w-full child:h-px flex flex-col justify-between child:border child:border-gray-100 child:border-dashed p-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* X-axis data template */}
      <div className="h-fit flex justify-between child:px-2 mt-1 px-12 text-sm font-semibold whitespace-nowrap">
        <div>Sem 1</div>
        <div>Sem 2</div>
        <div>Sem 3</div>
        <div>Sem 4</div>
        <div>Sem 5</div>
        <div>Sem 6</div>
      </div>
    </div>
  );
};

export default BarChart;
