import React from "react";

const TopBarMiddle = ({ pageName }) => {
  // detecting scroll
  return (
    <div className={`p-5`}>
      <h1 className="text-xl font-semibold mb-2">{pageName}</h1>
    </div>
  );
};
export default TopBarMiddle;
