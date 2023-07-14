import React, { useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';
import { activityData } from '../../../fake_data/activityData';
import ActionButton from './ActionButton';
import { serverAddress } from '../../../data/serverAddress';
import { useActivities } from '../../../hooks/activities/useActivities';

const LatestActivities = () => {
  const { activities } = useActivities();
  // const [activities, setActivities] = useState([]);

  // useEffect(() => {
  //   const url = `${serverAddress}/activities`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.okay) setActivities(res.data);
  //       else {
  //         toast.error(res.msg, toastConfig);
  //       }
  //     });
  // }, []);
  const activeDate = activityData[0].date;
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-primary-900 mt-5 mb-8 capitalize text-center">
        Latest Activities
      </h1>
      <h4 className="text-sm text-gray-600 mb-3">{activeDate}</h4>
      <div className="w-full grid grid-cols-4 gap-x-4 gap-y-4 mb-5">
        {activities?.data?.map((data, index) => (
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
