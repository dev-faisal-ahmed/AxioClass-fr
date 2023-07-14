import React from 'react';
import FindStudentsForm from './FindStudentsForm';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';

const StudentData = () => {
  return (
    <div className='flex justify-between items-center bg-white rounded-lg p-4 shadow-md'>
      <div>
        <FindStudentsForm/>
      </div>
      <div>
        <Link className='border border-green-400 bg-green-200/20 hover:bg-green-200/80 animation text-green-600 font-medium rounded-md p-2 gap-2 flex items-center' to={"/add-student"}> <span className='text-xl'><AiOutlineUserAdd/></span> <span>Add students</span> </Link>
      </div>
    </div>
  );
};

export default StudentData;