import React, { useEffect, useState } from 'react';
import StatAdmin from '../../../components/page_components/admin_dashboard/StatAdmin';
import CourseTable from '../../../components/page_components/admin_dashboard/CourseTable';
import LineChart from '../../../components/shared/charts/LineChart';
import { student } from '../../../fake_data/Student';
import { feesForChart } from '../../../fake_data/feesData';
import BarChart from '../../../components/shared/charts/BarChart';
import { serverAddress } from '../../../data/serverAddress';
import { toast } from 'react-hot-toast';
import { toastConfig } from '../../../utils/toastConfig';

export const DashboardAdmin = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `${serverAddress}/dashboard`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) {
          setData(res.data);
        } else toast.error(res.msg, toastConfig);
      });
  }, []);
  const {
    totalCourses,
    totalDemand,
    totalRevenue,
    totalStudent,
    totalTeacher,
  } = data;
  const [feesData, setFeesData] = useState({
    labels: student.map((std) => std.semester),
    datasets: [
      {
        label: 'Demand',
        data: feesForChart.map((std) => std.demand),
        borderColor: '#8d85f4',
        backgroundColor: '#6c4cdf',
        borderRadius: 5,
      },
      {
        label: 'Received',
        data: feesForChart.map((std) => std.paid),
        borderColor: '#8d85f4',
        backgroundColor: '#c9cbfc',
        borderRadius: 5,
      },
    ],
  });
  const [studentData, setStudentData] = useState({
    labels: student.map((std) => std.semester),
    datasets: [
      {
        label: 'Students Gained',
        data: student.map((std) => std.noOfStudents),
        borderColor: '#8d85f4',
        backgroundColor: '#6c4cdf',
        fill: {
          target: 'origin',
          above: '#e1e3fe', // Area will be red above the origin
          below: '#6c4cdf', // And blue below the origin
        },
        tension: 0.3,
      },
    ],
  });

  return (
    <>
      <StatAdmin
        totalCourses={totalCourses}
        totalDemand={totalDemand}
        totalRevenue={totalRevenue}
        totalStudent={totalStudent}
        totalTeacher={totalTeacher}
      />
      <div className="grid grid-cols-2 gap-5">
        <LineChart chartData={studentData} />
        <BarChart chartData={feesData} />
      </div>
      <CourseTable />
    </>
  );
};
