import React from "react";
import "./notice.css";
import { HiAcademicCap } from "react-icons/hi";
import { BsFillCreditCardFill } from "react-icons/bs";

export const Notice = ({ title, description, category }) => {
  let icon;
  let color;

  if (category.includes("academic")) {
    icon = <HiAcademicCap size={25} />;
  } else if (category === "financial") {
    icon = <BsFillCreditCardFill size={20} />;
  }

  if (category === "academic-exam") {
    color = "#1762d3";
  } else if (category === "academic-holiday") {
    color = "#ba60eb";
  } else if (category === "financial") {
    color = "#db4d4d";
  }

  return (
    <section style={{ backgroundColor: color }} className="notice shadow-1">
      <div className="notice__top">
        {icon}
        <h3>{title}</h3>
      </div>
      <p className="text-justify">
        {description.length > 80 ? description.slice(0, 80) + " ..." : description}{" "}
        {description.length > 80 ? <span className="font-semibold"> See more</span> : ""}
      </p>
    </section>
  );
};
