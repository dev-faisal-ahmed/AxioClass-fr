import React from "react";
import "./feesSummary.css";
import { BsCreditCard2BackFill } from "react-icons/bs";
import {
  MdOutlineArrowForwardIos,
  MdCreditScore,
  MdSchool,
  MdOutlineCreditCardOff,
} from "react-icons/md";
import { feesData } from "../../../../fake_data/feesData";

export const FeesSummary = () => {
  // total waiver, total fees, due, paid
  const summaryBox = ({ title, icon, amount, bgColor, fontColor, primary }) => {
    return (
      <div style={{ backgroundColor: bgColor, color: fontColor }} className="feesSummary__box">
        <div className="">
          {icon}
          <h4 style={{ color: primary ? fontColor : "gray" }} className="feesSummary__title">
            {title}
          </h4>
          <h2>{amount} &#2547;</h2>
        </div>
        <MdOutlineArrowForwardIos size={25} className="cursor-pointer" />
      </div>
    );
  };

  const data = {
    "5 march 2023": [
      { title: "Mid Exam", category: "Exam" },
      { title: "Mid Exam", category: "Exam Dead" },
    ],
  };

  console.log(data["5 march 2023"]);

  return (
    <section className="feesSummary mt-30">
      {summaryBox({
        amount: feesData.demand,
        title: "Total Demand",
        icon: <BsCreditCard2BackFill size={30} style={{ color: "white" }} />,
        fontColor: "white",
        bgColor: "#fe797a",
        primary: true,
      })}
      {summaryBox({
        amount: feesData.paid,
        title: "Total Paid",
        icon: <MdCreditScore size={30} />,
        fontColor: "black",
        bgColor: "white",
      })}
      {summaryBox({
        amount: feesData.waiver,
        title: "Total Waiver",
        icon: <MdSchool size={30} />,
        fontColor: "black",
        bgColor: "white",
      })}
      {summaryBox({
        amount: feesData.due,
        title: "Total Due",
        icon: <MdOutlineCreditCardOff size={30} />,
        fontColor: "black",
        bgColor: "white",
      })}
    </section>
  );
};
