import React, { useState } from 'react';
import AdminLayout from '../../../layout/AdminLayout';
import ClassroomSearch from '../../../components/page_components/classroom/ClassroomSearch';
import ClassroomList from '../../../components/page_components/classroom/ClassroomList';
import { TbLayoutGridAdd } from 'react-icons/tb';

const Classroom = () => {
  const [classModal, setClassModal] = useState(false);
  const [clasrooms, setClassrooms] = useState([]);
  return (
    <AdminLayout pageName={'Classroom'}>
      <div>
        <div className="flex gap-5 justify-between items-center p-3 rounded-xl bg-white">
          <ClassroomSearch />
          <button
            onClick={() => {
              setClassModal(!classModal);
            }}
            className="hover:bg-primary-50 h-fit text-primary-700 px-3 py-2 rounded-lg font-semibold border border-primary-200 hover:border-primary-600 flex items-center gap-2 transition"
          >
            {' '}
            <TbLayoutGridAdd className="text-xl" />{' '}
            <span>Create Classroom</span>
          </button>
        </div>

        <ClassroomList />
      </div>
    </AdminLayout>
  );
};

export default Classroom;
