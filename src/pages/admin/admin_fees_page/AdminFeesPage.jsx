import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import AdminFeesStat from "../../../components/page_components/admin_fees/AdminFeesStat";
import AdminFeesForm from "../../../components/page_components/admin_fees/AdminFeesForm";
import AdminStudentFeesInfo from "../../../components/page_components/admin_fees/AdminStudentFeesInfo";
import AdminFeesHistory from "../../../components/page_components/admin_fees/AdminFeesHistory";

const AdminFeesPage = () => {
  const [studentInfo, setStudentInfo] = useState({});

  return (
    <AdminLayout pageName={"Fees"}>
      <>
        <section className="grid grid-cols-4 gap-8">
          <AdminFeesStat />
          <AdminFeesForm setStudentInfo={setStudentInfo} />
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
        <AdminFeesHistory />
      </>
    </AdminLayout>
  );
};

export default AdminFeesPage;
