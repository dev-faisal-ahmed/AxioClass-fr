import React from "react";

const FeesGraph = () => {
  return (
    <section className="bg-white mt-5 rounded-lg p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p>
          <span className="bg-primary-50 mr-3 px-2 rounded-md text-xl font-semibold">{"<"}</span>
          <span className="bg-primary-50 px-2 rounded-md text-xl font-semibold">{">"}</span>
        </p>
      </div>
      <div>&nbsp;</div>
    </section>
  );
};

export default FeesGraph;
