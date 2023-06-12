import React from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { HorizontalLine } from "../../shared/UIHelper";

const PaymentSlip = () => {
  const textContainer = (title, value) => {
    return (
      <p className="flex gap-5 justify-between">
        <span className="text-gray-500">{title}</span>{" "}
        <span className="font-semibold">{value}</span>
      </p>
    );
  };
  return (
    <section id="payment-slip" className="mx-auto w-[400px] bg-white py-8 rounded-xl text-center">
      <h2 className="font-semibold">Payment Details</h2>
      <div className="p-3 rounded-full bg-green-500 w-fit text-white mx-auto mt-10">
        <MdOutlineDownloadDone size={40} />
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">1500&#2547;</h1>
      </div>
      <HorizontalLine className={"bg-gray-300 h-[1px] my-5"} />
      <div className="flex flex-col gap-2 px-8">
        {textContainer("Name", "Faisal Ahmed")}
        {textContainer("Dept", "CSE")}
        {textContainer("Intake", "44")}
        {textContainer("ID", "CSE-44-001")}
        {textContainer("Date", "14 Jan 2022")}
      </div>
    </section>
  );
};

export default PaymentSlip;
