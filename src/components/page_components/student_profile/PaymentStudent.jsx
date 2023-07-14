import React, { useContext, useState } from "react";
import useGetStudent from "../../../hooks/students/useGetStudent";
import { studentIdContext } from "../../../context_api/StudentIdProvider";
import { serverAddress } from "../../../data/serverAddress";
import { postReq } from "../../../utils/postReq";
import PaymentSlip from "../../shared/PaymentSlip";
import { IoWalletSharp } from "react-icons/io5";

const PaymentStudent = () => {
  const { studentId } = useContext(studentIdContext);
  const { refetch } = useGetStudent(studentId);
  const [paymentInfo, setPaymentInfo] = useState({});
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = event.target.amount.value;
    amount = +amount; // converting amount as number
    if (amount == 0) return;
    if (amount < 0) amount *= -1;

    // api calling
    const url = `${serverAddress}/payment`;
    fetch(url, postReq({ id: studentId, amount }))
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setPaymentInfo(res.data);
          setPaymentCompleted(true);
          refetch();
        } else {
          toast.error(res.msg, toastConfig);
        }
      });
  };

  return (
    <>
      {paymentCompleted ? (
        Object.keys(paymentInfo).length !== 0 && (
          <PaymentSlip
            amount={paymentInfo.amount}
            date={paymentInfo.date}
            dept={paymentInfo.dept}
            id={paymentInfo.id}
            intake={paymentCompleted.intake}
            name={paymentInfo.name}
            trxId={paymentInfo.trxId}
          />
        )
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="center--y gap-5 border px-5 py-1 rounded-md">
            <label className="border-r pr-5" htmlFor="amount">
              <IoWalletSharp size={20} />
            </label>
            <input
              id="amount"
              className="outline-none rounded-md w-[300px]"
              placeholder="How much do you want to pay?"
              type="number"
              name="amount"
            />
          </div>
          <button className="button-primary block mt-5 mx-auto py-1">Submit</button>
        </form>
      )}
    </>
  );
};

export default PaymentStudent;
