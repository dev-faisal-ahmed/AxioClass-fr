export const feesAndWaiverCard = ({ semName, demand, waiver, paid, due, index }) => {
  let bgColor;
  let fontColor;
  let colorRows;

  if (index === 0) {
    bgColor = "#1762d3";
    fontColor = "white";
  } else {
    bgColor = "white";
    colorRows = "#444";
  }

  return (
    <div
      key={index}
      style={{ backgroundColor: bgColor, color: fontColor }}
      className="feesAndWaiverPage__card shadow-1"
    >
      <h3 className="feesAndWaiverPage__title">{semName}</h3>
      <p style={{ color: colorRows }} className="feesAndWaiverPage__card--row">
        Demand
        <span className="feesAndWaiverPage__card--amount">{demand} &#2547;</span>
      </p>
      <p style={{ color: colorRows }} className="feesAndWaiverPage__card--row">
        Waiver
        <span className="feesAndWaiverPage__card--amount">{waiver} &#2547;</span>
      </p>
      <p style={{ color: colorRows }} className="feesAndWaiverPage__card--row">
        Paid
        <span className="feesAndWaiverPage__card--amount">{paid} &#2547;</span>
      </p>
      <p style={{ color: colorRows }} className="feesAndWaiverPage__card--row">
        Due
        <span className="feesAndWaiverPage__card--amount">{due} &#2547;</span>
      </p>
    </div>
  );
};

// * summary box * //
import { MdOutlineArrowForwardIos } from "react-icons/md";
export const summaryBox = ({ title, icon, amount, bgColor, fontColor, primary }) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: fontColor }}
      className="feesSummary__box shadow-1"
    >
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
