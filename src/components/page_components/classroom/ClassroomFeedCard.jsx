import React from 'react';

const ClassroomFeedCard = () => {
  return (
    <div className='rounded-lg p-4 flex flex-col items-center bg-white shadow-sm'>
      '<div className='w-full flex gap-4'>
        <div style={{backgroundImage:`url(https://e0.pxfuel.com/wallpapers/392/773/desktop-wallpaper-deathpool-marvel-art-drawings-deadpool-artwork-polygon-art-deadpool-polygon.jpg)`}} className='w-12 h-12 border border-primary-500 bg-cover bg-center rounded-full'></div>
        <div>
          <div className='font-semibold'>Raisul</div>
          <div className='text-gray-500 text-sm'>7/9/2023</div>
        </div>
      </div>
      <div>
        <img className='max-h-[400px] max-w-[400px]' src="https://guruignou.com/wp-content/uploads/2022/10/6th-copy-scaled.webp" alt="" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias esse laudantium vitae, rerum impedit odio sed omnis quasi quia, eaque at velit nulla recusandae doloribus in beatae sunt expedita.
      </div>
    </div>
  );
};

export default ClassroomFeedCard;