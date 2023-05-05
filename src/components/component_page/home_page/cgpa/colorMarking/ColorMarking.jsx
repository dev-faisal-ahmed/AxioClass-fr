import React from "react";
import { BiFile } from "react-icons/bi";
import calorMarking from "./colorMarking.css";

export const ColorMarking = ({ item }) => {
  return (
    <div className="color__body">
      <div className="color__black--text uppercase">
        <h3>summery</h3>
      </div>
      <div className="color__container h-full flex flex-col">
        <div className="color__div flex">
          <div className="cgpa__color"></div>
          <div className="flex flex-col">
            <span className="color__black--text">{item.cgpa}</span>
            <h6>CGPA</h6>
          </div>
        </div>
        <div className="color__div flex">
          <div className="sgpa__color"></div>
          <div className="flex flex-col">
            <span className="color__black--text">{item.sgpa}</span>
            <h6>Last SGPA</h6>
          </div>
        </div>
        <div className="color__div flex">
          <span>
            <BiFile size={25} />
          </span>
          <div className="flex flex-col">
            <span className="color__black--text">100</span>
            <h6>Total credit</h6>
          </div>
        </div>
      </div>
    </div>
  );
};