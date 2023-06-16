import React, { useRef } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { HorizontalLine } from "../../shared/UIHelper";
import { useReactToPrint } from "react-to-print";

const PaymentSlip = ({ amount, name, id, dept, date, intake }) => {
  console.log(amount, date);
  // ref
  const printRef = useRef(null);
  // function
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Payment Slip",
  });
  // ui function
  const textContainer = (title, value) => {
    return (
      <p className="flex gap-5 justify-between">
        <span className="text-gray-500">{title}</span>{" "}
        <span className="font-semibold">{value}</span>
      </p>
    );
  };
  return (
    <>
      <section
        ref={printRef}
        id="payment-slip"
        className="mx-auto w-[400px] bg-white pt-8 rounded-xl text-center"
      >
        <h2 className="font-semibold">Payment Details</h2>
        <div className="p-3 rounded-full bg-green-500 w-fit text-white mx-auto mt-10">
          <MdOutlineDownloadDone size={40} />
        </div>
        <div className="mt-10">
          <h1 className="text-4xl font-semibold">{amount}&#2547;</h1>
        </div>
        <HorizontalLine className={"bg-gray-300 h-[1px] my-5"} />
        <div className="flex flex-col gap-2 px-8">
          {textContainer("Name", name)}
          {textContainer("Dept", dept)}
          {textContainer("Intake", intake)}
          {textContainer("ID", id)}
          {textContainer("Date", date)}
        </div>
      </section>
      <button onClick={handlePrint} className="button-primary mt-8 block">
        Download
      </button>
    </>
  );
};

export default PaymentSlip;
