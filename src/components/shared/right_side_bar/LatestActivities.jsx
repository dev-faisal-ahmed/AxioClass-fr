import React from 'react';
import ActivityCard from './ActivityCard';
import { activityData } from '../../../fake_data/activityData';
import ActionButton from './ActionButton';

const LatestActivities = () => {
  const activeDate = activityData[0].date;
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-900 mt-5 mb-8 capitalize text-center">
        Latest Activities
      </h1>
      <h4 className="text-sm text-gray-600 mb-3">{activeDate}</h4>
      {activityData.map((data, index) => (
        <ActivityCard
          activity={data.activity}
          data={data.data}
          serial={index + 1}
          time={data.time}
        />
      ))}
    </div>
  );
};

export default LatestActivities;
