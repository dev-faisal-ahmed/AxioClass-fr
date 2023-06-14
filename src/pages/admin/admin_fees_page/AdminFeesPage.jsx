import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import AdminFeesStat from "../../../components/page_components/admin_fees/AdminFeesStat";
import AdminFeesForm from "../../../components/page_components/admin_fees/AdminFeesForm";
import AdminStudentFeesInfo from "../../../components/page_components/admin_fees/AdminStudentFeesInfo";
import PaymentSlip from "../../../components/page_components/admin_fees/PaymentSlip";
import { Margin } from "../../../components/shared/UIHelper";
import { dateToStr } from "../../../utils/helper";

const AdminFeesPage = () => {
  const [studentInfo, setStudentInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  return (
    <AdminLayout pageName={"Fees"}>
      <>
        <section className="grid grid-cols-4 gap-8">
          <AdminFeesStat />
          <AdminFeesForm setStudentInfo={setStudentInfo} setPaymentInfo={setPaymentInfo} />
        </section>

        {/* student fess info */}
        {Object.keys(studentInfo).length !== 0 && (
          <AdminStudentFeesInfo
            img={studentInfo.image}
            dept={studentInfo.dept}
            intake={studentInfo.intake}
            id={studentInfo.id}
            paid={studentInfo.paid}
            demand={studentInfo.demand}
            waiver={studentInfo.waiver}
            due={studentInfo.due}
          />
        )}

        {/* payment slip */}
        {Object.keys(paymentInfo).length !== 0 && (
          <>
            <Margin className={"mt-8"} />
            <section className="bg-white rounded-xl w-fit mx-auto pb-5">
              <PaymentSlip
                name={paymentInfo.name}
                id={paymentInfo.id}
                intake={paymentInfo.intake}
                dept={paymentInfo.dept}
                amount={paymentInfo.amount}
                date={paymentInfo.date.toLocaleString("iso")}
              />
            </section>
          </>
        )}
      </>
    </AdminLayout>
  );
};

export default AdminFeesPage;
