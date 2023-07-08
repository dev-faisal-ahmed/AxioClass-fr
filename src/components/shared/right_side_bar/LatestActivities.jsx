import React, { useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';
import { activityData } from '../../../fake_data/activityData';
import ActionButton from './ActionButton';
import { serverAddress } from '../../../data/serverAddress';

const LatestActivities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const url = `${serverAddress}/activities`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.okay) setActivities(res.data);
        else {
          toast.error(res.msg, toastConfig);
        }
      });
  }, []);
  const activeDate = activityData[0].date;
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-900 mt-5 mb-8 capitalize text-center">
        Latest Activities
      </h1>
      <h4 className="text-sm text-gray-600 mb-3">{activeDate}</h4>
      <div className="grid grid-cols-[1fr_auto] gap-y-4 items-start mb-5 w-full overflow-x-hidden">
        {activities.map((data, index) => (
          <ActivityCard
            key={index}
            activity={data.activity}
            data={data.data}
            serial={index + 1}
            time={data.time}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestActivities;
