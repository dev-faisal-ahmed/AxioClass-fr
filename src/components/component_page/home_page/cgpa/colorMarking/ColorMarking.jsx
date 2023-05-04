import React from "react";
import { BiFile } from "react-icons/bi";
import calorMarking from "./colorMarking.css";

const ColorMarking = ({ item }) => {
  return (
    <div className="color_body">
      <div className="black_text">
        <h3>summery</h3>
      </div>
      <div className="color_container h_full flex flex_col">
        <div className="color_div flex">
          <div className="cgpa_color"></div>
          <div className="flex flex_col">
            <span className="black_text">{item.cgpa}</span>
            <h6>CGPA</h6>
          </div>
        </div>
        <div className="color_div flex">
          <div className="sgpa_color"></div>
          <div className="flex flex_col">
            <span className="black_text">{item.sgpa}</span>
            <h6>Last SGPA</h6>
          </div>
        </div>
        <div className="color_div flex">
          <span>
            <BiFile size={25} />
          </span>
          <div className="flex flex_col">
            <span className="black_text">100</span>
            <h6>Total credit</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorMarking;
