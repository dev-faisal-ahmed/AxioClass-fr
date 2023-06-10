import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import AdminFeesStat from "../../../components/page_components/admin_fees/AdminFeesStat";
import AdminFeesForm from "../../../components/page_components/admin_fees/AdminFeesForm";
import AdminStudentFeesInfo from "../../../components/page_components/admin_fees/AdminStudentFeesInfo";
import JsPDF from "jspdf";
import PaymentSlip from "../../../components/page_components/admin_fees/PaymentSlip";
import { Margin } from "../../../components/shared/UIHelper";

const AdminFeesPage = () => {
  const [studentInfo, setStudentInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const downloadFile = () => {
    const pdf = new JsPDF("portrait", "pt", "a4");
    pdf.html(document.getElementById("payment-slip")).then(() => pdf.save("pdf"));
  };

  return (
    <AdminLayout pageName={"Fees"}>
      <>
        <section className="grid grid-cols-4 gap-8">
          <AdminFeesStat />
          <AdminFeesForm setStudentInfo={setStudentInfo} />
        </section>

        {/* payment slip */}

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
        <Margin className={"mt-5"} />
        <section className="bg-white rounded-xl w-fit mx-auto pb-5">
          <PaymentSlip />
          <button
            className="py-2 px-8 bg-primary-600 text-white mx-auto block rounded-lg"
            onClick={downloadFile}
          >
            Download
          </button>
        </section>
      </>
    </AdminLayout>
  );
};

export default AdminFeesPage;
