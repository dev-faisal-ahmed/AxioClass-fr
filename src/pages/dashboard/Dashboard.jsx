import React from 'react';
import GradeGraph from '../../components/page_components/dashboard/grade_graph/GradeGraph';
import MyClasses from '../../components/page_components/dashboard/my_classes/MyClasses';
import CircularGraph from '../../components/page_components/dashboard/circular_graph/CircularGraph';

const Dashboard = () => {
  return (
    <div>
      <div className='grid grid-cols-3 mb-5'>
        <CircularGraph />
      </div>

      <GradeGraph />
      <MyClasses />
    </div>
  );
};

export default Dashboard;
