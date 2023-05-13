import React from 'react';

import {
  BsThreeDotsVertical,
  BsFillFileEarmarkBarGraphFill,
} from 'react-icons/bs';
import SummaryInfo from './SummaryInfo';

const GraphSummary = () => {
  return (
    <div className="bg-primary-50 w-fit p-6 rounded-lg">
      {/* Top title bar */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-blue-900">Summary</h1>
        <BsThreeDotsVertical className="text-lg" />
      </div>

      {/* Info  */}
      <div className="mt-5">
        <SummaryInfo
          icon={<BsFillFileEarmarkBarGraphFill />}
          title={'GPA'}
          data={3.79}
        />
        <SummaryInfo
          icon={<BsFillFileEarmarkBarGraphFill />}
          title={'Total Grade'}
          data={490}
          color={'red'}
        />
        <SummaryInfo
          icon={<BsFillFileEarmarkBarGraphFill />}
          title={'Total Credit'}
          data={137}
          color={'yellow'}
        />
      </div>
    </div>
  );
};

export default GraphSummary;
