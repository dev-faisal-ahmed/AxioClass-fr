import React from 'react';
import { useNavigate } from 'react-router-dom';

const FindTeacher = () => {
  const navigate = useNavigate();

  const fetchTeacher = (e)=>{
    e.preventDefault();
    const form = e.target;
    const teacherId = form.teacherId.value;
    navigate(`/teacher-info/${teacherId}`);
    console.log(teacherId)
  }
  return (
    <form onSubmit={fetchTeacher} className='flex gap-2'>
      <input className='outline-none px-3 border rounded-lg border-primary-300 bg-primary-100/80' type="text" name="teacherId" id="teacherId" placeholder='CSE-44-001' />
      <button className='bg-orange-200/80 border border-orange-300 rounded-md p-2 text-orange-600 font-medium'>Fetch</button>
    </form>
  );
};

export default FindTeacher;