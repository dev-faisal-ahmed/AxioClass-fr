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
    <div className="cgpa__body w-full flex mt-30">
      <div className="w-full">
        <div className="cgpa__title">
          <h3>Your CGPA record</h3>
        </div>
        <div className="cgpa__container flex">
          <div className="cgpa__lvl flex flex-col h-full">
            <h5>4</h5>
            <h5>3</h5>
            <h5>2</h5>
            <h5>1</h5>
            <h5>0</h5>
          </div>
          <div className="cgpa__container flex w-full">
            {fkData.map((item, index) => (
              <div key={index} className="cgpa__parent__div h-full flex flex-col">
                <div className="cgpa__parent__div h-full flex">
                  {/* cgpa */}
                  <div className="cgpa__div h-full flex flex-col-reverse">
                    <div
                      style={{ height: `${(item.cgpa / 4) * 100}%` }}
                      className="w_full cgpa"
                    ></div>
                  </div>
                  {/* sgpa */}
                  <div className="cgpa__div h-full flex flex-col-reverse">
                    <div
                      style={{ height: `${(item.sgpa / 4) * 100}%` }}
                      className="w-full sgpa"
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
