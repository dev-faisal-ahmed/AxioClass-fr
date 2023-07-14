import React from 'react';
import { classesData } from '../../../fake_data/classesData';
import MiniClassCard from './MiniClassCard';

const ClassesSec = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-between'>
      {
        classesData.map((item,index)=><MiniClassCard key={index} item={item} />)
      }
    </div>
  );
};

export default ClassesSec;