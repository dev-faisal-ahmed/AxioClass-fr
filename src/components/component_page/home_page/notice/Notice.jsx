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
    color = "#0067FF";
  } else if (category === "academic-holiday") {
    color = "#CE76FE";
  } else if (category === "financial") {
    color = "#fe797a";
  }

  return (
    <section style={{ backgroundColor: color }} className="notice">
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
