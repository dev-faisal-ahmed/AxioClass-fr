import React from 'react';
import FindTeacher from './FindTeacher';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';

const TeacherData = () => {
  return (
    <div className='flex justify-between items-center bg-white rounded-lg p-4 shadow-md'>
      <div>
        <FindTeacher/>
      </div>
      <div>
        <Link className='border border-green-400 bg-green-200/20 hover:bg-green-200/80 animation text-green-600 font-medium rounded-md p-2 gap-2 flex items-center' to={"/add-teacher"}> <span className='text-xl'><AiOutlineUserAdd/></span> <span>Add Teacher</span> </Link>
      </div>
    </div>
  );
};

export default TeacherData;