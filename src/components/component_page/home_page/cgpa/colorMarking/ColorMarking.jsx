import React from "react";
import calorMarking from "./colorMarking.css";

const ColorMarking = () => {
  return (
    <div className="color_body">
      <h3>summery</h3>
      <div className="h_full flex flex_col">
      <div>
        <span></span>
        <span>CGPA</span>
      </div>
      <div>
        <span></span>
        <span>highest SGPA</span>
      </div>
      <div>
        <span></span>
        <span>Total credit</span>
      </div>
      </div>
    </div>
  );
};

export default ColorMarking;
