import React from 'react';
import GradeGraph from '../../components/page_components/dashboard/grade_graph/GradeGraph';
import MyClasses from '../../components/page_components/dashboard/my_classes/MyClasses';

const Dashboard = () => {
  return (
    <div>
      <GradeGraph />
      <MyClasses />
    </div>
  );
};

export default Dashboard;
