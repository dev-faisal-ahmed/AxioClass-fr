import React from 'react';
import GlobalLayout from '../../layout/GlobalLayout';
import GradesTable from '../../components/page_components/grades/GradesTable';

const Grades = () => {
  return <GlobalLayout pageName={"Grades"} body={<GradesTable />} />;
};

export default Grades;
