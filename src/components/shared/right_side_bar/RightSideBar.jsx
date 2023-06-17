import React from 'react';
import ActionButton from './ActionButton';
import ActionPanel from './ActionPanel';
import LatestActivities from './LatestActivities';

const RightSideBar = () => {
  return (
    <>
      <ActionPanel />
      <LatestActivities />
    </>
  );
};

export default RightSideBar;
