import React from "react";
import cgpa from "./cgpa.css";
import ColorMarking from "./colorMarking/ColorMarking";

const Cgpa = () => {
  const fkData = [
    {
      semester: 1,
      sgpa: 3.5,
      cgpa: 3.5,
    },
    {
      semester: 2,
      sgpa: 2.5,
      cgpa: 3.3,
    },
    {
      semester: 3,
      sgpa: 2.7,
      cgpa: 3.2,
    },
    {
      semester: 4,
      sgpa: 4,
      cgpa: 3.7,
    },
    {
      semester: 5,
      sgpa: 2.3,
      cgpa: 3.6,
    },
    {
      semester: 6,
      sgpa: 2,
      cgpa: 3.3,
    },
  ];
  return (
    <div className="cgpa_body w_full flex mt-20">
      <div className="w_full">
        <div className="title">
          <h3>Your CGPA record</h3>
        </div>
        <div className="cgpa_container flex">
          <div className="cgpa_lvl flex flex_col h_full">
            <h5>4</h5>
            <h5>3</h5>
            <h5>2</h5>
            <h5>1</h5>
            <h5>0</h5>
          </div>
          <div className="cgpa_container flex w_full">
            {fkData.map((item, index) => (
              <div key={index} className="cgpa_parent_div h_full flex flex_col">
                <div className="cgpa_parent_div h_full flex">
                  {/* cgpa */}
                  <div className="cgpa_div h_full flex flex_col_r">
                    <div
                      style={{ height: `${(item.cgpa / 4) * 100}%` }}
                      className="w_full cgpa"
                    ></div>
                  </div>
                  {/* sgpa */}
                  <div className="cgpa_div h_full flex flex_col_r">
                    <div
                      style={{ height: `${(item.sgpa / 4) * 100}%` }}
                      className="w_full sgpa"
                    ></div>
                  </div>
                </div>
                <div>sem{item.semester}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ColorMarking item={fkData[fkData.length - 1]} />
    </div>
  );
};

export default Cgpa;
