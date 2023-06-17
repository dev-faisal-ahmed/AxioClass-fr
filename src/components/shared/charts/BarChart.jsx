import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <div className="bg-white rounded-lg my-6 border border-primary-100 p-6">
      <h3 className="text-xl font-bold text-primary-900 mb-5 capitalize">
        Financial info
      </h3>
      <div></div>
      <Bar
        data={chartData}
        className="border border-primary-50 p-3 rounded-lg"
      />
    </div>
  );
};

export default BarChart;
