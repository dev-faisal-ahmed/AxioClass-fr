import React from 'react';

const TopBarMiddle = ({ pageName }) => {
  // detecting scroll
  return (
    <div className={`py-5 px-8`}>
      <h1 className="text-2xl font-semibold mb-2 text-primary-900">
        {pageName}
      </h1>
    </div>
  );
};
export default TopBarMiddle;
