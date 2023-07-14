import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = ({ chartData }) => {
  return (
    <div className="bg-white rounded-lg my-6 border border-primary-100 p-6">
      <h3 className="text-xl font-bold text-primary-900 mb-5 capitalize">
        Student growth (Last 5 semesters)
      </h3>
      <Line
        data={chartData}
        className="border border-primary-50 p-3 rounded-lg"
      />
    </div>
  );
};

export default LineChart;
