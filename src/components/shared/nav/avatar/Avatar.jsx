import React from 'react';
import avatar from "./avatar.css"
import avaterImg from "./../../../../assets/avater.jpg"

export const Avatar = () => {
  return (
    <div className='avatar__body'>
      <img className='w-full avatar__img' src={avaterImg} alt="" />
    </div>
  );
};