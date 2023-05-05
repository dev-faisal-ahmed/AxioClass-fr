import React from "react";
import Nav from "../../shared/nav/Nav";
import "./feesAndWaiverPage.css";
import { feesDataSemWise } from "../../../fake_data/feesData";

export const FeesAndWaiverPage = () => {
  // ********** functions ********** \\
  const feesAndWaiverCard = ({ semName, demand, waiver, paid, due, index }) => {
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

  return (
    <section className="page-body">
      <Nav />
      <section className="feesAndWaiverPage mt-30">
        {feesDataSemWise.map((sem, index) =>
          feesAndWaiverCard({
            index,
            semName: sem.semName,
            demand: sem.demand,
            waiver: sem.waiver,
            paid: sem.paid,
            due: sem.due,
          })
        )}
      </section>
    </section>
  );
};
